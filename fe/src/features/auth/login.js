import { HOST_API_SERVER_2 } from '../../services'
import { saveLanguageData } from '../../IndexedDB/saveLanguageData'

export const LoginAuth = async ({ login, password }) => {
  try {
    const response = await fetch(`${HOST_API_SERVER_2}/acc/p2/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        password,
      }),
      credentials: 'same-origin',
    })

    const data = await response.json()

    if (data.success) {
      const saveSuccess = await saveLanguageData({
        typeLanguage: data.data.typeLanguage,
        languageData: data.data.languageData,
      })

      if (!saveSuccess) {
        throw new Error('Failed to save language data.')
      }
    }

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}
