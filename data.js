export const data = {
    categories: [
        { name: { en: 'Region', zh: '地区/产业' } }, // New Category 0
        { name: { en: 'Distributor', zh: '发行商/集团' } }, // 1
        { name: { en: 'Production Studio', zh: '制作工作室' } }, // 2
        { name: { en: 'Director', zh: '导演' } }, // 3
        { name: { en: 'Producer', zh: '制片人' } }, // 4
        { name: { en: 'Movie', zh: '电影' } }, // 5
        { name: { en: 'TV Series', zh: '剧集' } } // 6
    ],
    nodes: [
        // Regions
        { id: 'Hollywood', name: { en: 'Hollywood', zh: '好莱坞' }, category: 0, symbolSize: 80, label: { show: true } },
        { id: 'ChinaFilm', name: { en: 'Chinese Cinema', zh: '华语电影' }, category: 0, symbolSize: 80, label: { show: true } },
        { id: 'JapanFilm', name: { en: 'Japanese Cinema', zh: '日本影视' }, category: 0, symbolSize: 70, label: { show: true } },
        { id: 'FrenchFilm', name: { en: 'French Cinema', zh: '法国电影' }, category: 0, symbolSize: 70, label: { show: true } },

        // Corporations (Category 1)
        { id: 'Disney', name: { en: 'The Walt Disney Company', zh: '华特迪士尼' }, category: 1, symbolSize: 60, label: { show: true } },
        { id: 'WBD', name: { en: 'Warner Bros. Discovery', zh: '华纳兄弟探索' }, category: 1, symbolSize: 60, label: { show: true } },
        { id: 'Universal', name: { en: 'Universal Pictures', zh: '环球影业' }, category: 1, symbolSize: 50, label: { show: true } },
        { id: 'Paramount', name: { en: 'Paramount Global', zh: '派拉蒙全球' }, category: 1, symbolSize: 50, label: { show: true } },
        { id: 'Sony', name: { en: 'Sony Pictures', zh: '索尼影视' }, category: 1, symbolSize: 50, label: { show: true } },
        { id: 'Netflix', name: { en: 'Netflix', zh: '网飞 (Netflix)' }, category: 1, symbolSize: 55, label: { show: true } },
        { id: 'Amazon', name: { en: 'Amazon MGM', zh: '亚马逊MGM' }, category: 1, symbolSize: 55, label: { show: true } },

        // Studios
        { id: 'Hulu', name: { en: 'Hulu', zh: 'Hulu' }, category: 1, symbolSize: 45, label: { show: true } },

        // China Corps
        { id: 'CFG', name: { en: 'China Film Group', zh: '中影集团' }, category: 1, symbolSize: 50, label: { show: true } },
        { id: 'Tencent', name: { en: 'Tencent Pictures', zh: '腾讯影业' }, category: 1, symbolSize: 45, label: { show: true } },
        { id: 'Bona', name: { en: 'Bona Film Group', zh: '博纳影业' }, category: 1, symbolSize: 45, label: { show: true } },
        { id: 'LightChaser', name: { en: 'Light Chaser Animation', zh: '追光动画' }, category: 2, symbolSize: 35 },

        // Japan Distributors
        { id: 'Toho', name: { en: 'Toho', zh: '东宝' }, category: 1, symbolSize: 50, label: { show: true } },
        { id: 'Toei', name: { en: 'Toei Company', zh: '东映' }, category: 1, symbolSize: 50, label: { show: true } },
        { id: 'Shochiku', name: { en: 'Shochiku', zh: '松竹' }, category: 1, symbolSize: 45, label: { show: true } },
        { id: 'Kadokawa', name: { en: 'Kadokawa', zh: '角川' }, category: 1, symbolSize: 45, label: { show: true } },

        // Studios
        { id: 'Aniplex', name: { en: 'Aniplex', zh: 'Aniplex' }, category: 2, symbolSize: 40 }, // Under Sony
        { id: 'Amblin', name: { en: 'Amblin Entertainment', zh: '安培林娱乐' }, category: 2, symbolSize: 35 },
        { id: 'WB_TV', name: { en: 'Warner Bros. Television', zh: '华纳兄弟电视' }, category: 2, symbolSize: 35 },
        { id: 'Ghibli', name: { en: 'Studio Ghibli', zh: '吉卜力' }, category: 2, symbolSize: 40 },
        { id: 'CoMixWave', name: { en: 'CoMix Wave Films', zh: 'CoMix Wave' }, category: 2, symbolSize: 35 },
        { id: 'KyoAni', name: { en: 'Kyoto Animation', zh: '京都动画' }, category: 2, symbolSize: 35 },
        { id: 'Ufotable', name: { en: 'Ufotable', zh: '飞碟社' }, category: 2, symbolSize: 35 },

        // French Distributors
        { id: 'Gaumont', name: { en: 'Gaumont', zh: '高蒙' }, category: 1, symbolSize: 50, label: { show: true } },

        // Studios (Detailed US)
        { id: 'Marvel', name: { en: 'Marvel Studios', zh: '漫威影业' }, category: 2, symbolSize: 40 },
        { id: 'Lucasfilm', name: { en: 'Lucasfilm', zh: '卢卡斯影业' }, category: 2, symbolSize: 35 },
        { id: 'Pixar', name: { en: 'Pixar', zh: '皮克斯' }, category: 2, symbolSize: 35 },
        { id: '20thCentury', name: { en: '20th Century Studios', zh: '20世纪影业' }, category: 2, symbolSize: 35 },
        { id: 'WB_Pictures', name: { en: 'Warner Bros. Pictures', zh: '华纳兄弟影片' }, category: 2, symbolSize: 40 },
        { id: 'HBO', name: { en: 'HBO', zh: 'HBO' }, category: 2, symbolSize: 40 },
        { id: 'DC_Studios', name: { en: 'DC Studios', zh: 'DC影业' }, category: 2, symbolSize: 35 },
        { id: 'NewLine', name: { en: 'New Line Cinema', zh: '新线电影' }, category: 2, symbolSize: 30 },
        { id: 'Illumination', name: { en: 'Illumination', zh: '照明娱乐' }, category: 2, symbolSize: 30 },
        { id: 'DreamWorks', name: { en: 'DreamWorks Animation', zh: '梦工厂动画' }, category: 2, symbolSize: 30 },

        // People
        { id: 'KFeige', name: { en: 'Kevin Feige', zh: '凯文·费奇' }, category: 4, symbolSize: 25 },
        { id: 'KKennedy', name: { en: 'Kathleen Kennedy', zh: '凯瑟琳·肯尼迪' }, category: 4, symbolSize: 25 },
        { id: 'JGunn', name: { en: 'James Gunn', zh: '詹姆斯·滚导' }, category: 3, symbolSize: 25 },
        { id: 'CNolan', name: { en: 'Christopher Nolan', zh: '克里斯托弗·诺兰' }, category: 3, symbolSize: 30 },
        { id: 'SSpielberg', name: { en: 'Steven Spielberg', zh: '斯蒂芬·斯皮尔伯格' }, category: 3, symbolSize: 30 },
        { id: 'JCameron', name: { en: 'James Cameron', zh: '詹姆斯·卡梅隆' }, category: 3, symbolSize: 30 },
        { id: 'DVilleneuve', name: { en: 'Denis Villeneuve', zh: '丹伊斯·维伦纽瓦' }, category: 3, symbolSize: 25 },
        { id: 'Gerwig', name: { en: 'Greta Gerwig', zh: '葛韦格' }, category: 3, symbolSize: 25 },
        { id: 'Tarantino', name: { en: 'Quentin Tarantino', zh: '昆汀·塔伦蒂诺' }, category: 3, symbolSize: 25 },
        { id: 'Scorsese', name: { en: 'Martin Scorsese', zh: '马丁·斯科塞斯' }, category: 3, symbolSize: 25 },

        // New People
        { id: 'JNolan', name: { en: 'Jonathan Nolan', zh: '乔纳森·诺兰' }, category: 4, symbolSize: 25 },
        { id: 'Taika', name: { en: 'Taika Waititi', zh: '塔伊加·维迪提' }, category: 3, symbolSize: 25 },
        { id: 'Miyazaki', name: { en: 'Hayao Miyazaki', zh: '宫崎骏' }, category: 3, symbolSize: 30 },
        { id: 'Shinkai', name: { en: 'Makoto Shinkai', zh: '新海诚' }, category: 3, symbolSize: 25 },
        { id: 'LucBesson', name: { en: 'Luc Besson', zh: '吕克·贝松' }, category: 3, symbolSize: 25 },

        // China People
        { id: 'FrantGwo', name: { en: 'Frant Gwo', zh: '郭帆' }, category: 3, symbolSize: 25 },
        { id: 'Wuershan', name: { en: 'Wuershan', zh: '乌尔善' }, category: 3, symbolSize: 25 },
        { id: 'Jiaozi', name: { en: 'Jiaozi', zh: '饺子' }, category: 3, symbolSize: 25 },

        // Movies 
        { id: 'Avengers', name: { en: 'The Avengers', zh: '复仇者联盟' }, category: 5, symbolSize: 20 },
        { id: 'Endgame', name: { en: 'Avengers: Endgame', zh: '复联4：终局之战' }, category: 5, symbolSize: 25 },
        { id: 'IronMan', name: { en: 'Iron Man', zh: '钢铁侠' }, category: 5, symbolSize: 20 },
        { id: 'StarWars', name: { en: 'Star Wars: A New Hope', zh: '星球大战：新希望' }, category: 5, symbolSize: 30 },
        { id: 'DarkKnight', name: { en: 'The Dark Knight', zh: '蝙蝠侠：黑暗骑士' }, category: 5, symbolSize: 25 },
        { id: 'Joker', name: { en: 'Joker', zh: '小丑' }, category: 5, symbolSize: 20 },
        { id: 'TheBatman', name: { en: 'The Batman', zh: '新蝙蝠侠' }, category: 5, symbolSize: 20 },
        { id: 'SupermanLegacy', name: { en: 'Superman: Legacy', zh: '超人：传承' }, category: 5, symbolSize: 15 },
        { id: 'Barbie', name: { en: 'Barbie', zh: '芭比' }, category: 5, symbolSize: 25 },
        { id: 'Dune', name: { en: 'Dune: Part One', zh: '沙丘' }, category: 5, symbolSize: 20 },
        { id: 'Dune2', name: { en: 'Dune: Part Two', zh: '沙丘2' }, category: 5, symbolSize: 20 },
        { id: 'HarryPotter', name: { en: 'Harry Potter Series', zh: '哈利波特系列' }, category: 5, symbolSize: 30 },
        { id: 'LOTR', name: { en: 'Lord of the Rings', zh: '指环王系列' }, category: 5, symbolSize: 30 },
        { id: 'Oppenheimer', name: { en: 'Oppenheimer', zh: '奥本海默' }, category: 5, symbolSize: 25 },
        { id: 'JurassicPark', name: { en: 'Jurassic Park', zh: '侏罗纪公园' }, category: 5, symbolSize: 25 },
        { id: 'Avatar', name: { en: 'Avatar', zh: '阿凡达' }, category: 5, symbolSize: 30 },
        { id: 'Titanic', name: { en: 'Titanic', zh: '泰坦尼克号' }, category: 5, symbolSize: 25 },
        { id: 'TopGun', name: { en: 'Top Gun: Maverick', zh: '壮志凌云：独行侠' }, category: 5, symbolSize: 20 },
        { id: 'Inception', name: { en: 'Inception', zh: '盗梦空间' }, category: 5, symbolSize: 20 },
        { id: 'Interstellar', name: { en: 'Interstellar', zh: '星际穿越' }, category: 5, symbolSize: 20 },
        { id: 'SpiderVerse', name: { en: 'Spider-Man: Into the Spider-Verse', zh: '蜘蛛侠：平行宇宙' }, category: 5, symbolSize: 20 },
        { id: 'SpiritedAway', name: { en: 'Spirited Away', zh: '千与千寻' }, category: 5, symbolSize: 30 },
        { id: 'GodzillaOne', name: { en: 'Godzilla Minus One', zh: '哥斯拉-1.0' }, category: 5, symbolSize: 25 },
        { id: 'YourName', name: { en: 'Your Name.', zh: '你的名字。' }, category: 5, symbolSize: 25 },
        { id: 'Suzume', name: { en: 'Suzume', zh: '铃芽之旅' }, category: 5, symbolSize: 20 },
        { id: 'OnePieceRed', name: { en: 'One Piece Film: Red', zh: '海贼王：红发歌姬' }, category: 5, symbolSize: 25 },
        { id: 'SlamDunk', name: { en: 'The First Slam Dunk', zh: '灌篮高手' }, category: 5, symbolSize: 25 },
        { id: 'BoyAndHeron', name: { en: 'The Boy and the Heron', zh: '你想活出怎样的人生' }, category: 5, symbolSize: 25 },
        { id: 'Leon', name: { en: 'The Professional', zh: '这个杀手不太冷' }, category: 5, symbolSize: 25 },
        { id: 'SilentVoice', name: { en: 'A Silent Voice', zh: '声之形' }, category: 5, symbolSize: 25 },
        { id: 'ThursdayMurderClub', name: { en: 'The Thursday Murder Club', zh: '周四推理俱乐部' }, category: 5, symbolSize: 25 },

        // TV Series
        { id: 'Mandalorian', name: { en: 'The Mandalorian', zh: '曼达洛人' }, category: 6, symbolSize: 25 },
        { id: 'GOT', name: { en: 'Game of Thrones', zh: '权力的游戏' }, category: 6, symbolSize: 25 },
        { id: 'Succession', name: { en: 'Succession', zh: '继承之战' }, category: 6, symbolSize: 20 },
        { id: 'LastOfUs', name: { en: 'The Last of Us', zh: '最后生还者' }, category: 6, symbolSize: 20 },
        { id: 'StrangerThings', name: { en: 'Stranger Things', zh: '怪奇物语' }, category: 6, symbolSize: 25 },
        { id: 'SquidGame', name: { en: 'Squid Game', zh: '鱿鱼游戏' }, category: 6, symbolSize: 20 },
        { id: 'Fallout', name: { en: 'Fallout', zh: '辐射' }, category: 6, symbolSize: 30 },
        { id: 'OMITB', name: { en: 'Only Murders in the Building', zh: '大楼里只有谋杀' }, category: 6, symbolSize: 25 },
        { id: 'InteriorChinatown', name: { en: 'Interior Chinatown', zh: '内景唐人街' }, category: 6, symbolSize: 25 },
        { id: 'DemonSlayer', name: { en: 'Demon Slayer', zh: '鬼灭之刃' }, category: 6, symbolSize: 30 },
        { id: 'TheBear', name: { en: 'The Bear', zh: '熊家餐馆' }, category: 6, symbolSize: 25 },
        { id: 'Shogun', name: { en: 'Shogun', zh: '幕府将军' }, category: 6, symbolSize: 25 },
        { id: 'HandmaidsTale', name: { en: 'The Handmaid\'s Tale', zh: '使女的故事' }, category: 6, symbolSize: 25 },
        { id: 'Friends', name: { en: 'Friends', zh: '老友记' }, category: 6, symbolSize: 30 },

        // China Movies
        { id: 'WanderingEarth', name: { en: 'The Wandering Earth', zh: '流浪地球' }, category: 5, symbolSize: 30 },
        { id: 'WanderingEarth2', name: { en: 'The Wandering Earth II', zh: '流浪地球2' }, category: 5, symbolSize: 25 },
        { id: 'Nezha', name: { en: 'Ne Zha', zh: '哪吒之魔童降世' }, category: 5, symbolSize: 30 },
        { id: 'CreationGods', name: { en: 'Creation of the Gods I', zh: '封神第一部' }, category: 5, symbolSize: 25 },
        { id: 'ChangJinHu', name: { en: 'The Battle at Lake Changjin', zh: '长津湖' }, category: 5, symbolSize: 30 },
    ],
    links: [
        // Regional Connections
        { source: 'Hollywood', target: 'Disney', value: { en: 'Industry Hub', zh: '产业核心' } },
        { source: 'Hollywood', target: 'WBD', value: { en: 'Industry Hub', zh: '产业核心' } },
        { source: 'Hollywood', target: 'Universal', value: { en: 'Industry Hub', zh: '产业核心' } },
        { source: 'Hollywood', target: 'Paramount', value: { en: 'Industry Hub', zh: '产业核心' } },
        { source: 'Hollywood', target: 'Sony', value: { en: 'Industry Hub', zh: '产业核心' } },
        { source: 'Hollywood', target: 'Netflix', value: { en: 'Industry Hub', zh: '产业核心' } },
        { source: 'Hollywood', target: 'Amazon', value: { en: 'Industry Hub', zh: '产业核心' } },

        { source: 'ChinaFilm', target: 'CFG', value: { en: 'Industry Leader', zh: '龙头' } },
        { source: 'ChinaFilm', target: 'Tencent', value: { en: 'Major Player', zh: '主要玩家' } },
        { source: 'ChinaFilm', target: 'Bona', value: { en: 'Major Player', zh: '主要玩家' } },
        { source: 'ChinaFilm', target: 'LightChaser', value: { en: 'Animation', zh: '动画' } },

        { source: 'JapanFilm', target: 'Ghibli', value: { en: 'Animation', zh: '动画' } },
        { source: 'JapanFilm', target: 'Toho', value: { en: 'Major Player', zh: '主要玩家' } },
        { source: 'JapanFilm', target: 'Toei', value: { en: 'Major Player', zh: '主要玩家' } },
        { source: 'JapanFilm', target: 'Shochiku', value: { en: 'Major Player', zh: '主要玩家' } },
        { source: 'JapanFilm', target: 'Kadokawa', value: { en: 'Major Player', zh: '主要玩家' } },
        { source: 'JapanFilm', target: 'CoMixWave', value: { en: 'Animation', zh: '动画' } },
        { source: 'JapanFilm', target: 'KyoAni', value: { en: 'Animation', zh: '动画' } },

        { source: 'FrenchFilm', target: 'Gaumont', value: { en: 'Major Player', zh: '主要玩家' } },
        { source: 'FrenchFilm', target: 'LucBesson', value: { en: 'Key Director', zh: '核心导演' } },

        // Ownership & Structure
        { source: 'Disney', target: 'Marvel', value: { en: 'Owns', zh: '拥有' } },
        { source: 'Disney', target: 'Lucasfilm', value: { en: 'Owns', zh: '拥有' } },
        { source: 'Disney', target: 'Pixar', value: { en: 'Owns', zh: '拥有' } },
        { source: 'Disney', target: '20thCentury', value: { en: 'Owns', zh: '拥有' } },
        { source: 'Disney', target: 'Hulu', value: { en: 'Majority Stake', zh: '控股' } },

        { source: 'Sony', target: 'Aniplex', value: { en: 'Owns', zh: '拥有' } }, // Aniplex under Sony

        { source: 'WBD', target: 'WB_Pictures', value: { en: 'Owns', zh: '拥有' } },
        { source: 'WBD', target: 'HBO', value: { en: 'Owns', zh: '拥有' } },
        { source: 'WBD', target: 'DC_Studios', value: { en: 'Owns', zh: '拥有' } },
        { source: 'WBD', target: 'NewLine', value: { en: 'Owns', zh: '拥有' } },
        { source: 'WBD', target: 'WB_TV', value: { en: 'Owns', zh: '拥有' } },

        { source: 'Universal', target: 'Illumination', value: { en: 'Owns', zh: '拥有' } },
        { source: 'Universal', target: 'DreamWorks', value: { en: 'Owns', zh: '拥有' } },

        // People
        { source: 'Marvel', target: 'KFeige', value: { en: 'President', zh: '总裁' } },
        { source: 'Lucasfilm', target: 'KKennedy', value: { en: 'President', zh: '总裁' } },
        { source: 'DC_Studios', target: 'JGunn', value: { en: 'Co-CEO', zh: '联席CEO' } },
        { source: 'Ghibli', target: 'Miyazaki', value: { en: 'Founder', zh: '创始人' } },

        { source: 'SSpielberg', target: 'Amblin', value: { en: 'Founder', zh: '创始人' } },

        { source: 'CNolan', target: 'Oppenheimer', value: { en: 'Directed', zh: '导演' } },
        { source: 'CNolan', target: 'DarkKnight', value: { en: 'Directed', zh: '导演' } },
        { source: 'CNolan', target: 'Inception', value: { en: 'Directed', zh: '导演' } },
        { source: 'CNolan', target: 'Interstellar', value: { en: 'Directed', zh: '导演' } },
        { source: 'CNolan', target: 'JNolan', value: { en: 'Brothers', zh: '兄弟' } },

        { source: 'SSpielberg', target: 'JurassicPark', value: { en: 'Directed', zh: '导演' } },

        { source: 'JCameron', target: 'Avatar', value: { en: 'Directed', zh: '导演' } },
        { source: 'JCameron', target: 'Titanic', value: { en: 'Directed', zh: '导演' } },

        { source: 'DVilleneuve', target: 'Dune', value: { en: 'Directed', zh: '导演' } },
        { source: 'DVilleneuve', target: 'Dune2', value: { en: 'Directed', zh: '导演' } },

        { source: 'Gerwig', target: 'Barbie', value: { en: 'Directed', zh: '导演' } },

        { source: 'LucBesson', target: 'Leon', value: { en: 'Directed', zh: '导演' } },
        { source: 'Miyazaki', target: 'SpiritedAway', value: { en: 'Directed', zh: '导演' } },
        { source: 'Miyazaki', target: 'BoyAndHeron', value: { en: 'Directed', zh: '导演' } },
        { source: 'Shinkai', target: 'YourName', value: { en: 'Directed', zh: '导演' } },
        { source: 'Shinkai', target: 'Suzume', value: { en: 'Directed', zh: '导演' } },
        { source: 'Taika', target: 'InteriorChinatown', value: { en: 'Producer', zh: '制片人' } },

        // China
        { source: 'FrantGwo', target: 'WanderingEarth', value: { en: 'Directed', zh: '导演' } },
        { source: 'FrantGwo', target: 'WanderingEarth2', value: { en: 'Directed', zh: '导演' } },
        { source: 'Wuershan', target: 'CreationGods', value: { en: 'Directed', zh: '导演' } },
        { source: 'Jiaozi', target: 'Nezha', value: { en: 'Directed', zh: '导演' } },

        // Works
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
        { source: 'WB_TV', target: 'Friends', value: { en: 'Produced', zh: '制作' } },
        { source: 'HBO', target: 'Friends', value: { en: 'Streaming', zh: '流媒体' } },

        { source: 'DC_Studios', target: 'SupermanLegacy', value: { en: 'Producing', zh: '制作' } },
        { source: 'DC_Studios', target: 'Joker', value: { en: 'Associated', zh: '关联' } },
        { source: 'DC_Studios', target: 'TheBatman', value: { en: 'Associated', zh: '关联' } },

        { source: 'HBO', target: 'GOT', value: { en: 'Original', zh: '原创' } },
        { source: 'HBO', target: 'Succession', value: { en: 'Original', zh: '原创' } },
        { source: 'HBO', target: 'LastOfUs', value: { en: 'Original', zh: '原创' } },

        { source: 'Universal', target: 'Oppenheimer', value: { en: 'Distributed', zh: '发行' } },
        { source: 'Universal', target: 'JurassicPark', value: { en: 'Distributed', zh: '发行' } },
        { source: 'Amblin', target: 'JurassicPark', value: { en: 'Produced', zh: '制作' } },

        { source: '20thCentury', target: 'Avatar', value: { en: 'Produced', zh: '制作' } },
        { source: 'Paramount', target: 'TopGun', value: { en: 'Distributed', zh: '发行' } },
        { source: 'Paramount', target: 'Titanic', value: { en: 'Distributed', zh: '发行' } },

        { source: 'Sony', target: 'SpiderVerse', value: { en: 'Produced', zh: '制作' } },
        { source: 'Netflix', target: 'StrangerThings', value: { en: 'Original', zh: '原创' } },
        { source: 'Netflix', target: 'SquidGame', value: { en: 'Original', zh: '原创' } },
        { source: 'Netflix', target: 'ThursdayMurderClub', value: { en: 'Produced', zh: '出品' } },
        { source: 'Amblin', target: 'ThursdayMurderClub', value: { en: 'Produced', zh: '制作' } },

        { source: 'Amazon', target: 'Fallout', value: { en: 'Original', zh: '原创' } },
        { source: 'JNolan', target: 'Fallout', value: { en: 'producer', zh: '制片人' } },
        { source: 'Hulu', target: 'OMITB', value: { en: 'Original', zh: '原创' } },
        { source: 'Hulu', target: 'InteriorChinatown', value: { en: 'Original', zh: '原创' } },
        { source: 'Hulu', target: 'TheBear', value: { en: 'Original', zh: '原创' } },
        { source: 'Hulu', target: 'Shogun', value: { en: 'Original', zh: '原创' } },
        { source: 'Hulu', target: 'HandmaidsTale', value: { en: 'Original', zh: '原创' } },

        { source: 'Gaumont', target: 'Leon', value: { en: 'Produced', zh: '制作' } },
        { source: 'Ghibli', target: 'SpiritedAway', value: { en: 'Produced', zh: '制作' } },
        { source: 'Ghibli', target: 'BoyAndHeron', value: { en: 'Produced', zh: '制作' } },
        { source: 'Toho', target: 'GodzillaOne', value: { en: 'Produced', zh: '制作' } },
        { source: 'Toho', target: 'YourName', value: { en: 'Distributed', zh: '发行' } },
        { source: 'Toho', target: 'Suzume', value: { en: 'Distributed', zh: '发行' } },
        { source: 'Toei', target: 'OnePieceRed', value: { en: 'Produced', zh: '制作' } },
        { source: 'Toei', target: 'SlamDunk', value: { en: 'Produced', zh: '制作' } },
        { source: 'CoMixWave', target: 'YourName', value: { en: 'Produced', zh: '制作' } },
        { source: 'CoMixWave', target: 'Suzume', value: { en: 'Produced', zh: '制作' } },
        { source: 'KyoAni', target: 'SilentVoice', value: { en: 'Produced', zh: '制作' } },
        { source: 'Shochiku', target: 'SilentVoice', value: { en: 'Distributed', zh: '发行' } },

        { source: 'Aniplex', target: 'DemonSlayer', value: { en: 'Produced', zh: '制作' } },
        { source: 'Ufotable', target: 'DemonSlayer', value: { en: 'Animation', zh: '动画' } },

        // China
        { source: 'CFG', target: 'WanderingEarth', value: { en: 'Produced', zh: '出品' } },
        { source: 'CFG', target: 'WanderingEarth2', value: { en: 'Produced', zh: '出品' } },
        { source: 'CFG', target: 'ChangJinHu', value: { en: 'Produced', zh: '出品' } },
        { source: 'Bona', target: 'ChangJinHu', value: { en: 'Produced', zh: '主控' } },
        { source: 'Tencent', target: 'CreationGods', value: { en: 'Produced', zh: '出品' } },
        { source: 'LightChaser', target: 'Nezha', value: { en: 'Animation', zh: '制作' } },
    ]
};
