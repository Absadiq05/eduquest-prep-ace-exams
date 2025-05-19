
document.addEventListener('DOMContentLoaded', function() {
  // Application state
  const appState = {
    currentSection: 'welcome',
    userLoggedIn: false
  };
  
  // DOM Elements
  const sections = {
    welcome: document.getElementById('welcome-section'),
    auth: document.getElementById('auth-section'),
    profile: document.getElementById('profile-section'),
    level: document.getElementById('level-section'),
    subject: document.getElementById('subject-section'),
    questions: document.getElementById('questions-section'),
    dashboard: document.getElementById('dashboard-section'),
    chatbot: document.getElementById('chatbot-section'),
    rewards: document.getElementById('rewards-section'),
    support: document.getElementById('support-section')
  };
  
  const header = document.querySelector('header');
  const logo = document.getElementById('logo');
  const mainNav = document.getElementById('main-nav');
  const footer = document.getElementById('app-footer');
  
  // Event handlers
  function showSection(sectionId) {
    // Hide all sections
    Object.values(sections).forEach(section => {
      if (section) section.classList.add('hidden');
    });
    
    // Show requested section
    const section = sections[sectionId];
    if (section) section.classList.remove('hidden');
    
    // Update state
    appState.currentSection = sectionId;
    
    // Show/hide navigation based on auth state
    updateNavigation();
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    console.log(`Navigated to: ${sectionId}`);
  }
  
  function updateNavigation() {
    // User is logged in if not on welcome or auth pages
    appState.userLoggedIn = appState.currentSection !== 'welcome' && appState.currentSection !== 'auth';
    
    // Show/hide main navigation
    if (appState.userLoggedIn) {
      mainNav.classList.remove('hidden');
    } else {
      mainNav.classList.add('hidden');
    }
    
    // Show/hide footer
    const hideFooterOnSections = ['welcome', 'auth', 'profile', 'level'];
    if (hideFooterOnSections.includes(appState.currentSection)) {
      footer.classList.add('hidden');
    } else {
      footer.classList.remove('hidden');
    }
  }
  
  // Event: Start Learning button
  const startLearningBtn = document.getElementById('start-learning-btn');
  if (startLearningBtn) {
    startLearningBtn.addEventListener('click', () => {
      showSection('auth');
    });
  }
  
  // Event: Logo click (home)
  if (logo) {
    logo.addEventListener('click', () => {
      showSection('welcome');
    });
  }
  
  // Events: Auth forms submission
  const signinForm = document.getElementById('signin-form');
  const signupForm = document.getElementById('signup-form');
  
  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Sign in form submitted');
      showSection('profile');
    });
  }
  
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Sign up form submitted');
      showSection('profile');
    });
  }
  
  // Event: Sign out
  const signOutBtn = document.getElementById('signout-btn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      console.log('Signing out');
      showSection('welcome');
    });
  }
  
  // Event: Tab switching
  const tabTriggers = document.querySelectorAll('.tab-trigger');
  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      // Remove active class from all triggers and contents
      tabTriggers.forEach(t => t.classList.remove('active'));
      
      // Get the tab id
      const tabId = trigger.getAttribute('data-tab');
      
      // Add active class to clicked trigger
      trigger.classList.add('active');
      
      // Hide all tab contents and show the active one
      const tabContents = document.querySelectorAll('.tab-content');
      tabContents.forEach(content => content.classList.remove('active'));
      
      const activeContent = document.getElementById(`${tabId}-tab`);
      if (activeContent) activeContent.classList.add('active');
    });
  });
  
  // Event: Footer navigation
  const footerBtns = document.querySelectorAll('.footer-btn, .primary-btn');
  footerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.getAttribute('data-section');
      if (section) showSection(section);
    });
  });
  
  // Nav menu buttons events
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const sectionMap = {
        'Dashboard': 'dashboard',
        'Coin Rewards': 'rewards',
        'Support': 'support',
        'Sign Out': 'welcome'
      };
      
      const targetSection = sectionMap[this.textContent.trim()];
      if (targetSection) showSection(targetSection);
    });
  });
  
  // Initialize quotes
  const quotes = [
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The beautiful thing about learning is that no one can take it away from you."
  ];
  
  const quoteElement = document.getElementById('random-quote');
  if (quoteElement) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = `"${randomQuote}"`;
  }
  
  // Load additional page content (would typically fetch these from server)
  function loadPageContent(pageId, url) {
    const section = document.getElementById(`${pageId}-section`);
    if (!section) return;
    
    // In a real app, you would fetch the HTML content from server
    // For now, we'll just simulate the behavior
    console.log(`Loading content for: ${pageId}`);
    
    // Here we'd normally use fetch() to get content from server
    // For demo purposes, pages will be added separately
  }
  
  // Start the application
  function initApp() {
    console.log('EDUQUEST application initialized');
    showSection('welcome');
    
    // In a real app, check if user is already logged in
    // If logged in, redirect to dashboard or appropriate page
  }
  
  // Start the application
  initApp();
});
