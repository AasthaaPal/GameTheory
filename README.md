## Aastha Pal: IIT2021020

## Overview
This is a full-stack application developed for a sports technology company to manage bookings across multiple centers. It allows center operations teams to view and create bookings for various sports and courts.

### Key features include:

- Support for multiple centers, sports, and courts/resources.
- 60-minute booking slots with conflict resolution to prevent double bookings.
- A user-friendly interface for managing bookings.


## Deployed Applications
- Frontend:
- Backend: 

## Screenshots



## Prerequisites

To run this project locally, ensure you have the following installed:
- Node.js (version compatible with React 18.3.1)
- npm (comes with Node.js)

## Setup and Installation 

1. Clone the repository:
   ```
   git clone https://github.com/AasthaaPal/GameTheory.git
   cd GTScheduler
   ```
2. Navigate to the project directory and install dependencies:
   
   
   - Frontend
    cd frontend
    npm install
    - Backend
    cd backend
    npm install

3. Run the Backend Server
    
    cd backend
    node server.js
    
    The backend will start running at http://localhost:5050.

4. Run the Frontend Application
    cd frontend
    npm start
    
    The frontend will be available at http://localhost:5174.




## Project Structure
The project consists of several key components:
- `BookingCard.jsx`: Displays individual booking information
- `BookingModal.jsx`: Handles the creation of new bookings
- `SignupModal.jsx`: Handles new customer registration
- `Table.jsx`: Main component for displaying and managing the schedule
- `Sidebar.jsx`: Navigation component

## Technologies Used
- React 18.3.1
- Vite 5.4.8
- Tailwind CSS 3.4.14
- Axios for API requests
- React DatePicker for date selection
- React Toastify for notifications

## API Integration
The application interacts with a backend API running on `http://localhost:5050`. Ensure the backend server is running and accessible.

## Assumptions and Limitations
- Assumptions:

1. All time slots are exactly 60 minutes long.
2. Booking conflicts are resolved server-side by checking for overlapping slots.
3. A specific data structure for centers, sports, and bookings is assumed.

- Limitations:

1. Recurring bookings are not supported.
2. The application is not fully responsive on smaller screens.
3. Authentication is not implemented (trusted users assumed).


