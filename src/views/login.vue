<template>
    <div class="container">
        <div class="app">
            <img id="logotipo" src="../assets/logotipo.png">
            <h1>Login</h1>
            <span>Código da Clínica</span>
            <input type="text" id="codigo">
            <span>Username/Email:</span>
            <input type="text" id="username">
            <span>Senha:</span>
            <input type="password" id="password">
            <form action="/cad-clinica"><button type="submit">Log in</button></form>
            <a href="#">Forgot your password?</a>
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
        height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center; 
        background: rgb(57,156,194);
        background: linear-gradient(0deg, rgba(57,156,194,1) 0%, rgba(64,140,193,1) 100%);
    }
    .app{
        background-color: #f9f9f9;
        width: 40%;
        height: 660px;
        display:grid;
        box-shadow: 0px 3px 15px 5px rgba(0,0,0,0.5);
        border-radius: 40px;
    }
    #logotipo{
        margin-left: 50%;
        transform: translateX(-50%);
        width: 150px;
        height: 150px;
    }
    h1{
        font-family: Courier, monospace;
    }
    span{
        font-family: Helvetica;
        font-size: 18px;
        padding: 10px;
        text-align: center;
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
        box-shadow: 0px 3px 15px 5px rgba(0,0,0,0.10);
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
    a{
        text-align: center;
        color: #4197B2;
        font-family: sans-serif;
        font-size: 13px;
    }
</style>