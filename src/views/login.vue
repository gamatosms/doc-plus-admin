<template>
  <div class="container">
      <h1>Login</h1>
      <div class="container login">
          <label for="#">Código de acesso</label>
          <input type="text">
          <label for="#">Username/Email</label>
          <input type="text">
          <label for="#">Senha</label>
          <input type="password"  name="senha">
          <g-button-wave color="primary" id="button-login" size="button--size-m">Log in</g-button-wave>
          <a href="#">Esqueceu a senha?</a>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .container{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    label{
        margin-bottom: 5px;
    }
    input{
        margin-bottom: 30px;
        width: 250px;
        height: 30px;
        border-radius: 100px;
        outline: none;
        padding-left: 10px;
    }
    #button-login{
        margin-bottom: 30px;
    }
</style>