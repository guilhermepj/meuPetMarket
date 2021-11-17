<template>
<div>
    <Cabecalho />

    <div id="tipo" class="container fundo">
        <h2> Escolha o tipo de anuncio </h2>
        <br/>
        <!-- Inicio escolha do Tipo -->
        <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 25%" aria-valuenow="50%" aria-valuemin="25" aria-valuemax="100"></div>
        </div> 
        
        <div class="row espacamento">
			<div class=" col-md-6">
				<h4>Animais</h4>
				<a href="#">
                    <img src="./../assets/login-dog.jpg" alt="" class="imgBusca" v-on:click="tipoParaAnimais"/>
                </a>
			</div>
			<div class=" col-md-6">
				<h4>Produtos</h4>
				<a href="#">
					<img src="./../assets/produtos.png" alt="" class="imgBusca" v-on:click="tipoParaProdudos"/>
				</a>
			</div>
		</div>

        <div class="row justify-content-between espacamentoBotao">
            <div class="col-2">
                <button type="button" class="btn btn-secondary">
                    <a href="/MeusProdutos">
                        Voltar
                    </a>
                </button>
            </div>
            
        </div>
    </div>
    <!-- Fim escolha do Tipo -->
    <form @submit.prevent="salvar">
    <!-- Inicio escolha da Tipo Animais -->
    <div id="animais" class="container fundo">
        <h2> Categoria do Animal </h2>
        <br/>
        <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 50%" aria-valuenow="50%" aria-valuemin="50" aria-valuemax="100"></div>
        </div>
        <div class="row">
            
            <!-- Inicio escolha da Raça Cachorro -->
            <div class="col-md-6 espacamento">
                <h4> Raça do Cachorro </h4>
            </div>
            <div class="col-md-6 espacamento">
                <h4> Raça do Gato </h4>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="1" checked>
                        <label class="form-check-label" for="raca"> Buldogue francês</label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="2">
                        <label class="form-check-label" for="raca">Golden retriever </label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="3">
                        <label class="form-check-label" for="raca"> Labrador</label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo'
                         class="form-check-input" type="radio" name="raca" id="raca" value="4">
                        <label class="form-check-label" for="raca">Lhasa apso </label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="5">
                        <label class="form-check-label" for="raca">Maltês </label>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="6">
                        <label class="form-check-label" for="raca"> Pinscher</label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="7">
                        <label class="form-check-label" for="raca">Poodle</label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="8">
                        <label class="form-check-label" for="raca"> Shih tzu </label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="9">
                        <label class="form-check-label" for="raca">Yorkshire</label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="10">
                        <label class="form-check-label" for="raca">Outras raças de Cachorro</label>
                    </div> 
                </div>
            
            <!-- Fim escolha da Raça Cachorro -->

            <!-- Inicio escolha da Raça Gato -->
            
                <div class="col-md-3">
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="11">
                        <label class="form-check-label" for="raca"> Persa</label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="12">
                        <label class="form-check-label" for="raca">Siamês </label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="13">
                        <label class="form-check-label" for="raca"> Himalaia</label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="14">
                        <label class="form-check-label" for="raca">Maine Coon </label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="15">
                        <label class="form-check-label" for="raca">Angorá </label>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-check titulo">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="ino" id="raca" value="16">
                        <label class="form-check-label" for="raca"> Sphynx</label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="17">
                        <label class="form-check-label" for="raca">Ragdoll</label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="18">
                        <label class="form-check-label" for="raca"> Ashera </label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="19">
                        <label class="form-check-label" for="raca">American Shorthair </label>
                    </div>
                    <div class="form-check espacamento">
                        <input v-model='anuncio.tipo' class="form-check-input" type="radio" name="raca" id="raca" value="20">
                        <label class="form-check-label" for="raca">Outras raças de gato</label>
                    </div>
                </div>
            </div>
            <!-- Fim escolha da Raça Gato -->
        </div>
        <div class="row justify-content-between espacamento">
            <div class="col-3">
                <button type="button" class="btn btn-secondary" v-on:click="animaisParaTipo">
                    Voltar
                </button>
            </div>
            <div class="col-3">
                <button type="button" class="btn btn-primary" v-on:click="paraAnuncio">Proximo</button>
            </div>
        </div>   
    </div>
    <!-- Fim escolha do Tipo Animais -->

    <!-- Inicio escolha do tipo Produto -->
    <div id="produtos" class="container fundo">
        <h2> Categoria do Produto </h2>
        <br/>
        <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 50%" aria-valuenow="50%" aria-valuemin="50" aria-valuemax="100"></div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="21">
                    <label class="form-check-label" for="raca"> Ração</label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="22">
                    <label class="form-check-label" for="raca">Ossinhos e Petisco </label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="23">
                    <label class="form-check-label" for="raca"> Higiene</label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="24">
                    <label class="form-check-label" for="raca">Brinquedos </label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="25">
                    <label class="form-check-label" for="raca">Caminhas </label>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="26">
                    <label class="form-check-label" for="raca"> Adestramento</label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="27">
                    <label class="form-check-label" for="raca">Poodle</label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="28">
                    <label class="form-check-label" for="raca"> Saúde</label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="29">
                    <label class="form-check-label" for="raca">Roupas</label>
                </div>
                <div class="form-check espacamento">
                    <input class="form-check-input" type="radio" name="raca" id="raca" value="30">
                    <label class="form-check-label" for="raca">Outro</label>
                </div>
            </div>
        </div>
        <div class="row justify-content-between espacamento">
            <div class="col-3">
                <button type="button" class="btn btn-secondary" v-on:click="produtosParaTipo">
                    Voltar
                </button>
            </div>
            <div class="col-3">
                <button type="button" class="btn btn-primary" v-on:click="paraAnuncio">Proximo</button>
            </div>
        </div> 
    </div>
    <!-- Fim escolha do tipo Produto -->
    <!-- Inicio Dados do Anuncio -->
    <div id="informacoes" class="container fundo">
        <h2> Informações do Produto </h2>
        {{anuncio.nome}}
        {{anuncio.quantidade}}
        {{anuncio.valor}}

        <br/>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 75%" aria-valuenow="75%" aria-valuemin="75" aria-valuemax="100"></div>
        </div>
        <div>
                <div class="form-container">
                    <input type="text" v-model="anuncio.descricao" class="anuncio-input" placeholder="Descrição" />
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <input type="text" v-model="anuncio.nome" class="anuncio-input info" placeholder="Nome" />
                        <input type="text" v-model="anuncio.quantidade" class="anuncio-input info" placeholder="Quantidade" />
                        <input type="text" v-model="anuncio.valor" class="anuncio-input info" placeholder="Valor unitário" />
                    </div>
                    <div class="col-md-6">
                       <!-- <img src:"previewImage" class="img-fluid uploading-image"/> -->
                       <input type="file" accept="image/jpeg" @change="uploadImage">
                    </div>
                </div>
        </div>
        <div class="row justify-content-between espacamento">
            <div class="col-3">
                <button type="button" class="btn btn-danger">
                    <!--<a href="/MeusProdutos"> -->
                        Cancelar
                </button>
            </div>
            <div class="col-3">
                <button type="submit" class="btn btn-success" v-on:click="novoProduto">
                    <!-- <a href="/SucessoAnuncio"> -->
                        Finalizar
                </button>
            </div>
        </div> 
    </div>
    <!-- Fim Dados do Anuncio -->
    </form>
    <Footer />
