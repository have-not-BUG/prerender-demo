import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决重复点击路由报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

// const TablePageExample = (resolve) => {
//     import('@/components/TablePageExample').then((module) => {
//         resolve(module);
//     });
// };
// const DialogExample = (resolve) => {
//     import('@/components/DialogExample').then((module) => {
//         resolve(module);
//     });
// };
const NotFind = (resolve) => {
    import('@/components/NotFind').then((module) => {
        resolve(module);
    });
};

// 实现自动生成路由配置文件======================================
// 懒加载
const requireAllVueComponents = require.context('../components/autoRouter', true, /\.vue$/, 'lazy');
const routerList = [];

requireAllVueComponents.keys().forEach((allVueComponentItem) => {
    // console.log(allVueComponentItem, 'allVueComponentItem')
    // (function (allVueComponentItem) {
    const completeName = allVueComponentItem.match(/\w+\.vue$/, '')[0];


    // {
//   path: '/club/:id/notice',
//     name: 'clubNotice',
//   component: clubNotice,
//   meta: {
//   permissionArray: [1, 2, 3],
// },
//   beforeEnter(to, from, next) {
//   beforeEnterGame(to, from, next);
// },
// },
// requireAllVueComponents.keys().forEach((allVueComponentItem, index) => {
//   console.error('index', index);
//   for (var a = 1; a <= 10; a++) {
//     console.error(`非延迟${a}`)
//     setTimeout(() => {
//       console.error(`延迟${a}`)
//     }, 500)
//   }
// })
    const routerObj = {};
    routerObj.path = '/'+allVueComponentItem.replace(/\./, 'autoRouter').replace(/.vue$/, '')
    routerObj.name = completeName.replace(/.vue$/, '');
    // console.error('allVueComponentItem.replace(/\\.\\//, \'../components/点点滴滴/\')', allVueComponentItem.replace(/\.\//, '../components/autoRouter/').replace(/\.vue$/, ''))
    // const componentName = allVueComponentItem.replace(/\.\//, '../components/autoRouter/').replace(/\.vue$/, '');
    // console.error('componentName', componentName)
    // routerObj.allVueComponentItem = allVueComponentItem
    // console.error('completeName', completeName)
    // 一、懒加载的实现
    // routerObj.component = () => requireAllVueComponents(allVueComponentItem)
    // console.error('requireAllVueComponents(allVueComponentItem).default',requireAllVueComponents(allVueComponentItem))
    routerObj.component = () => requireAllVueComponents(allVueComponentItem).default || requireAllVueComponents(allVueComponentItem)


    // 二、非懒加载--同步的实现
    // routerObj.component = requireAllVueComponents(allVueComponentItem).default || requireAllVueComponents(allVueComponentItem)

    // 三、import 方法 无效
    // routerObj.component = (resolve) => {
    // import里不能是变量 否则报Critical dependency: the request of a dependency is an expression 错误
    //   // import(componentName).then((module) => {
    //   //   resolve(module);
    //   // });
    //   import('../components/autoRouter/supeSign/supeSignn1').then((module) => {
    //     resolve(module);
    //   });
    // }


    // (function (item) {
    // console.error('allVueComponentItem.replace(/\\.\\//, \'../components/autoRouter\')', allVueComponentItem.replace(/\.\//, '../components/autoRouter/'));
    // console.error('routerObj', routerObj);
    routerList.push(routerObj)

    // }(allVueComponentItem))
    // console.error('requireAllVueComponents(allVueComponentItem)', requireAllVueComponents(allVueComponentItem));
    // }(allVueComponentItem))
})

import Index from '@/components/index'
import One from '@/components/autoRouter/one'
import Two from '@/components/autoRouter/two'
import Zero from '@/components/autoRouter/zero'






const routes = [
    {
        path: '/',
        name:'index',
        component:Index,
        // component:() => import('@/components/index'),
        // redirect: '/autoRouter/TablePageExample',
    },
    {
        path: '/autoRouter/one',
        name:'one',
        // component:() => import('@/components/autoRouter/one'),
        component:One,
        // redirect: '/autoRouter/TablePageExample',
    },
    {
        path: '/autoRouter/two',
        name:'two',
        component:Two,

        // component:() => import('@/components/autoRouter/two'),
        // redirect: '/autoRouter/TablePageExample',
    },
    {
        path: '/autoRouter/zero',
        name:'zero',
        component:Zero,

        // component:() => import('@/components/autoRouter/two'),
        // redirect: '/autoRouter/TablePageExample',
    },
    // ...routerList,
    // {
    //   path: '/TablePageExample',
    //   name: 'TablePageExample',
    //   component: TablePageExample
    // },
    // {
    //     path: '/DialogExample',
    //     name: 'DialogExample',
    //     component: DialogExample
    // },
    {
        path: '*',
        name: 'NotFind',
        component: NotFind,
    },
];
// console.error('routes',routes)

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
