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

    <div class="w-100 bg-white shadow p-3">
    <div class="ant-table ant-table-scroll-position-left ant-table-default ant-table-bordered">
    <div class="ant-table-content">
    <div class="ant-table-body">
      <table class="">
      <thead class="ant-table-thead">
        <tr>
        <th rowspan="2">ยี่ห้อ</th>
        <th colspan="3">คลัง</th>
        <th rowspan="2">แก้ไข</th>
        </tr>
        <tr>
          <th>9</th>
          <th>12</th>
          <th>18</th>
        </tr>
      </thead>
      <tbody class="ant-table-tbody">
        <tr class="ant-table-row ant-table-row-level-0" v-for="(product, key) in products" :key="key">
          <td class="ant-table-row-cell-break-word">
            <div v-if="model_update_product.key !== key">
              <div class="text-center" :class="{'position-relative': product.amount == 0}">
                <img :src="require(`@/assets/images/${product.img}`)" height="40">
                <div class="position-absolute" v-if="product.amount == 0">
                  <a-tag color="red">
                    หมด
                  </a-tag>
                </div>
              </div>
            </div>
            <a-input v-else v-model="model_update_product.name" placeholder="Name" size="small"></a-input>
          </td>
          <td class="ant-table-row-cell-break-word font-weight-bold" :class="{'text-danger':product.btu9 == 0}">
            <div v-if="model_update_product.key !== key">
            {{product.btu9}}
            </div>
            <a-input v-else v-model="model_update_product.btu9" size="small"></a-input>
          </td>
          <td class="ant-table-row-cell-break-word font-weight-bold" :class="{'text-danger':product.btu12 == 0}">{{product.btu12}}</td>
          <td class="ant-table-row-cell-break-word font-weight-bold" :class="{'text-danger':product.btu18 == 0}">{{product.btu18}}</td>
          <td class="ant-table-row-cell-break-word">
            <a-button :size="'small'" @click="setUpdateContact(key, product)">
              <a-icon type="edit"/>
            </a-button>
            <a-button type="primary" size="small" @click="updateContact(model_update_product)">บันทึก</a-button>
            <a-button type="default" size="small" class="ml-2" @click="deleteContact(key)">ลบ</a-button>
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

// const data = [
//   {
//     key: '1',
//     name: 'samsung',
//     img: 'samsung.png',
//     btu9: 3,
//     btu12: 0,
//     btu18: 0,
//     amount: 3
//   },
//   {
//     key: '2',
//     name: 'daikin',
//     img: 'daikin.png',
//     btu9: 0,
//     btu12: 1,
//     btu18: 0,
//     amount: 1
//   },
//   {
//     key: '3',
//     name: 'haier',
//     img: 'haier.png',
//     btu9: 0,
//     btu12: 0,
//     btu18: 0,
//     amount: 0
//   }
// ];

export default {
  name: 'Overview',
  data () {
    return {
      msg: 'Test | Realtime Database',
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
        btu9: '',
        btu12: '',
        btu18: '',
        amount: '',
      },
      columns : [
      {
        title: 'ยี่ห้อ',
        dataIndex: 'img',
        key: 'img',
        scopedSlots: { customRender: 'img' },
      },
      {
        title: 'คลัง',
        children: [
          {
            title: '9000 BTU',
            dataIndex: 'btu9',
            key: 'btu9',
            scopedSlots: { customRender: 'btu9' },
          },
          {
            title: '12,000 BTU',
            dataIndex: 'btu12',
            key: 'btu12',
            scopedSlots: { customRender: 'btu12' },
          },
          {
            title: '18,000 BTU',
            dataIndex: 'btu18',
            key: 'btu18',
            scopedSlots: { customRender: 'btu18' },
          }
        ]
      },
      {
        title: 'จำนวนทั้งหมด',
        dataIndex: 'amount',
        key: 'amount',
        scopedSlots: { customRender: 'amount' },
      }
      ,
      {
        title: 'Active',
        key: 'active',
        scopedSlots: { customRender: 'active' },
      }
    ]
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
