const routes = [
  {
    path: "/",
    component: () => import("layouts/home.vue"),
  //  children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/experience",
    component: () => import("../components/experience.vue"),
  },
  {
    path: "/projects",
    component: () => import("../components/projects.vue"),
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
