<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" alt="ifsc" width="30" height="40">
    </a>
  </div>
</nav>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/Opcao1" class="nav-link">Opção 1</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Opcao2" class="nav-link">Opção 2</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Opção 3
              </a>
              <ul class="dropdown-menu">
                <li><router-link to="/Opcao4" class="dropdown-item">Opção 4</router-link></li>
                <li><router-link to="/Opcao5" class="dropdown-item">Opção 5</router-link></li>
                <li><hr class="dropdown-divider"></li>
              </ul>
            </li>
            
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <!-- Roteiro para renderizar o componente correspondente à rota -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'NavbarComponent',
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
