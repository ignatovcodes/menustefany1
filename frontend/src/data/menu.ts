import type { MenuItem } from '../types';

// Меню Stephania Garden — европейская, кавказская, японская кухня
// Фото: picsum.photos (размер под мобильные, быстрая загрузка)
const img = (seed: number) => `https://picsum.photos/seed/${seed}/360/270`;

export const menuData: MenuItem[] = [
  // Холодные закуски
  { id: 1, category: 'Холодные закуски', name: 'Брускетта с томатами', description: 'Поджаренный хлеб с томатами, моцареллой и базиликом', weight: '180 г', price: 320, image: img(101) },
  { id: 2, category: 'Холодные закуски', name: 'Сырная тарелка', description: 'Ассорти итальянских сыров с грушей и орехами', weight: '250 г', price: 890, image: img(102) },
  { id: 3, category: 'Холодные закуски', name: 'Карпаччо из говядины', description: 'Тонко нарезанная говядина с рукколой и пармезаном', weight: '150 г', price: 650, image: img(103) },
  { id: 4, category: 'Холодные закуски', name: 'Тартар из лосося', description: 'Свежий лосось с авокадо и цитрусовым соусом', weight: '180 г', price: 720, image: img(104) },
  { id: 5, category: 'Холодные закуски', name: 'Овощное ассорти с хумусом', description: 'Сезонные овощи с домашним хумусом и питой', weight: '300 г', price: 380, image: img(105) },
  { id: 6, category: 'Холодные закуски', name: 'Пармская ветчина с дыней', description: 'Классическое итальянское сочетание', weight: '150 г', price: 550, image: img(106) },

  // Горячие закуски
  { id: 7, category: 'Горячие закуски', name: 'Кальмары в кляре', description: 'Кальмары в хрустящем кляре с соусом айоли', weight: '250 г', price: 480, image: img(107) },
  { id: 8, category: 'Горячие закуски', name: 'Креветки гриль', description: 'Тигровые креветки с чесноком и белым вином', weight: '220 г', price: 750, image: img(108) },
  { id: 9, category: 'Горячие закуски', name: 'Сырники с сметаной', description: 'Домашние сырники с нежной сметаной', weight: '200 г', price: 290, image: img(109) },
  { id: 10, category: 'Горячие закуски', name: 'Хачапури по-аджарски', description: 'Лодочка из теста с сыром и яйцом', weight: '350 г', price: 420, image: img(110) },
  { id: 11, category: 'Горячие закуски', name: 'Мидии в белом вине', description: 'Мидии с чесноком и зеленью', weight: '350 г', price: 620, image: img(111) },

  // Салаты
  { id: 12, category: 'Салаты', name: 'Цезарь с курицей', description: 'Романо, пармезан, крутоны, соус цезарь, куриное филе гриль', weight: '320 г', price: 520, image: img(112) },
  { id: 13, category: 'Салаты', name: 'Цезарь с лососем', description: 'Классический цезарь с малосольным лососем', weight: '300 г', price: 650, image: img(113) },
  { id: 14, category: 'Салаты', name: 'Греческий салат', description: 'Томаты, огурцы, перец, оливки, фета, орегано', weight: '300 г', price: 390, image: img(114) },
  { id: 15, category: 'Салаты', name: 'Салат с рукколой', description: 'Руккола, пармезан, вяленые томаты, кедровые орешки', weight: '250 г', price: 420, image: img(115) },
  { id: 16, category: 'Салаты', name: 'Оливье классический', description: 'Домашний оливье по традиционному рецепту', weight: '280 г', price: 350, image: img(116) },
  { id: 17, category: 'Салаты', name: 'Салат с тунцом', description: 'Тунец, авокадо, томаты черри, кунжут', weight: '280 г', price: 560, image: img(117) },

  // Супы
  { id: 18, category: 'Супы', name: 'Борщ', description: 'Классический борщ со сметаной и пампушкой', weight: '400 мл', price: 380, image: img(118) },
  { id: 19, category: 'Супы', name: 'Том Ям', description: 'Острый тайский суп с креветками и грибами', weight: '350 мл', price: 450, image: img(119) },
  { id: 20, category: 'Супы', name: 'Суп-пюре из тыквы', description: 'Кремовый суп с гренками и семечками', weight: '300 мл', price: 320, image: img(120) },
  { id: 21, category: 'Супы', name: 'Харчо по-грузински', description: 'Острый суп из говядины с орехами и ткемали', weight: '400 мл', price: 400, image: img(121) },
  { id: 22, category: 'Супы', name: 'Солянка мясная', description: 'Густой суп с колбасами, огурцами и сметаной', weight: '400 мл', price: 400, image: img(122) },
  { id: 23, category: 'Супы', name: 'Минестроне', description: 'Итальянский овощной суп с пастой и базиликом', weight: '350 мл', price: 360, image: img(123) },

  // Горячее
  { id: 24, category: 'Горячее', name: 'Стейк Рибай', description: 'Мраморная говядина 250 г, овощи гриль, соус пеппер', weight: '350 г', price: 1890, image: img(124) },
  { id: 25, category: 'Горячее', name: 'Стейк Филе Миньон', description: 'Нежнейшая вырезка 200 г с соусом Демигляс', weight: '280 г', price: 1650, image: img(125) },
  { id: 26, category: 'Горячее', name: 'Шашлык из свинины', description: 'Маринованная свинина на гриле с аджикой', weight: '350 г', price: 620, image: img(126) },
  { id: 27, category: 'Горячее', name: 'Шашлык из курицы', description: 'Куриное филе в специях на гриле', weight: '320 г', price: 490, image: img(127) },
  { id: 28, category: 'Горячее', name: 'Люля-кебаб из баранины', description: 'Рубленая баранина с пряностями', weight: '300 г', price: 550, image: img(128) },
  { id: 29, category: 'Горячее', name: 'Паста Карбонара', description: 'Спагетти, бекон, яйцо, пармезан, перец', weight: '350 г', price: 490, image: img(129) },
  { id: 30, category: 'Горячее', name: 'Паста Болоньезе', description: 'Спагетти с мясным соусом и пармезаном', weight: '350 г', price: 450, image: img(130) },
  { id: 31, category: 'Горячее', name: 'Ризотто с грибами', description: 'Кремовое ризотто с белыми грибами', weight: '320 г', price: 520, image: img(131) },
  { id: 32, category: 'Горячее', name: 'Лосось на гриле', description: 'Филе лосося с овощами и лимонным соусом', weight: '280 г', price: 850, image: img(132) },
  { id: 33, category: 'Горячее', name: 'Плов узбекский', description: 'Баранина, рис, морковь, зира, барбарис', weight: '400 г', price: 490, image: img(133) },
  { id: 34, category: 'Горячее', name: 'Пельмени домашние', description: 'Пельмени с говядиной и свининой, сметана', weight: '300 г', price: 420, image: img(134) },

  // Суши и роллы
  { id: 35, category: 'Суши и роллы', name: 'Филадельфия', description: 'Лосось, сливочный сыр, огурец', weight: '250 г', price: 520, image: img(135) },
  { id: 36, category: 'Суши и роллы', name: 'Дракон', description: 'Угорь, огурец, авокадо, икра тобико', weight: '280 г', price: 620, image: img(136) },
  { id: 37, category: 'Суши и роллы', name: 'Калифорния', description: 'Краб, авокадо, огурец, икра', weight: '250 г', price: 480, image: img(137) },
  { id: 38, category: 'Суши и роллы', name: 'Сет «Stephania»', description: 'Ассорти роллов и нигири 24 шт', weight: '500 г', price: 1890, image: img(138) },

  // Пицца
  { id: 39, category: 'Пицца', name: 'Маргарита', description: 'Томаты, моцарелла, базилик', weight: '450 г', price: 480, image: img(139) },
  { id: 40, category: 'Пицца', name: 'Пепперони', description: 'Острая салями, моцарелла, томатный соус', weight: '480 г', price: 550, image: img(140) },
  { id: 41, category: 'Пицца', name: 'Четыре сыра', description: 'Моцарелла, горгонзола, пармезан, дор блю', weight: '450 г', price: 620, image: img(141) },

  // Гарниры
  { id: 42, category: 'Гарниры', name: 'Картофель фри', description: 'Хрустящий картофель с соусом', weight: '200 г', price: 200, image: img(142) },
  { id: 43, category: 'Гарниры', name: 'Овощи гриль', description: 'Кабачок, баклажан, перец, томаты', weight: '200 г', price: 260, image: img(143) },
  { id: 44, category: 'Гарниры', name: 'Рис отварной', description: 'Рис басмати с маслом', weight: '150 г', price: 100, image: img(144) },

  // Десерты
  { id: 45, category: 'Десерты', name: 'Тирамису', description: 'Классический итальянский десерт с маскарпоне', weight: '180 г', price: 420, image: img(145) },
  { id: 46, category: 'Десерты', name: 'Панна котта', description: 'Ванильная панна котта с ягодным соусом', weight: '150 г', price: 350, image: img(146) },
  { id: 47, category: 'Десерты', name: 'Чизкейк Нью-Йорк', description: 'Классический чизкейк с ягодным топпингом', weight: '180 г', price: 420, image: img(147) },
  { id: 48, category: 'Десерты', name: 'Мороженое', description: 'Шарик ванильного мороженого', weight: '100 г', price: 140, image: img(148) },
  { id: 49, category: 'Десерты', name: 'Чурчхела', description: 'Грузинская сладость с орехами', weight: '100 г', price: 240, image: img(149) },

  // Напитки
  { id: 50, category: 'Напитки', name: 'Эспрессо', description: 'Классический эспрессо', weight: '50 мл', price: 140, image: img(150) },
  { id: 51, category: 'Напитки', name: 'Американо', description: 'Двойной эспрессо с горячей водой', weight: '200 мл', price: 170, image: img(151) },
  { id: 52, category: 'Напитки', name: 'Капучино', description: 'Эспрессо с молочной пенкой', weight: '200 мл', price: 210, image: img(152) },
  { id: 53, category: 'Напитки', name: 'Латте', description: 'Эспрессо с молоком', weight: '250 мл', price: 240, image: img(153) },
  { id: 54, category: 'Напитки', name: 'Свежевыжатый сок', description: 'Апельсиновый / грейпфрутовый', weight: '300 мл', price: 300, image: img(154) },
  { id: 55, category: 'Напитки', name: 'Лимонад домашний', description: 'Свежий лимонад с мятой', weight: '400 мл', price: 260, image: img(155) },
  { id: 56, category: 'Напитки', name: 'Минеральная вода', description: 'Боржоми / Ессентуки / Стелмас', weight: '330 мл', price: 140, image: img(156) },

  // Бар
  { id: 57, category: 'Бар', name: 'Красное вино бокал', description: 'Испанское/итальянское красное вино', weight: '150 мл', price: 340, image: img(157) },
  { id: 58, category: 'Бар', name: 'Белое вино бокал', description: 'Шардоне или Пино Гриджио', weight: '150 мл', price: 340, image: img(158) },
  { id: 59, category: 'Бар', name: 'Шампанское бокал', description: 'Игристое вино Просекко', weight: '150 мл', price: 430, image: img(159) },
  { id: 60, category: 'Бар', name: 'Пиво разливное', description: 'Светлое/тёмное по выбору', weight: '500 мл', price: 260, image: img(160) },
  { id: 61, category: 'Бар', name: 'Кола / Фанта / Спрайт', description: 'Прохладительные напитки', weight: '330 мл', price: 110, image: img(161) },
  { id: 62, category: 'Бар', name: 'Чай чайник', description: 'Чёрный, зелёный, травяной', weight: '500 мл', price: 240, image: img(162) },
  { id: 63, category: 'Бар', name: 'Чача', description: 'Грузинская виноградная водка', weight: '50 мл', price: 320, image: img(163) },
  { id: 64, category: 'Бар', name: 'Коньяк армянский', description: 'Марочный армянский коньяк', weight: '50 мл', price: 420, image: img(164) },
];

export const categories = Array.from(new Set(menuData.map((item) => item.category)));
