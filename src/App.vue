<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo text-center d-flex">
          <span class="text-white font-weight-bold m-auto font-size-28" v-if="!collapsed">พรชัยแอร์</span>
          <span class="text-white font-weight-bold m-auto" v-if="collapsed">
            <p class="font-size-20 mb-0">พรชัย</p>
            <span class="font-size-18">แอร์</span>
          </span>
        </div>
        <a-menu theme="dark" mode="inline" :default-selected-keys="['overview']">
          <a-menu-item key="overview">
            <router-link :to="'overview'">
              <a-icon type="pie-chart" />
              <span>ภาพรวม</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="2">
                <a-icon type="pie-chart" />
                <span>Overview</span>            
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload" />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px' }"
        >
              <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import locale from 'ant-design-vue/es/date-picker/locale/th_TH';

export default {
  name: 'App',
  data() {
    return {
      locale,
      collapsed: true
    };
  },
  methods: {
    routeNav: function (pathlink) {
      // const ref = pathlink
      console.log('Hello '+pathlink+' !')
      // router.push({ path: `/overview` })
    }
  }
  
}
</script>

<style></style>
