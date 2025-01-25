<script lang="ts" setup>
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const articles: { id: number; cover: string; title: string; description: string }[] = [
  {
    id: 1,
    cover: '@/assets/blog1.webp',
    title: 'How to create a contact form with Formcarry',
    description: 'Contact forms are one of the best ways to convert more leads, and get the information you need...',
  },
  {
    id: 2,
    cover: '@/assets/blog2.webp',
    title: 'How to create a file upload form with formcarry in 5 steps',
    description: 'One of the most time consuming thing about forms is definitely uploading files, sometimes...',
  },
  {
    id: 3,
    cover: '@/assets/blog3.webp',
    title: 'How to upload files from your HTML form using Base64 encoding',
    description: 'Uploading files using Base64 encoding is a common practice, the usage of the technique has...',
  },
]
</script>

<template>
  <section class="w-full container justify-center items-center flex flex-col gap-y-6 pt-28">
    <p class="w-full flex justify-start lg:justify-center text-blue-500 font-bold text-sm uppercase">FORMCARRY BLOG</p>
    <p class="w-full flex justify-start lg:justify-center lg:text-center leading-normal text-5xl font-bold">Useful to read</p>

    <div class="lg:container lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <Card v-for="article in articles" :key="article.id" class="cursor-pointer">
        <CardHeader class="p-2">
          <img src="@/assets/blog1.webp" v-if="article.id === 1" class="rounded-md" alt="" />
          <img src="@/assets/blog2.webp" v-if="article.id === 2" class="rounded-md" alt="" />
          <img src="@/assets/blog3.webp" v-if="article.id === 3" class="rounded-md" alt="" />
          <div class="px-4 mt-6">
            <CardTitle class="text-lg mb-4">{{ article.title }}</CardTitle>
            <CardDescription class="mb-2">{{ article.description }}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  </section>
</template>
