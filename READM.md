# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a frontend authentication project featuring extremely unique and creative CSS/HTML designs with cosmic and futuristic themes. It's a static website with three main pages: landing (`index.html`), login (`login.html`), and registration (`register.html`).

## Common Development Commands

### Serving and Development
```bash
# Start development server (preferred - with live reload)
npm run dev

# Alternative static server
npm start

# Install dependencies
npm install
```

### Build and Deployment
```bash
# Build command (no actual build process for static files)
npm run build

# Lint command (not configured but reserved)
npm run lint
```

### File Operations
- Open any HTML file directly in browser for testing
- Files can be served from any static file server
- No compilation or bundling required

## Architecture and Code Structure

### Page Architecture
The project follows a **three-page cosmic-themed authentication flow**:

1. **Landing Page (`index.html`)**: Entry point with animated background and navigation to login/register
2. **Login Page (`login.html`)**: "Cosmic Portal" with hexagonal form, particle effects, and holographic animations
3. **Registration Page (`register.html`)**: "Nexus Registry" with morphing geometric forms, digital rain effects, and quantum field styling

### CSS Architecture
- **Single comprehensive stylesheet** (`css/styles.css`) with modular sections:
  - CSS custom properties (`:root`) defining color themes for both login and register pages
  - Cosmic theme colors (blues, cyans, purples) for login page
  - Nexus theme colors (greens, oranges) for register page
  - Complex animations and keyframe definitions
  - Responsive design patterns

### JavaScript Architecture
Each page has dedicated JavaScript files with specific responsibilities:

- **`js/login.js`**: Handles cosmic portal effects, holographic buttons, particle interactions, form validation
- **`js/register.js`**: Manages nexus effects, quantum field interactions, biometric scanning animations, form validation
- **`js/particles.js`**: Cosmic particle system for login page - creates floating particles with mouse interaction
- **`js/digital-rain.js`**: Matrix-style digital rain effect for register page with glitch effects

### Animation System Architecture
The project uses a **multi-layered animation approach**:

1. **CSS-based animations**: Background effects, floating elements, base transformations
2. **Canvas-based effects**: Particle systems, digital rain, dynamic visual elements
3. **JavaScript-triggered animations**: User interaction effects, form field responses
4. **Dynamic style injection**: Runtime CSS additions for interactive effects

### Form Architecture
- **Cosmic Portal (Login)**: Hexagonal clip-path form with floating labels and holographic submit button
- **Nexus Registry (Registration)**: Morphing geometric form with scanning effects and quantum field styling
- Both forms include custom validation with visual feedback animations

### Visual Effects System
- **Login Page**: Particle canvas, energy rings, holographic effects, cosmic backgrounds
- **Register Page**: Digital rain canvas, morphing geometry, scanning beams, matrix effects
- **Shared**: Responsive glass-morphism designs, custom animations, interactive hover states

### Theme System
The project uses CSS custom properties for two distinct visual themes:
- **Cosmic theme** (login): Blues, cyans, purples with space-like effects
- **Nexus theme** (register): Greens, oranges with tech/matrix aesthetics

## Development Notes

### Working with Animations
- Most animations are CSS-based with JavaScript triggers for interactivity
- Canvas elements require manual resize handling on window resize events
- Animation performance is optimized with `requestAnimationFrame` loops

### Form Validation
- Real-time validation with visual feedback through CSS class manipulation
- Custom validation logic in respective JavaScript files
- No backend integration - forms show success messages only

### Responsive Design
- Mobile-first approach with media queries for larger screens
- Canvas elements automatically resize to viewport
- Flexible grid layouts for form fields

### Visual Effects Performance
- Particle counts scale based on screen size to maintain performance
- Effects use opacity and transform animations for GPU acceleration
- Cleanup and regeneration patterns prevent memory leaks

## File Modification Guidelines

### When modifying CSS:
- Respect the existing color variable system in `:root`
- Maintain the cosmic/nexus theme separation
- Test animations across different screen sizes

### When modifying JavaScript:
- Each page script is self-contained - avoid cross-dependencies
- Canvas effects require proper cleanup on page unload
- Form validation logic should maintain visual feedback patterns

### When adding new effects:
- Follow the existing animation naming conventions
- Use CSS custom properties for colors and timing values
- Ensure mobile responsiveness for any new interactive elements
