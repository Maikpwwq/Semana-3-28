<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav nav-tabs justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click.prevent="logOut"> Salir </button>
        </form>    
      </div>
      <ul class="list-group">
          <li class="list-group-item">
              <span>Nombre:</span> {{user.nombre}}
          </li>
          <li class="list-group-item">
              <span>Email:</span> {{user.email}}
          </li>
      </ul>    
  </nav>
</template>

<script>
export default {
    data(){
        return{
            user: {
                
            }
        }
    },
    methods:{
        getUserDetails(){
            let token = localStorage.getItem('jwt');
            let user = localStorage.getItem('user');
            if(token){
                this.user = JSON.parse(user);
            }
        },
        logOut(){
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
            this.$router.push('/')
        }        
    },
    created(){
        this.getUserDetails();
    }
}
</script>