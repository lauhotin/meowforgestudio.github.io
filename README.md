# MEOMI FORGE GAME STUDIO / 喵米遊戲工坊

The official bilingual website for MEOMI FORGE GAME STUDIO and NULLSTRIDE / 零域之痕.

Visitors can select English or Traditional Chinese. The choice is remembered in browser storage and can be shared with `?lang=en` or `?lang=zh-Hant`.

The gameplay gallery contains six actual development screenshots, with an accessible full-size viewer supporting arrow keys and Escape.

## Deployment

The existing Sites project identity is retained in `.openai/hosting.json`. Netlify remains configured to run `npm run build:netlify` and publish `out`.

## Development

Run `npm install`, then `npx next dev` for a local preview. Run `npm run build:netlify` for the static export.
