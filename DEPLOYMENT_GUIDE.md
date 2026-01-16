# 🚀 Deployment Guide

## Overview

This guide covers deploying your CD IT Solutions website to various hosting platforms. The site is built with Vite and can be deployed to static hosting services.

## 📦 Pre-Deployment Checklist

Before deploying:
- ✅ All content finalized
- ✅ Contact information updated
- ✅ Forms connected to backend/email service
- ✅ Images optimized
- ✅ Meta tags added for SEO
- ✅ Analytics tracking configured
- ✅ Favicon replaced
- ✅ Production build tested locally
- ✅ Environment variables configured (if any)

## 🏗️ Build for Production

### Step 1: Create Production Build
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Step 2: Test Production Build Locally
```bash
npm run preview
```

Open `http://localhost:4173` and verify everything works.

### Step 3: Check Build Output
```bash
ls dist/

# You should see:
# - index.html
# - assets/ (JS and CSS files)
# - vite.svg (or your favicon)
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel offers zero-configuration deployment for Vite projects.

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Configuration (Auto-detected)**
   ```
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Custom Domain (Optional)**
   - In Vercel dashboard, go to "Settings" > "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

**Automatic Deployments:**
- Every push to `main` branch triggers a new deployment
- Preview deployments for pull requests
- Rollback capability

---

### Option 2: Netlify

Netlify is another excellent option for static sites.

**Steps:**

1. **Build the Site**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login to Netlify
   netlify login

   # Deploy
   netlify deploy --prod --dir=dist
   ```

3. **Or Deploy via Drag & Drop**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder onto the deployment zone
   - Site is live instantly

4. **Or Connect to GitHub**
   - Click "New site from Git"
   - Connect your GitHub repository
   - Configure:
     ```
     Build command: npm run build
     Publish directory: dist
     ```

**Netlify Configuration File** (optional)

Create `netlify.toml` in project root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This enables proper routing for single-page applications.

---

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add homepage and deploy scripts:
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',  // Add this line
     plugins: [react()],
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository settings on GitHub
   - Navigate to "Pages"
   - Source: `gh-pages` branch
   - Your site will be live at the URL shown

---

### Option 4: AWS S3 + CloudFront

For enterprise-grade hosting with CDN.

**Steps:**

1. **Build the Site**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   - Go to AWS S3 Console
   - Create new bucket (e.g., `cd-solutions-website`)
   - Enable static website hosting
   - Set index document: `index.html`
   - Set error document: `index.html` (for SPA routing)

3. **Upload Files**
   ```bash
   # Install AWS CLI
   aws s3 sync dist/ s3://cd-solutions-website --delete
   ```

4. **Set Bucket Policy**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::cd-solutions-website/*"
       }
     ]
   }
   ```

5. **Create CloudFront Distribution (Optional but Recommended)**
   - Go to CloudFront Console
   - Create distribution
   - Origin: Your S3 bucket
   - Configure custom domain and SSL
   - Enable GZIP compression

---

### Option 5: Traditional Web Hosting

For shared hosting or VPS (cPanel, Plesk, etc.)

**Steps:**

1. **Build the Site**
   ```bash
   npm run build
   ```

2. **Upload via FTP/SFTP**
   - Connect to your server
   - Navigate to public_html or www folder
   - Upload all files from `dist/` folder

3. **Configure .htaccess** (for Apache servers)

   Create `.htaccess` in the root directory:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

   This enables proper SPA routing.

4. **For Nginx Servers**

   Add to nginx.conf:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

---

## 🔧 Environment Variables

If you need environment variables:

