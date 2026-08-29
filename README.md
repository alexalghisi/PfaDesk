# PfaDesk

An inspectable 2026 sketch of Romanian PFA taxation under sistem real: CASS at
10% with a six-wage floor, CAS at 25% on the 12- and 24-wage tickets, and 10%
income tax after those contributions.

This is not ANAF advice. The formulas live in [`src/lib/pfa.ts`](src/lib/pfa.ts)
so a reviewer can contest the model, not a black box.

**React 19 · TypeScript (strict) · Vite 8 · Tailwind CSS 4 · Zustand · Vitest ·
Playwright**

---

## Author

### Alessandro Alghisi

Senior Software Engineer · Cluj-Napoca, Romania

**Twice a Google Software Engineering Intern** — Chrome (Kitchener / Waterloo)
and Logs (Mountain View).

|          |                                                                                         |
| -------- | --------------------------------------------------------------------------------------- |
| GitHub   | [github.com/alexalghisi](https://github.com/alexalghisi)                                |
| LinkedIn | [linkedin.com/in/alghisi](https://www.linkedin.com/in/alghisi)                          |
| Email    | [alexalghisi@gmail.com](mailto:alexalghisi@gmail.com)                                   |
| Location | Cluj-Napoca, Romania · open to remote / EU / US-friendly timezones                      |

**Hiring?** Open an issue, message me on LinkedIn, or email
[alexalghisi@gmail.com](mailto:alexalghisi@gmail.com).

---

## Getting started

Requires Node 22 or newer.

```bash
npm install
npm run dev          # http://localhost:5180
```

Type a net income. Tick employee CASS to drop the floor. Contact sits under the window.

```bash
npm run typecheck
npm run lint
npm run format:check
npm run test
npm run e2e
npm run build
```

## License

MIT · © Alessandro Alghisi
