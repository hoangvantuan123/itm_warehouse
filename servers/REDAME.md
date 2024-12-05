```
export const sqlServerITMV20240117: TypeOrmModuleOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: 'YourStrongPassword!',
  database: 'ITMV20240117',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
  cache: true,
  extra: {
    trustServerCertificate: true,
    encrypt: false,
    connectionTimeout: 5000,
    max: 100,
    min: 10,
    idleTimeoutMillis: 30000,
  },
  maxQueryExecutionTime: 1000
}


```



export const sqlServerITMV20240117: TypeOrmModuleOptions = {
  type: 'mssql',
  host: '192.168.35.150',
  port: 14233,
  username: 'genuine',
  password: 'Itmv209#',
  database: 'ITMV20240117',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
  cache: true,
  extra: {
    trustServerCertificate: true,
    encrypt: false,
    connectionTimeout: 5000,
    max: 100,
    min: 10,
    idleTimeoutMillis: 30000,
  },
  maxQueryExecutionTime: 1000
}
````



WITH GroupIDs AS (
    SELECT DISTINCT GroupId 
    FROM _TCARolesUsers_WEB 
    WHERE UserId = 'VM32402882'
)
SELECT 
    r.*,
    m.[Key] AS MenuKey,  -- from _TCAMenus_WEB
    m.Label AS MenuLabel,  
    m.Link AS MenuLink,
    m.Type AS MenuType,
 --------------------------------------------------------------
    rm.[Key] AS RootMenuKey,  -- from _TCARootMenus_WEB
    rm.Label AS RootMenuLabel,  
    rm.Icon AS RootMenuIcon, 
    rm.Link AS RootMenuLink, 
    rm.Utilities AS RootMenuUtilities  
FROM _TCARolesUsers_WEB r
LEFT JOIN _TCAMenus_WEB m 
    ON r.MenuId = m.Id AND r.Type = 'menu'
LEFT JOIN _TCARootMenus_WEB rm 
    ON r.RootMenuId = rm.Id AND r.Type = 'rootmenu'
WHERE r.GroupId IN (SELECT GroupId FROM GroupIDs)
AND r.Type IN ('rootmenu', 'menu');

````


 EXEC GetFilteredTCAUserWEB 
        @UserId = N'',
        @UserName = N'';





  /*Logic giao diện xuất kho NVL
- Khi bắn Scan QR Code Nguyên vật liệu có cú pháp sau  
1. MaterialCode/LotNo/Qty/DateCode/ReelNo  
2. MaterialCode/LotNo/Qty/DateCode  
=> Tách chuỗi trên thành các giá trị trong mảng MaterialCode,LotNo,Qty,DateCode,ReelNo Để truyền các giá trị này vào đoạn SP check bên dưới*/  
  
/*********************************************************************************************************************      
     Screen name : Stock in Waiting IQC  
     SP Name: _SMaterialQRStockOutCheck_WEB      
     Create date : 2024-11-26  
     Creator : TuanNN      
 ********************************************************************************************************************/      
 ALTER PROCEDURE [dbo].[_SMaterialQRStockOutCheck_WEB]        
     @xmlDocument    NVARCHAR(MAX),        
     @xmlFlags       INT = 0,        
     @ServiceSeq     INT = 0,        
     @WorkingTag     NVARCHAR(10)= '',  
     @CompanySeq     INT = 1,        
     @LanguageSeq    INT = 1,        
     @UserSeq        INT = 0,        
     @PgmSeq         INT = 0        
       
 AS          
  
     DECLARE @Count       INT,      
             @DataSeq     INT,      
             @BizUnit     INT,       
             @MessageType INT,      
             @Status      INT,      
             @Results     NVARCHAR(250)    ,  
             @MinorSeq    INT,   
             @TableSeq    INT,  
			 @StockOutDate NVARCHAR(8)

			 SELECT @StockOutDate = CONVERT(NVARCHAR(8),GETDATE(),112)
  

     -- 서비스 마스타 등록 생성        
     CREATE TABLE #TMaterialQR (WorkingTag NCHAR(1) NULL)        
     ExEC _SCAOpenXmlToTemp @xmlDocument, @xmlFlags, @CompanySeq, @ServiceSeq, 'DataBlock1', '#TMaterialQR'  
  
