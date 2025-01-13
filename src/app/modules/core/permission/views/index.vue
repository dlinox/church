<template>
  <v-card title="Permisos" subtitle="Gestión de permisos">
    <LnxDataTable
      :loadDataTable="_loadDataTable"
      :headers="headers"
      :groupBy="[{ key: 'parentName' }]"
    >
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
            <v-col
              cols="12"
              md="4"
              class="d-flex justify-end text-end align-center"
            >
              <v-btn class="me-2" :disabled="loading">
                Registrar modulo
                <Form :formState="{ type: '001' }" @onSuccess="init" />
              </v-btn>
              <v-btn
                density="comfortable"
                icon="mdi-reload"
                v-tooltip:top="'Recargar registros'"
                @click="init"
                :loading="loadingTable"
                v-permission="['permission.list']"
              >
              </v-btn>
            </v-col>
          </v-row>
        </v-card-item>
      </template>

      <template
        v-slot:group-header="{ item, columns, toggleGroup, isGroupOpen }"
      >
        <tr class="bg-gray">
          <td :colspan="columns.length" class="bg-grey-lighten-4">
            <div class="d-flex justify-space-between align-center">
              <div class="text-primary">
                <v-btn
                  :prepend-icon="isGroupOpen(item) ? '$expand' : '$next'"
                  size="small"
                  variant="plain"
                  @click="toggleGroup(item)"
                >
                  {{ item.value }}
                </v-btn>
              </div>
              <v-btn prepend-icon="mdi-plus" density="compact" variant="tonal">
                Permiso
                <Form
                  :formState="{
                    type: '002',
                    parentId: item?.items[0]?.raw?.parentId,
                  }"
                />
              </v-btn>
            </div>
          </td>
        </tr>
      </template>

      <template v-slot:item.actions="{ item }">
        {{ item.id }}
      </template>

      <template v-slot:item.permissions="{ item }">
        <v-btn
          rounded="sm"
          variant="tonal"
          class="me-1"
          density="comfortable"
          prepend-icon="mdi-eye"
        >
          Permisos
        </v-btn>
        <v-btn rounded="sm" variant="tonal" class="" density="compact" icon>
          <v-icon>mdi-plus</v-icon>
          <Form
            :formState="{
              parentId: item.id,
              type: '002',
            }"
          />
        </v-btn>
      </template>
    </LnxDataTable>
  </v-card>
</template>
<script setup lang="ts">
import { _loadDataTable } from "../services";
import { headers } from "../constants";

import { Form } from "../components";
</script>
