
// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();
  
  // App State
  const state = {
    currentSection: 'welcome',
    userData: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      level: '',
      subject: ''
    }
  };
  
  // DOM Elements
  const app = document.getElementById('app');
  const header = document.getElementById('header');
  const mainNav = document.getElementById('main-nav');
  const logo = document.getElementById('logo');
  const footer = document.getElementById('footer');
  const startLearningBtn = document.getElementById('start-learning-btn');
  const signInForm = document.getElementById('signin-form');
  const signUpForm = document.getElementById('signup-form');
  const randomQuote = document.getElementById('random-quote');
  
  // Collection of all sections
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

  // Collection of all tabs
  const tabs = {
    signin: document.getElementById('signin-tab'),
    signup: document.getElementById('signup-tab')
  };

  // Inspirational quotes
  const quotes = [
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The beautiful thing about learning is that no one can take it away from you."
  ];
  
  // Set a random quote
  randomQuote.textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;

  // Navigation functions
  function navigateTo(section) {
    // Hide all sections
    Object.values(sections).forEach(sectionEl => {
      if (sectionEl) {
        sectionEl.classList.add('hidden');
      }
    });
    
    // Show target section
    if (sections[section]) {
      sections[section].classList.remove('hidden');
      state.currentSection = section;
      updateUIForSection(section);
    }
  }
  
  function updateUIForSection(section) {
    // Determine if header navigation should be shown
    const isLoggedIn = section !== 'welcome' && section !== 'auth';
    
    if (isLoggedIn) {
      mainNav.classList.remove('hidden');
    } else {
      mainNav.classList.add('hidden');
    }
    
    // Determine if footer should be shown
    const showFooter = section !== 'welcome' && 
                      section !== 'auth' && 
                      section !== 'profile' && 
                      section !== 'level';
                      
    if (showFooter) {
      footer.classList.remove('hidden');
    } else {
      footer.classList.add('hidden');
    }
  }

  // Tab switching
  const tabTriggers = document.querySelectorAll('.tab-trigger');
  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const tabId = this.dataset.tab;
      
      // Hide all tab content
      Object.values(tabs).forEach(tab => {
        tab.classList.add('hidden');
      });
      
      // Show selected tab content
      tabs[tabId].classList.remove('hidden');
      
      // Update active trigger
      tabTriggers.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Event listeners
  startLearningBtn.addEventListener('click', function() {
    navigateTo('auth');
  });
  
  logo.addEventListener('click', function() {
    navigateTo('welcome');
  });
  
  signInForm.addEventListener('submit', function(e) {
    e.preventDefault();
    navigateTo('dashboard');
  });
  
  signUpForm.addEventListener('submit', function(e) {
    e.preventDefault();
    navigateTo('profile');
  });
  
  // Footer navigation
  const footerButtons = footer.querySelectorAll('button');
  footerButtons.forEach(button => {
    button.addEventListener('click', function() {
      navigateTo(this.dataset.section);
    });
  });
  
  // Header navigation
  const headerButtons = mainNav.querySelectorAll('button');
  headerButtons.forEach(button => {
    button.addEventListener('click', function() {
      navigateTo(this.dataset.section);
    });
  });
  
  // Dynamically generate the profile, level, and subject selection forms
  function createProfileSection() {
    const profileSection = sections.profile;
    if (!profileSection.innerHTML.trim()) {
      profileSection.innerHTML = `
        <div class="py-8 px-4 animate-fade-in">
          <div class="container mx-auto max-w-xl">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title text-2xl">Update Your Profile</h3>
                <p class="card-description">
                  Tell us more about yourself so we can personalize your learning experience.
                </p>
              </div>
              <form id="profile-form">
                <div class="card-content space-y-4">
                  <div class="space-y-2">
                    <label for="profilePhoto">Profile Photo</label>
                    <input
                      id="profilePhoto"
                      type="file"
                      accept="image/*"
                      class="input"
                    />
                  </div>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <label for="firstName">First Name</label>
                      <input
                        id="firstName"
                        class="input"
                        required
                      />
                    </div>
                    
                    <div class="space-y-2">
                      <label for="lastName">Last Name</label>
                      <input
                        id="lastName"
                        class="input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div class="space-y-2">
                    <label for="otherName">Other Name (Optional)</label>
                    <input
                      id="otherName"
                      class="input"
                    />
                  </div>
                  
                  <div class="space-y-2">
                    <label for="dob">Date of Birth</label>
                    <input
                      id="dob"
                      type="date"
                      class="input"
                    />
                  </div>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <label for="stateOrigin">State of Origin</label>
                      <input
                        id="stateOrigin"
                        class="input"
                      />
                    </div>
                    
                    <div class="space-y-2">
                      <label for="lgaOrigin">LGA of Origin</label>
                      <input
                        id="lgaOrigin"
                        class="input"
                      />
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <label for="stateResident">State of Residence</label>
                      <input
                        id="stateResident"
                        class="input"
                      />
                    </div>
                    
                    <div class="space-y-2">
                      <label for="lgaResident">LGA of Residence</label>
                      <input
                        id="lgaResident"
                        class="input"
                      />
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary w-full">Save Profile</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      `;
      
      // Add form submission handler
      document.getElementById('profile-form').addEventListener('submit', function(e) {
        e.preventDefault();
        navigateTo('level');
      });
    }
  }
  
  function createLevelSection() {
    const levelSection = sections.level;
    if (!levelSection.innerHTML.trim()) {
      levelSection.innerHTML = `
        <div class="py-8 px-4 animate-fade-in">
          <div class="container mx-auto max-w-md">
            <div class="card">
              <div class="card-header text-center">
                <h3 class="card-title text-2xl">Select Your Education Level</h3>
                <p class="card-description">
                  This helps us provide questions appropriate for your level.
                </p>
              </div>
              <form id="level-form">
                <div class="card-content">
                  <div class="space-y-4">
                    <div class="flex items-center space-x-2 border rounded-lg p-4 hover:bg-secondary/50 cursor-pointer">
                      <input type="radio" name="level" id="junior" value="junior" class="text-primary" />
                      <label for="junior" class="w-full cursor-pointer font-medium">Junior Secondary School</label>
                    </div>
                    <div class="flex items-center space-x-2 border rounded-lg p-4 hover:bg-secondary/50 cursor-pointer">
                      <input type="radio" name="level" id="senior" value="senior" class="text-primary" />
                      <label for="senior" class="w-full cursor-pointer font-medium">Senior Secondary School</label>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary w-full" id="confirm-level-btn" disabled>
                    Confirm Level
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      `;
      
      // Add radio button change handler
      const levelRadios = levelSection.querySelectorAll('input[type="radio"]');
      const confirmLevelBtn = document.getElementById('confirm-level-btn');
      
      levelRadios.forEach(radio => {
        radio.addEventListener('change', function() {
          confirmLevelBtn.disabled = false;
          state.userData.level = this.value;
        });
      });
      
      // Add form submission handler
      document.getElementById('level-form').addEventListener('submit', function(e) {
        e.preventDefault();
        navigateTo('subject');
      });
    }
  }
  
  function createSubjectSection() {
    const subjectSection = sections.subject;
    if (!subjectSection.innerHTML.trim()) {
      const subjects = [
        "Mathematics",
        "English Language",
        "Science",
        "Social Studies",
        "Biology",
        "Chemistry",
        "Physics",
        "Government",
        "Economics",
        "Literature"
      ];
      
      let subjectButtons = '';
      subjects.forEach(subject => {
        subjectButtons += `
          <button
            type="button"
            class="subject-btn btn btn-outline h-16"
            data-subject="${subject}"
          >
            ${subject}
          </button>
        `;
      });
      
      subjectSection.innerHTML = `
        <div class="py-8 px-4 animate-fade-in">
          <div class="container mx-auto max-w-2xl">
            <div class="card">
              <div class="card-header text-center">
                <h3 class="card-title text-2xl">Welcome to EDUQUESTbot!</h3>
                <p class="card-description text-lg">
                  Select your preferred subject to start practicing
                </p>
              </div>
              <div class="card-content">
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  ${subjectButtons}
                </div>
              </div>
              <div class="card-footer">
                <button 
                  id="continue-to-questions-btn" 
                  class="btn btn-primary w-full" 
                  disabled
                >
                  Continue to Questions
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Add subject button click handlers
      const subjectBtns = subjectSection.querySelectorAll('.subject-btn');
      const continueBtn = document.getElementById('continue-to-questions-btn');
      
      subjectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          // Reset all buttons
          subjectBtns.forEach(b => {
            b.classList.remove('bg-primary', 'text-white');
            b.classList.add('hover:bg-secondary', 'hover:text-primary');
          });
          
          // Highlight selected button
          this.classList.add('bg-primary', 'text-white');
          this.classList.remove('hover:bg-secondary', 'hover:text-primary');
          
          // Enable continue button
          continueBtn.disabled = false;
          
          // Save selected subject
          state.userData.subject = this.dataset.subject;
        });
      });
      
      // Add continue button handler
      continueBtn.addEventListener('click', function() {
        navigateTo('questions');
      });
    }
  }
  
  function createQuestionSection() {
    const questionSection = sections.questions;
    if (!questionSection.innerHTML.trim()) {
      // Mock question data
      const mockQuestion = {
        id: 1,
        text: "Which of the following is a correct statement about kinetic energy?",
        options: [
          "It is directly proportional to the mass and inversely proportional to velocity",
          "It is directly proportional to the mass and the square of velocity",
          "It is inversely proportional to both mass and velocity",
          "It is independent of the object's mass"
        ],
        correctAnswer: 1
      };
      
      questionSection.innerHTML = `
        <div class="py-8 px-4 animate-fade-in pb-20">
          <div class="container mx-auto max-w-2xl">
            <div class="card">
              <div class="card-header">
                <div class="flex justify-between items-center mb-4">
                  <h3 class="card-title">Question 1 of 20</h3>
                  <div class="text-sm text-gray-600">Subject: ${state.userData.subject || 'Physics'}</div>
                </div>
                <div class="w-full h-2 bg-secondary rounded-full">
                  <div class="h-2 bg-primary rounded-full" style="width: 5%;"></div>
                </div>
              </div>
              <div class="card-content">
                <p class="text-lg mb-6">${mockQuestion.text}</p>
                
                <div class="space-y-3">
                  ${mockQuestion.options.map((option, idx) => `
                    <label class="flex items-center space-x-2 border rounded-lg p-4 hover:bg-secondary/50 cursor-pointer">
                      <input type="radio" name="answer" value="${idx}" class="text-primary" />
                      <span>${option}</span>
                    </label>
                  `).join('')}
                </div>
              </div>
              <div class="card-footer">
                <button id="submit-answer-btn" class="btn btn-primary w-full" disabled>
                  Submit Answer
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Add answer selection handler
      const answerRadios = questionSection.querySelectorAll('input[type="radio"]');
      const submitBtn = document.getElementById('submit-answer-btn');
      
      answerRadios.forEach(radio => {
        radio.addEventListener('change', function() {
          submitBtn.disabled = false;
        });
      });
      
      // Add submit button handler
      submitBtn.addEventListener('click', function() {
        navigateTo('dashboard');
      });
    }
  }
  
  function createDashboardSection() {
    const dashboardSection = sections.dashboard;
    if (!dashboardSection.innerHTML.trim()) {
      dashboardSection.innerHTML = `
        <div class="py-8 px-4 animate-fade-in">
          <div class="container mx-auto">
            <!-- Welcome Card -->
            <div class="mb-8">
              <div class="card bg-gradient-to-r from-primary/10 to-secondary border-none shadow-md">
                <div class="card-content p-6">
                  <div class="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h2 class="text-2xl md:text-3xl font-bold mb-2">Welcome back, Student!</h2>
                      <p class="text-gray-600 mb-4">Ready to continue your JAMB & Post-UTME preparation journey?</p>
                      <button class="btn btn-primary gap-2" id="start-practice-btn">
                        <i data-lucide="message-circle" class="h-4 w-4"></i>
                        Start Practicing
                      </button>
                    </div>
                    <div class="hidden md:block">
                      <i data-lucide="graduation-cap" class="h-24 w-24 text-primary opacity-50"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats & Progress -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div class="card">
                <div class="card-header flex flex-row items-center justify-between pb-2">
                  <div class="space-y-1">
                    <h4 class="text-sm font-medium">Questions Attempted</h4>
                    <p class="text-sm text-gray-600">Your progress</p>
                  </div>
                  <i data-lucide="book-open" class="h-4 w-4 text-primary"></i>
                </div>
                <div class="card-content">
                  <div class="text-2xl font-bold">42/500</div>
                  <div class="w-full h-2 bg-secondary rounded-full mt-3">
                    <div class="h-2 bg-primary rounded-full" style="width: 8%;"></div>
                  </div>
                  <p class="text-xs text-gray-600 mt-2">8% complete</p>
                </div>
              </div>
              
              <div class="card">
                <div class="card-header flex flex-row items-center justify-between pb-2">
                  <div class="space-y-1">
                    <h4 class="text-sm font-medium">Current Score</h4>
                    <p class="text-sm text-gray-600">Your performance</p>
                  </div>
                  <i data-lucide="award" class="h-4 w-4 text-primary"></i>
                </div>
                <div class="card-content">
                  <div class="text-2xl font-bold">78%</div>
                  <div class="w-full h-2 bg-secondary rounded-full mt-3">
                    <div class="h-2 bg-green-500 rounded-full" style="width: 78%;"></div>
                  </div>
                  <p class="text-xs text-green-600 mt-2">Good progress! Keep it up!</p>
                </div>
              </div>
              
              <div class="card">
                <div class="card-header flex flex-row items-center justify-between pb-2">
                  <div class="space-y-1">
                    <h4 class="text-sm font-medium">Days to JAMB</h4>
                    <p class="text-sm text-gray-600">Countdown</p>
                  </div>
                  <i data-lucide="calendar" class="h-4 w-4 text-primary"></i>
                </div>
                <div class="card-content">
                  <div class="text-2xl font-bold">45 days</div>
                  <div class="text-xs text-gray-600 mt-2">Exam Date: June 30, 2025</div>
                  <button class="btn btn-link p-0 h-auto mt-1 text-xs">
                    View JAMB schedule
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Recommended actions -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="flex items-center font-medium">
                    <i data-lucide="book-open" class="h-5 w-5 mr-2 text-primary"></i>
                    Recommended Study Topics
                  </h4>
                  <p class="text-sm text-gray-600">Based on your performance</p>
                </div>
                <div class="card-content">
                  <ul class="space-y-3">
                    <li class="flex items-center justify-between p-2 border rounded hover:bg-muted/50 cursor-pointer">
                      <span>Nigerian History (Colonial Period)</span>
                      <span class="text-sm text-red-500 font-medium">45%</span>
                    </li>
                    <li class="flex items-center justify-between p-2 border rounded hover:bg-muted/50 cursor-pointer">
                      <span>Chemical Bonding</span>
                      <span class="text-sm text-red-500 font-medium">52%</span>
                    </li>
                    <li class="flex items-center justify-between p-2 border rounded hover:bg-muted/50 cursor-pointer">
                      <span>Algebraic Expressions</span>
                      <span class="text-sm text-red-500 font-medium">63%</span>
                    </li>
                  </ul>
                  <button class="btn btn-outline w-full mt-4">View All Topics</button>
                </div>
              </div>
              
              <div class="card">
                <div class="card-header">
                  <h4 class="flex items-center font-medium">
                    <i data-lucide="alert-circle" class="h-5 w-5 mr-2 text-primary"></i>
                    Upcoming Events
                  </h4>
                  <p class="text-sm text-gray-600">Stay updated</p>
                </div>
                <div class="card-content">
                  <ul class="space-y-3">
                    <li class="flex items-center justify-between p-2 border rounded hover:bg-muted/50 cursor-pointer">
                      <span>JAMB Mock Exam</span>
                      <span class="text-sm text-gray-600">May 15, 2025</span>
                    </li>
                    <li class="flex items-center justify-between p-2 border rounded hover:bg-muted/50 cursor-pointer">
                      <span>Chemistry Live Session</span>
                      <span class="text-sm text-gray-600">May 2, 2025</span>
                    </li>
                    <li class="flex items-center justify-between p-2 border rounded hover:bg-muted/50 cursor-pointer">
                      <span>Registration Deadline</span>
                      <span class="text-sm text-gray-600">April 30, 2025</span>
                    </li>
                  </ul>
                  <button class="btn btn-outline w-full mt-4">View Calendar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Add start practice button handler
      document.getElementById('start-practice-btn').addEventListener('click', function() {
        navigateTo('questions');
      });
    }
  }
  
  function createChatbotSection() {
    const chatbotSection = sections.chatbot;
    if (!chatbotSection.innerHTML.trim()) {
      // Initial chatbot messages
      const initialMessages = [
        {
          id: 1,
          text: "Hello! I'm EDUQUESTbot, your personal AI study assistant. How can I help with your JAMB or Post-UTME preparation today?",
          sender: 'bot',
          timestamp: new Date()
        }
      ];
      
      // Quick prompts
      const quickPrompts = [
        "Help me with JAMB Physics",
        "How do I prepare for Post-UTME?",
        "Explain chemical bonding",
        "Practice math questions"
      ];
      
      let messagesHTML = '';
      initialMessages.forEach(msg => {
        const isUser = msg.sender === 'user';
        
        messagesHTML += `
          <div class="flex mb-4 ${isUser ? 'justify-end' : ''}">
            ${!isUser ? `
              <div class="bg-primary text-white p-2 rounded-full mr-2 flex-shrink-0">
                <i data-lucide="bot" class="h-5 w-5"></i>
              </div>
            ` : ''}
            
            <div class="max-w-[80%] p-3 rounded-lg ${
              isUser 
                ? 'bg-primary text-white rounded-br-none' 
                : 'bg-secondary text-foreground rounded-bl-none'
            }">
              <p>${msg.text}</p>
              <p class="text-xs opacity-70 mt-1">
                ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </p>
            </div>
            
            ${isUser ? `
              <div class="bg-primary text-white p-2 rounded-full ml-2 flex-shrink-0">
                <i data-lucide="user" class="h-5 w-5"></i>
              </div>
            ` : ''}
          </div>
        `;
      });
      
      let quickPromptsHTML = '';
      quickPrompts.forEach((prompt, idx) => {
        quickPromptsHTML += `
          <button
            class="btn btn-outline btn-sm whitespace-nowrap quick-prompt-btn"
            data-prompt="${prompt}"
          >
            ${idx === 0 ? '<i data-lucide="book-open" class="h-3 w-3 mr-1"></i>' : 
             idx === 1 ? '<i data-lucide="help-circle" class="h-3 w-3 mr-1"></i>' : ''}
            ${prompt}
          </button>
        `;
      });
      
      chatbotSection.innerHTML = `
        <div class="py-8 px-4 pb-20 animate-fade-in">
          <div class="container mx-auto max-w-3xl">
            <div class="card shadow-lg">
              <div class="card-header border-b bg-primary text-white">
                <div class="flex items-center">
                  <i data-lucide="bot" class="h-6 w-6 mr-2"></i>
                  <h3 class="card-title">EDUQUESTbot</h3>
                </div>
              </div>
              
              <div class="p-0">
                <!-- Chat messages -->
                <div class="h-[500px] overflow-y-auto p-4" id="chat-messages">
                  ${messagesHTML}
                </div>
                
                <!-- Quick prompts -->
                <div class="p-3 bg-muted/30 border-t overflow-x-auto">
                  <div class="flex gap-2">
                    ${quickPromptsHTML}
                  </div>
                </div>
              </div>
              
              <div class="card-footer p-3 border-t">
                <div class="flex w-full gap-2">
                  <input
                    id="chat-input"
                    placeholder="Ask EDUQUESTbot anything about your studies..."
                    class="input flex-1"
                  />
                  <button id="send-message-btn" class="btn btn-primary" disabled>
                    <i data-lucide="send" class="h-4 w-4"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Chat functionality
      const chatInput = document.getElementById('chat-input');
      const sendBtn = document.getElementById('send-message-btn');
      const chatMessages = document.getElementById('chat-messages');
      const quickPromptBtns = chatbotSection.querySelectorAll('.quick-prompt-btn');
      
      // Quick prompt buttons
      quickPromptBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          chatInput.value = this.dataset.prompt;
          sendBtn.disabled = false;
          chatInput.focus();
        });
      });
      
      // Enable/disable send button based on input
      chatInput.addEventListener('input', function() {
        sendBtn.disabled = !this.value.trim();
      });
      
      // Handle enter key press
      chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim()) {
          sendMessage();
        }
      });
      
      // Send button click
      sendBtn.addEventListener('click', sendMessage);
      
      function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Add user message to chat
        addMessageToChat(message, 'user');
        
        // Clear input
        chatInput.value = '';
        sendBtn.disabled = true;
        
        // Simulate bot response
        setTimeout(() => {
          const botResponses = [
            "That's a great question about JAMB Physics! The formula for calculating electrical resistance is R = V/I, where R is resistance, V is voltage, and I is current.",
            "For your Post-UTME preparation, I recommend focusing on past questions for at least 1 hour daily. Would you like me to provide some practice questions?",
            "The key topics for JAMB Chemistry this year include Stoichiometry, Periodic Table, Chemical Bonding, and Organic Chemistry. Which one would you like to study first?",
            "Based on your recent practice test results, I notice you're having difficulty with Algebraic Expressions. Let's work through some examples together."
          ];
          
          const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
          addMessageToChat(randomResponse, 'bot');
        }, 1000);
      }
      
      function addMessageToChat(text, sender) {
        const isUser = sender === 'user';
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex mb-4 ${isUser ? 'justify-end' : ''}`;
        
        messageDiv.innerHTML = `
          ${!isUser ? `
            <div class="bg-primary text-white p-2 rounded-full mr-2 flex-shrink-0">
              <i data-lucide="bot" class="h-5 w-5"></i>
            </div>
          ` : ''}
          
          <div class="max-w-[80%] p-3 rounded-lg ${
            isUser 
              ? 'bg-primary text-white rounded-br-none' 
              : 'bg-secondary text-foreground rounded-bl-none'
          }">
            <p>${text}</p>
            <p class="text-xs opacity-70 mt-1">
              ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </p>
          </div>
          
          ${isUser ? `
            <div class="bg-primary text-white p-2 rounded-full ml-2 flex-shrink-0">
              <i data-lucide="user" class="h-5 w-5"></i>
            </div>
          ` : ''}
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Initialize lucide icons for new elements
        lucide.createIcons({
          icons: {
            bot: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>`,
            user: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>`
          },
          attrs: {
            class: 'h-5 w-5'
          },
          root: messageDiv
        });
      }
    }
  }
  
  // Initialize dynamic sections
  function setupSectionContent() {
    // These functions will create the HTML for each section when needed
    createProfileSection();
    createLevelSection();
    createSubjectSection();
    createQuestionSection();
    createDashboardSection();
    createChatbotSection();
  }
  
  // Initialize the app
  function init() {
    // Setup lazily loaded sections
    setupSectionContent();
    
    // Show initial section (welcome)
    navigateTo(state.currentSection);
  }
  
  // Start the app
  init();
});
