export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number,
    image: string,
    ref: string
  }
  
  export const products = [
    {
      id: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/h71/64081828085790.jpg?format=preview-large',
      name: 'Maurice Lacroix',
      price: 858,
      description: 'способ отображения времени: аналоговый (стрелки) ' +
          'тип: кварцевые ' +
          'материал корпуса: сталь ' +
          'противоударные: Нет ' +
          'для кого: для мужчин ' +
          'цвет: черный',
      rating: 10,
      ref: 'https://kaspi.kz/shop/p/kvartsevye-maurice-lacroix-ai1018-ss001-330-1-stal--101536013/?c=750000000'
    },
    {
      id: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8a/h33/63816324382750.jpg?format=gallery-medium',
      name: 'ORIS',
      price: 1150,
      description: 'способ отображения времени: аналоговый (стрелки) ' +
          'тип: механические ' +
          'материал корпуса: сталь ' +
          'противоударные: Нет ' +
          'для кого: для мужчин ' +
          'цвет: синий, ,черный',
      rating: 9,
      ref: 'https://kaspi.kz/shop/p/mehanicheskie-oris-01-798-7754-4135-07-4-24-64eb-stal--21409627/?c=750000000'
    },
    {
      id: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h99/h4d/80136126431262.jpg?format=gallery-medium',
      name: 'Bomberg',
      price: 816,
      description: 'способ отображения времени: аналоговый (стрелки) ' +
          'тип: механические ' +
          'материал корпуса: нержавеющая сталь ' +
          'для кого: для мужчин ' +
          'цвет: черный, ,красный',
      rating: 8,
      ref: 'https://kaspi.kz/shop/p/mehanicheskie-bomberg-bb-01-automatic-red-43-bomberg-nerzhavejuschaja-stal--109910270/?c=750000000'
    },
    {
      id: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/hcb/64029198123038.jpg?format=gallery-medium',
      name: 'CASIO ',
      price: 507,
      description: 'тип: кварцевые ' +
          'материал корпуса: сталь, ,полимер ' +
          'для кого: для мужчин ' +
          'цвет: черный',
      rating: 9,
      ref: 'https://kaspi.kz/shop/p/kvartsevye-casio-gwg-2000-1a1-stal-polimer-103304093/?c=750000000'
    },
    {
      id: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h41/84664359288862.jpg?format=gallery-medium',
      name: 'CIGA ',
      price: 644,
      description: 'способ отображения времени: аналоговый (стрелки) ' +
          'тип: механические ' +
          'материал корпуса: титан ' +
          'для кого: для мужчин ' +
          'цвет: синий',
      rating: 10,
      ref: 'https://kaspi.kz/shop/p/mehanicheskie-ciga-design-u031-tu02-w6u-titan-112626420/?c=750000000'
    },
    {
      id: 6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h80/hc8/83594035626014.jpg?format=gallery-medium',
      name: 'DAVOSA',
      price: 513,
      description: 'способ отображения времени: аналоговый (стрелки) ' +
          'тип: механические ' +
          'материал корпуса: сталь ' +
          'цвет: синий ' +
          'для кого: для мужчин',
      rating: 7,
      ref: 'https://kaspi.kz/shop/p/mehanicheskie-davosa-16155940-stal--113175783/?c=750000000'
    },
    {
      id: 7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h82/h7b/83144433893406.jpg?format=gallery-medium',
      name: 'Orient RE',
      price: 970,
      description: 'способ отображения времени: аналоговый (стрелки) ' +
          'тип: механические ' +
          'материал корпуса: нержавеющая сталь ' +
          'для кого: для мужчин ' +
          'цвет: черный',
      rating: 9,
      ref: 'https://kaspi.kz/shop/p/mehanicheskie-orient-re-av0a03b00b-nerzhavejuschaja-stal--112844343/?c=750000000'
    },
    {
      id: 8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h24/64309564309534.jpg?format=gallery-medium',
      name: 'Raymond Wei',
      price: 950,
      description: 'способ отображения времени: аналоговый (стрелки) ' +
          'тип: механические ' +
          'материал корпуса: сталь ' +
          'противоударные: Нет ' +
          'для кого: для мужчин ' +
          'цвет: бронзовый',
      rating: 8,
      ref: 'https://kaspi.kz/shop/p/mehanicheskie-raymond-weil-2227stc00808-stal--101877934/?c=750000000'
    },
    {
      id: 9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/h83/64064628064286.jpg?format=gallery-medium',
      name: 'Maurice Lacroix',
      price: 1023,
      description: 'способ отображения времени: аналоговый (стрелки) ' +
          'тип: кварцевые ' +
          'материал корпуса: сталь ' +
          'противоударные: Нет ' +
          'для кого: для мужчин ' +
          'цвет: серый',
      rating: 9,
      ref: 'https://kaspi.kz/shop/p/mehanicheskie-raymond-weil-2239stc00509-stal--101153801/?c=750000000'
    },
    {
      id: 10,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/hbc/63774073356318.jpg?format=gallery-medium',
      name: 'Tissot Ballade',
      price: 573,
      description: 'способ отображения времени: аналоговый (стрелки) ' +
          'тип: механические ' +
          'материал корпуса: сталь ' +
          'противоударные: Нет ' +
          'для кого: для мужчин ' +
          'цвет: серебристый',
      rating: 7,
      ref:'https://kaspi.kz/shop/p/mehanicheskie-tissot-ballade-t108-408-11-037-00-stal--21406926/?c=750000000'
    },
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */