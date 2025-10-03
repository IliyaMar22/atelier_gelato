# Atelier del Gelato Website

A modern, responsive website for Atelier del Gelato - a natural, gluten-free gelato shop in Sofia, Bulgaria.

## 🍨 About

This website showcases the artisanal gelato offerings of Atelier del Gelato, featuring:
- Weekly rotating flavors
- Natural, gluten-free ingredients
- Traditional Italian techniques
- Beautiful, modern design

## 🚀 Features

- **Responsive Design**: Optimized for all devices
- **Modern UI**: Clean, gelato-inspired design with custom color palette
- **Interactive Components**: Product modals, contact forms, and gallery
- **Performance Optimized**: Built with Next.js 14 and Tailwind CSS
- **SEO Ready**: Proper meta tags and structured data
- **Easy Content Management**: Weekly flavors can be updated in `src/data/flavors.ts`

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Language**: TypeScript
- **Fonts**: DM Sans (body) + Titan One (headings)
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Products.tsx         # Weekly flavors showcase
│   ├── About.tsx            # About us section
│   ├── Gallery.tsx          # Image gallery
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer with links and info
├── data/
│   └── flavors.ts           # Weekly flavors data
└── lib/                     # Utility functions (future)
```

## 🎨 Design System

### Colors
- **Primary**: Pink gelato (#ff6b9d)
- **Secondary**: Orange gelato (#ffa726)
- **Accent**: Mint gelato (#66bb6a)
- **Cream**: Background (#fff8f0)
- **Chocolate**: Text (#8d4e00)
- **Vanilla**: Light background (#f5f5dc)
- **Strawberry**: Accent background (#ffcdd2)

### Typography
- **Headings**: Titan One (display font)
- **Body**: DM Sans (clean, readable)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd atelier-del-gelato
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📝 Content Management

### Updating Weekly Flavors

Edit `src/data/flavors.ts` to update the weekly flavors:

```typescript
export const weeklyFlavors: Flavor[] = [
  {
    id: 1,
    name: "New Flavor",
    description: "Description of the new flavor",
    color: "from-pink-200 to-pink-300",
    icon: "🍨",
    category: "seasonal",
    allergens: ["milk", "eggs"],
    isGlutenFree: true,
    isVegan: false
  },
  // ... more flavors
];
```

### Adding Images

1. Add images to `public/images/` directory
2. Update components to use the new images
3. Optimize images for web (WebP format recommended)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting provider

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Style with Tailwind CSS classes

### Modifying Colors

Update the color palette in:
- `src/app/globals.css` (CSS variables)
- `tailwind.config.ts` (Tailwind colors)

## 📞 Contact Information

- **Address**: ulitsa Georgi S. Rakovski 149, Sofia, Bulgaria
- **Phone**: +359 (0) 2 123 4567
- **Email**: hello@atelierdelgelato.bg
- **Hours**: Daily 11:30 AM - 8:00 PM

## 📄 License

This project is created for Atelier del Gelato. All rights reserved.

---

**Created with ❤️ for Atelier del Gelato**