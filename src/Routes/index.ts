import {createRouter, createWebHistory} from 'vue-router';
import { Component } from 'vue';
import HomePage from "../pages/HomePage.vue";

interface Route {
    path: string,
    component: Component
}


const routes: Route[] = [
  { path: '/', component: HomePage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes, 
})

