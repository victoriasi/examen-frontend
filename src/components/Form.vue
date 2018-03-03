<template>
  <section>
    <h2 class="title">Usuario</h2>    
    <form @submit.prevent="addUsuario">
      Nombre Usuario: <input type="text" v-model="usuario.nombre">
      Email: <input type="text" v-model="usuario.email">
      Password: <input type="text" v-model="usuario.password">
      <button class="btn btn-primary" type="submit">Agregar</button>
    </form>    
  </section>
</template>

<script>
import axios from 'axios';
export default {
  /*mounted () {
    let url = 'http://127.0.0.1:4000/api/usuarios/new';
    axios.get(url)
    .then(respuesta => {
      console.log(respuesta.data);
      this.lista = respuesta.data;
    })
  },*/
  created () {
    
  },
  data () {
    return {
      usuario: {}
    }
  },
  methods:{
    addUsuario(){
      let url = 'http://127.0.0.1:4000/api/usuarios/new';
      axios.post(url,this.usuario)
    .then(respuesta => {
      console.log(respuesta);
       this.$router.replace({name:'Lista'})
    })
    .catch(error=>{
      console.log(error);
    })
      //console.log("Enviando");
      //console.log(this.usuario);
    }
  }

}
</script>

