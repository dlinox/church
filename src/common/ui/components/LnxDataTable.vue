<template>
  <slot
    name="header"
    :request="request"
    :loading="loading"
    :loadingTable="loadingTable"
    :reLoadDataTable="reLoadDataTable"
    :debouncedReload="debouncedReload"
    :init="init"
  >
  </slot>
  <v-data-table-server
    v-model:items-per-page="request.itemsPerPage"
    v-model:sort-by="request.sortBy"
    v-model:page="request.page"
    :headers="headers"
    :items="items"
    :items-length="totalItems"
    :loading="loading"
    item-value="id"
    :group-by="groupBy"
    multi-sort
    @update:items-per-page="reLoadDataTable"
    @update:sort-by="reLoadDataTable"
    @update:page="reLoadDataTable"
  >
    <template
      v-for="(slotContent, slotName) in $slots"
      :key="slotName"
      v-slot:[slotName]="slotProps"
    >
      <component
        :is="slotContent"
        v-bind="{ ...slotProps, loadDataTable: init }"
      />
    </template>
  </v-data-table-server>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {
  DataTableHeaderDTO,
  DataTableResponseDTO,
  DataTableRequestDTO,
} from "@/common/models/DataTable.types";

import debounce from "@/common/utils/debounce";

const props = defineProps<{
  headers: DataTableHeaderDTO[];
  groupBy?: [];
  loadDataTable: (
    request: DataTableRequestDTO
  ) => Promise<DataTableResponseDTO<any>>;
}>();

const loading = ref(false);
const loadingTable = ref(false);
const items = ref<any[]>([]);
const totalItems = ref(0);

const request = ref<DataTableRequestDTO>({
  itemsPerPage: 10,
  // sortBy: [],
  page: 1,
  search: "",
  filters: {},
});
const debouncedReload = debounce(() => {
  reLoadDataTable();
}, 400);

const reLoadDataTable = async () => {
  loadingTable.value = true;
  const response = await props.loadDataTable(request.value);
  items.value = response.data;
  totalItems.value = response.total as number;
  loadingTable.value = false;
};

const init = async () => {
  loading.value = true;
  await reLoadDataTable();
  loading.value = false;
};

init();
</script>
