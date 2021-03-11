// const path = require("path");
// const PrerenderSpaPlugin = require("prerender-spa-plugin");
// const isProduction = process.env.NODE_ENV === "production";
// module.exports = {
//     publicPath: "/",
//     outputDir: "dist",
//     assetsDir: "static",
//     productionSourceMap: false,
//     configureWebpack: config => {
//         if (isProduction) {
//             config.plugins.push(
// // 预渲染插件配置
//                 new PrerenderSpaPlugin({
// // 静态资源路径
//                     staticDir: path.join(__dirname, "dist"),
// // 预渲染路由
//                     routes: ["/home"]
//                 })
//             );
//         }
//     }
// };

const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');
module.exports = {
    // publicPath: process.env.NODE_ENV == "production" ? "././" : './',
    publicPath: '/',
    assetsDir: "./dist",
    configureWebpack: config => {
        if (process.env.NODE_ENV === "production") {
            console.log('生产模式启用了')
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    // 生成文件的路径，也可以与webpakc打包的一致。
                    // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
                    staticDir: path.join(__dirname,'dist'),
                    // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
                    // routes: ['/', '/contact','/demo','/dev','/footer','/header','/home','/news','/scheme'],
                    routes: ['/','/autoRouter/one','/autoRouter/two'],
                    // 这个很重要，如果没有配置这段，也不会进行预编译
                    renderer: new Renderer({
                        injectProperty: '__PRERENDER_INJECTED',
                        inject: {
                            foo: 'bar'
                        },
                        headless: true,
                        // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                        renderAfterDocumentEvent: 'render-event'
                    })
                }),
            ],
            // // 这里是配置第三方的插件的
            // externals : {
            //     AMap: "AMap",
            // }
        };
        }
    }
};
