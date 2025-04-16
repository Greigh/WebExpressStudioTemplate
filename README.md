# Web Express Studio Template Documentation

<div align="center">
  <h3>Open Source Website Builder Template</h3>
  <p>A modern, responsive website template built with HTML, CSS and vanilla JavaScript</p>
</div>

## Table of Contents
- [Web Express Studio Template Documentation](#Web Express Studio-template-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [What can this be used for?](#what-can-this-be-used-for)
  - [What I Used to Build This Project](#what-i-used-to-build-this-project)
  - [Features](#features)
  - [Core Files](#core-files)
  - [Header Component](#header-component)
  - [Footer Component](#footer-component)
  - [Mobile Responsiveness](#mobile-responsiveness)
  - [Dark Mode](#dark-mode)
  - [Home / Index Page](#home--index-page)
    - [Home / Index Page Credits](#home--index-page-credits)
  - [About Page](#about-page)
    - [About Credits](#about-credits)
  - [Services Page](#services-page)
    - [Services Page Credits](#services-page-credits)
  - [Examples / Portfolio Page](#examples--portfolio-page)
    - [Example Page Credits](#example-page-credits)
  - [Contact Page](#contact-page)
    - [Contact Page Credits](#contact-page-credits)
  - [JavaScript File Documentation](#javascript-file-documentation)
    - [Core Modules](#core-modules)
    - [Main Features](#main-features)
    - [Technical Implementation](#technical-implementation)
    - [Browser Support](#browser-support)
  - [404 / Error Page- \[Error Page\](#Error Page)](#404--error-page--error-pageerror-page)
    - [404 Page Credits](#404-page-credits)
  - [.htaccess](#htaccess)
  - [License](#license)
  - [Project-Guidelines](#project-guidelines)
    - [GRCC CS 148 Final Project Guidelines](#grcc-cs-148-final-project-guidelines)
    - [Technical Requirements (20 points)](#technical-requirements-20-points)

## Introduction

This documentation provides an overview of the Web Express Studio template project and its features. The template is a responsive web design that includes a header, footer, and various sections for content. It is built using HTML, CSS, and JavaScript. The project is structured to be modular, allowing for easy updates and maintenance. The design is user-friendly and includes features such as dark mode support and a responsive layout including but not limited to mobile-friendly design, clean and modern aesthetics, and a focus on usability. The site uses limited JavaScript for interactivity, primarily for the mobile navigation menu and dark mode toggle, but the core functionality is achieved through HTML and CSS.

This project was designed for CIS-148 during the Winter-to-Spring 2025 semester at Grand Rapids Community College (GRCC) but will also be available via my [portfolio](https://danielhipskind.com/). The template went above and beyond the [project guidelines](#Project-Guidelines) of the class in order to provide an example of my talents and skills. I have little to no "verifiable experience" in web development, but over the years I have grown accustomed to learning and applying various web technologies. This template is a culmination of my learning and experimentation with web design and development.

## What can this be used for?

The template is designed to be a starting point for anyone looking to create a professional-looking business website. It includes all the necessary components and can be easily customized to fit the needs of any project. The code is well-organized and commented, making it easy to understand and modify. The template is also designed to be accessible, with a focus on semantic HTML and best practices for web development. It would need to be modified to be used in a production environment, including, but not limited to, the following: missing pages, missing login functionality, missing actual contact form functionality, and missing database connections.

## What I Used to Build This Project
- [HTML5](https://www.w3.org/TR/html52/)
- [CSS3](https://www.w3.org/Style/CSS/)
- [JavaScript](https://www.javascript.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Vivaldi Browser and Developer Tools](https://vivaldi.com/)
- [W3C Validator](https://validator.w3.org/)
- [Freepik](https://www.freepik.com/)
- [SVG Repo](https://www.svgrepo.com/)
- [Material Symbols](https://fonts.google.com/icons)
- [Simple Icons](https://simpleicons.org/)
- [Google Fonts](https://fonts.google.com/)
- [Map SVG](https://map.svg.com/)
- [Perplexity AI](https://www.perplexity.ai/)

## Features

- Responsive mobile and desktop design
- Dark/light theme support
- Semantic HTML5 structure
- CSS custom properties for easy customization
- Vanilla JavaScript with no dependencies
- Cross-browser compatibility
- Accessible UI components

## Core Files

Web Express Studio/ (aka Final_Project/)
├── README.md
├── LICENSE
├── .htaccess
├── index.html
├── about.html
├── services.html
├── examples.html
├── 404.html
├── contact.html
├── css/
│   ├── main.css
│   ├── about.css
│   ├── services.css
│   ├── examples.css
│   ├── contact.css
│   └── 404.css
├── js/
│   └── script.js
│   
└── img/
    ├── index/
    │   ├── hero.jpg
    │   ├── hero-mobile.jpg
    │   ├── darkmode-hero.jpg
    │   ├── darkmode-hero-mobile.jpg
    │   ├── coding.svg
    │   ├── design.svg
    │   ├── hosting.svg
    │   ├── news1.jpg
    │   └── news2.jpg
    ├── about/
    │   ├── award1.svg
    │   ├── award2.svg
    │   ├── danielhipskind.png
    │   ├── member2.jpg
    │   ├── member3.jpg
    │   ├── website.svg
    │   ├── world-map-dark.svg
    │   └── world-map.svg
    ├── services/
    │   ├── avatar1.svg
    │   ├── avatar2.svg
    │   └── avatar3.svg
    ├── logo/
    │   ├── favicon.ico
    │   ├── Web Express Studio.png
    │   ├── Web Express Studio.svg
    │   ├── Web Express Studio.pxd
    │   ├── Web Express Studio.webp
    │   └── apple-touch-icon.png
    └── icons/
        ├── sun.svg
        ├── facebook.svg
        ├── Twitter.svg
        └── instagram.svg

## Header Component

The header component is included in all pages and contains the navigation menu and logo. It is designed to be simple and unobtrusive, providing easy access to the main sections of the site. The header is sticky, meaning it remains at the top of the page as users scroll down, ensuring that navigation is always accessible. It also includes a dark mode toggle button, allowing users to switch between light and dark themes. 

The header is coded using HTML and CSS, with a focus on semantic structure and accessibility. The navigation menu is built using an unordered list, with links to each page of the site. The logo is included as an image, and the header is styled to be visually appealing and consistent with the overall design of the site.

On mobile devices, the navigation menu collapses into a hamburger menu that can be toggled open or closed. This is achieved using JavaScript to add and remove classes that control the visibility of the menu. The mobile navigation is designed to be user-friendly, with large touch targets and clear labels. 

## Footer Component

The footer component is included in all pages and contains links to social media and other resources. It is designed to be simple and unobtrusive, providing essential information without overwhelming the user. The template includes a sticky footer that remains visible as users scroll through the content, providing easy access to important links and project information; it can be easily removed if desired.

The footer was coded using HTML and CSS, with a focus on semantic structure and accessibility. The footer includes links to social media profiles, a copyright notice, and a link to the "privacy policy." The design is clean and modern, with a dark background that contrasts well with the light text.

## Mobile Responsiveness

The site is designed to be fully responsive, adapting to various screen sizes using CSS media queries. The navigation menu collapses into a hamburger menu on smaller screens, and the layout adjusts to ensure readability and usability. I opted against a mobile-first approach to keep the code simple and easy to understand.

## Dark Mode

The site supports dark mode, which can be toggled by the user. Many modern websites support this feature, improving user experience, especially for those who prefer a darker interface. The dark mode styles are applied using CSS custom properties. The toggle button is implemented using JavaScript and is also implemented as one of the first elements loaded in to ensure a "non-flash" light. 

The dark mode toggle button is located in the header and can be easily accessed by users. The dark mode styles are defined in the CSS file, and the JavaScript code handles the toggle functionality and even user-system level support including remembering your preference with a "localStorage first-party cookie." The dark mode is designed to be visually appealing and easy on the eyes, with a focus on readability and usability.

## Home / Index Page

The home page serves as the main landing page for the site. It includes a hero section with a main heading and tagline, featured content sections, a call-to-action button, and a newsletter signup form. The design is clean and modern, with a focus on readability and usability. The page is structured using semantic HTML elements and CSS, ensuring that the content is accessible and easy to understand.

The hero section includes a background image and a main heading, with a tagline that summarizes the purpose of the site. The featured content sections highlight key features or services, with images and descriptions that are easy to read and understand. The call-to-action button encourages users to take action, such as signing up for a newsletter or exploring the site further.

### Home / Index Page Credits

- Dark Mode Hero: [Freepik](https://www.freepik.com/free-psd/halloween-woman-mock-up-variety-digital-desktop_5632991.htm) ✅
- Light Mode Hero: [Freepick](https://www.freepik.com/free-photo/homepage-seen-computer-screen_26538658.htm) ✅
- News 1: [Freepik] (https://www.freepik.com/free-vector/robotic-process-automation-illustration_21743706.htm) ✅
- News 2: [Freepik](https://www.freepik.com/free-photo/3d-rendering-people-avatars-zoom-call_30117668.htm) ✅
- Feature Cards: [Material Symbols](https://fonts.google.com/icons) ✅
- Dark Mode Toggle: [SVG Repo](https://www.svgrepo.com/svg/532889/sun) ✅
- X (Previously Twitter): [Simple Icons](https://simpleicons.org/) ✅
- Instagram: [Simple Icons](https://simpleicons.org/) ✅
- Facebook: [Simple Icons](https://simpleicons.org/) ✅
- LinkedIn: [SVG Repo](https://www.svgrepo.com/svg/521725/linkedin) ✅
- GitHub: [SVG Repo](https://www.svgrepo.com/svg/512317/github-142) ✅
- Award Section Computer - [SVG Repo](https://www.svgrepo.com/svg/494496/computer-monitor) ✅
- Testimonial quotes: [Perplexity AI](https://www.perplexity.ai/) ✅

## About Page

The about page provides information about the company or individual behind the website. It includes a company history, mission statement, team member profiles, and a timeline of major milestones. The design is clean and modern, with a focus on readability and usability. The page is structured using semantic HTML elements and CSS, ensuring that the content is accessible and easy to understand. 

The page is designed to be visually appealing, with a focus on images and graphics that enhance the content. The team member profiles include images and descriptions, providing a personal touch to the page. The timeline of major milestones is presented in a clear and concise manner, making it easy for users to understand the company's history and achievements.

The page was built using HTML and CSS, with a focus on semantic structure and accessibility. The page includes a header and footer, as well as a main content area that is divided into sections. The design is responsive, adapting to various screen sizes using CSS media queries. The team member profiles are presented in a grid layout, with images and descriptions that are easy to read and understand.

### About Credits

- Me ✅
- "Maria Garcia" - [Freepik](https://www.freepik.com/free-photo/happy-joyful-female-woman-with-tablet-posing-indoors_6447816.htm)✅
- "David Young" - [Freepik](https://www.freepik.com/free-photo/man-front-group_3408498.htm) ✅
- Award1 - [SVG Repo](https://www.svgrepo.com/svg/293280/award-reward) ✅
- Award2 - [SVG Repo](https://www.svgrepo.com/svg/220395/award) ✅
- World map - [Map SVG](https://mapsvg.com/) ✅
- 500k Websites Built - [SVG Repo](https://www.svgrepo.com/svg/494496/computer-monitor) ✅
- Trusted Worldwide Quotes - [Perplexity AI](https://www.perplexity.ai/) ✅

## Services Page
The services page provides detailed information about the services or products offered by the company or individual. It includes service categories, detailed descriptions, pricing tables, and an FAQ section. The design is clean and modern, with a focus on readability and usability. The page is structured using semantic HTML elements and CSS, ensuring that the content is accessible and easy to understand.

The page is designed to be visually appealing, with a focus on images and graphics that enhance the content. The service categories are presented in a grid layout, with images and descriptions that are easy to read and understand. The pricing tables are clear and concise, making it easy for users to understand the costs associated with each service. It includes plans for "Basic," "Pro," and "Enterprise" services, with a focus on clarity and usability. The FAQ section is designed to address common questions and concerns, providing users with the information they need to make informed decisions. Additionally, the page includes a "More Features" toggle that allows users to expand or collapse additional information about each service. This feature is designed to improve usability and provide users with a more streamlined experience.

### Services Page Credits
- All content was written by me with the understanding of hosting practices ✅
- More Features Toggle Triangle - [SVG Repo](https://www.svgrepo.com/svg/446819/triangle-up) ✅
- FAQ Triangle - [SVG Repo](https://www.svgrepo.com/svg/446653/triangle-filled) ✅
- Translated SVG code using [Online SVG Code Editor](https://editsvgcode.com/) ✅
- King Carrot - [Freepik](https://www.freepik.com/free-vector/flower-silhouette-logo_36534045.htm) ✅
- Colorier le Phénix - [Freepik](https://www.freepik.com/free-vector/bird-colorful-logo-gradient-vector_28267842.htm) ✅
- MC Studios - [Freepik](https://www.freepik.com/free-vector/gradient-mc-logo-design_28719705.htm) ✅
- Testimonial Quotes - [Perplexity AI](https://www.perplexity.ai/) ✅

## Examples / Portfolio Page

The examples page provides a showcase of the company's work or portfolio. It includes project showcases, an image gallery, and client/project details. The design is clean and modern, with a focus on readability and usability. The page is structured using semantic HTML elements and CSS, ensuring that the content is accessible and easy to understand. It includes sections for the commmunity themes/templates (free templates) and the premium ones that people can purchaes or be a part of the professional subscription.

The page is designed to be visually appealing, with a focus on images and graphics that enhance the content. The project showcases include images and descriptions, providing a personal touch to the page. The image gallery is presented in a grid layout, with images that are easy to read and understand. The client/project details are presented in a clear and concise manner, making it easy for users to understand the company's work and achievements.

THe page also includes a "Download" and "Documents" section that provides users with access to additional resources and information. While the download doesn't do anything, it serves as a placeholder for future functionality.

The page was built with HTML and CSS, with a focus on semantic structure and accessibility. The page includes a header and footer, as well as a main content area that is divided into sections. The design is responsive, adapting to various screen sizes using CSS media queries. The project showcases are presented in a grid layout, with images and descriptions that are easy to read and understand.

### Example Page Credits

- Theme Template - [Freepik](https://www.freepik.com/free-vector/flat-design-responsive-website-design_28747716.htm) ✅
- Portfolio Theme - [Freepik](https://www.freepik.com/free-vector/flat-design-portfolio-template-design_22378646.htm) ✅
- Download Icon - [SVG Repo](https://www.svgrepo.com/svg/525323/download-square) ✅
- Document Icon - [SVG Repo](https://www.svgrepo.com/svg/525837/document-1) ✅
- Developer Tools Icon - [SVG Repo](https://www.svgrepo.com/svg/486263/developer-centerpublic-api) ✅
- King Carrot - [Freepik](https://www.freepik.com/free-vector/flower-silhouette-logo_36534045.htm) ✅
- Green Earth Solutions - [Freepik](https://www.freepik.com/free-vector/logo-with-four-leaves_956999.htm) ✅
- Carbone Restaurants - [Freepik](https://www.freepik.com/free-vector/retro-restaurant-logo-template_7114894.htm) ✅

## Contact Page

The contact page provides information on how to get in touch with the company or individual. It includes a contact form, location information, operating hours, and emergency contact information. The design is clean and modern, with a focus on readability and usability. The page is structured using semantic HTML elements and CSS, ensuring that the content is accessible and easy to understand.

The page is designed to be visually appealing, with a focus on images and graphics that enhance the content. The contact form is user-friendly, with clear labels and large touch targets for mobile users. The location information is presented in a clear and concise manner, making it easy for users to find the company's physical address. The operating hours and emergency contact information are also presented in a clear and concise manner, ensuring that users can easily find the information they need. The map section uses Google Maps to provide a visual representation of the company's location, making it easy for users to find directions. 

You will get two messages in your browser console:
  1. Info - "Search endpoint requested!" - This is a placeholder message indicating that the search endpoint has been requested. It is not functional and does not perform any actual search.
  2. Warn - "Chrome is moving towards a new experience that allows users to choose to browse without third-party cookies." - This message informs users about the upcoming changes in Chrome regarding third-party cookies and user privacy but you can ignore it since this is a template, not a production site. But it can be suppressed by adding a cookie policy to the site with a certificate and by using a cookie consent banner (remember the cookie banner included in the template is not functional and is just a placeholder).

### Contact Page Credits

- Most information was written by me with the understanding of business contact site practices ✅ 
- Some information written by [Perplexity AI](https://www.perplexity.ai/) ✅
- Google Map - [Google Maps](https://www.google.com/maps) ✅
- Emoji Icons - OS based ✅

## JavaScript File Documentation

The JavaScript file (`script.js`) provides core functionality through carefully documented modules and utilities. Each function and module includes comprehensive JSDoc documentation and in-line comments explaining its purpose, parameters, and usage. The code is organized into discrete, maintainable sections with clear separation of reasoning. If you have any questions about how something works, check the documentation in the code.

### Core Modules

1. **Configuration Module**
   - Base URL path management
   - Valid navigation paths
   - Core application settings

2. **Feature Detection**
   - LocalStorage availability
   - Dark mode support
   - Basic browser capabilities
   - Progressive enhancement

3. **Form Validation**
   - Email validation patterns
   - Input sanitization
   - Validation utilities

4. **Loading State Management**
   - Visual feedback system
   - State persistence
   - Multiple element tracking
   - Concurrent operations

5. **Theme Management**
   - Light/dark mode toggle
   - System preference detection
   - Theme persistence
   - Transition handling

6. **Cookie Consent**
   - Temporary session storage
   - 30-minute persistence for demo mode (should be removed in production)
   - Demo mode messaging

### Main Features

- **Navigation**: Mobile menu and routing management
- **Forms**: Newsletter and contact form handling
- **Theme**: System-aware dark mode support
- **Loading**: Async operation feedback
- **Validation**: Real-time input checking
- **Storage**: Local preference persistence

### Technical Implementation

- Vanilla JavaScript (no dependencies)
- Module pattern architecture  
- Event delegation
- LocalStorage/SessionStorage
- Feature detection
- Error boundaries

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Fallbacks for older browsers
- Progressive enhancement pattern

The JavaScript implementation focuses on:
- Clear documentation
- Modular design
- Error handling
- Performance optimization
- Cross-browser support
- Maintainable code
  
## 404 / Error Page- [Error Page](#Error Page)

The 404 page is included in the project to provide a custom error page for users who navigate to a non-existent page. It includes a friendly message and links to the main sections of the site, helping users find their way back to relevant content. The design is consistent with the rest of the site, ensuring a seamless user experience. The 404 page is built using HTML and CSS, with a focus on semantic structure and accessibility. 

Additionally for the terms of the project, the page also serves as a catch-all for any other pages that are not explicitly defined in the .htaccess file. This means that if a user navigates to a page that does not exist, they will be redirected to the 404 page instead of receiving a generic server error. The 404 page is designed to be user-friendly and informative, providing users with options to navigate back to the main sections of the site.

### 404 Page Credits

- All content was written by me with the understanding of web design practices ✅
- 404 Error Icon - [SVG Repo](https://www.svgrepo.com/svg/379925/alert-error) ✅
- Home Icon - [SVG Repo](https://www.svgrepo.com/svg/535439/home-1) ✅
- Support Icon - [SVG Repo](https://www.svgrepo.com/svg/334294/support) ✅

## .htaccess

The .htaccess file is included in the project to provide additional configuration for the Apache server. It includes settings for URL rewriting, error handling, and security. The file is designed to be simple and easy to understand, with comments explaining each section. The .htaccess file is not required for the project to function, but it can be useful for improving performance, security, and can suppress some errors that may occur when using the Apache server. Additionally, the .htaccess file is used to set up custom error pages, including the 404 page, and to prevent directory listings. The file is modular, allowing for easy updates and maintenance.

## License

This project is licensed under the BSD-3 Clause License. You are free to use, modify, and distribute the code as long as you include the original copyright notice and license in any copies or substantial portions of the software. The software is provided "as is," without warranty of any kind. See the [LICENSE](LICENSE) file for more details. The license allows for both personal and commercial use, making it a flexible option for developers looking to use this template as a starting point for their own projects however, note that the license does not grant permission to use the name "Web Express Studio" or any of its trademarks without prior written consent.

-----------------------------------------------------------------------------------------------------

## Project-Guidelines

### GRCC CS 148 Final Project Guidelines

> It's time to show what you can do! (Review requirements for your final project now so you are prepared to complete it successfully). For the Final Project, you need to build a 5 page website:

> ### HTML Programming - Final Project Assignment:
 
> Points: 260
 
> ### Overview

> Create a comprehensive five-page website for a small business, organization, or personal portfolio. This project will demonstrate your mastery of HTML structure, semantic elements, forms, tables, multimedia integration, and best practices for web development.
 
> ### Required Pages

> 1. Homepage (40 points)
> - File: index.html
> - Hero section with main heading and tagline (reference https://www.w3schools.com/howto/howto_css_hero_image.asp)
> - Featured content sections
> - Call-to-action buttons
> - News or updates section
> - Newsletter signup form
> - Social proof section (testimonials/reviews)
> 2. About Page (30 points)
> - File: about.html
> - Company/personal history
> - Mission statement
> - Team member profiles
> - Timeline of major milestones
> - Awards or certifications
> - Partner/client logos
> 3. Products/Services Page (40 points)
> - File: services.html
> - Service/product categories
> - Detailed descriptions
> - Pricing tables
> - Feature comparison chart
> - Image gallery
> - Customer testimonials
> - FAQ section
> 4. Portfolio/Gallery Page (40 points)
> - File: portfolio.html
> - Project/work showcases
> - Image gallery with descriptions
> - Client/project details
> - Download/resource section
> 5. Contact Page (30 points)
> - File: contact.html
> - Contact form
> - Location information
> - Operating hours
> - Emergency contact information
> - Directions/map placeholder
 
### Technical Requirements (20 points)

> - HTML Structure
> - Valid HTML5 DOCTYPE
> - Proper meta tags (charset, viewport, description)
> - Semantic HTML throughout
> - Consistent navigation across all pages
> - Proper heading hierarchy
> - Valid HTML code (W3C validated)

> ### Grading Criteria

> #### Code Quality (30%)
> - Valid HTML
> - Proper structure
> - Clean indentation
> - Consistent formatting

> #### Content Quality (25%)
> - Completeness
> - Organization
> - Clarity
> - Professionalism

> #### Technical Implementation (25%)
> - Required elements
> - Functionality
> - Navigation
> Cross-browser compatibility

> #### Project Organization (20%)
> - File structure
> - Documentation
> - Naming conventions
> - Development process
 
> #### Important Notes
> - All content must be original or properly credited
> - No external frameworks allowed
> - No JavaScript required but may be used if you’d like
> - Placeholder content allowed but should be professional
 
> ### Resources
> - W3C Validator: https://validator.w3.org/ or use any validator located in the Resources folder or one of your choice.
> - HTML5 Documentation: https://developer.mozilla.org/en-US/docs/Web/HTML
> - Lorem Ipsum Generator: https://www.lipsum.com/