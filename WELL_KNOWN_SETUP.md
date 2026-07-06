# Well-Known App Association Setup

The landing site is prepared to serve `.well-known` app association files, but
the production identifiers must come from the store accounts before those files
are published.

## Android

Create `public/.well-known/assetlinks.json` after copying the production
SHA-256 signing certificate fingerprint from Google Play Console.

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "io.brcapp.app",
      "sha256_cert_fingerprints": [
        "REPLACE_WITH_GOOGLE_PLAY_APP_SIGNING_SHA256"
      ]
    }
  }
]
```

Use the Google Play app signing certificate fingerprint, not the local debug
keystore fingerprint.

## iOS

Create `public/.well-known/apple-app-site-association` after confirming the
Apple Team ID for the app.

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appIDs": ["TEAMID.io.brcapp.app"],
        "components": [
          {
            "/": "*",
            "comment": "Allow BRC app links from the landing site."
          }
        ]
      }
    ]
  }
}
```

The Safari Smart App Banner does not depend on this file. It is enabled by the
`apple-itunes-app` meta tag in `index.html`.
