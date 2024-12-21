Студент: Яруллин Степан Михайлович
Группа: M3305
Тема: Сайт-галерея карточек человека-паука

Лабораторные работы на первый семестр курса Web-разработки.

# Лабораторная 1
Данная лабораторная подразумевает создание макета сайта без использования знаний CSS, только HTML. Создаем сайт резюме - портфолио. Главная задача данной лабораторной работы - ознакомиться с наиболее значимыми тегами и правилами их использования.

- [x] Установить любой текстовый редактор или же специализированное ПО
- [x] Определиться с темой проекта и нарисовать макет вашего сайта (схематично) - расположение картинок, текста, поля контактов. Картинку также положить в гит репозиторий (Можно фотографию рисунка на листочке)
    **Пример**: В качестве темы подойдут: портфолио с галереей, интернет-магазин, гостевая книга, блог и т.п.
- [x] Задать кодировку страницы  UTF-8
- [x] Описать ключевые слова в метаинформации страницы, а также в описании страницы
- [x] Для упрощения проектирования подключить файл стилей outlines.css (опционально)

### Приступить к написанию сайта:
- [x] Добавить Doctype
- [x] Добавить теги <html>,<head>и<body>,
- [x] Установить язык для сайта-русский
- [x] Добавить заголовок страницы
- [x] Убедиться что в readme.md указана ваше ФИО и номер группы, добавить выбранную тему.
- [x] Выделить логические элементы вашего сайта с помощью  тегов *main*, *header*, *footer*
- [x] Использовать теги *section*, *nav*, *article*, *aside*, *h1*-*h6*, *p* - согласно их предназначению. (смотреть [лекцию](https://drive.google.com/file/d/1LvmeIKXENLtoJ4SHW_SSMg6NmJ9aXjb-/view))
- [x] Использовать теги перечисления (*ul*, *ol*) (например, для описание ваших успехов или неуспехов).
- [x] Вставить блок с псевдографикой из символов ASCII
- [x] Вставить snippet кода, оформив его соответствующими тегами.
- [x] Добавить цитату и формулу вашего успеха (желательно использовать тэги *sub* и *sup*)
- [x] Для выделения наиболее важных моментов использовать *strong* и *b*, *em* и *i*, *del* и *ins*
 

*Если имеется понимание, для чего нужен *div* и *span* - использовать, если нет, то начать изучать вопрос)

**Цель работы** - создание макета и наполнение его информацией. Если один-два подпункта из 6 пункта кажутся избыточными, и вы сможете доказать, почему на вашем сайте они не нужны (возможно предложив другие пункты) - на финальный балл не повлияет.
Для большей простоты выделения элементов и понимания их расположения предлагается использовать https://github.com/ArtMan-8/outline-prototype или аналоги.


# Лабораторная 2
**Цель лабораторной** - научиться создавать и привязывать стили для элементов html. Про размещение элементов пока можно не думать, необходимо достичь эффекта, при котором отдельно взятый элемент смотрится законченным, красивым и приятным глазу. При этом вместе эти элементы не пестрят разными красками. Советую использовать сервисы по сочетаемости цветом - перед началом выполнения лабораторной определиться со стилистикой вашего сайта.
Например: https://color.adobe.com/ru/

На той же странице, написанной в рамках первой лабораторной работы:
- [x] Создать и подключить собственный файл стилей
- [x] Добавить стили всем элементам на странице (границы - отступы и шрифты). 
- [x] Должны быть использованы различные по типу селекторы. (Желательно по какой-либо конкретной методологии, например БЭМ)
- [x] Добавить картинки.
- [x] Определить цвета заливки и теней для элементов (shadow drop)

- [x] Применить стили для текста, задать свойства:
    + размера шрифта
    + высоты строки
    + семейство используемых шрифтов
    + насыщенность шрифта
    + выравнивание текста (горизонтальное, вертикальное)
    + фон и цвет текста
    + отступы
    + пробелы
    + стилизация  переформатированного текста
    + подчеркивание, зачеркивание и  другие
    + регистр символов

# Лабораторная 3
Произвести выравнивание всех ранее описанных элементов вашего сайта используя удобный для вас способ - флексы или флоты либо применить 12-ти столбчатую вёрстку. Обязательное наличие горизонтальных и вертикальных рядов элементов. Если у вас до этого не было - всегда можно добавить – например, галерею с картинками.
Также необходимо проработать то, как ваш макет будет выглядеть на различных мониторах (на маленьком ноутбуке, полноценном Full HD, 2K монитор). Выбрать элементы, которые не будут отображаться на маленьких мониторах, например, рекламный баннер во всю длину footer’a.

Использовать css-правила @media screen для скрытия элементов не умещающихся в клиентскую область
Закрепить элемент с помощью абсолютного позиционирования - например строку меню либо шапку или подвал сайта.
Добавить на страницу таблицу с заголовками и стилями для чётных и нечётных строк. В качестве типа отображения таблицы рекомендуется воспользоваться grind’ом, для достижения лучшей адаптивности. (т.е. необходимо добиться того, чтобы колонки таблицы изменяли свой размер в зависимости от размера окнаха)
пример:


# Лабораторная 4

Цель лабораторной работы – научится взаимодействовать со элементами и браузером используя встроенной скриптовой движок JavaScript.

- [x] Добавить новые страницы для вашего проекта, согласно пунктам меню в шапке сайта.
Создать скрипт, который будет выполняться на каждой странице, добавить его в отдельную папку и подключить в разделе <head> ваших страниц.
Используя IIFE, подписаться на события загрузки страницы и вывести в подвал статистическую информацию о скорости загрузки:

- [x] Добавить интерактивности меню, обработать события наведения мыши на конкретные пункты с использованием CSS либо JS.

- [x] В зависимости от того, на какой странице находится пользователь (можно понять по document.location) добавить соответствующему пункту меню CSS class, отвечающий за «активное» состояние (см. пример выше).

# Лабораторная 5

Целью работы заключается в получении практических навыков по созданию разметки во время выполнения (in runtime).

- [ ] Необходимо создать отдельную страницу с Web-формой, в которой пользователь с помощью предложенных параметров мог бы создать таблицу по некоему шаблону, например, расписание занятий на 5-ти дневную либо 6-ти дневную неделю, выбрать максимальное количество занятий, язык на котором будет сгенерирована таблица и тому подобное.

    Примерный ожидаемый результат лабораторной работы на примере проекта «список дел»: https://i.imgur.com/y5m4LyI.gif

- [ ] Создать отдельную страницу и отдельный файл со скриптом, добавить ссылку на «конструктор» в меню.
Добавить <form> на новую страницу и <div> контейнер куда будут размещены результаты генерации.
Обработать событие отправки формы (перехватить событие onSubmit) и без перезагрузки страницы отобразить результат генерации
Предусмотреть возможность сохранения и загрузки введенных пользователем параметров в локальное хранилище браузера пользователя (читай как LocalStorage).

    Для стилизации элементов не используйте атрибуты style, предпочтительно использование атрибутов class из вашего заранее созданного файла со стилями.

# Лабораторная 6

Цель лабораторной работы – познакомиться с сущностью Promise и научится создавать http-запросы и корректно обрабатывать ответы.

- [x] В качестве практикума студентам предлагается добавить «живых» данных на уже имеющийся прототип. В качестве поставщика данных использовать сервис с Mock данными, например: JSONPlaceholder


- [x] Перед началом работы необходимо выбрать ту часть проекта, в которую в дальнейшем будут загружаться данные. Это может быть профиль пользователя, прошедшего авторизацию, комментарии под той или иной фото в галерее, список пользователей в одной из уже созданных таблиц и т.п.

    В качестве данных, которые предоставляет сервис из примера, предлагается 6 видов ресурсов на выбор:
    + **Сообщения для гостевой книги/форума** 
    (Поля: body (само сообщение), title (заголовок)
    + **Комментарии под фото либо любым другим материалом**
    (Поля: name (автор комментария), email (email автора комментария), body (комментарий)
    + **Альбомы и фотографии**
    (Поля: title (название), thumbnailUrl (ссылка на маленькое изображение), url (ссылка на изображение))
    + **Список дел**
    (Поля: title (описание), completed (boolean флаг))
    + **Пользователи**
    (Поля: username, name, email, address, phone, website, company)

- [x] Добавить отдельный скрипт и подключить на страницу где подразумевается сетевое взаимодействие.
- [x] Добавить gif-анимацию либо свою произвольную css-анимацию для элемента типа preloader под элементом где планируется отобразить запрашиваемый контент 
- [x] Дождаться события загрузки страницы и инициализовать обращение к поставщику данных используя Fetch API (https://developer.mozilla.org/ru/docs/Web/API/Fetch_API)
- [x] После получения ответа, скрыть preloader, десериализовать данные в JSON объект и отрендерить полученные данные.
- [x] Добавить псевдо-случайную фильтрацию к запросам (например при первом обращении получать комментарии с id 100 и выше, а при втором c id 200 и меньше).
- [x] Добавить обработку ошибок (например – сеть перестала быть доступна и запрос не был выполнен), в случае исключительной ситуации добавить под элементом заплатку, например, «⚠ Что-то пошло не так».

# Лабораторная 7

Целью лабораторной работы является изучение продвинутых практик взаимодействия с DOM и CSS с использованием подключаемых JS библиотек.

Студентам предлагается продемонстрировать умения работы со сторонними API популярных библиотек.

- [ ] Выберите одну – две UI библиотеки которые можно интегрировать в ваш проект из предложенного списка: https://github.com/sorrycc/awesome-javascript

    Например: Модальное окно + Toster
    + 
    Либо: Слайдер для вашей галереи
    https://swiperjs.com/demos/130-centered/core.html



- [ ] Опишите use-case сценарий с использованием выбранных библиотек и реализуйте его.

- [ ] Добавьте комментарии в JS-коде перед вызовами сторонних библиотек с указанием того какой аргумент функции для чего используется и как именно вы конфигурируете ту или иную часть библиотеки.

- [ ] Добавьте стилизацию подключенных компонентов, чтобы они не выбивались из уже используемой цветовой палитры вашего проекта.

 * Лабораторная работа скорее творческая и поможет добрать недостающие баллы если подключенные библиотеки будет использованы качественно в полном объеме предлагаемых возможностей. (т.е. подключение всего Bootstrap фреймворка ради одного элемента внутри таблички не выглядит оправданным)
