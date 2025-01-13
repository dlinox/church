<template>
  <v-card title="Libros" subtitle="Listado de libros">
    <LnxDataTable :loadDataTable="_loadDataTable" :headers="headers">
      <template
        v-slot:header="{
          request,
          loading,
          init,
          loadingTable,
          debouncedReload,
          reLoadDataTable,
        }"
      >
        <v-card-item class="border-t border-b">
          <v-row class="d-flex justify-space-between align-center">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="request.search"
                label="Buscar"
                clearable
                @input="debouncedReload"
                @click:clear="reLoadDataTable"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-select
                v-model="request.filters.sacrament_type"
                label="Sacramento"
                :items="sacramentsItems"
                @update:model-value="reLoadDataTable"
                clearable
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
              class="d-md-flex d-block justify-end text-end"
            >
              <v-btn
                v-permission="['crear_libro']"
                class="me-2"
                :disabled="loading"
              >
                nuevo
                <Form @onSuccess="init" />
              </v-btn>
              <v-btn
                density="comfortable"
                icon="mdi-reload"
                v-tooltip="'Recargar registros'"
                @click="init"
                :loading="loadingTable"
              >
              </v-btn>
            </v-col>
          </v-row>
        </v-card-item>
      </template>
      <template v-slot:item.actions="{ item, loadDataTable }">
        <v-btn
          v-permission="['editar_libro', 'eliminar_libro']"
          icon
          size="small"
          variant="text"
        >
          <v-icon> mdi-dots-vertical </v-icon>
          <v-menu activator="parent">
            <v-list nav>
              <v-list-item
                v-permission="['editar_libro', 'eliminar_libro']"
                title="Editar"
                density="compact"
                value="edit"
              >
                <template #prepend>
                  <v-icon size="small"> mdi-pencil </v-icon>
                </template>
                <Form :formState="item" @onSuccess="loadDataTable" />
              </v-list-item>
              <v-list-item
                v-permission="['eliminar_libro']"
                title="Eliminar"
                class="text-red"
                density="compact"
                value="delete"
              >
                <LnxDialogConfirm
                  @onConfirm="
                    async () => {
                      await _deleteItem(item.id);
                      loadDataTable();
                    }
                  "
                  message="¿Está seguro de eliminar este registro?"
                />
                <template #prepend>
                  <v-icon size="small"> mdi-delete </v-icon>
                </template>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip :color="item.yearFinish === null ? 'info' : 'dark'">
          {{ item.yearFinish === null ? "Activo" : "Finalizado" }}
        </v-chip>
      </template>
    </LnxDataTable>
  </v-card>
</template>
<script setup lang="ts">
import { _loadDataTable, _deleteItem } from "../services";
import { headers, sacramentsItems } from "../constants";
import { Form } from "../components";
</script>
