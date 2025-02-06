<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import LoginForm from '@/components/Auth/LoginForm.vue'
</script>

<template>
  <Head title="Login" />
  <AuthLayout>
    <LoginForm />
  </AuthLayout>
</template>
