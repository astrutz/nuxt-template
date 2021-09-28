<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1>Das ist ein Test!</h1>
      <NuxtLogo />
    </v-col>
  </v-row>
</template>

<script>
import NuxtLogo from "../components/NuxtLogo.vue";

export default {
  components: {
    NuxtLogo,
  },
};
</script>