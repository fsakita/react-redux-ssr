require('isomorphic-fetch')

class TyreService {
  
    getTyres (callback) {
        fetch('../../data/products.json')
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server")
                }
                return response.json()
            })
            .then((tyres) => {
                callback(tyres)
            })
    }
  
  }
  
  export default new TyreService()