<template>
  <div class="row q-gutter-lg q-pa-md spacing">
    <q-card class="card shadow-8">
      <img src="~assets/reiner.png" />
      <q-card-section>
        <div class="text-h6">Reiner</div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle2">
          Text translator built with vuejs and yandex Api
        </div>
      </q-card-section>
      <q-card-actions align="around">
        <q-btn flat round color="red" icon="fab fa-github" />
        <q-btn flat round color="red" icon="fas fa-link" />
      </q-card-actions>
    </q-card>

    <q-card class="card shadow-8">
      <img src="~assets/reiss.png" />
      <q-card-section>
        <div class="text-h6">Reiss</div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle2">
          Crypto currency dashboard built with quasar framework and
          cryptocompare api
        </div>
      </q-card-section>
      <q-card-actions align="around">
        <q-btn flat round color="red" icon="fab fa-github" />
        <q-btn flat round color="red" icon="fas fa-link" />
      </q-card-actions>
    </q-card>

    <q-card class="card shadow-8">
      <img src="~assets/expense.png" />
      <q-card-section>
        <div class="text-h6">Expense Tracker dashboard</div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle2">
          Expense tracker built with vuejs and vuetify
        </div>
      </q-card-section>
      <q-card-actions align="around">
        <q-btn flat round style="color: #ccc;" icon="fab fa-github" />
        <q-btn flat round style="color: #ccc;" icon="fas fa-link" />
      </q-card-actions>
    </q-card>

    <q-card class="card shadow-8">
      <img src="~assets/coffee.png" />
      <q-card-section>
        <div class="text-h6">Coffe shop</div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle2">coffe shop landing page</div>
      </q-card-section>
      <q-card-actions align="around">
        <q-btn flat round style="color: #ccc;" icon="fab fa-github" />
        <q-btn flat round style="color: #ccc;" icon="fas fa-link" />
      </q-card-actions>
    </q-card>

    <q-card class="card shadow-8">
      <img src="~assets/empdash.png" />
      <q-card-section>
        <div class="text-h6">
          Employee dashboard
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle2">
          employee dashboard built with vuejs and github api
        </div>
      </q-card-section>
      <q-card-actions align="around">
        <q-btn flat round style="color: #ec87e4;" size="25px" icon="fab fa-github" />
        <q-btn flat round style="color: #ec87e4;" size="25px" icon="fas fa-link" />
      </q-card-actions>
    </q-card>

    <q-card class="card shadow-8">
      <img src="~assets/insure.png" />
      <q-card-section>
        <div class="text-h6">
          Insurance dashboard
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle2">
          Insurance dashboard built with vuejs and vuebootsrap
        </div>
      </q-card-section>
      <q-card-actions align="around">
        <q-btn flat round style="color: #ec87e4;" icon="fab fa-github" />
      </q-card-actions>
    </q-card>
    <q-page-sticky position="bottom-left" >
      <q-btn fab icon="add" color="accent" />
    </q-page-sticky>
  </div>
</template>

<script>
export default {
  name: "projects"
};
</script>

<style>
.card {
  width: 320px;
}

.spacing {
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 2%;
  margin-bottom: 10%;
}
</style>
