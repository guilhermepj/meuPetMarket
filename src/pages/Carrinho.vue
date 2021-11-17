<template>
<div>
    <Cabecalho />
    <div class="container fundo" >
        <div>
        <!-- Inicio Listagem dos meus anuncios -->
            <tr v-for="anuncio of anuncios" :key="anuncio">
                <td>
                    <div class="row fundoAnuncio">
                        <div class="col-md-2 listaimg" >
                        </div>
                        <!-- <div class="col-md-6 descricao">
                            <p>{{anuncio.nome}}</p>
                            <h2>R$ {{anuncio.valor}}</h2>
                            <br><br>
                            <button type="button" class="btn btn-primary" @click="comprar(anuncio)">
                                Adicionar ao carrinho
                            </button>
                            <p>{{anuncio.quantidade}} restantes</p>
                        </div> -->

                        <tr v-for="anuncio of anuncios" :key="anuncio">
                            <td>
                                <div class="row fundoAnuncio">
                                    <div class="col-md-3 listaimg" >
                                        <img src="./../assets/login-dog.jpg" class="img-fluid"/>
                                    </div>
                                    <div class="col-md-4">
                                        <h4>{{anuncio.nome}}</h4>
                                    </div>
                                    <div class="col-md-5">
                                        <p> disponível:</p>
                                        <p>Valor unitário:</p>
                                        <button type="button" class="btn btn-danger" @click="remover(anuncio)">
                                            Remover
                                        </button>
                                    </div>
                                </div>
                                <div>
                                   <button type="button" class="btn btn-primary" @click="comprar(anuncio)">
                                            Comprar!
                                        </button> 
                                </div>
                            </td>
                        <!-- Fim Listagem dos meu produtos -->
                        </tr>

                        <div class="col-md-2 listaimg" >
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

const produtoService = new ProdutoService();
            produtoService.getProduto()
            .then(response => {
                // console.log(response.data);
                let json = JSON.stringify(response.data);
                let produto = JSON.parse(json);
                // console.log(json)
                // console.log(response.data)
                //console.log(produto.products)
                // console.log(this.options)
                

                produto.products.forEach((value) => {
                    console.log(JSON.parse(value))
                    console.log('aaaa')
                    console.log(this.anuncios)
                    this.anuncios.push({
                        })
                    
                    //console.log(value.descricao)
                    //console.log(value.preco)
                    // console.log(index)
                    //console.log(index)
                    
                });

                console.log(this.anuncios[0].nome)
                 

            }).catch((error) => {console.log(error);});

export default {
    name:'MeusProdutos',
    router,

    data(){
        return{
            nome: '',
            quantidade: '',
            valor: '',
            produto: [],
            anuncios: [{nome: 'Shampoo Especial para Cachorro com muito pelo', quantidade: 20, valor: 199.90, descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}]
            //anuncios:[{nome: 'shampoo', quantidade: 20, valor: 50.00},{nome: 'casa dog', quantidade: 5, valor: 500.00},{nome: 'casa dog', quantidade: 5, valor: 500.00},{nome: 'casa dog', quantidade: 5, valor: 500.00}]
        }
    },
 
    components:{
        Cabecalho,
        Footer,
    },

    methods:{
        remover(){
            this.anuncios.pop();
            
        },
        comprar(){
            
            router.push('/');
        }
    }


}
</script>


<style scoped>
img{
    border-radius: 25px;
}
.fundo{
    padding-top: 20px;
}
.fundoAnuncio{
    border-radius: 25px;
    /* background: #C4C4C4; */
    margin: 3%;
    padding: 1%;
}
.descricao{
    text-align: left;
    padding-left: 50px;
    padding-top: 20px;
}
.dados{
    padding: 10px 20px;
    text-align: left;
}
</style>