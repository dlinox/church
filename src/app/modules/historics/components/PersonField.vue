<template>
  <v-card variant="tonal">
    <template v-slot:title>
      <span class="text-primary">
        {{ title ? title : "Persona" }}
      </span>
    </template>
    <template v-slot:append>
      <v-btn prepend-icon="mdi-magnify" density="comfortable">
        Buscar
        <BoxSearchPerson @on-select="onSelected" />
      </v-btn>
    </template>
    <v-card-item>
      
      <v-row no-gutters>
        <v-col cols="12" md="4">
          <div class="text-caption text-grey">Documento</div>
          <div class="text-body-2">
            {{ person?.documentType }} - {{ person?.documentNumber }}
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <div class="text-caption text-grey">Nombre</div>
          <div class="text-body-2">
            {{ person?.name }} {{ person?.paternalLastName }}
            {{ person?.maternalLastName }}
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="text-caption text-grey">Fecha de nacimiento</div>
          <div class="text-body-2">
            {{ person?.birthDate }}
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <div class="text-caption text-grey">Lugar de nacimiento</div>
          <div class="text-body-2">
            {{ person?.birthCountry }} - {{ person?.birthLocation }} -
            {{ person?.birthLocationDetail }}
          </div>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
import BoxSearchPerson from "@/app/modules/baptism/components/BoxSearchPerson.vue";

defineProps<{
  title: string;
}>();

const person = ref<any>(null);

const onSelected = (resutl: any) => {
  person.value = resutl;
};
</script>
