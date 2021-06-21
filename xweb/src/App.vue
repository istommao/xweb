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
          <router-view />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
