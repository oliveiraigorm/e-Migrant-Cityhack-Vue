# e-Migrant

You can view the original project at: [https://oliveiraigorm.github.io/e-Migrant-Cityhack](https://oliveiraigorm.github.io/e-Migrant-Cityhack)

## About

This is the **Vue 3** rewrite of the e-Migrant platform, originally developed during the City Hack 2020 Hackathon.

City Hack 2020 was a 24-hour technology marathon hackathon that took place entirely online on May 30-31, 2020, in Portugal. Organized by CityHack Portugal and supported by the Calouste Gulbenkian Foundation's "Hack for Good" initiative, this intensive event brought together 110 participants to develop technological solutions aimed at improving quality of life in cities.

The hackathon adapted to the COVID-19 pandemic by moving fully online, demonstrating resilience and innovation in challenging times. Participants worked around the clock to create practical solutions for urban challenges, with a focus on education and social impact. The e-Migrant project emerged from this collaborative environment as a response to the pressing need for better integration support for immigrants in Portuguese cities.

e-Migrant is a web platform designed to simplify the lives of immigrants by providing them with essential resources, guidance, and opportunities to integrate into their host society.

## Mission

By linking immigrants directly with the host society, we decrease unequal opportunities. We promote the use of technology to solve social problems, providing the easiest way for immigrants who need guidance, information, job opportunities, education, and community to integrate with the host society.

## Features

The platform provides comprehensive support across multiple key areas:

### Jobs
- Job opportunities specifically targeted for immigrants
- Professional courses and skill development
- Tax and workers' rights information

### Education
- Institutions and universities directory
- Academic guidance for getting into Portuguese universities
- Accommodation support during internships
- Education news and updates

### Legal
- Essential document guidance (NIF, visa, proof of address)
- Immigration information and procedures

### Health
- Public hospital access information
- Health center registration guidance

### Community
- Events, sports, and places to explore
- Social integration and networking

### Contact
- Direct contact form for questions and support

## Technology Stack

- **Framework**: Vue 3.5 (Composition API with `<script setup>`)
- **Build Tool**: Vite 7
- **Routing**: Vue Router 5 (HTML5 History mode)
- **CSS Framework**: Bootstrap 5.3
- **Icons**: Font Awesome 7
- **Language**: JavaScript (ES Modules)

### Migration from Original

The original project used static HTML pages with jQuery 3.5, Bootstrap 4, Gulp.js, and SCSS. This rewrite modernizes the codebase into a single-page application with:

- Component-based architecture with reusable `PageHeader` and `PostCard` components
- Client-side routing with lazy-loaded views and fade transitions
- Vite for fast development and optimized production builds
- No jQuery dependency

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/oliveiraigorm/e-Migrant-Cityhack-Vue.git
   cd e-Migrant-Cityhack-Vue
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   This will start a local development server with hot module replacement at `http://localhost:5173`.

### Available Scripts

- `npm run dev` - Start the development server with HMR
- `npm run build` - Build for production (output in `dist/`)
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
  components/          # Reusable components
    AppNavbar.vue      # Fixed-top navigation bar
    AppFooter.vue      # Site footer with social links
    PageHeader.vue     # Reusable hero/masthead banner
    PostCard.vue       # Reusable post preview card
  views/               # Page-level route components
    HomeView.vue
    JobsView.vue
    JobOpportunitiesView.vue
    JobCoursesView.vue
    EducationView.vue
    InstitutionsView.vue
    IPTView.vue
    GuidanceView.vue
    NewsView.vue
    LegalView.vue
    HealthView.vue
    ContactView.vue
    CommunityView.vue
    SignInView.vue
    SignUpView.vue
    PostView.vue
  assets/img/          # Static images
  styles/main.css      # Global styles
  router/index.js      # Route definitions
  App.vue              # Root component (layout)
  main.js              # App entry point
public/
  logo.png             # Favicon/public logo
index.html             # Vite HTML entry point
vite.config.js         # Vite configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For support, questions, or contributions, please use the contact form on the platform or reach out through the repository's issue tracker.

---

**Note**: This platform is part of a social initiative to leverage technology for solving real-world immigration challenges and promoting inclusive societies.
