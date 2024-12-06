EXEC _SCOMCloseCheck_WEB
@xmlDocument = N'<ROOT>
<DataBlock1>
<WorkingTag>A</WorkingTag>
<IDX_NO>1</IDX_NO>
<Status>0</Status>
<DataSeq>1</DataSeq>
<Selected>1</Selected>
<TABLE_NAME>DataBlock1</TABLE_NAME>
<IsChangedMst>1</IsChangedMst>
<FactUnit>3</FactUnit>
<Date>20241206</Date>
<ServiceSeq>3032</ServiceSeq>
<MethodSeq>2</MethodSeq>
<DtlUnitSeq>1</DtlUnitSeq>
</DataBlock1>
</ROOT>',
@xmlFlags = 2,
@ServiceSeq = 2639,
@WorkingTag = N'',
@CompanySeq = 1,
@LanguageSeq = 6,
@UserSeq = 18770,
@PgmSeq = 1036085;


EXEC _SCOMCloseItemCheck_WEB
@xmlDocument = N'<ROOT>
<DataBlock2>
<WorkingTag>A</WorkingTag>
<IDX_NO>1</IDX_NO>
<DataSeq>1</DataSeq>
<Status>0</Status>
<Selected>0</Selected>
<ItemSeq>58570</ItemSeq>
<FactUnit>3</FactUnit>
<TABLE_NAME>DataBlock2</TABLE_NAME>
<FactUnitOld>1</FactUnitOld>
<DateOld>20241206</DateOld>
<ServiceSeq>3032</ServiceSeq>
<MethodSeq>2</MethodSeq>
<Date>20241206</Date>
</DataBlock2>


<DataBlock2>
<WorkingTag>A</WorkingTag>
<IDX_NO>2</IDX_NO>
<DataSeq>2</DataSeq>
<Status>0</Status>
<Selected>0</Selected>
<ItemSeq>58570</ItemSeq>
<FactUnit>3</FactUnit>
<TABLE_NAME>DataBlock2</TABLE_NAME>
<FactUnitOld>1</FactUnitOld>
<DateOld>20241206</DateOld>
<ServiceSeq>3032</ServiceSeq>
<MethodSeq>2</MethodSeq>
<Date>20241206</Date>
</DataBlock2>
</ROOT>',
@xmlFlags = 2,
@ServiceSeq = 2639,
@WorkingTag = N'',
@CompanySeq = 1,
@LanguageSeq = 6,
@UserSeq = 18770,
@PgmSeq = 1036085;


EXEC _SPDMMOutProcCheck_WEB
@xmlDocument = N'<ROOT>
<DataBlock1>
<WorkingTag>A</WorkingTag>
<IDX_NO>1</IDX_NO>
<Status>0</Status>
<DataSeq>1</DataSeq>
<Selected>1</Selected>
<TABLE_NAME>DataBlock1</TABLE_NAME>
<IsChangedMst>1</IsChangedMst>
<UseType>6044001</UseType>
<IsOutSide>0</IsOutSide>
<OutWHSeq />
<InWHSeq>343</InWHSeq>
<MatOutSeq>0</MatOutSeq>
<FactUnit>3</FactUnit>
<MatOutNo />
<MatOutDate>20241206</MatOutDate>
<EmpSeq>0</EmpSeq>
<MatOutType />
<Remark />
</DataBlock1>
</ROOT>',
@xmlFlags = 2,
@ServiceSeq = 3033,
@WorkingTag = N'',
@CompanySeq = 1,
@LanguageSeq = 6,
@UserSeq = 18770,
@PgmSeq = 1036085;


EXEC _SPDMMOutProcItemCheck_WEB
@xmlDocument = N'<ROOT>
<DataBlock3>
<WorkingTag>A</WorkingTag>
<IDX_NO>1</IDX_NO>
<DataSeq>1</DataSeq>
<Status>0</Status>
<Selected>0</Selected>
<ReqQty>10000</ReqQty>
<Qty>1000</Qty>
<StdUnitQty>0</StdUnitQty>
<Remark />
<ItemLotNo>JY240927001011211/2450/0957</ItemLotNo>
<SerialNoFrom />
<MatOutSeq>37798</MatOutSeq>
<OutItemSerl>0</OutItemSerl>
<ItemSeq>58570</ItemSeq>
<OutWHSeq>341</OutWHSeq>
<InWHSeq>343</InWHSeq>
<UnitSeq>1</UnitSeq>
<WorkOrderSeq>1119066</WorkOrderSeq>
<ConsgnmtCustSeq>0</ConsgnmtCustSeq>
<OutReqSeq>28714</OutReqSeq>
<OutReqItemSerl>1</OutReqItemSerl>
<PJTSeq>0</PJTSeq>
<WBSSeq>0</WBSSeq>
<WorkOrderSerl>1119066</WorkOrderSerl>
<AlterRate>0</AlterRate>
<TABLE_NAME>DataBlock3</TABLE_NAME>
</DataBlock3>


<DataBlock3>
<WorkingTag>A</WorkingTag>
<IDX_NO>2</IDX_NO>
<DataSeq>2</DataSeq>
<Status>0</Status>
<Selected>0</Selected>
<ReqQty>10000</ReqQty>
<Qty>1000</Qty>
<StdUnitQty>0</StdUnitQty>
<Remark />
<ItemLotNo>JY240927001011211/2450/0956</ItemLotNo>
<SerialNoFrom />
<MatOutSeq>37798</MatOutSeq>
<OutItemSerl>0</OutItemSerl>
<ItemSeq>58570</ItemSeq>
<OutWHSeq>341</OutWHSeq>
<InWHSeq>343</InWHSeq>
<UnitSeq>1</UnitSeq>
<WorkOrderSeq>1119066</WorkOrderSeq>
<ConsgnmtCustSeq>0</ConsgnmtCustSeq>
<OutReqSeq>28714</OutReqSeq>
<OutReqItemSerl>1</OutReqItemSerl>
<PJTSeq>0</PJTSeq>
<WBSSeq>0</WBSSeq>
<WorkOrderSerl>1119066</WorkOrderSerl>
<AlterRate>0</AlterRate>
<TABLE_NAME>DataBlock3</TABLE_NAME>
</DataBlock3>
</ROOT>',
@xmlFlags = 2,
@ServiceSeq = 3033,
@WorkingTag = N'',
@CompanySeq = 1,
@LanguageSeq = 6,
@UserSeq = 18770,
@PgmSeq = 1036085;
