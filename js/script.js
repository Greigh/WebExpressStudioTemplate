/**
 * SiteForge Core JavaScript
 * Lightweight implementation for the SiteForge template using vanilla JavaScript
 *
 * @fileoverview Handles core functionality including:
 * - Theme management (light/dark mode)
 * - Form validation and submission
 * - Navigation and routing
 * - Cookie consent (demo)
 *
 * @author Daniel Hipskind
 * @version 1.0.0
 * @license BSD-3-Clause
 */

/**
 * Core Configuration Module
 *
 * @description
 * Manages base configuration settings for SiteForge application. Central
 * configuration object that defines:
 * - Base URL path for application routing
 * - Valid navigation paths for route handling
 * - Other core application settings
 *
 * @constant
 * @type {Object}
 * @property {string} basePath - Base URL path for the application
 * @property {string[]} navigationPaths - Valid application routes
 *
 */
const CONFIG = {
  /**
   * Base URL path for the application
   * Change this to your own path for production
   */
  basePath: '/~danielhipskind/Final_Project',

  // Valid navigation paths for route handling
  navigationPaths: ['/', '/about', '/services', '/examples', '/contact'],
};

/**
 * Feature Detection Module
 * Manages browser compatibility checks
 *
 * @note
 * This module is arguably overengineered for a simple template. Except for the
 * dark mode detection, which is a bit more complex due to the need to handle
 * multiple scenarios and browser compatibility.
 *
 * The other parts were included to demonstrate proper feature detection
 * patterns, but for this template's needs, we could simplify to just the dark
 * mode detection.
 *
 * @description
 * Provides centralized feature detection for:
 * - LocalStorage availability
 * - Dark mode preference support
 * - Touch event support
 * - Performance API support
 * - Intersection Observer support
 * - Web Animation support
 *
 * @property {Object} supports - Collection of feature detection results
 * @property {Function} check - Feature checking utility
 */
const FeatureDetection = {
  supports: {
    // Check for localStorage support
    localStorage: (() => {
      try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
      } catch (e) {
        return false;
      }
    })(),
    /**
     * Dark mode support check
     * Handles multiple scenarios and browser compatibility
     * @returns {boolean} True if dark mode is supported and preferred
     */
    darkMode: (() => {
      try {
        // Check if window.matchMedia is supported
        if (!window.matchMedia) return false;

        // Check for dark mode preference
        const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // Check if the media query is supported
        if (!darkQuery.matches && darkQuery.media === 'not all') return false;

        // Return current preference
        return darkQuery.matches;
      } catch (e) {
        console.warn('Dark mode detection failed:', e);
        return false;
      }
    })(),

    /**
     * Following checks are included for demonstration but unused
     * They could be removed to reduce code size
     */
    // Checks for touch events support
    touchEvents: 'ontouchstart' in window,
    // Checks for performance API support
    performance: 'performance' in window,
    // Checks for intersection observer support
    intersection: 'IntersectionObserver' in window,
    // Checks for web animation support
    webAnimation: 'AnimationEvent' in window,
  },

  /**
   * Check if feature is supported
   * @function check
   * @param {string} feature - Name of feature to check
   * @returns {boolean} True if supported, false otherwise
   */

  check: (feature) => FeatureDetection.supports[feature] || false,
};

/**
 * Form Validation Module
 * Handles input validation for forms
 * @namespace FormValidation
 * @property {Object} patterns - Regex patterns for validation
 */
const FormValidation = {
  patterns: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    /**
     * May want to add these in the future for production (login, better contact form, etc.)
     * phone: /^\+?[1-9]\d{1,14}$/,
     * url: /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^\s]*)?$/,
     * date: /^\d{4}-\d{2}-\d{2}$/,
     * time: /^(0[0-9]|1[0-2]):[0-5][0-9] ?([AP]M)?$/,
     * number: /^[0-9]+$/,
     * alphanumeric: /^[a-zA-Z0-9]+$/,
     * password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
     * username: /^[a-zA-Z0-9._-]{3,}$/,
     */
  },

  /**
   * Validates an email address
   * @function validate
   * @param {string} email - Email address to validate
   * @returns {boolean} True if valid, false otherwise
   */
  validate: (email) => {
    return FormValidation.patterns.email.test(email);
  },
};

/**
 * Loading State Module
 *
 * @description
 * Manages loading states for interactive elements. Provides visual feedback
 * during asynchronous operations by:
 * - Managing element states during loading
 * - Storing original element content
 * - Handling multiple concurrent loading states
 * - Restoring elements after loading
 *
 * @property {Set} activeElements - Tracks elements currently in loading state
 */
