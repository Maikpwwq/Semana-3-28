<template>
  <div class="container">
    <form>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" v-model="login.email">
        </div>
        <div class="form-group col-md-4">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control" id="inputPassword4" v-model="login.password">
        </div>      
        <div class="form-group col-md-2">
          <button type="submit" class="btn btn-primary" @click.prevent="loginUser">Sign in</button>
        </div>
      </div>          
    </form>
    <pre>
          {{login}}
      </pre>
  </div>
  
</template>

<script>
import swal from 'sweetalert';

export default {
    data(){
        return{
            login: {
                email: "",
                password: ""
            }
        }
    },
    methods:{
        async loginUser(){
            try {
                let response = await this.$http.post('/api/usuario/login', this.login);
                console.log(response.data);
                let token = response.data.tokenReturn;
                let user = response.data.user

                localStorage.setItem('jwt', token);
                localStorage.setItem('user', JSON.stringify(user));

                if (token){
                  swal("Login exitoso!", "Los datos son correctos, bienvenido!", "success");
                    this.$router.push('/home')
                }
            }
            catch(error) {
                swal("Oops!", "Algo salió mal!", "error");
                // warning
                console.log(error)
            }
        }
    }
}
</script>