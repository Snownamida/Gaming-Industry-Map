const rawData = {
    nodes: [
        // --- CONGLOMERATES & PLATFORM HOLDERS ---
        { id: 'Tencent', name: 'Tencent', category: 'Conglomerate', val: 50 },
        { id: 'SonyGroup', name: 'Sony Group', category: 'Conglomerate', val: 50 },
        { id: 'Microsoft', name: 'Microsoft', category: 'Conglomerate', val: 50 },
        { id: 'Nintendo', name: 'Nintendo', category: 'Conglomerate', val: 50 },
        { id: 'NetEase', name: 'NetEase', category: 'Conglomerate', val: 35 },
        { id: 'Embracer', name: 'Embracer Group', category: 'Conglomerate', val: 35 },
        { id: 'Valve', name: 'Valve Corporation', category: 'Conglomerate', val: 40 },

        // --- PLATFORMS ---
        { id: 'PlayStation', name: 'PlayStation', category: 'Platform', val: 40 },
        { id: 'Xbox', name: 'Xbox', category: 'Platform', val: 40 },
        { id: 'Switch', name: 'Nintendo Switch', category: 'Platform', val: 40 },
        { id: 'Steam', name: 'Steam', category: 'Platform', val: 40 },
        { id: 'EpicStore', name: 'Epic Games Store', category: 'Platform', val: 30 },
        { id: 'AppStore', name: 'App Store', category: 'Platform', val: 30 },
        { id: 'GooglePlay', name: 'Google Play', category: 'Platform', val: 30 },

        // --- PUBLISHERS & MAJOR SUBSIDIARIES ---
        // Microsoft Cluster
        { id: 'ActivisionBlizzard', name: 'Activision Blizzard', category: 'Publisher', val: 45 },
        { id: 'Bethesda', name: 'Bethesda Softworks', category: 'Publisher', val: 40 },
        { id: 'Mojang', name: 'Mojang Studios', category: 'Studio', val: 30 },
        { id: 'Obsidian', name: 'Obsidian Entertainment', category: 'Studio', val: 25 },
        { id: 'Playground', name: 'Playground Games', category: 'Studio', val: 25 },
        { id: 'Turn10', name: 'Turn 10 Studios', category: 'Studio', val: 25 },
        { id: '343', name: '343 Industries', category: 'Studio', val: 25 },
        { id: 'Blizzard', name: 'Blizzard Entertainment', category: 'Studio', val: 40 },
        { id: 'InfinityWard', name: 'Infinity Ward', category: 'Studio', val: 30 },
        { id: 'Treyarch', name: 'Treyarch', category: 'Studio', val: 30 },
        { id: 'King', name: 'King', category: 'Publisher', val: 30 },

        // Sony Cluster
        { id: 'SIE', name: 'Sony Interactive Entertainment', category: 'Publisher', val: 45 },
        { id: 'NaughtyDog', name: 'Naughty Dog', category: 'Studio', val: 35 },
        { id: 'Insomniac', name: 'Insomniac Games', category: 'Studio', val: 35 },
        { id: 'SantaMonica', name: 'Santa Monica Studio', category: 'Studio', val: 35 },
        { id: 'Guerrilla', name: 'Guerrilla Games', category: 'Studio', val: 30 },
        { id: 'SuckerPunch', name: 'Sucker Punch', category: 'Studio', val: 30 },
        { id: 'Polyphony', name: 'Polyphony Digital', category: 'Studio', val: 30 },
        { id: 'Bungie', name: 'Bungie', category: 'Studio', val: 35 },

        // Nintendo Cluster
        { id: 'NintendoEPD', name: 'Nintendo EPD', category: 'Studio', val: 40 },
        { id: 'HAL', name: 'HAL Laboratory', category: 'Studio', val: 30 },
        { id: 'IntelligentSys', name: 'Intelligent Systems', category: 'Studio', val: 30 },
        { id: 'GameFreak', name: 'Game Freak', category: 'Studio', val: 35 },
        { id: 'PokemonCo', name: 'The Pokémon Company', category: 'Publisher', val: 40 },
        { id: 'MonolithSoft', name: 'Monolith Soft', category: 'Studio', val: 30 },

        // Tencent Cluster
        { id: 'Riot', name: 'Riot Games', category: 'Studio', val: 40 },
        { id: 'Supercell', name: 'Supercell', category: 'Studio', val: 35 },
        { id: 'EpicGames', name: 'Epic Games', category: 'Publisher', val: 40 }, // Tencent owns 40%
        { id: 'TiMi', name: 'TiMi Studio Group', category: 'Studio', val: 35 },
        { id: 'Lightspeed', name: 'Lightspeed & Quantum', category: 'Studio', val: 35 },
        { id: 'GrindingGear', name: 'Grinding Gear Games', category: 'Studio', val: 25 },

        // Large Independent Publishers
        { id: 'EA', name: 'Electronic Arts', category: 'Publisher', val: 45 },
        { id: 'Respawn', name: 'Respawn Entertainment', category: 'Studio', val: 35 },
        { id: 'BioWare', name: 'BioWare', category: 'Studio', val: 30 },
        { id: 'DICE', name: 'DICE', category: 'Studio', val: 30 },
        { id: 'Maxis', name: 'Maxis', category: 'Studio', val: 30 },

        { id: 'Ubisoft', name: 'Ubisoft', category: 'Publisher', val: 45 },
        { id: 'UbisoftMontreal', name: 'Ubisoft Montreal', category: 'Studio', val: 35 },
        { id: 'UbisoftQuebec', name: 'Ubisoft Quebec', category: 'Studio', val: 30 },
        { id: 'Massive', name: 'Massive Entertainment', category: 'Studio', val: 30 },

        { id: 'TakeTwo', name: 'Take-Two Interactive', category: 'Publisher', val: 45 },
        { id: 'Rockstar', name: 'Rockstar Games', category: 'Studio', val: 40 },
        { id: '2K', name: '2K Games', category: 'Publisher', val: 35 },
        { id: 'Firaxis', name: 'Firaxis Games', category: 'Studio', val: 30 },
        { id: 'Hangar13', name: 'Hangar 13', category: 'Studio', val: 25 },
        { id: 'Zynga', name: 'Zynga', category: 'Publisher', val: 35 },

        { id: 'SquareEnix', name: 'Square Enix', category: 'Publisher', val: 40 },
        { id: 'CreativeBusinessUnit1', name: 'Creative Business Unit I', category: 'Studio', val: 30 },
        { id: 'CreativeBusinessUnit3', name: 'Creative Business Unit III', category: 'Studio', val: 30 },

        { id: 'Capcom', name: 'Capcom', category: 'Publisher', val: 40 },
        { id: 'Sega', name: 'Sega', category: 'Publisher', val: 40 },
        { id: 'RGG', name: 'RGG Studio', category: 'Studio', val: 30 },
        { id: 'Atlus', name: 'Atlus', category: 'Studio', val: 35 },

        { id: 'BandaiNamco', name: 'Bandai Namco', category: 'Publisher', val: 40 },
        { id: 'FromSoftware', name: 'FromSoftware', category: 'Studio', val: 38 },

        { id: 'Konami', name: 'Konami', category: 'Publisher', val: 35 },
        { id: 'CDPR', name: 'CD Projekt RED', category: 'Studio', val: 35 },

        { id: 'Hoyoverse', name: 'HoYoverse', category: 'Studio', val: 38 },
        { id: 'BlackMythDev', name: 'Game Science', category: 'Studio', val: 30 },

        // --- GAMES ---
        // Microsoft Games
        { id: 'Minecraft', name: 'Minecraft', category: 'Game', val: 30 },
        { id: 'HaloInfinite', name: 'Halo Infinite', category: 'Game', val: 20 },
        { id: 'ForzaHorizon5', name: 'Forza Horizon 5', category: 'Game', val: 20 },
        { id: 'Starfield', name: 'Starfield', category: 'Game', val: 25 },
        { id: 'Skyrim', name: 'The Elder Scrolls V: Skyrim', category: 'Game', val: 25 },
        { id: 'Fallout4', name: 'Fallout 4', category: 'Game', val: 20 },
        { id: 'CoDMW3', name: 'Call of Duty: MW3', category: 'Game', val: 25 },
        { id: 'CoDWarzone', name: 'Call of Duty: Warzone', category: 'Game', val: 25 },
        { id: 'WoW', name: 'World of Warcraft', category: 'Game', val: 25 },
        { id: 'Diablo4', name: 'Diablo IV', category: 'Game', val: 25 },
        { id: 'Overwatch2', name: 'Overwatch 2', category: 'Game', val: 20 },
        { id: 'CandyCrush', name: 'Candy Crush Saga', category: 'Game', val: 20 },

        // Sony Games
        { id: 'TLOU1', name: 'The Last of Us Part I', category: 'Game', val: 25 },
        { id: 'TLOU2', name: 'The Last of Us Part II', category: 'Game', val: 25 },
        { id: 'Uncharted4', name: 'Uncharted 4', category: 'Game', val: 25 },
        { id: 'SpiderMan2', name: 'Marvel\'s Spider-Man 2', category: 'Game', val: 25 },
        { id: 'GOWR', name: 'God of War Ragnarök', category: 'Game', val: 25 },
        { id: 'HorizonFW', name: 'Horizon Forbidden West', category: 'Game', val: 25 },
        { id: 'GT7', name: 'Gran Turismo 7', category: 'Game', val: 20 },
        { id: 'GoT', name: 'Ghost of Tsushima', category: 'Game', val: 25 },
        { id: 'Destiny2', name: 'Destiny 2', category: 'Game', val: 25 },

        // Nintendo Games
        { id: 'MarioOdyssey', name: 'Super Mario Odyssey', category: 'Game', val: 25 },
        { id: 'ZeldaBotW', name: 'Zelda: Breath of the Wild', category: 'Game', val: 28 },
        { id: 'ZeldaTotK', name: 'Zelda: Tears of the Kingdom', category: 'Game', val: 30 },
        { id: 'MarioKart8', name: 'Mario Kart 8 Deluxe', category: 'Game', val: 25 },
        { id: 'ACNH', name: 'Animal Crossing: NH', category: 'Game', val: 25 },
        { id: 'SmashUltimate', name: 'Super Smash Bros. Ultimate', category: 'Game', val: 25 },
        { id: 'PokemonSV', name: 'Pokémon Scarlet/Violet', category: 'Game', val: 25 },
        { id: 'Xenoblade3', name: 'Xenoblade Chronicles 3', category: 'Game', val: 20 },

        // Tencent/Riot/Epic Games
        { id: 'LoL', name: 'League of Legends', category: 'Game', val: 30 },
        { id: 'Valorant', name: 'Accelt', category: 'Game', val: 25 },
        { id: 'ClashRoyale', name: 'Clash Royale', category: 'Game', val: 20 },
        { id: 'CoDMobile', name: 'Call of Duty: Mobile', category: 'Game', val: 20 },
        { id: 'PUBGMobile', name: 'PUBG Mobile', category: 'Game', val: 25 },
        { id: 'Fortnite', name: 'Fortnite', category: 'Game', val: 30 },
        { id: 'HonorOfKings', name: 'Honor of Kings', category: 'Game', val: 25 },
        { id: 'PoE', name: 'Path of Exile', category: 'Game', val: 20 },

        // Steam / Valve
        { id: 'CS2', name: 'Counter-Strike 2', category: 'Game', val: 30 },
        { id: 'Dota2', name: 'Dota 2', category: 'Game', val: 25 },
        { id: 'HLAlyx', name: 'Half-Life: Alyx', category: 'Game', val: 25 },

        // EA Games
        { id: 'Apex', name: 'Apex Legends', category: 'Game', val: 25 },
        { id: 'Fifa', name: 'EA Sports FC 24', category: 'Game', val: 25 },
        { id: 'MassEffectLE', name: 'Mass Effect Legendary', category: 'Game', val: 25 },
        { id: 'FallenOrder', name: 'Star Wars Jedi: Survivor', category: 'Game', val: 25 },
        { id: 'Sims4', name: 'The Sims 4', category: 'Game', val: 25 },

        // Ubisoft Games
        { id: 'ACMirage', name: 'Assassin\'s Creed Mirage', category: 'Game', val: 25 },
        { id: 'R6Siege', name: 'Rainbow Six Siege', category: 'Game', val: 25 },
        { id: 'FarCry6', name: 'Far Cry 6', category: 'Game', val: 25 },
        { id: 'Division2', name: 'The Division 2', category: 'Game', val: 20 },

        // Take-Two Games
        { id: 'GTAV', name: 'Grand Theft Auto V', category: 'Game', val: 40 },
        { id: 'RDR2', name: 'Red Dead Redemption 2', category: 'Game', val: 30 },
        { id: 'NBA2K', name: 'NBA 2K24', category: 'Game', val: 25 },
        { id: 'Civ6', name: 'Civilization VI', category: 'Game', val: 25 },

        // Others
        { id: 'FF14', name: 'Final Fantasy XIV', category: 'Game', val: 30 },
        { id: 'FF16', name: 'Final Fantasy XVI', category: 'Game', val: 25 },
        { id: 'RE4Remake', name: 'Resident Evil 4 Remake', category: 'Game', val: 25 },
        { id: 'SF6', name: 'Street Fighter 6', category: 'Game', val: 25 },
        { id: 'MonsterHunterWorld', name: 'Monster Hunter: World', category: 'Game', val: 25 },
        { id: 'SonicFrontiers', name: 'Sonic Frontiers', category: 'Game', val: 20 },
        { id: 'Yakuza8', name: 'Like a Dragon: Infinite Wealth', category: 'Game', val: 25 },
        { id: 'Persona5', name: 'Persona 5 Royal', category: 'Game', val: 25 },
        { id: 'EldenRing', name: 'Elden Ring', category: 'Game', val: 35 },
        { id: 'DarkSouls3', name: 'Dark Souls III', category: 'Game', val: 25 },
        { id: 'Tekken8', name: 'Tekken 8', category: 'Game', val: 20 },
        { id: 'MGSDelta', name: 'MGS Delta: Snake Eater', category: 'Game', val: 20 },
        { id: 'SilentHill2', name: 'Silent Hill 2 Remake', category: 'Game', val: 20 },
        { id: 'Cyberpunk', name: 'Cyberpunk 2077', category: 'Game', val: 30 },
        { id: 'Witcher3', name: 'The Witcher 3', category: 'Game', val: 30 },
        { id: 'Genshin', name: 'Genshin Impact', category: 'Game', val: 30 },
        { id: 'HSR', name: 'Honkai: Star Rail', category: 'Game', val: 25 },
        { id: 'BlackMyth', name: 'Black Myth: Wukong', category: 'Game', val: 25 },

    ],
    links: [
        // --- RELATIONSHIPS ---

        // Microsoft
        { source: 'Microsoft', target: 'Xbox', relation: 'Owner' },
        { source: 'Microsoft', target: 'ActivisionBlizzard', relation: 'Acquired' },
        { source: 'Microsoft', target: 'Bethesda', relation: 'Acquired' },
        { source: 'Microsoft', target: 'Mojang', relation: 'Owner' },
        { source: 'Microsoft', target: 'Obsidian', relation: 'Owner' },
        { source: 'Microsoft', target: 'Playground', relation: 'Owner' },
        { source: 'Microsoft', target: 'Turn10', relation: 'Owner' },
        { source: 'Microsoft', target: '343', relation: 'Owner' },

        { source: 'ActivisionBlizzard', target: 'Blizzard', relation: 'Owner' },
        { source: 'ActivisionBlizzard', target: 'InfinityWard', relation: 'Owner' },
        { source: 'ActivisionBlizzard', target: 'Treyarch', relation: 'Owner' },
        { source: 'ActivisionBlizzard', target: 'King', relation: 'Owner' },

        { source: 'Mojang', target: 'Minecraft', relation: 'Developer' },
        { source: '343', target: 'HaloInfinite', relation: 'Developer' },
        { source: 'Playground', target: 'ForzaHorizon5', relation: 'Developer' },
        { source: 'Bethesda', target: 'Starfield', relation: 'Publisher' },
        { source: 'Bethesda', target: 'Skyrim', relation: 'Developer' },
        { source: 'Bethesda', target: 'Fallout4', relation: 'Developer' },
        { source: 'InfinityWard', target: 'CoDMW3', relation: 'Developer' },
        { source: 'ActivisionBlizzard', target: 'CoDWarzone', relation: 'Publisher' },
        { source: 'Blizzard', target: 'WoW', relation: 'Developer' },
        { source: 'Blizzard', target: 'Diablo4', relation: 'Developer' },
        { source: 'Blizzard', target: 'Overwatch2', relation: 'Developer' },
        { source: 'King', target: 'CandyCrush', relation: 'Developer' },

        // Sony
        { source: 'SonyGroup', target: 'SIE', relation: 'Owner' },
        { source: 'SonyGroup', target: 'PlayStation', relation: 'Owner' },
        { source: 'SIE', target: 'NaughtyDog', relation: 'Owner' },
        { source: 'SIE', target: 'Insomniac', relation: 'Owner' },
        { source: 'SIE', target: 'SantaMonica', relation: 'Owner' },
        { source: 'SIE', target: 'Guerrilla', relation: 'Owner' },
        { source: 'SIE', target: 'SuckerPunch', relation: 'Owner' },
        { source: 'SIE', target: 'Polyphony', relation: 'Owner' },
        { source: 'SIE', target: 'Bungie', relation: 'Acquired' },

        { source: 'NaughtyDog', target: 'TLOU1', relation: 'Developer' },
        { source: 'NaughtyDog', target: 'TLOU2', relation: 'Developer' },
        { source: 'NaughtyDog', target: 'Uncharted4', relation: 'Developer' },
        { source: 'Insomniac', target: 'SpiderMan2', relation: 'Developer' },
        { source: 'SantaMonica', target: 'GOWR', relation: 'Developer' },
        { source: 'Guerrilla', target: 'HorizonFW', relation: 'Developer' },
        { source: 'Polyphony', target: 'GT7', relation: 'Developer' },
        { source: 'SuckerPunch', target: 'GoT', relation: 'Developer' },
        { source: 'Bungie', target: 'Destiny2', relation: 'Developer' },

        // Nintendo
        { source: 'Nintendo', target: 'Switch', relation: 'Creator' },
        { source: 'Nintendo', target: 'NintendoEPD', relation: 'Owner' },
        { source: 'Nintendo', target: 'MonolithSoft', relation: 'Owner' },
        { source: 'Nintendo', target: 'IntelligentSys', relation: 'Partner' }, // Closely affiliated
        { source: 'Nintendo', target: 'HAL', relation: 'Partner' }, // Closely affiliated
        { source: 'Nintendo', target: 'PokemonCo', relation: 'Owner' }, // Joint investment
        { source: 'Nintendo', target: 'GameFreak', relation: 'Partner' }, // GameFreak owns part of PokemonCo

        { source: 'NintendoEPD', target: 'MarioOdyssey', relation: 'Developer' },
        { source: 'NintendoEPD', target: 'ZeldaBotW', relation: 'Developer' },
        { source: 'NintendoEPD', target: 'ZeldaTotK', relation: 'Developer' },
        { source: 'NintendoEPD', target: 'MarioKart8', relation: 'Developer' },
        { source: 'NintendoEPD', target: 'ACNH', relation: 'Developer' },
        { source: 'GameFreak', target: 'PokemonSV', relation: 'Developer' },
        { source: 'MonolithSoft', target: 'Xenoblade3', relation: 'Developer' },
        { source: 'Nintendo', target: 'SmashUltimate', relation: 'Publisher' }, // Developed by Bandai Namco/Sora

        // Tencent
        { source: 'Tencent', target: 'Riot', relation: 'Owner' },
        { source: 'Tencent', target: 'Supercell', relation: 'Owner' },
        { source: 'Tencent', target: 'EpicGames', relation: 'Investor (40%)' },
        { source: 'Tencent', target: 'TiMi', relation: 'Owner' },
        { source: 'Tencent', target: 'Lightspeed', relation: 'Owner' },
        { source: 'Tencent', target: 'GrindingGear', relation: 'Owner' },
        { source: 'Tencent', target: 'Ubisoft', relation: 'Investor' }, // Has stake
        { source: 'Tencent', target: 'FromSoftware', relation: 'Investor' }, // Has stake

        { source: 'Riot', target: 'LoL', relation: 'Developer' },
        { source: 'Riot', target: 'Valorant', relation: 'Developer' },
        { source: 'Supercell', target: 'ClashRoyale', relation: 'Developer' },
        { source: 'EpicGames', target: 'Fortnite', relation: 'Developer' },
        { source: 'EpicGames', target: 'EpicStore', relation: 'Owner' },
        { source: 'TiMi', target: 'HonorOfKings', relation: 'Developer' },
        { source: 'TiMi', target: 'CoDMobile', relation: 'Developer' },
        { source: 'Lightspeed', target: 'PUBGMobile', relation: 'Developer' },
        { source: 'GrindingGear', target: 'PoE', relation: 'Developer' },

        // EA
        { source: 'EA', target: 'Respawn', relation: 'Owner' },
        { source: 'EA', target: 'BioWare', relation: 'Owner' },
        { source: 'EA', target: 'DICE', relation: 'Owner' },
        { source: 'EA', target: 'Maxis', relation: 'Owner' },

        { source: 'Respawn', target: 'Apex', relation: 'Developer' },
        { source: 'Respawn', target: 'FallenOrder', relation: 'Developer' },
        { source: 'BioWare', target: 'MassEffectLE', relation: 'Developer' },
        { source: 'DICE', target: 'Fifa', relation: 'Developer' }, // Used to be developed by EA Canada/DICE engines etc
        { source: 'Maxis', target: 'Sims4', relation: 'Developer' },

        // Ubisoft
        { source: 'Ubisoft', target: 'UbisoftMontreal', relation: 'Owner' },
        { source: 'Ubisoft', target: 'UbisoftQuebec', relation: 'Owner' },
        { source: 'Ubisoft', target: 'Massive', relation: 'Owner' },

        { source: 'UbisoftMontreal', target: 'R6Siege', relation: 'Developer' },
        { source: 'UbisoftMontreal', target: 'FarCry6', relation: 'Developer' }, // Usually lead
        { source: 'UbisoftQuebec', target: 'ACMirage', relation: 'Co-Dev' }, // Actually Bordeaux lead, but simplfying
        { source: 'Massive', target: 'Division2', relation: 'Developer' },

        // Take-Two
        { source: 'TakeTwo', target: 'Rockstar', relation: 'Owner' },
        { source: 'TakeTwo', target: '2K', relation: 'Owner' },
        { source: 'TakeTwo', target: 'Zynga', relation: 'Owner' },
        { source: '2K', target: 'Firaxis', relation: 'Owner' },
        { source: '2K', target: 'Hangar13', relation: 'Owner' },

        { source: 'Rockstar', target: 'GTAV', relation: 'Developer' },
        { source: 'Rockstar', target: 'RDR2', relation: 'Developer' },
        { source: '2K', target: 'NBA2K', relation: 'Publisher' },
        { source: 'Firaxis', target: 'Civ6', relation: 'Developer' },

        // Square Enix
        { source: 'SquareEnix', target: 'CreativeBusinessUnit1', relation: 'Internal' },
        { source: 'SquareEnix', target: 'CreativeBusinessUnit3', relation: 'Internal' },
        { source: 'CreativeBusinessUnit1', target: 'FF16', relation: 'Developer' }, // CBU3 actually dev FF16, CBU1 FF7R. Correction
        { source: 'CreativeBusinessUnit3', target: 'FF14', relation: 'Developer' },

        // Capcom
        { source: 'Capcom', target: 'RE4Remake', relation: 'Developer' },
        { source: 'Capcom', target: 'SF6', relation: 'Developer' },
        { source: 'Capcom', target: 'MonsterHunterWorld', relation: 'Developer' },

        // Sega
        { source: 'Sega', target: 'RGG', relation: 'Owner' },
        { source: 'Sega', target: 'Atlus', relation: 'Owner' },
        { source: 'Sega', target: 'SonicFrontiers', relation: 'Publisher' },
        { source: 'RGG', target: 'Yakuza8', relation: 'Developer' },
        { source: 'Atlus', target: 'Persona5', relation: 'Developer' },

        // Bandai Namco
        { source: 'BandaiNamco', target: 'Tekken8', relation: 'Developer' },
        { source: 'BandaiNamco', target: 'FromSoftware', relation: 'Publisher (Intl)' }, // Often publishes FromSoft
        { source: 'FromSoftware', target: 'EldenRing', relation: 'Developer' },
        { source: 'FromSoftware', target: 'DarkSouls3', relation: 'Developer' },

        // Others
        { source: 'Konami', target: 'MGSDelta', relation: 'Publisher' },
        { source: 'Konami', target: 'SilentHill2', relation: 'Publisher' },
        { source: 'CDPR', target: 'Cyberpunk', relation: 'Developer' },
        { source: 'CDPR', target: 'Witcher3', relation: 'Developer' },
        { source: 'Hoyoverse', target: 'Genshin', relation: 'Developer' },
        { source: 'Hoyoverse', target: 'HSR', relation: 'Developer' },
        { source: 'BlackMythDev', target: 'BlackMyth', relation: 'Developer' },

        // Partnerships / Cross-Links
        { source: 'SonyGroup', target: 'EpicGames', relation: 'Investor' }, // Sony invested in Epic
        { source: 'NetEase', target: 'Bungie', relation: 'Investor (Historical)' }, // NetEase invested before Sony acq
        { source: 'Valve', target: 'Steam', relation: 'Owner' },
        { source: 'Valve', target: 'CS2', relation: 'Developer' },
        { source: 'Valve', target: 'Dota2', relation: 'Developer' },
        { source: 'Valve', target: 'HLAlyx', relation: 'Developer' },
        { source: 'Microsoft', target: 'OpenAI', relation: 'Partner' }, // Maybe irrelevant but shows scope

    ]
};
