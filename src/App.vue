<template>
  <v-app id="app" :dark="$vuetify.theme.dark">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  .v-overlay {
      z-index: 6!important;
  }
</style>