# PrintSmart - College Print Order & Pickup System

PrintSmart is a simple print ordering platform for students and local shop owners. Students can submit print requests, and shop owners manage them efficiently.

## 🔧 Features

### For Students:
- Login/signup with email and password
- Submit print requests with:
  - Number of copies
  - Print type (B/W, Color)
  - Print size (A4/A3)
  - File download URL (Google Drive/File.io)
- Orders go to a selected shop
- Get notified when the order is printed

### For Shop Owners:
- Register and log in with unique shop name
- View incoming orders for your shop
- Mark orders as "Printed"
- Sorted order queue (First Come First Serve)

## 🚀 Tech Stack
- HTML, CSS, JavaScript (Vanilla)
- Firebase Authentication
- localStorage (no database)

## 🔐 Login Credentials
- Separate login for Student and Shop Owner

## 🛠 How to Run
1. Clone the repo or download as ZIP
2. Add your `firebase-config.js` with Firebase Auth config
3. Open `login.html` and start using

## 🎯 Future Scope
- Add Firebase Realtime DB or Firestore
- Add email notifications
- Admin dashboard with analytics
