import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import {
  authMiddleware,
  noAuthMiddleware,
} from "@/app/middleware/auth.middleware";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "AuthLayout",
    component: () => import("@/common/ui/layouts/AuthLayout.vue"),
    beforeEnter: noAuthMiddleware,
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("@/app/modules/auth/views/index.vue"),
      },
    ],
  },

  {
    path: "/a",
    name: "AdminLayout",
    component: () => import("@/common/ui/layouts/AdminLayout.vue"),
    beforeEnter: authMiddleware,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("@/app/modules/dashboard/views/index.vue"),
      },
      {
        path: "registration",
        name: "Registration",
        children: [
          {
            path: "baptisms",
            name: "Baptisms",
            component: () =>
              import("@/app/modules/registration/views/baptisms.vue"),
          },
          {
            path: "confirmations",
            name: "Confirmations",
            component: () =>
              import("@/app/modules/registration/views/confirmations.vue"),
          },
          {
            path: "marriages",
            name: "Marriages",
            component: () =>
              import("@/app/modules/registration/views/marriages.vue"),
          },
        ],
      },
      {
        path: "certificates",
        name: "Certificates",
        component: () => import("@/app/modules/certificate/views/index.vue"),
      },
      {
        path: "positions",
        name: "Positions",
        component: () => import("@/app/modules/position/views/index.vue"),
      },

      {
        path: "offices",
        name: "Offices",
        component: () => import("@/app/modules/office/views/index.vue"),
      },
      {
        path: "general-infomation",
        name: "GeneralInfomation",
        component: () => import("@/app/modules/branch/views/my-branch.vue"),
      },
      //worker
      {
        path: "workers",
        name: "Workers",
        component: () => import("@/app/modules/worker/views/index.vue"),
      },

      //user
      {
        path: "users",
        name: "Users",
        component: () => import("@/app/modules/user/views/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
