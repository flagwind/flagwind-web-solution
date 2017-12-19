const routes =
[
    {
        name: "welcome",
        path: "/",
        component: (resolve: any) => (<any>require)(["src/views/welcome/welcome.vue"], resolve)
    },
    {
        name: "500",
        path: "/500",
        component: (resolve: any) => (<any>require)(["src/views/errors/500.vue"], resolve)
    },
    {
        name: "403",
        path: "/403",
        component: (resolve: any) => (<any>require)(["src/views/errors/403.vue"], resolve)
    },
    {
        name: "404",
        path: "/*",
        component: (resolve: any) => (<any>require)(["src/views/errors/404.vue"], resolve)
    }
];

export default routes;
