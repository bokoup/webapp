# bokoup website

![bokoup home page](https://bokoup.imgix.net/bokoup-homepage.png)

## Overview

- Using nested routes with [Navbar](app/components/navbar.tsx) and [Footer](app/components/footer.tsx) components.
- Home page ends up being [\_\_nav/index.tsx](app/routes/__nav/index.tsx), where the underscored indicates a pathless route.
- Graphql schema has been exported from https://data.api.bokoup.dev/v1/graphql
- Package.json scripts updated to include `generate:gql` for graphql codegen on build and to watch while developing

## Learning Remix

- [Documentation](https://remix.run/docs/en/v1) is quite good
- The [jokes app deep dive tutorial](https://remix.run/docs/en/v1/tutorials/jokes) is also good
- This [playlist of videos](https://www.youtube.com/playlist?list=PLXoynULbYuEDG2wBFSZ66b85EIspy3fy6) by the author was also helpful, starting with [Remix Single: Loading data into components](https://www.youtube.com/watch?v=NXqEP_PsPNc&list=PLXoynULbYuEDG2wBFSZ66b85EIspy3fy6&index=2)

## What's in the stack

- [Fly app deployment](https://fly.io) with [Docker](https://www.docker.com/)
- Healthcheck endpoint for [Fly backups region fallbacks](https://fly.io/docs/reference/configuration/#services-http_checks)
- [GitHub Actions](https://github.com/features/actions) for deploy on merge to production and staging environments
- Styling with [Tailwind](https://tailwindcss.com/)
- End-to-end testing with [Cypress](https://cypress.io)
- Local third party request mocking with [MSW](https://mswjs.io)
- Unit testing with [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)

### bokoup additions

- Images served by [imgix](https://imgix.com/) - bucket on gcp for new images and proxy service for Arweave assets.
- Graphql client on the server with [graphql-request](https://github.com/prisma-labs/graphql-request)
- Codege with types for graphql with [graphql-codegen](https://the-guild.dev/graphql/codegen)
- UI components from [headlessui](https://headlessui.com/)
- Icons from [Heroicons](https://heroicons.com/)

### Unused features

- Production-ready [SQLite Database](https://sqlite.org)
- Database ORM with [Prisma](https://prisma.io)
- Email/Password Authentication with [cookie-based sessions](https://remix.run/docs/en/v1/api/remix#createcookiesessionstorage)

## Development

- Install dependencies:

  ```sh
  npm install
  ```

- Start dev server:

  ```sh
  npm run dev
  ```

This starts your app in development mode, rebuilding assets on file changes.

The database seed script creates a new user with some data you can use to get started:

- Email: `rachel@remix.run`
- Password: `racheliscool`

## Deployment

This stack includes two GitHub Actions that handle automatically deploying the app to production and staging environments.

Prior to your first deployment, you'll need to do a few things:

- [Install Fly](https://fly.io/docs/getting-started/installing-flyctl/)

- Sign up and log in to Fly

  ```sh
  fly auth signup
  ```

  > **Note:** If you have more than one Fly account, ensure that you are signed into the same account in the Fly CLI as you are in the browser. In your terminal, run `fly auth whoami` and ensure the email matches the Fly account signed into the browser.

- Create two apps on Fly, one for staging and one for production:

  ```sh
  fly apps create remix-deux-7505
  fly apps create remix-deux-7505-staging
  ```

  > **Note:** Make sure this name matches the `app` set in your `fly.toml` file. Otherwise, you will not be able to deploy.

  - Initialize Git.

  ```sh
  git init
  ```

- Create a new [GitHub Repository](https://repo.new), and then add it as the remote for your project. **Do not push your app yet!**

  ```sh
  git remote add origin <ORIGIN_URL>
  ```

- Add a `FLY_API_TOKEN` to your GitHub repo. To do this, go to your user settings on Fly and create a new [token](https://web.fly.io/user/personal_access_tokens/new), then add it to [your repo secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) with the name `FLY_API_TOKEN`.

- Add a `SESSION_SECRET` to your fly app secrets, to do this you can run the following commands:

  ```sh
  fly secrets set SESSION_SECRET=$(openssl rand -hex 32) --app remix-deux-7505
  fly secrets set SESSION_SECRET=$(openssl rand -hex 32) --app remix-deux-7505-staging
  ```

  If you don't have openssl installed, you can also use [1password](https://1password.com/password-generator/) to generate a random secret, just replace `$(openssl rand -hex 32)` with the generated secret.

- Add secrets for `GRAPHQL_API_DEVNET`:

  ```sh
  fly secrets set GRAPHQL_API_DEVNET=<token_secret> --app remix-deux-7505
  fly secrets set GRAPHQL_API_DEVNET=<token_secret> --app remix-deux-7505-staging
  ```

  The application uses [imgix](https://imgix.com/) cdn for serving images. It uses their proxy address to reserve images from Arweave urls without having to download them and upload them to a cloud storage service.

- Add a secret for `GA_TRACKING_ID`

  ```sh
  fly secrets set GA_TRACKING_ID=<secret> --app remix-deux-7505
  fly secrets set GA_TRACKING_ID=<secret> --app remix-deux-7505-staging
  ```

- Create a persistent volume for the sqlite database for both your staging and production environments. Run the following:

  ```sh
  fly volumes create data --size 1 --app remix-deux-7505
  fly volumes create data --size 1 --app remix-deux-7505-staging
  ```

Now that everything is set up you can commit and push your changes to your repo. Every commit to your `main` branch will trigger a deployment to your production environment, and every commit to your `dev` branch will trigger a deployment to your staging environment.

### Connecting to your database

The sqlite database lives at `/data/sqlite.db` in your deployed application. You can connect to the live database by running `fly ssh console -C database-cli`.

### Getting Help with Deployment

If you run into any issues deploying to Fly, make sure you've followed all of the steps above and if you have, then post as many details about your deployment (including your app name) to [the Fly support community](https://community.fly.io). They're normally pretty responsive over there and hopefully can help resolve any of your deployment issues and questions.

## GitHub Actions

We use GitHub Actions for continuous integration and deployment. Anything that gets into the `main` branch will be deployed to production after running tests/build/etc. Anything in the `dev` branch will be deployed to staging.

## Testing

### Cypress

We use Cypress for our End-to-End tests in this project. You'll find those in the `cypress` directory. As you make changes, add to an existing file or create a new file in the `cypress/e2e` directory to test your changes.

We use [`@testing-library/cypress`](https://testing-library.com/cypress) for selecting elements on the page semantically.

To run these tests in development, run `npm run test:e2e:dev` which will start the dev server for the app as well as the Cypress client. Make sure the database is running in docker as described above.

We have a utility for testing authenticated features without having to go through the login flow:

```ts
cy.login();
// you are now logged in as a new user
```

We also have a utility to auto-delete the user at the end of your test. Just make sure to add this in each test file:

```ts
afterEach(() => {
  cy.cleanupUser();
});
```

That way, we can keep your local db clean and keep your tests isolated from one another.

### Vitest

For lower level tests of utilities and individual components, we use `vitest`. We have DOM-specific assertion helpers via [`@testing-library/jest-dom`](https://testing-library.com/jest-dom).

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.

### Logging In

Loggin in in does by scanning a qr code with your mobile wallet app. This goes to the transaction server and requests a message to be signed with a visit id created when a user visits the site that gets stored in the session cookie. The signed message gets submitted as a transaction to the network and then indexed and made available by the data api. The web application can then query for a signed memo transaction that includes this visit id. If that transaction exists in the database then the user's signature has been verified and they have proven control of the private key associated with their public key address. The user's public key is then stored as the user's id in the session cookie and they can be logged in.
