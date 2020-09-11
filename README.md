## Web game "Race"

<img align="left" alt="js" width="100px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"/>
<img align="left" alt="node.js" width="100px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"/>
<img alt="electron" width="110px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/electron/electron.png"/>

## Описание
**"Race"** - небольшая браузерная игра "Гонки", в которую можно играть, когда нет интернета.

**Цель игры: ** набрать как можно больше очков и не врезаться в другие машинки.

**Набор очков: ** в зависимости от сложности игры (скорости движения других машинок) набираются очки. Иными словами, чем дольше играешь, тем больше очков заработаешь.

Игра заканчивается, когда происходит авария. 

## Запуск приложения

Есть два способа запуска игры. 

###1. Обычный запуск index.html
Для этого можно перетащить html-файл прямо на вкладку и браузер автоматически загрузит страницу.
Либо нажав правой кнопкой мыши на html-файл, выбрать "открыть с помощью" и выбрать браузер. 
Также можно открыть html-файл из ide. 

###2. Создание десктоп-приложения с использованием Electron

**Electron** - фреймворк, разработанный GitHub, позволяет разрабатывать нативные графические приложения для операционных систем с помощью веб-технологий. 

Фреймворк включает в себя Node.js для работы с back-end и библиотеку веб-рендеринга из Chromium. Поэтому **Electron** можно рассматривать как мини браузер Chromium, управляемый с помощью JavaScript.
                                                                                                 
Что бы превратить вашу операционную систему в окружение для создания Electron приложений, вам необходим Node.js, npm, любой редактор кода, и базовые знания работы с командной строкой вашей системы.

+ Для начала нужно скачать и установить [node.js](https://nodejs.org/en/download/)

    Откройте Terminal или другой клиент командной строки и убедитесь в том, что node и npm установлены:
    
    `node -v` - выводит текущую версию Node.js;
    
    `npm -v` - выводит текущую версию npm

+ Создадим пустую папку для Electron приложения. 

    Для этого в терминале нужно прописать команду `npm init` 

+ Установим [Electron](https://www.electronjs.org/) :
 
    `npm i -D electron@latest` 
 
Всё, мы установили всё необходимое, поэтому переходим к самомоу запуску приложения: `npm start`

Если вы сделали всё правильно, то вы увидите это:

<img align="left" alt="main" width="200px" src="https://sun4-12.userapi.com/SoLWDrDxZubEEdTzRKM6pRWMzzuCKaJSGyNjbQ/HA0u8f88nog.jpg"/>
<img align="left" alt="game" width="195px" src="https://sun4-15.userapi.com/75o09M9LMYQ8_qDxGNmQ8qoImv75RKBqU9Vj0Q/dYcvNVJxGas.jpg" />
<img alt="game" width="200px" src="https://sun4-15.userapi.com/bZUJ7qCAe7eWe5OEVQaUX0EdtqiZ7F_cfLGNhA/zdh_xeIynwc.jpg"/>

## Что почитать?
 
+ [Документация по Electron](https://www.electronjs.org/docs)
