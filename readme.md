## Init node project
npm init -y

## Install dependencies

npm install -S express

npm install -D -g typescript

npm install -D @types/express
npm install -D @types/node

## Init typescript
tsc --init

## Edit package.json
"main": "dist/app.ts",
    "scripts": {
        "start": "tsc && node dist/app.ts"
    },
