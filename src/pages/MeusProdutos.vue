<template>
<div>
    <Cabecalho />
    <div class="container fundo" >
        <!-- Inicio Titulo e novo produto -->
        <div class="row justify-content-between">
            <div class="col-4">
                <h1 class=""> Meus Produtos </h1>
            </div>
            <div class="col-3">
                <a href="/NovosAnuncios">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40%" height="40%" fill="green" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>
                </a>
            </div>
        </div>
        <!-- Fim Titulo e novo produto -->

        <div>
        <!-- Inicio Listagem dos meus anuncios -->
        <tr v-for="anuncio of anuncios" :key="anuncio">
            <td>
                <p>{{anuncio.nome}}</p>
                <div class="row fundoAnuncio">
                    <div class="col-md-3 listaimg" >
                        <img src="./../assets/login-dog.jpg" class="img-fluid"/>
                        <!-- <img :src="this.imageRequest.getImage(anuncio.imagem)" class="img-fluid"/> -->
                    </div>
                    <div class="col-md-4">
                        <h4>{{anuncio.nome}}</h4>
                    </div>
                    <div class="col-md-2">
                        <p> Quantidade:</p>
                        <p>Valor unitário:</p>
                        <button type="button" class="btn btn-danger" v-on:click="apagar(anuncio.idProduto)">
                            Delete
                        </button>
                    </div>
<<<<<<< HEAD

                    <div class="col-md-3">
                        <p>{{anuncio.quantidade}}</p>
                        <p>{{anuncio.valor}} </p>
                        <button type="button" class="btn btn-primary" @click="goToAnuncio()">
=======
                    <div class='col-md-2'>
                        <p>{{anuncio.quantidade}} </p>
                        <p>{{anuncio.preco}}</p>
                        <button type="button" class="btn btn-primary">
>>>>>>> ae3628d11c3eec56cec98a7446f79bbc2c720717
                            Ir para Anuncio
                        </button>
                    </div>
                </div>
            </td>
        <!-- Fim Listagem dos meu produtos -->
        </tr>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import Cabecalho from './../Components/Cabecalho.vue';
import Footer from './../Components/Footer.vue';
import router from '@/routes/router.js';
import ProdutoService from '../services/produtoService';
import CriarProduto from '../services/authentication/criarProduto';
//import ProdutoObjeto from '../services/authentication/requests/produtoObjeto';
//import ImageRequest from '../services/anuncios/imageRequest';

const produtoService = new ProdutoService();
//const imageRequest = new ImageRequest();

//let request = new ProdutoObjeto();

export default {
    name:'MeusProdutos',
    router,

    data(){
        produtoService.getProduto()
            .then(response => {
                // console.log(response.data);
                let json = JSON.stringify(response.data);
                let produto = JSON.parse(json);
                // console.log(produto.products)
                // console.log(response.data)
                //console.log(produto.products)
                // console.log(this.options)


                produto.products.forEach((value) => {
                    console.log('aaaa')
                    // console.log(JSON.parse(value))
                    // console.log(this.anuncios[0].nome)
                    // console.log(this.options)


                    this.anuncios.push({
                        idProduto: value.idProduto,
                        nome: value.nome,
                        descricao: value.descricao,
                        preco: value.preco,
                        quantidade: value.quantidade,
                        imagem: value.imagem
                        })
                    console.log("bvbbb")
                    //console.log(value.descricao)
                    //console.log(value.preco)
                    // console.log(index)
                    //console.log(index)
                    
                });

                // console.log(this.anuncios[0].nome)
                 

            }).catch((error) => {console.log(error);});
        return{
            //image: ImageRequest.getImage(),
            anuncios: [{idProduto: 0, nome: 'shampoo', descricao: 'a', quantidade: 20, preco: 50.00, imagem: 'a'}]
            
            //anuncios:[{nome: 'shampoo', quantidade: 20, valor: 50.00},{nome: 'casa dog', quantidade: 5, valor: 500.00},{nome: 'casa dog', quantidade: 5, valor: 500.00},{nome: 'casa dog', quantidade: 5, valor: 500.00}]
        }
    },
 
    components:{
        Cabecalho,
        Footer,
    },
    methods: {
        goToAnuncio(){
            router.push('/');
        }
    },

    mounted(){
        /*Anuncio.listar().then(resposta => {
            console.log(resposta)
            this.anuncios = resposta.data
        })
        remover(anuncio){
            Anuncio.apagar(anuncio).then(resposta =>{
            }).catch(e =>{
            })
        }*/

    },

    methods:{
        apagar(idProduto){
            const del = new CriarProduto();
            del.delete(idProduto);
            window.location.reload();
            //console.log(idProduto);
        }
    },


}
</script>


<style scoped>
img{
    border-radius: 25px;
}
.fundoAnuncio{
    border-radius: 25px;
    background: #C4C4C4;
    margin: 3%;
    padding: 1%;
}
</style>