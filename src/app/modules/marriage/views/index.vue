<template>
  <v-card title="Matrimonios" subtitle="Gestión de matrimonios">
    <LnxDataTable :loadDataTable="initDataTable" :headers="headers">
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
            <v-col
              cols="12"
              md="4"
              class="d-md-flex d-block justify-end text-end"
            >
              <v-btn
                v-permission="['crear_celebracion_matrimonio']"
                class="me-2"
                :disabled="loading"
              >
                nuevo
                <Form
                  type="4"
                  :ministersItems="ministersItems"
                  @onSuccess="init"
                />
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
          v-permission="[
            'editar_celebracion_matrimonio',
            'eliminar_celebracion_matrimonio',
          ]"
          icon
          size="small"
          variant="text"
        >
          <v-icon> mdi-dots-vertical </v-icon>
          <v-menu activator="parent">
            <v-list nav>
              <v-list-item
                v-permission="['editar_celebracion_matrimonio']"
                title="Editar"
                density="compact"
                value="edit"
              >
                <template #prepend>
                  <v-icon size="small"> mdi-pencil </v-icon>
                </template>
                <Form
                  type="4"
                  :formState="item"
                  @onSuccess="loadDataTable"
                  :ministersItems="ministersItems"
                />
              </v-list-item>
              <v-list-item
                v-permission="['eliminar_celebracion_matrimonio']"
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

      <template v-slot:item.participants="{ item }">
        <v-btn
          link
          :to="`/marriage/${item.id}/participants`"
          prepend-icon="mdi-account-multiple"
          variant="text"
        >
          Participantes
        </v-btn>
      </template>
    </LnxDataTable>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";

import {
  _loadDataTable,
  _deleteItem,
} from "@/app/modules/sacrament/services/sacrament.services";
import { headers } from "@/app/modules/sacrament/constants/sacrament.constants";
import { _ministersItems } from "@/app/services/selectItems.services";

import { ItemSelectDTO } from "@/common/models/ItemSelect.types";

import Form from "@/app/modules/sacrament/components/Form.vue";
import { DataTableRequestDTO } from "@/common/models/DataTable.types";

const ministersItems = ref<ItemSelectDTO[]>([]);

const initDataTable = async (request: DataTableRequestDTO) => {
  return await _loadDataTable(request, 4);
};

const initView = async () => {
  ministersItems.value = await _ministersItems();
};

initView();
</script>
