# parse-location-hash

Parse location hash/fragment to object.

## Install

```shell
npm i parse-location-hash
```

## Usage

```javascript
// window.location.hash : "#access_token=testToken&token_type=bearer"
const hash = locationHashParser(window.location.hash);

// hash: { access_token: "testToken", token_type: "bearer" }
const { access_token } = hash;

localStorage.setItem("token", access_token);
```