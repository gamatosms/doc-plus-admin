<template>
  <div class="container">
    <div class="app">
      <img id="logotipo" src="../assets/logotipo.png">
      <h1>Cadastro Clínica</h1>
      <span>Nome:</span>
      <input type="text" placeholder="Digite o nome da clínica">
      <h3>Endereço</h3>
      <span>CEP:</span>
      <input type="text" placeholder="Digite o CEP">
      <span>Rua:</span>
      <input type="text">
      <span>Bairro:</span>
      <input type="text">
      <span>Cidade:</span>
      <input type="text">
      <span>Estado:</span>
      <select name="estado" id="">
          <option value=""></option>
      </select>
      <span>Localização</span>
      <input type="text">
      <span>Especializações</span>
      <select multiple name="espec">
          <option value=""></option>
      </select>
      <form action="#"><button>Cadastrar</button></form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
 body{
        margin: 0;
    }
    .container{
        display: flex;
        flex-direction: column;
        height: 170vh;
        justify-content: center;
        align-items: center;
        text-align: center; 
        background: rgb(57,156,194);
        background: linear-gradient(0deg, rgba(57,156,194,1) 0%, rgba(64,140,193,1) 100%);
    }
    .app{
        background-color: #f9f9f9;
        width: 50%;
        height: 1150px;
        display:grid;
        box-shadow: 0px 3px 15px 5px rgba(0,0,0,0.5);
        border-radius: 40px;
    }
    h1{
        font-family: Courier, monospace;
        font-size: 20px;    
    }
    h3 {
        font-family: Courier, monospace;
        margin-top: 10px;
        font-size: 15px; 
     }
     #logotipo{
        margin-left: 50%;
        transform: translateX(-50%);
        width: 150px;
        height: 150px;
    }
    span{
        font-family: Helvetica;
        font-size: 18px;
        padding: 5px;
        text-align: center;
    }
    select {
        width: 42%;
        height: 40px;
        margin-left: 50%;
        transform: translateX(-50%);
        outline: none;
        border-color: #4197b9;
        background-color: #fff;

    }
    input{
        width: 40%;
        margin-left: 50%;
        transform: translateX(-50%);
        height: 35px;
        outline: none;
        border-color: #4197b9;
        border-radius: 15px;
        background-color: #fff;
        color: #000;
        padding-left: 15px;
        box-shadow: 0px 3px 15px 5px rgba(0,0,0,.2);
    }
    input:focus{
        width: 50%;
    }
    button{
        margin-top: 15px;
        margin-bottom: 15px;
        width: 25%;
        height: 50px;
        border-radius: 20px;
        font-size: 15px;
        color: #fff;    
        background-color: #4197B2;
        border: none;
        outline: none;
        cursor: pointer;
    }
    button:hover{
        opacity: .85;
    }
</style>