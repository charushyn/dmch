'use client'

class Service{
    constructor(iconUrl, showText, detailText, detailPhoto, id){
        this.iconUrl = iconUrl
        this.showText = showText
        this.detailText = detailText
        this.detailPhoto = detailPhoto
        this.id = id
    }
}

const services = []

services.push(new Service(
    './documents.svg',
    'Анализ финансовых договоров', 
    'Да, у нас есть прямой доступ ко страховым компания которые предаставляют такой вид страхования для иностранце на сумму 30 000 эвро. Цена за такое страхование стартует от 100 зл.',
    './documentsD.png',
    services.length))
services.push(new Service(
    './persons.svg',
    'Создание финансового плана для семьи',
    'Да, у нас есть прямой доступ ко страховым компания которые предаставляют такой вид страхования для иностранце на сумму 30 000 эвро. Цена за такое страхование стартует от 100 зл.',
    './personsD.png',
    services.length,
))
services.push(new Service(
    './currency.svg',
    'Страховой консалтинг',
    'Да, у нас есть прямой доступ ко страховым компания которые предаставляют такой вид страхования для иностранце на сумму 30 000 эвро. Цена за такое страхование стартует от 100 зл.',
    './currencyD.png',
    services.length,
))
services.push(new Service(
    './bank.svg',
    'Кредитный консалтинг',
    'Да, у нас есть прямой доступ ко страховым компания которые предаставляют такой вид страхования для иностранце на сумму 30 000 эвро. Цена за такое страхование стартует от 100 зл.',
    './bankD.png',
    services.length,
))
services.push(new Service(
    './investion.svg',
    'Инвестиции / Накопленные',
    'Да, у нас есть прямой доступ ко страховым компания которые предаставляют такой вид страхования для иностранце на сумму 30 000 эвро. Цена за такое страхование стартует от 100 зл.',
    './investionD.png',
    services.length,
))
services.push(new Service(
    './coins.svg',
    'Преемственность и Наследование',
    'Да, у нас есть прямой доступ ко страховым компания которые предаставляют такой вид страхования для иностранце на сумму 30 000 эвро. Цена за такое страхование стартует от 100 зл.',
    './coinsD.png',
    services.length,
))
services.push(new Service(
    './person.svg',
    'Обслуживание Юр.лиц',
    'Да, у нас есть прямой доступ ко страховым компания которые предаставляют такой вид страхования для иностранце на сумму 30 000 эвро. Цена за такое страхование стартует от 100 зл.',
    './personD.png',
    services.length,
))
services.push(new Service(
    './house.svg',
    'Недвижимость',
    'Да, у нас есть прямой доступ ко страховым компания которые предаставляют такой вид страхования для иностранце на сумму 30 000 эвро. Цена за такое страхование стартует от 100 зл.',
    './houseD.png',
    services.length,
))
services.push(new Service(
    './Leasing.svg',
    'Лизинг',
    'Да, у нас есть прямой доступ ко страховым компания которые предаставляют такой вид страхования для иностранце на сумму 30 000 эвро. Цена за такое страхование стартует от 100 зл.',
    './LeasingD.png',
    services.length,
))

export default services;