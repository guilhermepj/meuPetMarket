import api from '../api';

class criarProduto{ 
    async novoProduto(produtoObjeto) {
        const json = JSON.stringify(produtoObjeto);
        console.log(json);
        console.log(produtoObjeto);
        await api.post("api/user/products", json);
    }
    async delete(idProduto){
        //const json = JSON.stringify(idProduto);
        console.log(idProduto);
        await api.delete("api/user/products/"+idProduto);
    }
}

export default criarProduto