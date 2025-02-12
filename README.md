# App Update Extension

The extension displays a popup or full-page overlay if the app version is lower than a required version.

## Configuration

### `popup`
Defines the settings for the popup that appears when an app update is required.

- **`enabled`** (boolean): Enables or disables the popup. Default: `true`.
- **`headline`** (string): The headline of the popup.
- **`htmlContent`** (string): The HTML content displayed in the popup.
- **`buttonDismissText`** (string): Defines the text shown on the dismiss button. Default: `Later`.

### `fullPageOverlay`
Defines the settings for the overlay that covers the entire page.

- **`enabled`** (boolean): Enables or disables the overlay. Default: `false`.
- **`showShopLogo`** (boolean): Determines whether to show the shop logo in the overlay. Default: `true`.
- **`shopLogoUrl`** (string): URL to display a custom logo. If not configured, the logo from the app config is used.
- **`headline`** (string): The headline of the overlay.
- **`htmlContent`** (string): The HTML content displayed in the overlay.

### `storeLinks`
Defines the links to the app stores for iOS and Android.

- **`ios`** (string): The link to the iOS App Store.
- **`android`** (string): The link to the Google Play Store.

### `buttonStoreText`
Defines the text shown on the app store buttons.

- **`ios`** (string): The text for the iOS button. Default: `"App Store"`.
- **`android`** (string): The text for the Android button. Default: `"Google Play Store"`.

### `minRequiredAppVersion`
Defines the minimum required versions for the app to continue.

- **`ios`** (string): The minimum version for iOS.
- **`android`** (string): The minimum version for Android.

## Example

```json
{
  "popup": {
    "enabled": true,
    "headline": "New Update Available",
    "htmlContent": "<p>A new update for the app is available. Please update to the latest version.</p>",
    "buttonDismissText": "Later"
  },
  "fullPageOverlay": {
    "enabled": false,
    "showShopLogo": true,
    "shopLogoUrl": "https://www.shopgate.com/hubfs/ShopGate/Images/12321321.svg",
    "headline": "New App Required",
    "htmlContent": "<p>To continue, please install the new app.</p>"
  },
  "storeLinks": {
    "ios": "https://apps.apple.com/de/app/example",
    "android": "https://play.google.com/store/apps/details?id=example"
  },
  "buttonStoreText": {
    "ios": "App Store",
    "android": "Google Play Store"
  },
  "minRequiredAppVersion": {
    "ios": "10.75.0",
    "android": "5.59.0"
  }
}
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

Shopgate Connect - Extension Boilerplate is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.
