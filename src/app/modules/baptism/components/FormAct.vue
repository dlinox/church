<template>
  <v-dialog v-model="dialog" activator="parent" fullscreen scrollable>
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card rounded="0">
        <v-toolbar
          color="gray"
          :title="form.id ? 'Editar Registro' : 'Nuevo Registro'"
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
          <v-row no-gutters class="h-100">
            <v-col cols="12" md="3" class="border-e">
              <v-card-item>
                <v-row>
                  <v-col cols="12">
                    <span class="text-subtitle-2 text-secondary">
                      Información del acta
                    </span>
                  </v-col>
                  <v-col cols="12" md="12" xl="6">
                    <LnxAutocompleteServer
                      v-model="form.sacramentBookId"
                      :service="booksItems"
                      label="Libro"
                      autocomplete="off"
                      :min-chars="1"
                      return-object
                      @update:model-value="
                        $event != null
                          ? getBookNumbering($event.value)
                          : () => {}
                      "
                    />
                  </v-col>
                  <v-col cols="6" md="6" xl="3">
                    <v-text-field
                      v-model="form.folioNumber"
                      label="Folio"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" md="6" xl="3">
                    <v-text-field
                      v-model="form.actNumber"
                      label="Acta"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea label="Observaciones" rows="3"></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-checkbox
                      v-model="form.canonical"
                      color="primary"
                      label="Cumple con las normas del Derecho Canónico"
                    >
                    </v-checkbox>
                  </v-col>
                </v-row>
              </v-card-item>
            </v-col>
            <v-col cols="12" md="9">
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
            text="Asentar y guardar"
            color="primary"
            prepend-icon="mdi-file-certificate-outline"
            variant="outlined"
            type="button"
            @click="issuedSumnmit"
            :loading="loading"
          ></v-btn>

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
import { ref, watch } from "vue";
import PersonField from "@/app/modules/people/components/PersonField.vue";
import { _booksItems } from "@/app/services/selectItems.services";
import { _getBookNumbering } from "@/app/modules/book/services";
import LnxAutocompleteServer from "@/common/ui/components/LnxAutocompleteServer.vue";
import {
  _saveItem,
  _getRecordById,
} from "@/app/modules/baptism/services/sacrament-records.services";
import { useRoute } from "vue-router";

const route = useRoute();

const emit = defineEmits(["onSuccess"]);

const props = defineProps<{
  recordId?: number;
}>();

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

const getRecord = async (id: number) => {
  form.value = defaultForm();

  let res = await _getRecordById(id);
  form.value.id = res.id;
  form.value.sacramentBookId = res.sacramentBookId;
  if (form.value.sacramentBookId == null) {
    getBoookLocalStorage();
  }
  form.value.folioNumber = res.folioNumber;
  form.value.actNumber = res.actNumber;
  form.value.observations = res.observations;
  form.value.canonical = res.canonical;
  form.value.issued = res.issued;

  res.roles.forEach((item: any) => {
    form.value.roles.map((role: any) => {
      if (role.role == item.role) {
        role.personId = item.personId;
        if (role.family && item.family) {
          role.family.map((family: any) => {
            item.family.map((f: any) => {
              if (family.role == f.role) {
                family.personId = f.personId;
              }
            });
          });
        }
      }
    });
  });
};

const getBookNumbering = async (id: number) => {
  let res = await _getBookNumbering(id);
  form.value.folioNumber = res.next.folioNumber;
  form.value.actNumber = res.next.actNumber;
};

const booksItems = async (search: string) => {
  return await _booksItems("1", search);
};

const issuedSumnmit = () => {
  issued.value = true;
  submit();
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

const getBoookLocalStorage = () => {
  let data = localStorage.getItem("baptismParameters");
  if (data) {
    let parameters = JSON.parse(data);
    form.value.sacramentBookId = parameters.defaultBook;
    getBookNumbering(parameters.defaultBook.value);
  }
};

const init = async () => {
  if (props.recordId) {
    await getRecord(props.recordId);
  } else {
    getBoookLocalStorage();
  }
};

watch(
  () => dialog.value,
  (value) => {
    if (value) {
      init();
    }
  }
);
</script>
