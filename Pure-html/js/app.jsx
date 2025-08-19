// Main Application Controller
const App = {
  currentPage: "dashboard",

  // Initialize the application
  init() {
    this.setupEventListeners()
    this.navigateTo("dashboard")
    this.updateKPIs()
  },

  // Setup event listeners
  setupEventListeners() {
    // Sidebar toggle
    const sidebarToggle = document.getElementById("sidebarToggle")
    const mobileMenuToggle = document.getElementById("mobileMenuToggle")
    const sidebar = document.getElementById("sidebar")

    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed")
      })
    }

    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("mobile-open")
      })
    }

    // Navigation links
    document.addEventListener("click", (e) => {
      if (e.target.matches(".nav-link") || e.target.closest(".nav-link")) {
        e.preventDefault()
        const link = e.target.matches(".nav-link") ? e.target : e.target.closest(".nav-link")
        const page = link.getAttribute("data-page")
        if (page) {
          this.navigateTo(page)
        }
      }
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !e.target.matches(".mobile-menu-toggle")) {
        sidebar.classList.remove("mobile-open")
      }
    })

    // Handle window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        sidebar.classList.remove("mobile-open")
      }
    })
  },

  // Navigate to a specific page
  navigateTo(page) {
    // Update current page
    this.currentPage = page

    // Update active navigation
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active")
    })

    const activeLink = document.querySelector(`[data-page="${page}"]`)
    if (activeLink) {
      activeLink.classList.add("active")
    }

    // Update page title
    const pageTitle = document.getElementById("pageTitle")
    if (pageTitle) {
      pageTitle.textContent = this.getPageTitle(page)
    }

    // Load page content
    this.loadPageContent(page)

    // Update URL hash
    window.location.hash = page

    // Close mobile menu
    const sidebar = document.getElementById("sidebar")
    if (sidebar) {
      sidebar.classList.remove("mobile-open")
    }
  },

  // Get page title
  getPageTitle(page) {
    const titles = {
      dashboard: "Dashboard",
      properties: "Properties",
      "add-property": "Add Property",
      maintenance: "Maintenance",
      inquiries: "Inquiries & Bookings",
      payments: "Payment History",
      feedback: "Feedback",
      notifications: "Notifications",
      settings: "Settings",
    }
    return titles[page] || "Dashboard"
  },

  // Load page content
  loadPageContent(page) {
    const pageContent = document.getElementById("pageContent")
    if (!pageContent) return

    // Show loading state
    pageContent.innerHTML = window.Components.renderLoading(`Loading ${this.getPageTitle(page)}...`)

    // Simulate loading delay for better UX
    setTimeout(() => {
      try {
        const content = window.Pages[page] ? window.Pages[page]() : window.Pages.dashboard()
        pageContent.innerHTML = content
        pageContent.classList.add("fade-in")

        // Remove fade-in class after animation
        setTimeout(() => {
          pageContent.classList.remove("fade-in")
        }, 300)
      } catch (error) {
        console.error("Error loading page:", error)
        pageContent.innerHTML = window.Components.renderEmptyState(
          "Error Loading Page",
          "Something went wrong. Please try again.",
          "Go to Dashboard",
          "App.navigateTo('dashboard')",
        )
      }
    }, 300)
  },

  // Update KPIs (called periodically)
  updateKPIs() {
    // This could be called periodically to refresh data
    if (this.currentPage === "dashboard") {
      this.loadPageContent("dashboard")
    }
  },

  // Show notification
  showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-${this.getNotificationIcon(type)}"></i>
        <span>${message}</span>
      </div>
      <button class="notification-close" onclick="this.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    `

    // Add to page
    document.body.appendChild(notification)

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove()
      }
    }, 5000)
  },

  // Get notification icon
  getNotificationIcon(type) {
    const icons = {
      success: "check-circle",
      error: "exclamation-circle",
      warning: "exclamation-triangle",
      info: "info-circle",
    }
    return icons[type] || "info-circle"
  },

  // Handle browser back/forward
  handleHashChange() {
    const hash = window.location.hash.substring(1)
    if (hash && window.Pages[hash]) {
      this.navigateTo(hash)
    }
  },
}

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  App.init()

  // Handle browser navigation
  window.addEventListener("hashchange", () => {
    App.handleHashChange()
  })

  // Handle initial hash
  if (window.location.hash) {
    App.handleHashChange()
  }
})

// Add notification styles
const notificationStyles = `
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  min-width: 300px;
  z-index: 9999;
  animation: slideIn 0.3s ease-out;
}

.notification-success {
  border-left: 4px solid var(--success-color);
}

.notification-error {
  border-left: 4px solid var(--danger-color);
}

.notification-warning {
  border-left: 4px solid var(--warning-color);
}

.notification-info {
  border-left: 4px solid var(--primary-color);
}

.notification-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.notification-close {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  padding: var(--spacing-xs);
}

.notification-close:hover {
  color: var(--text-primary);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.space-y-8 > * + * {
  margin-top: 2rem;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-4 {
  gap: 1rem;
}

.w-full {
  width: 100%;
}

.font-medium {
  font-weight: 500;
}

.font-bold {
  font-weight: 700;
}

.text-sm {
  font-size: 0.875rem;
}

.text-xs {
  font-size: 0.75rem;
}

.text-lg {
  font-size: 1.125rem;
}

.text-xl {
  font-size: 1.25rem;
}

.text-2xl {
  font-size: 1.5rem;
}

.text-3xl {
  font-size: 1.875rem;
}

.text-secondary {
  color: var(--text-secondary);
}

.text-muted {
  color: var(--text-muted);
}

.text-primary {
  color: var(--primary-color);
}

.text-success {
  color: var(--success-color);
}

.bg-tertiary {
  background-color: var(--bg-tertiary);
}

.rounded {
  border-radius: var(--radius-md);
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.p-4 {
  padding: 1rem;
}

.property-image {
  overflow: hidden;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}
`

// Inject notification styles
const style = document.createElement("style")
style.textContent = notificationStyles
document.head.appendChild(style)
