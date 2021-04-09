new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch:{
        valor(velho, novo){
            setTimeout(()=>{
                this.valor = 0
            },5000);
        }
    },
    computed: {
        resultado(){
            return this.valor == 37 ? 'Igual a 37' : this.valor
        }
    }
});