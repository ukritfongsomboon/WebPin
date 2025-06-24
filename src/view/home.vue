<template>
  <div class="layout-main">
    <div class="header-content">
      <div>
        <v-img
          :src="pyramidImg"
          style="max-width: 80px; width: 80px"
          class="mr-5 image-none"
        ></v-img>
      </div>
      <div>
        <div class="title-content">การจัดเรียงทรงกลมแบบพีระมิด</div>
        <div class="sub-title-content">การจัดเรียงแบบสามเหลี่ยมและสี่เหลี่ยมผืนผ้า</div>
      </div>
    </div>
    <div class="box-choice">
      <div @click="goToProject('calculate1')" class="box-choice-content1">
        <div class="d-flex align-center justify-center">
          <v-img
            :src="icon1"
            style="max-width: 80px; width: 80px"
          ></v-img>
          <div class="choice-title">THEORY</div>
        </div>
        <hr
          style="border: 1px solid #e8f2ff"
          class="my-5"
        />
        <div class="choice-description">
          หากต้องการหา<br />
          จำนวนลูก ความสูงของการจัดเรียง
        </div>
      </div>
      <div @click="goToProject('calculate2')" class="box-choice-content2">
        <div class="d-flex align-center justify-center">
          <v-img
            :src="icon1"
            style="max-width: 80px; width: 80px"
          ></v-img>
          <div class="choice-title">APPLIED</div>
        </div>
        <hr
          style="border: 1px solid #ffe7e9"
          class="my-5"
        />
        <div class="choice-description">
          หากต้องการหา<br />
          จำนวนชั้น ความสูงของการจัดเรียงและ<br />
          ทรงกลมที่เหลือจากการจัดเรียง
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import pyramidImg from '../assets/pyramid1.png'
import icon1 from '../assets/icon1.png'
import { useRouter } from 'vue-router';
const router = useRouter();
function goToProject(namePage) {
  router.push({
    name: namePage
  });
}
</script>

<style scoped>
.layout-main {
  height: 100vh;
  width: 100%;
  background-image: url('../assets/background.png');
  background-size: cover;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.header-content {
  width: 80%;
  max-width: 600px;
  background-color: #5186cd;
  padding: 15px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.title-content {
  font-size: 30px;
  text-align: center;
  color: white;
  font-weight: 600;
}
.sub-title-content {
  font-size: 20px;
  text-align: center;
  color: white;
}

.box-choice {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
}
.box-choice-content1 {
  min-width: 400px;
  background-color: white;
  padding: 30px 20px;
  border-radius: 20px;
  margin: 10px;
  border: #5186cd 1px solid;
}

.box-choice-content1:hover {
  box-shadow: #5186cd 0px 2px 8px 0px;
  min-width: 410px;
}
.box-choice-content2 {
  min-width: 400px;
  background-color: white;
  padding: 30px 20px;
  border-radius: 20px;
  margin: 10px;
  border: #ff7989 1px solid;
}

.box-choice-content2:hover {
  box-shadow: #ff7989 0px 2px 8px 0px;
  min-width: 410px;
}

.choice-title {
  font-size: 32px;
  font-weight: 300;
  text-align: center;
}
.choice-description {
  text-align: center;
  font-size: 20px;
}
@media (max-width: 700px) {
  .image-none {
    display: none;
  }
  .header-content {
    padding: 15px;
    border-radius: 20px;
  }
}
@media (max-width: 500px) {
  .title-content {
    font-size: 22px;
  }
  .sub-title-content {
    font-size: 18px;
  }

  .box-choice-content1 {
    min-width: unset;
    width: 90%;
  }
  .box-choice-content2 {
    min-width: unset;
    width: 90%;
  }
  .box-choice-content1:hover {
    min-width: unset;
    width: 95%;
  }
  .box-choice-content2:hover {
    min-width: unset;
    width: 95%;
  }
}
</style>
