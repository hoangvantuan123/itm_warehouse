import { openDB, deleteDB } from 'idb'

export const deleteDatabase = async () => {
  try {
    await deleteDB('languageDatabase')
  } catch (error) {
    console.error('Lỗi khi xóa cơ sở dữ liệu:', error)
  }
}