const LoadingState = {
  // Set to track active elements
  activeElements: new Set(),

  /**
   * Shows loading state for an element
   * @function show
   * @param {HTMLElement} element - Element to show loading state
   * @param {string} text - Loading text (default: 'Loading...')
   */
  show: (element, text = 'Loading...') => {
    if (!element || LoadingState.activeElements.has(element)) return;

    // Store original state
    element.dataset.originalText = element.textContent;
    element.dataset.originalDisabled = element.disabled;

    // Update element
    element.textContent = text;
    element.disabled = true;
    element.classList.add('loading');

    LoadingState.activeElements.add(element);
  },

  // Hide loading state for all elements
  hide: (element) => {
    // Check if element is in loading state
    if (!element || !LoadingState.activeElements.has(element)) return;

    // Restore original state
    element.textContent = element.dataset.originalText;
    element.disabled = element.dataset.originalDisabled === 'true';
    element.classList.remove('loading');
    // Remove from active elements
    LoadingState.activeElements.delete(element);
  },
  // Hide all loading elements
  hideAll: () => {
    LoadingState.activeElements.forEach((element) =>
      LoadingState.hide(element)
    );
  },
};

/**
 * Server Detection Module
 * Checks if the current server is Apache
 * @async
 * @function isApacheServer
 * @returns {Promise<boolean>} True if Apache server, false otherwise
 */
async function isApacheServer() {
  /**
   * Check if the server is Apache by fetching the current URL
   * @description
   * This function uses the Fetch API to make a request to the current URL
   *
   * @Note
   * This is a workaround and may not work in all environments due to CORS
   * and security policies. In a real-world scenario, you probably won't
   * need this. Unless you don't know what server you're working with.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Headers/
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
   *
   * More info:
   * @see https://developer.mozilla.org/en-US/docs/Web/API/
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/
   *
   */
  try {
    const response = await fetch(window.location.href);
    const server = response.headers.get('server');
    return server && server.toLowerCase().includes('apache');
  } catch (error) {
    console.warn('Server detection failed:', error);
    return false;
  }
}

// Update the routing logic
isApacheServer().then((isApache) => {
  // Only handle routing if not on Apache
  if (!isApache) {
    // Check if the current path is in the navigation paths and create a variable
    const path = window.location.pathname.replace(CONFIG.basePath, '');
    // Handle 404
    if (!CONFIG.navigationPaths.includes(path) && path !== '/404.html') {
      window.location.href = `${CONFIG.basePath}/404.html`;
    }
    // Handle Index
    if (path === '/' || path === '') {
      window.location.href = `${CONFIG.basePath}/index.html`;
    }
  }
});

/**
 * Theme Management Module
 *
 * @description
 * Manages theme functionality including:
 * - Light/dark mode toggle
 * - System preference detection
 * - Theme persistence
 * - Transition handling
 *
 * @param {void}
 * @returns {void}
 *
 * @fires click - On theme toggle button click
 * @listens DOMContentLoaded
 *
 * @property {HTMLElement} themeToggle - Theme toggle button
 * @property {string} storedTheme - User's stored theme preference
 */
const initializeTheme = () => {
  // Check if elements exist and set up variables
  const themeToggle = document.querySelector('.theme-toggle');
  const storedTheme = localStorage.getItem('theme');

  // Apply theme without RAF to prevent flash
  if (
    storedTheme === 'dark' ||
    (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  }

  // Set up theme toggle button
  if (themeToggle) {
    // Set initial state based on stored theme
    themeToggle.addEventListener('click', () => {
      // Toggle theme classes
      document.documentElement.classList.toggle('dark');

      // Toggle button state
      document.body.classList.toggle('dark');
      // Update localStorage with the current theme
      localStorage.setItem(
        'theme',
        document.body.classList.contains('dark') ? 'dark' : 'light'
      );
    });
  }
};

/**
 * Navigation Management Module
 *
 * @description
 * Manages navigation functionality including:
 * - Mobile hamburger menu toggle
 * - Navigation menu visibility
 * - Link click handling
 * - Menu state management
 * - Responsive behavior
 *
 * @param {void}
 * @returns {void}
 *
 * @fires click - On hamburger menu click
 * @fires click - On navigation link click
 * @listens DOMContentLoaded
 *
 * @property {HTMLElement} navLinks - Navigation links container
 * @property {HTMLElement} hamburger - Hamburger menu button
 */
const initializeNavigation = () => {
  // Check if elements exist and set up variables
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  // Check if elements exist
  if (hamburger && navLinks) {
    const toggleNav = () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    };

    // Toggle navigation on hamburger click
    hamburger.addEventListener('click', toggleNav);

    // Close menu when clicking links
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          toggleNav();
        }
      });
    });
  }
};

/**
 * Form Initialization Module
 *
 * @description
 * Handles form submissions including:
 * - Newsletter signup
 * - Contact form
 * - Form validation
 * - Demo mode responses
 *
 * @property {Object} forms - Collection of form elements
 * @property {HTMLElement} forms.newsletter - Newsletter form element
 * @property {HTMLElement} forms.contact - Contact form element
 */
