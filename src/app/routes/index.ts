import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import {
  authMiddleware,
  noAuthMiddleware,
} from "@/app/middleware/auth.middleware";

const routes: RouteRecordRaw[] = [
  {
    path: "/auth",
    name: "AuthLayout",
    component: () => import("@/common/ui/layouts/AuthLayout.vue"),
    beforeEnter: noAuthMiddleware,
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("@/app/modules/core/auth/views/index.vue"),
      },
    ],
  },

  {
    path: "/",
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
        path: "users",
        name: "Users",
        component: () => import("@/app/modules/core/user/views/index.vue"),
      },

      {
        path: "permissions",
        name: "Permissions",
        component: () =>
          import("@/app/modules/core/permission/views/index.vue"),
      },
      {
        path: "roles",
        name: "roles",
        component: () => import("@/app/modules/core/role/views/index.vue"),
      },
      //books
      {
        path: "books",
        name: "Books",
        component: () => import("@/app/modules/book/views/index.vue"),
      },
      //baptisms
      {
        path: "baptisms",
        name: "Baptisms",
        component: () => import("@/app/modules/baptism/views/index.vue"),
      },
      {
        path: "baptism/:id/participants",
        name: "BaptismParticipants",
        component: () =>
          import("@/app/modules/baptism/views/baptism-participant.vue"),
      },
      {
        path: "ministers",
        name: "Ministers",
        component: () => import("@/app/modules/ministers/views/index.vue"),
      },
      {
        path: "parishes",
        name: "Parishes",
        component: () => import("@/app/modules/parish/views/index.vue"),
      },
      //people
      {
        path: "people",
        name: "People",
        component: () => import("@/app/modules/people/views/index.vue"),
      },
      //confirmations
      {
        path: "confirmations",
        name: "Confirmations",
        component: () => import("@/app/modules/confirmation/views/index.vue"),
      },
      {
        path: "confirmation/:id/participants",
        name: "ConfirmationParticipants",
        component: () =>
          import(
            "@/app/modules/confirmation/views/confirmation-participant.vue"
          ),
      },
      //marriages
      {
        path: "marriages",
        name: "Marriages",
        component: () => import("@/app/modules/marriage/views/index.vue"),
      },
      {
        path: "marriage/:id/participants",
        name: "MarriageParticipants",
        component: () =>
          import("@/app/modules/marriage/views/marriage-participant.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
