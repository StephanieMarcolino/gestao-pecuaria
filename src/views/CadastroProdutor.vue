<template>
  <div class="form-container">
    <form id="formProdutor">
      <div>
        <h2>Cadastro de Produtor</h2>
      </div>
      <div class="mb-3">
        <label for="nomeProdutor" class="form-label">Nome</label>
        <input type="text" class="form-control" id="nomeProdutor" placeholder="Digite seu nome" required>
      </div>
      <div class="mb-3">
        <label for="cpfProdutor" class="form-label">CPF</label>
        <input type="text" class="form-control" id="cpfProdutor" placeholder="Digite seu CPF sem pontos ou traços." maxlength="11" required>
      </div>
      <div class="mb-3">
        <label for="emailProdutor" class="form-label">Email</label>
        <input type="email" class="form-control" id="emailProdutor" aria-describedby="emailHelp" placeholder="Digite seu email" required>
      </div>
      <div class="mb-3">
        <label for="senhaProdutor" class="form-label">Senha</label>
        <input type="password" class="form-control" id="senhaProdutor" placeholder="Digite sua senha" required>
      </div>
      <button type="submit" class="btn btn-primary">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CadastroProdutor',

  mounted() {
    this.setupFormSubmitListener();
  },

  methods: {
    setupFormSubmitListener()  {
      document.getElementById('formProdutor').addEventListener('submit', async (event) => {
        event.preventDefault();

        const dadosProdutor = {
          nome: document.getElementById('nomeProdutor').value,
          cpf: document.getElementById('cpfProdutor').value,
          email: document.getElementById('emailProdutor').value,
          senha: document.getElementById('senhaProdutor').value,
        };

        const produtorJSON = JSON.stringify(dadosProdutor);
        console.log(produtorJSON);

        try {
          const response = await fetch('http://localhost:8000/produtores/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosProdutor),
          });

          if (response.ok) {
            alert('Cadastro realizado com sucesso!');
          } else {
            alert('Erro ao cadastrar produtor. Tente novamente mais tarde.');
          }
        } catch (error) {
          console.error('Erro ao enviar requisição:', error);
          alert('Erro ao enviar requisição. Verifique o console para mais detalhes.');
        }
      });
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center; 
  height: 80vh; 
  margin-top: 30px;
}

#formProdutor {
  width: 50%; 
  max-width: 500px; 
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  background-color: white; 
}
</style>
