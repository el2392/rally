# Rally Requirements Document
## Goal
Our goal is to create an app that streamlines the organization of groups of people. As of now, there is not a succinct or simple way to organize the schedules of many people without manually inputting and tracking each schedule. We seek to alleviate this burden by creating an app that consolidates the calendars of its members and returns several optimal time periods. After that, members can suggest locations and vote on their preferences. The app can also present its own suggestions based on the initial location of the organizer. This app will be released on all mobile platforms and be for public use in both social and professional situations. 

## Process
Outlined is a brief summary of the intended process: 
The organizer will be prompted to create initial restrictions for dates and places.
The organizer will send a link to invite attendees. 
Attendees will provide times that they are available or import their google or apple calendar.
The app will find optimal overlapping time periods based on the schedules.
The attendees will vote on their preferred time slot.
Once the time slot is chosen, the attendees will suggest locations to meet, which will be shown in the app. 
The app will also present suggestions of the best places to go based on the preferences of attendees.
The app will choose the location with the most votes or randomly in the case of a tie.
Once the location is scheduled, the app will send a calendar invite to all attendees.
At the time of the event, attendees can update their status via the app.

## Use Cases
_Use Case UML diagrams linked next to case number._


| Number | Title | Actor | Scenario | Preconditions | Extensions |
|---|---|---|---|---|---|
| 1 [(UML)](https://github.com/nyu-software-engineering/rally/blob/master/UML%20Diagrams/Use%20Cases/PNGs/UC_1.png) | Create Account | All Users | User launches the application. User provides email address for the account and creates a password. The user sets their screen name and possibly a profile picture. The user will save their changes and notified that edits can be made later on. |  |  |
| 2 [(UML)](https://github.com/nyu-software-engineering/rally/blob/master/UML%20Diagrams/Use%20Cases/PNGs/UC_2.png)| Create a Rally | Organizer | Organizer creates a new Rally event. Organizer names the event and is presented the opportunity to add preliminary members and desired activity tags if they wish. Organizer selects the duration of the Rally. If the Rally location is non-negotiable, organizer will indicate it and enter it now. If the Organizer would like to allow Rally to suggest locations based off of “Desired Activity” Tags, they will indicate it here. | Preconditions: Organizer has a Rally account |  |
| 3 [(UML)](https://github.com/nyu-software-engineering/rally/blob/master/UML%20Diagrams/Use%20Cases/PNGs/UC_3.png)| Add Members to Rally | All members | All members can click an “Add Member” button and enter the email addresses or usernames of those they’d like to invite. Added members will get a notification asking them to accept or deny the invitation to the Rally. | Must have an account to add members. Must have created a Rally. |  |
| 4 [(UML)](https://github.com/nyu-software-engineering/rally/blob/master/UML%20Diagrams/Use%20Cases/PNGs/UC_4.png)| Set Event Restrictions | Organizer | Organizer selects whether they would like to set event restriction. If yes, organizer can set a time window within which everyone’s calendars will be cross checked. Organizer can also set a city or location radius within which the event’s location must fall. | Organizer must have already created a Rally. |  |
| 5 [(UML)](https://github.com/nyu-software-engineering/rally/blob/master/UML%20Diagrams/Use%20Cases/PNGs/UC_5.png)| Insert Calendars | All members | All members will be asked to provide their availability. Members can enter their schedules/commitments manually, choosing to provide up to one (1) month of their upcoming schedule. Members can otherwise choose to sync their Google Calendar or Apple Calendar with the app. Members can choose whether the other members can or cannot see their provided schedule. | All users must have a Rally account and currently be invited to a Rally whose details have been completed by the organizer. |  |
| 6 [(UML)](https://github.com/nyu-software-engineering/rally/blob/master/UML%20Diagrams/Use%20Cases/PNGs/UC_6.png)| Vote on Time Slot | All members | All members will be able to see ordered list of up to four (4) of the time slots that service the maximum number of members. All members will vote for up to two (2) time slots. After x amount of time, the time slot with the most votes will be confirmed. | At least two (2) users including Organizer must be members of the Rally. | If the total number of available time slots is less than four (4), the ordered list will present all of the available time slots. |
| 7 [(UML)](https://github.com/nyu-software-engineering/rally/blob/master/UML%20Diagrams/Use%20Cases/PNGs/UC_7.png)| Add “Desired Activity” Tags | All members | All members can select “Desired Activity” tags from an existing list to add to the Rally to aid in picking a Rally location. (Tags can range from “Sports,” “Music,” “Dancing,” “Movie,” etc.) | Organizer must NOT have selected “Predetermined Location.” |  |
| 8 [(UML)](https://github.com/nyu-software-engineering/rally/blob/master/UML%20Diagrams/Use%20Cases/PNGs/UC_8.png)| Suggest Tentative Locations | All members | Members can click something akin to “Suggest Location,” and enter their proposed location. These proposals will be visible to all members of the Rally. | Organizer must NOT have selected “Predetermined Location” | If Organizer has set a location restriction, all suggested locations outside of this restriction will return an error and an informative message about the location restrictions that are in place. |
| 9 [(UML)](https://github.com/nyu-software-engineering/rally/blob/master/UML%20Diagrams/Use%20Cases/PNGs/UC_9.png)| Vote on location | All members | Members will be presented with all possible locations. Members will vote for up to two (2) locations. 24 hours before the scheduled hangout, if a location has not been confirmed, that with the most will be auto-confirmed. | Organizer must NOT have selected “Predetermined Location” | If Organizer has opted into location suggestions from Rally based on the Rally’s “Desired Activity” Tags, these locations will also appear on the list of possible Rally locations. |
| 10 [(UML)](https://github.com/nyu-software-engineering/rally/blob/master/UML%20Diagrams/Use%20Cases/PNGs/UC_10.png)| Confirm Location | Organizer | The organizer either confirms the location with the highest vote or picks a different location to confirm from the list. | Organizer must NOT have selected “Predetermined Location.” | If the event is less than 24 hours away, the location with the most votes is auto-confirmed. |
| 11 [(UML)](https://github.com/nyu-software-engineering/rally/blob/master/UML%20Diagrams/Use%20Cases/PNGs/UC_11.png)| Manage Event Reminders | All members | Members are given the choice of receiving push notifications leading up to the event. When Organizer clicks “Send Event Reminder,” a push notification will be sent to all members who have opted into event reminders. Organizer can attach a message. | Event date, time, and location must be confirmed. Only users who have opted into event reminders can receive notifications. |  |
| 12 [(UML)](https://github.com/nyu-software-engineering/rally/blob/master/UML%20Diagrams/Use%20Cases/PNGs/UC_12.png)| Delete account | All users | User deletes account and all of their stored data and calendars are released. | User has an account. |  |

## Domain Model
![alt text](https://github.com/nyu-software-engineering/rally/blob/master/UML%20Diagrams/DomainModel.png "Rally Domain Model")

## End User Observation
| Persona | Name | Issue | How Rally Solves the Issue |
|---|---|---|---|
| Student | Bob | Bob is a Junior at NYU studying computer science.  Like every student at NYU, Bob is extremely busy and so are his peers.  When trying to set up study sessions, Bob has to reach out to everyone, try to organize a time that works, try to find a place to study, and then relay all this information to the group.  Even after organizing everything, the agreed upon location may become unavailable or one of the peers may suddenly not be able to make it.  Bob then has to go through the whole process of finding a location and time and then re-verifying the details with the other attendees. | Rally would solve many of Bob’s issues by simplifying the process of setting up a study session.  Instead of having to constantly communicate between members, Rally would allow Bob to invite people to the itenary, determine when all members are available, suggest and allow the members to vote on locations, and keep an up-to-date event in everyones google calendar. |
| Athlete | Jim | Jim is a Sophomore at NYU studying finance at Stern.  One of Jim’s favorite hobbies is playing soccer and he tries to organize pick up games with his friends as often as possible.  However, trying to organize a game that needs at least 8 people to play is near impossible.  Not only does Jim have to find a time that works, Jim needs to find a place to play that everyone can agree upon. | A key aspect of Rally is allowing communities to meet together in a more efficient manner.  Jim needs a way to organize 8+ people.  Rally would be able to not only set up a time and place, but would allow Jim to save event types such as a pickup soccer game.  Jim just has to set it up once and from then on he would be able to just choose the preset and it would sent out the invite to a chosen list. |
| Friends | Sally | Sally is a new graduate living in NYC and has just started working at Facebook.  Sally is getting used to life after college and is slightly overwhelmed. Sally wants to reminisce her college days and set up a dinner with all her college friends.  However, all of Sally’s friends are very picky and they cannot agree if they want to eat dinner, go out for drinks, or go out clubbing.  Even if they do decide on an activity, they then have to decide on a place. | Rally tries to settle the age old issue of not being able to decide on what to do by being able to easily set up polls to allow members of the event to vote on what activity they want to do.  Rally would also, potentially through the yelp and groupon api, suggest activities and restaurants that correspond with the time and location. |
| Team Leader | Jessica | Jessica is the head of the trading team at a 2 sigma and manages 12 traders.  Jessica wants to organize a party for her team for hitting their goals for this month.  Jessica needs everyone to pitch in and bring stuff for the party such as food, drinks, and decorations. Jessica needs a way to make sure that everything that is needed for the party is accounted for and that everyone is doing their part. | Rally would enable Jessica to set up a time and place for the party, but also allow her to have a community to-do list that would allow her to assign tasks to certain people and organize who is responsible for what.  |

## Functional Requirements
* The application must allow users to create and delete accounts and Rally events

* The application must allow users to invite other members to Rally events

* The application must allow Rally organizers to set restrictions on the Rally itinerary, including ranges of dates, start/end times, and location radius. Rally organizers must also be able to toggle permission for members to suggest Rally locations.

* The application must require all members to either integrate their calendar (Google, Apple) or insert their availabilities manually once they have accepted a Rally invitation.

* The application must compare all members' calendars and return all timeslots of at least the predetermined Rally duration.

   * All members must be able to view the times/dates that maximize Rally attendance.

   * All members must be able to vote from the top four slots that maximize Rally attendance.

   * Organizers must be able to confirm vote.

* The application must allow members to select "Desired Activity" tags from an existing list of activity categories.

   * If the location was predetermined by Organizer, the application must not offer this option.

* The application must allow members to suggest locations and view all suggestions.

   * If the location was predetermined by Organizer, the application must not offer this option.

   * If the location suggestion falls outside of the Organizer's location restrictions, the application must return an error message.

* The application must allow members to vote on locations or choose "Random Selection," and Organizer can confirm the vote.

* The application must present members with the option to allow push notifications for event reminders.

## Non-Functional Requirements
* The time constraint on the application is the project due date, which is 5/2.

* The application must be built on the MERN stack (MongoDB, Express, React, Node)

* The application must be able to run on iOS and Android platforms.

* The application must be responsive(work well and adapt to different screen sizes).

* The application must be able to safely store user data and keep track of user accounts. 

* The application must only take up a reasonable amount of storage.

* The application must have an uptime of 99.99%.  

## Stakeholder Interview Info
* How would you typically go about arranging social hangouts with one to two friends (e.g. use social media, calendars/planners, etc.)? How does this process differ for arranging hangouts with three friends or more?
*Our stakeholders typically used text messaging or another messaging app to arrange hangouts, even if the number of friends differs.*

* What do you usually do during group hangouts with three friends or more? How do you come to a consensus about what you all want to do?
*Stakeholders usually answered that they go out to eat. They also mentioned that there is typically one person who takes charge and organizes the hangout, as well as the location of the hangout.*

* How would you feel about randomly having your hangout destination chosen given a list of all the suggestions of people within the group? How about voting on a spot and doing a “majority rules” type thing?
*Stakeholders really seemed to like the random picking idea. It seems it is less stressful for everyone. Feelings towards voting seemed to be more neutral.*

* How do you feel about sharing your availability? How about sharing your general calendar with friends in your itinerary?
*General calendar sharing seemed uncomfortable for many stakeholders. Availability sharing seemed fine.*

* How do your methods change for planning for different groups, such as colleagues at work for example?
*Stakeholders stated that methods do not change significantly, but it depends on the context of the relationship.*
