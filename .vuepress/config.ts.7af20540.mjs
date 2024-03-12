// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
var config_default = defineUserConfig({
  title: "Baiye959's Blog",
  description: "Baiye959's Blog",
  head: [
    // ['link', { rel: 'icon', href: '/glass.ico' }],
    ["link", { rel: "icon", href: "/cat1-removebg.png" }],
    ["meta", { rel: "author", content: "Baiye959" }],
    ["meta", { rel: "keywords", content: "Baiye959, Blog, Java" }]
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
          text: "\u8BA1\u7B97\u673A\u7F51\u7EDC",
          children: ["computer_networks_1", "computer_networks_2"]
        },
        {
          text: "\u6570\u636E\u5E93",
          children: ["database_1", "database_2"]
        },
        {
          text: "\u64CD\u4F5C\u7CFB\u7EDF",
          children: ["os_1", "os_2"]
        }
      ]
    },
    navbar: [
      { icon: "Home", text: "\u9996\u9875", link: "/" },
      { icon: "Categories", text: "\u5206\u7C7B", link: "/categories/other/1/" },
      // { text: "Tags", link: "/tags/tag1/1/" },
      { icon: "Time", text: "\u65F6\u95F4\u8F74", link: "/timeline" },
      {
        icon: "Document",
        text: "\u6587\u6863",
        children: [
          { text: "Linux\u57FA\u7840\u4F7F\u7528\u65B9\u6CD5", link: "/docs/linux/1" },
          { text: "\u516B\u80A1\u901F\u8BB0", link: "/docs/interview/computer_networks_1" }
        ]
      }
    ]
    // bulletin: {
    //   body: [
    //     {
    //       type: "title",
    //       content: "试一下浮窗",
    //     },
    //     {
    //       type: "text",
    //       content: `<img src="/cat2.jpg" />`,
    //       style: "font-size: 12px;",
    //     },
    //   ],
    // },
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
  })
  // debug: true,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZ1ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L0NvZGVTcGFjZS92dWVwcmVzcy1yZWNvMi8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXENvZGVTcGFjZVxcXFx2dWVwcmVzcy1yZWNvMlxcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Db2RlU3BhY2UvdnVlcHJlc3MtcmVjbzIvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCB0eXBlIHsgRGVmYXVsdFRoZW1lT3B0aW9ucyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xuaW1wb3J0IHJlY29UaGVtZSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtcmVjb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgdGl0bGU6IFwiQmFpeWU5NTkncyBCbG9nXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkJhaXllOTU5J3MgQmxvZ1wiLFxuICBoZWFkOiBbXG4gICAgLy8gWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9nbGFzcy5pY28nIH1dLFxuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvY2F0MS1yZW1vdmViZy5wbmcnIH1dLFxuICAgIFsnbWV0YScsIHsgcmVsOiAnYXV0aG9yJywgY29udGVudDogJ0JhaXllOTU5JyB9XSxcbiAgICBbJ21ldGEnLCB7IHJlbDogJ2tleXdvcmRzJywgY29udGVudDogJ0JhaXllOTU5LCBCbG9nLCBKYXZhJyB9XVxuICBdLFxuICB0aGVtZTogcmVjb1RoZW1lKHtcbiAgICBhdXRvU2V0U2VyaWVzOiB0cnVlLFxuICAgIHN0eWxlOiBcIkB2dWVwcmVzcy1yZWNvL3N0eWxlLWRlZmF1bHRcIixcbiAgICAvLyBsb2dvOiBcIi9nbGFzcy5pY29cIixcbiAgICBsb2dvOiBcIi9jYXQxLXJlbW92ZWJnLnBuZ1wiLFxuICAgIGF1dGhvcjogXCJCYWl5ZTk1OVwiLFxuICAgIGF1dGhvckF2YXRhcjogXCIvY2F0LmpwZ1wiLFxuICAgIC8vIGRvY3NSZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9CYWl5ZTk1OS92dWVwcmVzcy1yZWNvMlwiLFxuICAgIC8vIGRvY3NCcmFuY2g6IFwibWFpblwiLFxuICAgIC8vIGRvY3NEaXI6IFwiZG9jc1wiLFxuICAgIC8vIGxhc3RVcGRhdGVkVGV4dDogXCJMYXN0IFVwZGF0ZVwiLFxuICAgIC8vIHNlcmllcyBcdTRFM0FcdTUzOUYgc2lkZWJhclxuICAgIHNlcmllczoge1xuICAgICAgXCIvZG9jcy9pbnRlcnZpZXcvXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiXHU4QkExXHU3Qjk3XHU2NzNBXHU3RjUxXHU3RURDXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtcImNvbXB1dGVyX25ldHdvcmtzXzFcIiwgXCJjb21wdXRlcl9uZXR3b3Jrc18yXCJdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJcdTY1NzBcdTYzNkVcdTVFOTNcIixcbiAgICAgICAgICBjaGlsZHJlbjogW1wiZGF0YWJhc2VfMVwiLCBcImRhdGFiYXNlXzJcIl0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlx1NjRDRFx1NEY1Q1x1N0NGQlx1N0VERlwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXCJvc18xXCIsIFwib3NfMlwiXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBuYXZiYXI6IFtcbiAgICAgIHsgaWNvbjogJ0hvbWUnLCB0ZXh0OiBcIlx1OTk5Nlx1OTg3NVwiLCBsaW5rOiBcIi9cIiB9LFxuICAgICAgeyBpY29uOiAnQ2F0ZWdvcmllcycsIHRleHQ6IFwiXHU1MjA2XHU3QzdCXCIsIGxpbms6IFwiL2NhdGVnb3JpZXMvb3RoZXIvMS9cIiB9LFxuICAgICAgLy8geyB0ZXh0OiBcIlRhZ3NcIiwgbGluazogXCIvdGFncy90YWcxLzEvXCIgfSxcbiAgICAgIHsgaWNvbjogJ1RpbWUnLCB0ZXh0OiBcIlx1NjVGNlx1OTVGNFx1OEY3NFwiLCBsaW5rOiBcIi90aW1lbGluZVwiIH0sXG4gICAgICB7XG4gICAgICAgIGljb246ICdEb2N1bWVudCcsXG4gICAgICAgIHRleHQ6IFwiXHU2NTg3XHU2ODYzXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIkxpbnV4XHU1N0ZBXHU3ODQwXHU0RjdGXHU3NTI4XHU2NUI5XHU2Q0Q1XCIsIGxpbms6IFwiL2RvY3MvbGludXgvMVwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NTE2Qlx1ODBBMVx1OTAxRlx1OEJCMFwiLCBsaW5rOiBcIi9kb2NzL2ludGVydmlldy9jb21wdXRlcl9uZXR3b3Jrc18xXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICAvLyBidWxsZXRpbjoge1xuICAgIC8vICAgYm9keTogW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdHlwZTogXCJ0aXRsZVwiLFxuICAgIC8vICAgICAgIGNvbnRlbnQ6IFwiXHU4QkQ1XHU0RTAwXHU0RTBCXHU2RDZFXHU3QTk3XCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAvLyAgICAgICBjb250ZW50OiBgPGltZyBzcmM9XCIvY2F0Mi5qcGdcIiAvPmAsXG4gICAgLy8gICAgICAgc3R5bGU6IFwiZm9udC1zaXplOiAxMnB4O1wiLFxuICAgIC8vICAgICB9LFxuXG4gICAgLy8gICBdLFxuICAgIC8vIH0sXG4gICAgLy8gYnVsbGV0aW46IHtcbiAgICAvLyAgIGJvZHk6IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIC8vICAgICAgIGNvbnRlbnQ6IGBcdUQ4M0NcdURGODlcdUQ4M0NcdURGODlcdUQ4M0NcdURGODkgcmVjbyBcdTRFM0JcdTk4OTggMi54IFx1NURGMlx1N0VDRlx1NjNBNVx1OEZEMSBCZXRhIFx1NzI0OFx1NjcyQ1x1RkYwQ1x1NTcyOFx1NTNEMVx1NUUwMyBMYXRlc3QgXHU3MjQ4XHU2NzJDXHU0RTRCXHU1MjREXHU0RTBEXHU0RjFBXHU1MThEXHU2NzA5XHU1OTI3XHU3Njg0XHU2NkY0XHU2NUIwXHVGRjBDXHU1OTI3XHU1QkI2XHU1M0VGXHU0RUU1XHU1QzNEXHU2MEM1XHU1QzFEXHU5QzlDXHU0RTg2XHVGRjBDXHU1RTc2XHU0RTE0XHU1RTBDXHU2NzFCXHU1OTI3XHU1QkI2XHU1NzI4IFFRIFx1N0ZBNFx1NTQ4QyBHaXRIdWIgXHU4RTBBXHU4REMzXHU1M0NEXHU5OTg4XHU0RjdGXHU3NTI4XHU0RjUzXHU5QThDXHVGRjBDXHU2MjExXHU0RjFBXHU1NzI4XHU3QjJDXHU0RTAwXHU2NUY2XHU5NUY0XHU1NENEXHU1RTk0XHUzMDAyYCxcbiAgICAvLyAgICAgICBzdHlsZTogXCJmb250LXNpemU6IDEycHg7XCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0eXBlOiBcImhyXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0eXBlOiBcInRpdGxlXCIsXG4gICAgLy8gICAgICAgY29udGVudDogXCJRUSBcdTdGQTRcIixcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIC8vICAgICAgIGNvbnRlbnQ6IGBcbiAgICAvLyAgICAgICA8dWw+XG4gICAgLy8gICAgICAgICA8bGk+UVFcdTdGQTQxXHVGRjFBMTAzNzI5NjEwNDwvbGk+XG4gICAgLy8gICAgICAgICA8bGk+UVFcdTdGQTQyXHVGRjFBMTA2MTU2MTM5NTwvbGk+XG4gICAgLy8gICAgICAgICA8bGk+UVFcdTdGQTQzXHVGRjFBOTYyNjg3ODAyPC9saT5cbiAgICAvLyAgICAgICA8L3VsPmAsXG4gICAgLy8gICAgICAgc3R5bGU6IFwiZm9udC1zaXplOiAxMnB4O1wiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdHlwZTogXCJoclwiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdHlwZTogXCJ0aXRsZVwiLFxuICAgIC8vICAgICAgIGNvbnRlbnQ6IFwiR2l0SHViXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAvLyAgICAgICBjb250ZW50OiBgXG4gICAgLy8gICAgICAgPHVsPlxuICAgIC8vICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdnVlcHJlc3MtcmVjby92dWVwcmVzcy10aGVtZS1yZWNvLW5leHQvaXNzdWVzXCI+SXNzdWVzPGEvPjwvbGk+XG4gICAgLy8gICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92dWVwcmVzcy1yZWNvL3Z1ZXByZXNzLXRoZW1lLXJlY28tbmV4dC9kaXNjdXNzaW9ucy8xXCI+RGlzY3Vzc2lvbnM8YS8+PC9saT5cbiAgICAvLyAgICAgICA8L3VsPmAsXG4gICAgLy8gICAgICAgc3R5bGU6IFwiZm9udC1zaXplOiAxMnB4O1wiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdHlwZTogXCJoclwiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdHlwZTogXCJidXR0b25ncm91cFwiLFxuICAgIC8vICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgIHRleHQ6IFwiXHU2MjUzXHU4RDRGXCIsXG4gICAgLy8gICAgICAgICAgIGxpbms6IFwiL2RvY3Mvb3RoZXJzL2RvbmF0ZS5odG1sXCIsXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgIF0sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICBdLFxuICAgIC8vIH0sXG4gICAgLy8gY29tbWVudENvbmZpZzoge1xuICAgIC8vICAgdHlwZTogJ3ZhbGluZScsXG4gICAgLy8gICAvLyBvcHRpb25zIFx1NEUwRSAxLnggXHU3Njg0IHZhbGluZUNvbmZpZyBcdTkxNERcdTdGNkVcdTRFMDBcdTgxRjRcbiAgICAvLyAgIG9wdGlvbnM6IHtcbiAgICAvLyAgICAgLy8gYXBwSWQ6ICd4eHgnLFxuICAgIC8vICAgICAvLyBhcHBLZXk6ICd4eHgnLFxuICAgIC8vICAgICAvLyBwbGFjZWhvbGRlcjogJ1x1NTg2Qlx1NTE5OVx1OTBBRVx1N0JCMVx1NTNFRlx1NEVFNVx1NjUzNlx1NTIzMFx1NTZERVx1NTkwRFx1NjNEMFx1OTE5Mlx1NTRFNlx1RkYwMScsXG4gICAgLy8gICAgIC8vIHZlcmlmeTogdHJ1ZSwgLy8gXHU5QThDXHU4QkMxXHU3ODAxXHU2NzBEXHU1MkExXG4gICAgLy8gICAgIC8vIG5vdGlmeTogdHJ1ZSxcbiAgICAvLyAgICAgLy8gcmVjb3JkSVA6IHRydWUsXG4gICAgLy8gICAgIC8vIGhpZGVDb21tZW50czogdHJ1ZSAvLyBcdTk2OTBcdTg1Q0ZcdThCQzRcdThCQkFcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgfSksXG4gIC8vIGRlYnVnOiB0cnVlLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRSLFNBQVMsd0JBQXdCO0FBRTdULE9BQU8sZUFBZTtBQUV0QixJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQTtBQUFBLElBRUosQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0scUJBQXFCLENBQUM7QUFBQSxJQUNwRCxDQUFDLFFBQVEsRUFBRSxLQUFLLFVBQVUsU0FBUyxXQUFXLENBQUM7QUFBQSxJQUMvQyxDQUFDLFFBQVEsRUFBRSxLQUFLLFlBQVksU0FBUyx1QkFBdUIsQ0FBQztBQUFBLEVBQy9EO0FBQUEsRUFDQSxPQUFPLFVBQVU7QUFBQSxJQUNmLGVBQWU7QUFBQSxJQUNmLE9BQU87QUFBQTtBQUFBLElBRVAsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1kLFFBQVE7QUFBQSxNQUNOLG9CQUFvQjtBQUFBLFFBQ2xCO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVLENBQUMsdUJBQXVCLHFCQUFxQjtBQUFBLFFBQ3pEO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVSxDQUFDLGNBQWMsWUFBWTtBQUFBLFFBQ3ZDO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVSxDQUFDLFFBQVEsTUFBTTtBQUFBLFFBQzNCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLEVBQUUsTUFBTSxRQUFRLE1BQU0sZ0JBQU0sTUFBTSxJQUFJO0FBQUEsTUFDdEMsRUFBRSxNQUFNLGNBQWMsTUFBTSxnQkFBTSxNQUFNLHVCQUF1QjtBQUFBO0FBQUEsTUFFL0QsRUFBRSxNQUFNLFFBQVEsTUFBTSxzQkFBTyxNQUFNLFlBQVk7QUFBQSxNQUMvQztBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1IsRUFBRSxNQUFNLDZDQUFlLE1BQU0sZ0JBQWdCO0FBQUEsVUFDN0MsRUFBRSxNQUFNLDRCQUFRLE1BQU0sc0NBQXNDO0FBQUEsUUFDOUQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWtGRixDQUFDO0FBQUE7QUFFSCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
