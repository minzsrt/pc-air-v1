<template>
  <div id="app"   ref="document">
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
            <router-link :to="'/'">
              <a-icon type="pie-chart" />
              <span>ภาพรวม</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="orders">
            <router-link :to="'orders'">
                <a-icon type="audit" />
                <span>ออเดอร์</span>            
            </router-link>
          </a-menu-item>
          <a-menu-item key="customers">
            <router-link :to="'customers'">
                <a-icon type="user" />
                <span>ลูกค้า</span>            
            </router-link>
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
        	<button @click="exportToPDF">Export to PDF</button>
              <router-view></router-view>

        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import locale from 'ant-design-vue/es/date-picker/locale/th_TH';
import html2pdf from 'html2pdf.js'
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
    },
    exportToPDF () {
				html2pdf(this.$refs.document, {
					margin: 0.2,
					filename: 'document.pdf',
					image: { type: 'jpeg', quality: 0.98 },
					html2canvas: { dpi: 192, letterRendering: true },
					jsPDF: { unit: 'cm', format: 'letter', orientation: 'portrait' }
				})
		}
    
  }
  
}
</script>

<style></style>
