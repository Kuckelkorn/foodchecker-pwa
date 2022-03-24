# Foodchecker

Foodchecker is a web application that uses the openfoodfacts API.

## What does it do?

The application let's you scan the barcode of a product. It uses the barcode scanner API, that currently is only available in google chrome. When it has scanned an barcode it looks through the openfoodfacts API. When it has found a matching product it displays the relevant information for the end user.

## Screenshots

![Homescreen](./docs/assets/homescreen.png)![Live video feed](./docs/assets/camera.png)![Product details](./docs/assets/product.png)

## Activity Diagram

![Activity Diagram](./docs/assets/activitydiagram.png)

## Running the app

### Used technology

The application uses the pug rendering engine for displaying the content and express to setup a server.
Besides that it uses [the barcode detection API](https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API) and the [OpenFoodfacts API](https://world.openfoodfacts.org/)

### Installation

#### 1. Clone the repository

The repository can be cloned by running `git clone` in the command line.

```zsh
git clone https://github.com/Kuckelkorn/foodchecker-pwa
```

#### 2. Install the packages

Install the dependencies with npm.

```node
npm install
```

### Running and viewing the application

Start the server with `npm run ndmStart`, you can view it by going to `localhost:5555` or a different specified port in your .env file

```node
1. npm run ndmStart
2. open your browser of choice and go to localhost:5555
```

## Author

Application made by [Remco Kuckelkorn](https://github.com/Kuckelkorn) for the course [Web applications from scratch](https://github.com/cmda-minor-web/web-app-from-scratch-2122)
