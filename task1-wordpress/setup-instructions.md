# Setup Instructions — GamePulse на WordPress

## Покрокова інструкція з налаштування сайту

---

### Крок 1: Реєстрація на InfinityFree

1. Перейдіть на **infinityfree.com**
2. Натисніть **Sign Up** та створіть акаунт (без кредитної карти)
3. Підтвердьте email

### Крок 2: Створення хостингу та встановлення WordPress

1. У панелі керування натисніть **Create Account** або **New Account**
2. Виберіть безкоштовний піддомен:
   - Варіанти: `gamepulse.rf.gd`, `gamepulse.epizy.com` або `gamepulse.infinityfree.com`
   - Або прив'яжіть власний домен (якщо є)
3. Виберіть пароль та підтвердьте створення
4. Дочекайтеся активації акаунта (до 24 годин, зазвичай 5-10 хвилин)
5. Перейдіть до **Control Panel** вашого хостингу

### Крок 3: Встановлення WordPress через Softaculous

1. У панелі керування знайдіть іконку **Softaculous Apps Installer**
2. Знайдіть **WordPress** у списку додатків
3. Натисніть **Install Now**
4. Заповніть налаштування:
   - **Site Name:** GamePulse
   - **Site Description:** Світ ігор у твоєму ритмі
   - **Admin Username:** оберіть надійний логін
   - **Admin Password:** оберіть надійний пароль
   - **Admin Email:** ваш email
   - **Language:** Ukrainian (якщо є) або English
5. Натисніть **Install** та дочекайтеся завершення (1-2 хвилини)
6. Запишіть збережені дані для входу (визначено URL адмінки)

### Крок 4: Налаштування WordPress

1. Увійдіть у WordPress-адмінку (yourdomain.com/wp-admin)
2. Перейдіть у **Settings → General**:
   - Site Title: **GamePulse**
   - Tagline: **Світ ігор у твоєму ритмі**
   - Language: **Українська** (якщо є) або **English**
   - Timezone: **Kyiv (UTC+2/3)**

3. Перейдіть у **Settings → Permalinks**:
   - Виберіть **Post name** (`/sample-post/`)

### Крок 5: Встановлення теми Astra

1. Перейдіть у **Appearance → Themes → Add New**
2. Знайдіть **Astra** та натисніть "Install"
3. Активуйте тему
4. Встановіть Starter Templates плагін (якщо пропонується)
5. Виберіть шаблон **"Online Learning"** або **"Blog"** як базовий

#### Рекомендації налаштування Astra:

- **Customize → Colors:** Темна тема (#1a1a2e фон, #e94560 акцент, #ffffff текст)
- **Customize → Typography:** Inter або Roboto для основного тексту
- **Customize → Header:** Логотип GamePulse + навігація (Головна, Про нас, Блог, Контакти)
- **Customize → Footer:** Копірайт + посилання на политики

### Крок 6: Встановлення обов'язкових плагінів

| Плагін | Призначення | Налаштування |
|--------|-------------|--------------|
| **CookieYes | GDPR Cookie Consent** | Cookie consent банер | Увімкнути, налаштувати текст українською, вибрати позицію "Bottom" |
| **Contact Form 7** | Контактна форма | Створити форму з полями: Ім'я, Email, Тема, Повідомлення |
| **Yoast SEO** | SEO оптимізація | Налаштувати meta titles та descriptions для кожної сторінки |
| **WP Super Cache** | Кешування | Увімкнути для швидкодії |
| **Wordfence Security** | Безпека | Увімкнути firewall та сканування |

### Крок 7: Створення сторінок

Створіть наступні сторінки (**Pages → Add New**):

1. **Головна** — використати контент з `content/home.md`
2. **Про нас** — використати контент з `content/about.md`
3. **Блог** — створити сторінкуBlog (або використати стандартну)
4. **Контакти** — використати контент з `content/contacts.md` + Contact Form 7
5. **Privacy Policy** — використати контент з `content/privacy-policy.md`
6. **Terms of Use** — використати контент з `content/terms.md`
7. **Cookie Policy** — використати контент з `content/cookie-policy.md`

**Settings → Reading:** Виберіть "A static page" → Головна = "Головна", Posts page = "Блог"

### Крок 8: Публікація статей

Створіть 3 статті (**Posts → Add New**):

1. "Top 10 Gaming Trends 2026" — контент з `content/blog/article1.md`
2. "Best PC Builds Under $1000" — контент з `content/blog/article2.md`
3. "Esports Revolution" — контент з `content/blog/article3.md`

Додайте: зображення, категорії, теги, та excerpt.

### Крок 9: Перевірка перед запуском

- [ ] Всі сторінки доступні та працюють
- [ ] Контактна форма відображається коректно
- [ ] Cookie банер з'являється при першому відвідуванні
- [ ] Мобільна адаптивність (перевірити на телефоні)
- [ ] SEO meta tags заповнені (Yoast)
- [ ] Швидкість завантаження прийнятна (PageSpeed Insights)
- [ ] Немає битих посилань
- [ ] Політики доступні з футера