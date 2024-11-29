<template>
  <v-data-table-server
    v-model:items-per-page="options.itemsPerPage"
    v-model:sort-by="options.sortBy"
    v-model:page="options.page"
    :headers="headers"
    :items="items.length ? items : demoItems"
    :items-length="total"
    :loading="loading"
    item-value="id"
    multi-sort
    @update:items-per-page="emit('onUpdateTable')"
    @update:sort-by="emit('onUpdateTable')"
    @update:page="emit('onUpdateTable')"
  >
    <template v-slot:item.actions="{ item }">
      <v-btn
        icon
        density="compact"
        variant="text"
        v-permission="['positions.edit', 'positions.delete']"
      >
        <v-icon>mdi-dots-vertical</v-icon>
        <v-menu activator="parent">
          <v-list density="compact">
            <v-list-item
              key="edit"
              value="edit"
              append-icon="mdi-pencil"
              class="text-subtitle-2"
              v-permission="['positions.edit']"
            >
              <template #append>
                <v-icon size="small"> mdi-pencil </v-icon>
              </template>
              Editar
              <Form :formState="item" @on-success="emit('onUpdateTable')" />
            </v-list-item>
            <v-list-item
              key="delete"
              value="delete"
              class="text-red text-subtitle-2"
              v-permission="['positions.delete']"
            >
              Eliminar
              <template #append>
                <v-icon size="small" color="red"> mdi-delete </v-icon>
              </template>
              <DialogConfirm
                title="Eliminar"
                message="¿Está seguro de eliminar este registro?"
                text-cancel="No"
                text-confirm="Confirmar"
                :loading="loading"
                @on-confirm="() => deleteItem(item.id!)"
              />
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </template>

    <template v-slot:item.act="{ item }">
      <template v-if="item.act">
        <v-chip color="success" text-color="white" small> Emitida </v-chip>
      </template>

      <v-btn
        v-else
        color="black"
        text-color="white"
        prepend-icon="mdi-certificate"
        variant="tonal"
        @click="emitCertificate(item)"
      >
        <BautipmEmitCertificateForm :formState="item" />
        Emitir
      </v-btn>
    </template>
  </v-data-table-server>
</template>

<script setup lang="ts">
import { type DataTableRequestDTO } from "@/common/models/DataTable.types";
import {
  headers,
  demoItems,
} from "@/app/modules/registration/constants/bautipm.constants";
import { Form } from "@/app/modules/position/components";
import { _deleteItem } from "@/app/modules/position/services/position.services";
import DialogConfirm from "@/common/ui/components/dialog/DialogConfirm.vue";
import { ref } from "vue";
const emit = defineEmits(["onUpdateTable"]);

//
import { BautipmEmitCertificateForm } from "@/app/modules/registration/components";

defineProps<{
  //   headers: DataTableHeaderDTO[];
  options: DataTableRequestDTO;
  items: any[];
  loading: boolean;
  total: number;
}>();

//deleteItem
const loading = ref<boolean>(false);

const deleteItem = async (id: number) => {
  loading.value = true;
  if (await _deleteItem(id)) {
    emit("onUpdateTable");
  }
  loading.value = false;
};

const emitCertificate = (item: any) => {
  console.log(item);
};
</script>
