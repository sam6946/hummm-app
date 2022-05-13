
<template>
  <v-app>
     <v-card
    class="mx-auto overflow-hidden"
    height="100vh"
    width="100vw"
  >
    <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <v-app-bar
      color="blue"
      dark
      prominent
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Track App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-head</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-card-text class="content">
      <div class="text">
          <h1> Bienvenue sur le site qui te permettra de garde de l'argent </h1> <hr>
      </div>
      <div class="text-2">
        <h3>
            Une nouvelle perseption de realiser votre reve en economisant <br> 
            merci d'avoir choisir <strong>Track App</strong>
          </h3>
      </div>
      <div class="btn">
        <v-btn
           color="primary"
           elevation="11"
           large>
           <router-link to="login-register" class="router"> Login/Register </router-link>
           </v-btn>
      </div>
    </v-card-text>
  </v-card>
  </v-app>
</template>


<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
html{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.content{
    /* background-image: url('../assets/home.webp'); */
    background-color: rgba(133, 135, 165, 1);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    width: 100vw;
    height: 100vw;
    /* background-color: rgba(0, 0, 0, 0.427); */
}
.text, .btn, .text-2{
    display: flex;
    justify-content: center;
    margin-top: 55px;
}

.router{
  text-decoration: none;
  color: #fff;
  font-size: 20px;
}
h1{
  color: #fff;
}
h3{
  font-size: 22px;
  color: #fff;
}
strong{
  color: blue;
}

</style>