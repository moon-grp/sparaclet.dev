<template>
<div>
    <div class="row q-mt-sm">
      <div class="heart"></div>
      <div class="decagon"></div>
      <div class="rabbet"></div>
      <div class="heart"></div>
      <div class="square"></div>
    </div>
    <div class="row pushert">
      <div class="eclipse q-ml-xl"></div>
      <div id="pacman"></div>
      <div class="lol_arr"></div>
      <div class="nonagon"></div>
      <div class="circle_ish"></div>
    </div>
    <div class="row pushert">
       <div id="pacman"></div>
      <div class="heart"></div>
      <div class="circle_ish"></div>
     <div class="rabbet"></div>
    </div>
    <div class="row q-mt-sm">
      <div class="heart"></div>
      <div class="decagon"></div>
      <div class="rabbet"></div>
      <div class="heart"></div>
      <div class="square"></div>
    </div>

  <!--  <div class="row">
      <div class="square"></div>
    <div class="circle_ish"></div>
    <div class="eclipse"></div>
    <div class="decagon"></div>
     <div class="nonagon"></div>
     <div class="rabbet"></div>
     <div class="lol_arr"></div>
    </div> -->

</div>
    
</template>

<script>
import anime from "animejs";
export default {
    name:'animation',
    data() {
        return {
            
        }
    },
     methods: {
  animatesircles() {
      anime({
        targets: "#pacman",
        easing: "linear",
        delay: 800,
        duration:2000,
       
        loop:true
      }); 

        anime({
        targets: ".blockk",
        backgroundColor:"#6c6c6c",
        easing: "linear",
        delay: 800,
        duration:200,
        translateY: "45%",
      }); 
     
    }
  },
     mounted(){
    this.animatesircles()
  }
    
}
</script>


<style scoped>

.pushert{
  margin-left: 20%;
}

.blockk {
    clip-path: polygon(50% 0%, 100% 64%, 100% 89%);
    background-color: blueviolet;
    width: 200px;
  height: 200px;
}

.square{
    clip-path: polygon(0 0, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0);
    background-color: #F9F871;
    width: 40px;
    height: 40px;
  

}

.circle_ish{
    clip-path: circle(76.1% at 50% 100%);
     background-color: #FFD767;
    width: 100px;
    height: 100px;
}

.eclipse{
    clip-path: ellipse(16% 40% at 50% 52%);
     background-color: #EC87E4;
    width: 50px;
    height: 50px;
}

.decagon{
    clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
      background-color: #FFB47A;
    width: 100px;
    height: 100px;
}

.nonagon{
    clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
     background-color: #FF87C2;
    width: 100px;
    height: 100px;
}

.rabbet{
    clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
      background-color: #FF979C;
    width: 80px;
    height: 80px;
}

.lol_arr{
    clip-path: polygon(50% 89%, 100% 0, 55% 0, 55% 100%, 100% 49%, 0 49%, 44% 100%, 45% 0, 0 0);
       background-color:#9C3C97;
    width: 100px;
    height: 100px;
}

#pacman {
      width: 0px;
      height: 0px;
      border-right: 60px solid transparent;
      border-top: 60px solid red;
      border-left: 60px solid red;
      border-bottom: 60px solid red;
      border-top-left-radius: 60px;
      border-top-right-radius: 60px;
      border-bottom-left-radius: 60px;
      border-bottom-right-radius: 60px;
    }

.heart {
  position: relative;
  
  width: 200px;
  height: 160px;
}
.heart:before,
.heart:after {
  position: absolute;
  content: "";
  
  width: 100px;
  height: 160px;
  left: 100px;
  
  background-color: tomato;
  
  border-radius: 100px 100px 0 0;
  
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}
.triangle {
  width: 0;
  height: 0;
}


.triangle .triangle-top-left {
  border-top: 100px solid #32557f;
  border-right: 100px solid transparent;
}

.triangle .triangle-top-right {
  border-top: 100px solid #32557f;
  border-left: 100px solid transparent;
}

.triangle .triangle-bottom-left {
  border-bottom: 100px solid #32557f;
  border-right: 100px solid transparent;
}

.triangle .triangle-bottom-right {
  border-bottom: 100px solid #32557f;
  border-left: 100px solid transparent;
}
</style>