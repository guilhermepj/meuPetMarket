import api from './api';

class ProdutoService { 
    getProduto() {
        return api.get("api/user/1/products");
    }
}

export default ProdutoService