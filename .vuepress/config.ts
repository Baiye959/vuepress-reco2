import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "Baiye959's Blog",
  description: "Baiye959's Blog",
  head: [
    // ['link', { rel: 'icon', href: '/glass.ico' }],
    ['link', { rel: 'icon', href: '/cat1.jpg' }],
    ['meta', { rel: 'author', content: 'Baiye959' }],
    ['meta', { rel: 'keywords', content: 'Baiye959, Blog, Java' }]
  ],
  theme: recoTheme({
    autoSetSeries: true,
    style: "@vuepress-reco/style-default",
    // logo: "/glass.ico",
    logo: "/cat1-removebg.png",
    author: "Baiye959",
    authorAvatar: "/cat.jpg",
    // docsRepo: "https://github.com/Baiye959/vuepress-reco2",
    // docsBranch: "main",
    // docsDir: "docs",
    // lastUpdatedText: "Last Update",
    // series 为原 sidebar
    series: {
      "/docs/interview/": [
        {
          text: "计算机网络",
          children: ["computer_networks_1", "computer_networks_2"],
        },
        {
          text: "数据库",
          children: ["database_1", "database_2"],
        },
        {
          text: "操作系统",
          children: ["os_1", "os_2"],
        },
      ],
    },
    navbar: [
      { icon: 'Home', text: "首页", link: "/" },
      { icon: 'Categories', text: "分类", link: "/categories/other/1/" },
      // { text: "Tags", link: "/tags/tag1/1/" },
      { icon: 'Time', text: "时间轴", link: "/timeline" },
      {
        icon: 'Document',
        text: "文档",
        children: [
          { text: "Linux基础使用方法", link: "/docs/linux/1" },
          { text: "八股速记", link: "/docs/interview/computer_networks_1" },
        ],
      },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
