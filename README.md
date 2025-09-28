# GPAMaster.in

GPAMaster.in is a platform built **for college students, by college students** — helping them access study resources, connect with peers, and prepare for exams smarter and faster.

Currently serving **NSUT** and **DU** students with notes, PYQs, resources, and a dedicated discussion community.

---

## Features

- **Notes & Resources** – Handwritten notes, books, and PYQs tailored for NSUT and DU students.
- **Discussion Section** – Post questions, share ideas, and comment on discussion posts.
- **User Profiles** – Manage your personal profile, contributions, and activity.
- **Authentication** – Secure login/signup with **Google OAuth**.
- **Payments** – Integrated with **Razorpay** (custom implementation) for handling premium features.
- **Community Driven** – Built to empower students through collaboration and sharing.

---

## Tech Stack

- **Frontend & Backend**: [Next.js](https://nextjs.org/) with **TypeScript**
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Payments**: [Razorpay Node SDK](https://razorpay.com/docs/)
- **Authentication**: Google OAuth
- **Deployment**: Google Cloud

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/AnshulAnand/gpamaster.git
cd gpamaster
```

Install dependencies:

```bash
npm install
```

Create a .env file in the root directory and add the following:

```bash
MONGO_URI=
NEXT_PUBLIC_GOOGLE_CLIENT_ID=
GOOGLECLIENTSECRET=
NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URL=
JWT_TTL=
SALT_WORKFACTOR=
JWT_SECRET=
NEXT_PUBLIC_DOMAIN=
RAZORPAY_KEY_ID=
RAZORPAY_SECRET=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

Run the development server:

```bash
npm run dev
```
