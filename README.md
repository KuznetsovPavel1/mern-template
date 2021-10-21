# **MERN template**

Шаблон проекта на стеке [**M**ongoDB](https://www.mongodb.com) + [**E**xpress](https://expressjs.com) + [**R**eact](https://reactjs.org) + [**N**ode.js](https://nodejs.org/en/)  
Frontend сборщик - [Webpack](https://webpack.js.org)

## **Содержание**

1. [Быстрый старт](#1-быстрый-старт)
2. [Настройки](#2-настройки)
3. [Установка приложения в автозагрузку на Windows](#3-установка-приложения-в-автозагрузку-на-windows)

---

---

## **1. Быстрый старт**

<details><summary><strong>CLI</strong></summary>  
>>>
**Установка зависимостей для сервера `./` и клиента `./client/`**  
```sh
npm i
```
___
**Запуск сервера**  
```sh
npm run server
``` 
___
**Запуск клиента**  
```sh
npm run client
```
___
**Запуск сервера и клиента одновременно**  
```sh
npm run dev
```
___
**Сборка клиента**  
```sh
npm run client-build
``` 
>>>
</details>

---

---

## **2. Настройки**

<details><summary><strong>Сервер</strong></summary>

> `./config/connect.js`
>
> ```js
> export default {
>   mongoURI: "", //адрес БД
>   portConst: 80, //порт сервера
>   reconnectDB: 3000, //интервал переподключения к БД (сек)
> };
> ```

</details>

<details><summary><strong>БД</strong></summary>

> `./config/default.json`  
> `./config/production.json`
>
> ```json
> {
>   "jwtSecret": "",
>   "user": "",
>   "pass": ""
> }
> ```

</details>

<details><summary><strong>Клиент</strong></summary>

> `./client/src/config/connect.js`
>
> ```js
> export default {
>   localhost: "127.0.0.1", //адрес сервера
>   portConst: 80, //порт сервера
> };
> ```

</details>

---

---

## **3. Установка приложения в автозагрузку на Windows**

<details><summary><strong>Создание службы</strong></summary>

> `./services/serviceInstall.js`
>
> ```js
> const svc = new Service.Service({
>   name: "", //название службы
>   description: "", //описание службы
>   script: path.join(__dirname, "server.js"), //путь к скрипту
> });
> ```
>
> ```sh
> node serviceInstall.js
> ```

</details>

---

<details><summary><strong>Удаление службы</strong></summary>

> `./services/serviceUninstall.js`
>
> ```js
> const svc = new Service.Service({
>   name: "", //название службы
>   script: path.join(__dirname, "server.js"), //путь к скрипту
> });
> ```
>
> ```sh
> node serviceUninstall.js
> ```

</details>

---
