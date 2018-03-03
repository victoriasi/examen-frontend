<template>
  <section>
    <h2 class="title">Materias</h2>    
    <form @submit.prevent="addMateria">
      Nombre Materia: <input type="text" v-model="materia.nombre">
      Semestre: <input type="text" v-model="materia.semestre">
     Docente:      
   <select v-model="selected">
    <option v-for="option in lista" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>




      <button class="btn btn-primary" type="submit">Agregar</button>
    </form>    
  </section>
</template>



<script>
import axios from 'axios';
export default {
   mounted() {
    let url = "http://127.0.0.1:4000/docentes";
    axios.get(url).then(respuesta => {
      console.log(respuesta.data);
      this.lista = respuesta.data;
    });
  },

  created () {
    
  },
  data () {
    return {
      materia: {},
      lista:{},
      selected: 'Seleccione'
  
    }
  },
  methods:{
    addMateria(){
      let url = 'http://127.0.0.1:4000/api/materia/new';
      axios.post(url,this.materia)
    .then(respuesta => {
      console.log(respuesta);
      this.$router.replace({name:'ListaMateria'})
    })
    .catch(error=>{
      console.log(error);
    })
      
    }


  }

}
</script>

