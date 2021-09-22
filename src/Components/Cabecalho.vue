<template>
    <div class="Cabecalho">
        <nav class="navbar navbar-light corFundo">
			<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<img src="./../assets/lupa.png" alt="" width="30" height="24" class="d-inline-block align-text-top imglogo">
				PetShop
			</a>
			<form class="d-flex">
				<input class="form-control-sm me-2 campoBusca" type="search" placeholder="Pesquisar" aria-label="Search">
				<img src="./../assets/lupa.png" alt="" width="30" height="24" class="d-inline-block align-text-center"/>
			</form>
			<a class="navbar-brand" href="/login">
				<img src="./../assets/login.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
				Login/CriarConta
			</a>
			</div>
		</nav>

    </div>

</template>

<script>
export default {
    name: "Cabecalho"
}
</script>

<style scoped>
.corFundo{
	background-color: #80624C;
	border-radius: 0px 0px 25px 25px;
}
</style>