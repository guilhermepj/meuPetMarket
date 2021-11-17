class produtoObjeto{
    constructor(
        //idProduto,
        nome,
        descricao,
        preco,
        quantidade,
        imagem,
        idUsuario,
        ativo,
        idCategoria
        ){
        //this.idProduto = idProduto;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidade = quantidade;
        this.imagem = imagem;
        this.ativo = ativo;
        this.idUsuario = idUsuario;
        this.idCategoria = idCategoria;
    }
}

export default produtoObjeto;