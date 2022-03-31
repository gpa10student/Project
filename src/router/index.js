import {createRouter, createWebHashHistory} from "vue-router"
import AppBody from '../components/AppBody'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter.vue'

const routes = [
    {
        path: "/",
        components:{
            header: AppHeader,
            body: AppBody,
            footer: AppFooter,
        }
    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory("./")
})

export default router
