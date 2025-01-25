<script lang="ts" setup>
import { Twitter, Facebook, Github } from 'lucide-vue-next'
import Separator from './ui/separator/Separator.vue'
</script>

<template>
  <footer class="w-full container pt-28">
    <div class="flex flex-col items-center justify-between">
      <img src="@/assets/logo.webp" alt="Logo" />
      Built with ❤️ love
    </div>
    <Separator class="my-8" />
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-12">
      <div class="mb-4">
        <p class="font-semibold mb-4">Product</p>
        <div class="flex flex-col gap-4 mb-4">
          <p class="text-gray-600 text-sm"><a href="/frequently-asked-questions">Frequently Asked Questions</a></p>
          <p class="text-gray-600 text-sm"><a href="/pricing">Pricing</a></p>
          <p class="text-gray-600 text-sm"><a href="https://app.formcarry.com" target="_blank">Dashboard</a></p>
          <p class="text-gray-600 text-sm"><a href="/contact-us">Contact Us</a></p>
        </div>
        <p class="font-semibold mb-4">Form Generator</p>
        <div class="flex flex-col gap-4 mb-4">
          <p class="text-gray-600 text-sm"><a href="/contact-form-generator">Contact Form Generator</a></p>
          <p class="text-gray-600 text-sm"><a href="/html-survey-form-generator">Survey Form Generator</a></p>
          <p class="text-gray-600 text-sm"><a href="/rsvp-form-generator">RSVP Form Generator</a></p>
          <p class="text-gray-600 text-sm"><a href="/html-form-generator">All Form Generators</a></p>
        </div>
      </div>
      <div class="mb-4">
        <p class="font-semibold mb-4">Guides</p>
        <div class="flex flex-col gap-4 mb-4">
          <p class="text-gray-600 text-sm"><a href="https://formcarry.com/blog/how-to-add-shopify-contact-form/">How to add a contact form to your Shopify website</a></p>
          <p class="text-gray-600 text-sm"><a href="https://formcarry.com/blog/how-to-create-a-simple-html-contact-form/">How to build a simple HTML contact form</a></p>
          <p class="text-gray-600 text-sm"><a href="https://formcarry.com/blog/how-to-create-a-file-upload-form/">How to create a file upload form</a></p>
          <p class="text-gray-600 text-sm"><a href="https://formcarry.com/blog/how-to-upload-files-as-base64/">How to upload files from your HTML form using Base64 Encoding</a></p>
          <p class="text-gray-600 text-sm"><a href="https://formcarry.com/blog/how-to-create-email-templates-using-mjml-script-language/">How to create email templates</a></p>
        </div>
        <p class="font-semibold mb-4">Form Code Examples</p>
        <div class="flex flex-col gap-4 mb-4">
          <p class="text-gray-600 text-sm"><a href="/form/html-contact-form">HTML Contact Form</a></p>
          <p class="text-gray-600 text-sm"><a href="/form/react-contact-form">React Contact Form</a></p>
          <p class="text-gray-600 text-sm"><a href="/form/nextjs-contact-form">NextJS Contact Form</a></p>
          <p class="text-gray-600 text-sm"><a href="/form/vuejs-contact-form">Vue Contact Form</a></p>
          <p class="text-gray-600 text-sm"><a href="/form/jekyll-contact-form">Jekyll Contact Form</a></p>
          <p class="text-gray-600 text-sm"><a href="/form/gridsome-contact-form">Gridsome Contact Form</a></p>
          <p class="text-gray-600 text-sm"><a href="/form/gatsby-contact-form">Gatsby Contact Form</a></p>
          <p class="text-gray-600 text-sm"><a href="/form/alpinejs-contact-form">AlpineJS Contact Form</a></p>
          <p class="text-gray-600 text-sm"><a href="/examples">All Form Examples</a></p>
        </div>
      </div>
      <div class="mb-4">
        <p class="font-semibold mb-4">Integrations</p>
        <div class="flex flex-col gap-4 mb-4">
          <p class="text-gray-600 text-sm"><a href="/integration/google-sheets">Google Sheets</a></p>
          <p class="text-gray-600 text-sm"><a href="/integration/mailchimp">Mailchimp</a></p>
          <p class="text-gray-600 text-sm"><a href="/integration/airtable">Airtable</a></p>
          <p class="text-gray-600 text-sm"><a href="/integration/discord">Discord</a></p>
          <p class="text-gray-600 text-sm"><a href="/integration/slack">Slack</a></p>
          <p class="text-gray-600 text-sm"><a href="/integration/notion">Notion</a></p>
          <p class="text-gray-600 text-sm"><a href="/integration/twilio">Twilio</a></p>
          <p class="text-gray-600 text-sm"><a href="/integrations">All Apps &amp; Integrations</a></p>
        </div>
      </div>
      <div class="mb-4">
        <p class="font-semibold mb-4">Resources</p>
        <div class="flex flex-col gap-4 mb-4">
          <p class="text-gray-600 text-sm"><a href="/docs" target="_blank">Documentations</a></p>
          <p class="text-gray-600 text-sm"><a href="/affiliate-program">Affiliate Program</a></p>
          <p class="text-gray-600 text-sm"><a href="/press-kit">Press Kit</a></p>
          <p class="text-gray-600 text-sm"><a href="/blog/" target="_blank">Formcarry Blog</a></p>
          <p class="text-gray-600 text-sm"><a href="https://status.formcarry.com" target="_blank">System Status</a></p>
        </div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto p-6 mb-12 bg-gray-50 rounded-md text-sm text-gray-600 flex justify-between">
      <p>formcarry. all rights reserved</p>
      <div class="flex gap-4">
        <a href="#"> Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div class="flex gap-4">
        <Twitter />
        <Facebook />
        <Github />
      </div>
    </div>
  </footer>
</template>
