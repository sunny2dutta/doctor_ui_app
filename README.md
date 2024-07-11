This project is a simple web application for a medical practitioner to manage patient appointment requests and historical patient records. The app displays current appointments on the home screen by default, and historical patients can be accessed via a separate tab.

## Features

- View and manage patient appointment requests
- View historical patient records
- Send reminders to historical patients to book appointments
- Simple and intuitive UI with tab navigation

## Project Structure

The project consists of the following main components:

- **server.mjs**: The Node.js server using Express to handle API requests.
- **public/**: The directory containing the frontend files.
  - **index.html**: The main HTML file with the structure of the web app.
  - **styles.css**: The CSS file for styling the web app.
  - **script.js**: The JavaScript file for client-side logic and interactions.


## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/doctor_ui_app.git
   cd doctor_ui_app

To run:

1. npm init -y
2. npm install express body-parser cors
3. npm start
