# Details

1. Reporting: After each run it will create `reports` folder
   1. Entry point for reports is `reports/index.html`
   2. If a case is failing, under `reports/screenshots` will be a picture
   3. If a case is failing, under `reports/videos` will be a video
2. Framework is configured to use `chrome` as default brawser
3. Default timeout for element finding is set to `5000ms`
4. If the tests are executed headless, **retry policy** is set to `2`
5. Because the html code and css classes are `obfuscated`, it is required to run english version of search google service

## Pre-requisites

1. Node JS

## Install the project

1. Install project dependencies with: `npm i`

## Multiples ways to run this demo

1. Open cypress interface using `npm run open`
2. Run all tests using `npm run test`
3. Run `smoke` suites using `npm runt test:smoke`
4. Run `nightly` suites using `npm runt test:nightly`
