<template>
  <div class="layout-calculate">
    <div class="d-flex justify-center">
      <div class="header-page d-flex">
        <v-img
          :src="icon1"
          style="max-width: 40px; width: 40px"
        ></v-img
        >จํานวนลูก ความสูงของการจัดเรียง
      </div>
    </div>
    <div class="box-input">
      <div class="card-input">
        ชั้นในการจัดเรียง :
        <v-text-field
          v-model="input.level"
          color="#5186cd"
          variant="outlined"
          density="compact"
          :disabled="loading"
          :rules="[validateLevel]"
        ></v-text-field>
      </div>
      <div class="card-input">
        รัศมีของทรงกลม :
        <v-text-field
          v-model="input.radius"
          color="#5186cd"
          variant="outlined"
          density="compact"
          :disabled="loading"
          :rules="[validateRadius]"
        ></v-text-field>
      </div>
      <div class="card-input">
        จํานวนลูกแนวยาว :
        <v-text-field
          v-model="input.countLongitudinal"
          color="#5186cd"
          variant="outlined"
          density="compact"
          :disabled="loading"
          :rules="[validateCountLongitudinal]"
        ></v-text-field>
      </div>
      <div class="card-input">
        จํานวนลูกแนวกว้าง :
        <v-text-field
          v-model="input.countWidth"
          color="#5186cd"
          variant="outlined"
          density="compact"
          :disabled="loading"
          :rules="[validateCountWidth]"
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
        color="#5186cd"
        size="large"
        class="mx-1"
        :loading="loading"
        rounded="xl"
        @click="calAll()"
        >คำนวณ<v-icon size="30">mdi-gesture-tap</v-icon></v-btn
      >
    </div>
    <div class="box-output-all">
      <div class="box-output">
        <div class="card-output">
          <div class="title-output">การจัดเรียงแบบพีระมิดฐาน สามเหลียม</div>
          <hr
            style="border: 1px solid #e8f2ff"
            class="my-5"
          />
          <div class="val-output">จํานวนลูก = {{ triangle.count }}</div>
          <div class="val-output">ความสูง = {{ triangle.height }}</div>
        </div>
      </div>
      <div class="box-output">
        <div class="card-output">
          <div class="title-output">การจัดเรียงแบบพีระมิดฐาน สีเหลียม</div>
          <hr
            style="border: 1px solid #e8f2ff"
            class="my-5"
          />
          <div class="val-output">จํานวนลูก = {{ rectangular.count }}</div>
          <div class="val-output">ความสูง = {{ rectangular.height }}</div>
        </div>
      </div>
      <div class="box-output">
        <div class="card-output">
          <div class="title-output">การจัดเรียงแบบพีระมิดฐาน สีเหลียมผืนผ้า</div>
          <hr
            style="border: 1px solid #e8f2ff"
            class="my-5"
          />
          <div class="val-output">จํานวนลูก = {{ rectangle.count }}</div>
          <div class="val-output">ความสูง = {{ rectangle.height }}</div>
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
  level: null, //ชั้น
  radius: null, //รัศมี
  countLongitudinal: null, //จํานวนลูกแนวยาว
  countWidth: null, //จํานวนลูกแนวยาว
})

function validateLevel() {
  if (input.value.level >= 0) {
    return true
  } else {
    return false || 'กรุณาใส่ค่ามากกว่าหรือเท่ากับ 0'
  }
}
function validateRadius() {
  if (input.value.level >= 0) {
    return true
  } else {
    return false || 'กรุณาใส่ค่ามากกว่าหรือเท่ากับ 0'
  }
}
function validateCountLongitudinal() {
  if (input.value.level >= 0) {
    return true
  } else {
    return false || 'กรุณาใส่ค่ามากกว่าหรือเท่ากับ 0'
  }
}
function validateCountWidth() {
  if (input.value.level >= 0) {
    return true
  } else {
    return false || 'กรุณาใส่ค่ามากกว่าหรือเท่ากับ 0'
  }
}
// สามเหลียม
let triangle = ref({
  count: null,
  height: null,
})
// สีเหลียม
let rectangular = ref({
  count: null,
  height: null,
})
// สี่เหลี่มผืนผ้า
let rectangle = ref({
  count: null,
  height: null,
})

// สามเหลียม
function calTriangle() {
  let n = input.value.level
  let r = input.value.radius
  let l = input.value.countLongitudinal
  let w = input.value.countWidth
  // Tn
  const Tn = (n * (n + 1) * (n + 2)) / 6
  //hT
  const sqrt2 = Math.sqrt(2)
  const factor = (2 * sqrt2) / 3
  const inner = 2 * r * n - ((2 - sqrt2) / 2) * r
  const hT = factor * inner

  triangle.value.count = Tn //จํานวนลูก(Tn)
  triangle.value.height = hT //ความสูง(ht)
}

// สีเหลียม
function calRectangular() {
  let n = input.value.level
  let r = input.value.radius
  let l = input.value.countLongitudinal
  let w = input.value.countWidth

  // Sn
  const Sn = (n * (n + 1) * (2 * n + 1)) / 6

  // hs
  const sqrt3 = Math.sqrt(3)
  const factor = (2 * sqrt3) / 6
  const hs = factor * r * (3 * n + sqrt3)
  rectangular.value.count = Sn //จํานวนลูก(Sn)
  rectangular.value.height = hs //ความสูง(hs)
  console.log('rectangular')
}

// สี่เหลี่มผืนผ้า
function calRectangle() {
  let n = input.value.level
  let r = input.value.radius
  let l = input.value.countLongitudinal
  let w = input.value.countWidth

  // Rn
  const numerator = (n - 1) * (2 * n - 3 * (l + w) + 1)
  const bracket = numerator / 6
  const Rn = Math.pow(n, 2) * w * l * bracket

  // hR
  const sqrt3 = Math.sqrt(3)
  const part1 = (2 / 3) * r * (3 * n + sqrt3)
  const square1 = Math.pow(part1, 2)

  const square2 = Math.pow(r, 2) * Math.pow(2 * w - 1, 2) + Math.pow(2 * r * l, 2)
  const hR = Math.sqrt(square1 - square2 / 4)

  rectangle.value.count = Rn //จํานวนลูก(Rn)
  rectangle.value.height = hR //ความสูง(hR)
  console.log('rectangle')
}

function calAll() {
  calTriangle()
  calRectangular()
  calRectangle()
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
  background-color: #5777a1;
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
  box-shadow: #5186cd 0px 2px 8px 0px;
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
  box-shadow: #5186cd 0px 2px 8px 0px;
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
