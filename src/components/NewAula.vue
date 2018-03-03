<template>
  <section>
    <h2 class="title">Aula</h2>    
    <form @submit.prevent="addAula">
      Nombre Aula: <input type="text" v-model="aula.nombre">
      capacidad: <input type="text" v-model="aula.capacidad">
     
      <button class="btn btn-primary" type="submit">Agregar</button>
    </form>    
  </section>
</template>

<script>
import axios from 'axios';
export default {
 
  created () {
    
  },
  data () {
    return {
      aula: {}
    }
  },
  methods:{
    addAula(){
      let url = 'http://127.0.0.1:4000/api/aula/new';
      axios.post(url,this.aula)
    .then(respuesta => {
      console.log(respuesta);
       this.$router.replace({name:'ListaAula'})
    })
    .catch(error=>{
      console.log(error);
    })
      
    }
  }

}
</script>

