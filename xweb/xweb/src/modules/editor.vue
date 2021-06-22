<template>
  <div style="height: 450px">
    <XEditor :language="language"></XEditor>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import XEditor from '@/components/XEditor.vue'

const code = ref('const a = "Hello monaco editor"')
const language = "python";
</script>
