import { openDB } from 'idb'

export const saveLanguageData = async (languageData) => {
  try {
    const db = await openDB('languageDatabase', 1, {
      upgrade(db, oldVersion, newVersion) {
        if (oldVersion < 1) {
          db.createObjectStore('languages', {
            keyPath: 'typeLanguage',
          })
        }
      },
    })
    const tx = db.transaction('languages', 'readwrite')
    const store = tx.objectStore('languages')

    const existingRecord = await store.get(languageData.typeLanguage)

    if (existingRecord) {
      await store.put(languageData)
    } else {
      await store.add(languageData)
    }

    await tx.done
    return true
  } catch (error) {
    console.error('Error saving language data:', error)
    return false
  }
}