</div>
</template>

<script>
import Cabecalho from './../Components/Cabecalho.vue';
import Footer from './../Components/Footer.vue';
import router from '@/routes/router.js';
import CriarProduto from '../../src/services/authentication/criarProduto';
import ProdutoObjeto from '../../src/services/authentication/requests/produtoObjeto';


let request = new ProdutoObjeto();
//import Anuncio from './../services/anuncios/anuncios'


export default {
    name:'NovosAnuncios',
    router,

    data(){
        return{
            anuncio:{
                nome: '',
                descricao: '',
                quantidade: '',
                tipo: '',
                valor: '',
                idUsuario: '',
                img: '',
            },
            selectedFile:null
        }
    },

    components:{
        Cabecalho,
        Footer,
    },


    methods:{
        tipoParaAnimais:function(){
            document.getElementById("tipo").style.display = "none";
            document.getElementById("animais").style.display = "block";
        },
        animaisParaTipo:function(){
            document.getElementById("animais").style.display = "none";
            document.getElementById("tipo").style.display = "block";
        },
        tipoParaProdudos:function(){
            document.getElementById("tipo").style.display = "none";
            document.getElementById("produtos").style.display = "block";
        },
        produtosParaTipo:function(){
            document.getElementById("produtos").style.display="none";
            document.getElementById("tipo").style.display="block";
        },
        paraAnuncio:function(){
            document.getElementById("animais").style.display = "none";
            document.getElementById("produtos").style.display = "none";
            document.getElementById("informacoes").style.display = "block";
        },
        informacoesParaProdut:function(){
            document.getElementById("produtos").style.display = "block";
            document.getElementById("informações").style.display = "none";
        },


        uploadImage(e){
           this.selectedFile = e.target.files[0];
            /*const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e=>{
                this.previewImage = e.target.result;
                //console.log(this.previewImage);
                //console.log(image);
                this.anuncio.img = this.previewImage;
                //console.log(this.anuncio.img);
            }*/
            const fd = new FormData();
            fd.append('image', this.selectedFile,this.selectedFile.name);
            console.log(fd);
            var objectURL = window.URL.createObjectURL(this.selectedFile);
            console.log(objectURL);
            this.anuncio.img = fd;
        },
        onUpload(){
            
        },
        
        salvar(){
            alert(this.anuncio.nome)

            //Anuncio.salvar(this.anuncio).then(resposta =>{alert('Salvo com Sucesso') })
        },
        novoProduto(){
            //this.anuncio.tipo = $("input[name='raca]:checked]").val();
            var intPreco = parseInt(this.anuncio.valor);
            var intQt = parseInt(this.anuncio.quantidade);
            var intTipo = parseInt(this.anuncio.tipo);

            //request.idProduto = null;
            request.nome = this.anuncio.nome;
            request.descricao = this.anuncio.descricao;
            request.preco = intPreco;
            request.quantidade = intQt;
            request.imagem = this.anuncio.img;
            request.ativo = 1;
            request.idUsuario = 1;
            request.idCategoria = intTipo;
            console.log('resquest: '+ request);

            const novoProduto = new CriarProduto();
            novoProduto.novoProduto(request);
        }

        
    },

    mounted(){

    }

}
</script>


