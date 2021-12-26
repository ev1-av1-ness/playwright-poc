# NB!
1. Склонировать репозиторий
2. Использовать команду в локальной директории

```
cd js-autotests-playwright
npm install
```
3. Установить yarn

```
brew install yarn
```

4. Запустить yarn в локальной директории

```
yarn
```
## Запустить тесты локально

```
yarn web
yarn mweb
```
### Параметры

```
--debug
--headed
--browser=firefox
--browser=webkit
--browser=chromium
--project=chrome
```
## Прочее

Чтобы открыть trace file 
```
npx playwright show-trace <path>
```