ALTER TABLE #TMaterialQR  
ADD StockOutDate NVARCHAR(8)  
ALTER TABLE #TMaterialQR  
ADD LotNoFull NVARCHAR(100)  

 ALTER TABLE #TMaterialQR  
 ADD  EmpSeq INT  

 UPDATE #TMaterialQR
 SET StockOutDate = @StockOutDate, LotNoFull = LotNo + '/' + DateCode + '/' + ReelNo, EmpSeq = (SELECT EmpSeq FROM _TCAUser where UserSeq = @UserSeq)
     -- Barcode Format Wrong!    
     IF EXISTS(SELECT * FROM #TMaterialQR WHERE (ISNULL(ItemNo,'') = '' OR ISNULL(LotNo,'') = '' OR ISNULL(Qty,0) = 0 OR ISNULL(DateCode,'') = '' OR ISNULL(ReelNo,'') = '' ))     
     BEGIN          
         UPDATE #TMaterialQR      
            SET Result        = 'Barcode Format Wrong!' ,      
                MessageType   = 1,      
                Status        = 1  
           FROM #TMaterialQR    
     SELECT * FROM #TMaterialQR  
     return  
     END    
    
  -- Barcode Label Changed
    IF EXISTS(SELECT A.* FROM _TPDBarcodeConfirm A  JOIN #TMaterialQR B ON  A.NewBarcodeID = B.Barcode AND A.NewStatus <> 'OK')     
     BEGIN    
        
         UPDATE #TMaterialQR      
            SET Result        = 'Material barcode changed, please confirm!',      
                MessageType   = 1,      
                Status        =  2   
           FROM #TMaterialQR    

     SELECT * FROM #TMaterialQR  
     return  
     END    
  
  -- Barcode Exists on Database  
  IF EXISTS(SELECT A.* FROM #TMaterialQR  A JOIN _TLGLotMaster B ON A.ItemSeq = B.ItemSeq AND A.LotNoFull = B.LotNo where Remark = 'HOLD')  
   BEGIN    
        
         UPDATE #TMaterialQR      
            SET Result        = 'Material barcode HOLD!'  ,      
                MessageType   = 1,      
                Status        = 3    
           FROM #TMaterialQR    
     SELECT * FROM #TMaterialQR  
     return  
     END    

IF NOT EXISTS(SELECT A.* FROM #TMaterialQR  R JOIN _TPDMMOutReqItem  A ON R.OutReqSeq =   A.OutReqSeq AND R.OutReqItemSerl = A.OutReqItemSerl AND R.ItemSeq = A.ItemSeq)                                                  
   BEGIN    
        
         UPDATE #TMaterialQR      
            SET Result        = 'Material Not Include Invoice List!' ,      
                MessageType   = 1,      
                Status        = 4     
           FROM #TMaterialQR    
     SELECT * FROM #TMaterialQR  
     return  
     END  
  
IF EXISTS(SELECT A.* FROM #TMaterialQR  A WHERE ISNULL(InWHSeq,0) = 0 OR ISNULL(OutWHSeq,0) = 0)  
   BEGIN    
        
         UPDATE #TMaterialQR      
            SET Result        = 'Please check Warehouse Infomation!' ,      
                MessageType   = 1,      
                Status        = 5     
           FROM #TMaterialQR    
     SELECT * FROM #TMaterialQR  
     return  
     END  

IF EXISTS(SELECT A.* FROM #TMaterialQR  A JOIN _TLGLotMaster B ON A.ItemSeq = B.ItemSeq AND A.LotNoFull = B.LotNo where ValiDate < CONVERT(NVARCHAR(8), GETDATE(),112))  
   BEGIN    
        
         UPDATE #TMaterialQR      
            SET Result        = 'Material has expired!' ,      
                MessageType   = 1,      
                Status        = 6     
           FROM #TMaterialQR    
     SELECT * FROM #TMaterialQR  
     return  
     END  

DECLARE @vcEmpSeq INT,                        
        @vcFiFoLot NVARCHAR(80),                        
        @pQryType VARCHAR(1)  ,          
		@pOutDate NVARCHAR(8),          
		@pDateFr NVARCHAR(8),          
		@pFactUnit INT,
		@pBizUnit INT,
		@pOutWHSeq INT,
		@pItemSeq INT,          
		@pQty NUMERIC(19,5),          
        @pItemSerl INT,      
		@pItemNo NVARCHAR(100),
		@pLotno NVARCHAR(80)

 SELECT @pQty = A.Qty,
		@pOutDate = A.StockOutDate, 
		@pItemSeq = A.ItemSeq,
		@pFactUnit = A.FactUnit,
		@pBizUnit = B.BizUnit,
		@pOutWHSeq = A.OutWHSeq,
		@pItemNo = A.ItemNo,
		@pLotno = LotNoFull
		FROM  #TMaterialQR A 
		JOIN   _TDAFactUnit B ON A.FactUnit = B.FactUnit 
		
 SELECT  @pDateFr= LEFT(@pOutDate,6) + '01'                                           
                     
    --Check fifo                        
    CREATE TABLE #GetInOutLot                            
     (                              
         LotNo         NVARCHAR(30),                            
         ItemSeq       INT,                        
         ItemClassSSeq INT, ItemClassSName NVARCHAR(200),        -- 품목대중소분류, 2012.07.05 윤보라 추가                        
         ItemClassMSeq INT, ItemClassMName NVARCHAR(200),                          
         ItemClassLSeq INT, ItemClassLName NVARCHAR(200)                              
     )                              
                             
    CREATE TABLE #GetInOutLotStock                              
     (                              
         WHSeq           INT,                              
         FunctionWHSeq   INT,                              
         LotNo           NVARCHAR(30),                            
         ItemSeq         INT,                              
         UnitSeq         INT,                              
         PrevQty         DECIMAL(19,5),                              
         InQty           DECIMAL(19,5),                              
         OutQty          DECIMAL(19,5),                              
         StockQty        DECIMAL(19,5),                              
         STDPrevQty      DECIMAL(19,5),                              
         STDInQty        DECIMAL(19,5),                              
         STDOutQty       DECIMAL(19,5),                              
         STDStockQty     DECIMAL(19,5)                              
     )                             
     CREATE TABLE #FiFoLot(                        
        ItemSeq INT,                        
        LotNo NVARCHAR(30),                        
        ValiDate NCHAR(8)                        
    )          
          
 INSERT INTO #GetInOutLot                              
     SELECT DISTINCT A.LotNo, A.ItemSeq,                         
                     G.ItemClassSSeq, G.ItemClassSName,      -- 품목대중소분류 담기, 2012.07.05 윤보라 추가                             
                     G.ItemClassMSeq, G.ItemClassMName,                        
                     G.ItemClassLSeq, G.ItemClassLName                        
       FROM _TLGLotStock AS A WITH (NOLOCK)                              
            JOIN _TDAItem AS B WITH (NOLOCK) ON A.CompanySeq = B.CompanySeq                              
                                            AND A.ItemSeq    = B.ItemSeq                              
                JOIN _TDAItemSales AS C WITH (NOLOCK) ON B.CompanySeq = C.CompanySeq                              
                                                   AND B.ItemSeq    = C.ItemSeq                               
            JOIN _TDAItemStock AS D WITH (NOLOCK) ON B.CompanySeq = D.CompanySeq                        
                                                   AND  B.ItemSeq    = D.ItemSeq                        
            JOIN _TDAItemAsset AS E WITH (NOLOCK) ON B.CompanySeq = E.CompanySeq                          
                                    AND B.AssetSeq   = E.AssetSeq                         
              LEFT OUTER JOIN _TDAItemClass AS F WITH(NOLOCK) ON B.ItemSeq = F.ItemSeq                 -- 2012.07.05 윤보라 추가                        
                                                           AND F.UMajorItemClass IN (2001, 2004)                        
                                                           AND B.CompanySeq = F.CompanySeq                        
            LEFT OUTER JOIN _VDAItemClass AS G WITH(NOLOCK) ON F.CompanySeq = G.CompanySeq                        
                                                           AND F.UMItemClass = G.ItemClassSSeq                        
      WHERE A.CompanySeq = 1                        
       --AND  A.LotNo = @pLotno                        
        AND B.ItemNo = @pItemNo                                    
        AND D.IsLotMng = '1'                        
        AND E.IsQty <> '1'                           

          
      EXEC _SLGGetInOutLotStock   @CompanySeq   = 1,   -- 법인코드                              
          @BizUnit      = @pBizUnit,      -- 사업부문                              
          @FactUnit     = @pFactUnit,     -- 생산사업장                              
          @DateFr       = @pDateFr,       -- 조회기간Fr                              
          @DateTo       = @pOutDate,       -- 조회기간To                              
          @WHSeq        = @pOutWHSeq,        -- 창고지정                              
          @SMWHKind     = '',     -- 창고구분별 조회                              
          @CustSeq      = '',      -- 수탁거래처                              
          @IsTrustCust  = '',  -- 수탁여부                              
          @IsSubDisplay = '', -- 기능창고 조회                              
          @IsUnitQry    = 0,    -- 단위별 조회                              
          @QryType      = 'S'       -- 'S': 1007 실재고, 'B':1008 자산포함, 'A':1011 가용재고            
        
SELECT A.ItemSeq,A.LotNo, B.CreateDate AS WHDate INTO #FIFOList FROM #GetInOutLotStock A           
JOIN _TLGLotMaster B ON A.ItemSeq = B.ItemSeq AND A.LotNo = B.LotNo --GROUP BY A.LotNo, A.ItemSeq          
WHERE A.LotNo NOT IN (SELECT ItemLotNo FROM _TFIFOListTemp WHERE ItemSeq = @pItemSeq)          
AND A.StockQty >  0         
    
IF NOT EXISTS (SELECT * FROM #FIFOList where LotNo = @pLotno)          
BEGIN    
      UPDATE #TMaterialQR      
            SET Result        = 'OUT OF STOCK, Please check inventory!',      
                MessageType   = 1,      
                Status        = 7     
           FROM #TMaterialQR    
     SELECT * FROM #TMaterialQR  
     return 
END
	
SELECT ItemSeq, LotNo, WHDate AS WHDate INTO #FIFOList1 FROM #FIFOList WHERE WHDate = (SELECT MIN(WHDate) FROM #FIFOList)        


-- select * from _TFIFOListTemp_WEB  ItemSeq ItemLotNo 

IF EXISTS (SELECT * FROM #FIFOList1 where LotNo = @pLotno)          
BEGIN          
INSERT INTO _TFIFOListTemp_WEB          
SELECT * FROM #FIFOList where LotNo = @pLotno          
END           
ELSE
BEGIN
         UPDATE #TMaterialQR      
            SET Result        = 'FIFO Interlock! Please check LotNo: ' +  ISNULL((SELECT TOP 1 LotNo FROM #FIFOList1),''),      
                MessageType   = 1,      
                Status        = 8     
           FROM #TMaterialQR    
     SELECT * FROM #TMaterialQR  
     return  
END 
          
DROP TABLE #FIFOList1          
DROP TABLE #FIFOList

SELECT * FROM #TMaterialQR        
RETURN  

go

exec _SMaterialQRStockOutCheck_WEB @xmlDocument=N'<ROOT>
  <DataBlock1>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>1</IDX_NO>
    <Status>0</Status>
    <DataSeq>1</DataSeq>
    <Selected>1</Selected>
    <TABLE_NAME>DataBlock1</TABLE_NAME>
	<OutReqSeq>28714</OutReqSeq>
	<OutReqItemSerl>1</OutReqItemSerl>
	<WorkOrderSeq></WorkOrderSeq>
	<WorkOrderSerl></WorkOrderSerl>
    <FactUnit>3</FactUnit>
    <FactUnitName>ITM PSG (F3)</FactUnitName>
    <InWHSeq>343</InWHSeq>
    <InWHName>PSG Line New</InWHName>>
    <OutWHSeq>341</OutWHSeq>
	<OutWHName>PSG Line New</OutWHName>
	<ItemSeq>58570</ItemSeq>
	<UnitSeq>1</UnitSeq>
    <ItemNo>NIK0999</ItemNo>
    <LotNo>JY240927001011211</LotNo>
    <Qty>1000</Qty>
    <DateCode>2450</DateCode>
    <ReelNo>0955</ReelNo>
    <Barcode>NIK0999/JY240927001011211/1000/2453/0963</Barcode>
  </DataBlock1>
</ROOT>',@xmlFlags=2,@ServiceSeq=60010002,@WorkingTag=N'',@CompanySeq=1,@LanguageSeq=6,@UserSeq=3106,@PgmSeq=1036085



