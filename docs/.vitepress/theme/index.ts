import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import './style/custom-block.css'
import './style/blur.css'
import './style/marker.css'
import './style/var.css'
import 'https://unpkg.com/oh-my-live2d@latest'
// import BlogTheme from '@sugarat/theme';



import { useLive2d } from 'vitepress-theme-website'

export default {
    extends: DefaultTheme,
    ...DefaultTheme, //或者这样写也可


    // async enhanceApp(ctx) {
    //     BlogTheme?.enhanceApp?.(ctx);
    //
    //     if (!import.meta.env.SSR) {
    //         const { loadOml2d } = await import('oh-my-live2d');
    //         loadOml2d({
    //             models: [
    //                 {
    //                     path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
    //                 }
    //             ]
    //         });
    //     }
    // }
};