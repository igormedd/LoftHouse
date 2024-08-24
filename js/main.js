/* Phone Mask */
mask ('[data-tel-input]')

const phoneInputs = document.querySelectorAll('[data-tel-input]')
phoneInputs.forEach((input)=> {
    input.addEventListener('input', ()=>{
        if (input.value == '+') input.value = '';
    })
    input.addEventListener( 'blur',  ()=> {
        if (input.value == '+') input.value = '';
    })
})


/* Yandex Map */
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var Map = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.943543,30.338928],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });
        var myPlacemark = new ymaps.Placemark(
            [59.943543,30.338928], 
            {
                balloonContent: `
                    <div class="balloon">
                        <div class="balloon__address">Наб. реки Фонтанки 10-15</div>
                        <div class="balloon__contacts">
                            <a href="tel:+78121234567">+8 (812) 123-45-67</a>
                        </div>
                    </div>
                `,
            }, 
            {
                iconLayout: 'default#image',
                iconImageHref: './img/map/location-pin.svg',
                iconImageSize: [40, 40],
                iconImageOffset: [-20, -40]
            }
        );



        Map.geoObjects.add(myPlacemark);
        myPlacemark.balloon.open();
        Map.controls.remove ('geolocationControl')
        Map.controls.remove ('searchControl')
        Map.controls.remove ('trafficControl')
        Map.controls.remove ('typeSelector')
        Map.controls.remove ('geolocationSelector')
        Map.behavoriors.disable ('scrollZoom')

        // Map.geoObjects.add(myPlacemark);
        myPlacemark.balloon.open();
    }

