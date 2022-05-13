<template >
  <v-card
    class="mx-auto text-center"
    color="blue"
    dark
    max-width="600"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="text-h4 font-weight-thin">
        Transaction effectuer 
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn block text> <router-link to="profile" class="router"> Back-Home </router-link> </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
        name: "Statistique",
         data: () => ({
      value: [],
      incomes: [],
    }),
     created(){
            this.currentUser()
        },
        methods:{
          async currentUser(){
                try {
                 const res = await fetch('api/transaction',{
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
              console.log(this.incomes)
              const amounts = this.incomes.map(item => this.value.push(item.amount))
                    
                } catch (error) {
                    console.log(error)
                }            
          }
        }
    }
</script>

<style  scoped>

.router{
    color: #fff;
    text-decoration: none;
    font-size: 25px;
}

</style>