<template>
  <v-app-bar app class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span
        @click="navigateTo({name: 'root'})"
        class="home">
          TabTracker
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn depressed dark class="cyan" router to="songs">Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn depressed dark class="cyan" router to="login"
        v-if="!$store.state.isUserLoggedIn">
        Login
      </v-btn>
      <v-btn depressed dark class="cyan" router to="register"
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
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
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
