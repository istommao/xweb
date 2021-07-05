<template>
  <div style="width: 85%; margin: 0 auto; margin-top: 20px">
    <textarea ref="CodeBox" class="codebox" v-model="CodeData"></textarea>
  </div>
</template>

<script>
  import { ref, watch } from 'vue'
  import 'codemirror/theme/monokai.css'
  import 'codemirror/lib/codemirror.css'

  import CodeMirror from 'codemirror/lib/codemirror'
  import 'codemirror/addon/edit/matchbrackets'
  import 'codemirror/addon/selection/active-line'
  import 'codemirror/keymap/sublime'

  import 'codemirror/mode/javascript/javascript'
  import 'codemirror/mode/python/python'
  import 'codemirror/mode/xml/xml'

  export default {
    name: 'codeMirror',
    setup() {
      const CodeData = ref('');

      CodeData.value = `\
// js字节格式化显示
function readableBytes(bytes) {
    if (bytes == 0) {
        return '-'
    }

    var i = Math.floor(Math.log(bytes) / Math.log(1024)),
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + sizes[i];
}
`

      return { CodeData }
    },
    mounted() {
      let theme = 'monokai'

      let editor = CodeMirror.fromTextArea(this.$refs.CodeBox, {
        mode: { name: 'javascript', json: true },
        indentWithTabs: true,
        smartIndent: true,
        lineNumbers: true,
        matchBrackets: true,
        theme: theme,
        autofocus: true,
        extraKeys: { Ctrl: 'autocomplete' }, //自定义快捷键
        hintOptions: {
          //自定义提示选项
          tables: {
            users: ['name', 'score', 'birthDate'],
            countries: ['name', 'population', 'size']
          }
        }
      })
      //代码自动提示功能，记住使用cursorActivity事件不要使用change事件，这是一个坑，那样页面直接会卡死
      // editor.on('cursorActivity', function () {
      //   editor.showHint()
      // })
    }
  }
</script>
<style>
  .CodeMirror {
    font-size: 16px;
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
      Bitstream Vera Sans Mono, Courier New, monospace, serif;
    width: 100%;
    height: 400px;
  }
</style>
