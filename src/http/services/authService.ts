import api from '@/http/services/api'
import { useAuthStore } from '@/stores/auth'


export async function login(data: { email: string, password: string, remember?: boolean }) {
  const authStore = useAuthStore()

  const response = await api.post('/login', data)
  authStore.login(response.data.user, response.data.token)
  return response
}

export async function logout() {
  const response = await api.delete('/logout')
  const authStore = useAuthStore()
  authStore.logout()
  return response

}
