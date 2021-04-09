new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque'
	},
	methods: {
		iniciarEfeito() {
			this.classe1 == 'destaque' ? this.classe1 = 'efeito' : this.classe1 = 'destaque'
		},
		iniciarProgresso() {

		}
	}
})
