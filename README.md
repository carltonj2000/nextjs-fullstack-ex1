# NextJS FullStack Example

Run steps:

- start docker desktop and in `setting > resource > file sharing` enable
  the sharing of the `./postgres-docker/data` directory
- runs the docker database via `npm run db:start`
- [install pgadmin](https://www.pgadmin.org/download/pgadmin-4-container/)

## Code History

The code in this repository is based on the
[I Speedran Next.js](https://youtu.be/qzY1BKvvP4E)
video.

## Creation History

```bash
npx create-next-app@latest nextjs-fullstack-ex1
# Need to install the following packages:
#   create-next-app@13.4.6
# Ok to proceed? (y) y
# ✔ Would you like to use TypeScript with this project? … No / Yes
# ✔ Would you like to use ESLint with this project? … No / Yes
# ✔ Would you like to use Tailwind CSS with this project? … No / Yes
# ✔ Would you like to use `src/` directory with this project? … No / Yes
# ✔ Use App Router (recommended)? … No / Yes
# ✔ Would you like to customize the default import alias? … No / Yes
# ✔ What import alias would you like configured? … @/*
npm i -D prisma
npx prisma init
# setup db connection in .env and create model in ./prisma/schema.prisma
npx prisma migrate dev
npx prisma studio # add post via the web gui
npm i next-auth @auth/prisma-adapter
# add to next-auth account, session, user, etc models to schema.prisma from
# https://authjs.dev/reference/adapter/prisma
# update user model to contain array of Posts and post model ref to user
npx prisma migrate dev
# setup auth options in ./lib/auth-options.ts with GitHubProvider, etc
# set .env GITHUB_ID/SECRETE from from github.com/settings/apps new app
openssl rand --base64 32 # for nextauth_secret in .env with nextauth_url
```
