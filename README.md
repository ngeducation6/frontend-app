 
 git clone -b apptserver-br https://github.com/ngeducation6/backend-app.git
 cd backend-app/
 git status
 cd scheduler-service/
 # start scheduler
 npm install express node-schedule axios
 node scheduler.js
 #In another terminal start go server
 cd backend-app/
 go run .
 #In another terminal start the frontend app
 git clone -b appt-br https://github.com/ngeducation6/frontend-app.git
 cd frontend-app/
 git status
 npm install
 npm start

set a appointment time using the frontend , observer appointment is set in go server and scheduler. When the time of appointment kick you can observe logs to see webhook is invoked by scheduler.

# Appointment Scheduling Frontend

This is the frontend component of the Appointment Scheduling Application. It allows users to set appointments and check their status.

## Prerequisites

- Node.js and npm installed on your system.
- Basic knowledge of working with command line interfaces.

## Getting Started

1. Clone or download this repository to your local machine.
2. Open a terminal and navigate to the `frontend-app` directory.
3. Install the required dependencies by running:
npm install


4. Start the frontend development server by running:
npm start



5. Open a web browser and navigate to `http://localhost:3000` to use the frontend application.

## Usage

1. On the homepage, you'll see the current date and time displayed.
2. To set an appointment, select a date and time using the input field, enter the duration in nanoseconds, and click "Set Appointment."
3. To check the appointment status, click "Check Status" under "Appointment Status." The status will be displayed below.

## Important Notes

- Ensure that the backend server (`main.go`) and the scheduler service (`scheduler.js`) are both running while using the frontend.
- The URLs in the code should accurately point to the correct endpoints of the backend and scheduler services.


## Backend
Go to backend-app folder and run:
go run .

## scheduler 
go to scheduler-service folder and run:

npm install express node-schedule axios
node scheduler.js