1. **Create .env file** (don't commit this!)
   ```
   VITE_API_URL=https://api.yoursite.com
   VITE_GA_ID=UA-XXXXXXXXX-X
   ```

2. **Use in code**
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **Configure in hosting platform**
   - Vercel: Project Settings > Environment Variables
   - Netlify: Site Settings > Environment Variables
   - AWS: Use Parameter Store

---

## 🌍 Custom Domain Setup

### DNS Configuration

For all platforms, you'll need to configure DNS:

**A Record (Apex domain: example.com)**
```
Type: A
Name: @
Value: <hosting-provider-ip>
```

**CNAME Record (Subdomain: www.example.com)**
```
Type: CNAME
Name: www
Value: <hosting-provider-domain>
```

### SSL/TLS Certificate

Most platforms provide free SSL:
- **Vercel**: Automatic SSL via Let's Encrypt
- **Netlify**: Automatic SSL via Let's Encrypt
- **CloudFront**: Use AWS Certificate Manager
- **Traditional Hosting**: Enable Let's Encrypt in cPanel

---

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Convert to WebP format
   - Compress using tools like TinyPNG
   - Add lazy loading attributes

2. **Code Splitting**
   Already configured with React Router

3. **Minification**
   Automatically handled by Vite build

4. **Compression**
   - Vercel/Netlify: Automatic
   - Traditional: Enable GZIP in server config

### After Deployment

1. **Test with Lighthouse**
   - Open Chrome DevTools
   - Run Lighthouse audit
   - Target scores: 90+ across all metrics

2. **Monitor Performance**
   - Google Analytics
   - Real User Monitoring (RUM)
   - Server logs

---

## 🔐 Security Considerations

### Headers

Add security headers (in hosting platform settings or server config):

```
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### HTTPS

Always use HTTPS:
- Protects user data
- Required for modern features
- Improves SEO

---

## 📈 Analytics Setup

### Google Analytics

1. **Add tracking code to index.html**
   ```html
   <!-- In <head> section -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Or use environment variable**
   ```javascript
   const GA_ID = import.meta.env.VITE_GA_ID;
   ```

---

## 🧪 Post-Deployment Testing

After deployment, verify:

- [ ] All pages load correctly
- [ ] Theme toggle works
- [ ] Forms submit properly
- [ ] Images load
- [ ] Custom domain works (if configured)
- [ ] SSL certificate valid
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Analytics tracking
- [ ] SEO meta tags present

### Tools for Testing

- **SSL**: [SSL Labs](https://www.ssllabs.com/ssltest/)
- **Performance**: [GTmetrix](https://gtmetrix.com/)
- **Mobile**: [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- **SEO**: [Google Search Console](https://search.google.com/search-console)

---

## 🔄 Continuous Deployment

### Automated Workflow

For Vercel or Netlify with GitHub:

1. Make changes locally
2. Commit and push to GitHub
3. Automatic deployment triggered
4. Preview URL generated
5. Merge to main for production deployment

### Rollback

If something goes wrong:
- **Vercel**: Deployments > Select previous deployment > Promote
- **Netlify**: Deploys > Select previous deploy > Publish
- **Manual**: Keep backup of previous `dist/` folder

---

## 📋 Deployment Checklist

- [ ] Production build tested locally
- [ ] Environment variables configured
- [ ] Custom domain DNS configured
- [ ] SSL certificate installed
- [ ] Security headers set
- [ ] Analytics tracking added
- [ ] Error tracking configured (optional)
- [ ] Backup strategy in place
- [ ] 404 page configured
- [ ] Robots.txt added (if needed)
- [ ] Sitemap.xml added (for SEO)
- [ ] Meta tags verified
- [ ] OpenGraph images added
- [ ] Performance tested
- [ ] Mobile tested
- [ ] All forms working

---

## 🎉 You're Live!

Your CD IT Solutions website is now deployed and accessible to the world!

### Next Steps

1. **Monitor**: Set up uptime monitoring
2. **Optimize**: Continuously improve performance
3. **Update**: Keep dependencies updated
4. **Maintain**: Regular backups and testing

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Vite Docs**: https://vitejs.dev/guide/static-deploy.html

---

**Congratulations on your deployment! 🚀**
