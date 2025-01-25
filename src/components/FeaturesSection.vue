<script lang="ts" setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CloudUpload, Bell, ShieldCheck, MessageCircle, ChevronRight } from 'lucide-vue-next'
import { ref } from 'vue'
const ActiveTab = ref('upload-files')
</script>

<template>
  <section class="w-full lg:container lg:p-36 pt-28 text-white">
    <div class="bg-[#031022] lg:rounded-lg px-8 py-12 lg:p-24">
      <p class="uppercase font-bold text-yellow-500 mb-4">Savior, yeah time-savior</p>
      <p class="text-3xl lg:text-6xl font-bold mb-6">Features that <br />you need.</p>
      <p class="text-gray-400 text-base leading-loose lg:text-lg mb-8">
        Use features that normally take days to code, in minutes. <br />
        Integration with your CRM in 2 minutes. Set auto-responses <br />
        in 2 minutes. Field validations in 2 minutes. You get the idea. <br />
      </p>
      <!-- <video src="@/assets/show-off.webm" class="w-full mb-8" loop autoplay /> -->

      <Tabs default-value="upload-files" class="" orientation="vertical" v-model="ActiveTab">
        <TabsList class="bg-gray-700 rounded-xl">
          <TabsTrigger value="upload-files" class="rounded-xl">
            <span class="flex size-full items-center justify-center">
              <CloudUpload class="mr-2" :class="ActiveTab === 'upload-files' ? 'text-blue-400' : ''" />
              Upload Files
            </span>
          </TabsTrigger>
          <TabsTrigger value="email-notifications" class="rounded-xl">
            <span class="flex size-full items-center justify-center">
              <Bell class="mr-2" :class="ActiveTab === 'email-notifications' ? 'text-green-400' : ''" />
              Email Notifications
            </span>
          </TabsTrigger>
          <TabsTrigger value="field-validations" class="rounded-xl">
            <span class="flex size-full items-center justify-center">
              <ShieldCheck class="mr-2" :class="ActiveTab === 'field-validations' ? 'text-red-400' : ''" />
              Field Validations
            </span>
          </TabsTrigger>
          <TabsTrigger value="auto-responses" class="rounded-xl">
            <span class="flex size-full items-center justify-center">
              <MessageCircle class="mr-2" :class="ActiveTab === 'auto-responses' ? 'text-yellow-400' : ''" />
              Auto Responses
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="upload-files" class="w-full">
          <div class="w-full grid grid_cols-1 gap-6 lg:gap-0 lg:grid-cols-2 mt-14">
            <div>
              <div class="size-fit border-2 border-gray-600 rounded-full mb-6 p-6">
                <CloudUpload class="w-full text-blue-400" />
              </div>
              <p class="uppercase font-bold text-blue-400 mb-4">Upload Files</p>
              <p class="text-3xl lg:text-6xl font-bold mb-6">Upload files easy-peasy</p>
              <p class="text-gray-400 text-base leading-loose lg:text-lg mb-8">
                Add file upload functionality to your form without any configuration. Display those files in your dashboard. Perfect for order forms, job applications, and more.
              </p>
              <div class="flex items-center bg-white text-gray-900 p-4 cursor-pointer rounded-full w-fit">See Documentation <ChevronRight :size="20" /></div>
            </div>
            <div class="size-full bg-no-repeat bg-right-bottom" style="background-image: url('src/assets/files.png'); background-size: contain; background-position: right bottom"></div>
          </div>
        </TabsContent>
        <TabsContent value="email-notifications" class="w-full">
          <div class="w-full grid grid_cols-1 gap-6 lg:gap-0 lg:grid-cols-2 mt-14">
            <div>
              <div class="size-fit border-2 border-gray-600 rounded-full mb-6 p-6">
                <Bell class="w-full text-green-400" />
              </div>
              <p class="uppercase font-bold text-green-400 mb-4">Email Notifications</p>
              <p class="text-3xl lg:text-6xl font-bold mb-6">Ultra-fast email notifications</p>
              <p class="text-gray-400 text-base leading-loose lg:text-lg mb-8">
                Receive email notifications every time your form gets a new submission, directly respond from email, simplify the process.
              </p>
              <div class="flex items-center bg-white text-gray-900 p-4 cursor-pointer rounded-full w-fit">See Documentation <ChevronRight :size="20" /></div>
            </div>
            <div class="size-full bg-no-repeat bg-right-bottom" style="background-image: url('src/assets/files.png'); background-size: contain; background-position: right bottom"></div>
          </div>
        </TabsContent>
        <TabsContent value="field-validations" class="w-full">
          <div class="w-full grid grid_cols-1 gap-6 lg:gap-0 lg:grid-cols-2 mt-14">
            <div>
              <div class="size-fit border-2 border-gray-600 rounded-full mb-6 p-6">
                <ShieldCheck class="w-full text-red-400" />
              </div>
              <p class="uppercase font-bold text-red-400 mb-4">Field Validations</p>
              <p class="text-3xl lg:text-6xl font-bold mb-6">Validate fields, with no effort</p>
              <p class="text-gray-400 text-base leading-loose lg:text-lg mb-8">
                Define back-end validation rules within formcarry dashboard, this will act as back-end validation, so forms can be secure, setup under 2 minutes.
              </p>
              <div class="flex items-center bg-white text-gray-900 p-4 cursor-pointer rounded-full w-fit">See Documentation <ChevronRight :size="20" /></div>
            </div>
            <div class="size-full bg-no-repeat bg-right-bottom" style="background-image: url('src/assets/files.png'); background-size: contain; background-position: right bottom"></div>
          </div>
        </TabsContent>
        <TabsContent value="auto-responses" class="w-full">
          <div class="w-full grid grid_cols-1 gap-6 lg:gap-0 lg:grid-cols-2 mt-14">
            <div>
              <div class="size-fit border-2 border-gray-600 rounded-full mb-6 p-6">
                <MessageCircle class="w-full text-yellow-400" />
              </div>
              <p class="uppercase font-bold text-yellow-400 mb-4">Auto Responses</p>
              <p class="text-3xl lg:text-6xl font-bold mb-6">Set auto-responses, save time</p>
              <p class="text-gray-400 text-base leading-loose lg:text-lg mb-8">
                Set auto-responses for your form, make it dynamic use our email templates or your custom template setup under 2 minutes.
              </p>
              <div class="flex items-center bg-white text-gray-900 p-4 cursor-pointer rounded-full w-fit">See Documentation <ChevronRight :size="20" /></div>
            </div>
            <div class="size-full bg-no-repeat bg-right-bottom" style="background-image: url('src/assets/files.png'); background-size: contain; background-position: right bottom"></div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>
</template>
