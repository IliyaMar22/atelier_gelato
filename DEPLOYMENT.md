# 🚀 Deployment Guide - Atelier del Gelato

This guide will help you deploy your Atelier del Gelato website to Vercel for free hosting.

## 🌐 Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose `IliyaMar22/atelier_gelato`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (2-3 minutes)
   - Your site will be live at `https://atelier-gelato-xxx.vercel.app`

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Directory**
   ```bash
   cd atelier-del-gelato
   vercel
   ```

4. **Follow Prompts**
   - Link to existing project: No
   - Project name: atelier-gelato
   - Directory: ./
   - Override settings: No

## 🔧 Post-Deployment Configuration

### 1. Custom Domain (Optional)

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Domains" tab
   - Add your custom domain (e.g., `atelierdelgelato.com`)

2. **Update DNS**
   - Add CNAME record pointing to Vercel
   - Wait for DNS propagation (up to 24 hours)

### 2. Environment Variables (If Needed)

If you add any environment variables later:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy the project

## 📱 Testing Your Deployment

### 1. Check All Pages
- [ ] Home page loads correctly
- [ ] All images display properly
- [ ] Navigation works on mobile and desktop
- [ ] Contact form and map work
- [ ] Social media links work

### 2. Test Responsiveness
- [ ] Mobile view (iPhone/Android)
- [ ] Tablet view (iPad)
- [ ] Desktop view
- [ ] All breakpoints work correctly

### 3. Performance Check
- [ ] Page loads quickly
- [ ] Images are optimized
- [ ] No console errors

## 🔄 Updating Your Website

### Method 1: GitHub Integration (Automatic)
1. Make changes to your local code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. Vercel automatically redeploys

### Method 2: Manual Deploy
1. Make changes locally
2. Deploy directly:
   ```bash
   vercel --prod
   ```

## 🛠️ Troubleshooting

### Common Issues

**Images Not Loading**
- Check image paths in `public/images/`
- Ensure images are committed to GitHub
- Verify file names match exactly

**Build Errors**
- Check for TypeScript errors: `npm run build`
- Ensure all dependencies are installed: `npm install`
- Check Vercel build logs for specific errors

**Mobile Issues**
- Test on actual devices, not just browser dev tools
- Check viewport meta tag is present
- Verify responsive classes are correct

### Getting Help

1. **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
2. **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
3. **GitHub Issues**: Create an issue in your repository

## 📊 Monitoring & Analytics

### Vercel Analytics (Free)
1. Enable in Vercel Dashboard
2. Get insights on:
   - Page views
   - Performance metrics
   - User behavior

### Google Analytics (Optional)
1. Get Google Analytics tracking ID
2. Add to `src/app/layout.tsx`
3. Track visitor behavior

## 🎯 Next Steps

After successful deployment:

1. **Share Your Website**
   - Send the Vercel URL to friends/family
   - Test on different devices
   - Get feedback

2. **SEO Optimization**
   - Submit to Google Search Console
   - Add structured data
   - Optimize meta descriptions

3. **Content Updates**
   - Update weekly flavors
   - Add new photos
   - Modify business information

4. **Performance Monitoring**
   - Set up Vercel Analytics
   - Monitor Core Web Vitals
   - Optimize based on data

---

**🎉 Congratulations!** Your Atelier del Gelato website is now live and ready to create "Baci moments" for your customers!
