<template>
  <v-autocomplete
    v-model="value"
    :items="itemsFilter"
    noDataText="No se encontraron resultados, escribe al menos 3 caracteres"
    @update:search="searchItems"
    return-object
    clearable
  ></v-autocomplete>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import debounce from "@/common/utils/debounce";
import { ItemSelectDTO } from "@/common/models/ItemSelect.types";
const emit = defineEmits(["update:modelValue"]);

const props = defineProps<{
  modelValue: ItemSelectDTO | null;
  service: (search: string) => Promise<any>;
  minChars?: number;
}>();

const itemsFilter = ref<any[]>([]);

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const searchItems = debounce(async (search: string) => {
  search = search.trim();
  const minChars = props.minChars || 3;
  if (search.length < minChars) return;
  let result = await props.service(search);

  itemsFilter.value = result;
}, 350);
</script>
