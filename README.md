# Blevours: Bleverse Docs x Relivator Docs

[Visit Website](https://docs.bleverse.com)

Congrats on visiting to a brand new Bleverse Docs!

This project serves both as Bleverse Docs and as Docs starter made with best possible practices.

## 🎉 Relivator

[![Built with Relivator](https://relivator.bleverse.com/logo.png)](https://relivator.bleverse.com)

```bash
git clone https://github.com/blefnk/relivator.git
```

[![Explore on GitHub](https://relivator.bleverse.com/logo.png)](https://github.com/blefnk/relivator)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fblefnk%2Frelivator&project-name=relivator&repository-name=relivator)

> 🚀 **Ready to launch?** Start building your project with Relivator today!

## 🌟 Blevours Project Structure

Inside your Relivator project, you'll find the following folders and files (but not limited to):

```bash
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   └── env.d.ts
├── package.json
└── tsconfig.json
```

Relivator organizes its content and settings in the `src/` directory. Customize `src/app.ts` for site-wide settings and manage your content and database schema within the respective folders.

Assets like images should be added to `src/assets/` and can be referenced directly in your components.

Static assets, including favicons, go in the `public/` directory.

## 🛠️ Commands

Run these commands from the root of your Relivator project:

| Command              | Action                                      |
| :------------------- | :------------------------------------------ |
| `pnpm install`       | Installs dependencies                       |
| `pnpm dev`           | Starts local dev server at `localhost:3000` |
| `pnpm build`         | Build your production site                  |
| `pnpm preview`       | Preview your build locally before deploying |
| `pnpm db:push`       | Push your database schema                   |
| `pnpm stripe:listen` | Start the Stripe webhook listener           |

## 💡 Learn More

Explore [Relivator's documentation](https://docs.bleverse.com/guides/relivator/) to understand its full capabilities, or dive into the [Bleverse Discord](https://discord.gg/Pb8uKbwpsJ) for additional support and resources.
