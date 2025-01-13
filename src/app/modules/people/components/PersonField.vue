<template>
  <v-card :data-value="value.personId" rounded="0" elevation="0" class="border">
    <v-btn
      rounded="0"
      variant="text"
      :prepend-icon="person ? 'mdi-account-edit' : 'mdi-account-search'"
      block
      class="text-start justify-start"
    >
      <BoxSearchPerson @on-select="onSelected" />
      {{ title ? title : "Persona" }}
    </v-btn>

    <v-card-item v-if="!person" class="text-center">
      <v-icon size="large" class="text-secondary"> mdi-account-search </v-icon>
      <v-card-text class="text-secondary"> Seleccione una persona </v-card-text>
    </v-card-item>

    <v-list-item v-if="person">
      <v-list-item-title>
        {{ person?.documentType.title }} - {{ person?.documentNumber }} |
        {{ person?.name }} {{ person?.paternalLastName }}
        {{ person?.maternalLastName }}
      </v-list-item-title>
      <v-list-item-subtitle class="my-2">
        <v-icon size="small"> mdi-calendar </v-icon>
        {{ person?.birthDate }}
      </v-list-item-subtitle>
      <v-list-item-subtitle class="my-2">
        <v-icon size="small"> mdi-map-marker </v-icon>
        {{ person?.birthCountry?.title }} - {{ person?.birthLocation?.title }},
        {{ person?.birthLocationDetail }}
      </v-list-item-subtitle>
    </v-list-item>
    <v-card-actions v-if="person" class="py-1">
      <v-spacer></v-spacer>
      <v-btn
        density="comfortable"
        variant="tonal"
        prepend-icon="mdi-account-edit"
        color="info"
        v-tooltip="'Remover'"
      >
        <FormPerson :formState="person" @onSuccess="getPerson(person.id)" />
        Editar
      </v-btn>

      <v-btn
        density="compact"
        variant="tonal"
        icon="mdi-delete"
        color="error"
        v-tooltip="'Remover'"
        @click="removePerson()"
      >
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import {
  _getFamilyRelationships,
  _getPersonById,
} from "@/app/modules/people/services";
import BoxSearchPerson from "@/app/modules/people/components/BoxSearchPerson.vue";
import FormPerson from "@/app/modules/people/components/Form.vue";

const emit = defineEmits(["modelValue", "onFamily", "onRemove", "onSelected"]);

const props = defineProps<{
  title: string;
  modelValue: any;
  family?: boolean;
}>();

const person = ref<any>(null);

const value = computed({
  get: () => {
    console.log(props.title, ":", props.modelValue);

    if (props.modelValue.personId) {
      getPerson(props.modelValue.personId);
      emit("onSelected", props.modelValue.personId);
    } else {
      person.value = null;
    }

    return props.modelValue;
  },
  set: (value) => emit("modelValue", value),
});

const getPerson = async (id: number) => {
  let res = await _getPersonById(id);
  person.value = res;
};

const removePerson = () => {
  value.value.personId = null;
  if (props.family) {
    value.value.family.map((item: any) => {
      item.personId = null;
    });
  }
  emit("modelValue", value.value);
};

const onSelected = async (resutl: any) => {
  person.value = resutl;

  value.value.personId = resutl.id;
  if (props.family) {
    let family = await _getFamilyRelationships(resutl.id);

    value.value.family.map((item: any) => {
      family.map((f: any) => {
        if (f.role == item.role) {
          item.personId = f.personId;
        }
      });
      if (family.length == 0) {
        item.personId = null;
      }
    });
  }

  emit("modelValue", {
    personId: resutl.id,
  });
};
</script>
