import { createRouter, createWebHistory } from 'vue-router'
import StopwatchWidget from './components/StopwatchWidget.vue'
import TicTacToeWidget from './components/TicTacToeWidget.vue'
import WeatherWidget from './components/WeatherWidget.vue'
import Home from './components/Home.vue'


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/stopwatch',
    component: StopwatchWidget
  },
  {
    path: '/tictactoe',
    component: TicTacToeWidget
  },
  {
    path: '/weather',
    component: WeatherWidget
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
