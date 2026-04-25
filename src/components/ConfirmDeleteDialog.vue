

<template>
  <div class="absolute top-0 min-h-screen w-full z-100 flex justify-center items-center bg-black/30"
  v-show="props.isShow"
  >
    <div class="p-5 bg-white shadow-sm rounded-md max-w-[350px] min-w-[350px]">
        <div class="flex justify-end"><svg
          class="w-6 h-6 text-gray-800 dark:text-white cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          @click="handleOnCloseConfirmDeleteDialog"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg></div>
        <span>Are your sure to delete this task ?</span>
        <div class="flex justify-center mt-8">
            <button
            @click="handleOnCloseConfirmDeleteDialog"
        class="text-white w-fit px-2 py-2.5 mt-2 bg-yellow-900 box-border border border-transparent hover:bg-yellow-800 shadow-xs font-medium leading-5 rounded-md text-sm cursor-pointer"
      >
        Cancle
      </button>
                  <button
                  @click="handleOnConfirmConfirmDeleteDialog"
        class="text-white w-fit ml-2 px-2 py-2.5 mt-2 bg-red-900 box-border border border-transparent hover:bg-red-800 shadow-xs font-medium leading-5 rounded-md text-sm cursor-pointer"
      >
        Confirm
      </button>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { computed } from "vue";

interface Props {
    isShow: boolean;
}
const props = defineProps<Props>()
const emit = defineEmits(["onConfirm", "update:isShow" ]);
    const proxyIsShow = computed({
        get:()=>props.isShow,
        set:(value)=> emit("update:isShow", value) ,
    })

const handleOnCloseConfirmDeleteDialog = () =>{
    proxyIsShow.value = false
}
const handleOnConfirmConfirmDeleteDialog = () =>{
     emit("onConfirm", true);
}
</script>

<style>

</style>