# How to Add Your Own Design Work

## Quick Steps:

### Option 1: Drag & Drop (Easiest)
1. Open Finder and navigate to: `/Users/xuetingwu/portfolio/images/portfolio/`
2. Drag your image files into this folder
3. Rename them to match the expected filenames (see below)
4. Refresh your browser to see them!

### Option 2: Using Terminal
```bash
# Navigate to your portfolio folder
cd /Users/xuetingwu/portfolio/images/portfolio/

# Copy your images here (replace with your actual file paths)
cp ~/Downloads/my-brand-design.jpg ./brand-identity.jpg
cp ~/Downloads/my-logo.png ./logo-design-1.jpg
# ... and so on
```

### Option 3: Update HTML for Custom Names
If you want to use your own filenames, I can update the HTML file to match them.

## Expected Filenames:

| Portfolio Item | Filename |
|---------------|----------|
| Brand Identity Design | `brand-identity.jpg` |
| Digital Campaign | `digital-campaign.jpg` |
| Print Design | `print-design.jpg` |
| Illustration Series | `illustration.jpg` |
| Logo Design (first) | `logo-design-1.jpg` |
| Logo Design (second) | `logo-design-2.jpg` |
| Web Design | `web-design.jpg` |

## Image Requirements:
- **Formats**: JPG, PNG, or WebP
- **Recommended Size**: 1200x900px (4:3 aspect ratio)
- **File Size**: Under 500KB for best performance
- **Quality**: High quality, but optimized for web

## After Adding Images:

1. **Test locally**: Open `index.html` in your browser to see your images
2. **Commit to Git**:
   ```bash
   git add images/
   git commit -m "Add my portfolio images"
   git push origin main
   ```

## Need Help?
- If you want to use different filenames, let me know and I'll update the HTML
- If you want to add more portfolio items, I can help with that too
- If you need to optimize your images, I can provide tools/commands

