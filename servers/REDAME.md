``` export const sqlServerITMV20240117: TypeOrmModuleOptions = {
  type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'tuanhoang',
      password: 'your_password',
      database: 'itmv20240117',
      synchronize: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      logging: ['query', 'error', 'schema'],

  
};```




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