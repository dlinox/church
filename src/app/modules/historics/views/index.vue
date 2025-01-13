<template>
  <v-card title="Historicos" subtitle="Listado de historicos">
    <LnxDataTable :loadDataTable="() => {}" :headers="[]">
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
              <v-btn class="me-2" :disabled="!loading">
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
    </LnxDataTable>
  </v-card>
</template>
<script setup lang="ts">
import Form from "../components/Form.vue";
</script>
