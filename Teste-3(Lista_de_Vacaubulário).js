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
      klingon = klingon.replace(/(\r\n|\n|\r)/gm, "")// Retira caracteres de quebra de linha.
      klingon = klingon.split(' ')

      const textklingon = (p, i) => klingon.indexOf(p) == i // verifica se há palavras repetidas no texto.

      klingon =
         klingon
            .filter(textklingon)
            .join(' ')

      klingon = klingon.split()

      const orderNumbers = "k,b,w,r,q,d,n,f,x,j,m,l,v,h,t,c,g,z,p,s"

      const alphaOrder = function (a, b) {  // verifica a ordem alafabética em Klingon

         const len = a.length > b.length || a.length == b.length ? a.length : b.length

         for (let x = 0; x < len; x++) { 
            if (a[x] != b[x])
               return orderNumbers.indexOf(a[x]) - orderNumbers.indexOf(b[x])
         }
      }

      klingon[0] = 
         klingon[0]
            .split(" ")
            .sort(alphaOrder) 
            .join(" ")
  
      let result = klingon.join(' ')

      return `O texto em ordem alfabética Klingon é : ${result}!`
   }
}

const text = new KlingonText()
text.findInText().then(res => {
   console.log(res)
})