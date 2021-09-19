<template>
    <div class="container"> 
        <div class="main-container">
            <div class="mid-container dog-background">
            </div>
            <div class="mid-container login-container">
                <form class="form-container">
                    <p class="login-title">Cadastro</p>
                
                    <input type="text" class="login-input step-1" placeholder="E-mail" v-if="step==1" />
                    <input type="password" class="login-input step-1" placeholder="Senha" v-if="step==1" />
                    <input type="password" class="login-input step-1" placeholder="Confirmar senha" v-if="step==1" />

                    <input type="text" class="login-input step-2" placeholder="Nome" v-if="step==2" />
                    <input type="number" class="login-input step-2" placeholder="Telefone" v-if="step==2" />
                    <input type="text" class="login-input step-2" placeholder="CPF" v-if="step==2" />

                    <input type="text" class="login-input step-3" placeholder="CEP" v-if="step==3" />
                    <div class="inputs-container-row" v-if="step==3">
                        <input type="text" class="login-input step-3 input-row-1" placeholder="Rua" />
                        <input type="number" class="login-input step-3 input-row-2" placeholder="Nº" />
                    </div>
                    <input type="text" class="login-input step-3" placeholder="Bairro" v-if="step==3" />
                    <div class="inputs-container-row" v-if="step==3">
                        <input type="text" class="login-input step-3 input-row-1" placeholder="Cidade" />
                        <input type="text" class="login-input step-3 input-row-2" placeholder="Estado" />
                    </div>

                    <button type="button" class="login-button" v-if="step!=3" v-on:click="nextStep">
                        Próximo
                    </button>
                    <button type="button" class="login-button" v-if="step==3" >
                        Cadastrar
                    </button>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cadastro',
    data(){
        return {
            step: 1
        }
    },
    methods: {
        nextStep: function(){
            this.step = this.step + 1;
        }
    }
}
</script>

<style scoped>

.container{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-container{
    height: 450px;
    width: 650px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 0px 8px 5px #00000040;
}

@media screen and (max-width: 800px) {
    .main-container{
        width: 550px;
    }
}

.mid-container{
    width: 50%;
}

.dog-background{
    border-radius: 10px 0 0 10px;
    overflow: hidden;
    background: url("./../assets/cadastro-dog.jpg") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.login-container{
    border-radius: 0px 10px 10px 0px;
    z-index: 100;
    background-color: #fff;
    box-shadow: -5px 0 15px #00000020;
    align-items: center;
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 500px) {
    .main-container{
        width: 300px;
    }
    .dog-background{
        display: none;
    }
    .mid-container{
        width: 100%;
    }
    .login-container{
        border-radius: 10px;
    }
}

.form-container{
    margin: 3rem;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}

.login-title{
    font-size: 40px;
    margin-bottom: 25px;
}

.login-input{
    margin-top: 10px;
    margin-bottom: 5px;
    background-color: transparent;
    font-size: 16px;
    padding: 5px;
    border-bottom: 1px solid #00000040;
    font-size: arial;
    color: #000000bb
}

.login-input:focus{
    color: #000;
    border-bottom: 1px solid #4e2f11;
}

button{
    background-color: #784A1B;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.8px;
    padding: 8px;
    margin: 15px 0;
    box-shadow: 0px 0px 3px var(--color-brown-1);
    border-radius: 50px;
    transition: 0.2s background-color;
    cursor: pointer;
}

button:hover{
    background-color: #784A1Bd9;
}

button:active{
    background-color: #5f3a15;
}

.link-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #00000090;
    margin-top: 5px;
}

.login-link{
    margin-bottom: 8px;
    transition: 0.2s color;
    cursor: pointer;
}

.login-link:hover{
    color: #000000bb;
}

.inputs-container-row{
    display: flex;
    justify-content: space-between;
}

.input-row-1{
    width: 70%;
}

.input-row-2{
    width: 25%;
}

</style>