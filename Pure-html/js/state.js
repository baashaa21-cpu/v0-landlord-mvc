// State Management System for Landlord Management App
class StateManager {
  constructor() {
    this.state = {
      properties: [],
      maintenanceRequests: [],
      inquiries: [],
      paymentHistory: [],
      feedback: [],
      notifications: [],
      settings: {
        theme: "light",
        notifications: {
          email: true,
          sms: false,
          push: true,
        },
        privacy: {
          profileVisible: true,
          contactVisible: false,
        },
        preferences: {
          currency: "USD",
          dateFormat: "MM/DD/YYYY",
          language: "English",
        },
      },
    }
    this.listeners = {}
    this.loadFromStorage()
  }

  // Load state from localStorage
  loadFromStorage() {
    try {
      const savedState = localStorage.getItem("landlordAppState")
      if (savedState) {
        const parsedState = JSON.parse(savedState)
        this.state = { ...this.state, ...parsedState }
      } else {
        // Initialize with sample data if no saved state
        this.initializeSampleData()
      }
    } catch (error) {
      console.error("Error loading state from storage:", error)
      this.initializeSampleData()
    }
  }

  // Save state to localStorage
  saveToStorage() {
    try {
      localStorage.setItem("landlordAppState", JSON.stringify(this.state))
    } catch (error) {
      console.error("Error saving state to storage:", error)
    }
  }

  // Initialize with sample data
  initializeSampleData() {
    this.state.properties = window.sampleData?.properties || []
    this.state.maintenanceRequests = window.sampleData?.maintenanceRequests || []
    this.state.inquiries = window.sampleData?.inquiries || []
    this.state.paymentHistory = window.sampleData?.paymentHistory || []
    this.state.feedback = window.sampleData?.feedback || []
    this.state.notifications = window.sampleData?.notifications || []
    this.saveToStorage()
  }

  // Subscribe to state changes
  subscribe(key, callback) {
    if (!this.listeners[key]) {
      this.listeners[key] = []
    }
    this.listeners[key].push(callback)
  }

  // Notify listeners of state changes
  notify(key) {
    if (this.listeners[key]) {
      this.listeners[key].forEach((callback) => callback(this.state[key]))
    }
  }

  // Generic getter
  get(key) {
    return this.state[key]
  }

  // Generic setter
  set(key, value) {
    this.state[key] = value
    this.saveToStorage()
    this.notify(key)
  }

  // Property management methods
  addProperty(property) {
    property.id = Date.now().toString()
    property.createdAt = new Date().toISOString()
    this.state.properties.push(property)
    this.saveToStorage()
    this.notify("properties")
  }

  updateProperty(id, updates) {
    const index = this.state.properties.findIndex((p) => p.id === id)
    if (index !== -1) {
      this.state.properties[index] = { ...this.state.properties[index], ...updates }
      this.saveToStorage()
      this.notify("properties")
    }
  }

  deleteProperty(id) {
    this.state.properties = this.state.properties.filter((p) => p.id !== id)
    this.saveToStorage()
    this.notify("properties")
  }

  // Maintenance request methods
  addMaintenanceRequest(request) {
    request.id = Date.now().toString()
    request.createdAt = new Date().toISOString()
    request.status = request.status || "pending"
    this.state.maintenanceRequests.push(request)
    this.saveToStorage()
    this.notify("maintenanceRequests")
  }

  updateMaintenanceRequest(id, updates) {
    const index = this.state.maintenanceRequests.findIndex((r) => r.id === id)
    if (index !== -1) {
      this.state.maintenanceRequests[index] = { ...this.state.maintenanceRequests[index], ...updates }
      this.saveToStorage()
      this.notify("maintenanceRequests")
    }
  }

  // Inquiry methods
  addInquiry(inquiry) {
    inquiry.id = Date.now().toString()
    inquiry.createdAt = new Date().toISOString()
    inquiry.status = inquiry.status || "new"
    this.state.inquiries.push(inquiry)
    this.saveToStorage()
    this.notify("inquiries")
  }

  updateInquiry(id, updates) {
    const index = this.state.inquiries.findIndex((i) => i.id === id)
    if (index !== -1) {
      this.state.inquiries[index] = { ...this.state.inquiries[index], ...updates }
      this.saveToStorage()
      this.notify("inquiries")
    }
  }

  // Payment methods
  addPayment(payment) {
    payment.id = Date.now().toString()
    payment.createdAt = new Date().toISOString()
    this.state.paymentHistory.push(payment)
    this.saveToStorage()
    this.notify("paymentHistory")
  }

  // Feedback methods
  addFeedback(feedback) {
    feedback.id = Date.now().toString()
    feedback.createdAt = new Date().toISOString()
    this.state.feedback.push(feedback)
    this.saveToStorage()
    this.notify("feedback")
  }

  // Notification methods
  addNotification(notification) {
    notification.id = Date.now().toString()
    notification.createdAt = new Date().toISOString()
    notification.read = false
    this.state.notifications.unshift(notification) // Add to beginning
    this.saveToStorage()
    this.notify("notifications")
  }

  markNotificationAsRead(id) {
    const notification = this.state.notifications.find((n) => n.id === id)
    if (notification) {
      notification.read = true
      this.saveToStorage()
      this.notify("notifications")
    }
  }

  markAllNotificationsAsRead() {
    this.state.notifications.forEach((n) => (n.read = true))
    this.saveToStorage()
    this.notify("notifications")
  }

  // Settings methods
  updateSettings(path, value) {
    const keys = path.split(".")
    let current = this.state.settings

    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {}
      }
      current = current[keys[i]]
    }

    current[keys[keys.length - 1]] = value
    this.saveToStorage()
    this.notify("settings")
  }

  // Analytics methods
  getAnalytics() {
    const properties = this.state.properties
    const maintenance = this.state.maintenanceRequests
    const inquiries = this.state.inquiries
    const payments = this.state.paymentHistory

    return {
      totalProperties: properties.length,
      occupiedProperties: properties.filter((p) => p.status === "occupied").length,
      totalRevenue: payments.reduce((sum, p) => sum + (p.amount || 0), 0),
      pendingMaintenance: maintenance.filter((m) => m.status === "pending").length,
      newInquiries: inquiries.filter((i) => i.status === "new").length,
      averageRent:
        properties.length > 0 ? properties.reduce((sum, p) => sum + (p.rent || 0), 0) / properties.length : 0,
    }
  }

  // Export data
  exportData() {
    return JSON.stringify(this.state, null, 2)
  }

  // Import data
  importData(jsonData) {
    try {
      const importedState = JSON.parse(jsonData)
      this.state = { ...this.state, ...importedState }
      this.saveToStorage()
      // Notify all listeners
      Object.keys(this.listeners).forEach((key) => this.notify(key))
      return true
    } catch (error) {
      console.error("Error importing data:", error)
      return false
    }
  }

  // Clear all data
  clearAllData() {
    localStorage.removeItem("landlordAppState")
    this.state = {
      properties: [],
      maintenanceRequests: [],
      inquiries: [],
      paymentHistory: [],
      feedback: [],
      notifications: [],
      settings: {
        theme: "light",
        notifications: { email: true, sms: false, push: true },
        privacy: { profileVisible: true, contactVisible: false },
        preferences: { currency: "USD", dateFormat: "MM/DD/YYYY", language: "English" },
      },
    }
    Object.keys(this.listeners).forEach((key) => this.notify(key))
  }
}

// Create global state manager instance
window.stateManager = new StateManager()
