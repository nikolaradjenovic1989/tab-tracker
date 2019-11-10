<template>
  <v-app-bar app class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link
        tag="span"
        class="home"
        :to="{name: 'songs'}">
          TabTracker
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn depressed dark class="cyan" :to="{name: 'songs'}">Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn depressed dark class="cyan" :to="{name: 'login'}"
        v-if="!$store.state.isUserLoggedIn">
        Login
      </v-btn>
      <v-btn depressed dark class="cyan" :to="{name: 'register'}"
        v-if="!$store.state.isUserLoggedIn">
        Sign Up
      </v-btn>
      <v-btn depressed dark class="cyan" @click="logout"
        v-if="$store.state.isUserLoggedIn">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: mediumblue
}
</style>
