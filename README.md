**Tracks**
# React Native Full Stack App

# 🏃‍♂️ Activity Tracker App

A full-stack mobile application built with **React Native** (frontend) and **Express** (backend), designed to help users **track and monitor their physical activities** in real-time.

## 📱 Features

### 🔐 Authentication
- **Sign Up**: Create a new account.
- **Sign Out**: Easily log out from the account screen.

### 🗺️ Track Creation
Users can record their physical activities by following these steps:
1. **Enter a name** for your track.
2. Tap the **Start** button to begin tracking your movement.
3. After completing your activity, tap the **Stop** button.
4. Save the track — it will now appear in your **Track List**.

### 📂 Track List & Details
- View a list of all saved tracks.
- Tap on any track to view detailed information about that specific activity.

### 📍 Location Access
- The app requires **location permission** to function properly.
- Location data is used to record and display the user's movement during an activity.

## 🛠️ Development Note

During development, **mock location data** is used to simulate movement for testing purposes.

To enable real GPS tracking, **comment out** the following line in `src/screens/TrackCreateScreen`:

import '../_mockLocation';


## 🔧 Project Structure
├── frontend/ # React Native code
├── backend/ # Backend API using express api

#Getting started
To get started with the project:
1. Clone the Repository
2. cd track-server
3. npm install
4. npm start

To get started with the mobile app(frontend code):
1. cd tracks
2. npm install
3. npm start

I have used ngrok for the api and networking and it is the free version so a small change you need to do:
1. cd tracks
2. ngrok http 3000
3. you get the link like this  "https://6c34ed73b643.ngrok-free.app".
4. Copy and paste it in the src/api/track.js and go to base url and paste it there in between "".
