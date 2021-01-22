<template>
  <div class="header-box">
    <div class="inner-box">
      <el-menu
        :default-active="this.$route.path"
        router
        class="header-el-menu"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!--@select="handleSelect"-->
        <el-menu-item
          v-for="(item, index) in navMenu"
          :index="item.url"
          :key="index"
        >
          {{ item.name }}
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  // mixins: [],
  // components: {},
  // props,
  data() {
    return {
      activeIndex: '1',
      navMenu: [
        {
          id: '1',
          url: '/Home',
          name: '首页'
        },
        {
          id: '2',
          url: '/Page2/Page2-1',
          name: '第二页'
        },
        {
          id: '3',
          url: '/Page3',
          name: '第三页'
        },
        // {
        //   id: '4',
        //   url: '/Page4',
        //   name: '第四页'
        // },
        {
          id: '5',
          url: '/Page5',
          name: '第五页'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      this.navMenu.forEach(item => {
        if (key === item.id) {
          console.log(key)
          console.log(item.id)
          this.$router.push({ path: `${item.url}` })
        }
      })
    }
  },
  computed: {},
  watch: {}
  // updated () {},
  // beforeRouteUpdate () {},
  // beforeDestroy () {},
  // destroyed () {},
  // filters: {},
}
</script>

<style lang="scss" scoped>
.header-box {
  width: 100%;
  height: 61px;
  //z-index: 2008;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-width: 1100px;
  box-sizing: border-box;
  //background-color: #E7EAED;
}
</style>
