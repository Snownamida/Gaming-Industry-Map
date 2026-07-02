[English](README.md) | **中文**

# 全球游戏产业格局图

> 交互式全球游戏产业关系图谱 —— 一张图看懂谁拥有谁、谁开发了什么。

**在线访问：** <https://gaming-map.snownamida.top>

![截图](docs/screenshot.png)

## 简介

本项目用力导向图（force-directed graph）可视化全球游戏产业的格局，覆盖 **200+ 节点、170+ 关系**：

- **综合企业**：腾讯、索尼集团、微软、任天堂、网易、Embracer、Valve、CyberAgent……
- **平台**：PlayStation、Xbox、Switch、Steam、Epic 游戏商城、App Store、Google Play
- **发行商 / 工作室**：EA、育碧、Take-Two、卡普空、世嘉、万代南梦宫、FromSoftware、顽皮狗、拉瑞安、米哈游、游戏科学、Type-Moon、Key 社、Falcom……
- **代表作品**：《原神》《艾尔登法环》《博德之门3》《黑神话：悟空》《塞尔达传说：王国之泪》《空洞骑士：丝之歌》等

关系类型包括 **收购、投资（含持股比例）、开发、发行、授权与合作**。

## 功能

- 🔍 **搜索定位**：输入公司或游戏名即可高亮，按回车打开详情
- 🌐 **中英双语**：一键切换，偏好自动记忆（localStorage）
- 🔗 **分享链接**：点击节点后 URL 自动带上 `#node=<id>`，可直接分享当前选中节点
- 📋 **节点详情**：侧边栏展示类别与全部关联关系
- ⚙️ **物理引擎开关**、视图重置、自由缩放平移

## 技术栈

- [Apache ECharts 6](https://echarts.apache.org/) —— 关系图渲染（力导向布局）
- [Vite 6](https://vite.dev/) —— 开发服务器与打包
- 原生 JavaScript（ES modules），无框架
- 部署于 [Vercel](https://vercel.com/)

## 本地开发

```bash
npm ci          # 安装依赖
npm run dev     # 开发服务器 http://localhost:5173
npm run build   # 生产构建到 dist/
npm run preview # 预览生产构建
```

## 数据与来源

所有数据维护在 [`src/data/gameData.js`](src/data/gameData.js)（节点 + 关系，中英双语字段）。数据为人工整理，主要参考公开新闻与维基百科；产业变动频繁，**如发现过时或错误信息，欢迎提 Issue / PR 指正**。

## 支持

如果这个项目对你有帮助，可以 [☕ 请我喝咖啡](https://ko-fi.com/snownamida)。

## 许可

[MIT](LICENSE) © Snownamida
