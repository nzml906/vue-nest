## Setup server

```bash
cd server
```

### install dependencies

```bash
npm i
```

### set environment variable

```bash
cp src/config.ts.example src/config.ts
```

### (Prisma) set environment variable.

```bash
cp prisma/.env.example prisma/.env
```

- create mysql database
- fill up your DB info to prisma/.env file
- DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

### Create the first migration: (already done though)

```bash
npx prisma migrate dev --name init
```

### Now generate the prisma client from the migrated database with the following command

```bash
npx prisma generate
```

### Start backend server

```bash
npm run start:dev
```

Test api with http://localhost:3000/api in your favourite browser

## Setup client

```bash
cd client
```

### install dependencies

```bash
npm i
```

### set environment variable

```bash
cp src/config.ts.example src/config.ts
```

### Start frontend server

```bash
npm start
```
