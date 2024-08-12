---
title: Blevours
description: A reference page in my new Starlight docs site.
---

Reference pages are ideal for outlining how things work in terse and clear terms.
Less concerned with telling a story or addressing a specific use case, they should give a comprehensive outline of what you're documenting.

Guides, on the other hand, lead a user through a specific task they want to accomplish, often with a sequence of steps.
Writing a good guide requires thinking about what your users are trying to do.

## Blevours: Bleverse Docs x Relivator Docs

Congrats on visiting to a brand new Bleverse Docs!

## 🎉 Relivator

[![Built with Relivator](https://relivator.bleverse.com/assets/relivator-badge.svg)](https://relivator.bleverse.com)

```bash
git clone https://github.com/blefnk/relivator.git
```

[![Explore on GitHub](https://relivator.bleverse.com/assets/github-badge.svg)](https://github.com/blefnk/relivator)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fblefnk%2Frelivator&project-name=relivator&repository-name=relivator)

> 🚀 **Ready to launch?** Start building your project with Relivator today!

## 🌟 Project Structure

Inside your Relivator project, you'll find the following folders and files (but not limited to):

```bash
.
├── public/
├── src/
│   ├── assets/
│   ├── app.ts
│   ├── content/
│   │   ├── db/
│   │   └── ui/
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

## Further reading

- Read [about Astro Starlight](https://starlight.astro.build/) on its official website.
- Read [about how-to](https://diataxis.fr/how-to-guides/) in the Diátaxis framework.
- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework.
