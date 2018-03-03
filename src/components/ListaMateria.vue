<template>
  <section>
    <h2 class="title">Lista Materia</h2>
    <h3>
      <router-link :to="{ name: 'NewMateria'}">
          Nuevo
      </router-link></h3>
    <table>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Semestre</th>
        
      </tr>
      <tr v-for="item in lista">
        
        <td>{{ item.id_materia }}</td>
        <td>{{ item.nombre }}</td>
        <td>{{ item.semestre }}</td>      
              
        </tr>    

    </table>
  </section>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    let url = "http://127.0.0.1:4000/materias";
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
    deleteUsuario(id_usuario) {
      const resultado = confirm("Esta seguro que quiere eliminar...");
      if (resultado) {
        let url = "http://127.0.0.1:4000/api/usuarios/delete/";
        axios
          .delete(url + id_usuario)
          .then(respuesta => {
            this.lista.splice(id_usuario, 1);           
          })
          .catch(error => {
            console.log(error);
          });
      }
      return;
    }
  }
};
</script>

