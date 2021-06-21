<template>
  <div class="editor" ref="dom"></div>
</template>

<script setup>
  import { onMounted, defineProps, defineEmit, ref } from 'vue'
  import * as monaco from 'monaco-editor'

  import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
  import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
  import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

  import 'monaco-editor/esm/vs/editor/contrib/find/findController.js'
  import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'

  self.MonacoEnvironment = {
    getWorker(_, label) {
      if (label === 'json') {
        return new JsonWorker()
      } else if (label === 'typescript' || label === 'javascript') {
        return new TsWorker()
      }
      return new EditorWorker()
    }
  }

  const props = defineProps({
    modelValue: String,
    language: String
  })

  const emit = defineEmit(['update:modelValue'])

  const dom = ref()

  let instance

  onMounted(() => {
    const EditorModel = monaco.editor.createModel(props.modelValue, props.language)
    const tabSize = ['python', 'go'].includes(props.language) ? 4 : 2

    instance = monaco.editor.create(dom.value, {
      model: EditorModel,
      tabSize: tabSize,
      fontSize: 16,
      automaticLayout: true,
      quickSuggestions: true,
      scrollBeyondLastLine: false,
      theme: 'vs-dark',
      scrollbar: {
        vertical: 'auto',
        horizontal: 'auto'
      }
    })

    instance.onDidChangeModelContent(() => {
      const value = instance.getValue()
      emit('update:modelValue', value)
    })
  })
</script>

<style scoped>
  .editor {
    height: 100vh;
  }
</style>
