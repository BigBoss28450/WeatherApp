# Weather App

Weather app is an application that let you see the weather from a list of ciities that you can modify at your own.
It shows you details like temperature(actual, max, min), wind velocity, pressure, etc...

## Installation
you just need to clone this repo and execute this line

```bash
npm install
```

also you will need the Open Weather API.
You can get one [here.](https://openweathermap.org/)

To let your ApiKey working you'll need to create a file called ENV.js this file need to be placed inside config folder inside the app folder this folder is located in the root of our project.

## Testing

for test this app i used jest. So you just need to execute

```bash
npm test
```

or

```bash
npm run test -- --coverage --watchAll=false
```

to see the full coverage of the test
