# Open Graph Image Setup Guide

## Current Setup
Your site now has a proper Open Graph image configuration for social media sharing, especially optimized for LinkedIn.

## Image Specifications
- **Recommended Size**: 1200x627px (LinkedIn's preferred dimensions)
- **File Format**: PNG or JPG
- **File Size**: Keep under 5MB
- **Location**: `/public/og-images/`

## How to Generate the OG Image

### Option 1: Using the HTML Template (Recommended)
1. Open `og-image-template.html` in your browser
2. Take a screenshot using browser dev tools:
   - Chrome: Open DevTools → Cmd+Shift+P → "Capture full size screenshot"
   - Or use any screenshot tool and crop to 1200x627px

### Option 2: Design Tools
Create a 1200x627px image in:
- Canva (has OG image templates)
- Figma
- Photoshop/Illustrator

### Option 3: Automated Generation
You can use tools like:
- Puppeteer (Node.js)
- Playwright
- Vercel OG Image Generation

## File Structure
```
public/
├── og-images/
│   ├── default.png (1200x627) - Main OG image
│   ├── home.png - Homepage specific
│   └── [page-specific images]
└── Dynastia.png - Logo (current, but not ideal size)
```

## Implementation in Code

### Default OG Image (already configured in BaseLayout.astro)
The site uses `/Dynastia.png` as default. To use a proper OG image:

1. Generate your 1200x627px image
2. Save it as `/public/og-images/default.png`
3. Update `BaseLayout.astro` line 19 to:
   ```astro
   : new URL('/og-images/default.png', siteURL).toString();
   ```

### Page-Specific OG Images
Pass the `ogImage` prop to BaseLayout:
```astro
<BaseLayout 
  title="Your Page Title"
  description="Your description"
  ogImage="/og-images/your-page.png"
>
```

## Testing Your OG Image
1. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
2. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator

## Best Practices
1. Include your logo/brand
2. Use readable fonts (min 24px when scaled)
3. Keep text concise
4. Use brand colors
5. Ensure high contrast
6. Test on multiple platforms

## Quick Checklist
- [ ] Image is exactly 1200x627px
- [ ] File size under 5MB
- [ ] Saved as PNG or JPG
- [ ] Placed in `/public/og-images/`
- [ ] Updated BaseLayout.astro to reference new image
- [ ] Tested with LinkedIn Post Inspector
- [ ] Committed and pushed changes