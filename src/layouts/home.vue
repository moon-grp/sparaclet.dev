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
          <p>
            Frontend developer with 2+ years of experience. <br />
            I create innovative, accessible and fast webapps using vuejs.
          </p>
        </div>
        <div class="q-gutter-sm q-mt-sm">
          <q-icon name="fab fa-github" style="color: #ccc;" size="35px" />
          <q-icon name="fab fa-twitter" style="color: #ccc;" size="35px" />
          <q-icon name="fab fa-linkedin" style="color: #ccc;" size="35px" />
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
          <div class="q-pa-md" style="max-width: 400px">
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
              action="mailto:olumidemm@gmail.com"
              method="get"
              enctype="text/plain"
            >
              <q-input
                filled
                v-model="name"
                label="Your name *"
                hint="Name and surname"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />

              <q-input
                filled
                type="number"
                v-model="age"
                label="Your age *"
                lazy-rules
                :rules="[
                  val => (val !== null && val !== '') || 'Please type your age',
                  val => (val > 0 && val < 100) || 'Please type a real age'
                ]"
              />

              <q-toggle
                v-model="accept"
                label="I accept the license and terms"
              />

              <div>
                <q-btn
                  label="Submit"
                  type="submit"
                  value="send"
                  color="primary"
                />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-sm"
                />
              </div>
            </q-form>
          </div>
        </q-card>
      </q-dialog>
    </div>
    <div class="col mobile-hide">
      <animation />
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
import animation from "../components/animation";

export default {
  name: "home",
  components: {
    animation
  },
  data() {
    return {
      value: 81,
      alert: "false",
      name: null,
      age: null,

      accept: false
    };
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
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

.font_style {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: #ec87e4;
}

.btn_font {
  font-family: "Oswald", sans-serif;
  font-size: 60px;
  font-weight: bold;
}
</style>
