
# CosmoMatch - Cosplay Creator × Brand Matchmaking Platform

A React.js prototype for connecting cosplay creators with brands for collaboration opportunities.

## Features

- **User Authentication**: Simple login/register system with localStorage persistence
- **Protected Routes**: Access control based on authentication status  
- **Creator Dashboard**: Personalized welcome page with quick stats
- **Gigs Marketplace**: Browse collaboration opportunities with brands
- **Profile Management**: Editable profile with skills, social links, and bio
- **Reels Section**: Placeholder for future video showcase feature
- **Responsive Design**: Clean, calming UI with white, lavender, and soft green colors

## Tech Stack

- React 18+ with functional components and hooks
- React Router DOM for navigation
- React Context API for state management
- Vanilla CSS (no external UI libraries)
- localStorage for data persistence

## Project Structure

```
src/
├── App.jsx                 # Main app component with routing
├── App.css                 # Global styles and component styling
├── components/
│   └── Navbar.jsx          # Navigation component
├── pages/
│   ├── Landing.jsx         # Public home page
│   ├── Login.jsx           # User login form
│   ├── Register.jsx        # User registration form
│   ├── Dashboard.jsx       # Creator dashboard (protected)
│   ├── Gigs.jsx           # Browse gigs (protected)
│   ├── Reels.jsx          # Coming soon placeholder (protected)
│   └── Profile.jsx        # Edit profile (protected)
└── context/
    └── AuthContext.js      # Authentication context and logic
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cosmo-match
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Authentication

The app uses a simple fake authentication system for demonstration purposes:

- **Registration**: Any email/password combination will work
- **Login**: Use any email/password that was "registered"
- **Session**: Login state persists in localStorage
- **Protection**: Authenticated routes redirect to login if not signed in

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Features Overview

### Landing Page
- Hero section introducing CosmoMatch
- Feature cards explaining the platform
- Call-to-action buttons for registration/login

### Dashboard
- Personalized welcome message
- Quick navigation to main features
- Basic user statistics
- Quick action cards

### Gigs Section
- Grid of collaboration opportunities
- Dummy data showing various brand partnerships
- Apply buttons (functionality to be implemented)

### Profile Management
- Editable personal information
- Skills and experience level
- Social media links
- Bio and location fields

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Clean, calming color scheme
- Smooth transitions and hover effects

## Future Enhancements

- Real backend integration
- File upload for profile pictures and portfolios
- Video upload and management for Reels
- Real-time messaging between creators and brands
- Advanced search and filtering
- Payment integration
- Rating and review system

## Contributing

This is a prototype application. For production use, consider:
- Implementing proper authentication with secure backend
- Adding form validation and error handling
- Integrating with a real database
- Adding comprehensive testing
- Implementing proper SEO optimization

## License

This project is for demonstration purposes.
