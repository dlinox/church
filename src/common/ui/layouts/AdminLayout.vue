<template>
  <v-app app>
    <v-navigation-drawer v-model="drawer" app>
      <AppMenu />
      <template #append>
        <v-list three-line>
          <v-list-item
            class="py-2 border-t"
            :subtitle="authStore.authState.user.name"
            prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPYGvsOKyoPhMLvER1SNT4W3RyX6VPeXTxg&s"
          >
            <template v-slot:append>
              <v-btn
                @click="signOutBtn"
                icon
                density="compact"
                variant="tonal"
                :loading="loading"
              >
                <v-icon>mdi-logout</v-icon>
              </v-btn>
            </template>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-app-bar floating elevation="0">
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="toggleTheme"
        size="small"
        variant="tonal"
        class="mr-2"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
    <v-footer app>
      <iframe id="printFrame" style="display: none"></iframe>
      <v-spacer> </v-spacer>
      <small> Lnx &copy; {{ new Date().getFullYear() }} </small>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/app/store/auth.stores";
import AppMenu from "./components/AppMenu.vue";
import { useTheme } from "vuetify";
import { useRouter } from "vue-router";

import { signOut } from "@/app/modules/core/auth/services";

const theme = useTheme();
const router = useRouter();
const loading = ref<boolean>(false);

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};

const authStore = useAuthStore();
const drawer = ref(true);

const signOutBtn = async () => {
  loading.value = true;
  const res = await signOut();
  if (res) {
    router.push({ name: "Login" });
  }
  loading.value = false;
};
</script>
