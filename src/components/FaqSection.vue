<script lang="ts" setup>
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const accordionItems = [
  {
    id: '1',
    title: 'What is formcarry?',
    content:
      'Formcarry is a form API (or endpoint) that allows you to collect submissions from your own designed HTML <form> without coding any backend, it basically serves as an form backend. Byusing formcarry you will instantly access the best features such asgetting email notifications for each new submission, file uploads,collecting payments with stripe and more',
  },
  {
    id: '2',
    title: 'Can I upload files from my form to formcarry?',
    content: 'Yes, you can upload files with minimum effort to formcarry.',
  },
  {
    id: '3',
    title: 'Does formcarry blocks spam submissions?',
    content: 'Yes, formcarry has advanced in-built systems to block spam submissions.',
  },
  {
    id: '4',
    title: 'What is form endpoint?',
    content:
      'A form endpoint or form backend, is a unique URL that will process your forms and performs the necessary actions to fulfill your needings (spam blocking, email sending, file uploads) in a reliable, fast and secure way. Formcarry is the best form endpoint in the industry.',
  },
  {
    id: '5',
    title: 'What happens if I exceed the monthly submission limit?',
    content:
      "We will save your exceeded submissions in a secure place until the first day of next month, but you can't see them unless you upgrade your plan. By upgrading your plan you can recover those submissions, so donit worry we got your back!",
  },
  {
    id: '2',
    title: 'Does formcarry supports AJAX?',
    content: 'Yes, formcarry supports AJAX in all packages including the freemium package.',
  },
]
</script>

<template>
  <section class="max-w-5xl mx-auto lg:p-36 pt-8">
    <div class="bg-gray-100 mx-auto lg:rounded-lg px-8 py-12 lg:p-24">
      <p class="uppercase font-bold text-blue-500 mb-4">RELEVANT STUFF BLA BLA</p>
      <p class="text-2xl lg:text-4xl font-bold mb-6">
        Things, you <br />
        probably wonder.
      </p>

      <div class="w-full relative">
        <img src="@/assets/faq_girl.webp" alt="" class="w-36 absolute -top-36 right-0" />
        <Accordion type="single" class="w-full" collapsible>
          <AccordionItem v-for="item in accordionItems" :key="item.id" :value="item.id" class="bg-white rounded-sm px-4 mb-4">
            <AccordionTrigger class="no-underline">{{ item.title }}</AccordionTrigger>
            <AccordionContent class="leading-loose">
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
</template>
