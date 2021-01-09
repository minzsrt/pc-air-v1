<template>
  <div>
    <div class="row justify-content-between mx-0 mb-3">
      <div class="col-auto px-0 align-self-center">
        <h2 class="mb-0">{{ msg }}</h2>
      </div>
      <div class="col-auto px-0 align-self-center">
        <a-button type="primary">
          สร้างบิล
        </a-button>
      </div>
    </div>

    <div class="row mb-3 justify-content-end">
      <div class="col-4 mb-2">
        <a-input v-model="model_product.name" placeholder="Name" size="small">
        </a-input>
      </div>
      <div class="col-4 mb-2">
        <a-input v-model="model_product.img" placeholder="logo" size="small">
        </a-input>  
      </div>
      <div class="col-4 mb-2">
        <a-input v-model="model_product.btu9" placeholder="BTU 9000" size="small">
        </a-input>  
      </div>
      <div class="col-4 mb-2">
        <a-input v-model="model_product.btu12" placeholder="BTU 12000" size="small">
        </a-input>  
      </div>
      <div class="col-4 mb-2">
        <a-input v-model="model_product.btu18" placeholder="BTU 18000" size="small">
        </a-input>  
      </div>
      <div class="col-4 mb-2">
        <a-input v-model="model_product.amount" placeholder="amount" size="small">
        </a-input>  
      </div>
      <div class="col-auto align-self-end">
        <a-button type="primary" size="small"  @click="insertToContact(model_product)" >สร้าง</a-button>
      </div>
    </div>      

    <div class="w-100 bg-white shadow p-3">
    <div class="ant-table ant-table-scroll-position-left ant-table-default ant-table-bordered">
    <div class="ant-table-content">
    <div class="ant-table-body">
      <table class="">
      <thead class="ant-table-thead">
        <tr>
        <th rowspan="2">ยี่ห้อ</th>
        <th colspan="3">คลัง</th>
        <th rowspan="2" style="width:155px;">แก้ไข</th>
        </tr>
        <tr>
          <th class="text-center" style="width:120px;">9,000 BTU</th>
          <th class="text-center" style="width:120px;">12,000 BTU</th>
          <th class="text-center" style="width:120px;">18,000 BTU</th>
        </tr>
      </thead>
      <tbody class="ant-table-tbody">
        <tr class="ant-table-row ant-table-row-level-0" v-for="(product, key) in products" :key="key">
          <td class="ant-table-row-cell-break-word px-2">
              <div class="text-center " :class="{'position-relative': product.amount == 0}">
                <img :src="require(`@/assets/images/${product.img}`)" height="35">
              </div>
          </td>
          <td class="ant-table-row-cell-break-word font-weight-bold text-center" :class="{'text-danger':product.btu9 == 0}">
            <div v-if="model_update_product.key !== key">
            {{product.btu9}}
            </div>
            <div class="row px-2" v-else>
              <div class="col-auto pl-0 pr-1">
                <a-button size="small" @click="model_update_product.btu9 = Number(model_update_product.btu9)-1">-</a-button>
              </div>
              <div class="col px-0">
                <a-input v-model.number="model_update_product.btu9" size="small"></a-input>
              </div>
              <div class="col-auto pl-1 pr-0">
                <a-button size="small" @click="model_update_product.btu9 = Number(model_update_product.btu9)+1">+</a-button>
              </div>
            </div>
          </td>
          <td class="ant-table-row-cell-break-word font-weight-bold text-center" :class="{'text-danger':product.btu12 == 0}">
            <div v-if="model_update_product.key !== key">
            {{product.btu12}}
            </div>
            <div class="row px-2" v-else>
              <div class="col-auto pl-0 pr-1">
                <a-button size="small" @click="model_update_product.btu12 = Number(model_update_product.btu12)-1">-</a-button>
              </div>
              <div class="col px-0">
                <a-input v-model.number="model_update_product.btu12" size="small"></a-input>
              </div>
              <div class="col-auto pl-1 pr-0">
                <a-button size="small" @click="model_update_product.btu12 = Number(model_update_product.btu12)+1">+</a-button>
              </div>
            </div>
          </td>
          <td class="ant-table-row-cell-break-word font-weight-bold text-center" :class="{'text-danger':product.btu18 == 0}">
            <div v-if="model_update_product.key !== key">
            {{product.btu18}}
            </div>
            <div class="row px-2" v-else>
              <div class="col-auto pl-0 pr-1">
                <a-button size="small" @click="model_update_product.btu18 = Number(model_update_product.btu18)-1">-</a-button>
              </div>
              <div class="col px-0">
                <a-input v-model.number="model_update_product.btu18" size="small"></a-input>
              </div>
              <div class="col-auto pl-1 pr-0">
                <a-button size="small" @click="model_update_product.btu18 = Number(model_update_product.btu18)+1">+</a-button>
              </div>
            </div>
          </td>
          <td class="ant-table-row-cell-break-word">
            <a-button :size="'small'" @click="setUpdateContact(key, product)" v-if="model_update_product.key !== key">
              <a-icon type="edit"/>
            </a-button>
            <a-button v-if="model_update_product.key === key" type="primary" size="small" @click="updateContact(model_update_product)">บันทึก</a-button>
            <a-button v-if="model_update_product.key === key" type="default" size="small" class="ml-2" @click="model_update_product.key = ''">ยกเลิก</a-button>
            <!--<a-button v-if="model_update_product.key === key" type="default" size="small" class="ml-2" @click="deleteContact(key)">ลบ</a-button>-->
          </td>
        </tr>
      </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>

