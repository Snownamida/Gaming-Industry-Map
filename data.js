const rawData = {
    categories: {
        'Conglomerate': '综合企业',
        'Platform': '平台',
        'Publisher': '发行商',
        'Studio': '工作室',
        'Game': '游戏'
    },
    nodes: [
        // --- CONGLOMERATES & PLATFORM HOLDERS ---
        { id: 'Tencent', name: 'Tencent', name_zh: '腾讯', category: 'Conglomerate', val: 50 },
        { id: 'SonyGroup', name: 'Sony Group', name_zh: '索尼集团', category: 'Conglomerate', val: 50 },
        { id: 'Microsoft', name: 'Microsoft', name_zh: '微软', category: 'Conglomerate', val: 50 },
        { id: 'Nintendo', name: 'Nintendo', name_zh: '任天堂', category: 'Conglomerate', val: 50 },
        { id: 'NetEase', name: 'NetEase', name_zh: '网易', category: 'Conglomerate', val: 35 },
        { id: 'Embracer', name: 'Embracer Group', name_zh: 'Embracer集团', category: 'Conglomerate', val: 35 },
        { id: 'Valve', name: 'Valve Corporation', name_zh: 'Valve (V社)', category: 'Conglomerate', val: 40 },

        // --- PLATFORMS ---
        { id: 'PlayStation', name: 'PlayStation', name_zh: 'PlayStation', category: 'Platform', val: 40 },
        { id: 'Xbox', name: 'Xbox', name_zh: 'Xbox', category: 'Platform', val: 40 },
        { id: 'Switch', name: 'Nintendo Switch', name_zh: 'Switch', category: 'Platform', val: 40 },
        { id: 'Steam', name: 'Steam', name_zh: 'Steam', category: 'Platform', val: 40 },
        { id: 'EpicStore', name: 'Epic Games Store', name_zh: 'Epic 游戏商城', category: 'Platform', val: 30 },
        { id: 'AppStore', name: 'App Store', name_zh: 'App Store', category: 'Platform', val: 30 },
        { id: 'GooglePlay', name: 'Google Play', name_zh: 'Google Play', category: 'Platform', val: 30 },

        // --- PUBLISHERS & MAJOR SUBSIDIARIES ---
        // Microsoft Cluster
        { id: 'ActivisionBlizzard', name: 'Activision Blizzard', name_zh: '动视暴雪', category: 'Publisher', val: 45 },
        { id: 'Bethesda', name: 'Bethesda Softworks', name_zh: '贝塞斯达', category: 'Publisher', val: 40 },
        { id: 'Mojang', name: 'Mojang Studios', name_zh: 'Mojang', category: 'Studio', val: 30 },
        { id: 'Obsidian', name: 'Obsidian Entertainment', name_zh: '黑曜石娱乐', category: 'Studio', val: 25 },
        { id: 'Playground', name: 'Playground Games', name_zh: 'Playground Games', category: 'Studio', val: 25 },
        { id: 'Turn10', name: 'Turn 10 Studios', name_zh: 'Turn 10', category: 'Studio', val: 25 },
        { id: '343', name: '343 Industries', name_zh: '343 Industries', category: 'Studio', val: 25 },
        { id: 'Blizzard', name: 'Blizzard Entertainment', name_zh: '暴雪娱乐', category: 'Studio', val: 40 },
        { id: 'InfinityWard', name: 'Infinity Ward', name_zh: 'Infinity Ward', category: 'Studio', val: 30 },
        { id: 'Treyarch', name: 'Treyarch', name_zh: 'Treyarch', category: 'Studio', val: 30 },
        { id: 'King', name: 'King', name_zh: 'King', category: 'Publisher', val: 30 },

        // Sony Cluster
        { id: 'SIE', name: 'Sony Interactive Entertainment', name_zh: '索尼互动娱乐', category: 'Publisher', val: 45 },
        { id: 'NaughtyDog', name: 'Naughty Dog', name_zh: '顽皮狗', category: 'Studio', val: 35 },
        { id: 'Insomniac', name: 'Insomniac Games', name_zh: 'Insomniac Games', category: 'Studio', val: 35 },
        { id: 'SantaMonica', name: 'Santa Monica Studio', name_zh: '圣莫尼卡工作室', category: 'Studio', val: 35 },
        { id: 'Guerrilla', name: 'Guerrilla Games', name_zh: 'Guerrilla Games', category: 'Studio', val: 30 },
        { id: 'SuckerPunch', name: 'Sucker Punch', name_zh: 'Sucker Punch', category: 'Studio', val: 30 },
        { id: 'Polyphony', name: 'Polyphony Digital', name_zh: 'Polyphony Digital', category: 'Studio', val: 30 },
        { id: 'Bungie', name: 'Bungie', name_zh: 'Bungie', category: 'Studio', val: 35 },

        // Nintendo Cluster
        { id: 'NintendoEPD', name: 'Nintendo EPD', name_zh: '任天堂EPD', category: 'Studio', val: 40 },
        { id: 'HAL', name: 'HAL Laboratory', name_zh: 'HAL研究所', category: 'Studio', val: 30 },
        { id: 'IntelligentSys', name: 'Intelligent Systems', name_zh: 'Intelligent Systems', category: 'Studio', val: 30 },
        { id: 'GameFreak', name: 'Game Freak', name_zh: 'Game Freak', category: 'Studio', val: 35 },
        { id: 'PokemonCo', name: 'The Pokémon Company', name_zh: '宝可梦公司', category: 'Publisher', val: 40 },
        { id: 'MonolithSoft', name: 'Monolith Soft', name_zh: 'Monolith Soft', category: 'Studio', val: 30 },

        // Tencent Cluster
        { id: 'Riot', name: 'Riot Games', name_zh: '拳头游戏', category: 'Studio', val: 40 },
        { id: 'Supercell', name: 'Supercell', name_zh: 'Supercell', category: 'Studio', val: 35 },
        { id: 'EpicGames', name: 'Epic Games', name_zh: 'Epic Games', category: 'Publisher', val: 40 },
        { id: 'TiMi', name: 'TiMi Studio Group', name_zh: '天美工作室群', category: 'Studio', val: 35 },
        { id: 'Lightspeed', name: 'Lightspeed & Quantum', name_zh: '光子工作室群', category: 'Studio', val: 35 },
        { id: 'GrindingGear', name: 'Grinding Gear Games', name_zh: 'Grinding Gear Games', category: 'Studio', val: 25 },

        // Large Independent Publishers
        { id: 'EA', name: 'Electronic Arts', name_zh: '艺电 (EA)', category: 'Publisher', val: 45 },
        { id: 'Respawn', name: 'Respawn Entertainment', name_zh: '重生娱乐', category: 'Studio', val: 35 },
        { id: 'BioWare', name: 'BioWare', name_zh: 'BioWare', category: 'Studio', val: 30 },
        { id: 'DICE', name: 'DICE', name_zh: 'DICE', category: 'Studio', val: 30 },
        { id: 'Maxis', name: 'Maxis', name_zh: 'Maxis', category: 'Studio', val: 30 },

        { id: 'Ubisoft', name: 'Ubisoft', name_zh: '育碧', category: 'Publisher', val: 45 },
        { id: 'UbisoftMontreal', name: 'Ubisoft Montreal', name_zh: '育碧蒙特利尔', category: 'Studio', val: 35 },
        { id: 'UbisoftQuebec', name: 'Ubisoft Quebec', name_zh: '育碧魁北克', category: 'Studio', val: 30 },
        { id: 'Massive', name: 'Massive Entertainment', name_zh: 'Massive Entertainment', category: 'Studio', val: 30 },

        { id: 'TakeTwo', name: 'Take-Two Interactive', name_zh: 'Take-Two', category: 'Publisher', val: 45 },
        { id: 'Rockstar', name: 'Rockstar Games', name_zh: 'R星 (Rockstar)', category: 'Studio', val: 40 },
        { id: '2K', name: '2K Games', name_zh: '2K Games', category: 'Publisher', val: 35 },
        { id: 'Firaxis', name: 'Firaxis Games', name_zh: 'Firaxis Games', category: 'Studio', val: 30 },
        { id: 'Hangar13', name: 'Hangar 13', name_zh: 'Hangar 13', category: 'Studio', val: 25 },
        { id: 'Zynga', name: 'Zynga', name_zh: 'Zynga', category: 'Publisher', val: 35 },

        { id: 'SquareEnix', name: 'Square Enix', name_zh: '史克威尔艾尼克斯', category: 'Publisher', val: 40 },
        { id: 'CreativeBusinessUnit1', name: 'Creative Business Unit I', name_zh: '第一开发部', category: 'Studio', val: 30 },
        { id: 'CreativeBusinessUnit3', name: 'Creative Business Unit III', name_zh: '第三开发部', category: 'Studio', val: 30 },

        { id: 'Capcom', name: 'Capcom', name_zh: '卡普空', category: 'Publisher', val: 40 },
        { id: 'Sega', name: 'Sega', name_zh: '世嘉', category: 'Publisher', val: 40 },
        { id: 'RGG', name: 'RGG Studio', name_zh: '如龙工作室', category: 'Studio', val: 30 },
        { id: 'Atlus', name: 'Atlus', name_zh: 'Atlus', category: 'Studio', val: 35 },

        { id: 'BandaiNamco', name: 'Bandai Namco', name_zh: '万代南梦宫', category: 'Publisher', val: 40 },
        { id: 'FromSoftware', name: 'FromSoftware', name_zh: 'FromSoftware', category: 'Studio', val: 38 },

        { id: 'Konami', name: 'Konami', name_zh: '科乐美', category: 'Publisher', val: 35 },
        { id: 'CDPR', name: 'CD Projekt RED', name_zh: 'CD Projekt RED', category: 'Studio', val: 35 },

        { id: 'Hoyoverse', name: 'HoYoverse', name_zh: '米哈游', category: 'Studio', val: 38 },
        { id: 'BlackMythDev', name: 'Game Science', name_zh: '游戏科学', category: 'Studio', val: 30 },

        // --- GAMES ---
        // Microsoft Games
        { id: 'Minecraft', name: 'Minecraft', name_zh: '我的世界', category: 'Game', val: 30 },
        { id: 'HaloInfinite', name: 'Halo Infinite', name_zh: '光环：无限', category: 'Game', val: 20 },
        { id: 'ForzaHorizon5', name: 'Forza Horizon 5', name_zh: '极限竞速：地平线5', category: 'Game', val: 20 },
        { id: 'Starfield', name: 'Starfield', name_zh: '星空', category: 'Game', val: 25 },
        { id: 'Skyrim', name: 'The Elder Scrolls V: Skyrim', name_zh: '上古卷轴V：天际', category: 'Game', val: 25 },
        { id: 'Fallout4', name: 'Fallout 4', name_zh: '辐射4', category: 'Game', val: 20 },
        { id: 'CoDMW3', name: 'Call of Duty: MW3', name_zh: '使命召唤：现代战争3', category: 'Game', val: 25 },
        { id: 'CoDWarzone', name: 'Call of Duty: Warzone', name_zh: '使命召唤：战区', category: 'Game', val: 25 },
        { id: 'WoW', name: 'World of Warcraft', name_zh: '魔兽世界', category: 'Game', val: 25 },
        { id: 'Diablo4', name: 'Diablo IV', name_zh: '暗黑破坏神IV', category: 'Game', val: 25 },
        { id: 'Overwatch2', name: 'Overwatch 2', name_zh: '守望先锋2', category: 'Game', val: 20 },
        { id: 'CandyCrush', name: 'Candy Crush Saga', name_zh: '糖果传奇', category: 'Game', val: 20 },

        // Sony Games
        { id: 'TLOU1', name: 'The Last of Us Part I', name_zh: '最后生还者', category: 'Game', val: 25 },
        { id: 'TLOU2', name: 'The Last of Us Part II', name_zh: '最后生还者2', category: 'Game', val: 25 },
        { id: 'Uncharted4', name: 'Uncharted 4', name_zh: '神秘海域4', category: 'Game', val: 25 },
        { id: 'SpiderMan2', name: 'Marvel\'s Spider-Man 2', name_zh: '漫威蜘蛛侠2', category: 'Game', val: 25 },
        { id: 'GOWR', name: 'God of War Ragnarök', name_zh: '战神：诸神黄昏', category: 'Game', val: 25 },
        { id: 'HorizonFW', name: 'Horizon Forbidden West', name_zh: '地平线：西之绝境', category: 'Game', val: 25 },
        { id: 'GT7', name: 'Gran Turismo 7', name_zh: '跑车浪漫旅7', category: 'Game', val: 20 },
        { id: 'GoT', name: 'Ghost of Tsushima', name_zh: '对马岛之魂', category: 'Game', val: 25 },
        { id: 'Destiny2', name: 'Destiny 2', name_zh: '命运2', category: 'Game', val: 25 },

        // Nintendo Games
        { id: 'MarioOdyssey', name: 'Super Mario Odyssey', name_zh: '超级马力欧：奥德赛', category: 'Game', val: 25 },
        { id: 'ZeldaBotW', name: 'Zelda: Breath of the Wild', name_zh: '塞尔达：旷野之息', category: 'Game', val: 28 },
        { id: 'ZeldaTotK', name: 'Zelda: Tears of the Kingdom', name_zh: '塞尔达：王国之泪', category: 'Game', val: 30 },
        { id: 'MarioKart8', name: 'Mario Kart 8 Deluxe', name_zh: '马力欧卡丁车8', category: 'Game', val: 25 },
        { id: 'ACNH', name: 'Animal Crossing: NH', name_zh: '集合啦！动物森友会', category: 'Game', val: 25 },
        { id: 'SmashUltimate', name: 'Super Smash Bros. Ultimate', name_zh: '任天堂明星大乱斗', category: 'Game', val: 25 },
        { id: 'PokemonSV', name: 'Pokémon Scarlet/Violet', name_zh: '宝可梦 朱/紫', category: 'Game', val: 25 },
        { id: 'Xenoblade3', name: 'Xenoblade Chronicles 3', name_zh: '异度神剑3', category: 'Game', val: 20 },

        // Tencent/Riot/Epic Games
        { id: 'LoL', name: 'League of Legends', name_zh: '英雄联盟', category: 'Game', val: 30 },
        { id: 'Valorant', name: 'Valorant', name_zh: '无畏契约', category: 'Game', val: 25 },
        { id: 'ClashRoyale', name: 'Clash Royale', name_zh: '皇室战争', category: 'Game', val: 20 },
        { id: 'CoDMobile', name: 'Call of Duty: Mobile', name_zh: '使命召唤手游', category: 'Game', val: 20 },
        { id: 'PUBGMobile', name: 'PUBG Mobile', name_zh: '和平精英 (PUBG)', category: 'Game', val: 25 },
        { id: 'Fortnite', name: 'Fortnite', name_zh: '堡垒之夜', category: 'Game', val: 30 },
        { id: 'HonorOfKings', name: 'Honor of Kings', name_zh: '王者荣耀', category: 'Game', val: 25 },
        { id: 'PoE', name: 'Path of Exile', name_zh: '流放之路', category: 'Game', val: 20 },

        // Steam / Valve
        { id: 'CS2', name: 'Counter-Strike 2', name_zh: '反恐精英2', category: 'Game', val: 30 },
        { id: 'Dota2', name: 'Dota 2', name_zh: 'Dota 2', category: 'Game', val: 25 },
        { id: 'HLAlyx', name: 'Half-Life: Alyx', name_zh: '半衰期：爱莉克斯', category: 'Game', val: 25 },

        // EA Games
        { id: 'Apex', name: 'Apex Legends', name_zh: 'Apex 英雄', category: 'Game', val: 25 },
        { id: 'Fifa', name: 'EA Sports FC 24', name_zh: 'EA Sports FC 24', category: 'Game', val: 25 },
        { id: 'MassEffectLE', name: 'Mass Effect Legendary', name_zh: '质量效应传奇版', category: 'Game', val: 25 },
        { id: 'FallenOrder', name: 'Star Wars Jedi: Survivor', name_zh: '星球大战绝地：幸存者', category: 'Game', val: 25 },
        { id: 'Sims4', name: 'The Sims 4', name_zh: '模拟人生4', category: 'Game', val: 25 },

        // Ubisoft Games
        { id: 'ACMirage', name: 'Assassin\'s Creed Mirage', name_zh: '刺客信条：幻景', category: 'Game', val: 25 },
        { id: 'R6Siege', name: 'Rainbow Six Siege', name_zh: '彩虹六号：围攻', category: 'Game', val: 25 },
        { id: 'FarCry6', name: 'Far Cry 6', name_zh: '孤岛惊魂6', category: 'Game', val: 25 },
        { id: 'Division2', name: 'The Division 2', name_zh: '全境封锁2', category: 'Game', val: 20 },

        // Take-Two Games
        { id: 'GTAV', name: 'Grand Theft Auto V', name_zh: 'GTA 5', category: 'Game', val: 40 },
        { id: 'RDR2', name: 'Red Dead Redemption 2', name_zh: '荒野大镖客2', category: 'Game', val: 30 },
        { id: 'NBA2K', name: 'NBA 2K24', name_zh: 'NBA 2K24', category: 'Game', val: 25 },
        { id: 'Civ6', name: 'Civilization VI', name_zh: '文明6', category: 'Game', val: 25 },

        // Others
        { id: 'FF14', name: 'Final Fantasy XIV', name_zh: '最终幻想14', category: 'Game', val: 30 },
        { id: 'FF16', name: 'Final Fantasy XVI', name_zh: '最终幻想16', category: 'Game', val: 25 },
        { id: 'RE4Remake', name: 'Resident Evil 4 Remake', name_zh: '生化危机4 重制版', category: 'Game', val: 25 },
        { id: 'SF6', name: 'Street Fighter 6', name_zh: '街头霸王6', category: 'Game', val: 25 },
        { id: 'MonsterHunterWorld', name: 'Monster Hunter: World', name_zh: '怪物猎人：世界', category: 'Game', val: 25 },
        { id: 'SonicFrontiers', name: 'Sonic Frontiers', name_zh: '索尼克：未知边境', category: 'Game', val: 20 },
        { id: 'Yakuza8', name: 'Like a Dragon: Infinite Wealth', name_zh: '如龙8', category: 'Game', val: 25 },
        { id: 'Persona5', name: 'Persona 5 Royal', name_zh: '女神异闻录5', category: 'Game', val: 25 },
        { id: 'EldenRing', name: 'Elden Ring', name_zh: '艾尔登法环', category: 'Game', val: 35 },
        { id: 'DarkSouls3', name: 'Dark Souls III', name_zh: '黑暗之魂3', category: 'Game', val: 25 },
        { id: 'Tekken8', name: 'Tekken 8', name_zh: '铁拳8', category: 'Game', val: 20 },
        { id: 'MGSDelta', name: 'MGS Delta: Snake Eater', name_zh: '合金装备 Delta', category: 'Game', val: 20 },
        { id: 'SilentHill2', name: 'Silent Hill 2 Remake', name_zh: '寂静岭2 重制版', category: 'Game', val: 20 },
        { id: 'Cyberpunk', name: 'Cyberpunk 2077', name_zh: '赛博朋克2077', category: 'Game', val: 30 },
        { id: 'Witcher3', name: 'The Witcher 3', name_zh: '巫师3', category: 'Game', val: 30 },
        { id: 'Genshin', name: 'Genshin Impact', name_zh: '原神', category: 'Game', val: 30 },
        { id: 'HSR', name: 'Honkai: Star Rail', name_zh: '崩坏：星穹铁道', category: 'Game', val: 25 },
        { id: 'BlackMyth', name: 'Black Myth: Wukong', name_zh: '黑神话：悟空', category: 'Game', val: 25 },

    ],
    links: [
        // --- RELATIONSHIPS (Owner/Acquired/Publisher/Developer...) ---
        // Microsoft
        { source: 'Microsoft', target: 'Xbox', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Microsoft', target: 'ActivisionBlizzard', relation: 'Acquired', relation_zh: '收购' },
        { source: 'Microsoft', target: 'Bethesda', relation: 'Acquired', relation_zh: '收购' },
        { source: 'Microsoft', target: 'Mojang', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Microsoft', target: 'Obsidian', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Microsoft', target: 'Playground', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Microsoft', target: 'Turn10', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Microsoft', target: '343', relation: 'Owner', relation_zh: '拥有' },

        { source: 'ActivisionBlizzard', target: 'Blizzard', relation: 'Owner', relation_zh: '拥有' },
        { source: 'ActivisionBlizzard', target: 'InfinityWard', relation: 'Owner', relation_zh: '拥有' },
        { source: 'ActivisionBlizzard', target: 'Treyarch', relation: 'Owner', relation_zh: '拥有' },
        { source: 'ActivisionBlizzard', target: 'King', relation: 'Owner', relation_zh: '拥有' },

        { source: 'Mojang', target: 'Minecraft', relation: 'Developer', relation_zh: '开发' },
        { source: '343', target: 'HaloInfinite', relation: 'Developer', relation_zh: '开发' },
        { source: 'Playground', target: 'ForzaHorizon5', relation: 'Developer', relation_zh: '开发' },
        { source: 'Bethesda', target: 'Starfield', relation: 'Publisher', relation_zh: '发行' },
        { source: 'Bethesda', target: 'Skyrim', relation: 'Developer', relation_zh: '开发' },
        { source: 'Bethesda', target: 'Fallout4', relation: 'Developer', relation_zh: '开发' },
        { source: 'InfinityWard', target: 'CoDMW3', relation: 'Developer', relation_zh: '开发' },
        { source: 'ActivisionBlizzard', target: 'CoDWarzone', relation: 'Publisher', relation_zh: '发行' },
        { source: 'Blizzard', target: 'WoW', relation: 'Developer', relation_zh: '开发' },
        { source: 'Blizzard', target: 'Diablo4', relation: 'Developer', relation_zh: '开发' },
        { source: 'Blizzard', target: 'Overwatch2', relation: 'Developer', relation_zh: '开发' },
        { source: 'King', target: 'CandyCrush', relation: 'Developer', relation_zh: '开发' },

        // Sony
        { source: 'SonyGroup', target: 'SIE', relation: 'Owner', relation_zh: '拥有' },
        { source: 'SonyGroup', target: 'PlayStation', relation: 'Owner', relation_zh: '拥有' },
        { source: 'SIE', target: 'NaughtyDog', relation: 'Owner', relation_zh: '拥有' },
        { source: 'SIE', target: 'Insomniac', relation: 'Owner', relation_zh: '拥有' },
        { source: 'SIE', target: 'SantaMonica', relation: 'Owner', relation_zh: '拥有' },
        { source: 'SIE', target: 'Guerrilla', relation: 'Owner', relation_zh: '拥有' },
        { source: 'SIE', target: 'SuckerPunch', relation: 'Owner', relation_zh: '拥有' },
        { source: 'SIE', target: 'Polyphony', relation: 'Owner', relation_zh: '拥有' },
        { source: 'SIE', target: 'Bungie', relation: 'Acquired', relation_zh: '收购' },

        { source: 'NaughtyDog', target: 'TLOU1', relation: 'Developer', relation_zh: '开发' },
        { source: 'NaughtyDog', target: 'TLOU2', relation: 'Developer', relation_zh: '开发' },
        { source: 'NaughtyDog', target: 'Uncharted4', relation: 'Developer', relation_zh: '开发' },
        { source: 'Insomniac', target: 'SpiderMan2', relation: 'Developer', relation_zh: '开发' },
        { source: 'SantaMonica', target: 'GOWR', relation: 'Developer', relation_zh: '开发' },
        { source: 'Guerrilla', target: 'HorizonFW', relation: 'Developer', relation_zh: '开发' },
        { source: 'Polyphony', target: 'GT7', relation: 'Developer', relation_zh: '开发' },
        { source: 'SuckerPunch', target: 'GoT', relation: 'Developer', relation_zh: '开发' },
        { source: 'Bungie', target: 'Destiny2', relation: 'Developer', relation_zh: '开发' },

        // Nintendo
        { source: 'Nintendo', target: 'Switch', relation: 'Creator', relation_zh: '创造者' },
        { source: 'Nintendo', target: 'NintendoEPD', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Nintendo', target: 'MonolithSoft', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Nintendo', target: 'IntelligentSys', relation: 'Partner', relation_zh: '合作伙伴' },
        { source: 'Nintendo', target: 'HAL', relation: 'Partner', relation_zh: '合作伙伴' },
        { source: 'Nintendo', target: 'PokemonCo', relation: 'Owner', relation_zh: '联合拥有' },
        { source: 'Nintendo', target: 'GameFreak', relation: 'Partner', relation_zh: '合作伙伴' },

        { source: 'NintendoEPD', target: 'MarioOdyssey', relation: 'Developer', relation_zh: '开发' },
        { source: 'NintendoEPD', target: 'ZeldaBotW', relation: 'Developer', relation_zh: '开发' },
        { source: 'NintendoEPD', target: 'ZeldaTotK', relation: 'Developer', relation_zh: '开发' },
        { source: 'NintendoEPD', target: 'MarioKart8', relation: 'Developer', relation_zh: '开发' },
        { source: 'NintendoEPD', target: 'ACNH', relation: 'Developer', relation_zh: '开发' },
        { source: 'GameFreak', target: 'PokemonSV', relation: 'Developer', relation_zh: '开发' },
        { source: 'MonolithSoft', target: 'Xenoblade3', relation: 'Developer', relation_zh: '开发' },
        { source: 'Nintendo', target: 'SmashUltimate', relation: 'Publisher', relation_zh: '发行' },

        // Tencent
        { source: 'Tencent', target: 'Riot', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Tencent', target: 'Supercell', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Tencent', target: 'EpicGames', relation: 'Investor (40%)', relation_zh: '投资 (40%)' },
        { source: 'Tencent', target: 'TiMi', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Tencent', target: 'Lightspeed', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Tencent', target: 'GrindingGear', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Tencent', target: 'Ubisoft', relation: 'Investor', relation_zh: '投资' },
        { source: 'Tencent', target: 'FromSoftware', relation: 'Investor', relation_zh: '投资' },

        { source: 'Riot', target: 'LoL', relation: 'Developer', relation_zh: '开发' },
        { source: 'Riot', target: 'Valorant', relation: 'Developer', relation_zh: '开发' },
        { source: 'Supercell', target: 'ClashRoyale', relation: 'Developer', relation_zh: '开发' },
        { source: 'EpicGames', target: 'Fortnite', relation: 'Developer', relation_zh: '开发' },
        { source: 'EpicGames', target: 'EpicStore', relation: 'Owner', relation_zh: '拥有' },
        { source: 'TiMi', target: 'HonorOfKings', relation: 'Developer', relation_zh: '开发' },
        { source: 'TiMi', target: 'CoDMobile', relation: 'Developer', relation_zh: '开发' },
        { source: 'Lightspeed', target: 'PUBGMobile', relation: 'Developer', relation_zh: '开发' },
        { source: 'GrindingGear', target: 'PoE', relation: 'Developer', relation_zh: '开发' },

        // EA
        { source: 'EA', target: 'Respawn', relation: 'Owner', relation_zh: '拥有' },
        { source: 'EA', target: 'BioWare', relation: 'Owner', relation_zh: '拥有' },
        { source: 'EA', target: 'DICE', relation: 'Owner', relation_zh: '拥有' },
        { source: 'EA', target: 'Maxis', relation: 'Owner', relation_zh: '拥有' },

        { source: 'Respawn', target: 'Apex', relation: 'Developer', relation_zh: '开发' },
        { source: 'Respawn', target: 'FallenOrder', relation: 'Developer', relation_zh: '开发' },
        { source: 'BioWare', target: 'MassEffectLE', relation: 'Developer', relation_zh: '开发' },
        { source: 'DICE', target: 'Fifa', relation: 'Developer', relation_zh: '开发' },
        { source: 'Maxis', target: 'Sims4', relation: 'Developer', relation_zh: '开发' },

        // Ubisoft
        { source: 'Ubisoft', target: 'UbisoftMontreal', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Ubisoft', target: 'UbisoftQuebec', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Ubisoft', target: 'Massive', relation: 'Owner', relation_zh: '拥有' },

        { source: 'UbisoftMontreal', target: 'R6Siege', relation: 'Developer', relation_zh: '开发' },
        { source: 'UbisoftMontreal', target: 'FarCry6', relation: 'Developer', relation_zh: '开发' },
        { source: 'UbisoftQuebec', target: 'ACMirage', relation: 'Co-Dev', relation_zh: '联合开发' },
        { source: 'Massive', target: 'Division2', relation: 'Developer', relation_zh: '开发' },

        // Take-Two
        { source: 'TakeTwo', target: 'Rockstar', relation: 'Owner', relation_zh: '拥有' },
        { source: 'TakeTwo', target: '2K', relation: 'Owner', relation_zh: '拥有' },
        { source: 'TakeTwo', target: 'Zynga', relation: 'Owner', relation_zh: '拥有' },
        { source: '2K', target: 'Firaxis', relation: 'Owner', relation_zh: '拥有' },
        { source: '2K', target: 'Hangar13', relation: 'Owner', relation_zh: '拥有' },

        { source: 'Rockstar', target: 'GTAV', relation: 'Developer', relation_zh: '开发' },
        { source: 'Rockstar', target: 'RDR2', relation: 'Developer', relation_zh: '开发' },
        { source: '2K', target: 'NBA2K', relation: 'Publisher', relation_zh: '发行' },
        { source: 'Firaxis', target: 'Civ6', relation: 'Developer', relation_zh: '开发' },

        // Square Enix
        { source: 'SquareEnix', target: 'CreativeBusinessUnit1', relation: 'Internal', relation_zh: '内部开发部' },
        { source: 'SquareEnix', target: 'CreativeBusinessUnit3', relation: 'Internal', relation_zh: '内部开发部' },
        { source: 'CreativeBusinessUnit1', target: 'FF16', relation: 'Developer', relation_zh: '开发' },
        { source: 'CreativeBusinessUnit3', target: 'FF14', relation: 'Developer', relation_zh: '开发' },

        // Capcom
        { source: 'Capcom', target: 'RE4Remake', relation: 'Developer', relation_zh: '开发' },
        { source: 'Capcom', target: 'SF6', relation: 'Developer', relation_zh: '开发' },
        { source: 'Capcom', target: 'MonsterHunterWorld', relation: 'Developer', relation_zh: '开发' },

        // Sega
        { source: 'Sega', target: 'RGG', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Sega', target: 'Atlus', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Sega', target: 'SonicFrontiers', relation: 'Publisher', relation_zh: '发行' },
        { source: 'RGG', target: 'Yakuza8', relation: 'Developer', relation_zh: '开发' },
        { source: 'Atlus', target: 'Persona5', relation: 'Developer', relation_zh: '开发' },

        // Bandai Namco
        { source: 'BandaiNamco', target: 'Tekken8', relation: 'Developer', relation_zh: '开发' },
        { source: 'BandaiNamco', target: 'FromSoftware', relation: 'Publisher (Intl)', relation_zh: '海外发行' },
        { source: 'FromSoftware', target: 'EldenRing', relation: 'Developer', relation_zh: '开发' },
        { source: 'FromSoftware', target: 'DarkSouls3', relation: 'Developer', relation_zh: '开发' },

        // Others
        { source: 'Konami', target: 'MGSDelta', relation: 'Publisher', relation_zh: '发行' },
        { source: 'Konami', target: 'SilentHill2', relation: 'Publisher', relation_zh: '发行' },
        { source: 'CDPR', target: 'Cyberpunk', relation: 'Developer', relation_zh: '开发' },
        { source: 'CDPR', target: 'Witcher3', relation: 'Developer', relation_zh: '开发' },
        { source: 'Hoyoverse', target: 'Genshin', relation: 'Developer', relation_zh: '开发' },
        { source: 'Hoyoverse', target: 'HSR', relation: 'Developer', relation_zh: '开发' },
        { source: 'BlackMythDev', target: 'BlackMyth', relation: 'Developer', relation_zh: '开发' },

        // Partnerships / Cross-Links
        { source: 'SonyGroup', target: 'EpicGames', relation: 'Investor', relation_zh: '投资' },
        { source: 'NetEase', target: 'Bungie', relation: 'Investor (Historical)', relation_zh: '投资 (历史)' },
        { source: 'Valve', target: 'Steam', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Valve', target: 'CS2', relation: 'Developer', relation_zh: '开发' },
        { source: 'Valve', target: 'Dota2', relation: 'Developer', relation_zh: '开发' },
        { source: 'Valve', target: 'HLAlyx', relation: 'Developer', relation_zh: '开发' },
        { source: 'Microsoft', target: 'OpenAI', relation: 'Partner', relation_zh: '合作伙伴' },
    ]
};
