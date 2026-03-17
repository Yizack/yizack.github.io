<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const pages: NavigationMenuItem[] = [
  {
    label: "About",
    to: "#about"
  },
  {
    label: "Work Experience",
    to: "#work"
  },
  {
    label: "Projects",
    to: "#projects"
  },
  {
    label: "Resume",
    to: "/Eliezer_RANGEL_Resume_EN.pdf",
    external: true
  }
];
</script>

<template>
  <UHeader
    class="top-0 py-1 z-50 border-0 backdrop-blur-sm border-b border-default bg-default/75 shadow-sm"
    toggle-side="left"
    :toggle="{
      icon: 'tabler:menu-2',
    }"
    :ui="{
      center: 'w-full',
    }"
  >
    <UNavigationMenu
      :items="pages"
      color="neutral"
      class="ms-auto"
      :ui="{
        list: 'gap-4',
        link: 'text-md hover:before:bg-accented/50 data-active:before:bg-accented/75 before:bg-elevated',
        linkLabel: 'text-default',
      }"
    />

    <template #right>
      <UColorModeButton />
    </template>

    <template #title>
      <div class="flex items-center gap-2">
        <h1>Yizack Rangel</h1>
      </div>
    </template>

    <template #body>
      <UNavigationMenu :items="pages" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
