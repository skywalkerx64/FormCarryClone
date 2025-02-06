<script setup lang="ts">
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { BadgeCheck, Bell, CircleUser, LogOut, LayoutDashboard, Package } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import type { User } from '@/types'
import { logout } from '@/http/services/authService'

const props = defineProps<{
  user: User
}>()

const isAdmin = true

const user = props.user
</script>
<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="secondary" size="icon" class="rounded-full">
        <CircleUser class="h-5 w-5" />
        <span class="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" side="bottom" align="end" :side-offset="4">
      <DropdownMenuLabel class="p-0 font-normal">
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar class="h-8 w-8 rounded-lg">
            <AvatarFallback class="rounded-lg capitalize">
              {{
                user.fullName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
              }}
            </AvatarFallback>
          </Avatar>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">{{ user.fullName }}</span>
            <span class="truncate text-xs">{{ user.email }}</span>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem v-if="isAdmin">
        <LayoutDashboard />
        <a :href="''"> Dashboard </a>
      </DropdownMenuItem>
      <DropdownMenuItem v-else>
        <Package />
        <a :href="''"> My Orders </a>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <BadgeCheck />
        Account
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Bell />
        Notifications
      </DropdownMenuItem>
      <DropdownMenuSeparator />

      <DropdownMenuItem type="button" @click="logout" class="w-full">
        <LogOut />
        Log Out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
