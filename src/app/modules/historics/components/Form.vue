<template>
  <v-dialog
    max-width="1200"
    v-model="dialog"
    activator="parent"
    persistent
    scrollable
  >
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card>
        <v-toolbar
          color="gray"
          :title="form.id ? 'Editar Registro' : 'Nuevo Registro'"
        >
          <v-spacer></v-spacer>
          <v-btn
            icon
            @click="dialog = false"
            v-tooltip:left="'Ceerar'"
            density="compact"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text class="pa-0">
          <v-card-item>
            <v-row>
              <v-col cols="12" md="8"></v-col>
              <v-col cols="12" md="4">
                <v-select
                  v-model="form.sacramentType"
                  label="Tipo de sacramento"
                  :items="SACRAMENTS"
                ></v-select>
              </v-col>
            </v-row>
          </v-card-item>
          <v-toolbar density="compact">
            <v-toolbar-title class="text-subtitle-1 text-secondary">
              Información del sacramental
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              icon
              density="compact"
              @click="dialog = false"
              v-tooltip:left="'Opciones'"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-item>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="Libro"></v-text-field>
              </v-col>
              <v-col cols="6" md="3">
                <v-text-field label="Folio"></v-text-field>
              </v-col>
              <v-col cols="6" md="3">
                <v-text-field label="Acta"></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  label="Fecha de celebracion"
                  type="date"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field label="Lugar de celebracion"></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field label="Celebrante"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  label="Este acta cumple con las normas del Derecho Canónico"
                >
                </v-checkbox>
              </v-col>
            </v-row>
          </v-card-item>

          <v-toolbar density="compact">
            <v-toolbar-title class="text-subtitle-1 text-secondary">
              Información de la(s) persona(s)
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              icon
              density="compact"
              @click="dialog = false"
              v-tooltip:left="'Opciones'"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-item>
            <v-row>
              <v-col cols="12">
                <PersonField title="Bautizando" />
              </v-col>
              <v-col cols="6">
                <PersonField title="Bautizando / Madre" />
              </v-col>

              <v-col cols="6">
                <PersonField title="Bautizando / Padre" />
              </v-col>

              <v-col cols="6">
                <PersonField title="Bautizando / Madrina" />
              </v-col>

              <v-col cols="6">
                <PersonField title="Bautizando / Padrino" />
              </v-col>
            </v-row>
          </v-card-item>
        </v-card-text>
        <v-card-actions class="border-t">
          <v-btn
            type="button"
            variant="text"
            color="secondary"
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text="Guardar"
            color="primary"
            type="submit"
            :loading="loading"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script setup lang="ts">
import { SACRAMENTS } from "@/common/constants";
import { ref } from "vue";
import PersonField from "./PersonField.vue";

const emit = defineEmits(["onSuccess"]);

const props = defineProps({
  formState: {
    type: Object as () => Partial<any>,
    default: () => ({}),
  },
});

const formRef = ref<HTMLFormElement | null>(null);
const loading = ref<boolean>(false);
const dialog = ref<boolean>(false);

const form = ref<any>({
  ...props.formState,
});

const submit = async () => {};
</script>
