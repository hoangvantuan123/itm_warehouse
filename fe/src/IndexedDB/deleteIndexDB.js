import { openDB, deleteDB } from 'idb'

export const deleteDatabase = async () => {
  try {
    await deleteDB('languageDatabase')
    console.log('Cơ sở dữ liệu đã được xóa thành công.')
  } catch (error) {
    console.error('Lỗi khi xóa cơ sở dữ liệu:', error)
  }
}
