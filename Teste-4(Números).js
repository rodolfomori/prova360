const TextService = require('./services/latters')

class KlingonText {
    constructor() {
        this.service = new TextService()
    }

    async getLatters() {
        const result = await this.service.getLatters()
        return result.data
    }

    async findInText() {
        let klingon = await this.getLatters()
        klingon = klingon.replace(/(\r\n|\n|\r)/gm, "") // Retira caracteres de quebra de linha.
        klingon = klingon.split(' ')

        const general = function (p) {

            const orderNumbers = ['k', 'b', 'w', 'r', 'q', 'd', 'n', 'f', 'x', 'j', 'm', 'l', 'v', 'h', 't', 'c', 'g', 'z', 'p', 's']

            const index = p => orderNumbers.indexOf(p)//verifica o valor do dígito
            const powTwenty = function (p, i = 0) {   // verifica valor da letra em base 20.
                return p * (Math.pow(20, i))
                i++
            }

            const sum = (p, x) => p + x // soma os caracteres para chegar ao valor que a palavra representa.

            return (p.split(''))
                .map(index)
                .map(powTwenty)
                .reduce(sum)
        }

        const biggerThen = p => p >= 440566 // verifica se o número é maior que 440566
        const divThree = p => p % 3 == 0 // verifica se é divisível por 3

        const result = (
            klingon
                .map(general)
                .filter(biggerThen)
                .filter(divThree)
        ).length

        return `O texto possui ${result} números bonitos!`
    }
}

const text = new KlingonText()
text.findInText().then(res => {
    console.log(res)
})

