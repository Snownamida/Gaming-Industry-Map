export const data = {
    categories: [
        { name: { en: 'Corporation', zh: '跨国集团' } },
        { name: { en: 'Studio', zh: '制片厂/工作室' } },
        { name: { en: 'Director', zh: '导演' } },
        { name: { en: 'Producer', zh: '制片人' } },
        { name: { en: 'Movie', zh: '电影' } },
        { name: { en: 'TV Series', zh: '剧集' } }
    ],
    nodes: [
        // Corporations
        { id: 'Disney', name: { en: 'The Walt Disney Company', zh: '华特迪士尼' }, category: 0, symbolSize: 60, label: { show: true } },
        { id: 'WBD', name: { en: 'Warner Bros. Discovery', zh: '华纳兄弟探索' }, category: 0, symbolSize: 60, label: { show: true } },
        { id: 'Universal', name: { en: 'Universal Pictures', zh: '环球影业' }, category: 0, symbolSize: 50, label: { show: true } },
        { id: 'Paramount', name: { en: 'Paramount Global', zh: '派拉蒙全球' }, category: 0, symbolSize: 50, label: { show: true } },
        { id: 'Sony', name: { en: 'Sony Pictures', zh: '索尼影视' }, category: 0, symbolSize: 50, label: { show: true } },
        { id: 'Netflix', name: { en: 'Netflix', zh: '网飞 (Netflix)' }, category: 0, symbolSize: 55, label: { show: true } },

        // Studios (Disney)
        { id: 'Marvel', name: { en: 'Marvel Studios', zh: '漫威影业' }, category: 1, symbolSize: 40 },
        { id: 'Lucasfilm', name: { en: 'Lucasfilm', zh: '卢卡斯影业' }, category: 1, symbolSize: 35 },
        { id: 'Pixar', name: { en: 'Pixar', zh: '皮克斯' }, category: 1, symbolSize: 35 },
        { id: '20thCentury', name: { en: '20th Century Studios', zh: '20世纪影业' }, category: 1, symbolSize: 35 },

        // Studios (WBD)
        { id: 'WB_Pictures', name: { en: 'Warner Bros. Pictures', zh: '华纳兄弟影片' }, category: 1, symbolSize: 40 },
        { id: 'HBO', name: { en: 'HBO', zh: 'HBO' }, category: 1, symbolSize: 40 },
        { id: 'DC_Studios', name: { en: 'DC Studios', zh: 'DC影业' }, category: 1, symbolSize: 35 },
        { id: 'NewLine', name: { en: 'New Line Cinema', zh: '新线电影' }, category: 1, symbolSize: 30 },

        // Studios (Universal)
        { id: 'Illumination', name: { en: 'Illumination', zh: '照明娱乐' }, category: 1, symbolSize: 30 },
        { id: 'DreamWorks', name: { en: 'DreamWorks Animation', zh: '梦工厂动画' }, category: 1, symbolSize: 30 },

        // People
        { id: 'KFeige', name: { en: 'Kevin Feige', zh: '凯文·费奇' }, category: 3, symbolSize: 25 },
        { id: 'KKennedy', name: { en: 'Kathleen Kennedy', zh: '凯瑟琳·肯尼迪' }, category: 3, symbolSize: 25 },
        { id: 'JGunn', name: { en: 'James Gunn', zh: '詹姆斯·滚导' }, category: 3, symbolSize: 25 },
        { id: 'CNolan', name: { en: 'Christopher Nolan', zh: '克里斯托弗·诺兰' }, category: 2, symbolSize: 30 },
        { id: 'SSpielberg', name: { en: 'Steven Spielberg', zh: '斯蒂芬·斯皮尔伯格' }, category: 2, symbolSize: 30 },
        { id: 'JCameron', name: { en: 'James Cameron', zh: '詹姆斯·卡梅隆' }, category: 2, symbolSize: 30 },
        { id: 'DVilleneuve', name: { en: 'Denis Villeneuve', zh: '丹伊斯·维伦纽瓦' }, category: 2, symbolSize: 25 },
        { id: 'Gerwig', name: { en: 'Greta Gerwig', zh: '葛韦格' }, category: 2, symbolSize: 25 },
        { id: 'Tarantino', name: { en: 'Quentin Tarantino', zh: '昆汀·塔伦蒂诺' }, category: 2, symbolSize: 25 },
        { id: 'Scorsese', name: { en: 'Martin Scorsese', zh: '马丁·斯科塞斯' }, category: 2, symbolSize: 25 },

        // Movies (Marvel)
        { id: 'Avengers', name: { en: 'The Avengers', zh: '复仇者联盟' }, category: 4, symbolSize: 20 },
        { id: 'Endgame', name: { en: 'Avengers: Endgame', zh: '复联4：终局之战' }, category: 4, symbolSize: 25 },
        { id: 'IronMan', name: { en: 'Iron Man', zh: '钢铁侠' }, category: 4, symbolSize: 20 },

        // Movies (Lucasfilm)
        { id: 'StarWars', name: { en: 'Star Wars: A New Hope', zh: '星球大战：新希望' }, category: 4, symbolSize: 30 },
        { id: 'Mandalorian', name: { en: 'The Mandalorian', zh: '曼达洛人' }, category: 5, symbolSize: 25 },

        // Movies (WB/DC)
        { id: 'DarkKnight', name: { en: 'The Dark Knight', zh: '蝙蝠侠：黑暗骑士' }, category: 4, symbolSize: 25 },
        { id: 'Joker', name: { en: 'Joker', zh: '小丑' }, category: 4, symbolSize: 20 },
        { id: 'TheBatman', name: { en: 'The Batman', zh: '新蝙蝠侠' }, category: 4, symbolSize: 20 },
        { id: 'SupermanLegacy', name: { en: 'Superman: Legacy', zh: '超人：传承' }, category: 4, symbolSize: 15 },
        { id: 'Barbie', name: { en: 'Barbie', zh: '芭比' }, category: 4, symbolSize: 25 },
        { id: 'Dune', name: { en: 'Dune: Part One', zh: '沙丘' }, category: 4, symbolSize: 20 },
        { id: 'Dune2', name: { en: 'Dune: Part Two', zh: '沙丘2' }, category: 4, symbolSize: 20 },
        { id: 'HarryPotter', name: { en: 'Harry Potter Series', zh: '哈利波特系列' }, category: 4, symbolSize: 30 },
        { id: 'LOTR', name: { en: 'Lord of the Rings', zh: '指环王系列' }, category: 4, symbolSize: 30 },

        // Movies (HBO)
        { id: 'GOT', name: { en: 'Game of Thrones', zh: '权力的游戏' }, category: 5, symbolSize: 25 },
        { id: 'Succession', name: { en: 'Succession', zh: '继承之战' }, category: 5, symbolSize: 20 },
        { id: 'LastOfUs', name: { en: 'The Last of Us', zh: '最后生还者' }, category: 5, symbolSize: 20 },

        // Movies (Others)
        { id: 'Oppenheimer', name: { en: 'Oppenheimer', zh: '奥本海默' }, category: 4, symbolSize: 25 },
        { id: 'JurassicPark', name: { en: 'Jurassic Park', zh: '侏罗纪公园' }, category: 4, symbolSize: 25 },
        { id: 'Avatar', name: { en: 'Avatar', zh: '阿凡达' }, category: 4, symbolSize: 30 },
        { id: 'Titanic', name: { en: 'Titanic', zh: '泰坦尼克号' }, category: 4, symbolSize: 25 },
        { id: 'TopGun', name: { en: 'Top Gun: Maverick', zh: '壮志凌云：独行侠' }, category: 4, symbolSize: 20 },
        { id: 'Inception', name: { en: 'Inception', zh: '盗梦空间' }, category: 4, symbolSize: 20 },
        { id: 'Interstellar', name: { en: 'Interstellar', zh: '星际穿越' }, category: 4, symbolSize: 20 },

        // Movies (Sony)
        { id: 'SpiderVerse', name: { en: 'Spider-Man: Into the Spider-Verse', zh: '蜘蛛侠：平行宇宙' }, category: 4, symbolSize: 20 },

        // Movies (Netflix)
        { id: 'StrangerThings', name: { en: 'Stranger Things', zh: '怪奇物语' }, category: 5, symbolSize: 25 },
        { id: 'SquidGame', name: { en: 'Squid Game', zh: '鱿鱼游戏' }, category: 5, symbolSize: 20 }
    ],
    links: [
        // Source/Target IDs stay naturally English as keys. Values are labels.
        { source: 'Disney', target: 'Marvel', value: { en: 'Owns', zh: '拥有' } },
        { source: 'Disney', target: 'Lucasfilm', value: { en: 'Owns', zh: '拥有' } },
        { source: 'Disney', target: 'Pixar', value: { en: 'Owns', zh: '拥有' } },
        { source: 'Disney', target: '20thCentury', value: { en: 'Owns', zh: '拥有' } },

        { source: 'WBD', target: 'WB_Pictures', value: { en: 'Owns', zh: '拥有' } },
        { source: 'WBD', target: 'HBO', value: { en: 'Owns', zh: '拥有' } },
        { source: 'WBD', target: 'DC_Studios', value: { en: 'Owns', zh: '拥有' } },
        { source: 'WBD', target: 'NewLine', value: { en: 'Owns', zh: '拥有' } },

        { source: 'Universal', target: 'Illumination', value: { en: 'Owns', zh: '拥有' } },
        { source: 'Universal', target: 'DreamWorks', value: { en: 'Owns', zh: '拥有' } },

        { source: 'Marvel', target: 'KFeige', value: { en: 'President', zh: '总裁' } },
        { source: 'Lucasfilm', target: 'KKennedy', value: { en: 'President', zh: '总裁' } },
        { source: 'DC_Studios', target: 'JGunn', value: { en: 'Co-CEO', zh: '联席CEO' } },

        { source: 'CNolan', target: 'Oppenheimer', value: { en: 'Directed', zh: '导演' } },
        { source: 'CNolan', target: 'DarkKnight', value: { en: 'Directed', zh: '导演' } },
        { source: 'CNolan', target: 'Inception', value: { en: 'Directed', zh: '导演' } },
        { source: 'CNolan', target: 'Interstellar', value: { en: 'Directed', zh: '导演' } },
        { source: 'CNolan', target: 'Tenet', value: { en: 'Directed', zh: '导演' } },

        { source: 'SSpielberg', target: 'JurassicPark', value: { en: 'Directed', zh: '导演' } },
        { source: 'SSpielberg', target: 'SchindlerList', value: { en: 'Directed', zh: '导演' } },

        { source: 'JCameron', target: 'Avatar', value: { en: 'Directed', zh: '导演' } },
        { source: 'JCameron', target: 'Titanic', value: { en: 'Directed', zh: '导演' } },

        { source: 'DVilleneuve', target: 'Dune', value: { en: 'Directed', zh: '导演' } },
        { source: 'DVilleneuve', target: 'Dune2', value: { en: 'Directed', zh: '导演' } },

        { source: 'Gerwig', target: 'Barbie', value: { en: 'Directed', zh: '导演' } },

        { source: 'Marvel', target: 'Avengers', value: { en: 'Produced', zh: '制作' } },
        { source: 'Marvel', target: 'Endgame', value: { en: 'Produced', zh: '制作' } },
        { source: 'Marvel', target: 'IronMan', value: { en: 'Produced', zh: '制作' } },

        { source: 'Lucasfilm', target: 'StarWars', value: { en: 'Produced', zh: '制作' } },
        { source: 'Lucasfilm', target: 'Mandalorian', value: { en: 'Produced', zh: '制作' } },

        { source: 'WB_Pictures', target: 'Barbie', value: { en: 'Distributed', zh: '发行' } },
        { source: 'WB_Pictures', target: 'Dune', value: { en: 'Distributed', zh: '发行' } },
        { source: 'WB_Pictures', target: 'Dune2', value: { en: 'Distributed', zh: '发行' } },
        { source: 'WB_Pictures', target: 'HarryPotter', value: { en: 'Distributed', zh: '发行' } },
        { source: 'WB_Pictures', target: 'DarkKnight', value: { en: 'Distributed', zh: '发行' } },
        { source: 'WB_Pictures', target: 'Inception', value: { en: 'Distributed', zh: '发行' } },
        { source: 'NewLine', target: 'LOTR', value: { en: 'Produced', zh: '制作' } },

        { source: 'DC_Studios', target: 'SupermanLegacy', value: { en: 'Producing', zh: '制作' } },
        { source: 'DC_Studios', target: 'Joker', value: { en: 'Associated', zh: '关联' } },
        { source: 'DC_Studios', target: 'TheBatman', value: { en: 'Associated', zh: '关联' } },

        { source: 'HBO', target: 'GOT', value: { en: 'Original', zh: '原创' } },
        { source: 'HBO', target: 'Succession', value: { en: 'Original', zh: '原创' } },
        { source: 'HBO', target: 'LastOfUs', value: { en: 'Original', zh: '原创' } },

        { source: 'Universal', target: 'Oppenheimer', value: { en: 'Distributed', zh: '发行' } },
        { source: 'Universal', target: 'JurassicPark', value: { en: 'Distributed', zh: '发行' } },

        { source: '20thCentury', target: 'Avatar', value: { en: 'Produced', zh: '制作' } },
        { source: 'Paramount', target: 'TopGun', value: { en: 'Distributed', zh: '发行' } },
        { source: 'Paramount', target: 'Titanic', value: { en: 'Distributed', zh: '发行' } },

        { source: 'Sony', target: 'SpiderVerse', value: { en: 'Produced', zh: '制作' } },
        { source: 'Netflix', target: 'StrangerThings', value: { en: 'Original', zh: '原创' } },
        { source: 'Netflix', target: 'SquidGame', value: { en: 'Original', zh: '原创' } }
    ]
};
