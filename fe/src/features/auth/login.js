import { HOST_API_SERVER_2 } from '../../services'

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

    const data = await response.json();

    if (!response.ok || !data.success) {
      const errorMessage = data.error?.message || 'Unknown error occurred';
      const errorCode = data.error?.code || 'UNKNOWN_ERROR';
      throw new Error(`${errorMessage} (Code: ${errorCode})`);
    }
    return data;
  } catch (error) {
    throw new Error('Đăng nhập thất bại: ' + error.message);
  }
};
