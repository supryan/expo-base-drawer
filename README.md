# Expo/React Native Base (Drawer)

A custom starting template for building Expo/React Native apps for iOS and Android.

NOTE: This template features a **slide out drawer menu** for it's main navigation stack.

## What's In the Bag

- [Expo](https://expo.io/)
- [Expo Client](https://expo.io/tools) (App)
- [React Native](https://facebook.github.io/react-native/)
- [React Navigation (Drawer)](https://reactnavigation.org/)
- [MobX](https://mobx.js.org/README.html)
- [Styled Components](https://www.styled-components.com/)

## Get Started

```
yarn install
```

```
yarn start
```

That's it. Now visit the Metro bundler in your browser and scan the QR code on a physical device or open in the simulator.

## Features

### 🏆 App-Wide State Management

Here we're utilizing MobX to add cross-component state management. MobX is a very powerful framework that easily allows you to pass data efficiently and quickly throughout the entire app.

### 🧩 Notification System

Thanks to the power of MobX, we include some custom made components for displaying global notifications and loaders in any component. Here's an example component on how to show the global loader. You must first inject the `NotificationStore` with MobX to your component. Then you can use `notifications` as a prop:

```jsx
import { observer } from 'mobx-react';
import { useStores } from 'utils/hooks';

// Uses NotificationStore.js
const Component = observer(({ notifications }) => {
  const { notification } = useStores()
  return <Button onPress={() => notifications.showLoader()} />;
});
```

#### Loader

A global loader indicator with an optional overlay and touch prevention.

| Action      | Method                                  |
| ----------- | --------------------------------------- |
| Show Loader | `this.props.notifications.showLoader()` |
| Hide Loader | `this.props.notifications.hideLoader()` |

#### Snackbar

A global snackbar (sometimes referred to as "Toast") to display a notification at the bottom of the screen.

| Action        | Method                                           |
| ------------- | ------------------------------------------------ |
| Show Snackbar | `this.props.notifications.showSnackbar(options)` |
| Hide Snackbar | `this.props.notifications.hideSnackbar()`        |

With the Snackbar, there are additional options you can set:

| Options (obj) | Type    | Default | Description                                                                                    |
| ------------- | ------- | ------- | ---------------------------------------------------------------------------------------------- |
| `message`        | String  | `''`    | (required) The text to display on the Snackbar component                                       |
| `button`      | boolean | `false` | Option to display a button on the snackbar that goes to a route when clicked                   |
| `route`       | String  | `''`    | If `button` option is set to true, set the route this button goes to when pressed              |
| `params`      | Any     | `null`  | Optional params to pass when going to specified `route`                                        |
| `offset`      | Number  | `0`     | Set an optional offset to position the Snackbar higher (helpful for tab bars or fixed footers) |

### 🎨Theming

All theme properties are extended by `styled-components` and live in `/constants/Theme.js`. Feel free to manipulate any of these properties or add/remove more.

```jsx
// Further theming documentation coming soon. For more info check out constants/Theme.js
```

## Credits

Created by [Ryan Gordon](https://github.com/supryan).
