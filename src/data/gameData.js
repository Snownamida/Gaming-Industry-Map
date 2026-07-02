export const gameData = {
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

        { id: 'CyberAgent', name: 'CyberAgent', name_zh: 'CyberAgent', category: 'Conglomerate', val: 30 },
        { id: 'Colopl', name: 'Colopl', name_zh: 'Colopl (コロプラ)', category: 'Publisher', val: 25 },

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
        { id: 'Battlefield2042', name: 'Battlefield 2042', name_zh: '战地2042', category: 'Game', val: 20 },
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

        // --- GALGAME / VISUAL NOVEL / JRPG EXPANSIONS ---
        // Type-Moon
        { id: 'TypeMoon', name: 'Type-Moon', name_zh: '型月 (Type-Moon)', category: 'Studio', val: 40 },
        { id: 'FGO', name: 'Fate/Grand Order', name_zh: 'FGO', category: 'Game', val: 35 },
        { id: 'FateSN', name: 'Fate/stay night', name_zh: 'Fate/stay night', category: 'Game', val: 30 },
        { id: 'Tsukihime', name: 'Tsukihime', name_zh: '月姬', category: 'Game', val: 30 },
        { id: 'Mahoyo', name: 'Witch on the Holy Night', name_zh: '魔法使之夜', category: 'Game', val: 25 },

        // Key / Visual Arts (Tencent Parent)
        { id: 'VisualArts', name: 'Visual Arts', name_zh: 'Visual Arts', category: 'Publisher', val: 30 },
        { id: 'Key', name: 'Key', name_zh: 'Key社', category: 'Studio', val: 35 },
        { id: 'Clannad', name: 'Clannad', name_zh: 'Clannad', category: 'Game', val: 30 },
        { id: 'Air', name: 'Air', name_zh: 'Air', category: 'Game', val: 25 },
        { id: 'Kanon', name: 'Kanon', name_zh: 'Kanon', category: 'Game', val: 25 },
        { id: 'SummerPockets', name: 'Summer Pockets', name_zh: '夏日口袋', category: 'Game', val: 25 },
        { id: 'AngelBeats', name: 'Angel Beats!', name_zh: 'Angel Beats!', category: 'Game', val: 25 },

        // Nitro+ / MAGES. / 5pb.
        { id: 'NitroPlus', name: 'Nitroplus', name_zh: 'Nitro+', category: 'Studio', val: 30 },
        { id: 'MAGES', name: 'MAGES.', name_zh: 'MAGES.', category: 'Publisher', val: 30 },
        { id: 'SteinsGate', name: 'Steins;Gate', name_zh: '命运石之门', category: 'Game', val: 30 },
        { id: 'ChaosHead', name: 'Chaos;Head', name_zh: '混沌头 (Chaos;Head)', category: 'Game', val: 25 },
        { id: 'Saya', name: 'Saya no Uta', name_zh: '沙耶之歌', category: 'Game', val: 25 },

        // Falcom
        { id: 'Falcom', name: 'Nihon Falcom', name_zh: '日本Falcom (法老控)', category: 'Studio', val: 35 },
        { id: 'TrailsSeries', name: 'Trails Series', name_zh: '轨迹系列', category: 'Game', val: 30 },
        { id: 'YsSeries', name: 'Ys Series', name_zh: '伊苏系列', category: 'Game', val: 30 },

        // Koei Tecmo / Gust
        { id: 'KoeiTecmo', name: 'Koei Tecmo', name_zh: '光荣特库摩', category: 'Publisher', val: 40 },
        { id: 'Gust', name: 'Gust', name_zh: 'Gust', category: 'Studio', val: 30 },
        { id: 'TeamNinja', name: 'Team Ninja', name_zh: 'Team Ninja', category: 'Studio', val: 35 },
        { id: 'AtelierRyza', name: 'Atelier Ryza', name_zh: '莱莎的炼金工房', category: 'Game', val: 25 },
        { id: 'Nioh2', name: 'Nioh 2', name_zh: '仁王2', category: 'Game', val: 25 },
        { id: 'NinjaGaiden', name: 'Ninja Gaiden', name_zh: '忍者龙剑传', category: 'Game', val: 25 },
        { id: 'DoA', name: 'Dead or Alive', name_zh: '死或生', category: 'Game', val: 25 },
        { id: 'ThreeKingdoms', name: 'Romance of the Three Kingdoms', name_zh: '三国志', category: 'Game', val: 25 },

        // Spike Chunsoft
        { id: 'SpikeChunsoft', name: 'Spike Chunsoft', name_zh: 'Spike Chunsoft', category: 'Publisher', val: 35 },
        { id: 'Danganronpa', name: 'Danganronpa', name_zh: '弹丸论破', category: 'Game', val: 30 },
        { id: 'AITheSomniumFiles', name: 'AI: The Somnium Files', name_zh: '梦境档案', category: 'Game', val: 25 },

        // Cygames
        { id: 'Cygames', name: 'Cygames', name_zh: 'Cygames', category: 'Publisher', val: 40 },
        { id: 'GBF', name: 'Granblue Fantasy', name_zh: '碧蓝幻想', category: 'Game', val: 30 },
        { id: 'UmaMusume', name: 'Uma Musume', name_zh: '赛马娘', category: 'Game', val: 35 },
        { id: 'Shadowverse', name: 'Shadowverse', name_zh: '影之诗', category: 'Game', val: 25 },

        // Other Iconic JRPG/VN
        { id: 'AliceSoft', name: 'AliceSoft', name_zh: 'AliceSoft', category: 'Studio', val: 30 },
        { id: 'Rance', name: 'Rance Series', name_zh: '兰斯系列', category: 'Game', val: 25 },
        { id: 'Aquaplus', name: 'Aquaplus', name_zh: 'Aquaplus', category: 'Publisher', val: 30 },
        { id: 'Utawarerumono', name: 'Utawarerumono', name_zh: '传颂之物', category: 'Game', val: 25 },
        { id: 'Frontwing', name: 'Frontwing', name_zh: 'Frontwing', category: 'Studio', val: 25 },
        { id: 'Gritaia', name: 'Grisaia Series', name_zh: '灰色的果实', category: 'Game', val: 25 },
        { id: 'NekoparaDev', name: 'NEKO WORKs', name_zh: 'NEKO WORKs', category: 'Studio', val: 25 },
        { id: 'Nekopara', name: 'Nekopara', name_zh: '巧克力与香子兰', category: 'Game', val: 25 },

        // --- MORE FAMOUS GAMES (Indie / Major) ---
        { id: 'TeamCherry', name: 'Team Cherry', name_zh: 'Team Cherry', category: 'Studio', val: 30 },
        { id: 'HollowKnight', name: 'Hollow Knight', name_zh: '空洞骑士', category: 'Game', val: 30 },
        { id: 'Silksong', name: 'Hollow Knight: Silksong', name_zh: '丝之歌', category: 'Game', val: 35 }, // Released 2025-09-04

        { id: 'Supergiant', name: 'Supergiant Games', name_zh: 'Supergiant Games', category: 'Studio', val: 30 },
        { id: 'Hades', name: 'Hades', name_zh: '黑帝斯 (Hades)', category: 'Game', val: 30 },

        { id: 'ReLogic', name: 'Re-Logic', name_zh: 'Re-Logic', category: 'Studio', val: 30 },
        { id: 'Terraria', name: 'Terraria', name_zh: '泰拉瑞亚', category: 'Game', val: 30 },

        { id: 'ConcernedApe', name: 'ConcernedApe', name_zh: 'ConcernedApe', category: 'Studio', val: 30 },
        { id: 'StardewValley', name: 'Stardew Valley', name_zh: '星露谷物语', category: 'Game', val: 30 },

        { id: 'Innersloth', name: 'Innersloth', name_zh: 'Innersloth', category: 'Studio', val: 30 },
        { id: 'AmongUs', name: 'Among Us', name_zh: 'Among Us', category: 'Game', val: 30 },

        { id: 'PocketPair', name: 'Pocket Pair', name_zh: 'Pocket Pair', category: 'Studio', val: 30 },
        { id: 'Palworld', name: 'Palworld', name_zh: '幻兽帕鲁', category: 'Game', val: 35 },

        { id: 'Larian', name: 'Larian Studios', name_zh: '拉瑞安工作室', category: 'Studio', val: 35 },
        { id: 'BG3', name: 'Baldur\'s Gate 3', name_zh: '博德之门3', category: 'Game', val: 40 },
        { id: 'Divinity2', name: 'Divinity: OS 2', name_zh: '神界：原罪2', category: 'Game', val: 30 },

        { id: 'Lucasfilm', name: 'Lucasfilm Games', name_zh: '卢卡斯影业游戏', category: 'Publisher', val: 35 },
        // Linked to Disney usually, but keeping simple



        // --- KOREAN MAJORS (ajout 2026-07) ---
        { id: 'Nexon', name: 'Nexon', name_zh: 'Nexon (纳克森)', category: 'Publisher', val: 35 },
        { id: 'Krafton', name: 'Krafton', name_zh: 'Krafton (魁匠团)', category: 'Publisher', val: 35 },
        { id: 'NCSoft', name: 'NCSoft', name_zh: 'NCSoft (恩希软件)', category: 'Publisher', val: 30 },
        { id: 'Neople', name: 'Neople', name_zh: 'Neople', category: 'Studio', val: 20 },
        { id: 'Embark', name: 'Embark Studios', name_zh: 'Embark 工作室', category: 'Studio', val: 25 },
        { id: 'PUBGStudios', name: 'PUBG Studios', name_zh: 'PUBG 工作室', category: 'Studio', val: 25 },
        { id: 'UnknownWorlds', name: 'Unknown Worlds', name_zh: 'Unknown Worlds', category: 'Studio', val: 20 },
        { id: 'ArenaNet', name: 'ArenaNet', name_zh: 'ArenaNet', category: 'Studio', val: 20 },
        { id: 'MapleStory', name: 'MapleStory', name_zh: '冒险岛', category: 'Game', val: 20 },
        { id: 'DnF', name: 'Dungeon & Fighter', name_zh: '地下城与勇士', category: 'Game', val: 25 },
        { id: 'FirstDescendant', name: 'The First Descendant', name_zh: '第一后裔', category: 'Game', val: 15 },
        { id: 'ARCRaiders', name: 'ARC Raiders', name_zh: 'ARC Raiders', category: 'Game', val: 25 },
        { id: 'TheFinals', name: 'THE FINALS', name_zh: 'THE FINALS', category: 'Game', val: 20 },
        { id: 'PUBG', name: 'PUBG: Battlegrounds', name_zh: '绝地求生', category: 'Game', val: 30 },
        { id: 'inZOI', name: 'inZOI', name_zh: 'inZOI (云族裔)', category: 'Game', val: 20 },
        { id: 'Subnautica', name: 'Subnautica', name_zh: '深海迷航', category: 'Game', val: 20 },
        { id: 'Lineage', name: 'Lineage', name_zh: '天堂', category: 'Game', val: 20 },
        { id: 'ThroneLiberty', name: 'Throne and Liberty', name_zh: '王座与自由', category: 'Game', val: 15 },
        { id: 'GW2', name: 'Guild Wars 2', name_zh: '激战2', category: 'Game', val: 20 },

        // --- 2025-26 : Ubisoft Vantage / consortium EA ---
        { id: 'VantageStudios', name: 'Vantage Studios', name_zh: 'Vantage 工作室', category: 'Studio', val: 30 },
        { id: 'PIF', name: 'PIF-led consortium', name_zh: '沙特PIF财团', category: 'Conglomerate', val: 35 },
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
        // EA Sports FC is developed by EA Vancouver / EA Romania (published by EA Sports),
        // NOT by DICE — DICE develops Battlefield.
        { source: 'EA', target: 'Fifa', relation: 'Publisher', relation_zh: '发行' },
        { source: 'DICE', target: 'Battlefield2042', relation: 'Developer', relation_zh: '开发' },
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
        // Galgame/JRPG Links
        // Type-Moon
        { source: 'TypeMoon', target: 'FateSN', relation: 'Creator', relation_zh: '创造' },
        { source: 'TypeMoon', target: 'Tsukihime', relation: 'Creator', relation_zh: '创造' },
        { source: 'TypeMoon', target: 'Mahoyo', relation: 'Creator', relation_zh: '创造' },
        { source: 'TypeMoon', target: 'FGO', relation: 'Creator', relation_zh: '创造' },
        { source: 'SonyGroup', target: 'FGO', relation: 'Publisher (Aniplex)', relation_zh: '发行 (Aniplex)' },

        // Key / Visual Arts (Tencent Owner)
        { source: 'Tencent', target: 'VisualArts', relation: 'Acquired', relation_zh: '收购' },
        { source: 'VisualArts', target: 'Key', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Key', target: 'Clannad', relation: 'Developer', relation_zh: '开发' },
        { source: 'Key', target: 'Air', relation: 'Developer', relation_zh: '开发' },
        { source: 'Key', target: 'Kanon', relation: 'Developer', relation_zh: '开发' },
        { source: 'Key', target: 'SummerPockets', relation: 'Developer', relation_zh: '开发' },
        { source: 'Key', target: 'AngelBeats', relation: 'Developer', relation_zh: '开发' },

        // Nitro+ / MAGES.
        { source: 'NitroPlus', target: 'Saya', relation: 'Developer', relation_zh: '开发' },
        { source: 'NitroPlus', target: 'SteinsGate', relation: 'Co-Dev', relation_zh: '联合开发' },
        { source: 'MAGES', target: 'SteinsGate', relation: 'Developer', relation_zh: '开发' },
        { source: 'MAGES', target: 'ChaosHead', relation: 'Developer', relation_zh: '开发' },
        { source: 'Colopl', target: 'MAGES', relation: 'Owner', relation_zh: '拥有' }, // Colopl acquired MAGES in 2020

        // Falcom
        { source: 'Falcom', target: 'TrailsSeries', relation: 'Developer', relation_zh: '开发' },
        { source: 'Falcom', target: 'YsSeries', relation: 'Developer', relation_zh: '开发' },

        // Koei Tecmo
        { source: 'KoeiTecmo', target: 'Gust', relation: 'Owner', relation_zh: '拥有' },
        { source: 'KoeiTecmo', target: 'TeamNinja', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Gust', target: 'AtelierRyza', relation: 'Developer', relation_zh: '开发' },
        { source: 'TeamNinja', target: 'Nioh2', relation: 'Developer', relation_zh: '开发' },
        { source: 'TeamNinja', target: 'NinjaGaiden', relation: 'Developer', relation_zh: '开发' },
        { source: 'TeamNinja', target: 'DoA', relation: 'Developer', relation_zh: '开发' },
        { source: 'KoeiTecmo', target: 'ThreeKingdoms', relation: 'Developer', relation_zh: '开发' },
        { source: 'KoeiTecmo', target: 'TypeMoon', relation: 'Partner', relation_zh: '合作 (Fate/Remnant)' },

        // Spike Chunsoft
        { source: 'SpikeChunsoft', target: 'Danganronpa', relation: 'Developer', relation_zh: '开发' },
        { source: 'SpikeChunsoft', target: 'AITheSomniumFiles', relation: 'Developer', relation_zh: '开发' },

        // Cygames
        { source: 'Cygames', target: 'GBF', relation: 'Developer', relation_zh: '开发' },
        { source: 'Cygames', target: 'UmaMusume', relation: 'Developer', relation_zh: '开发' },
        { source: 'Cygames', target: 'Shadowverse', relation: 'Developer', relation_zh: '开发' },
        { source: 'CyberAgent', target: 'Cygames', relation: 'Owner', relation_zh: '拥有' },

        { source: 'AliceSoft', target: 'Rance', relation: 'Developer', relation_zh: '开发' },
        { source: 'Aquaplus', target: 'Utawarerumono', relation: 'Developer', relation_zh: '开发' },
        { source: 'Frontwing', target: 'Gritaia', relation: 'Developer', relation_zh: '开发' },
        { source: 'NekoparaDev', target: 'Nekopara', relation: 'Developer', relation_zh: '开发' },

        // --- NEW LINKS ---
        { source: 'TeamCherry', target: 'HollowKnight', relation: 'Developer', relation_zh: '开发' },
        { source: 'TeamCherry', target: 'Silksong', relation: 'Developer', relation_zh: '开发' },
        { source: 'Supergiant', target: 'Hades', relation: 'Developer', relation_zh: '开发' },
        { source: 'ReLogic', target: 'Terraria', relation: 'Developer', relation_zh: '开发' },
        { source: 'ConcernedApe', target: 'StardewValley', relation: 'Developer', relation_zh: '开发' },
        { source: 'Innersloth', target: 'AmongUs', relation: 'Developer', relation_zh: '开发' },
        { source: 'PocketPair', target: 'Palworld', relation: 'Developer', relation_zh: '开发' },
        { source: 'Larian', target: 'BG3', relation: 'Developer', relation_zh: '开发' },
        { source: 'Larian', target: 'Divinity2', relation: 'Developer', relation_zh: '开发' },
        { source: 'Tencent', target: 'Larian', relation: 'Investor (30%)', relation_zh: '投资 (30%)' }, // Tencent owns ~30%
        { source: 'Lucasfilm', target: 'FallenOrder', relation: 'Licensor', relation_zh: '授权' }, // Star Wars connection
        { source: 'Ubisoft', target: 'Lucasfilm', relation: 'Partner (Outlaws)', relation_zh: '合作 (星球大战)' },

        // --- KOREAN MAJORS ---
        { source: 'Nexon', target: 'Neople', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Neople', target: 'DnF', relation: 'Developer', relation_zh: '开发' },
        { source: 'Nexon', target: 'MapleStory', relation: 'Developer', relation_zh: '开发' },
        { source: 'Nexon', target: 'Embark', relation: 'Owner', relation_zh: '拥有' },
        { source: 'Embark', target: 'ARCRaiders', relation: 'Developer', relation_zh: '开发' },
        { source: 'Embark', target: 'TheFinals', relation: 'Developer', relation_zh: '开发' },
        { source: 'Nexon', target: 'FirstDescendant', relation: 'Publisher', relation_zh: '发行' },
        { source: 'Krafton', target: 'PUBGStudios', relation: 'Owner', relation_zh: '拥有' },
        { source: 'PUBGStudios', target: 'PUBG', relation: 'Developer', relation_zh: '开发' },
        { source: 'Krafton', target: 'UnknownWorlds', relation: 'Owner', relation_zh: '拥有' },
        { source: 'UnknownWorlds', target: 'Subnautica', relation: 'Developer', relation_zh: '开发' },
        { source: 'Krafton', target: 'inZOI', relation: 'Publisher', relation_zh: '发行' },
        { source: 'Tencent', target: 'Krafton', relation: 'Investor (~14%)', relation_zh: '投资 (约14%)' },
        { source: 'NCSoft', target: 'Lineage', relation: 'Developer', relation_zh: '开发' },
        { source: 'NCSoft', target: 'ThroneLiberty', relation: 'Developer', relation_zh: '开发' },
        { source: 'NCSoft', target: 'ArenaNet', relation: 'Owner', relation_zh: '拥有' },
        { source: 'ArenaNet', target: 'GW2', relation: 'Developer', relation_zh: '开发' },

        // --- 2025-26 : Vantage Studios (clôturé 21/11/2025) & rachat d'EA (en cours) ---
        { source: 'Ubisoft', target: 'VantageStudios', relation: 'Owner (~74%)', relation_zh: '拥有 (约74%)' },
        { source: 'Tencent', target: 'VantageStudios', relation: 'Investor (26.32%)', relation_zh: '投资 (26.32%)' },
        { source: 'VantageStudios', target: 'ACMirage', relation: 'Franchise home', relation_zh: '旗下IP' },
        { source: 'VantageStudios', target: 'R6Siege', relation: 'Franchise home', relation_zh: '旗下IP' },
        { source: 'VantageStudios', target: 'FarCry6', relation: 'Franchise home', relation_zh: '旗下IP' },
        { source: 'PIF', target: 'EA', relation: 'Acquiring ($55B, pending)', relation_zh: '收购中 (550亿美元, 待交割)' },
    ]
};
