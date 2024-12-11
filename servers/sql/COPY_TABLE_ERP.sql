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