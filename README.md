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

### User Story 2

As a user,
I should be able to see all upcoming events from all the cities when I have not searched for a specific city
So that I can list of events from all the cities at once.

### User Story 3

As a user,
I should be able to select city from the suggested list
So that I can select an event for the specific city.

### Scenario 1

**Given**: User is typing an event and filter option is visible with different possibilities

**When**: The user selects an event

**Then**: The user should be able to see the list of events available in the city.

### Scenario 2

**Given**: User is typing an upcoming event from all the cities

**When**: The user selects an event from all the cities

**Then**: The user should be able to see the list of events from all the cities at once.

### Scenario 3

**Given**: User is typing a city from the suggested list

**When**: The user selects a city

**Then**: The user should be able to select an events for a specific city.

### Feature 2 : Show/Hide Event Details

### User Story 1

As a user,
I should be able to show/hide event details
So that I can handle the information displayed on the screen.

### User Story 2

As a user,
I want event details to be collapsed by default
So that the information can not be displayed.

### Scenario 1

**Given**: User has decided to click on an event to see more details of an event.

**When**: User clicks on the button

**Then**: The user is able to see more details about an event.

### Scenario 2

**Given**: User has decided to click on an event to see more details of an event.

**When**: User clicks on the button

**Then**: The user is able to see more details about an event.

### Feature 3: Specify Number of Events

### User Story 1

As a user,
I should be able to specify number of events
So that I can quickly find the number of events registered.

### User Story 2

As a user,
I should be able to change the number of events displayed
So that I can quickly see the events.

### Scenario 1

**Given** : The user should be able to select the number of events.

**When** : user clicks on the button.

**Then** : The user should be able to see specific number of events like 6 at a time.

### Scenario 2

**Given** : The user should be able to change the number of events.

**When** : user clicks on the button.

**Then** : The user should be able to quickly see the number of events.

### Feature 4 : Use App when offline

### User Story 1

As a user,
I should be able to use app when when offline
So that I can see the information all the time.

### User Story 2

As a user,
I should see an error message when I change search setting without internet connection.

### Scenario 1

**Given** : The user has installed an app and wants to use it offline

**When** : The user clicks on the installed app on the phone

**Then** : The user should be able to see the information on the app even the app is offline.

### Scenario 2

**Given** : The user has installed an app and wants to use it offline

**When** : The user search setting without internet connection

**Then** : The user should see an error message without an internet connection.

### Feature 5 : Add an App shortcut to the home screen

### User Story 1

As a user,
I should be to add an app shortcut to the home screen
So that I can access it quickly.

### Scenario 1

**Given** : The user clicked on the app shortcut on the home screen

**When** : The user clicks on the app shortcut

**Then** : The user should be able to find to find the shortcut of the app.

### Feature 6 : Display chart visualizationevent details

### User Story 1

As a user,
I should be able to display chart visualisation events details
So that I can see the visual representation of the events which will make user to help in making a choice.

### Scenario 1

**Given** : The user choose wants to know more about event, they navigate to the event page and see that the chart visualisation option is available

**When** : The user clicks on the chart

**Then** : The user should be able to see the representation of events which will help them in making a choice.
