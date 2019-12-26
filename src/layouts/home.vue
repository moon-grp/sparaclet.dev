<template>
  <div class="row">
    <div class="col q-mt-xl q-ml-xl">
      <!--   <div class="q-mt-xl">
                  <q-avatar size="40px" >
      <img  src="~assets/mimo.png">
    </q-avatar>
              </div> -->
      <div class="q-mt-sm">
        <span class="font_nav">
          About
        </span>
      </div>
         <div class="q-mt-sm" ref="contact">
                <span class="font_nav">
              Experience
            </span>
              </div> 
      <div class="q-mt-sm q-mb-xl">
        <span class="font_nav">
          Projects
        </span>
      </div>
      <div class="q-mt-xl pusherT">
        <span class="font_name">
          Olumide Adebayo
        </span>
           <div class="font_style">
      <span>    I have over three years of experience building responsive and accessible websites </span>
      <span> I primarily work with ReactJS.</span>
      </div>
      <div class="q-gutter-sm q-mt-sm">
      <q-icon name="fab fa-github" style="color: #ccc;" size="35px"/> 
       <q-icon name="fab fa-twitter" style="color: #ccc;" size="35px"/> 
        <q-icon name="fab fa-linkedin" style="color: #ccc;" size="35px"/> 
      </div>
      </div>
   
      <div>
        <q-btn
          elevated
          size="lg"
          style="background: #BFFCF9;"
          label="send me a message"
          class="shadow-7 q-mt-md btn_font"
          @click="alert = true"
        />
      </div>
      <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>
    <div class="col">
        <animation /> 
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
import animation from "../components/animation"
export default {
  name: "home",
  components: {
    animation
  },
  data() {
    return {
      value: 81,
      alert:'false'
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Baloo+Bhai|Oswald:300,400&display=swap");
.font_nav {
  font-family: "Oswald", sans-serif;
  font-size: 25px;
  color: #ec87e4;
}
.font_name {
  font-family: "Baloo Bhai", cursive;
  font-size: 47px;
  color: #ec87e4;
  font-weight: 400;
}

.pusherT {
  margin-top: 15%;
}

.font_style{
   font-family: "Oswald", sans-serif;
   font-size: 20px;
   color: #ec87e4;
}

.btn_font{
   font-family: "Oswald", sans-serif;
   font-size: 60px;
   font-weight: bold;
   
}

body {
  min-height: 100vh;
  border-style: double;
  border-color: #bffcf9;
  border-width: 5px;
}
</style>
