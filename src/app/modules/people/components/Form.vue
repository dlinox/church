<template>
  <v-dialog max-width="800" v-model="dialog" activator="parent">
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card :title="form.id ? 'Editar Registro' : 'Nuevo Registro'">
        
        <v-card-item class="border-t border-b">
          <v-row>
            <v-col cols="3">
              <v-select
                v-model="form.documentType"
                :items="DocumentTypesItems"
                label="Tipo de doc."
                :rules="rules.documentType"
                return-object
              />
            </v-col>

            <v-col cols="3">
              <v-text-field
                v-model="form.documentNumber"
                label="Número de doc."
                :rules="rules.documentNumber"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Nombre"
                v-model.number="form.name"
                :rules="rules.name"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Apellido paterno"
                v-model.number="form.paternalLastName"
                :rules="rules.paternalLastName"
              />
            </v-col>

            <v-col cols="6">
              <v-text-field
                label="Apellido materno"
                v-model.number="form.maternalLastName"
                :rules="rules.maternalLastName"
              />
            </v-col>
            <v-col cols="8">
              <v-text-field
                label="Fecha de nacimiento"
                v-model="form.birthDate"
                type="date"
                :rules="rules.birthDate"
              />
            </v-col>
            <v-col cols="4">
              <v-select
                label="Género"
                v-model="form.gender"
                :items="GenderItems"
                :rules="rules.gender"
                return-object
              />
            </v-col>

            <v-col cols="12">
              <LnxCountry
                id="country"
                label="País de nacimiento"
                v-model="form.birthCountry"
                :rules="rules.birthCountry"
                @update:modelValue="
                  form.birthCountry?.value !== 'PER' &&
                    (form.birthLocation = null)
                "
              />
            </v-col>
            <v-col cols="12" v-if="form.birthCountry?.value == 'PER'">
              <LnxLocation
                id="location"
                label="Lugar de nacimiento"
                v-model="form.birthLocation"
                :rules="rules.birthLocation"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Referencia"
                v-model="form.birthLocationDetail"
                hint="Si su país de nacimiento no es Perú, escriba la ciudad y país de nacimiento, o cualquier otra referencia que considere necesaria."
              />
            </v-col>
          </v-row>
        </v-card-item>
        <v-card-actions>
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
import { computed, ref } from "vue";
import LnxLocation from "@/common/ui/components/LnxLocation.vue";
import LnxCountry from "@/common/ui/components/LnxCountry.vue";
import {
  type PersonDTO,
  PersonRules,
  PersonStrictRules,
  initPersonValues,
} from "../models/Person.types";

import { DocumentTypesItems, GenderItems } from "@/common/constants";

import { _saveItem } from "../services/";
import { document } from "@/common/utils/ruleUtils";

const emit = defineEmits(["onSuccess"]);

const props = defineProps({
  formState: {
    type: Object as () => Partial<PersonDTO>,
    default: () => ({}),
  },

  isStrict: {
    type: Boolean,
    default: false,
  },
});

const formRef = ref<HTMLFormElement | null>(null);
const loading = ref<boolean>(false);
const dialog = ref<boolean>(false);

const form = ref<PersonDTO>({
  ...initPersonValues(),
  documentType: props.isStrict ? initPersonValues().documentType : null,
  ...props.formState,
});

const _rules = props.isStrict ? PersonStrictRules : PersonRules;

const rules = computed(() => ({
  ..._rules,
  documentNumber: [
    document(form.value.documentType?.value),
    ..._rules.documentNumber,
  ],
}));

const submit = async () => {
  const { valid } = await formRef.value!.validate();
  if (!valid) return;
  loading.value = true;
  const response = await _saveItem(form.value);
  if (response) {
    emit("onSuccess", form.value);
    if (!form.value.id) {
      form.value = initPersonValues();
    }
    dialog.value = false;
  }
  loading.value = false;
};
</script>
