<<template>
    <div>
     <header>
        <h1>Income Tracker</h1>
        <div class="total-income">${{ totalIncome }}</div>
     </header>
        <FormTransaction  @add-Income="AddIncome($event)"/>
        <div class="income-list" >
             <div class="income-item" v-for="income in sortedIcome " :key="income.id">
                <div class="removeItem">X</div>
                <div class="dsc">{{ income.text }}</div>
                <div class="price">{{ income.amount }}</div>
                <div class="date">{{ formatedDate(income.date) }}</div>
             </div>
        </div>
    </div>
</template>

<script>

import FormTransaction from '../components/FormTransaction.vue'
    export default {
        name: 'count',
        components:{
            FormTransaction,
        },
        data(){
            return{
                incomes: [],
            }
        },
        computed:{
            totalIncome(){
                let temp = 0
                if(this.incomes.length > 0){
                    for(let i = 0; i < this.incomes.length; i++){
                          temp += this.incomes[i].amount
                    }
                    //deuxieme loop permettant de verifier la valeur entre par l'utilisateur
                }
                return temp
                
            },

            //classement de l'historique pas ordre alphabetique
            sortedIcome(){
                let temp = []

                temp = this.incomes.sort((a, b) =>{
                    return b.date - a.date
                })
                return temp
            }
           
        },
        methods:{
             AddIncome(data){
                let d = data.date.split("-")
                let newD = new Date(d[0], d[1], d[2])
                this.incomes = [...this.incomes, {
                    id: Date.now(),
                    text: data.text,
                    amount: parseInt(data.amount),
                    date: newD.getTime()
                }]
                console.log(this.incomes)
            },
            formatedDate (x){
                let date = new Date(x)
                let day = date.getDate()
                let month = date.getMonth()
                let year = date.getFullYear()
                return day + "/" + month + "/" + year
            },

            
        }
        // setup() {
        //     const state = reactive({
        //         icome: [{
        //             value: 400
        //         }],
        //         totalIncome: computed(() => {
        //             let temp = 0

        //             if(state.income.length > 0){
        //                 for (let i = 0; i < state.income.length; i++){
        //                     temp += state.income[i].value
        //                 }
        //             }
        //             return temp
        //         })
        //     })
        //     return{
        //         Header,
        //         state
        //     }
        // }
    }
</script>

<style lang="scss" scoped>
header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 30px;
        background-color: #313131;
        border-bottom: 5px solid #ffce00;
    }

    header h1{
        color: #eee;
        font-size: 28px;
    }

    header .total-income{
        font-family: sans-serif;
        background-color: #ffce00;
        color: #fff;
        font-size: 20px;
        font-weight: 900;
        padding: 5px 10px;
        min-width: 100px;
        text-align: center;
        border-radius: 8px;
        box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25);
        text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    }
    .income-list{
        margin-top: 30px;
        padding: 15px;
        background-color: #fff;
    }
    .income-item{
    position: relative;
    display: flex;
    padding: 15px 15px 15px 0px;
    background-color: rgba(246, 248, 244, 0.932);
    border-radius: 8px;
    max-width: 600px;
    margin: 0 auto 30px;
}
.removeItem{
    color: #ef2d2d;
    font-weight: 600;
    font-size: 20px;
    line-height: 1;
    text-align: center;
    margin: 0 15px
}
.dsc{
    color: #656;
    flex: 1 1 100%;
    font-size: 20px;
}
.price{
    color: #656;
    min-width: 100px;
    font-size: 20px;
}
.date{
    color: #656;
    text-align: right;
    font-size: 20px;
}
</style>