function init() {
    let map = new ymaps.Map('map', {
        center: [59.94855838185824,30.266171729983988],
        zoom: 16
    });

    map.controls.remove('geolocationControl'); // удаляем rеолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map. controls.remove("zoomControl"); //удаляем контроль зуммирования
    map.controls.remove('rulerControl'); // удаляем контроль правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);