const axios = require ('axios')

class LattersService {
    constructor(){
        this.url = 'https://raw.githubusercontent.com/financas360/provas/master/klingon-textoA.txt'
    }
    getLatters(){
        try{
            return axios.get(this.url)
        } catch{e}{ 
            console.log(e)
            return Promise.reject(e)
        }
    }
}
module.exports = LattersService