<template>
  <v-data-table-server
    v-model:items-per-page="options.itemsPerPage"
    v-model:sort-by="options.sortBy"
    v-model:page="options.page"
    :headers="headers"
    :items="items"
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
    <template v-slot:item.status="{ item }">
      <v-btn
        :color="item.status ? 'blue' : 'error'"
        text-color="white"
        density="compact"
        variant="tonal"
      >
        {{ item.status ? "Habilitado" : "Deshabilitado" }}
      </v-btn>
    </template>
  </v-data-table-server>
</template>

<script setup lang="ts">
import { type DataTableRequestDTO } from "@/common/models/DataTable.types";
import { type PositionDTO } from "@/app/modules/position/models/Position.types";
import { headers } from "@/app/modules/position/constants";
import { Form } from "@/app/modules/position/components";
import { _deleteItem } from "@/app/modules/position/services/position.services";
import DialogConfirm from "@/common/ui/components/dialog/DialogConfirm.vue";
import { ref } from "vue";
const emit = defineEmits(["onUpdateTable"]);

defineProps<{
  //   headers: DataTableHeaderDTO[];
  options: DataTableRequestDTO;
  items: PositionDTO[];
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
</script>
