new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		userClass: '',
		userClass4: '',
		danger: true	
	},
	methods: {
		iniciarEfeito() {
			this.classe1 == 'destaque' ? this.classe1 = 'efeito' : this.classe1 = 'destaque'
		},
		iniciarProgresso() {

		},
		setPerigo(){
			this.danger = !this.danger
		}
	}
})
