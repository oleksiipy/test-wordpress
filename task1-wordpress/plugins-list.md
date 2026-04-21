# Plugins & Settings — GamePulse

## Обов'язкові плагіни

### 1. CookieYes | GDPR Cookie Consent
- **Версія:** Free (з репозиторію WordPress)
- **Призначення:**Cookie consent банер відповідно до GDPR
- **Налаштування:**
  - Position: Bottom banner
  - Animations: Slide up
  - Button text: "Прийняти всі cookie"
  - Колір: Відповідає кольоровій схемі сайту
  - Типи cookie: Necessary (увімкнено), Analytics (opt-in), Marketing (opt-in)

### 2. Contact Form 7
- **Версія:** Free
- **Призначення:** Контактна форма
- **Налаштування:**
  ```
  [text* your-name placeholder "Ваше ім'я"]
  [email* your-email placeholder "Ваш email"]
  [select* your-subject "Загальне питання" "Співпраця" "Реклама" "Стати автором" "Інше"]
  [textarea* your-message placeholder "Ваше повідомлення"]
  [submit "Надіслати"]
  ```
- **Mail настройки:** Відправляти на hello@gamepulse.com

### 3. Yoast SEO
- **Версія:** Free
- **Призначення:** SEO оптимізація
- **Налаштування:**
  - Site type: Blog
  - Organization: GamePulse
  - Social profiles: Twitter, YouTube, Telegram
  - Meta templates:
    - Homepage: %%sitename%% — %%tagline%%
    - Posts: %%title%% — GamePulse
    - Pages: %%title%% — GamePulse

### 4. WP Super Cache
- **Версія:** Free
- **Призначення:** Кешування сторінок
- **Налаштування:** Увімкнути Caching, Recommended settings

### 5. Wordfence Security
- **Версія:** Free
- **Призначення:** Захист від взлому
- **Налаштування:**
  - Firewall: Enabled
  - Login Security: 2FA для адміна
  - Scan: Daily

## Рекомендовані додаткові плагіни

| Плагін | Призначення |
|--------|-------------|
| Astra Starter Templates | Шаблони для швидкого старту |
| Elementor (Free) | Візуальний редактор сторінок |
| Smush | Стиснення зображень |
| WP Mail SMTP | Надійна відправка email |
| UpdraftPlus | Бекапи |

## Налаштування теми Astra

### Кольорова палітра
| Елемент | Колір | HEX |
|---------|-------|-----|
| Фон (головний) | Темно-синій | #1a1a2e |
| Фон (картки) | Темно-сірий | #16213e |
| Акцент | Червоний | #e94560 |
| Текст (основний) | Білий | #ffffff |
| Текст (другорядний) | Світло-сірий | #a3a3a3 |
| Фон футер | Чорний | #0f0f23 |

### Типографіка
- **Заголовки:** Inter Bold / System Bold
- **Основний текст:** Inter Regular
- **Розмір заголовка H1:** 48px
- **Розмір заголовка H2:** 36px
- **Розмір тексту:** 16px
- **Міжрядковий інтервал:** 1.7

### Header
- Layout: Stack (на мобильних), Inline (на десктопі)
- Logo зліва, навігація справа
- Sticky header: так
- Mobile menu: hamburger

### Footer
- 3 колонки: Про нас | Навігація | Контакти
- Нижній бара: © 2026 GamePulse. Всі права захищені.
- Посилання на: Privacy Policy | Terms | Cookie Policy