<template>
  <div class="hello">
    <h1>{{ msg }}</h1> 
    <div class="row mb-3 justify-content-end">
      <div class="col-4 mb-2">
        <a-input v-model="model_product.name" placeholder="Name" size="small">
          <a-icon slot="prefix" type="user" />
        </a-input>
      </div>
      <div class="col-4 mb-2">
        <a-input v-model="model_product.img" placeholder="logo" size="small">
          <a-icon slot="prefix" type="file-image" />
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

       <div class="w-100 bg-white shadow rounded p-3">
      <p>FirebaseApp</p>
      <a-list bordered>
        <a-list-item v-for="(product, key) in products" :key="key">
          <div class="w-100">
            <div class="row" v-if="model_update_product.key !== key">
              <div class="col-4">
                <a-icon type="user"/> {{product.name}}
              </div>
              <div class="col-4">
                <a-icon type="phone"/> {{product.img}}  
              </div>
              <div class="col align-self-end">
                <a-button type="primary" size="small" @click="setUpdateContact(key, product)">แก้ไข</a-button>
                <a-button type="default" size="small" class="ml-2" @click="deleteContact(key)">ลบ</a-button>
              </div>
            </div>
            <div class="row" v-else>
              <div class="col-4">
                  <a-input v-model="model_update_product.name" placeholder="Name" size="small">
                    <a-icon slot="prefix" type="user" />
                  </a-input>
              </div>
              <div class="col-4">
                  <a-input v-model="model_update_product.img" placeholder="Tel." size="small">
                    <a-icon slot="prefix" type="phone" />
                  </a-input>  
              </div>
              <div class="col align-self-end">
                <a-button type="primary" size="small" @click="updateContact(model_update_product)">บันทึก</a-button>
              </div>
            </div>
          
          <!--
           <div class="row">
              <div class="col-4">
                <a-icon type="user"/> {{product.name}}
              </div>
              <div class="col-4">
                <a-icon type="phone"/> {{product.img}}  
              </div>
              <div class="col align-self-end">
                <a-button type="primary" size="small" >แก้ไข</a-button>
                <a-button type="default" size="small" class="ml-2">ลบ</a-button>
              </div>
          </div>
          -->

          </div>


        </a-list-item>
      </a-list>
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
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Test | Realtime Database',
      products:{},
      model_product: {
        name: '',
        img: '',
        btu9: '',
        btu12: '',
        btu18: '',
        amount: '',
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
    }
  },
  methods: {
    insertToContact (model_product) {
      // let data = {
      //   name: model_product.name,
      //   img: model_product.img
      // }
      contactRef.push(model_product)
      // this.model_product
      this.model_product.name = ''
      this.model_product.img = ''
      this.model_product.btu9 = ''
      this.model_product.btu12 = ''
      this.model_product.btu18 = ''
      this.model_product.amount = ''
    }
    ,
    setUpdateContact (key, product) {
      this.model_update_product.key = key
      this.model_update_product.name = product.name
      this.model_update_product.img = product.img
    }
    ,
    updateContact(model_update_product) {
      
      // console.log(model_update_product)
      let data = {
        key:model_update_product.key,
        name:model_update_product.name,
        img:model_update_product.img,
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
    })
  }
}

// export default {
//   name: 'HelloWorld',
//   data () {
//     return {
//       msg: 'Index'
//     }
//   }
// }
</script>
