import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Home_page.vue'
import About from '@/components/About.vue'
import Booking from '@/components/Booking.vue'
import Menu from '@/components/Menu.vue'
import Contact from '@/components/Contact.vue'
import Order from '@/components/Order.vue'
import Feedback from '@/components/Feedback.vue'
import RestrauntList from '@/components/RestrauntList.vue'
// route array of objects: path,component
const routes = [
  {
    path:'/',
    component: HomePage
  },
  
  {
    path:'/about',
    component: About
  },
  {
    path:'/booking',
    component: Booking
  },
  {
    path:'/menu',
    component: Menu
  },
  {
    path:'/contact',
    component: Contact
  },
  {
    path:'/order',
    component: Order
  },
  {
    path:'/feedback',
    component: Feedback
  },
  {
    path:'/restrauntlist',
    component: RestrauntList
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
