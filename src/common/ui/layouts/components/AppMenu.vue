<template>
  <v-list nav density="compact" v-model:opened="open" color="primary">
    <v-list-item
      key="dashboard"
      to="/"
      title="Dashboard"
      prepend-icon="mdi-view-dashboard"
      link
      exact
    />

    <v-list-group value="celebrations">
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-cross-celtic"
          title="Celebraciones"
        ></v-list-item>
      </template>

      <v-list-item
        title="Bautismos"
        prepend-icon="mdi-circle-small"
        to="/baptisms"
        link
        exact
      />
      <v-list-item
        title="Confirmaciones"
        prepend-icon="mdi-circle-small"
        to="/confirmations"
        link
        exact
      />
      <v-list-item
        title="Matrimonios"
        prepend-icon="mdi-circle-small"
        to="/marriages"
        link
        exact
      />
    </v-list-group>

    <v-list-group
      v-permission="[
        'menu_personas',
        'menu_ministros',
        'menu_libros',
        'menu_parroquias',
      ]"
      value="settings"
    >
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-cog"
          title="Configuración"
        ></v-list-item>
      </template>

      <v-list-item
        v-permission="['menu_personas']"
        title="Personas"
        prepend-icon="mdi-circle-small"
        to="/people"
        link
        exact
      />

      <v-list-item
        title="Ministros"
        prepend-icon="mdi-circle-small"
        to="/ministers"
        link
        exact
        v-permission="['menu_ministros']"
      />

      <v-list-item
        title="Libros"
        prepend-icon="mdi-circle-small"
        to="/books"
        link
        exact
        v-permission="['menu_libros']"
      />

      <v-list-item
        title="Parroquias"
        prepend-icon="mdi-circle-small"
        to="/parishes"
        link
        exact
        v-permission="['menu_parroquias']"
      />
    </v-list-group>

    <v-list-group
      v-permission="['menu_usuarios', 'menu_roles']"
      value="security"
    >
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-shield"
          title="Seguridad"
        ></v-list-item>
      </template>

      <v-list-item
        title="Usuarios"
        prepend-icon="mdi-circle-small"
        to="/users"
        link
        exact
        v-permission="['menu_usuarios']"
      />
      <v-list-item
        title="Roles"
        prepend-icon="mdi-circle-small"
        to="/roles"
        link
        exact
        v-permission="['menu_roles']"
      />
      <v-list-item
        title="Permisos"
        prepend-icon="mdi-circle-small"
        to="/permissions"
        v-permission="['_only_super_']"
        link
        exact
      />
    </v-list-group>
  </v-list>
</template>
<script setup lang="ts">
import { ref } from "vue";

const open = ref([""]);
</script>
