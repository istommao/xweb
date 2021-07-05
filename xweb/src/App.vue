<template>
  <div id="container">
    <el-container>
      <el-header>
        <div style="line-height: 40px; line-height: 40px"></div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div>
            <el-menu :default-active="this.$route.path" router mode="vertical">
              <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.url">
                {{ item.name }}
              </el-menu-item>
            </el-menu>
          </div>
        </el-aside>
        <el-main>
          <div style="width: 100%; height: 60vh">
            <div class="node-view-background">
              <router-view />
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script src="./app.ts"></script>
<style>
body {
  margin: 0;
  padding: 0;
}
div {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.node-view-background {
  position: absolute;
  width: 80%;
  height: 60vh;
  background-size: 50px 50px;
  background-image: linear-gradient(to right, #eeeefe 1px, transparent 1px),
    linear-gradient(to bottom, #eeeefe 1px, transparent 1px);
}
</style>
