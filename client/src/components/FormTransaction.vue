<template>
    <div>
        <form action="#">
            <input type="text" placeholder="Description..." v-model="text" required =" true" >
            <input type="number" placeholder="Value..." v-model="amount">
            <input type="date" placeholder="Date..." v-model="date">
            <input type="submit" value="SUBMIT" @click.prevent="formHandler">
            <button :disabled ="diseable" @click.prevent="addValue">CHECKDB</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "FormTransaction",
        props:{
            state: Object
        },
        data(){
            return{
                  text: "",
                  amount: Number,
                  date: "",
                  error:"",
                  diseable: false
            }
        },
        methods:{
            formHandler(){
                this.$emit('add-Income',{
                    text: this.text,
                    amount: this.amount,
                    date: this.date
                })
                this.text = ""
                this.amount = Number
                this.date = ""
            },
            checkValue(){
                if(this.text == "" && this.amount ==""){
                   return this.diseable = true
                }else{
                    return this.diseable = false
                }
            },
            //methods tha allow us to enter new value in user acount
            async addValue(){
                try {
                    const res = await fetch('http://localhost:3001/transaction/',{
                      headers: { 'Content-type': 'application/json', 'authorization': `Bearer ${localStorage.getItem("user")}` },
                      method: 'POST',
                      body: JSON.stringify({
                      text: this.text,
                      amount: this.amount,
                   }) 
              })
              const data = await res.json()
              console.log(data)
              if(data.errors){
                this.error = data.errors
                console.log(this.error)
                this.errorDis = true
                return
              }
                } catch (error) {
                    console.log(error)
                }
            }
        },
        
        
    }
</script>

<style scoped>
form{
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

form input{
    color: #888;
    border: none;
    outline: none;
    font-size: 20px;
}

form input::placeholder{
    color: #aaa;
}

form input:not([type="submit"]){
    display: block;
    background: #fff;
    border: none;
    outline: none;
    padding: 5px 15px;
}

form input[type="submit"]{
    display: block;
    background: none;
    border: none;
    outline: none;

    color: #fff;
    font-weight: 500;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    padding: 5px 15px;
    background-color: #ffce00;
    cursor: pointer;
}

form input:first-of-type{
    border-radius: 8px 0px 0px 8px;
}

from input:last-of-type{
    border-radius: 0px 8px 8px 0px;
}
</style>