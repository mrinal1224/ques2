# Problem Description:

You are tasked with creating a React application for managing a simple contact list. The application should allow users to add and remove contacts. Each contact has a name and a phone number. Your goal is to implement this functionality.

# Here are the requirements:

Create a React component called ContactList that displays a list of contacts.
Each contact should have a name, a phone number, and a "Delete" button.
Initially, the contact list should be empty.
Provide a form for users to enter the name and phone number of a new contact.
When a user submits the form, the new contact should be added to the list.
When a user clicks the "Delete" button of a contact, that contact should be removed from the list.

# Hints:

Use the useState hook to manage the list of contacts.
Maintain an array of contact objects with properties like id, name, and phoneNumber.
Use the map function to render each contact and update the contact list when contacts are added or removed.


# Solution Approach:

Create a React application using create-react-app.
Define a state variable to manage the list of contacts.
Render the list of contacts using the map function, including names, phone numbers, and "Delete" buttons.
Implement event handlers to add new contacts and remove contacts from the list.


# only for problem setter ->

complete solution is added inside inside ContactList.js Component and it has been rendered in app.js and test cases are written inside testCases.js