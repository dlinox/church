<template>
  <v-card title="Usuarios" subtitle="Gestión de usuarios">
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
          <v-row class="d-flex justify-space-between">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="request.search"
                label="Buscar"
                clearable
                @input="debouncedReload"
                @click:clear="reLoadDataTable"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="d-flex justify-end">
              <v-btn
                v-permission="['crear_usuario']"
                class="me-1"
                :disabled="loading"
              >
                <Form :roleItems="roleItems" @onSuccess="init" />
                nuevo
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
          v-permission="['editar_usuario', 'eliminar_usuario']"
          icon
          size="small"
          variant="text"
        >
          <v-icon> mdi-dots-vertical </v-icon>
          <v-menu activator="parent">
            <v-list nav>
              <v-list-item
                v-permission="['editar_usuario']"
                title="Editar"
                density="compact"
                value="edit"
              >
                <template #prepend>
                  <v-icon size="small"> mdi-pencil </v-icon>
                </template>
                <Form
                  :roleItems="roleItems"
                  :formState="item"
                  @onSuccess="loadDataTable()"
                />
              </v-list-item>
              <v-list-item
                v-permission="['eliminar_usuario']"
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
        <v-btn
          :color="item.status ? 'blue' : 'error'"
          density="compact"
          variant="tonal"
        >
          {{ item.status ? "Habilitado" : "Deshabilitado" }}
        </v-btn>
      </template>
    </LnxDataTable>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Form from "../components/Form.vue";
import { _loadDataTable, _deleteItem } from "../services/user.services";
import { headers } from "../constants";
import { _roleItems } from "@/app/services/selectItems.services";
import { ItemSelectDTO } from "@/common/models/ItemSelect.types";

const roleItems = ref<ItemSelectDTO[]>([]);

const initView = async () => {
  roleItems.value = await _roleItems();
};

initView();
</script>
