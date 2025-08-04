
# ROBOFEST 2025 - Battle of Smart Racers

A cutting-edge full-stack web application for ROBOFEST 2025, featuring advanced Three.js 3D robotic animations, comprehensive event information, and immersive user experiences optimized for both desktop and mobile devices.

## 🚀 Features

- **3D Robotic Animations**: Enhanced Three.js scenes with PBR materials and bloom effects
- **Interactive Hero Robot**: Neon blue glowing mascot with particle systems
- **Robotic Assembly Showcase**: Animated robotic arm with realistic materials
- **Responsive Design**: Mobile-optimized with adaptive 3D quality settings
- **Modern UI/UX**: Glass morphism effects and GSAP ScrollTrigger animations
- **Event Management**: Comprehensive competition information and registration
- **Contact System**: Backend API with data persistence

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for development and building
- **Tailwind CSS** with custom robotic theme
- **Three.js** for 3D graphics and animations
- **GSAP** for advanced scroll animations
- **Wouter** for lightweight routing
- **Radix UI** with shadcn/ui components
- **TanStack Query** for state management

### Backend
- **Node.js** with Express.js
- **TypeScript** with ES modules
- **Drizzle ORM** for database operations
- **Neon Database** (serverless PostgreSQL)
- **Zod** for schema validation

## 📋 Prerequisites

Before running this project locally, ensure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🔧 Local Development Setup (VS Code/localhost)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd robofest-2025
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# Development Settings
NODE_ENV=development

# Database Configuration (Optional for development)
DATABASE_URL="your-neon-database-url"

# Port Configuration
PORT=5000
```

**Note**: The application uses in-memory storage by default, so a database connection is optional for local development.

### 4. Start the Development Server

```bash
npm run dev
```

This command will:
- Start the Express.js backend server on localhost:5000
- Launch the Vite development server with hot reload
- Serve both frontend and backend on the same port

### 5. Access the Application

Open your browser and navigate to:
```
http://localhost:5000
```

**Important**: Do NOT use `http://0.0.0.0:5000` - this will not work on localhost. Always use `http://localhost:5000`.

## 🐛 Common Localhost Issues & Solutions

### Issue: "This site can't be reached" or "ERR_ADDRESS_INVALID"

**Solution**: Make sure you're accessing `http://localhost:5000` and NOT `http://0.0.0.0:5000`

### Issue: Port already in use

**Solution**: 
1. Stop any other processes using port 5000
2. Or change the PORT in your `.env` file to another port like 3000 or 8000

### Issue: Dependencies not found

**Solution**:
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors

**Solution**:
```bash
# Run type checking
npm run check
```

## 🌐 Available Pages

- **Home** (`/`) - Hero section with 3D robot and event overview
- **Events** (`/events`) - Detailed competition information
- **About** (`/about`) - Organization and sponsor information
- **Roboroarz** (`/roboroarz`) - Special event page with videos
- **Registration** (`/registration`) - Competition registration form
- **Contact** (`/contact`) - Contact form and information
- **Committee** (`/committee`) - Team and committee information

## 🎮 3D Features

### Hero Robot Scene
- Interactive 3D robot with neon blue glow
- Particle system effects
- OrbitControls for user interaction
- Auto-rotation and pulse animations

### Feature Assembly Scene
- Robotic arm with realistic PBR materials
- Automated assembly sequence animation
- Bloom post-processing effects
- Lazy-loading for performance optimization

## 📱 Mobile Optimization

- Reduced particle counts on mobile devices
- Adaptive device pixel ratio (≤1.5 on mobile)
- LOD (Level of Detail) optimization
- Touch-friendly controls and interactions

## 🔨 Build Commands

```bash
# Development (localhost)
npm run dev

# Type checking
npm run check

# Build for production
npm run build

# Start production server
npm start

# Database operations (if using database)
npm run db:push
```

## 📁 Project Structure

```
robofest-2025/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── three/      # Three.js 3D scene components
│   │   │   ├── ui/         # shadcn/ui components
│   │   │   └── layout/     # Layout components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility libraries
│   │   ├── hooks/          # Custom React hooks
│   │   └── assets/         # Static assets
│   └── index.html
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage interface
│   └── vite.ts            # Vite dev server setup
├── shared/                 # Shared types and schemas
├── attached_assets/        # Project assets and images
├── .env                   # Environment variables (create this)
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## 🎨 Customization

### Theme Colors
Update CSS variables in `client/src/index.css`:
```css
:root {
  --robot-glow-color: #00D4FF;
  --primary: hsl(207, 90%, 54%);
  --electric-blue: hsl(195, 100%, 50%);
  /* Add more custom colors */
}
```

### 3D Scene Configuration
Modify Three.js scenes in `client/src/components/three/`:
- `hero-robot-scene.tsx` - Hero mascot configuration
- `feature-scene.tsx` - Assembly robot settings

## 🚀 Deployment on Replit

This project is optimized for Replit deployment. When deployed on Replit, it automatically uses `0.0.0.0` binding for external access.

## 🐛 Troubleshooting

### Browser Compatibility

- **Chrome**: Full support (recommended)
- **Firefox**: Full support
- **Safari**: Full support with WebGL enabled
- **Edge**: Full support

### Performance Issues

1. **Three.js Not Loading**
   - Ensure Three.js CDN links are accessible
   - Check browser console for loading errors

2. **3D Performance Issues**
   - Enable device performance adaptations
   - Reduce particle counts in mobile view

3. **Build Errors**
   - Clear `node_modules` and reinstall dependencies
   - Check TypeScript configuration

## 📞 Support

For technical support or questions:
- **Faculty SPOC**: Dr. Vidhyalakshmi M K (vidhyalm1@srmist.edu.in)
- **Student SPOC**: Harshil Malhotra (hm3673@srmist.edu.in)

## 📄 License

This project is created for ROBOFEST 2025 at SRM Institute of Science & Technology.

---

**Built with ❤️ by the ISD Lab Team**
