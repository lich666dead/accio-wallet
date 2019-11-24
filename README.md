# Accio-wallet

[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/Zilliqa/scilla/blob/master/LICENSE)
[![Gitter chat](http://img.shields.io/badge/chat-on%20gitter-077a8f.svg)](https://gitter.im/grin_community/Lobby)

<p align="center">
  <a href="https://grin.mw/"><img src="https://github.com/lich666dead/accio-wallet/blob/master/public/icons/logo.svg" width="200" height="200"></a>
</p>

> Accio-wallet is browser extension for grin blockchain.

#### Build Setup

For Develop building and serve.
``` bash
# Install dependencies
$npm install

# Serve all files extension.
$npm run dev

# Serve vue app files to dist.
$npm run serve:ui

# Serve extension (background.js) and any extensiong files to dist.
$npm run serve:extension

# Serve web on 8080 port.
$npm run serve:web
```

---

Testing project.
``` bash
# run unit tests
$npm test:unit

# Watch testing for dev.
$npm run test:watch

# Check lint ts,vue files.
$npm run lint

```

---

For production builing and deploy.
``` bash
# Build all app and extension files and optimizing it.
$npm run build

# Build only UI files and optimizing it.
$npm run build:ui

# Build only extension files and optimizing it.
$npm run build:extension
```
