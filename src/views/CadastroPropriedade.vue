<template>
  <div class="form-container">
    <form id="formPropriedade">
      <div>
        <h2>Cadastro de Propriedade</h2>
      </div>
      <div class="mb-3">
        <label for="nomePropriedade" class="form-label">Nome</label>
        <input type="text" class="form-control" id="nomePropriedade" placeholder="Digite o nome da propriedade" required>
      </div>
      <div class="mb-3">
        <label for="enderecoPropriedade" class="form-label">Endereço</label>
        <input type="text" class="form-control" id="enderecoPropriedade" placeholder="Digite o endereço da propriedade" required>
      </div>
      <div class="mb-3">
        <label for="estado" class="form-label">Estado</label>
        <input type="text" class="form-control" id="estado" placeholder="Digite o estado" required>
      </div>
      <div class="mb-3">
        <label for="cidade" class="form-label">Cidade</label>
        <input type="text" class="form-control" id="cidade" placeholder="Digite a cidade" required>
      </div>
      <div class="mb-3">
        <label for="latitude" class="form-label">Latitude</label>
        <input type="text" class="form-control" id="latitude" placeholder="Digite a latitude" required>
      </div>
      <div class="mb-3">
        <label for="longitude" class="form-label">Longitude</label>
        <input type="text" class="form-control" id="longitude" placeholder="Digite a longitude" required>
      </div>
      <button type="submit" class="btn btn-primary">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CadastroPropriedade',

  mounted() {
    this.setupFormSubmitListener();
  },

  methods: {
    setupFormSubmitListener() {
      document.getElementById('formPropriedade').addEventListener('submit', async (event) => {
        event.preventDefault();

        const dadosPropriedade = {
          nome: document.getElementById('nomePropriedade').value,
          endereco: document.getElementById('enderecoPropriedade').value,
          estado: document.getElementById('estado').value,
          cidade: document.getElementById('cidade').value,
          latitude: document.getElementById('latitude').value,
          longitude: document.getElementById('longitude').value,
        };

        const propriedadeJSON = JSON.stringify(dadosPropriedade);
        console.log(propriedadeJSON);

        try {
          const response = await fetch('http://localhost:8000/api/cadastrar-propriedade', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosPropriedade),
          });

          if (response.ok) {
            alert('Cadastro realizado com sucesso!');
          } else {
            alert('Erro ao cadastrar propriedade. Tente novamente mais tarde.');
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
  height: 105vh; 
  margin-top: 30px;
}

#formPropriedade {
  width: 50%; 
  max-width: 500px; 
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  background-color: white; 
}
</style>
