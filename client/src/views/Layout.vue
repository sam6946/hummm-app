<template>
  <v-layout class="tp">
    <v-row class="clickable">
      <v-col cols="12" md="12">
        <v-card  class="ml-5 mr-5">
          <v-app-bar
          dark
          color="blue"
          >
          <v-btn icon>
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-toolbar-title>Dashboard</v-toolbar-title>
          </v-app-bar>
        <v-container>
          <v-row>
            <v-col cols="12" sm="4">
              <v-hover
        v-slot:default="{ hover }"
        open-delay="200"
      >
       <v-card
       :elevation="hover ? 16 : 2"
        class="mx-auto"
        max-width="344"
        outlined

  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Account</v-list-item-title>

      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
       color="red darken-2"
      >
        <v-icon dark>fas fa-box</v-icon>
      </v-list-item-avatar>
    </v-list-item>
    <v-divider></v-divider>
    <v-card-actions>
      <v-icon flab color="red darken-2">local_offer</v-icon>
      <v-btn text>{{ total }} Frs</v-btn>
      <v-spacer></v-spacer>
      <!-- hello -->
      <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
        max-height="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <p
            v-bind="attrs"
            v-on="on"
            style=" border: none; position: absolute; margin-top:-10px; margin-left:10px  "
          ><v-icon flab color="#2C3A47"> mdi-chevron-right</v-icon></p>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Amount</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">{{ total }} Frs</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
      <!-- hello -->
      <!-- <v-icon flab color="#2C3A47" > mdi-chevron-right</v-icon> -->

    </v-card-actions>
  </v-card>
      </v-hover>

            </v-col>
            <v-col cols="12" sm="4">
              <v-hover
        v-slot:default="{ hover }"
        open-delay="200"
      >
       <v-card
       :elevation="hover ? 16 : 2"
        class="mx-auto"
        max-width="344"
        outlined

  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1"><router-link to="/historique" class="router"> Transaction  </router-link> </v-list-item-title>

      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
       color="#009432"
      >
        <v-icon dark>mdi-watch</v-icon>
      </v-list-item-avatar>
    </v-list-item>
    <v-divider></v-divider>
    <v-card-actions>
      <v-icon flab color="#009432">directions_walk</v-icon>
      <v-btn text>40,664</v-btn>
      <v-spacer></v-spacer>
      <v-icon flab color="#2C3A47">mdi-chevron-right</v-icon>

    </v-card-actions>
  </v-card>
      </v-hover>

            </v-col>
             <v-col cols="12" sm="4">
              <v-hover
        v-slot:default="{ hover }"
        open-delay="200"
      >
       <v-card
       :elevation="hover ? 16 : 2"
        class="mx-auto"
        max-width="344"
        outlined

  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Convert</v-list-item-title>

      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
       color="#F79F1F"
      >
        <v-icon dark>fas fa-balance-scale</v-icon>
      </v-list-item-avatar>
    </v-list-item>
    <v-divider></v-divider>
    <v-card-actions>
      <v-icon flab color="#F79F1F">description</v-icon>
      <v-btn text>300k</v-btn>
      <v-spacer></v-spacer>
      <v-icon flab color="#2C3A47">mdi-chevron-right</v-icon>

    </v-card-actions>
  </v-card>
      </v-hover>

            </v-col>
          </v-row>
        </v-container>
        </v-card>
      </v-col>
      <v-col cols="10" sm="12">
    <v-card class="px-2">
        <!-- <Carousel /> -->
    </v-card>

      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
// import Carousel from '../components/Carousel.vue'

  export default {
      name: 'layout',
    components: {
      // Carousel
    },
    data(){
      return{
        total: null,
        incomes: [],
      }
    },

     created(){
      this.currentUser()
      console.log("From Layout component " + JSON.parse(localStorage.getItem("user")))  
    },
    methods:{
      async currentUser(){
                       try {
                 const res = await fetch('api/transaction/',{
                 headers: { "Content-Type": "application/json", "authorization": "Bearer " + JSON.parse(localStorage.getItem("user")) },
                 method: 'GET',  
              })
              const data = await res.json()
              

              const positiveNumber = data.data.map(item => item.amount)
              //somme epagne
              const garde = positiveNumber.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
               //somme ayant ete retire
               const retrait = (positiveNumber.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2)
              //affichage de la transaction
              this.incomes = data.data
              this.total = positiveNumber.reduce((acc, item) => (acc += item), 0).toFixed(2)
              console.log(this.total)
                    
                } catch (error) {
                    console.log(error)
                }
      }
    }
  }
</script>

<style>
.tp{
    margin-top: -25em;
}
@media (max-width: 1483px) { 
.tp{
    margin-top: -78px;
}
 }
 .router{
   text-decoration: none;
   color: red;
 }

</style>