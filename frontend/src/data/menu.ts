import type { MenuItem } from '../types';

// Меню Stephania Garden — европейская, кавказская, японская кухня
// Источник: stephania.rest (категории), типичные блюда ресторана
// Фото: Unsplash CDN
const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=400&q=85`;

export const menuData: MenuItem[] = [
  // Холодные закуски
  { id: 1, category: 'Холодные закуски', name: 'Брускетта с томатами', description: 'Поджаренный хлеб с томатами, моцареллой и базиликом', weight: '180 г', price: 320, image: img('1565299624946-b28f40a0ae38') },
  { id: 2, category: 'Холодные закуски', name: 'Сырная тарелка', description: 'Ассорти итальянских сыров с грушей и орехами', weight: '250 г', price: 890, image: img('1486297678162-eb2a19b0a32d') },
  { id: 3, category: 'Холодные закуски', name: 'Карпаччо из говядины', description: 'Тонко нарезанная говядина с рукколой и пармезаном', weight: '150 г', price: 650, image: img('1544025162-16f7d3c9f8b4') },
  { id: 4, category: 'Холодные закуски', name: 'Тартар из лосося', description: 'Свежий лосось с авокадо и цитрусовым соусом', weight: '180 г', price: 720, image: img('1579871192552-45764a3a8b9c') },
  { id: 5, category: 'Холодные закуски', name: 'Овощное ассорти с хумусом', description: 'Сезонные овощи с домашним хумусом и питой', weight: '300 г', price: 380, image: img('1546069901-ba9599a7e63c') },
  { id: 6, category: 'Холодные закуски', name: 'Пармская ветчина с дыней', description: 'Классическое итальянское сочетание', weight: '150 г', price: 550, image: img('1608897010638-2f647c421fff') },

  // Горячие закуски
  { id: 7, category: 'Горячие закуски', name: 'Кальмары в кляре', description: 'Кальмары в хрустящем кляре с соусом айоли', weight: '250 г', price: 480, image: img('1599487488170-d11ec9c172f0') },
  { id: 8, category: 'Горячие закуски', name: 'Креветки гриль', description: 'Тигровые креветки с чесноком и белым вином', weight: '220 г', price: 750, image: img('1559847844-5315695dadae') },
  { id: 9, category: 'Горячие закуски', name: 'Сырники с сметаной', description: 'Домашние сырники с нежной сметаной', weight: '200 г', price: 290, image: img('1562376552-0a1601812f12') },
  { id: 10, category: 'Горячие закуски', name: 'Хачапури по-аджарски', description: 'Лодочка из теста с сыром и яйцом', weight: '350 г', price: 420, image: img('1599027012592-326e46dc6aa7') },
  { id: 11, category: 'Горячие закуски', name: 'Мидии в белом вине', description: 'Мидии с чесноком и зеленью', weight: '350 г', price: 620, image: img('1559847844-5315695dadae') },

  // Салаты
  { id: 12, category: 'Салаты', name: 'Цезарь с курицей', description: 'Романо, пармезан, крутоны, соус цезарь, куриное филе гриль', weight: '320 г', price: 520, image: img('1546793665-c74683f339c1') },
  { id: 13, category: 'Салаты', name: 'Цезарь с лососем', description: 'Классический цезарь с малосольным лососем', weight: '300 г', price: 650, image: img('1550305024-a8cc01168351') },
  { id: 14, category: 'Салаты', name: 'Греческий салат', description: 'Томаты, огурцы, перец, оливки, фета, орегано', weight: '300 г', price: 390, image: img('1540189549336-e6e99c3679fe') },
  { id: 15, category: 'Салаты', name: 'Салат с рукколой', description: 'Руккола, пармезан, вяленые томаты, кедровые орешки', weight: '250 г', price: 420, image: img('1512621776951-a57141f2eefd') },
  { id: 16, category: 'Салаты', name: 'Оливье классический', description: 'Домашний оливье по традиционному рецепту', weight: '280 г', price: 350, image: img('1600326145552-327f74b6c4b8') },
  { id: 17, category: 'Салаты', name: 'Салат с тунцом', description: 'Тунец, авокадо, томаты черри, кунжут', weight: '280 г', price: 560, image: img('1565299624946-b28f40a0ae38') },

  // Супы
  { id: 18, category: 'Супы', name: 'Борщ', description: 'Классический борщ со сметаной и пампушкой', weight: '400 мл', price: 380, image: img('1588378585928-1c4d2e7f0b3c') },
  { id: 19, category: 'Супы', name: 'Том Ям', description: 'Острый тайский суп с креветками и грибами', weight: '350 мл', price: 450, image: img('1559314809-0d155014e29e') },
  { id: 20, category: 'Супы', name: 'Суп-пюре из тыквы', description: 'Кремовый суп с гренками и семечками', weight: '300 мл', price: 320, image: img('1547592166-23ac45744acd') },
  { id: 21, category: 'Супы', name: 'Харчо по-грузински', description: 'Острый суп из говядины с орехами и ткемали', weight: '400 мл', price: 400, image: img('1547592166-23ac45744acd') },
  { id: 22, category: 'Супы', name: 'Солянка мясная', description: 'Густой суп с колбасами, огурцами и сметаной', weight: '400 мл', price: 400, image: img('1588378585928-1c4d2e7f0b3c') },
  { id: 23, category: 'Супы', name: 'Минестроне', description: 'Итальянский овощной суп с пастой и базиликом', weight: '350 мл', price: 360, image: img('1547592166-23ac45744acd') },

  // Горячее
  { id: 24, category: 'Горячее', name: 'Стейк Рибай', description: 'Мраморная говядина 250 г, овощи гриль, соус пеппер', weight: '350 г', price: 1890, image: img('1558030006-4505ac756566') },
  { id: 25, category: 'Горячее', name: 'Стейк Филе Миньон', description: 'Нежнейшая вырезка 200 г с соусом Демигляс', weight: '280 г', price: 1650, image: img('1558030006-4505ac756566') },
  { id: 26, category: 'Горячее', name: 'Шашлык из свинины', description: 'Маринованная свинина на гриле с аджикой', weight: '350 г', price: 620, image: img('1555939594-58d7cb561ad1') },
  { id: 27, category: 'Горячее', name: 'Шашлык из курицы', description: 'Куриное филе в специях на гриле', weight: '320 г', price: 490, image: img('1603360946369-dc9bb6258143') },
  { id: 28, category: 'Горячее', name: 'Люля-кебаб из баранины', description: 'Рубленая баранина с пряностями', weight: '300 г', price: 550, image: img('1555939594-58d7cb561ad1') },
  { id: 29, category: 'Горячее', name: 'Паста Карбонара', description: 'Спагетти, бекон, яйцо, пармезан, перец', weight: '350 г', price: 490, image: img('1551183053-bf0aceebd1b9') },
  { id: 30, category: 'Горячее', name: 'Паста Болоньезе', description: 'Спагетти с мясным соусом и пармезаном', weight: '350 г', price: 450, image: img('1551183053-bf0aceebd1b9') },
  { id: 31, category: 'Горячее', name: 'Ризотто с грибами', description: 'Кремовое ризотто с белыми грибами', weight: '320 г', price: 520, image: img('1473093295043-c48f2973fae6') },
  { id: 32, category: 'Горячее', name: 'Лосось на гриле', description: 'Филе лосося с овощами и лимонным соусом', weight: '280 г', price: 850, image: img('1467003909585-2f8a97600254') },
  { id: 33, category: 'Горячее', name: 'Плов узбекский', description: 'Баранина, рис, морковь, зира, барбарис', weight: '400 г', price: 490, image: img('1599027012592-326e46dc6aa7') },
  { id: 34, category: 'Горячее', name: 'Пельмени домашние', description: 'Пельмени с говядиной и свининой, сметана', weight: '300 г', price: 420, image: img('1562376552-0a1601812f12') },

  // Суши и роллы
  { id: 35, category: 'Суши и роллы', name: 'Филадельфия', description: 'Лосось, сливочный сыр, огурец', weight: '250 г', price: 520, image: img('1579871192552-45764a3a8b9c') },
  { id: 36, category: 'Суши и роллы', name: 'Дракон', description: 'Угорь, огурец, авокадо, икра тобико', weight: '280 г', price: 620, image: img('1579871192552-45764a3a8b9c') },
  { id: 37, category: 'Суши и роллы', name: 'Калифорния', description: 'Краб, авокадо, огурец, икра', weight: '250 г', price: 480, image: img('1579871192552-45764a3a8b9c') },
  { id: 38, category: 'Суши и роллы', name: 'Сет «Stephania»', description: 'Ассорти роллов и нигири 24 шт', weight: '500 г', price: 1890, image: img('1579871192552-45764a3a8b9c') },

  // Пицца
  { id: 39, category: 'Пицца', name: 'Маргарита', description: 'Томаты, моцарелла, базилик', weight: '450 г', price: 480, image: img('1565299624946-b28f40a0ae38') },
  { id: 40, category: 'Пицца', name: 'Пепперони', description: 'Острая салями, моцарелла, томатный соус', weight: '480 г', price: 550, image: img('1628846075477-9a2b1d1b0f5e') },
  { id: 41, category: 'Пицца', name: 'Четыре сыра', description: 'Моцарелла, горгонзола, пармезан, дор блю', weight: '450 г', price: 620, image: img('1565299624946-b28f40a0ae38') },

  // Гарниры
  { id: 42, category: 'Гарниры', name: 'Картофель фри', description: 'Хрустящий картофель с соусом', weight: '200 г', price: 200, image: img('1573086210224-43081e8d6ea5') },
  { id: 43, category: 'Гарниры', name: 'Овощи гриль', description: 'Кабачок, баклажан, перец, томаты', weight: '200 г', price: 260, image: img('1546069901-ba9599a7e63c') },
  { id: 44, category: 'Гарниры', name: 'Рис отварной', description: 'Рис басмати с маслом', weight: '150 г', price: 100, image: img('1512058565466-1c1f3d1c8b2e') },

  // Десерты
  { id: 45, category: 'Десерты', name: 'Тирамису', description: 'Классический итальянский десерт с маскарпоне', weight: '180 г', price: 420, image: img('1571877222483-6a8a9d8b5a6b') },
  { id: 46, category: 'Десерты', name: 'Панна котта', description: 'Ванильная панна котта с ягодным соусом', weight: '150 г', price: 350, image: img('1551024506-0bdfdceadf9a') },
  { id: 47, category: 'Десерты', name: 'Чизкейк Нью-Йорк', description: 'Классический чизкейк с ягодным топпингом', weight: '180 г', price: 420, image: img('1533134242443-d4dd215715d3') },
  { id: 48, category: 'Десерты', name: 'Мороженое', description: 'Шарик ванильного мороженого', weight: '100 г', price: 140, image: img('1563805042-7684bc019e17') },
  { id: 49, category: 'Десерты', name: 'Чурчхела', description: 'Грузинская сладость с орехами', weight: '100 г', price: 240, image: img('1551024506-0bdfdceadf9a') },

  // Напитки
  { id: 50, category: 'Напитки', name: 'Эспрессо', description: 'Классический эспрессо', weight: '50 мл', price: 140, image: img('1495474472287-4d71bcdd2085') },
  { id: 51, category: 'Напитки', name: 'Американо', description: 'Двойной эспрессо с горячей водой', weight: '200 мл', price: 170, image: img('1495474472287-4d71bcdd2085') },
  { id: 52, category: 'Напитки', name: 'Капучино', description: 'Эспрессо с молочной пенкой', weight: '200 мл', price: 210, image: img('1572442388796-2a993f03b8d4') },
  { id: 53, category: 'Напитки', name: 'Латте', description: 'Эспрессо с молоком', weight: '250 мл', price: 240, image: img('1561882468-3700d3d33639') },
  { id: 54, category: 'Напитки', name: 'Свежевыжатый сок', description: 'Апельсиновый / грейпфрутовый', weight: '300 мл', price: 300, image: img('1621506283937-77d4247365d8') },
  { id: 55, category: 'Напитки', name: 'Лимонад домашний', description: 'Свежий лимонад с мятой', weight: '400 мл', price: 260, image: img('1523677011783-4d4c2e0e95a9') },
  { id: 56, category: 'Напитки', name: 'Минеральная вода', description: 'Боржоми / Ессентуки / Стелмас', weight: '330 мл', price: 140, image: img('1548839140-29a81eb6bfe3') },

  // Бар
  { id: 57, category: 'Бар', name: 'Красное вино бокал', description: 'Испанское/итальянское красное вино', weight: '150 мл', price: 340, image: img('1510816202142-9431e9b2d302') },
  { id: 58, category: 'Бар', name: 'Белое вино бокал', description: 'Шардоне или Пино Гриджио', weight: '150 мл', price: 340, image: img('1547595628-c7a4226c731c') },
  { id: 59, category: 'Бар', name: 'Шампанское бокал', description: 'Игристое вино Просекко', weight: '150 мл', price: 430, image: img('1513558161293-cdaf765ed2fd') },
  { id: 60, category: 'Бар', name: 'Пиво разливное', description: 'Светлое/тёмное по выбору', weight: '500 мл', price: 260, image: img('1535958636474-b021ee2d6c77') },
  { id: 61, category: 'Бар', name: 'Кола / Фанта / Спрайт', description: 'Прохладительные напитки', weight: '330 мл', price: 110, image: img('1629203856072-26c8582c72b8') },
  { id: 62, category: 'Бар', name: 'Чай чайник', description: 'Чёрный, зелёный, травяной', weight: '500 мл', price: 240, image: img('1564890369478-c89ca6d9cbc9') },
  { id: 63, category: 'Бар', name: 'Чача', description: 'Грузинская виноградная водка', weight: '50 мл', price: 320, image: img('1510816202142-9431e9b2d302') },
  { id: 64, category: 'Бар', name: 'Коньяк армянский', description: 'Марочный армянский коньяк', weight: '50 мл', price: 420, image: img('1510816202142-9431e9b2d302') },
];

export const categories = Array.from(new Set(menuData.map((item) => item.category)));
