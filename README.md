# Weather forecast

This project is a sample application created as recruitment task for Linkfactory company, for a position of frontend developer (junior/mid).

Its main goal is to display weather forecast for city given by user. 

## Technicalities

It is created in ReactJS.
It is written in JavaScript. For purpose of this project it was decided it suficietn to use just JS, not TypeScript.

Weather forecast data is being retrieved from *openweathermap* API. Precisely its free version "call 5 day / 3 hour forecast data". It is possible to choose number of taken timestamps (here *numberOfTimestamps = 5*).

## Usecase

Main, root page is a search panel. User is able to enter name of of the city into text field and run it by pressing enter or pressing loupe icon. 

In case of incorrect city name or no string being provided into field, after sumbitting form, user is being informed about it by red border around field and by note below it.

If everything went well view is change to forecast panel. It contains information about temperature, type of weather (with additional icon) and sunrise/sunset time for thhat day. 

Next search is possible after pressing "Go back" button below panel, which navigate user to initial view - search panel.