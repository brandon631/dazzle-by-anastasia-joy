# Dazzle ✨

A luxe boutique website built with Vite + React + Tailwind CSS, featuring Decap CMS for content management.

## Features

- 🎨 Dark, high-contrast premium design with sparkle effects
- 🖼️ Responsive product gallery with lightbox modals
- ✨ Featured products section on homepage
- 📝 Decap CMS (Netlify CMS) for easy content management
- 🔐 Netlify Identity + Git Gateway for secure admin access
- ⚡ Fast builds with Vite

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
dazzle/
├── public/
│   ├── admin/
│   │   ├── index.html      # Decap CMS entry point
│   │   └── config.yml      # CMS configuration
│   ├── uploads/            # Uploaded images (via CMS)
│   ├── logo.png            # Your logo (add this!)
│   └── _redirects          # Netlify SPA redirects
├── src/
│   ├── components/         # React components
│   ├── content/
│   │   ├── products/       # Product markdown files
│   │   └── site/           # Site settings JSON
│   ├── pages/              # Page components
│   ├── utils/              # Helper functions
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Tailwind + custom styles
├── netlify.toml            # Netlify configuration
├── tailwind.config.js
└── vite.config.js
```

## Deploying to Netlify

### Step 1: Push to GitHub

1. Create a new GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

### Step 2: Connect to Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

### Step 3: Enable Netlify Identity

1. In your Netlify site dashboard, go to **Site settings** → **Identity**
2. Click **Enable Identity**
3. Under **Registration preferences**, select **Invite only**
4. Under **External providers**, you can optionally add Google, GitHub, etc.

### Step 4: Enable Git Gateway

1. Still in Identity settings, scroll down to **Services**
2. Click **Enable Git Gateway**
3. This allows the CMS to commit changes to your repository

### Step 5: Invite Admin User

1. Go to **Identity** tab in your site dashboard
2. Click **Invite users**
3. Enter your email address
4. Check your email and accept the invitation
5. Set your password

### Step 6: Access the Admin Panel

1. Visit `https://YOUR-SITE.netlify.app/admin/`
2. Click "Login with Netlify Identity"
3. Enter your credentials
4. Start managing your content!

## Using the CMS

### Adding Products

1. Go to `/admin` and log in
2. Click **Products** in the sidebar
3. Click **New Product**
4. Fill in the fields:
   - **Title:** Product name
   - **Description:** Product description
   - **Price:** e.g., "$48" (optional)
   - **Featured:** Toggle on to show on homepage
   - **Image:** Upload a product image
   - **Created Date:** When the product was created
5. Click **Publish**

### Editing Site Settings

1. Go to `/admin` and log in
2. Click **Site Settings** in the sidebar
3. Click **General Settings**
4. Update:
   - **Headline:** Main hero headline
   - **Subheadline:** Subtitle text
   - **Footer Note:** Footer copyright text
5. Click **Publish**

## Adding Your Logo

Replace `/public/logo.png` with your own logo file. Recommended:
- Format: PNG with transparency
- Size: At least 200x200px
- Square or horizontal orientation works best

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  'luxury': {
    900: '#0a0a0f',  // Darkest background
    800: '#12121a',  // Card backgrounds
    700: '#1a1a25',  // Borders, hovers
  },
  'accent': {
    pink: '#ff6b9d',    // Primary accent
    purple: '#b56cff',  // Secondary accent  
    gold: '#ffd700',    // Highlights
  }
}
```

### Fonts

The site uses:
- **Playfair Display** for headings
- **Inter** for body text

To change fonts, update the Google Fonts link in `index.html` and `tailwind.config.js`.

## Troubleshooting

### CMS not loading?
- Make sure Netlify Identity is enabled
- Check that Git Gateway is enabled
- Verify the `config.yml` branch matches your repo (default: `main`)

### Images not showing?
- Ensure images are uploaded to `/public/uploads/`
- Check the image path starts with `/uploads/`

### Build failing?
- Run `npm run build` locally to check for errors
- Ensure all dependencies are in `package.json`

## License

MIT
