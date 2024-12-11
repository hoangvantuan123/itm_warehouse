// src/IndexedDB/loadLanguageData.js
import {
    openDB
} from 'idb';

export const loadLanguageData = async () => {
    const db = await openDB('languageDatabase', 1);
    const languagesStore = db.transaction('languages', 'readonly').objectStore('languages');

    const allData = await languagesStore.getAll();

    // Trả về một object có cấu trúc tương tự như resources của i18next
    const resources = {};

    allData.forEach(item => {
        resources[item.typeLanguage] = {
            translation: item.languageData
        };
    });
    console('resources', resources)
    return resources;
};