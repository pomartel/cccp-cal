import Vue from 'vue'
import Router from 'vue-router'
import CalendarPage from '@/components/calendar/CalendarPage'
import RidePage from '@/components/ride/RidePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'calendar',
      component: CalendarPage
    },
    {
      path: '/:slug',
      name: 'detailed-event',
      component: RidePage
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
