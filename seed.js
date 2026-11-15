// Startbestand: dein Stand aus der bisherigen Hausbar (15.11.2026).
// Wird einmalig über „Startbestand importieren“ im Reiter Bestand in die Datenbank geschrieben.
const b = (id, name, cat, kind, order) => ({ id, name, cat, kind, order, status: 'voll', history: [] });

export const SEED_BOTTLES = [
  b('cuate-13', 'Cuate Barbados Caribbean Rum 13 Añejo Gran Reserva', 'Rum', 'rum-dark', 1),
  b('havana-3', 'Havana Club 3 Años', 'Rum', 'rum-light', 2),
  b('oakheart', 'Bacardi Oakheart', 'Rum', 'rum-spiced', 3),
  b('zacapa-23', 'Ron Zacapa 23', 'Rum', 'rum-dark', 4),

  b('dalwhinnie-15', 'Dalwhinnie 15', 'Scotch Whisky', 'scotch', 10),
  b('talisker-storm', 'Talisker Storm', 'Scotch Whisky', 'scotch-peated', 11),
  b('bunnahabhain-eirigh', 'Bunnahabhain Eirigh Na Greine', 'Scotch Whisky', 'scotch', 12),
  b('lagavulin-16', 'Lagavulin 16', 'Scotch Whisky', 'scotch-peated', 13),
  b('glenmorangie', 'Glenmorangie Original', 'Scotch Whisky', 'scotch', 14),
  b('glenfarclas-12', 'Glenfarclas 12', 'Scotch Whisky', 'scotch', 15),
  b('laphroaig-qc', 'Laphroaig Quarter Cask', 'Scotch Whisky', 'scotch-peated', 16),
  b('aberlour-abunadh', "Aberlour A'bunadh Cask Strength", 'Scotch Whisky', 'scotch', 17),
  b('ardbeg-corryvreckan', 'Ardbeg Corryvreckan', 'Scotch Whisky', 'scotch-peated', 18),
  b('cadenhead-auchroisk', "Cadenhead's Auchroisk 14 Jahre, 46 %", 'Scotch Whisky', 'scotch', 19),

  b('redbreast-12', 'Redbreast 12', 'Irish, Rye & Co.', 'irish', 20),
  b('elijah-craig-sb', 'Elijah Craig Small Batch', 'Irish, Rye & Co.', 'bourbon', 20.5),
  b('bulleit-rye', 'Bulleit Rye', 'Irish, Rye & Co.', 'rye', 21),
  b('rittenhouse', 'Rittenhouse Rye', 'Irish, Rye & Co.', 'rye', 22),
  b('powwow', 'Pow-Wow Botanical Rye', 'Irish, Rye & Co.', 'rye', 23),
  b('hong-thong', 'Hong Thong (Thailand)', 'Irish, Rye & Co.', 'whisky-other', 24),

  b('tanqueray', 'Tanqueray London Dry Gin (43,1 %)', 'Weitere Spirituosen', 'gin', 30),
  b('our-vodka', 'Our/Berlin Vodka', 'Weitere Spirituosen', 'vodka', 31),
  b('courvoisier', 'Courvoisier VSOP', 'Weitere Spirituosen', 'cognac', 32),
  b('absinth', 'Absinth', 'Weitere Spirituosen', 'absinthe', 33),

  b('zuidam-vanilla', 'Zuidam Vanilla Liqueur', 'Liköre', 'vanilla-liqueur', 40),
  b('kahlua', 'Kahlúa', 'Liköre', 'coffee-liqueur', 41),
  b('nordic-kaffee', 'Nordic Kaffee Du', 'Liköre', 'coffee-liqueur', 42),
  b('baileys', 'Baileys', 'Liköre', 'cream-liqueur', 43),
  b('amaretto', 'Amaretto', 'Liköre', 'amaretto', 44),
  b('triple-sec', 'Le Favori Triple Sec', 'Liköre', 'triple-sec', 45),

  b('carpano-antica', 'Carpano Antica Formula', 'Wermut & Aperitif', 'sweet-vermouth', 49.5),
  b('martini-rosso', 'Martini Rosso', 'Wermut & Aperitif', 'sweet-vermouth', 50),
  b('campari', 'Campari', 'Wermut & Aperitif', 'campari', 51),

  b('angostura', 'Angostura Aromatic', 'Bitters', 'bitters-angostura', 60),
  b('angostura-orange', 'Angostura Orange', 'Bitters', 'bitters-orange', 61),
  b('peychauds', "Peychaud's", 'Bitters', 'bitters-peychauds', 62),
  b('peach-bitters', 'Peach Bitters', 'Bitters', 'bitters-peach', 63),

  b('monin-zucker', 'Monin Zuckersirup (weiß)', 'Sirup', 'sugar-syrup', 70)
];

// Frische Zutaten: nichts angehakt. Abhaken im Reiter Bestand → Frisch & Vorrat.
export const SEED_PANTRY = {};
