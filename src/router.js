import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "@/store"

Vue.use(Router);

const router = new Router({
    //name link active class for css style.
    linkExactActiveClass: 'wine-app-active-class',
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            const position = {};
            if (to.hash) {
                position.selector = to.hash;
                if (to.hash === "#experience") {
                    position.offset = { y: 140 };
                }
                if (document.querySelector(to.hash)) {
                    return position;
                }

                return false;
            }
        }
    },
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/area/:slug",
            name: "AreaDetails",
            props: true,
            component: () =>
                import(/* webpackChunkName: "AreaDetails"*/ "./views/AreaDetails"),
            beforeEnter: (to, from, next) => {
                const exists = store.state.areas.find(
                    area => area.slug === to.params.slug
                );
                if (exists) {
                    next();
                } else {
                    next({ name: "notFound" });
                }
            }
        },
        {
            path: "/area/:slug/:winerySlug",
            name: "WineryDetails",
            props: true,
            component: () =>
                import(/* webpackChunkName: "AreaDetails"*/ "./views/WineryDetails"),


        },

    ]
})
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (!store.user) {
//             next({
//                 name: "login",
//                 query: { redirect: to.fullPath }
//             });
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// });

export default router;