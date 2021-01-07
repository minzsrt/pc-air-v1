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

    <!--<div class="row justify-content-between mx-0 mb-3">
      <div class="col-md-4 px-0">
        <div class="w-100 bg-white rounded shadow">
          <div class="row mx-0">
            <div class="col-12 px-0">
              <div class="w-100">
              <img src="../assets/images/lg.png" class="img-fluid">
              </div>
            </div>
            <div class="col-12 mb-2">
              <div class="row mx-0">
                <div class="col px-0">
                  <span class="text-black-45 font-size-12">BTU</span>
                </div>
                <div class="col px-0 text-center">
                  <span class="text-black-45 font-size-12">จำนวน</span>
                </div>
                <div class="col px-0"></div>              
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="row mx-0">
                <div class="col px-0">
                  <span class="text-black-85 font-size-16">9,000</span>
                </div>
                <div class="col px-0 text-center">
                  <span class="text-black-85 font-size-16 font-weight-bold">2</span>
                </div>
                <div class="col px-0 text-right">
                  <a-button :size="'small'"><a-icon type="edit"/></a-button>
                </div>              
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="row mx-0">
                <div class="col px-0">
                  <span class="text-black-85 font-size-16">12,000</span>
                  <a-tag class="font-size-14">9,000</a-tag>
                </div>
                <div class="col px-0 text-center">
                  <span class="text-danger font-size-16 font-weight-bold">0</span>
                </div>
                <div class="col px-0 text-right">
                  <a-button :size="'small'"><a-icon type="edit"/></a-button>
                </div>              
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="row mx-0">
                <div class="col px-0">
                  <span class="text-black-85 font-size-16">18,000</span>
                </div>
                <div class="col px-0 text-center">
                  <span class="text-danger font-size-16 font-weight-bold">0</span>
                </div>
                <div class="col px-0 text-right">
                  <a-button :size="'small'"><a-icon type="edit"/></a-button>
                </div>              
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>-->
    <div class="w-100 rounded bg-white shadow p-3">
      <a-table bordered :columns="columns" :data-source="data">
        <!--body-->
        <div class="text-center" slot="img" slot-scope="logo" :class="{'position-relative': data.amount == 0}">
          <img :src="require(`@/assets/images/${logo}`)" height="40">
          <div class="position-absolute" v-if="data.amount == 0">
            <a-tag color="red">
              หมด
            </a-tag>
          </div>
        </div>
        <div class="text-center" slot="btu9" slot-scope="btu9_text">
          <span class="font-weight-bold" :class="{'text-danger':btu9_text == 0}">{{btu9_text > 0? btu9_text:0}}</span>
        </div>
        <div class="text-center" slot="btu12" slot-scope="btu12_text">
          <span class="font-weight-bold" :class="{'text-danger':btu12_text == 0}">{{btu12_text > 0? btu12_text:0}}</span>
        </div>
        <div class="text-center" slot="btu18" slot-scope="btu18_text">
          <span class="font-weight-bold" :class="{'text-danger':btu18_text == 0}">{{btu18_text > 0? btu18_text:0}}</span>
        </div>
        <div class="text-center" slot="amount" slot-scope="get_amount">
          <span class="font-weight-bold" :class="{'text-danger':get_amount == 0}">{{get_amount > 0? get_amount:0}}</span>
        </div>
        <div class="text-center" slot="active">
            <a-button :size="'small'"><a-icon type="edit"/></a-button>
        </div>
      </a-table>
    </div>
  </div>
</template>

<script>
const columns = [
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
];

const data = [
  {
    key: '1',
    name: 'samsung',
    img: 'samsung.png',
    btu9: 3,
    btu12: 0,
    btu18: 0,
    amount: 3
  },
  {
    key: '2',
    name: 'daikin',
    img: 'daikin.png',
    btu9: 0,
    btu12: 1,
    btu18: 0,
    amount: 1
  },
  {
    key: '3',
    name: 'haier',
    img: 'haier.png',
    btu9: 0,
    btu12: 0,
    btu18: 0,
    amount: 0
  }
];

export default {
  name: 'Overview',
  
  data () {
    return {
      msg: 'ภาพรวม',
      data,
      columns
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
