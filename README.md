**CR-Exchange**

### Description:

This project is displaying real-time data pair for crypto currency-fiat currency, [LIVE PREVIEW LINK](https://coin-routes-indol.vercel.app/)

<hr />

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]

[build-badge]: https://img.shields.io/github/deployments/fayazpn/cr-exchange/production?label=vercel&logoColor=vercel
[build]: https://github.com/fayazpn/cr-exchange/deployments
<!-- prettier-ignore-end -->


Coinbase API:

Possible Improvement:

- Folder Structure Refactoring
- Close WebSocket on window inactive state
- Improve order book highlighting
- Error handling

Stretch Goals:

- Aggrigate option
- Toast for error
- Pause Feed Button
- Unit tests for each components

## Technologies Used

This project is made using the following technologies:

- React.js with Vite Bundler & TypeScript
- Material UI (Component lib)
- Emotion, used internally by Material UI (Styling)
- HighCharts for data viz
- react-use-websocket for WebSocket lifecycles

## Available Scripts

`yarn lint` - ESLint & Prettier
`husky install` - install git hooks

### Setup & Running the development server.

Clone the repo

```bash
    cd ./coin-routes
    yarn prepare
    yarn dev
```

### Building for production.

```bash
    yarn build
```

### Running the production server.

```bash
    yarn start
```

## Docs reference

- [Coinbase API for data feeds](https://docs.cdp.coinbase.com/advanced-trade/docs/welcome/)
- [Emotion docs can be accessed here](https://styled-components.com/docs)
- [Material UI docs can be accessed here](https://mui.com/material-ui/getting-started/)
