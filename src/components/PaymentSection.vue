<script lang="ts" setup>
import Badge from './ui/badge/Badge.vue'
</script>

<template>
  <section class="w-full container justify-center items-center flex flex-col gap-y-6 pt-8">
    <p class="w-full flex justify-start lg:justify-center font-bold text-sm uppercase"><Badge variant="secondary" class="text-violet-500">COMING SOON </Badge></p>
    <p class="w-full flex justify-start lg:justify-center text-violet-500 font-bold text-sm uppercase">FORMCARRY BLOG</p>
    <p class="w-full flex justify-start lg:justify-center lg:text-center leading-normal text-5xl font-bold">
      Collect payments <br />
      from your form, easily!
    </p>
    <p class="w-full flex justify-start lg:justify-center text-lg text-left lg:text-center leading-loose">
      Connect your Stripe account to formcarry, and sell your Stripe products with <br />
      minimum effort, you can whether use Stripe Checkout, or your own payment <br />
      form and define actions based on the payment status.
    </p>
    <img src="@/assets/payments.png" draggable="false" class="w-full hidden lg:block" alt="Payment Section" />
  </section>
</template>
