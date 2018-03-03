<template>
  <section>
    <h2 class="title">Docente</h2>    
    <form @submit.prevent="addDocente">
      Nombre Docente: <input type="text" v-model="docente.nombre">
      Email: <input type="text" v-model="docente.email">
      Especialidad: <input type="text" v-model="docente.especialidad">
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
      docente: {}
    }
  },
  methods:{
    addDocente(){
      let url = 'http://127.0.0.1:4000/api/docentes/new';
      axios.post(url,this.docente)
    .then(respuesta => {
      console.log(respuesta);
       this.$router.replace({name:'ListaDocente'})
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

