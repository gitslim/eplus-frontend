<script>
    import {onMount} from 'svelte'
    import ymaps from 'ymaps'

    let container
    export let center = [55.758134, 37.772855]
    export let zoomSize = 2
    export let nameIcon = 'Энергия Плюс'
    export let nameAdress = '111123, Москва, 1-я Владимирская, д.10А, стр. 1'
    let loaded = false

    onMount(async () => {
        // container = document.createElement('div')
        ymaps
            .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
            .then(maps => {
                let map = new maps.Map(container, {
                        center: center,
                        zoom: zoomSize
                    },
                    {
                        searchControlProvider: 'yandex#search'
                    })
                let marker = new maps.GeoObject({
                        // Описание геометрии.
                        geometry: {
                            type: 'Point',
                            coordinates: center
                        },

                        clusterize: true,
                        // Свойства.
                        properties: {
                            // Контент метки.
                            // iconContent: nameIcon,
                            // hintContent: nameAdress
                        },

                    },
                    
                    {
                        // Опции.
                        // Иконка метки будет растягиваться под размер ее содержимого.
                        preset: 'islands#blackStretchyIcon',
                        // Метку можно перемещать.
                        draggable: true
                    }
                )

                
                map.geoObjects
                    // .add(marker)
                    // Линейные объекты
                    .add(new maps.Placemark([58.813777, 57.622613], {
                        balloonContent: 'Переустройство инженерных коммуникаций.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([55.714700, 36.873684], {
                        balloonContent: 'Переустройство магистрального газопровода.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([55.059303, 38.874090], {
                        balloonContent: 'Газоснабжение производственного комплекса.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([55.748617, 37.541911], {
                        balloonContent: 'Техническое перевооружение сети газораспределения комплекса административно-общественных зданий.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([54.927989, 82.892441], {
                        balloonContent: 'Переустройство газопровода-отвода к ГРС Р=5,4МПа Ду 500мм и кабеля технологической связи при пересечении с проектируемой а/дорогой.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([55.041685, 82.349944], {
                        balloonContent: 'Переустройство газопровода в.д. Р≤0,6МПа при пересечении с проектируемой а/дорогой.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([57.357173, 59.956230], {
                        balloonContent: 'Внеплощадочная система газоснабжения ПГУ-420 ст.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([55.95394, 37.330474], {
                        balloonContent: 'Переустройство газовых сетей, попадающих в зону строительства жилого комплекса.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([53.734351, 41.009403], {
                        balloonContent: 'Переустройство магистрального газопровода при пересечении с проектируемой автомобильной дорогой.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    // ------
                    .add(new maps.Placemark([55.962551, 37.386607], {
                        balloonContent: 'Переустройство магистральных и распределительных газопроводов.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([55.815977, 37.247659], {
                        balloonContent: 'Газоснабжение многофункционального жилого комплекса.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([55.676625, 37.452301], {
                        balloonContent: 'Переустройство газовых сетей.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([53.729539, 40.998812], {
                        balloonContent: 'Переустройство магистрального газопровода при пересечении с проектируемой автомобильной дорогой.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([55.399112, 37.253789], {
                        balloonContent: 'Вынос и переустройство нефтепроводов, продуктопроводов, магистральных газопроводов.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([55.49444, 38.407188], {
                        balloonContent: 'Вынос и переустройство нефтепроводов, продуктопроводов, магистральных газопроводов.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([45.247884, 39.198051], {
                        balloonContent: 'Переустройство магистральных газопроводов при реконструкции автомобильной дороги.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([55.480806, 38.370324], {
                        balloonContent: 'Переустройство магистральных трубопроводов и распределительных газопроводов.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([55.915247, 38.005308], {
                        balloonContent: 'Переустройство газовых сетей.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))


                    // Объекты теплоэнергетики

                    .add(new maps.Placemark([56.729392, 37.548170], {
                        balloonContent: 'Газовая котельная мощностью 18 МВт для комплекса общественно-административных зданий.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([56.018817, 37.448437], {
                        balloonContent: 'Техническое перевооружение котельной 6,5 т пара/ч производственного комплекса.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([55.687542, 37.567817], {
                        balloonContent: 'Крышная блочно-модульная котельная мощностью 1,9 МВт для комплекса зданий.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([55.768338, 37.690861], {
                        balloonContent: 'Техническое перевооружение котельной мощностью 3 МВт.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([53.734351, 41.009403], {
                        balloonContent: 'Техническое перевооружение котельной административного комплекса.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    // -----

                    .add(new maps.Placemark([55.270997, 36.830614], {
                        balloonContent: 'ГРС производительностью 3200м3/час.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([56.466107, 43.870241], {
                        balloonContent: 'ГРС производительностью 130250 м3/час.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([56.324981, 46.539545], {
                        balloonContent: 'ГРС производительностью 25000 м3/час.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([56.104173, 47.716034], {
                        balloonContent: 'ГРС производительностью 16500 м3/час.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([55.969803, 37.515374], {
                        balloonContent: 'ГРС производительностью 7400 м3/час.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([53.736495, 41.014589], {
                        balloonContent: 'ГРС производительностью 11200 м3/час.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([61.472761, 64.050242], {
                        balloonContent: 'ГРС производительностью 50000 м3/час.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([56.006313, 47.590841], {
                        balloonContent: 'ГРС производительностью 19400 м3/час.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                    .add(new maps.Placemark([56.127435, 47.300912], {
                        balloonContent: 'ГРС производительностью 404000 м3/час.',
                    }, {
                        preset: 'islands#greenDotIconWithCaption'
                    }))

                loaded = true
            })
            .catch(error => console.log('Failed to load Yandex Maps', error))
    })
</script>

<style>
    .map {
        width: 100%;
        height: 100%;
        max-height: 470px;
        min-height: 300px;
    }
</style>

{#if loaded === false}
    <h1>Загрузка карты...</h1>
    <progress class="progress is-small is-primary"></progress>
{/if}

<div class="map" bind:this={container}></div>