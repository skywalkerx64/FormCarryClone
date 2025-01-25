<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import PartnersSection from '@/components/PartnersSection.vue'
import SetupSection from '@/components/SetupSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import BlogSection from '@/components/BlogSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import PaymentSection from '@/components/PaymentSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import NavBar from '@/components/NavBar.vue'
import SpamSection from '@/components/SpamSection.vue'
</script>

<template>
  <body class="bg-muted/10">
    <NavBar />
    <HeroSection />
    <PartnersSection />
    <SetupSection />
    <FeaturesSection />
    <PaymentSection />
    <SpamSection />
    <FaqSection />
    <BlogSection />
    <FooterSection />
  </body>
</template>
