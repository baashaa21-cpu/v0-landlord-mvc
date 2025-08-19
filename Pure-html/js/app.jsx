class LandlordApp {
  constructor() {
    this.currentPage = "dashboard"
    this.sidebarOpen = false
    this.init()
  }

  init() {
    this.setupEventListeners()
    this.setupStateSubscriptions()
    this.loadPage("dashboard")
    this.updateNotificationBadge()
  }

  setupStateSubscriptions() {
    // Subscribe to notifications for badge updates
    window.stateManager.subscribe("notifications", () => {
      this.updateNotificationBadge()
    })

    // Subscribe to other state changes for real-time updates
    window.stateManager.subscribe("properties", () => {
      if (this.currentPage === "properties" || this.currentPage === "dashboard") {
        this.loadPage(this.currentPage)
      }
    })

    window.stateManager.subscribe("maintenanceRequests", () => {
      if (this.currentPage === "maintenance" || this.currentPage === "dashboard") {
        this.loadPage(this.currentPage)
      }
    })

    window.stateManager.subscribe("inquiries", () => {
      if (this.currentPage === "inquiries" || this.currentPage === "dashboard") {
        this.loadPage(this.currentPage)
      }
    })
  }

  updateNotificationBadge() {
    const notifications = window.stateManager.get("notifications") || []
    const unreadCount = notifications.filter((n) => !n.read).length
    const badge = document.querySelector('[data-page="notifications"] .notification-badge')

    if (badge) {
      if (unreadCount > 0) {
        badge.textContent = unreadCount > 99 ? "99+" : unreadCount.toString()
        badge.style.display = "flex"
      } else {
        badge.style.display = "none"
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    window.app = new LandlordApp()
    console.log("Landlord Management App initialized successfully")
  } catch (error) {
    console.error("Error initializing app:", error)
    document.body.innerHTML = `
            <div style="padding: 20px; text-align: center; color: #ef4444;">
                <h2>Application Error</h2>
                <p>There was an error loading the application. Please refresh the page.</p>
                <button onclick="location.reload()" style="padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Refresh Page
                </button>
            </div>
        `
  }
})
