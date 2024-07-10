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

**Then**: The events and event details from all the cities are visible

### Scenario 2 User should see a list of suggestions when they search for a city.

**Given**:The main page is open

**When**: The user starts typing in the city textbox

**Then**: The event details about searched city are visible.

### Scenario 3 User can select a city from the suggested list.

**Given**: The user was typing “Berlin” in the city textbox AND the list of suggested cities is showing

**When**: The user selects a city (e.g., “Berlin, Germany”) from the list

**Then**: The list of upcoming events about a specific city are visible.

### Feature 2 : Show/Hide Event Details

### User Story 1

As a user,
I should be able to show/hide event details
So that I can handle the information displayed on the screen.

### Scenario 1 User has clicked to expand show more details of the event

**Given**: User has decided to click on an event to see more details of an event

**When**: User clicks on the button

**Then**: The event element is expanded and details about the event are visible

### Feature 3: Specify Number of Events

### User Story 1

As a user,
I should be able to specify number of events
So that I can quickly find the number of events registered.

### User Story 2

As a user,
I want to see 32 events by default when I haven't specified a number
So that I can see all the events at once.

### Scenario 1 User has displayed on the page a specific number of events;

**Given** : The user selects a city for ex. "Berlin" from the list

**When** : The user clicks on the button

**Then** : The specific number of events like 6 at a time are displayed.

### Scenario 2 User has displayed on the page when they have not specified number of events;

**Given** : The user has not specified the number of event

**When** : The user access the app

**Then** : The 34 events are displayed by default.

### Feature 4 : Use App when offline

### User Story 1

As a user,
I should be able to use app when when offline
So that I can see the information all the time.

### Scenario 1 User has the app installed or shortcut on home screen but no internet connection.

**Given** : The user clicked on the shortcut

**When** : The user clicks on the installed app on the phone

**Then** : The information on the app are visible even the app is offline.

### Feature 5 : Add an App shortcut to the home screen

### User Story 1

As a user,
I should be to add an app shortcut to the home screen
So that I can access it quickly.

### Scenario 1 User has the app open and decides to create a shortcut for home creen.

**Given** : The user clicked on the app shortcut on the home screen

**When** : The user clicks on the button "Create home shortcut"

**Then** : The shortcut of the app is visible in the home screen.

### Feature 6 : Display chart visualizationevent details

### User Story 1

As a user,
I should be able to display chart visualisation events details
So that I can see the visual representation of the events which will make user to help in making a choice.

### Scenario 1 User is planning a weekend and browses through a list of upcoming events from (e.g., “Berlin, Germany”).

**Given** : The user choose wants to know more about event, they navigate to the event page and see that the chart visualisation option is available

**When** : The user clicks on the chart visualisation icon

**Then** : The graphical representation of attendance trends, ticket prices, or event popularity over time are displayed which will help them in making a choice.
