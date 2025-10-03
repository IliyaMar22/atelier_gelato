# 🍨 Atelier del Gelato

**Creating Baci Moments Daily**

A modern, responsive website for Atelier del Gelato - an artisanal gelato shop in Sofia, Bulgaria. Built with Next.js 14, TailwindCSS, and designed for optimal performance across all devices.

## 🌟 Features

### 🎨 Modern Design
- **Responsive Design**: Mobile-first approach, works perfectly on phones, tablets, and desktops
- **Beautiful UI**: Clean, modern interface with gelato-inspired color palette
- **Interactive Elements**: Smooth animations and hover effects
- **Custom Logo**: Professional SVG logo with romantic couple theme

### 📱 Fully Responsive
- **Mobile Navigation**: Collapsible hamburger menu
- **Flexible Grids**: Adapts from 1 column (mobile) to 3 columns (desktop)
- **Touch-Friendly**: Large buttons and tap targets
- **Optimized Images**: Next.js Image component for fast loading

### 🍦 Complete Website Sections
- **Hero Section**: Eye-catching gelato display with call-to-action
- **Products**: Weekly rotating gelato flavors showcase
- **Desserts**: Signature tiramisu, lemon tart, and cheesecake
- **Gallery**: Photo gallery with all shop and product images
- **Menu**: Interactive menu sections for gelato, desserts, and beverages
- **Instagram Feed**: Social media integration
- **Contact**: Interactive Google Maps and social media links
- **Footer**: Complete site navigation and business information

### 🚀 Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TailwindCSS**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **Image Optimization**: Automatic image optimization and lazy loading
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Vercel Ready**: Optimized for Vercel deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Images**: Next.js Image component
- **Icons**: Custom SVG icons
- **Fonts**: Google Fonts (DM Sans, Titan One)
- **Deployment**: Vercel

## 📁 Project Structure

```
atelier-del-gelato/
├── public/
│   └── images/
│       ├── gallery/          # Gallery photos
│       ├── desserts/         # Dessert photos
│       ├── menu/             # Menu photos
│       └── instagram/        # Instagram feed images
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Products.tsx      # Gelato flavors
│   │   ├── Desserts.tsx      # Desserts section
│   │   ├── Gallery.tsx       # Photo gallery
│   │   ├── Menu.tsx          # Menu sections
│   │   ├── InstagramFeed.tsx # Social media
│   │   ├── Contact.tsx       # Contact & map
│   │   ├── Footer.tsx        # Site footer
│   │   └── Logo.tsx          # Custom logo
│   └── data/
│       └── flavors.ts        # Weekly flavors data
├── scripts/
│   ├── deploy.sh             # Deployment script
│   └── prepare-assets.md     # Asset preparation guide
├── vercel.json               # Vercel configuration
└── tailwind.config.ts        # TailwindCSS config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/IliyaMar22/atelier_gelato.git
   cd atelier_gelato
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Deploy with zero configuration

2. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update DNS settings as instructed

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 767px (1 column layout)
- **Tablet**: 768px - 1023px (2 column layout)
- **Desktop**: 1024px+ (3 column layout)

## 🎨 Customization

### Colors
The website uses a gelato-inspired color palette defined in `src/app/globals.css`:
- Primary: Pink tones
- Secondary: Cream and vanilla
- Accent: Chocolate browns

### Content
- **Flavors**: Update `src/data/flavors.ts` for weekly flavor changes
- **Images**: Replace images in `public/images/` directories
- **Text**: Edit component files for content updates

## 📸 Image Requirements

### Gallery Images
- **Format**: JPG, PNG, WebP
- **Size**: 1200x1200px recommended
- **Files**: gallery1.jpg - gallery5.jpg, inside.jpg

### Dessert Images
- **Format**: JPG, PNG, WebP
- **Size**: 800x800px recommended
- **Files**: lemon-tart.jpg, cheesecake.jpg

### Menu Images
- **Format**: JPG, PNG, WebP
- **Size**: 1200x800px recommended
- **Files**: menu1.jpg - menu3.jpg

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific settings:

```env
# Add any required environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Vercel Configuration
The `vercel.json` file is pre-configured for optimal deployment.

## 📞 Support

For questions or support regarding this website:
- **Repository**: [https://github.com/IliyaMar22/atelier_gelato](https://github.com/IliyaMar22/atelier_gelato)
- **Business**: Atelier del Gelato, Sofia, Bulgaria

## 📄 License

This project is proprietary and created specifically for Atelier del Gelato.

---

**🍨 Creating Baci Moments Daily** - *Natural, Gluten-Free Gelato in Sofia, Bulgaria*