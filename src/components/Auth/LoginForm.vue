<script setup lang="ts">
import Checkbox from '@/components/Checkbox.vue'
// import InputError from '@/components/InputError.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { reactive, ref } from 'vue'
import { login } from '@/http/services/authService'
import { useRouter } from 'vue-router'
import { Separator } from '@/components/ui/separator'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  remember: false,
})
const processing = ref(false)

const submit = () => {
  processing.value = true
  login(form).then(async (response) => {
    if (response.status == 200) {
      await router.push({ name: 'home' })
    }
  })
  processing.value = false
}
</script>

<template>
  <div class="my-6">
    <p class="text-3xl font-bold my-4">Connect and Shine</p>
    <div>
      Don't have an account?
      <a
        href="/register"
        class="rounded-md text-sm text-gray-600 underline hover:text-primary focus:outline-none focus:primary focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
      >
        Create an account
      </a>
    </div>
  </div>
  <form @submit.prevent="submit">
    <div>
      <Label for="email">Email</Label>

      <Input id="email" type="email" class="mt-2 block w-full" v-model="form.email" required autofocus autocomplete="username" />

      <!-- <InputError class="mt-2" :message="form.errors.email" /> -->
    </div>

    <div class="mt-4">
      <Label for="password">Password</Label>

      <Input id="password" type="password" class="mt-2 block w-full" v-model="form.password" required autocomplete="current-password" />

      <!-- <InputError class="mt-2" :message="form.errors.password" /> -->
    </div>

    <div class="mt-4 flex justify-between">
      <label class="flex items-center">
        <Checkbox name="remember" v-model:checked="form.remember" />
        <span class="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
      </label>

      <a class="rounded-md text-sm text-gray-600 underline hover:text-primary focus:outline-none focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800">
        Forgot your password?
      </a>
    </div>

    <div class="mt-4 flex items-center w-full justify-end">
      <Button type="submit" class="w-full" :class="{ 'opacity-25': processing }" :disabled="processing"> Log in </Button>
    </div>
    <Separator class="my-10" label="Or continue with" />
    <Button type="button" class="w-full" :class="{ 'opacity-25': processing }" :disabled="processing"> Google </Button>
  </form>
</template>
