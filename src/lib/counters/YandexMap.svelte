<script>
    import {onMount} from 'svelte'
    import ymaps from 'ymaps'

    let container
    let center = [55.8, 37.8]
    let loaded = false

    onMount(async () => {
        // container = document.createElement('div')
        ymaps
            .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
            .then(maps => {
                let map = new maps.Map(container, {
                        center: center,
                        zoom: 11
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
                        // Свойства.
                        properties: {
                            // Контент метки.
                            iconContent: 'Энергия Плюс',
                            hintContent: '111123, Москва, 1-я Владимирская, д.10А, стр. 1'
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
                    .add(new maps.Placemark(center, {
                        balloonContent: '111123, Москва, 1-я Владимирская, д.10А, стр. 1',
                        iconCaption: 'Энергия Плюс'
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
        min-height: 300px;
    }
</style>

{#if loaded === false}
    <h1>Загрузка карты...</h1>
    <progress class="progress is-small is-primary"></progress>
{/if}

<div class="map" bind:this={container}></div>