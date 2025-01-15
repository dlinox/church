<template>
  <v-dialog v-model="dialog" activator="parent" scrollable>
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
                <v-col cols="6">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-card-item>
                        <v-row>
                          <v-col cols="12">
                            <span class="text-subtitle-2 text-secondary">
                              Información del bautismo del esposo
                            </span>
                          </v-col>
                          <v-col
                            v-if="form.roles[0].personId && baptismHusband"
                            cols="12"
                            class="bg-green-lighten-5"
                          >
                            <v-list-item>
                              <v-list-item-subtitle>
                                Lugar de bautismo
                              </v-list-item-subtitle>
                              <v-list-item-title>
                                {{ baptismHusband.parish }}
                              </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-subtitle>
                                Fecha de bautismo
                              </v-list-item-subtitle>
                              <v-list-item-title>
                                {{ baptismHusband.date }}
                              </v-list-item-title>
                            </v-list-item>
                          </v-col>
                          <v-col v-if="!form.roles[0].personId" cols="12">
                            <v-alert
                              dense
                              variant="tonal"
                              color="info"
                              icon="mdi-information"
                              class="text-subtitle-2"
                            >
                              Selecciona a la persona que recibió el sacramento
                            </v-alert>
                          </v-col>
                          <v-col
                            v-if="form.roles[0].personId && !baptismHusband"
                            cols="12"
                          >
                            <v-btn block variant="outlined">
                              <template #prepend>
                                <v-icon>mdi-plus</v-icon>
                              </template>
                              <ExternalBaptismForm
                                type="1"
                                :id="form.roles[0].personId"
                                @onSuccess="
                                  getBaptismHusband(form.roles[0].personId)
                                "
                              />
                              bautismo externo
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-item>
                      <PersonField
                        family
                        v-model="form.roles[0]"
                        title="Esposo"
                        @onSelected="getBaptismHusband"
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
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-card-item>
                        <v-row>
                          <v-col cols="12">
                            <span class="text-subtitle-2 text-secondary">
                              Información del bautismo de la esposa
                            </span>
                          </v-col>
                          <v-col
                            v-if="form.roles[1].personId && baptismWife"
                            cols="12"
                            class="bg-green-lighten-5"
                          >
                            <v-list-item>
                              <v-list-item-subtitle>
                                Lugar de bautismo
                              </v-list-item-subtitle>
                              <v-list-item-title>
                                {{ baptismWife.parish }}
                              </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-subtitle>
                                Fecha de bautismo
                              </v-list-item-subtitle>
                              <v-list-item-title>
                                {{ baptismWife.date }}
                              </v-list-item-title>
                            </v-list-item>
                          </v-col>
                          <v-col v-if="!form.roles[1].personId" cols="12">
                            <v-alert
                              dense
                              variant="tonal"
                              color="info"
                              icon="mdi-information"
                              class="text-subtitle-2"
                            >
                              Selecciona a la persona que recibió el sacramento
                            </v-alert>
                          </v-col>
                          <v-col
                            v-if="form.roles[1].personId && !baptismWife"
                            cols="12"
                          >
                            <v-btn block variant="outlined">
                              <template #prepend>
                                <v-icon>mdi-plus</v-icon>
                              </template>
                              <ExternalBaptismForm
                                type="1"
                                :id="form.roles[1].personId"
                                @onSuccess="
                                  getBaptismWife(form.roles[1].personId)
                                "
                              />
                              bautismo externo
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-item>
                      <PersonField
                        family
                        v-model="form.roles[1]"
                        title="Esposa"
                        @onSelected="getBaptismWife"
                      />
                    </v-col>
                    <v-col cols="6">
                      <PersonField
                        v-model="form.roles[1].family[0]"
                        title="Padre"
                      />
                    </v-col>
                    <v-col cols="6">
                      <PersonField
                        v-model="form.roles[1].family[1]"
                        title="Madre"
                      />
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="6">
                  <PersonField v-model="form.roles[2]" title="Padrino" />
                </v-col>
                <v-col cols="6">
                  <PersonField v-model="form.roles[3]" title="Madrina" />
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
  _getBaptismPerson,
} from "@/app/modules/sacrament/services/sacrament-records.services";
import { useRoute } from "vue-router";
import ExternalBaptismForm from "@/app/modules/sacrament/components/ExternalBaptismForm.vue";

const route = useRoute();

const emit = defineEmits(["onSuccess"]);

const formRef = ref<HTMLFormElement | null>(null);
const loading = ref<boolean>(false);
const dialog = ref<boolean>(false);

const issued = ref<boolean>(false);

const baptismHusband = ref<any>(null);
const baptismWife = ref<any>(null);

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
      role: "2",
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
      role: "3",
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

const getBaptismHusband = async (id: number) => {
  let res = await _getBaptismPerson(id);
  baptismHusband.value = res;
};

const getBaptismWife = async (id: number) => {
  let res = await _getBaptismPerson(id);

  baptismWife.value = res;
};

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
