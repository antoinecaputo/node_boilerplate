## Init node project
npm init -y

## Install dependencies
npm install -D typescript
npm install -D tslint
npm install -S express
npm install -D @types/express

## Init typescript
tsc --init

## Init tslint
./node_modules/.bin/tslint --init

## Edit package.json
"main": "dist/app.js",
    "scripts": {
        "start": "tsc && node dist/app.js"
    },


