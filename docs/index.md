---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MX MTR"
  tagline:  自由，开放，和谐的我的世界服务器
  actions:
    - theme: brand
      text: 现在加入
      link: /加入服务器
    - theme: alt
      text: 查看客户端需求
      link: /客户端需求

features:
  - title: 自由
    details: 在服务器中您可以自由的建造，探索，冒险，自由的选择自己喜欢的游戏模式。
  - title: 开放
    details: 奶奶滴，不知道怎么写！
  - title: 和谐
    details: ……更是懒得喷！
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

