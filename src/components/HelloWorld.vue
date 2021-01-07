<template>
  <div class="hello">
    <h1>{{ msg }}</h1> 
    <div class="row mb-3">
      <div class="col-4">
        <a-input v-model="name" placeholder="Name" size="small">
          <a-icon slot="prefix" type="user" />
        </a-input>
      </div>
      <div class="col-4">
        <a-input v-model="tel" placeholder="Tel." size="small">
          <a-icon slot="prefix" type="phone" />
        </a-input>  
      </div>
      <div class="col align-self-end">
        <a-button type="primary" size="small"  @click="insertToContact(tel, name)">สร้าง</a-button>
      </div>
    </div>    

    <div class="w-100 bg-white shadow rounded p-3">
      <p>FirebaseApp</p>
      <a-list bordered :data-source="data">
        <a-list-item :key="key" v-for="(contact, key) in contacts">
          <div class="w-100">
          
          <div class="row" v-if="updateKey === key">
              <div class="col-4">
                  <a-input v-model="updateName" placeholder="Name" size="small">
                    <a-icon slot="prefix" type="user" />
                  </a-input>
              </div>
              <div class="col-4">
                  <a-input v-model="updateTel" placeholder="Tel." size="small">
                    <a-icon slot="prefix" type="phone" />
                  </a-input>  
              </div>
              <div class="col align-self-end">
                <a-button type="primary" size="small"  @click="updateContact(updateTel, updateName)">บันทึก</a-button>
              </div>
          </div>

          <div class="row" v-else>
              <div class="col-4">
                <a-icon type="user"/> {{contact.name}}
              </div>
              <div class="col-4">
                <a-icon type="phone"/> {{contact.tel}}  
              </div>
              <div class="col align-self-end">
                <a-button type="primary" size="small" @click="setUpdateContact(key, contact)">แก้ไข</a-button>
                <a-button type="default" size="small" class="ml-2" @click="deleteContact(key)">ลบ</a-button>
              </div>
          </div>

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
var contactRef = database.ref('/contacts')

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Test | Realtime Database',
      contacts: {},
      tel: '',
      name: '',
      updateTel: '',
      updateName: '',
      updateKey: ''
    }
  },
  methods: {
    insertToContact (tel, name) {
      let data = {
        tel: tel,
        name: name
      }
      contactRef.push(data)
      this.tel = ''
      this.name = ''
    },
    setUpdateContact (key, contact) {
      this.updateKey = key
      this.updateTel = contact.tel
      this.updateName = contact.name
    },
    updateContact (tel, name) {
      contactRef.child(this.updateKey).update({
        tel: tel,
        name: name
      })
      this.updateKey = ''
      this.updateTel = ''
      this.updateName = ''
    },
    deleteContact (key) {
      contactRef.child(key).remove()
    }
  },
  mounted () {
    contactRef.on('value', (snapshot) => {
      this.contacts = snapshot.val()
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
