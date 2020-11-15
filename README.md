Simple React Weather app - idea from https://daveceddia.com/react-practice-projects/

Used OpenWeatherMap API for weather data and Spectre for the CSS.

To run (Hope this works..)

-Download the repo. 
-Have nodejs installed.
-In the root folder, in your command line run the command 'npm install' 
-After everything has installed - get an api key for OpenWeatherMap for free (https://openweathermap.org/api)
-Put this api key in your env_sample file, and change its name to .env
-Run 'npm start' in your command line to run the project on your localhost

Improvements that could be made :

Design needs to be made responsive.

Validation should probably be added to the postcode check.

Could also probably use the Geolocation API to circumvent the postcode check.

Routing and error handling needs improvement.

May be able to use TransitionGroup for cleaner animation.

Not sure about the way I've handled leaving out the API key.

Not happy about the way I've parsed the API data for use - could probably be cleaner.

Could use another API to get future weather data as free OpenWeatherMap API only gives 48 hours worth of data.

Webpack bundle is massive - probably need to figure out why.
