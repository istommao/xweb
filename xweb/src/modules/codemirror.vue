<template>
  <div style="overflow: auto">
    <CodeMirrorEditor :language="editorMode" :data="CodeData"></CodeMirrorEditor>
  </div>
  <div style="width: 80%; margin: 0 auto; margin-top: 20px">
    <el-input v-model="DataUrl" placeholder="" style="width: 300px"></el-input>
    <el-button type="primary" plain @click="doHttpRequest">请求接口</el-button>
  </div>
</template>

<script src="./codemirror.ts"></script>
