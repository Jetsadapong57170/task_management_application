
<template>
      <div class="relative mt-1">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="min-w-[140px] xs:w-full justify-between flex items-center  text-white bg-yellow-900 box-border border border-transparent hover:bg-yellow-800   shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 cursor-pointer"
        type="button"
        @click="handleOnDropdownClick"
        @blur="handleOnCloseDropdown"
      >
        <span class="font-medium ">{{proxyCurrentItem}}</span>
        <svg
          class="w-4 h-4 ms-1.5 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        class="z-10 bg-white top-12 border border-zinc-200 rounded-md shadow-lg w-44 absolute"
        v-if="isDropdownOpen"
      >
        <ul
          class="p-2 text-sm text-body font-medium"
          aria-labelledby="dropdownDefaultButton"
        >
        
          <li v-for="(item,index) of props.items" :key = "index" @mousedown="handleOnItemClick(item)">
            <a
              href="#"
              class="inline-flex items-center w-full p-2 hover:bg-yellow-800 hover:text-white rounded"
              >{{ item }}</a
            >
          </li>
         
        </ul>
      </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
interface Props {
    currentItem: string | null,
    items: string[],
}
const props = defineProps<Props>()

const isDropdownOpen = ref<boolean>(false)

 const  emit = defineEmits(["update:currentItem"])
    const proxyCurrentItem = computed({
        get:()=>props.currentItem,
        set:(value)=> emit("update:currentItem", value) ,
    })

const handleOnDropdownClick = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const handleOnItemClick = (item: string) => {
  proxyCurrentItem.value = item
  isDropdownOpen.value = false
}

const handleOnCloseDropdown = () => {
  isDropdownOpen.value = false
}

</script>

<style>

</style>