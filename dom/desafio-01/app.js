new Vue({
    el:'#desafio',
    data:{
        nome: 'Paulo',
        idade: '24',
        imagem: 'https://i.pinimg.com/originals/de/f6/96/def69643889ee29e232637646e839064.jpg'
    },
    methods:{
        idadeMulti: function(){
            return this.idade*3
        },
        randNum: function(){
            return Math.random(0,1)
        }
    }
})