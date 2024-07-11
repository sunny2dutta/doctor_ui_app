# Doctor and Patient Appointment System

This project is a simple web application system for managing patient appointment requests. It consists of two parts:
1. A doctor-facing UI to view and manage current and historical patient appointments.
2. A patient-facing UI to book appointments and select appointment times.

## Features

- **Doctor UI**:
  - View and manage patient appointment requests.
  - View historical patient records.
  - Send reminders to historical patients to book appointments.
  - Simple and intuitive UI with tab navigation.
  - Real-time updates of appointment requests.

- **Patient UI**:
  - Book appointments and select appointment times.
  - Provide details such as name, disease, age, gender, and a description of the symptoms.

## Project Structure

The project consists of the following main components:

- **server.mjs**: The Node.js server using Express to handle API requests.
- **public/**: The directory containing the frontend files.
  - **index.html**: The main HTML file for the doctor's UI.
  - **styles.css**: The CSS file for styling the web app.
  - **script.js**: The JavaScript file for client-side logic and interactions for the doctor's UI.
  - **patient.html**: The HTML file for the patient booking UI.
  - **patient.js**: The JavaScript file for client-side logic and interactions for the patient booking UI.

## Prerequisites

- Node.js and npm installed on your machine.

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/doctor_ui_app.git
   cd doctor_ui_app


Open the patient app to book an appointment:
Open your browser and navigate to http://localhost:3000/patient.html.

Open the doctor's UI to see the appointments:
Open another tab or window and navigate to http://localhost:3000.
