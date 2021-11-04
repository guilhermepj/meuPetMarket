import api from './api';

class ProdutoService { 
    getProduto() {
        return api.get("api/user/2/products");
    }
}

export default ProdutoService