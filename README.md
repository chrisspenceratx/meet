HOW TO RUN LOCALLY (view on localhost:3000):
cd meet
npm run start

HOW TO DEPLOY TO GH PAGES:
npm run deploy

LIVE SITE:
our site is live at https://chrisspenceratx.github.io/meet/
------------

(FOR 4.2)
QUESTION: "Why use serverless?":
ANSWER: Serverless architecture is an great choice for small apps with few viewers due to cost-efficiency, simplified development, and automatic scaling, allowing developers to focus on app functionality without managing server infrastructure. 

It offers streamlined deployment, resource optimization, and a low financial barrier, making it an attractive option for startups or small-scale applications.


------------

KEY FEATURE 1: Filter Events By City
USER STORY: 
    As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
TEST SCENARIO 1:
    Given the user needs to find events by city;
    When the user has a search box that allows you to organize events by city;
    Then the user should see a events, neatly organized one city at a time.


KEY FEATURE 2: Show/Hide Event Details
USER STORY:
     As a user, I would like to be able to show/hide event details so that I can see more or less information about an event.
TEST SCENARIO 2:
    Given the user is open to a page that details an event;
    When the user has a search engine on the site, that gives the option to show all or deselect specific information on your event; 
    Then the user should receive a list of cities (suggestions) that match what they’ve typed.


KEY FEATURE 3: Specify Number of Events
USER STORY: 
    As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
TEST SCENARIO 3:
    Given the user has an exact number of events to display on a single page of an event search;
    When the user inputs a number in a min/max option for events listed;
    Then the exact number of events should display.


KEY FEATURE 4: Use the App When Offline
USER STORY: 
    As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
TEST SCENARIO 4: 
    Given the app was used online, but is now no longer online;
    When the user clicks on a websites visited content;
    Then the user experience can continue even when internet is not available.



KEY FEATURE 5: Add an App Shortcut to the Home Screen
USER STORY: 
    As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.

TEST SCENARIO 5: 
    Given the app is opened and does not already have a clickable shortcut to the home screen;
    When the user clicks on the link to the home screen;
    Then the link on the app that goes to the home screen does just that.


KEY FEATURE 6: Display Charts Visualizing Event Details
USER STORY: 
    As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

TEST SCENARIO 6:
    Given the user wants to compare/contrast events in every city; 
    When the app is open;
    Then the user should be able to see multiple events in multiple cities in a clear, readable chart.