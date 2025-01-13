<template>
  <v-dialog max-width="500" v-model="dialog" activator="parent" persistent>
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card title="Anular Acta">
        <v-card-item class="pa-0 border-t border-b">
          <v-textarea
            v-model="form.observation"
            class="pa-3"
            label="Razón de anulación"
            rows="2"
            :rules="[required]"
          ></v-textarea>
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
            :disabled="!form.observation"
            color="error"
            type="button"
            :loading="loading"
          >
            <LnxDialogConfirm
              @onConfirm="submit"
              title="Anular Acta"
              message="¿Estás seguro de anular el acta?"
            />
            Anular
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { _invalidateItem } from "@/app/modules/sacrament/services/sacrament-records.services";
import LnxDialogConfirm from "@/common/ui/components/LnxDialogConfirm.vue";
import { required } from "@/common/utils/ruleUtils";

const emit = defineEmits(["onSuccess"]);
const props = defineProps<{
  record: any;
}>();

const form = ref<any>({
  id: props.record.id,
  observation: props.record.observation,
});

const loading = ref<boolean>(false);
const dialog = ref<boolean>(false);

const submit = async () => {
  loading.value = true;
  const response = await _invalidateItem(form.value);

  if (response) {
    emit("onSuccess");
    dialog.value = false;
  }

  loading.value = false;
};

const init = async () => {};

init();
</script>
