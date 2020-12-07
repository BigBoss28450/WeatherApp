# Weather App

Weather app is an application that lets you see the weather from a list of cities that you can modify at your own.
It shows you details like temperature (actual, max, min), wind velocity, pressure, etc...

## Installation

you just need to clone this repo and execute this line

```bash
npm install
```

Also, you will need a key to use the Open Weather API.

You can get one [here.](https://openweathermap.org/)

To let your ApiKey working you'll need to create a file called ENV.js, And write this line of code inside of it:

```bash
export default { WEATHER_API_KEY: <YOUR APY KEY HERE> };
```

Last, you just need to put this right in the root of your project.

## Usage

Using this app is very simple you just need a connection to the internet and automatically you will receive a list of predefined cities and their weather details.

If you need to add more cities to your list you just need to tap on the search icon located on the top right of the screen and a modal will pop up. Here you can search for a city you want to know it weather and add to your list. Is just that simple.

Also, if you want to delete one city from your weather list you can just select your city and right in the same place as the search icon it'll appear a delete icon, just press it and an alert will show up and ask you if you really want to delete that city from your list, if you want to do that just press "Aceptar" and that's all.

## Testing

To test this app i used jest. So you just need to execute

```bash
npm test
```

or

```bash
npm run test -- --coverage --watchAll=false
```

to see the full coverage of the test
