# 🏡 NestAway

A full-stack stay-booking web app where users can browse, create and manage property listings, upload photos and see each listing on a map.

🔗 **Live demo:** [nestaway-siz8.onrender.com/listings](https://nestaway-siz8.onrender.com/listings)

> The app is hosted on Render's free tier, so the first visit after a period of inactivity can take up to a minute to load.

---

## ✨ Features

- **Listings:** browse all stays, view details, and create, edit or delete your own listings (full CRUD)
- **Authentication:** sign up, log in and log out with secure password hashing (Passport.js)
- **Authorization:** only the owner of a listing can edit or delete it
- **Image uploads:** listing photos are uploaded to Cloudinary
- **Maps:** locations are geocoded and shown on a map with Mapbox
- **Validation:** server-side validation of form data with Joi
- **Sessions and flash messages:** sessions stored in MongoDB, with success and error alerts
- **Server-rendered UI:** EJS templates with shared layouts

## 🛠️ Tech stack

| Area | Tools |
| --- | --- |
| Runtime and server | Node.js, Express 5 |
| Database | MongoDB, Mongoose |
| Templating | EJS, EJS-Mate |
| Auth | Passport, passport-local, passport-local-mongoose |
| File uploads | Multer, Cloudinary |
| Maps | Mapbox SDK |
| Validation | Joi |
| Sessions | express-session, connect-mongo, connect-flash |
| Hosting | Render |

## 📁 Project structure

```
NESTAWAY/
├── controllers/     # Request handling logic
├── init/            # Database seed data
├── models/          # Mongoose schemas
├── public/          # Static files (CSS, JS, images)
├── routes/          # Express routes
├── utils/           # Helpers (error handling, async wrapper)
├── views/           # EJS templates
├── app.js           # App entry point
├── cloudConfig.js   # Cloudinary setup
├── middleware.js    # Auth and validation middleware
└── schema.js        # Joi validation schemas
```

## 🚀 Run it locally

**Requirements:** Node.js and a MongoDB database (local or MongoDB Atlas).

```bash
# 1. Clone the repo
git clone https://github.com/ShafiSK25/NESTAWAY.git
cd NESTAWAY

# 2. Install dependencies
npm install

# 3. Create a .env file (see below)

# 4. Start the app
node app.js
```

Then open `http://localhost:8080/listings` (use the port your `app.js` listens on).

### Environment variables

Create a `.env` file in the project root. Use the exact variable names your code reads in `app.js` and `cloudConfig.js`:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=a_long_random_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
```

Never commit your `.env` file. It is already listed in `.gitignore`.

## 🌐 Deployment

The app is deployed on [Render](https://render.com) as a Web Service:

- **Build command:** `npm install`
- **Start command:** `node app.js`
- **Environment variables:** added in the Render dashboard under *Environment*

## 🔮 Future improvements

- Search and filters by location and price
- Booking and availability calendar
- Wishlist and favourites

## 👤 Author

**Shafi SK**: [GitHub @ShafiSK25](https://github.com/ShafiSK25)
