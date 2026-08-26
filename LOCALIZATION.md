# Локализация проекта (RU ↔ EN)

> Полная архитектурная и техническая документация находится в корневом файле:  
> **[LOCALIZATION.md](file:///d:/devel/eplus/LOCALIZATION.md)**

### Краткая сводка:
- **Фронтенд i18n:** `src/lib/i18n/` (`index.js`, `ru.json`, `en.json`, `pages/*.json`)
- **Роутинг и перехват:** `src/hooks.js` (префикс `/en/` определяет локаль `en`, без префикса — `ru`)
- **Layout & переключение:** `src/routes/__layout.svelte`, `Navbar.svelte` (кнопка `RU | EN`)
- **База данных CMS:** Все 766 записей в Strapi переведены на английский язык (`en`)
- **API эндпоинты:** `src/routes/ep/*.json.js` передают параметр `locale` в GraphQL-запросы к Strapi.
