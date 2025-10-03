# Asset Integration Guide

## 📸 Image Requirements

### Hero Section
- **Main gelato image**: 800x600px minimum, WebP format preferred
- **Background elements**: 400x400px, can be PNG with transparency
- **Logo**: 200x200px, SVG or PNG with transparency

### Gallery Images
- **Gelato display**: 600x600px, square format
- **Shop interior**: 800x600px, landscape format
- **Making process**: 600x400px, landscape format
- **Fresh ingredients**: 600x400px, landscape format
- **Customer favorites**: 600x600px, square format
- **Shop exterior**: 800x600px, landscape format

### Product Images
- **Individual flavors**: 400x400px, square format
- **Flavor close-ups**: 600x600px, square format

## 📁 Directory Structure

Create the following directories in `public/`:

```
public/
├── images/
│   ├── hero/
│   │   ├── gelato-main.webp
│   │   ├── logo.svg
│   │   └── background-elements/
│   ├── gallery/
│   │   ├── display.webp
│   │   ├── interior.webp
│   │   ├── making-process.webp
│   │   ├── ingredients.webp
│   │   ├── favorites.webp
│   │   └── exterior.webp
│   ├── products/
│   │   ├── vanilla-bean.webp
│   │   ├── strawberry-dream.webp
│   │   ├── chocolate-delight.webp
│   │   ├── mint-fresh.webp
│   │   ├── pistachio.webp
│   │   └── lemon-sorbet.webp
│   └── about/
│       ├── process.webp
│       └── ingredients.webp
```

## 🔄 Image Optimization

### Before Uploading:
1. **Resize** images to appropriate dimensions
2. **Convert** to WebP format for better performance
3. **Compress** images (aim for < 200KB per image)
4. **Add alt text** for accessibility

### Tools for Optimization:
- **Online**: TinyPNG, Squoosh.app
- **Desktop**: ImageOptim (Mac), RIOT (Windows)
- **Command Line**: `cwebp` for WebP conversion

## 🎨 Logo Integration

### SVG Logo (Recommended):
1. Place logo in `public/images/hero/logo.svg`
2. Update `Header.tsx` to use the SVG
3. Ensure logo is scalable and looks good at different sizes

### PNG Logo:
1. Create multiple sizes: 32x32, 64x64, 128x128, 256x256
2. Place in `public/images/hero/logo-[size].png`
3. Use responsive images with `srcset`

## 📱 Responsive Images

### Implementation Example:
```tsx
import Image from 'next/image';

<Image
  src="/images/hero/gelato-main.webp"
  alt="Artisanal gelato display"
  width={800}
  height={600}
  priority
  className="rounded-2xl"
/>
```

## 🎯 Color Matching

### Brand Colors:
- **Primary**: #ff6b9d (Pink)
- **Secondary**: #ffa726 (Orange)
- **Accent**: #66bb6a (Mint)
- **Cream**: #fff8f0
- **Chocolate**: #8d4e00

### Image Editing Tips:
- Adjust saturation to match brand colors
- Use warm, inviting tones
- Ensure good contrast with text overlays
- Consider the overall color harmony

## 📋 Checklist

- [ ] All images optimized and compressed
- [ ] WebP format used where possible
- [ ] Alt text added for accessibility
- [ ] Responsive images implemented
- [ ] Logo integrated and scalable
- [ ] Color scheme matches brand
- [ ] Images load quickly (< 2 seconds)
- [ ] Mobile images look good on small screens

## 🚀 Next Steps

1. **Replace placeholders** in components with actual images
2. **Test performance** with real images
3. **Optimize further** if needed
4. **Update alt text** to be descriptive and SEO-friendly
5. **Test on different devices** to ensure images look good everywhere
