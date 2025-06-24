<template>
  <div class="layout-calculate">
    <div class="d-flex justify-center">
      <div class="header-page d-flex">
        <v-img
          :src="icon1"
          style="max-width: 40px; width: 40px"
        ></v-img
        >จํานวนชั้น ความสูงของการจัดเรียงและทรงกลมทีเหลือจากการจัดเรียง
      </div>
    </div>
    <div class="box-input">
      <div class="card-input">
        จํานวนลูกทังหมด :
        <v-text-field
          v-model="input.countall"
          color="#ff7989"
          variant="outlined"
          density="compact"
          hide-details
          :disabled="loading"
        ></v-text-field>
      </div>
      <div class="card-input">
        รัศมีของทรงกลม :
        <v-text-field
          v-model="input.radius"
          color="#ff7989"
          variant="outlined"
          density="compact"
          hide-details
          :disabled="loading"
        ></v-text-field>
      </div>
      <div class="card-input">
        จํานวนลูกแนวยาว :
        <v-text-field
          v-model="input.countLongitudinal"
          color="#ff7989"
          variant="outlined"
          density="compact"
          hide-details
          :disabled="loading"
        ></v-text-field>
      </div>
      <div class="card-input">
        จํานวนลูกแนวกว้าง :
        <v-text-field
          v-model="input.countWidth"
          color="#ff7989"
          variant="outlined"
          density="compact"
          hide-details
          :disabled="loading"
        ></v-text-field>
      </div>
    </div>
    <div class="d-flex justify-center my-5">
      <v-btn
        color="#496e5c"
        size="large"
        class="mx-1"
        :loading="loading"
        @click="
          router.push({
            name: 'FullLayout',
          })
        "
        rounded="xl"
        ><v-icon size="30">mdi-arrow-left</v-icon>กลับหน้าเมนู</v-btn
      >
      <v-btn
        color="#ff7989"
        size="large"
        class="mx-1"
        :loading="loading"
        rounded="xl"
        >คำนวณ<v-icon size="30">mdi-gesture-tap</v-icon></v-btn
      >
    </div>
    <div class="box-output-all">
      <div class="box-output">
        <div class="card-output">
          <div class="title-output">การจัดเรียงแบบพีระมิดฐาน สามเหลียม</div>
          <hr
            style="border: 1px solid #ffe7e9"
            class="my-5"
          />
          <div class="val-output">จํานวนชัน = {{ triangle.level }}</div>
          <div class="val-output">ความสูง = {{ triangle.height }}</div>
          <div class="val-output">เศษ = {{ triangle.fraction }}</div>
        </div>
      </div>
      <div class="box-output">
        <div class="card-output">
          <div class="title-output">การจัดเรียงแบบพีระมิดฐาน สีเหลียม</div>
          <hr
            style="border: 1px solid #ffe7e9"
            class="my-5"
          />
          <div class="val-output">จํานวนชัน = {{ rectangular.level }}</div>
          <div class="val-output">ความสูง = {{ rectangular.height }}</div>
          <div class="val-output">เศษ = {{ rectangular.fraction }}</div>
        </div>
      </div>
      <div class="box-output">
        <div class="card-output">
          <div class="title-output">การจัดเรียงแบบพีระมิดฐาน สีเหลียมผืนผ้า</div>
          <hr
            style="border: 1px solid #ffe7e9"
            class="my-5"
          />
          <div class="val-output">จํานวนชัน = {{ rectangle.level }}</div>
          <div class="val-output">ความสูง = {{ rectangle.height }}</div>
          <div class="val-output">เศษ = {{ rectangle.fraction }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import icon1 from '../assets/icon1.png'
const router = useRouter()
let loading = ref(false)
// input
let input = ref({
  countall: null, //ชั้น
  radius: null, //รัศมี
  countLongitudinal: null, //จํานวนลูกแนวยาว
  countWidth: null, //จํานวนลูกแนวยาว
})

// สามเหลียม
let triangle = ref({
  level: null,
  height: null,
  fraction: null,
})
// สีเหลียม
let rectangular = ref({
  level: null,
  height: null,
  fraction: null,
})
// สี่เหลี่มผืนผ้า
let rectangle = ref({
  level: null,
  height: null,
  fraction: null,
})

// สามเหลียม
function calTriangle() {
  let Tn = input.countall // จำนวนลูก(Tn)
  // หา n จากสูตร Tn = (n * (n + 1) * (n + 2)) / 6
  

  triangle.level = 0 // จํานวนชั้น(n)
  triangle.height = 0 //ความสูง(ht)
  triangle.fraction = 0 // เศษ
  console.log('triangle')
}

// สีเหลียม
function calRectangular() {
  let Sn = input.countall // จำนวนลูก(Sn)


  rectangular.level = 0 // จํานวนชั้น(n)
  rectangular.height = 0 //ความสูง(hs)
  rectangular.fraction = 0 // เศษ
  console.log('rectangular')
}

// สี่เหลี่มผืนผ้า
function calRectangle() {
  let Rn = input.countall // จำนวนลูก(Rn)

  rectangle.level = 0 // จํานวนชั้น(n)
  rectangle.height = 0 //ความสูง(hR)
  rectangle.fraction = 0 // เศษ
  console.log('rectangle')
}
</script>

<style scoped>
.layout-calculate {
  height: 100vh;
  width: 100%;
  background-image: url('../assets/background.png');
  background-size: cover;
  padding: 15px;
}
.header-page {
  font-size: 26px;
  padding: 10px 20px 10px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: #ff697b;
  width: fit-content;
  color: white;
}
.box-input {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
.card-input {
  margin: 10px;
  background-color: white;
  border-radius: 15px;
  padding: 15px;
  width: 45%;
  max-width: 300px;
  box-shadow: #ff8e9b 0px 2px 8px 0px;
}
.box-output-all {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.box-output {
  width: 30%;
  max-width: 500px;
  padding: 10px;
}
.card-output {
  background-color: white;
  min-height: 250px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: #ff8e9b 0px 2px 8px 0px;
}
.title-output {
  text-align: center;
  font-size: 22px;
}
.val-output {
  font-size: 20px;
}
@media (max-width: 1200px) {
  .box-output {
    width: 40%;
    max-width: 500px;
    padding: 10px;
  }
  .box-input {
    flex-wrap: wrap;
  }
  .card-input {
    width: 45%;
    max-width: 480px;
  }
}
@media (max-width: 870px) {
  .box-output {
    width: 100%;
    max-width: 500px;
    padding: 10px;
  }
  .card-input {
    width: 100%;
    max-width: 480px;
  }
}
</style>
