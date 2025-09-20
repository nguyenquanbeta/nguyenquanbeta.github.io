# Wedding Website - Love & Elegance

A modern and luxury wedding website built with Jekyll, featuring elegant design and sophisticated functionality.

## 🎨 Design Features

- **Modern Luxury Design**: Sophisticated and elegant styling
- **Color Palette**: 
  - Burgundy (#800020) - Primary color
  - Gold (#D4AF37) - Accent color  
  - Cream (#F8F5F0) - Background color
- **Typography**: 
  - Playfair Display for headings
  - Great Vibes for script text
  - Lato for body text
- **Responsive Design**: Mobile-first approach with elegant layouts for all devices
- **Interactive Features**: Smooth scrolling, animations, and modern UX

## 🏗️ Structure

```
wedding/
├── _config.yml              # Jekyll configuration
├── _layouts/                # Page layouts
│   ├── default.html         # Base layout
│   └── home.html           # Homepage layout
├── _includes/              # Reusable components
│   └── navigation.html     # Site navigation
├── assets/                 # Static assets
│   ├── css/
│   │   └── main.css       # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── images/            # Image assets
├── index.html             # Homepage
├── Gemfile               # Ruby dependencies
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites

- Ruby (version 2.7 or higher)
- Bundler gem
- Jekyll gem

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd wedding
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4000`

### Docker Setup (Alternative)

If you prefer using Docker, you can use the included `docker-compose.yml`:

```bash
docker-compose up
```

## 📝 Customization

### 1. Update Site Configuration

Edit `_config.yml` to customize:
- Site title and description
- Bride and groom names
- Wedding date and venue
- Contact information

### 2. Add Your Images

Replace placeholder images in `assets/images/`:
- `hero-bg.jpg` - Hero section background
- `couple-1.jpg` - How you met photo
- `proposal.jpg` - Proposal photo
- `gallery-1.jpg` through `gallery-6.jpg` - Gallery photos
- `favicon.ico` - Site favicon

### 3. Customize Content

Edit `index.html` to update:
- Your love story
- Wedding details (time, location, dress code)
- Timeline of events
- Registry information

### 4. Style Customization

The CSS uses custom properties (CSS variables) for easy customization. Update `assets/css/main.css`:

```css
:root {
  --burgundy: #800020;
  --gold: #D4AF37;
  --cream: #F8F5F0;
  /* Add your custom colors */
}
```

## 📱 Features

### Homepage Sections

1. **Hero Section** - Beautiful landing with names and date
2. **Our Story** - How you met and proposal story
3. **Wedding Details** - Time, location, and dress code
4. **Timeline** - Schedule of wedding day events
5. **Gallery** - Photo preview with lightbox functionality
6. **RSVP Form** - Interactive form for guest responses
7. **Registry** - Links to wedding registries

### Interactive Features

- Smooth scrolling navigation
- Mobile-responsive hamburger menu
- Scroll-triggered animations
- Gallery lightbox
- Form validation and feedback
- Responsive image placeholders

## 🛠️ Technical Details

### Built With

- **Jekyll 4.3+** - Static site generator
- **HTML5 & CSS3** - Modern web standards
- **JavaScript ES6** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features

- Optimized CSS with custom properties
- Compressed assets
- Semantic HTML structure
- Accessibility features
- SEO optimization

## 📧 Contact Form Setup

The RSVP form is currently set up for frontend display. To make it functional, you can:

1. **Use a form service** like Formspree, Netlify Forms, or Typeform
2. **Add backend processing** with services like Heroku or Vercel
3. **Use Jekyll plugins** for form handling

Example Formspree integration:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
  <!-- form fields -->
</form>
```

## 🚀 Deployment

### GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Choose source branch (usually `main`)

### Netlify

1. Connect your GitHub repository
2. Set build command: `bundle exec jekyll build`
3. Set publish directory: `_site`

### Other Hosting

Build the site locally and upload the `_site` directory:
```bash
bundle exec jekyll build
```

## 🎯 SEO & Analytics

The site includes:
- Jekyll SEO Tag plugin
- Structured data markup
- Open Graph meta tags
- Twitter Card support
- XML sitemap generation

To add Google Analytics, update `_config.yml`:
```yaml
google_analytics: "your-ga-tracking-id"
```

## 📱 Accessibility

The website includes:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Skip navigation links
- Alt text for images
- High contrast colors

## 🐛 Troubleshooting

### Common Issues

1. **Bundle install fails**
   - Update Ruby to latest version
   - Run `gem update bundler`

2. **Jekyll serve errors**
   - Check Ruby version compatibility
   - Run `bundle update`

3. **Images not displaying**
   - Check file paths in `assets/images/`
   - Ensure correct file extensions

4. **Mobile menu not working**
   - Check JavaScript console for errors
   - Ensure proper DOM loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💕 Credits

- **Design**: Modern luxury wedding aesthetic
- **Fonts**: Google Fonts (Playfair Display, Great Vibes, Lato)
- **Icons**: Font Awesome
- **Framework**: Jekyll static site generator

---

Made with ❤️ for your special day