/* Extra route modules. Edit this file when adding road stops or shopping. */
(() => {
  const byId = id => window.TRIP_DATA.find(stop => stop.id === id);
  const tirana = byId('tirana');
  tirana.arrival.text = 'Ожидаемый вечерний прилёт LY5183 в TIA — около 21:20; время нужно сверить с EL AL. Для группы из восьми заранее закажите минивэн или две машины у Speed Taxi, Blue Taxi, Lux Taxi либо трансфер отеля. Ориентир обычной машины — 1 500–2 200 ALL (€15–22), 25–35 минут; цену минивэна подтвердите при заказе. Официальное AHA Taxi работает круглосуточно. Автобус до площади Скандербега ходит каждый час 24/7, 400 ALL с человека (3 200 ALL на восьмерых), но затем остаётся около 2 км до отеля — поздно вечером он менее практичен.';
  tirana.shopping = [
    {name:'Tirana East Gate (TEG)', icon:'🛍️', note:'Лучший выбор международных брендов в Тиране: Zara, H&M, Mango, Massimo Dutti, Timberland, Nike, Adidas, Reebok, Geox, LC Waikiki и детские линии. Удобно совместить с Dajti; до центра — такси.', brands:'Outdoor/обувь · дети · масс-маркет', hours:'Обычно 10:00–22:00; проверить перед поездкой.', website:'https://www.teg.al/', map:'https://www.google.com/maps/search/?api=1&query=Tirana+East+Gate'},
    {name:'Toptani Shopping Center', icon:'🛍️', note:'Центральный торговый центр примерно с 80 магазинами, кафе и игровой зоной наверху. Удобнее всего без машины, во время прогулки по центру.', brands:'Одежда · дети · кафе', hours:'Обычно ежедневно 09:00–21:00.', website:'https://www.toptani.com.al/en', map:'https://www.google.com/maps/search/?api=1&query=Toptani+Shopping+Center'}
  ];
  const mavrovo = byId('mavrovo');
  mavrovo.journeyStops = [
    {icon:'🍲', name:'Призрен · Shadërvan и Besimi Beska', timing:'примерно через 3–3,5 часа', stay:'75–90 минут', detail:'Первая полноценная пауза: короткий круг по старому центру и семейный обед в известном ресторане традиционной кухни. Парковку лучше искать на краю пешеходного центра.', website:'https://beskarestaurant.com/en', map:'https://www.google.com/maps/search/?api=1&query=Besimi+Beska+Prizren'},
    {icon:'🕌', name:'Тетово · Расписная мечеть', timing:'примерно через 2,5–3 часа после Призрена', stay:'30–45 минут', detail:'Красивый и короткий культурный перерыв перед последним участком. Нужна закрытая одежда; во время молитвы не мешать посетителям. Перекус или ранний ужин — в городе.', map:'https://www.google.com/maps/search/?api=1&query=Painted+Mosque+Tetovo'},
    {icon:'🛍️', name:'Palma Mall Tetovo · запасной быстрый стоп', timing:'10 минут от центра Тетово', stay:'45–75 минут', detail:'Практичный вариант с туалетами, быстрым питанием и магазинами, если дети устали или погода плохая. Это не outlet village и выбор брендов скромнее, чем в Скопье.', website:'https://palmamall.mk/', map:'https://www.google.com/maps/search/?api=1&query=Palma+Mall+Tetovo'}
  ];
  mavrovo.shopping = [
    {name:'Palma Mall Tetovo', icon:'🛍️', note:'Удобен прямо по маршруту для еды и базовых покупок; выбор международных outdoor-брендов ограничен.', brands:'Повседневная одежда · обувь · еда', hours:'Проверить актуальные часы.', website:'https://palmamall.mk/', map:'https://www.google.com/maps/search/?api=1&query=Palma+Mall+Tetovo'},
    {name:'Skopje East Gate Mall · только при осознанном крюке', icon:'🛍️', note:'Самый сильный выбор брендов: более 220 магазинов, Zara, Massimo Dutti, Tommy Hilfiger, Adidas, Nike, Intersport и The Athlete’s Foot. Есть большой food court, но заезд в Скопье заметно удлинит и без того тяжёлый день.', brands:'Outdoor/спорт · дети · международные бренды', hours:'Обычно 10:00–22:00; проверить.', website:'https://eastgatemall.mk/en/brand/', map:'https://www.google.com/maps/search/?api=1&query=East+Gate+Mall+Skopje'}
  ];
})();
