const data = window.TRIP_DATA;
const stopsRoot = document.querySelector('#stops');
const dialog = document.querySelector('#poiDialog');
const dialogContent = document.querySelector('#dialogContent');
const esc = (value = '') => String(value).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function link(label, url, kind = '') {
  return url ? `<a class="action-link ${kind}" href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} <span>↗</span></a>` : '';
}

function foodList(food = []) {
  if (!food.length) return '<p class="muted">Ресторан лучше выбрать по маршруту и свежим отзывам в день поездки.</p>';
  return food.map(item => `<li><div><strong>${esc(item.name)}</strong><span>${esc(item.note)}</span></div><div class="food-links">${link('Сайт', item.web)}${link('Карта', item.map)}</div></li>`).join('');
}

function renderStops() {
  stopsRoot.innerHTML = data.map((stop, index) => `
    <article class="stop ${index === 0 ? 'open' : ''}" data-stop="${esc(stop.id)}">
      <button class="stop-head" type="button" aria-expanded="${index === 0}" aria-controls="panel-${esc(stop.id)}">
        <span class="stop-number">${esc(stop.number)}</span>
        <span class="stop-title"><small>${esc(stop.dates)} · ${esc(stop.country)}</small><strong>${esc(stop.city)}</strong><em>${esc(stop.nights)} · ${esc(stop.hotel)}</em></span>
        <span class="stop-toggle">+</span>
      </button>
      <div class="stop-panel" id="panel-${esc(stop.id)}">
        <div class="stop-content">
          <section class="general-block"><p class="mini-title">Общее</p><p>${esc(stop.intro)}</p><div class="transport-pill">⌁ ${esc(stop.transport)}</div></section>
          ${stop.arrival ? `<section class="arrival"><p class="mini-title">${esc(stop.arrival.title)}</p><p>${esc(stop.arrival.text)}</p><div class="inline-links">${stop.arrival.links.map(x => link(x.label,x.url)).join('')}</div></section>` : ''}
          <section class="weather-block">
            <div class="weather-top"><div><p class="mini-title">Типичная погода</p><strong>${esc(stop.weather.high)}</strong><span>днём</span></div><div class="weather-art"><span>☀</span><i></i><i></i><i></i></div></div>
            <div class="weather-grid"><div><small>Ночью</small><b>${esc(stop.weather.low)}</b></div><div><small>Осадки</small><b>${esc(stop.weather.rain)}</b></div><div><small>Ощущение</small><b>${esc(stop.weather.feel)}</b></div></div>
            <p class="weather-note">${esc(stop.weather.note)}</p>
          </section>
          ${stop.warning ? `<aside class="warning"><strong>Обратите внимание</strong><p>${esc(stop.warning)}</p></aside>` : ''}
          <section class="poi-section"><div class="subheading"><p class="mini-title">Планируем посетить</p><span>${stop.pois.length} мест</span></div>
            <div class="poi-list">${stop.pois.map((poi, poiIndex) => `<button class="poi-row" type="button" data-stop-index="${index}" data-poi-index="${poiIndex}"><span class="poi-icon">${poi.icon}</span><span><strong>${esc(poi.name)}</strong><small>${esc(poi.teaser)}</small><em>${esc(poi.duration)} · ${esc(poi.age)}</em></span><b>→</b></button>`).join('')}</div>
          </section>
        </div>
      </div>
    </article>`).join('');
}

function openPoi(stopIndex, poiIndex) {
  const stop = data[stopIndex]; const poi = stop.pois[poiIndex];
  dialogContent.innerHTML = `
    <div class="dialog-hero"><span>${poi.icon}</span><p>${esc(stop.city)} · ${esc(poi.duration)}</p><h2 id="dialogTitle">${esc(poi.name)}</h2><div class="tag">Возраст: ${esc(poi.age)}</div></div>
    <div class="dialog-body">
      <p class="lead">${esc(poi.description)}</p>
      <div class="dialog-actions">${link('Показать на карте',poi.map,'primary')}${link('Начать навигацию',poi.nav)}${link('Официальный сайт',poi.website)}</div>
      <div class="practical"><div><span>Ⓟ</span><section><strong>Парковка и подход</strong><p>${esc(poi.parking)}</p></section></div><div><span>◷</span><section><strong>Когда приезжать</strong><p>${esc(poi.hours)}</p></section></div><div class="attention"><span>!</span><section><strong>На что обратить внимание</strong><p>${esc(poi.watch)}</p></section></div></div>
      <div class="food-card"><p class="mini-title">Где поесть рядом</p><ul>${foodList(poi.food)}</ul></div>
    </div>`;
  dialog.showModal(); document.body.classList.add('modal-open');
}

renderStops();
stopsRoot.addEventListener('click', event => {
  const head = event.target.closest('.stop-head');
  if (head) { const stop = head.closest('.stop'); const open = stop.classList.toggle('open'); head.setAttribute('aria-expanded', open); return; }
  const poi = event.target.closest('.poi-row'); if (poi) openPoi(Number(poi.dataset.stopIndex), Number(poi.dataset.poiIndex));
});
document.querySelector('#dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
document.querySelector('#expandAll').addEventListener('click', e => {
  const stops = [...document.querySelectorAll('.stop')]; const shouldOpen = stops.some(s => !s.classList.contains('open'));
  stops.forEach(s => { s.classList.toggle('open', shouldOpen); s.querySelector('.stop-head').setAttribute('aria-expanded', shouldOpen); });
  e.currentTarget.textContent = shouldOpen ? 'Свернуть всё' : 'Развернуть всё';
});
