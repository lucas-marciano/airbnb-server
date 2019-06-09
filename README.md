# airbnb api rest

API build with AdonesJs, white authentication using JWT.

Models (for now):

1. User
2. Image
3. Property

>If you use Rails or Laravel, the AdonisJs is liked them. Using command line to build the elements of the project.

## Running

1. Install the AdonisJS

    ```bash
    npm i -g @adonisjs/cli
    ```

2. Rename the .env_exemple file to .env, and set the database configuration.

3. Run the migrations

    ```bash
    adonis migration:run
    ```

4. Run the server

    ```bash
    adonis serve --dev
    ```

## Observations

Install the extension, that are compatible with your database.

- MySQL: `npm install mysql`
- PostgreSQL: `npm install pg`
- SQLite: `npm install sqlite3`

```js
adonis migration:run
```

## Help

```bash
adonis --help
```
