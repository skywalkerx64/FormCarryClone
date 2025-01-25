<script lang="ts" setup>
import { ref } from 'vue'
import { Menu } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const links = [
  {
    to: '/#',
    label: 'Exemples',
  },
  {
    to: '/#',
    label: 'Form Generator',
  },
  {
    to: '/#',
    label: 'Integrations',
  },
  {
    to: '/#',
    label: 'Docs',
  },
  {
    to: '/#',
    label: 'Pricing',
  },
]
const isToggled = ref(false)
</script>

<template>
  <nav class="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between lg:container rounded-md lg:mt-4">
    <div class="w-full lg:w-auto flex justify-between p-4">
      <img src="@/assets/logo.svg" alt="FormCarry Logo" />
      <Menu class="lg:hidden cursor-pointer" @click="isToggled = !isToggled" />
    </div>
    <ul
      :class="['flex flex-col lg:flex-row gap-2 lg:gap-8 w-full lg:w-auto px-8 lg:px-0 transition duration-300 ease-in-out', { hidden: !isToggled, block: isToggled }]"
      class="transition-all lg:flex"
    >
      <li v-for="link in links" :key="link.to">
        <Button variant="ghost" class="font-normal w-full lg:w-auto">
          <a :href="link.to">{{ link.label }}</a>
        </Button>
      </li>
    </ul>
    <ul :class="['flex flex-col lg:flex-row gap-2 w-full lg:w-auto px-8 lg:px-0 transition duration-300 ease-in-out', { hidden: !isToggled, block: isToggled }]" class="transition-all lg:flex">
      <li>
        <Button variant="ghost" class="font-normal w-full lg:w-auto">
          <a href="#login">Login</a>
        </Button>
      </li>
      <li>
        <Button variant="ghost" class="bg-muted font-bold w-full lg:w-auto">
          <a href="#register">Register</a>
        </Button>
      </li>
    </ul>
  </nav>
</template>
