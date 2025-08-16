# Ganesh Chaturthi Greeting Web Page

A beautiful, interactive web page to create personalized Ganesh Chaturthi greetings with devotional music and social sharing features.

## Features

- **Personalized Greetings**: Enter your name and recipient's name to create custom greetings
- **Beautiful Design**: Vibrant orange gradient background with floating animations
- **Devotional Music**: Options to play Aarti, Bhajan, or Instrumental music
- **Social Sharing**: Share greetings on WhatsApp, Facebook, Twitter, or copy link
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Interactive Elements**: Smooth animations, hover effects, and celebration confetti

## Files Structure

```
ganesh-chaturthi-greeting/
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
├── ganesh1.jpg         # Ganesh image 1
├── ganesh2.jpg         # Ganesh image 2
├── ganesh3.jpg         # Ganesh image 3
└── README.md           # This file
```

## How to Use

1. Open `index.html` in your web browser
2. Enter your name in the "Your Name" field
3. Enter the recipient's name in the "Send to" field
4. Click "Create Greeting" to generate the personalized message
5. Use music controls to add devotional background music
6. Share your greeting using the social media buttons

## GitHub Pages Deployment Guide

Follow these simple steps to deploy your Ganesh Chaturthi greeting page on GitHub Pages:

### Method 1: Using GitHub Web Interface (Easiest)

1. **Create a GitHub Account**
   - Go to [github.com](https://github.com) and sign up for a free account
   - Verify your email address

2. **Create a New Repository**
   - Click the "+" icon in the top right corner
   - Select "New repository"
   - Name your repository (e.g., `ganesh-chaturthi-greeting`)
   - Make sure it's set to "Public"
   - Check "Add a README file"
   - Click "Create repository"

3. **Upload Your Files**
   - In your new repository, click "uploading an existing file"
   - Drag and drop all files from your project folder:
     - `index.html`
     - `style.css`
     - `script.js`
     - `ganesh1.jpg`
     - `ganesh2.jpg`
     - `ganesh3.jpg`
   - Add a commit message like "Add Ganesh Chaturthi greeting page"
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to your repository's "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

5. **Access Your Live Website**
   - GitHub will provide a URL like: `https://yourusername.github.io/ganesh-chaturthi-greeting`
   - It may take a few minutes to become available
   - Your greeting page is now live and shareable!

### Method 2: Using Git Command Line

If you're comfortable with command line:

```bash
# Clone your repository
git clone https://github.com/yourusername/ganesh-chaturthi-greeting.git
cd ganesh-chaturthi-greeting

# Copy your files to the repository
cp /path/to/your/files/* .

# Add, commit, and push
git add .
git commit -m "Add Ganesh Chaturthi greeting page"
git push origin main
```

Then follow step 4 from Method 1 to enable GitHub Pages.

## Customization Options

### Adding Your Own Music

To add actual audio files:

1. Add your audio files (`.mp3`, `.wav`, `.ogg`) to the project folder
2. Update the `musicTracks` object in `script.js`:

```javascript
const musicTracks = {
    aarti: {
        name: "Ganesh Aarti",
        url: "your-aarti-file.mp3",
        description: "Traditional Ganesh Aarti"
    },
    // ... add more tracks
};
```

### Changing Colors

Modify the CSS variables in `style.css`:

```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #ff9a56;
    --accent-color: #f7931e;
}
```

### Adding More Images

1. Add new Ganesh images to the project folder
2. Update the `images` array in `script.js`:

```javascript
const images = ['ganesh1.jpg', 'ganesh2.jpg', 'ganesh3.jpg', 'ganesh4.jpg'];
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technical Details

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with flexbox, grid, and animations
- **Vanilla JavaScript**: No external dependencies
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized images and efficient code

## Troubleshooting

### Common Issues

1. **Images not loading**
   - Ensure all image files are in the same folder as `index.html`
   - Check file names match exactly (case-sensitive)

2. **Music not playing**
   - Add actual audio files and update the `script.js` file
   - Some browsers block autoplay - user interaction is required

3. **GitHub Pages not updating**
   - Wait 5-10 minutes after pushing changes
   - Check the Actions tab for build status
   - Clear browser cache

### Support

If you encounter any issues:
1. Check the browser console for error messages (F12 → Console)
2. Ensure all files are uploaded correctly
3. Verify GitHub Pages is enabled in repository settings

## License

This project is open source and available under the MIT License.

## Credits

- **Images**: Ganesh Chaturthi themed images from various sources
- **Fonts**: Google Fonts (Poppins, Dancing Script)
- **Icons**: Unicode emoji characters
- **Design**: Custom CSS with modern web design principles

---

**Ganpati Bappa Morya!** 🙏

May Lord Ganesha bless your web development journey with success and remove all obstacles from your path.

