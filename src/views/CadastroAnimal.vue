<template>
  <div class="form-container">
    <form id="animalForm">
      <div>
        <h2>Cadastro de Animal</h2>
      </div>
      <div class="mb-3">
        <label for="brinco" class="form-label">Brinco</label>
        <input type="text" class="form-control" id="brinco" placeholder="Digite o brinco do animal" required>
      </div>
      <div class="mb-3">
        <label for="dataNascimento" class="form-label">Data de Nascimento</label>
        <input type="date" class="form-control" id="dataNascimento" required>
      </div>
      <div class="mb-3">
        <label for="sexo" class="form-label">Sexo</label>
        <select class="form-select" id="sexo" required>
          <option value="M">Macho</option>
          <option value="F">Fêmea</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="racaPredominante" class="form-label">Raça Predominante</label>
        <input type="text" class="form-control" id="racaPredominante" placeholder="Digite a raça predominante" required>
      </div>
      <div class="mb-3">
        <label for="racaObservacao" class="form-label">Observação da Raça</label>
        <input type="text" class="form-control" id="racaObservacao" placeholder="Observações sobre a raça">
      </div>
      <button type="submit" class="btn btn-primary">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CadastroAnimal',

  mounted() {
    this.setupFormSubmitListener();
  },

  methods: {
    setupFormSubmitListener() {
      document.getElementById('animalForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        const dadosAnimal = {
          brinco: document.getElementById('brinco').value,
          dataNascimento: document.getElementById('dataNascimento').value,
          sexo: document.getElementById('sexo').value,
          racaPredominante: document.getElementById('racaPredominante').value,
          racaObservacao: document.getElementById('racaObservacao').value,
        };

        const animalJSON = JSON.stringify(dadosAnimal);
        console.log(animalJSON);

        try {
          const response = await fetch('http://localhost:8000/api/cadastrar-animal', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosAnimal),
          });

          if (response.ok) {
            alert('Cadastro realizado com sucesso!');
          } else {
            alert('Erro ao cadastrar animal. Tente novamente mais tarde.');
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
  height: 90vh; 
  margin-top: 30px;
}

#animalForm {
  width: 50%; 
  max-width: 500px; 
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  background-color: white; 
}
</style>