const initializeForms = () => {
  const forms = {
    newsletter: document.getElementById('newsletterForm'),
    contact: document.getElementById('contactForm'),
  };

  /**
   * Form Handler Factory
   * Generic form handler that creates event listeners for forms
   * @function handleForm
   * @param {string} formId - ID of the form to handle
   * @param {Function} handler - Callback function to handle form submission
   * @returns {void}
   */
  const handleForm = (formId, handler) => {
    const form = forms[formId];
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        handler(e);
      });
    }
  };

  // Newsletter form on Home Page
  handleForm('newsletter', (e) => {
    // Prevent default form submission and create variable
    const email = e.target.querySelector('#newsletter-email').value;

    // Validate email
    if (FormValidation.validate(email)) {
      console.info('Demo: Newsletter signup:', email);
      alert('This is a demo. No emails will be stored.');
      e.target.reset();
    } else {
      alert('Please enter a valid email');
    }
  });

  // Contact form on Contact Page
  handleForm('contact', (e) => {
    // Prevent default form submission and create variable
    const email = e.target.querySelector('#email').value;

    // Validate email
    if (FormValidation.validate(email)) {
      // Simulate form submission
      console.info('Demo: Contact form submission');
      alert('This is a demo. No messages will be sent.');
      e.target.reset();
    } else {
      alert('Please enter a valid email');
    }
  });
};

/**
 * Cookie Consent Module
 * Manages cookie preferences banner visibility (Demo Only)
 * @returns {void}
 */
const initializeCookieConsent = () => {
  // Check if elements exist and set up variables
  const cookieConsent = document.getElementById('cookie-consent');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');
  const learnMoreLink = document.querySelector('.cookie-link');

  if (cookieConsent && acceptBtn && declineBtn && learnMoreLink) {
    // Check for temporary session preference
    const tempPreference = sessionStorage.getItem('tempCookieConsent');

    // Check if cookie consent is already given in the past 30 minutes
    // Change this to your own logic for production
    if (!tempPreference) {
      cookieConsent.classList.remove('hidden');
      const expirationTime = Date.now() + 30 * 60 * 1000;
      sessionStorage.setItem('cookieConsentExpires', expirationTime);
    }

    // Handle user preferences (Demo Only)
    const handlePreference = (preference) => {
      // Simulate storing preference
      console.info('Demo: Cookie preference action:', preference);
      cookieConsent.classList.add('hidden');

      // Store preference in sessionStorage for 30 minutes
      sessionStorage.setItem('tempCookieConsent', preference);
      sessionStorage.setItem(
        'cookieConsentExpires',
        Date.now() + 30 * 60 * 1000
      );
      // Simulate storing preference
      // In a real implementation, you would send this to your server
      alert(
        'SiteForge Demo Message\n\nPreference will be stored temporarily for 30 minutes.'
      );
    };

    // Event listeners
    acceptBtn.addEventListener('click', () => handlePreference('accepted'));
    declineBtn.addEventListener('click', () => handlePreference('declined'));

    // Learn More link handler
    learnMoreLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert(
        'SiteForge Demo Message\n\nPreference will be stored temporarily for 30 minutes.'
      );
      handlePreference('declined');
    });
  }
};

/**
 * Comparison Table Module
 *
 * @description
 * Manages the interactive comparison table including:
 * - Toggle extended feature rows
 * - Handle rounded corners on last visible row
 * - Update button text and aria states
 * - Manage CSS transitions and animations
 *
 * @param {void}
 * @returns {void}
 *
 * @fires click - On toggle button click
 * @listens DOMContentLoaded
 *
 * @property {HTMLElement} toggleBtn - Toggle button element
 * @property {HTMLElement} extendedRows - Extended features container
 * @property {HTMLElement} initialRows - Initial features container
 */

