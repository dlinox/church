<template>
  <v-card title="Dashboard" subtitle="Bienvenido a la aplicación">
    <v-container fluid>
      <v-row justify="space-between">
        <v-col cols="12" md="4">
          <v-card
            color="primary"
            variant="tonal"
            prepend-icon="mdi-book-cross"
            title="Bautismos"
          >
            <v-card-item>
              <h2 class="text-h2">
                {{
                  countSacramentsByType.find((item) => item.type === "1")?.count
                }}
              </h2>
              Registros
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            color="indigo-lighten-1"
            variant="tonal"
            prepend-icon="mdi-book-cross"
            title="Confirmaciones"
          >
            <v-card-item>
              <h2 class="text-h2">
                {{
                  countSacramentsByType.find((item) => item.type === "2")?.count
                }}
              </h2>
              Registros
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            color="cyan-lighten-1"
            variant="tonal"
            prepend-icon="mdi-book-cross"
            title="Matrimonios"
          >
            <v-card-item>
              <h2 class="text-h2">
                {{
                  countSacramentsByType.find((item) => item.type === "4")?.count
                }}
              </h2>
              Registros
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" v-permission="['buscar_actas']">
          <v-card
            variant="outlined"
            prepend-icon="mdi-certificate"
            subtitle="Buscar Acta"
            :loading="loading"
          >
            <v-card-item>
              <v-text-field
                v-model="search"
                append-inner-icon="mdi-magnify"
                label="Buscar acta"
                hint="Ingrese el nombre o número de documento, se mostrarán los 30 primeros resultados"
                @update:model-value="searchActs"
              >
              </v-text-field>
            </v-card-item>
            <v-card-item>
              <v-row>
                <v-col cols="12" v-for="(item, index) in result" :key="index">
                  <v-card
                    :title="item.person"
                    :subtitle="item.date"
                    elevation="0"
                    class="border border-primary"
                  >
                    <template #prepend>
                      <v-btn
                        v-permission="['imprimir_acta_pdf']"
                        icon
                        size="small"
                        class="me-2"
                        v-tooltip="'Imprimir'"
                      >
                        <v-icon>mdi-printer</v-icon>
                        <PrintAct :record="{ id: item.id }" />
                      </v-btn>
                    </template>
                    <template #append>
                      <v-chip
                        :color="
                          item.type === '1'
                            ? 'primary'
                            : item.type === '2'
                            ? 'indigo-lighten-1'
                            : 'cyan-lighten-1'
                        "
                      >
                        {{ sacraments[item.type] }}
                      </v-chip>
                    </template>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script setup lang="ts">
import { _searchActs } from "@/app/modules/sacrament/services/sacrament-records.services";
import debounce from "@/common/utils/debounce";
import { ref } from "vue";
import PrintAct from "@/app/modules/baptism/components/PrintAct.vue";
import { _reportCountRecordByType } from "@/app/modules/sacrament/services/sacrament-records.services";
const search = ref<string>("");

const result = ref<any[]>([]);
const loading = ref<boolean>(false);

const sacraments: { [key: string]: string } = {
  "1": "Bautismo",
  "2": "Confirmación",
  "4": "Matrimonio",
};

const searchActs = debounce(async (_search: string) => {
  _search = _search.trim();
  if (_search.length < 3) return;
  loading.value = true;
  result.value = await _searchActs(_search);
  loading.value = false;
}, 400);

const countSacramentsByType = ref<any[]>([]);

const initView = async () => {
  countSacramentsByType.value = await _reportCountRecordByType();
};

initView();
</script>
