new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alertaBotao(){
            alert("Você clicou no botão");
        },
        salvaValores(event){
            console.log(event.target.value);
            this.valor = event.target.value;
        }
    }
})