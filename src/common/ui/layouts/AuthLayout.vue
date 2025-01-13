<template>
  <v-app app>
    <v-main
      class="min-h-screen wrapper-auth pa-0 pa-lg-10"
      :style="{ backgroundImage: `url(${SignInImage})` }"
    >
      <v-row class="h-100 " no-gutters>
        <v-col cols="12" md="5" class="col-form rounded rounded-md-lg">
          <router-view />
        </v-col>
        <v-col cols="12" md="7" class="d-none d-md-block  col-image">

        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import { SignInImage } from "@/common/resources/images";
</script>
<style>
.wrapper-auth {
  /* SignInImage */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}

.col-form {
  background-color: white;
}
.col-image {
  position: relative;
  overflow: hidden;
}
.bg-image {
  position: absolute;
  object-fit: cover;
  object-position: center;
  width: 100%;
}
</style>
