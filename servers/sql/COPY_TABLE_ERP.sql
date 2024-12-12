SELECT COLUMN_NAME,
    DATA_TYPE,
    CHARACTER_MAXIMUM_LENGTH
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = '_TCADictionary_WEB';
INSERT INTO _TCADictionary_WEB (
        LanguageSeq,
        WordSeq,
        Word,
        WordSite,
        Description,
        LastUserSeq,
        LastDateTime,
        CompanySeq,
        PgmSeq
    )
SELECT LanguageSeq,
    WordSeq,
    Word,
    WordSite,
    Description,
    LastUserSeq,
    LastDateTime,
    CompanySeq,
    PgmSeq
FROM _TCADictionary;
INSERT INTO _TCALanguage_WEB (
        LanguageSeq,
        LanguageName,
        Remark,
        SortOrder,
        IsUse,
        FileName,
        LastUserSeq,
        LastDateTime,
        LanguageCode
    )
SELECT 
        LanguageSeq,
        LanguageName,
        Remark,
        SortOrder,
        IsUse,
        FileName,
        LastUserSeq,
        LastDateTime,
        LanguageCode
    
FROM _TCALanguage;




USE ITMV; 
GO
DROP TABLE dbo._TCAGroups_WEB;
GO
SELECT *
INTO dbo._TCAGroups_WEB 
FROM ITMV20240117.dbo._TCAGroups_WEB;


		UPDATE _TCAUser_WEB
SET UserSeq = 17667
WHERE UserId = 'VM32402882';

UPDATE _TCAUser_WEB SET UserId = 'VM32402882'  WHERE Password2 = '$2b$10$C2VzcrN3JQ5HNVKU4lz4FueFSZLfolyjGgQ017jtxRzqy77j0CoN6';

UPDATE _TCAUser_WEB
SET Password2 = '$2b$10$C2VzcrN3JQ5HNVKU4lz4FueFSZLfolyjGgQ017jtxRzqy77j0CoN6';