import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBvyXtXZgtJMomfq0jEJBbdgBWYbyL2tjc",
    authDomain: "pc-air-v1.firebaseapp.com",
    databaseURL: "https://pc-air-v1-default-rtdb.firebaseio.com",
    projectId: "pc-air-v1",
    storageBucket: "pc-air-v1.appspot.com",
    messagingSenderId: "1024121686169",
}
firebase.initializeApp(config)

var database = firebase.database()
var contactRef = database.ref('/products')

export default {
  name: 'Overview',
  data () {
    return {
      msg: 'ภาพรวม',
      products:{},
      model_product: {
        name: '',
        img: '',
        btu9: 0,
        btu12: 0,
        btu18: 0,
        amount: 0,
      },
      model_update_product:{
        key: '',
        name: '',
        img: '',
        btu9: 0,
        btu12: 0,
        btu18: 0,
        amount: 0,
      }
    }
  },
  methods: {
    insertToContact (model_product) {
      contactRef.push(model_product)
      this.model_product.name = ''
      this.model_product.img = ''
      this.model_product.btu9 = 0
      this.model_product.btu12 = 0
      this.model_product.btu18 = 0
      this.model_product.amount = 0
    }
    ,
    setUpdateContact (key, product) {
      this.model_update_product.key = key
      this.model_update_product.name = product.name
      this.model_update_product.img = product.img
      this.model_update_product.btu9 = product.btu9
      this.model_update_product.btu12 = product.btu12
      this.model_update_product.btu18 = product.btu18
      this.model_update_product.amount = product.amount
    }
    ,
    updateContact(model_update_product) {
      
      // console.log(model_update_product)
      let data = {
        key:model_update_product.key,
        name:model_update_product.name,
        img:model_update_product.img,
        btu9:model_update_product.btu9,
        btu12:model_update_product.btu12,
        btu18:model_update_product.btu18,
        amount:model_update_product.amount
      }
      contactRef.child(this.model_update_product.key).update(data)
      this.model_update_product.key = ''
      this.model_update_product.name = ''
      this.model_update_product.img = ''
    }
    ,
    deleteContact (key) {
      contactRef.child(key).remove()
    }
  },
  mounted () {
    contactRef.on('value', (snapshot) => {
      this.products = snapshot.val()
      console.log('products ---- ',this.products)      
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
