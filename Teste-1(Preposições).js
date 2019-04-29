const LattersService = require('./services/latters')

class TextOne {
    constructor() {
        this.service = new LattersService()
    }

    async getLatters() {
        const result = await this.service.getLatters()
        return result.data
    }

    async findPrepositions() {
        let klingon = await this.getLatters()
        klingon = klingon.replace(/(\r\n|\n|\r)/gm, "");
        klingon = klingon.split(' ')

        const prep = p => p.length == 3
        const prep2 = p => p[2] != 's' && p[2] != 'l' && p[2] != 'f' && p[2] != 'w' && p[2] != 'e' && p[2] != 'k'
        const prep3 = p => p[0] != 'd' && p[1] != 'd' && p[2] != 'd'

        const result = (
            klingon
                .filter(prep)
                .filter(prep2)
                .filter(prep3)
        ).length

        return `O resultado é ${result}`
    }
}


const text = new TextOne()
text.findPrepositions().then(res => {
    console.log(res)
})

