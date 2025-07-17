import { createMemoryHistory, createRouter } from "vue-router";

import AboutView from "@/views/AboutView.vue";
import ResearchView from "@/views/ResearchView.vue";
import ResumeView from "@/views/ResumeView.vue";

const routes = [
  { path: '/',
    name: 'about',
    component: AboutView,
  },
  { path: '/research',
    name: 'research',
    component: ResearchView,
  },
  { path: '/resume',
    name: 'resume',
    component: ResumeView,
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router