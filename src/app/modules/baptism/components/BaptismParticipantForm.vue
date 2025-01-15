<template>
  <v-dialog v-model="dialog" max-width="1000" activator="parent" scrollable>
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card rounded="0">
        <v-toolbar
          color="gray"
          :title="form.id ? 'Editar Registro' : 'Nuevo Participante'"
        >
          <v-spacer></v-spacer>
          <v-btn
            icon
            @click="dialog = false"
            color="secondary"
            density="compact"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="pa-0">
          <v-row no-gutters>
            <v-col cols="12">
              <v-card-item>
                <span class="text-subtitle-2 text-secondary">
                  Información de la(s) persona(s)
                </span>
              </v-card-item>
              <v-row no-gutters>
                <v-col cols="12">
                  <PersonField
                    family
                    v-model="form.roles[0]"
                    title="Bautizado"
                  />
                </v-col>
                <v-col cols="6">
                  <PersonField
                    v-model="form.roles[0].family[0]"
                    title="Padre"
                  />
                </v-col>
                <v-col cols="6">
                  <PersonField
                    v-model="form.roles[0].family[1]"
                    title="Madre"
                  />
                </v-col>
                <v-col cols="6">
                  <PersonField v-model="form.roles[1]" title="Padrino" />
                </v-col>
                <v-col cols="6">
                  <PersonField v-model="form.roles[2]" title="Madrina" />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
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
import { ref } from "vue";
import PersonField from "@/app/modules/people/components/PersonField.vue";
import { _booksItems } from "@/app/services/selectItems.services";
import { _getBookNumbering } from "@/app/modules/book/services";
import {
  _saveItem,
  _getRecordById,
} from "@/app/modules/baptism/services/sacrament-records.services";
import { useRoute } from "vue-router";

const route = useRoute();

const emit = defineEmits(["onSuccess"]);

const formRef = ref<HTMLFormElement | null>(null);
const loading = ref<boolean>(false);
const dialog = ref<boolean>(false);

const issued = ref<boolean>(false);

const defaultForm = () => ({
  id: null,
  sacramentId: null,
  sacramentBookId: null,
  folioNumber: null,
  actNumber: null,
  observations: null,
  canonical: false,
  issued: false,
  roles: [
    {
      role: "1",
      personId: null,
      family: [
        {
          role: "1",
          personId: null,
        },
        {
          role: "2",
          personId: null,
        },
      ],
    },
    {
      role: "4",
      personId: null,
    },
    {
      role: "5",
      personId: null,
    },
  ],
});

const form = ref<any>({
  ...defaultForm(),
});

const submit = async () => {
  form.value.issued = issued.value;
  form.value.sacramentId = parseInt(route.params.id?.toString());

  loading.value = true;
  let res = await _saveItem(form.value);

  if (res) {
    emit("onSuccess");

    form.value = defaultForm();
    dialog.value = false;
  }
  loading.value = false;
};
</script>
