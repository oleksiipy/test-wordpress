# Setup Instructions — GamePulse на WordPress

## Покрокова інструкція з налаштування сайту

---

### Крок 1: Реєстрація на Namecheap

1. Перейдіть на **namecheap.com**
2. Натисніть "Sign Up" та створіть акаунт
3. Підтвердьте email

### Крок 2: Створення безкоштовного хостингу (EasyWP)

1. У панелі Namecheap перейдіть у розділ **Hosting → EasyWP**
2. Виберіть план **EasyWP Starter** (безкоштовний на 30 днів)
3. Виберіть або зареєструйте домен (можна використати безкоштовний .cyou або .xyz)
4. Дочекайтеся активації (2-5 хвилин)
5. Натисніть "Manage" для доступу до WordPress-панелі

### Крок 3: Налаштування WordPress

1. Увійдіть у WordPress-адмінку (yourdomain.com/wp-admin)
2. Перейдіть у **Settings → General**:
   - Site Title: **GamePulse**
   - Tagline: **Світ ігор у твоєму ритмі**
   - Language: **Українська** (якщо є) або **English**
   - Timezone: **Kyiv (UTC+2/3)**

3. Перейдіть у **Settings → Permalinks**:
   - Виберіть **Post name** (`/sample-post/`)

### Крок 4: Встановлення теми Astra

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

### Крок 5: Встановлення обов'язкових плагінів

| Плагін | Призначення | Налаштування |
|--------|-------------|--------------|
| **CookieYes | GDPR Cookie Consent** | Cookie consent банер | Увімкнути, налаштувати текст українською, вибрати позицію "Bottom" |
| **Contact Form 7** | Контактна форма | Створити форму з полями: Ім'я, Email, Тема, Повідомлення |
| **Yoast SEO** | SEO оптимізація | Налаштувати meta titles та descriptions для кожної сторінки |
| **WP Super Cache** | Кешування | Увімкнути для швидкодії |
| **Wordfence Security** | Безпека | Увімкнути firewall та сканування |

### Крок 6: Створення сторінок

Створіть наступні сторінки (**Pages → Add New**):

1. **Головна** — використати контент з `content/home.md`
2. **Про нас** — використати контент з `content/about.md`
3. **Блог** — створити сторінкуBlog (або використати стандартну)
4. **Контакти** — використати контент з `content/contacts.md` + Contact Form 7
5. **Privacy Policy** — використати контент з `content/privacy-policy.md`
6. **Terms of Use** — використати контент з `content/terms.md`
7. **Cookie Policy** — використати контент з `content/cookie-policy.md`

**Settings → Reading:** Виберіть "A static page" → Головна = "Головна", Posts page = "Блог"

### Крок 7: Публікація статей

Створіть 3 статті (**Posts → Add New**):

1. "Top 10 Gaming Trends 2026" — контент з `content/blog/article1.md`
2. "Best PC Builds Under $1000" — контент з `content/blog/article2.md`
3. "Esports Revolution" — контент з `content/blog/article3.md`

Додайте: зображення, категорії, теги, та excerpt.

### Крок 8: Перевірка перед запуском

- [ ] Всі сторінки доступні та працюють
- [ ] Контактна форма відображається коректно
- [ ] Cookie банер з'являється при першому відвідуванні
- [ ] Мобільна адаптивність (перевірити на телефоні)
- [ ] SEO meta tags заповнені (Yoast)
- [ ] Швидкість завантаження прийнятна (PageSpeed Insights)
- [ ] Немає битих посилань
- [ ] Політики доступні з футера