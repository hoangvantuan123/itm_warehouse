import {
    openDB
} from 'idb';

export const saveLanguageData = async (languageData) => {
    const db = await openDB('languageDatabase', 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains('languages')) {
                db.createObjectStore('languages', {
                    keyPath: 'typeLanguage'
                });
            }
        },
    });
    await db.put('languages', languageData);
};