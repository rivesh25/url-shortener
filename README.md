# BitLinks (URL Shortener)

BitLinks is a small app that turns long links into short, easy-to-share links.

## What you can do

- Paste a long URL
- Pick a custom short name (example: `my-link`)
- Get a short link like `http://localhost:3000/my-link`
- Opening the short link takes you to the original URL

## Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Add environment variables

Create a file named `.env.local` in the project root and add:

```bash
MONGODB_URI="YOUR_MONGODB_CONNECTION_STRING"
NEXT_PUBLIC_HOST="http://localhost:3000"
```

What these mean:

- `MONGODB_URI`: where your links are saved (MongoDB connection string)
- `NEXT_PUBLIC_HOST`: the base address used when showing the generated short link

### 3) Run the project

```bash
npm run dev
```

Open `http://localhost:3000`.

## How to use

1. Go to `/shorten`
2. Enter the original URL
3. Enter a short name (must be unique)
4. Click **Generate** and copy your new link

## Common issues

- If the app says the short URL already exists, choose a different short name.
- If the generated link has the wrong domain, update `NEXT_PUBLIC_HOST`.
