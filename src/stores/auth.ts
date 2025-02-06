import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, computed } from 'vue'
import type { User } from '@/types'
import { ADMIN_ROLE_ALIAS } from '@/types'

export const useAuthStore = defineStore('auth', () => {

  //State
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)

  const isAuthenticated = computed(() => !!token.value)

  const isAdmin = computed(() => {
    return user.value?.roles.some((role) => role.alias === ADMIN_ROLE_ALIAS) ?? false
  })

  // Actions
  function login(newUser: User, newToken: string) {
    user.value = newUser
    token.value = newToken
  }

  function logout() {
    user.value = null
    token.value = null
  }

  return { user, token, isAuthenticated, isAdmin, login, logout }
}, {
  persist: true
})

// Hot Module Reload (HMR)
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
