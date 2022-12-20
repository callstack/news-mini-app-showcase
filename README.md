# news-mini-app-template

This is mini app for reading news and articles. News exposes `MainNavigator`. `MainNavigator` is News app itself. News app uses auth logic and UI (`SignInScreen`, `AccountScreen`) from Auth remote module, so we suggest to run Auth dev server to prevent issues with News app. If Auth dev server will no be run, News app will not work as standalone app.

Auth Module is a part of [Super App Template](https://github.com/callstack-internal/super-app-template) monorepo. You can find more information about Super App Template in [Super App Template README](https://github.com/callstack-internal/super-app-template/blob/main/README.md) file.

## Getting started

To run News app without changing or removing auth logic you need to run Auth dev server or deploy bundle and provide url to bundle file in `createURLResolver` function in `index.js` file. Otherwise you can remove auth logic from News app. To do this you need to remove `SignInScreen` and `AccountScreen` from `MainNavigator`, `AuthProvider` from App and remove Auth remote container from `index.js` file.

## Setup

Install dependencies:
```
yarn bootstrap
```

### Run

Start dev server if you need to work as a part of host app. News app server will run on 9001 port:
```
yarn start
```
Or start dev server for News app as a standalone app. It will run News app server will run on 8081 port:
```
yarn start:standalone
```
Run iOS or Android app (ios | android):
```
yarn <platform>
```

### Generate bundle files

Generate iOS or Android bundle files (ios | android):
```
yarn bundle:<platform>
```