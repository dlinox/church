<template>
  <v-dialog max-width="600" v-model="dialog" activator="parent">
    <v-card title="Buscar persona">
      <template v-slot:append>
        <v-btn
          icon
          @click="dialog = false"
          density="compact"
          variant="tonal"
          color="muted"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>

      <v-card
        variant="tonal"
        subtitle="Resultados de la búsqueda"
        :loading="loadingSearch"
      >
        <v-card-title>
          <v-text-field
            label="Buscar"
            clearable
            @update:model-value="searchSelect"
            v-model="search"
          />
        </v-card-title>

        <v-card-item v-if="results.length == 0">
          <v-alert dense outlined class="text-center">
            <small class="text-secondary d-block">
              No se encontraron resultados, escribe al menos 3 caracteres
            </small>
            <v-btn prepend-icon="mdi-plus" class="mt-2">
              <FormPersona
                @onSuccess="($event) => searchSelect($event.documentNumber)"
              />

              Nueva
            </v-btn>
          </v-alert>
        </v-card-item>

        <v-list
          v-else
          dense
          class="border-t overflow-y-auto"
          style="max-height: 200px"
        >
          <v-list-item
            class="border-b"
            color="primary"
            v-for="item in results"
            :key="item.id"
            :title="`${item.documentNumber ?? ''}  ${item.fullName}`"
          >
            <template #prepend>
              <v-icon size="small">mdi-account</v-icon>
            </template>
            <v-list-item-subtitle class="text-end">
              <v-btn density="compact" color="info" variant="text">
                <FormPersona
                  :formState="item"
                  @onSuccess="($event) => searchSelect($event.documentNumber)"
                />
                editar
              </v-btn>

              <v-btn
                density="compact"
                color="primary"
                variant="text"
                class="ms-2"
                @click="onSelect(item)"
              >
                seleccionar
              </v-btn>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  _searchSelect,
} from "@/app/modules/people/services";
import debounce from "@/common/utils/debounce";

import FormPersona from "@/app/modules/people/components/Form.vue";

const emit = defineEmits(["onSelect"]);

const dialog = ref<boolean>(false);

const loadingSearch = ref<boolean>(false);
const search = ref<string>("");

const results = ref<any[]>([]);

const searchSelect = debounce(async (search: string) => {
  if (search == null) {
    results.value = [];
    return;
  }
  if (search.length < 3) return;
  loadingSearch.value = true;
  let result = await _searchSelect(search);
  results.value = result;
  loadingSearch.value = false;
}, 300);

const onSelect = (item: any) => {

  emit("onSelect", item);
  dialog.value = false;
  search.value = "";
  results.value = [];
};
</script>
