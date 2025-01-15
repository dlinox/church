<template>
  <v-card
    title="Registro de participantes"
    subtitle="Gestión de participantes en actas de confirmación"
  >
    <template #append>
      <v-btn
        icon
        density="compact"
        variant="tonal"
        v-tooltip="'Definir Parámetros'"
      >
        <DefineParameters type="4" />
        <v-icon>mdi-tune-variant</v-icon>
      </v-btn>
    </template>
    <v-card-item class="border-t">
      <p class="text-h6">
        {{ sacarament?.dateFormatted }}
      </p>
      <p class="text-subtitle-2">
        {{ sacarament?.parish }}
      </p>
      <p class="text-subtitle-2">
        {{ sacarament?.minister }}
      </p>
    </v-card-item>

    <LnxDataTable
      :loadDataTable="loadDataTable"
      :headers="headersMarriageParticipants"
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
                v-permission="['crear_acta_matrimonio']"
                prepend-icon="mdi-plus"
                class="me-2"
                :disabled="loading"
              >
                acta
                <FormAct @onSuccess="init" />
              </v-btn>

              <!-- <v-btn
                v-permission="['agregar_participante_matrimonio']"
                prepend-icon="mdi-plus"
                class="me-2"
                :disabled="loading"
              >
                participante
                <MarriageParticipantForm @onSuccess="init" />
              </v-btn> -->
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

      <template v-slot:item.status="{ item }">
        <v-chip :color="item.status ? 'blue' : 'error'" variant="outlined">
          {{ !item.status ? " Anulado " : "Activo" }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item, loadDataTable }">
        <v-btn
          v-permission="[
            'editar_celebracion_matrimonio',
            'eliminar_celebracion_matrimonio',
            'imprimir_acta_matrimonio',
            'anular_acta_matrimonio',
          ]"
          icon
          size="small"
          variant="text"
          v-tooltip="'Opciones'"
          :disabled="!item.status"
        >
          <v-icon> mdi-dots-vertical </v-icon>
          <v-menu activator="parent">
            <v-list nav>
              <v-list-item
                v-permission="['editar_celebracion_matrimonio']"
                v-if="item.status && item.issueDate === null"
                title="Editar"
                density="compact"
                value="edit"
              >
                <template #prepend>
                  <v-icon size="small"> mdi-pencil </v-icon>
                </template>

                <FormAct :recordId="item.id" @onSuccess="loadDataTable" />
              </v-list-item>

              <v-list-item
                v-permission="['imprimir_acta_matrimonio']"
                v-if="item.status && item.issueDate !== null"
                title="Imprimir Acta"
                density="compact"
                value="print"
              >
                <template #prepend>
                  <v-icon size="small"> mdi-printer </v-icon>
                </template>
                <PrintAct :record="item" @onSuccess="loadDataTable" />
              </v-list-item>

              <v-list-item
                v-permission="['anular_acta_matrimonio']"
                v-if="item.status && item.issueDate !== null"
                title="Anular"
                class="text-red"
                density="compact"
                value="annular"
              >
                <template #prepend>
                  <v-icon size="small"> mdi-minus-circle-outline </v-icon>
                </template>
                <AnnularActForm @onSuccess="loadDataTable" :record="item" />
              </v-list-item>

              <v-list-item
                v-permission="['eliminar_acta_matrimonio']"
                v-if="item.issueDate == null"
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
    </LnxDataTable>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

import {
  _loadDataTable,
  _deleteItem,
} from "@/app/modules/sacrament/services/sacrament-records.services.ts";

import { _getSacramentById } from "@/app/modules/sacrament/services/sacrament.services.ts";
import { headersMarriageParticipants } from "@/app/modules/sacrament/constants/sacrament.constants.ts";

// import MarriageParticipantForm from "@/app/modules/marriage/components/MarriageParticipantForm.vue";
import DefineParameters from "@/app/modules/sacrament/components/DefineParameters.vue";

import FormAct from "@/app/modules/marriage/components/FormAct.vue";
import PrintAct from "@/app/modules/marriage/components/PrintAct.vue";

import { DataTableRequestDTO } from "@/common/models/DataTable.types.ts";
import AnnularActForm from "@/app/modules/sacrament/components/AnnularActForm.vue";

const route = useRoute();
const sacarament = ref<any>(null);

const loadDataTable = async (request: DataTableRequestDTO) => {
  const sacramentId = route.params.id;
  return await _loadDataTable(request, Number(sacramentId));
};

const init = async () => {
  const sacramentId = route.params.id;

  sacarament.value = await _getSacramentById(Number(sacramentId));
};

init();
</script>