<style scoped>

input{
    margin-top: 10px;
    margin-bottom: 5px;
    background-color: transparent;
    font-size: 16px;
    padding: 5px;
    border-bottom: 1px solid #00000040;
    font-size: arial;
    color: #000000bb;
    align-items: left;
}

#tipo{
    display: block;
}
#animais{
    display: none;
}
#produtos{
    display: none;
}
#informacoes{
    display: none;
}

.imgBusca{
    width: 50%;
    border-radius: 15%;
    height: 100%;
}
.espacamento{
    margin-top: 2%;
    margin-bottom: 2%;
}
.espacamentoBotao{
    margin-top: 5%;
}
.barraProgresso{
    margin: 50px;
    padding: 5%;
}
.titulo{
    margin-top: 2%;
}
.anuncio-container{
    border-radius: 0px 10px 10px 0px;
    z-index: 100;
    background-color: #fff;
    box-shadow: -5px 0 15px #00000020;
    align-items: center;
    display: flex;
    justify-content: center;
}

.anuncio-input{
    margin-top: 10px;
    margin-bottom: 5px;
    background-color: transparent;
    font-size: 16px;
    padding: 5px;
    border-bottom: 1px solid #00000040;
    font-size: arial;
    color: #000000bb;
}

.form-container{
    margin: 3rem;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}

.info{
    display: flex;
    margin: 10%;
}


</style>