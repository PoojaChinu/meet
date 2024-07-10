### Project Description

The Meet app is a progressive web application with a serverless backend, offering offline access to upcoming events in specific cities. Its responsive design ensures seamless display across devices, delivering a superior user experience. Powered by Test-Driven Development, it prioritizes code quality and test coverage for optimal performance.

### Run the project locally

npm start
Starts the development server.

npm run build
Bundles the app into static files for production.

npm test
Starts the test runner.

npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

### Feature 1: Filter Events by City

### User Story 1

As a user,
I should be able to filter events by city
So that, I can see the list of events taking place in the city.

### Scenario 1 When user hasn’t searched for a specific city, show upcoming events from all cities.

**Given**: User hasn’t searched for any city

**When**: The user opens the app

**Then**: The user should see a list of upcoming events.

### Scenario 2 User should see a list of suggestions when they search for a city.

**Given**:The main page is open

**When**: The user starts typing in the city textbox

**Then**: The user should be able to see the list of cities that match what they have typed.

### Scenario 3 User can select a city from the suggested list.

**Given**: The user was typing “Berlin” in the city textbox AND the list of suggested cities is showing

**When**: The user selects a city (e.g., “Berlin, Germany”) from the list;

**Then**: Their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### Feature 2 : Show/Hide Event Details

### User Story 1

As a user,
I should be able to show/hide event details
So that I can handle the information displayed on the screen.

### Scenario 1 User has clicked to expand show more details of the event

**Given**: User has decided to click on an event to see more details of an event.

**When**: User clicks on the button

**Then**: The user is able to see more details about an event.

### Feature 3: Specify Number of Events

### User Story 1

As a user,
I should be able to specify number of events
So that I can quickly find the number of events registered.

### Scenario 1 User has displayed on the page a specific number of events;

**Given** : The user selects a city for ex. "Berlin" from the list.

**When** : user clicks on the button.

**Then** : The user should be able to see specific number of events like 6 at a time.

### Feature 4 : Use App when offline

### User Story 1

As a user,
I should be able to use app when when offline
So that I can see the information all the time.

### Scenario 1 User has the app installed or shortcut on home screen but no internet connection.

**Given** : The user clicked on the shortcut

**When** : The user clicks on the installed app on the phone

**Then** : The user should be able to see the information on the app even the app is offline.

### Feature 5 : Add an App shortcut to the home screen

### User Story 1

As a user,
I should be to add an app shortcut to the home screen
So that I can access it quickly.

### Scenario 1 User has the app oppen and decides to create a shortcut for home creen.

**Given** : The user clicked on the app shortcut on the home screen

**When** : The user clicks on the button "Create home shortcut"

**Then** : The user should be able to find to find the shortcut of the app.

### Feature 6 : Display chart visualizationevent details

### User Story 1

As a user,
I should be able to display chart visualisation events details
So that I can see the visual representation of the events which will make user to help in making a choice.

### Scenario 1 User is planning a weekend and browses through a list of upcoming events from (e.g., “Berlin, Germany”).

**Given** : The user choose wants to know more about event, they navigate to the event page and see that the chart visualisation option is available

**When** : The user clicks on the chart visualisation icon

**Then** : The user should be able to see the graphical representation of attendance trends, ticket prices, or event popularity over time which will help them in making a choice.
