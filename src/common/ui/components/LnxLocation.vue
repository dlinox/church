<template>
  <v-autocomplete
    :id="id"
    v-model.trim="value"
    :items="itemsFilter"
    :rules="rules"
    :label="label ? label : 'Ubicación'"
    return-object
    noDataText="No se encontraron resultados, escribe al menos 3 caracteres"
    @update:search="searchItems"
  ></v-autocomplete>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import locationsJson from "@/common/resources/json/locations.json";
import { LocationDTO } from "@/common/models/Location.types";
import { ItemSelectDTO } from "@/common/models/ItemSelect.types";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps<{
  id: string;
  label: string;
  modelValue: ItemSelectDTO | null;
  rules: any;
}>();

const items = locationsJson as LocationDTO[];

const itemsFilter = ref<LocationDTO[]>([]);

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const searchItems = (search: string) => {
  if (search.length < 3) return;
  itemsFilter.value = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  itemsFilter.value = itemsFilter.value.slice(0, 30);
};
</script>
