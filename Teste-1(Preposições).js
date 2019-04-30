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

        const wordLength = p => p.length == 3 // verificar se a palavra possui 3 caracteres
        const latterBar = p => p[2] != 's' && p[2] != 'l' && p[2] != 'f' && p[2] != 'w' && p[2] != 'e' && p[2] != 'k' // verifica se termina com uma letra tipo bar.
        const noD = p => p[0] != 'd' && p[1] != 'd' && p[2] != 'd' // verifica se a palavra não possui 'd'

        const result = (
            klingon
                .filter(wordLength)
                .filter(latterBar)
                .filter(noD)
        ).length

        return `O texto possui ${result} preposições!`
    }
}

const text = new KlingonText()
text.findInText().then(res => {
    console.log(res)
})

