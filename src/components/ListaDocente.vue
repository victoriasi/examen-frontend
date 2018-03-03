<template>
  <section>
    <h2 class="title">Lista Docentes</h2>
    <h3>
      <router-link :to="{ name: 'NewDocente'}">
          Nuevo
      </router-link></h3>
    <table>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>email</th>
        <th>especialidad</th>
        
      </tr>
      <tr v-for="item in lista">
         <td>{{ item.id_docente }}</td>        
        <td>{{ item.nombre }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.especialidad }}</td>      
              
        </tr>    

    </table>
  </section>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    let url = "http://127.0.0.1:4000/docentes";
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

