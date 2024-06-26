# Гослото 8 из 19

У игры есть два поля: в первом поле 19 клеток, во втором - 2 клетки. От участника лотереи требуется отметить в первом поле восемь цифр, во втором одну цифру.
При вычислении результата сравниваются массивы с отмеченными участником числам и массивы со случайно сгенерированными числами. В случае совпадения четырех и более цифр в первом поле, либо трех и более чисел в первом поле и одного во втором, пользователь считается победителем лотереи.

## Ссылка

https://sergeydubovoy.github.io/gosloto_8_19/

## Использованные технологии

- Язык: **TypeScript**
- Основная библиотека: **React**
- Стейт-менеджмент: **MobX**
- Сборщик: **Vite**
- Стилизация: **Styled Components**
- Работа с API: **Axios**
- Линтер: **ESLint**
- Форматтер: **Prettier**

## Запуск приложения

Клон репозитория

```bash
  git clone https://github.com/sergeydubovoy/gosloto_8_19
```

Установка зависимостей

```bash
  npm i
```

Режим разработки

```bash
  npm run dev
```

Билд

```bash
  npm run build
```

Деплой

```bash
  npm run deploy
```

## Фичи

- **Выбор случайных номеров.** При клике на кнопку **Волшебная палочка**, рандомно выбираются номера в полях.
- **Проверка результата.** После выбора требующегося количества номеров становится доступна кнопка **Показать результат**. При клике на эту кнопку, генерируются два рандомных массива, которые затем сравниваются с массивами выбранных номеров и возвращают результат сравнения.
- **Отправка результата на сервер.** После сравнения массивов формируется объект из массивыов с выбранными номерами и статусом победы билеты, который затем отправляется на сервер.
- **Получение результата.** После ответа сервера пользователь видит сообщение информацией о статусе его билета - выигрыш или проигрыш.
- **Адаптивная верстка.** Приложение правильно отображается и на десктопах, и на мобильных устройствах.
- **Дополнительно.** Стандартные правила линтера, конфиг prettier, алиасы для импортов, деплой в gh-pages, склонение слов в счетчике.
