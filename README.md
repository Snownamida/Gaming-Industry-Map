**English** | [中文](README.zh-CN.md)

# Global Gaming Industry Map

> An interactive map of the global gaming industry — who owns whom, and who made what, all in one graph.

**Live demo:** <https://gaming-map.snownamida.top>

![Screenshot](docs/screenshot.png)

## About

This project uses a force-directed graph to visualize the landscape of the global gaming industry, covering **200+ nodes and 170+ relationships**:

- **Conglomerates**: Tencent, Sony Group, Microsoft, Nintendo, NetEase, Embracer, Valve, CyberAgent…
- **Platforms**: PlayStation, Xbox, Switch, Steam, Epic Games Store, App Store, Google Play
- **Publishers / studios**: EA, Ubisoft, Take-Two, Capcom, SEGA, Bandai Namco, FromSoftware, Naughty Dog, Larian, HoYoverse, Game Science, Type-Moon, Key, Falcom…
- **Landmark titles**: *Genshin Impact*, *Elden Ring*, *Baldur's Gate 3*, *Black Myth: Wukong*, *The Legend of Zelda: Tears of the Kingdom*, *Hollow Knight: Silksong*, and more

Relationship types include **acquisition, investment (with ownership percentages), development, publishing, licensing and partnership**.

## Features

- 🔍 **Search & locate**: type a company or game name to highlight it; press Enter to open its details
- 🌐 **Bilingual UI** (中文 / English): switch with one click, preference remembered automatically (localStorage)
- 🔗 **Shareable links**: clicking a node appends `#node=<id>` to the URL, so you can share the currently selected node directly
- 📋 **Node details**: the side panel shows the category and every connected relationship
- ⚙️ **Physics toggle**, view reset, free zoom & pan

## Tech Stack

- [Apache ECharts 6](https://echarts.apache.org/) — graph rendering (force layout)
- [Vite 6](https://vite.dev/) — dev server & bundling
- Vanilla JavaScript (ES modules), no framework
- Deployed on [Vercel](https://vercel.com/)

## Local Development

```bash
npm ci          # install dependencies
npm run dev     # dev server at http://localhost:5173
npm run build   # production build to dist/
npm run preview # preview the production build
```

## Data & Sources

All data lives in [`src/data/gameData.js`](src/data/gameData.js) (nodes + links with bilingual fields), curated manually from public news and Wikipedia. The industry moves fast — **if you spot outdated or incorrect information, issues and PRs are very welcome**.

## Support

If this project is useful to you, feel free to [☕ buy me a coffee](https://ko-fi.com/snownamida).

## License

[MIT](LICENSE) © Snownamida
