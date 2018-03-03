<template>
  <section>
    <h2 class="title">Lista Aulas</h2>
    <h3>
      <router-link :to="{ name: 'NewAula'}">
          Nuevo
      </router-link></h3>
    <table>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>capacidad</th>        
        
      </tr>
      <tr v-for="item in lista">
         <td>{{ item.id_aula }}</td>        
        <td>{{ item.nombre }}</td>
        <td>{{ item.capacidad }}</td>
        
              
        </tr>    

    </table>
  </section>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    let url = "http://127.0.0.1:4000/aulas";
    axios.get(url).then(respuesta => {
      console.log(respuesta.data);
      this.lista = respuesta.data;
    });
  },
  created() {},
  data() {
    return {
      lista: []
    };
  },
  methods: {
   
  }
};
</script>

