**Tracks**
# React Native Full Stack App

This is a full-stack mobile application built with React Native (frontend) and Express/Python (backend).

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
