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

        const wordLength = p => p.length >= 8 // verifica se a palavra tem 8 letras ou mais
        const letterFoo = p => p[p.length - 1] == 's' || p[p.length - 1] == 'l' || p[p.length - 1] == 'f' || p[p.length - 1] == 'w' || p[p.length - 1] == 'e' || p[p.length - 1] == 'k' // verifica se a palavra termina com uma letra do tipo foo
        const firstPerson = p => p[0] != 's' && p[0] != 'l' && p[0] != 'f' && p[0] != 'w' && p[0] != 'e' && p[0] != 'k' //verificar se está em primeira pessoa

        const result = 
            klingon
                .filter(wordLength)
                .filter(letterFoo)

        const result2 = 
            klingon 
                .filter(wordLength)
                .filter(letterFoo)
                .filter(firstPerson)

        return `O texto possui ${result.length} verbos! Destes, ${result2.length} estão em primeira pessoa!`
    }
}

const text = new KlingonText()
text.findInText().then(res => {
    console.log(res)
})