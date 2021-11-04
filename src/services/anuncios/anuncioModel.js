class AnuncioModel {
    constructor(idProduto,
                nome,
                descricao,
                preco,
                quantidade,
                imagem) {
        this.idProduto = idProduto;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidade = quantidade;
        this.imagem = imagem;
    }
}

export default AnuncioModel;