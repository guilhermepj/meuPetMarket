import {http} from './../.services/api.js'

export default {
    listar:() => {
        return http.get('api/produtos')
    },
    salvar:(anuncio)=>{
        return http.post('api/anuncio',anuncio)
    },
    apagar:(anuncio) =>{
        return http.delete('api/anuncio',{ data: anuncio})
    }
}