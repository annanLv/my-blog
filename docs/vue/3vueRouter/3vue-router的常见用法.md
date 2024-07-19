---
outline: "deep"
---

# vue-router 的常见用法

## 路由重定向

路由重定向指的是：用户在访问地址 A 的时候，强制用户跳转到地址 C ，从而展示特定的组件页面。

通过路由规则的 redirect 属性，指定一个新的路由地址，可以很方便地设置路由的重定向：

```js
import VueRouter from "vue-router";
const router = new VueRouter({
  routes: [
    // 重定向到Home组件
    { path: "/", redirect: "/home" },
    { path: "/home", component: () => import("./Home.vue") },
  ],
});
```

## 嵌套路由

```js
import VueRouter from "vue-router";
const router = new VueRouter({
  routes: [
    // 重定向到Home组件
    { path: "/", redirect: "/home" },
    { path: "/home", component: () => import("./Home.vue") },
    {
      path: "/page",
      component: Layout,
      children: [
        //嵌套路由
        { path: "/page/page1", component: () => import("./page1.vue") },
      ],
    },
  ],
});
```

## 编程式路由

vue-router 提供了许多编程式导航的 API，其中最常用的导航 API 分别是：

1. this.$router.push('地址')
   跳转到指定 hash 地址，并增加一条历史记录
2. this.$router.replace('地址')
   跳转到指定的 hash 地址，并替换掉当前的历史记录
3. this.$router.go(数值 n)
   实现导航历史前进、后退
4. $router.back()
   在历史记录中，后退到上一个页面
5. $router.forward()
   在历史记录中，前进到下一个页面

## 路由传参

### 1. params 传参

```js
import VueRouter from "vue-router";
const router = new VueRouter({
  routes: [
    // 定义参数
    { path: "/home/:id", component: () => import("./Home.vue") },
  ],
});

// 使用 $router.push传参
this.$router.push("/home/1");
//接收参数
this.$router.params.id;
```

### 2. query 传参

```js
// 使用 $router.push传参
this.$router.push({ path: "/home/", query: { id: 1 } });
//接收参数
this.$router.query.id;
```

### 3. props传递给路由组件

> 通过声明 prop 来删除对 `$route` 的直接依赖

#### 通过 props: true, 将路由的 params参数映射为 props, 只能传递 param参数 (布尔模式)
> 当 `props` 设置为 true 时, `route.params` 将被设置为组件的 props

::: code-group

```vue [Composition API]
<script setup>
defineProps({
  id: String
})
</script>

<template>
   <div>
      User {{ id }}
   </div>
</template>>
```

```vue [Options API]
<script>
export default {
  props: {
    id: String
  }
}
</script>

<template>
   <div>
      User {{ id }}
   </div>
</template>>
```

:::

> 我们可以通过设置 `props: true` 来配置路由将 `id` 参数作为 prop传递给组件

```js
const routes = [
   { path: '/user/:id', component: User, props: true }
]
```

#### 命名视图
> 对于有命名视图的路由, 你必须为每个命名视图定义 `props` 配置:

```js
const routes = [
   {
     path: '/user/:id', 
     components: { default: User, sidebar: Sidebar },
     props: { default: true, sidebar: false }
   }
]
```

#### 对象模式
> 当 `props` 是一个对象时, 它将原样设置为 组件 props。当props是静态的时候很有用。

```js
const routes = [
  {
    path: '/promotion/from-newsletter',
    component: Promotion,
    props: { newsletterPopup: false }
  }
]
```

::: tip 提示
将对象中的属性映射成props ==> 只能传递自定义的参数

:::

#### 函数模式
> 创建一个返回 props 的函数, 这允许你讲参数转换为其他类型, 将静态值与基于路由的值相结合等等
```js
const routes = [
   {
     path: "/search",
     component: SarchUser,
     props: route => ({ query: route.query.q })
   }
]
```
URL /search?q=vue 将传递 {query: 'vue'} 作为 props 传给 SearchUser 组件。

请尽可能保持 props 函数为无状态的，因为它只会在路由发生变化时起作用。如果你需要状态来定义 props，请使用包装组件，这样 vue 才可以对状态变化做出反应。

::: tip 提示
将函数返回的对象中的属性映射成props ==> 能会传递params和query参数和自定义的
:::

## 全局前置守卫

```js
import VueRouter from "vue-router";
const router = new VueRouter({});
router.beforeEach((to, from, next) => {
  // to 将要访问的路由信息对象
  // from 将要离开的路由信息对象
  next();
  //  当前用户拥有后台主页的访问权限，直接放行：next()
  // 当前用户没有后台主页的访问权限，强制其跳转到登录页面：next('/login')
  // 当前用户没有后台主页的访问权限，不允许跳转到后台主页：next(false)
});
```

## 全局后置守卫

```js
import VueRouter from "vue-router";
const router = new VueRouter({});
router.afterEach((to, from, next) => {
  // to 将要访问的路由信息对象
  // from 将要离开的路由信息对象
  next();
  //  当前用户拥有后台主页的访问权限，直接放行：next()
  // 当前用户没有后台主页的访问权限，强制其跳转到登录页面：next('/login')
  // 当前用户没有后台主页的访问权限，不允许跳转到后台主页：next(false)
});
```
