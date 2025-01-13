<template>
  <v-dialog max-width="1000" v-model="dialog" activator="parent">
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card title="Asignar permisos">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="permission in allPermissions"
            :key="permission.id"
            :title="permission.name"
          >
            <v-expansion-panel-text>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  class="ma-0 pa-1"
                  v-for="action in permission.children"
                  :key="action.id"
                >
                  <v-checkbox
                    v-model="selectedPermissions"
                    :label="action.name"
                    :value="action.id"
                  />
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

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
import { ref } from "vue";
import {
  _getAllPermissions,
  _assignPermissions,
} from "@/app/modules/core/role/services";

const emit = defineEmits(["onSuccess"]);

const props = defineProps<{
  roleId: number;
  permissions: number[];
}>();

const form = ref({
  roleId: props.roleId,
  permissions: [] as number[],
});

const formRef = ref<HTMLFormElement | null>(null);

const dialog = ref<boolean>(false);
const loading = ref<boolean>(false);

const selectedPermissions = ref<number[]>([...props.permissions]);

const submit = async () => {
  loading.value = true;
  form.value.permissions = selectedPermissions.value;
  await _assignPermissions(form.value);
  dialog.value = false;
  loading.value = false;
  emit("onSuccess");
};

const allPermissions = ref<any[]>([]);
const init = async () => {
  form.value.permissions = [];
  allPermissions.value = await _getAllPermissions();
};

init();
</script>
