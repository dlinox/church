<template>
  <v-dialog
    max-width="600"
    v-model="dialog"
    activator="parent"
    persistent
    scrollable
  >
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card title="Imprimir Acta">
        <v-card-text class="pa-0">
          <iframe
            v-if="printData"
            :src="printData?.urlTemp"
            width="100%"
            height="500"
            frameborder="0"
          ></iframe>
          <v-textarea
            v-if="printData?.existPrintings"
            class="pa-3"
            label="Observaciones de la reimpresión"
            rows="2"
            v-model="printData.data.observations"
            :rules="[(v) => !!v || 'Este campo es requerido']"
          ></v-textarea>
        </v-card-text>

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
            color="primary"
            type="submit"
            :loading="loading"
            :disabled="
              printData?.existPrintings &&
              (printData?.data.observations == null ||
                printData?.data.observations == '')
            "
          >
            <LnxDialogConfirm
              @onConfirm="printRecord"
              title="Imprimir Acta"
              message="¿Estás seguro de imprimir el acta?"
            />
            Imprimir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  _getPrintData,
  _printRecord,
} from "@/app/modules/sacrament/services/sacrament-records.services.ts";
import LnxDialogConfirm from "@/common/ui/components/LnxDialogConfirm.vue";

const emit = defineEmits(["onSuccess"]);
const props = defineProps<{
  record: any;
}>();

const printData = ref<any>(null);

const loading = ref<boolean>(false);
const dialog = ref<boolean>(false);

const submit = async () => {};

const getPrintData = async () => {
  loading.value = true;
  const data = await _getPrintData(props.record);
  printData.value = data;
  loading.value = false;
  console.log(data);
};

const printRecord = async () => {
  loading.value = true;
  let blob = await _printRecord(printData.value.data);

  let url = URL.createObjectURL(blob);

  const printFrame = document.getElementById("printFrame") as HTMLIFrameElement;

  printFrame.src = url;

  printFrame.onload = function () {
    if (printFrame.contentWindow) {
      printFrame.contentWindow.print();
      dialog.value = false;
      emit("onSuccess");
    }
  };
  loading.value = false;
};

const init = async () => {
  await getPrintData();
};

init();
</script>
