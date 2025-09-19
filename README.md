
## Требования
Для запуска проекта у вас должны быть установлен Docker

## Запуск

### Создайте файл `.env` на основе `.env.example`
### `composer install`
### `./vendor/bin/sail up -d` (далее просто sail)
### `sail artisan key:generate`
### `sail artisan migrate`
### `sail artisan db:seed`

## Доступ к приложению

* **Фронтенд**: `http://localhost:8000/`
* **БД**: `http://localhost:8080/`
