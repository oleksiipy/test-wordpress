# Тестове завдання — Кандидат

**Репозиторій:** https://github.com/oleksiipy/test-wordpress

---

## Завдання 1. WordPress-сайт (геймінг)

### Результат
Папка `task1-wordpress/` містить весь контент та інструкції для налаштування.

### Структура

```
task1-wordpress/
├── content/
│   ├── home.md              — Контент головної сторінки
│   ├── about.md             — Сторінка "Про нас"
│   ├── blog/
│   │   ├── article1.md      — "Top 10 Gaming Trends 2026"
│   │   ├── article2.md      — "Best PC Builds Under $1000"
│   │   └── article3.md      — "Esports Revolution"
│   ├── contacts.md          — Контакти з формою
│   ├── privacy-policy.md    — Privacy Policy
│   ├── terms.md             — Terms of Use
│   └── cookie-policy.md     — Cookie Policy
├── setup-instructions.md    — Покрокова інструкція InfinityFree/WordPress
└── plugins-list.md          — Перелік плагінів та налаштувань теми Astra
```

### Що потребує ручного виконання
- Реєстрація акаунту на InfinityFree (без кредитної карти)
- Створення хостингу та безкоштовного піддомену
- Встановлення WordPress через Softaculous
- Встановлення теми Astra, плагінів
- Заповнення сторінок контентом з .md файлів

### Інструменти
- **WordPress** — CMS
- **Astra** — тема
- **InfinityFree** — безкоштовний хостинг
- **CookieYes** — cookie consent
- **Contact Form 7** — контактна форма
- **Yoast SEO** — SEO оптимізація
- **AI-генерація контенту** — ChatGPT/GLM для написання статей

---

## Завдання 2. AI-сайт хімчистки "CleanPro"

### Результат
Повний статичний сайт у папці `task2-dryclean/`. Відкрийте `index.html` у браузері.

### Структура

```
task2-dryclean/
├── index.html               — Головна сторінка
├── about.html                — Про нас
├── prices.html               — Прайс-лист
├── blog.html                 — Блог (6 статей)
├── contacts.html             — Контакти + форма-заглушка
├── privacy.html              — Політика конфіденційності
├── terms.html                — Умови використання
├── css/
│   └── style.css             — Адаптивні стилі
└── js/
    └── main.js                — Cookie consent, меню, форми
```

### Реалізовано
- **7 сторінок** — Головна, Про нас, Прайс, Блог, Контакти, Privacy, Terms
- **Адаптивний дизайн** — мобільний, планшет, десктоп ( breakpoints: 480px, 768px, 1024px)
- **Cookie notification banner** — з'являється через 1 сек, зберігає вибір у localStorage
- **Контактна форма-заглушка** — валідація, імітація відправки, повідомлення успіху
- **Мобільне меню** — бургер-меню з анімацією
- **Meta tags** — description, og:title, og:description, og:type, og:image
- **Header + Footer** — на кожній сторінці з навігацією
- **Сучасний дизайн** — чиста кольорова палітра, тіні, hover-ефекти

### Інструменти
- **HTML5/CSS3/JavaScript** — чистий код, без фреймворків
- **AI-генерація контенту** — текст для всіх сторінок
- **Unsplash** — безкоштовні зображення
- **VS Code** — редактор коду

---

## Завдання 3. Викачати новинний сайт

### Результат
Папка `task3-news/` містить очищену BBC-статтю та нову статтю у BBC-шаблоні.

### Структура

```
task3-news/
├── original-bbc.html         — Очищена стаття SpaceX (без реклами/кнопок)
├── new-article.html          — Нова стаття про геймінг у BBC-шаблоні
├── css/
│   └── bbc-style.css          — Чистий CSS у стилі BBC News
└── CHANGES.md                 — Детальний опис змін
```

### Що зроблено з оригінальною статтею

**Джерело:** https://www.bbc.com/news/articles/c2k35lg92dpo  
**Стаття:** "Elon Musk's SpaceX set to go public in $1 trillion share listing"

**Очищено від:**
- Всіх рекламних скриптів (Google Ads, Taboola, Permutive)
- Соціальних кнопок (Twitter, Facebook, WhatsApp)
- Навігаційних елементів BBC
- Cookie consent банерів та попапів
- Пов'язаних статей та рекомендацій
- Аналітичних скриптів (Comscore, Nielsen)
- Inline стилів та styled-components
- React/Next.js компонентів

**Збережено:**
- Заголовок, автор, дата
- Повний текст статті з абзацами та підзаголовками
- Цитати та тематичні теги

**Додано:**
- 2 тематичних зображення (Unsplash): SpaceX ракета та Starlink
- Семантична HTML розмітка
- Custom CSS у стилі BBC News

### Нова стаття

**Тема:** "Next-Gen Consoles 2027: Everything We Know About the Future of Gaming"  
**Структура:** H1 + 3 секції H2 + підзаголовки H3 + списки + цитати  
**Зображення:** 3 (Unsplash) — логічно вставлені у текст

### Інструменти
- **BBC News** — джерело оригінальної статті та шаблону
- **HTML5/CSS3** — створення чистого шаблону
- **Unsplash** — безкоштовні зображення
- **AI-генерація** — контент нової статті

---

## Загальний перелік інструментів

| Інструмент          | Призначення                          | Завдання |
|---------------------|--------------------------------------|----------|
| ChatGPT / GLM      | Генерація контенту                   | 1, 2, 3  |
| HTML5 / CSS3 / JS   | Верстка та інтерактивність           | 2, 3     |
| Unsplash            | Безкоштовні зображення               | 2, 3     |
| Git / GitHub        | Версіонування та доставка            | Всі      |
| VS Code             | Редактор коду                        | Всі      |
| WordPress + Astra   | CMS та тема                          | 1        |
| CookieYes           | Cookie consent для WordPress         | 1        |
| Contact Form 7      | Контактна форма для WordPress        | 1        |
| Namecheap / EasyWP  | Хостинг (альтернатива)               | 1        |
| InfinityFree         | Безкоштовний хостинг (рекомендовано) | 1        |

---

## Формат здачі

| Завдання | Формат             | Папка               |
|----------|---------------------|---------------------|
| 1        | Контент + інструкція | `task1-wordpress/` |
| 2        | Архів (HTML/CSS/JS) | `task2-dryclean/` |
| 3        | Архів (HTML/CSS)    | `task3-news/`      |

Всі файли доступні у репозитарії: https://github.com/oleksiipy/test-wordpress