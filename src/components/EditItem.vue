
<template>
  <section>
      <h1>{{this.$route.params.id_usuario}}</h1>    
    <h2 class="title">Modificar usuario</h2>    
    <form @submit.prevent="updateUsuario">
      Nombre Usuario: <input type="text" v-model="usuario.nombre">
      Email: <input type="text" v-model="usuario.email">
      Password: <input type="text" v-model="usuario.password">
      <button class="btn btn-primary" type="submit">Agregar</button>
    </form>    
  </section>
</template>

<script>
import axios from "axios";
export default {
  created() {
      this.getUsuario();
  },
  data() {
    return {
      usuario: {}
    };
  },
  methods: {
    

    getUsuario() {
       let url = "http://127.0.0.1:4000/usuario/";
      axios
        .get(url + this.$route.params.id_usuario)
        .then(response =>{           
             this.usuario=response.data
             response.json(usuario);
             console.log("objetossss" +this.usuario); 
             console.log("objetossss" +this.response.data); 
             })              
        .catch(error => {
          console.log(error);
        });
    },


    updateUsuario() {
      let url = "http://127.0.0.1:4000/api/usuarios/update/"+this.$route.params.id_usuario;
      axios
        .put(url,this.usuario)
        .then(respuesta => {        
         this.$router.replace({name:'Lista'})
          console.log(respuesta);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

