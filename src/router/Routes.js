import { Home, Products, Basket, Product } from '../views'


export default [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: Products,
    path: '/products'
  },
  {
    component: Basket,
    path: '/basket'
  },
  {
    component: Product,
    path: '/product/:id'
  }
];