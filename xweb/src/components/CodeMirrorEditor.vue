<template>
  <div style="width: 85%; margin: 0 auto; margin-top: 20px">
    <textarea ref="CodeMirrorBox" class="CodeMirrorBox" v-model="CodeMirrorData"></textarea>
  </div>
</template>

<script>
  import { onMounted, ref, watch } from 'vue'
  import 'codemirror/theme/monokai.css'
  import 'codemirror/lib/codemirror.css'

  import jsonpath from 'jsonpath'

  import CodeMirror from 'codemirror/lib/codemirror'
  import 'codemirror/addon/edit/matchbrackets'
  import 'codemirror/addon/selection/active-line'
  import 'codemirror/keymap/sublime'

  import 'codemirror/mode/javascript/javascript'
  import 'codemirror/mode/python/python'
  import 'codemirror/mode/xml/xml'
  import jsonbeautify from "json-beautify";

  export default {
    name: 'codeMirror',
    props: {
      language: {
        type: String
      },
      data: {
        type: String,
        default: '{}'
      }
    },
    setup(props, ctx) {
      const CodeMirrorData = ref('{}')

      if (props.language === 'javascript') {
        var names = jsonpath.query(JSON.parse(CodeMirrorData.value), '$..Name')
      } else {
        //
      }

      return { CodeMirrorData }
    },
    mounted() {
      let theme = 'monokai'
      const EditorConfig = {
        mode: { name: this.language, json: true },
        indentWithTabs: true,
        smartIndent: true,
        lineNumbers: true,
        matchBrackets: true,
        theme: theme,
        autofocus: true,
        extraKeys: { Ctrl: 'autocomplete' }, //自定义快捷键
        hintOptions: {
          tables: {
            users: ['name', 'score', 'birthDate'],
            countries: ['name', 'population', 'size']
          }
        }
      }
      let editor = CodeMirror.fromTextArea(this.$refs.CodeMirrorBox, EditorConfig)

      watch(
        () => this.data,
        (newVal) => {
          if (newVal) {
            const result = jsonbeautify(JSON.parse(this.data), null, 2, 100);
            editor.getDoc().setValue(result);
          }
        }
      )

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
    height: 550px;
  }
</style>