const initializeComparisonTable = () => {
  // Check if elements exist and set up variables
  const toggleBtn = document.querySelector('.comparison-toggle');
  const extendedRows = document.querySelector('.comparison-body-extended');
  const initialRows = document.querySelector('.comparison-body');

  if (toggleBtn && extendedRows && initialRows) {
    // Set initial state
    const setupInitialState = () => {
      // Hide extended rows by default
      extendedRows.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');

      // Add rounded corners to initial last row
      const initialLastRow = initialRows.querySelector('tr:last-child');
      if (initialLastRow) {
        ['first-child', 'last-child'].forEach((selector) => {
          const cell = initialLastRow.querySelector(`td:${selector}`);
          if (cell) cell.classList.add('rounded');
        });
      }
    };

    // Setup initial state
    setupInitialState();

    // Add toggle handler
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';

      // Toggle aria state
      toggleBtn.setAttribute('aria-expanded', !isExpanded);

      // Toggle visibility
      extendedRows.classList.toggle('hidden');

      // Update button text
      toggleBtn.querySelector('.toggle-text').textContent = isExpanded
        ? 'Show More Features'
        : 'Show Less';

      // Handle rounded corners
      const initialLastRow = initialRows.querySelector('tr:last-child');
      const extendedLastRow = extendedRows.querySelector('tr:last-child');

      if (isExpanded) {
        // Collapsing - add rounded corners to initial last row
        if (initialLastRow) {
          ['first-child', 'last-child'].forEach((selector) => {
            const cell = initialLastRow.querySelector(`td:${selector}`);
            if (cell) cell.classList.add('rounded');
          });
        }
      } else {
        // Expanding - remove rounded corners from initial last row
        if (initialLastRow) {
          ['first-child', 'last-child'].forEach((selector) => {
            const cell = initialLastRow.querySelector(`td:${selector}`);
            if (cell) cell.classList.remove('rounded');
          });
        }
        // Add rounded corners to extended last row
        if (extendedLastRow) {
          ['first-child', 'last-child'].forEach((selector) => {
            const cell = extendedLastRow.querySelector(`td:${selector}`);
            if (cell) cell.classList.add('rounded');
          });
        }
      }
    });
  }
};

/**
 * Theme Slider Module
 * Manages autoplay slideshow functionality
 *
 * @module ThemeSlider
 * @requires DOM
 */
const initializeThemeSlider = () => {
  // Get required elements
  const slider = document.querySelector('.themes-slider');
  const dots = document.querySelectorAll('.nav-dot');

  // Only initialize if slider and dots exist
  if (!slider || !dots.length) return;

  let currentSlide = 0;
  let isPlaying = true;
  let slideInterval;

  const goToSlide = (index) => {
    const slides = slider.querySelectorAll('.theme-card');
    if (!slides.length) return;

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slides.forEach((slide) => {
      slide.classList.remove('active');
      slide.style.transform = 'translateX(100%)';
    });

    slides[index].classList.add('active');
    slides[index].style.transform = 'translateX(0)';

    dots.forEach((dot) => dot.classList.remove('active'));
    dots[index].classList.add('active');

    currentSlide = index;
  };

  const startAutoplay = () => {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 8000);
  };

  const stopAutoplay = () => {
    clearInterval(slideInterval);
    isPlaying = false;
  };

  // Initialize dots
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToSlide(idx);
      stopAutoplay();
    });
  });

  // Start autoplay
  startAutoplay();

  // Handle hover pause
  slider.addEventListener('mouseenter', () => {
    if (isPlaying) clearInterval(slideInterval);
  });

  slider.addEventListener('mouseleave', () => {
    if (isPlaying) startAutoplay();
  });
};

/**
 * Hero Image Loading Module
 *
 * @description
 * Handles the progressive loading of the hero section background image.
 * Implements loading states and error handling for better user experience.
 *
 * @function loadHeroImage
 *
 * @example
 * // Call when DOM is ready
 * document.addEventListener('DOMContentLoaded', loadHeroImage);
 *
 * @returns {void}
 *
 * @fires onload - When image successfully loads
 * @fires onerror - When image fails to load
 *
 * @listens DOMContentLoaded
 *
 * @property {HTMLElement} heroSection - The hero section container
 * @property {Image} img - The hero image instance
 *
 * @aria
 * - aria-busy: Indicates loading state to screen readers
 *
 * @css
 * - .loaded: Applied when image is successfully loaded
 */

function loadHeroImage() {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return; // Guard clause

  const img = new Image();
  img.src = './img/index/hero.jpg';

  // Add loading attribute
  heroSection.setAttribute('aria-busy', 'true');

  img.onload = () => {
    heroSection.classList.add('loaded');
    heroSection.setAttribute('aria-busy', 'false');
  };

  img.onerror = () => {
    console.error('Failed to load hero image');
    heroSection.setAttribute('aria-busy', 'false');
  };
}

/**
 * Main initialization logic
 * Runs when DOM content is loaded
 * Initializes core functionality:
 * - Theme management (light/dark mode)
 * - Navigation (mobile menu, routing)
 * - Forms (newsletter, contact)
 * - Transitions (removes preload state)
 *
 * @listens DOMContentLoaded
 * @fires initializeTheme
 * @fires initializeNavigation
 * @fires initializeForms
 * @fires initializeThemeSlider
 * @fires initializeComparisonTable
 * @fires initializeCookieConsent
 * @fires loadHeroImage
 *
 */
document.addEventListener('DOMContentLoaded', () => {
  // Core initialization
  initializeTheme();
  initializeNavigation();
  initializeForms();
  initializeThemeSlider();
  initializeComparisonTable();
  initializeCookieConsent();
  loadHeroImage();

  // Remove preload class for transitions
  document.documentElement.classList.remove('preload');
});
