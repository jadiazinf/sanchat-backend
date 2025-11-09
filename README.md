<div align="center">
  <img src="https://nestjs.com/img/logo_text.svg" alt="NestJS" height="64" />
  <h1>Sanchat – Backend</h1>
  <p><b>NestJS 11 + TypeScript + Drizzle ORM</b></p>
  <p>Typed, environment-safe, and ready for production. Validated with <b>Zod</b>, powered by <b>pnpm</b>.</p>

  <!-- Badges -->
  <p>
    <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/badge/node-%3E%3D18%20LTS-339933?logo=node.js&logoColor=white" alt="Node LTS >=18" /></a>
    <img src="https://img.shields.io/badge/NestJS-11-E0234E?logo=nestjs&logoColor=white" alt="NestJS 11" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5" />
    <img src="https://img.shields.io/badge/Drizzle-ORM-0B3B5E" alt="Drizzle ORM" />
    <img src="https://img.shields.io/badge/CI-Coming%20Soon-999999?logo=githubactions&logoColor=white" alt="CI" />
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome" />
  </p>
</div>

---

## ✨ Features
- **NestJS 11** with **TypeScript 5**
- **Environment validation** with **Zod** (`ConfigModule` global)
- **Per-environment `.env` files** (`development` / `test` / `production`)
- **Drizzle ORM** ready (modular Database layer)
- **pnpm** for fast, reproducible installs
- ESLint + Prettier + Jest

> 🔒 Secrets are never committed. Only `.env.template` lives in the repo.

---

## 📦 Prerequisites
- 🟢 Node.js **LTS** (>= 18; recommended 20)
- 📦 **pnpm** package manager  
  Install: `npm i -g pnpm` (or Corepack: `corepack enable && corepack prepare pnpm@latest --activate`)
- 🐘 PostgreSQL (or a connection string supported by your Drizzle client)

---

## 🚀 Getting Started

```bash
# 1) Install deps
pnpm install

# 2) Create per-environment env files (see template below)
cp .env.template .env.development   # Windows: copy .env.template .env.development

# 3) Run in development (watch mode)
pnpm run start:dev
```

### 🔧 Environment Variables
We validate envs at startup with Zod. If something is missing or invalid, boot will fail with a readable error.

`.env.template`
```dotenv
NODE_ENV=development
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/your_database
```

`.env.development`
```dotenv
NODE_ENV=development
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/sanchat_dev
```

`.env.test`
```dotenv
NODE_ENV=test
PORT=4000
DATABASE_URL=postgres://user:password@localhost:5432/sanchat_test
```

`.env.production`
```dotenv
NODE_ENV=production
PORT=8080
DATABASE_URL=postgres://user:password@localhost:5432/sanchat_prod
```

> ℹ️ The app loads `.env.${NODE_ENV}` first, then falls back to `.env` if present.

---

## 🧭 Project Structure

```
sanchat-backend/
├─ src/
│  ├─ app.controller.ts
│  ├─ app.module.ts              # ConfigModule is global; env validation wired here
│  ├─ app.service.ts
│  ├─ config/
│  │  └─ env.validation.ts       # Zod schema for environment variables
│  └─ database/                  # (Coming next) DatabaseModule/Service with Drizzle ORM
├─ .env.template
├─ package.json
├─ pnpm-lock.yaml
└─ README.md
```

---

## 🧪 Testing
```bash
pnpm run test          # unit tests
pnpm run test:watch    # watch mode
pnpm run test:cov      # coverage
```

---

## 📜 Available Scripts

| Command                  | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `pnpm run start:dev`     | Start in development with watch (ENV=dev)      |
| `pnpm run start`         | Start in production mode (non-compiled)        |
| `pnpm run build`         | Compile TypeScript to `dist/`                  |
| `pnpm run start:prod`    | Run compiled app (`node dist/main`)            |
| `pnpm run test`          | Run unit tests                                 |
| `pnpm run test:watch`    | Run tests in watch mode                        |
| `pnpm run test:cov`      | Test coverage                                  |
| `pnpm run lint`          | ESLint (Prettier config)                       |
| `pnpm run format`        | Prettier format                                |

---

## 🧰 Tech Stack
- ⚙️ NestJS 11
- 🟦 TypeScript 5
- 🧪 Jest
- 🧹 ESLint + Prettier
- 🧩 Zod (env validation)
- 🗄️ Drizzle ORM (database layer)

---

## 🛠️ Troubleshooting
- **Environment validation error** → Check your `.env.<NODE_ENV>` values and match the template.
- **Node version** → Use Node LTS (>=18). On Windows, install **nvm-windows** to switch versions.
- **pnpm “approve-builds”** → Since pnpm v10, some postinstall scripts are blocked. Allow if needed:
  ```bash
  pnpm approve-builds
  ```
- **Port already in use** → Change `PORT` in your env file or stop the other process.

---

<div align="center">
  <sub>Made with ❤️ using NestJS. PRs and issues are welcome.</sub>
</div>
