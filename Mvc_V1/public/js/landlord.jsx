// Landlord Dashboard JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Sidebar toggle functionality
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

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        sidebar.classList.remove("mobile-open")
      }
    }
  })

  // Initialize page-specific functionality
  initializeDashboard()
  initializeProperties()
  initializeMaintenance()
  initializeInquiries()
  initializeFeedback()
  initializeNotifications()
})

// Dashboard functionality
function initializeDashboard() {
  // KPI card interactions
  document.querySelectorAll(".kpi-card").forEach((card) => {
    card.addEventListener("click", function () {
      const cardType = this.querySelector("h3").textContent.toLowerCase()
      handleKPIClick(cardType)
    })
  })

  // Recent activity interactions
  document.querySelectorAll(".activity-item").forEach((item) => {
    item.addEventListener("click", function () {
      const activityId = this.dataset.activityId
      showActivityDetails(activityId)
    })
  })
}

// Properties functionality
function initializeProperties() {
  // Property search
  const searchInput = document.querySelector(".property-search")
  if (searchInput) {
    searchInput.addEventListener(
      "input",
      debounce(function () {
        filterProperties(this.value)
      }, 300),
    )
  }

  // Property filters
  document.querySelectorAll(".property-filter").forEach((filter) => {
    filter.addEventListener("change", () => {
      applyPropertyFilters()
    })
  })

  // Property card actions
  document.querySelectorAll(".property-card").forEach((card) => {
    const editBtn = card.querySelector(".edit-property")
    const viewBtn = card.querySelector(".view-property")

    if (editBtn) {
      editBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        const propertyId = card.dataset.propertyId
        editProperty(propertyId)
      })
    }

    if (viewBtn) {
      viewBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        const propertyId = card.dataset.propertyId
        viewProperty(propertyId)
      })
    }
  })

  // Add property form validation
  const addPropertyForm = document.getElementById("addPropertyForm")
  if (addPropertyForm) {
    addPropertyForm.addEventListener("submit", validatePropertyForm)
  }

  // File upload handling
  const fileInputs = document.querySelectorAll('input[type="file"]')
  fileInputs.forEach((input) => {
    input.addEventListener("change", handleFileUpload)
  })
}

// Maintenance functionality
function initializeMaintenance() {
  // Maintenance request filters
  document.querySelectorAll(".maintenance-filter").forEach((filter) => {
    filter.addEventListener("change", () => {
      filterMaintenanceRequests()
    })
  })

  // Status update buttons
  document.querySelectorAll(".status-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const requestId = this.dataset.requestId
      const newStatus = this.dataset.status
      updateMaintenanceStatus(requestId, newStatus)
    })
  })

  // View maintenance details
  document.querySelectorAll(".view-maintenance").forEach((btn) => {
    btn.addEventListener("click", function () {
      const requestId = this.dataset.requestId
      showMaintenanceDetails(requestId)
    })
  })

  // Add quotation
  document.querySelectorAll(".add-quotation").forEach((btn) => {
    btn.addEventListener("click", function () {
      const requestId = this.dataset.requestId
      showQuotationModal(requestId)
    })
  })
}

// Inquiries functionality
function initializeInquiries() {
  // Inquiry filters
  document.querySelectorAll(".inquiry-filter").forEach((filter) => {
    filter.addEventListener("change", () => {
      filterInquiries()
    })
  })

  // Respond to inquiry
  document.querySelectorAll(".respond-inquiry").forEach((btn) => {
    btn.addEventListener("click", function () {
      const inquiryId = this.dataset.inquiryId
      showResponseModal(inquiryId)
    })
  })

  // Schedule viewing
  document.querySelectorAll(".schedule-viewing").forEach((btn) => {
    btn.addEventListener("click", function () {
      const inquiryId = this.dataset.inquiryId
      showScheduleModal(inquiryId)
    })
  })

  // Mark as contacted
  document.querySelectorAll(".mark-contacted").forEach((btn) => {
    btn.addEventListener("click", function () {
      const inquiryId = this.dataset.inquiryId
      markAsContacted(inquiryId)
    })
  })
}

// Feedback functionality
function initializeFeedback() {
  // Feedback filters
  document.querySelectorAll(".feedback-filter").forEach((filter) => {
    filter.addEventListener("change", () => {
      filterFeedback()
    })
  })

  // Respond to feedback
  document.querySelectorAll(".respond-feedback").forEach((btn) => {
    btn.addEventListener("click", function () {
      const feedbackId = this.dataset.feedbackId
      showFeedbackResponseModal(feedbackId)
    })
  })

  // Mark feedback as resolved
  document.querySelectorAll(".resolve-feedback").forEach((btn) => {
    btn.addEventListener("click", function () {
      const feedbackId = this.dataset.feedbackId
      resolveFeedback(feedbackId)
    })
  })
}

// Notifications functionality
function initializeNotifications() {
  // Mark notification as read
  document.querySelectorAll(".mark-read").forEach((btn) => {
    btn.addEventListener("click", function () {
      const notificationId = this.dataset.notificationId
      markNotificationAsRead(notificationId)
    })
  })

  // Delete notification
  document.querySelectorAll(".delete-notification").forEach((btn) => {
    btn.addEventListener("click", function () {
      const notificationId = this.dataset.notificationId
      deleteNotification(notificationId)
    })
  })

  // Notification filters
  document.querySelectorAll(".notification-filter").forEach((filter) => {
    filter.addEventListener("change", () => {
      filterNotifications()
    })
  })
}

// Event handlers
function handleKPIClick(cardType) {
  const URLROOT = "http://example.com" // Declare URLROOT here
  switch (cardType) {
    case "total properties":
      window.location.href = `${URLROOT}/landlord/properties`
      break
    case "active tenants":
      window.location.href = `${URLROOT}/landlord/tenants`
      break
    case "maintenance requests":
      window.location.href = `${URLROOT}/landlord/maintenance`
      break
    case "monthly revenue":
      window.location.href = `${URLROOT}/landlord/payment_history`
      break
  }
}

function filterProperties(searchTerm) {
  const properties = document.querySelectorAll(".property-card")
  properties.forEach((property) => {
    const title = property.querySelector(".property-title").textContent.toLowerCase()
    const address = property.querySelector(".property-address").textContent.toLowerCase()

    if (title.includes(searchTerm.toLowerCase()) || address.includes(searchTerm.toLowerCase())) {
      property.style.display = "block"
    } else {
      property.style.display = "none"
    }
  })
}

function applyPropertyFilters() {
  const statusFilter = document.querySelector("#statusFilter")?.value
  const typeFilter = document.querySelector("#typeFilter")?.value

  const properties = document.querySelectorAll(".property-card")
  properties.forEach((property) => {
    let show = true

    if (statusFilter && property.dataset.status !== statusFilter) {
      show = false
    }

    if (typeFilter && property.dataset.type !== typeFilter) {
      show = false
    }

    property.style.display = show ? "block" : "none"
  })
}

function validatePropertyForm(e) {
  const form = e.target
  const requiredFields = form.querySelectorAll("[required]")
  let isValid = true

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      field.classList.add("error")
      isValid = false
    } else {
      field.classList.remove("error")
    }
  })

  if (!isValid) {
    e.preventDefault()
    showNotification("Please fill in all required fields", "error")
  }
}

function handleFileUpload(e) {
  const file = e.target.files[0]
  if (file) {
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      showNotification("File size must be less than 5MB", "error")
      e.target.value = ""
      return
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "application/pdf"]
    if (!allowedTypes.includes(file.type)) {
      showNotification("Invalid file type. Please upload images or PDF files only", "error")
      e.target.value = ""
      return
    }

    showNotification("File uploaded successfully", "success")
  }
}

function updateMaintenanceStatus(requestId, newStatus) {
  if (confirm(`Are you sure you want to update the status to ${newStatus}?`)) {
    // Update the status badge
    const statusBadge = document.querySelector(`[data-request-id="${requestId}"] .status-badge`)
    if (statusBadge) {
      statusBadge.textContent = newStatus
      statusBadge.className = `status-badge ${newStatus.toLowerCase().replace(" ", "-")}`
    }

    showNotification(`Status updated to ${newStatus}`, "success")
  }
}

function showMaintenanceDetails(requestId) {
  // Create and show modal with maintenance details
  const modal = createModal(
    "Maintenance Request Details",
    `
    <div class="maintenance-details">
      <p><strong>Request ID:</strong> ${requestId}</p>
      <p><strong>Property:</strong> Sample Property</p>
      <p><strong>Issue:</strong> Plumbing repair needed</p>
      <p><strong>Priority:</strong> High</p>
      <p><strong>Submitted:</strong> 2024-01-15</p>
      <p><strong>Description:</strong> Kitchen sink is leaking and needs immediate attention.</p>
    </div>
  `,
  )

  showModal(modal)
}

function showQuotationModal(requestId) {
  const modal = createModal(
    "Add Quotation",
    `
    <form class="quotation-form">
      <div class="form-group">
        <label>Service Provider</label>
        <input type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label>Amount</label>
        <input type="number" class="form-control" step="0.01" required>
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea class="form-control" rows="3" required></textarea>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Add Quotation</button>
        <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      </div>
    </form>
  `,
  )

  showModal(modal)
}

function markAsContacted(inquiryId) {
  const inquiryRow = document.querySelector(`[data-inquiry-id="${inquiryId}"]`)
  if (inquiryRow) {
    const statusBadge = inquiryRow.querySelector(".status-badge")
    statusBadge.textContent = "Contacted"
    statusBadge.className = "status-badge contacted"
  }

  showNotification("Inquiry marked as contacted", "success")
}

function resolveFeedback(feedbackId) {
  if (confirm("Are you sure you want to mark this feedback as resolved?")) {
    const feedbackRow = document.querySelector(`[data-feedback-id="${feedbackId}"]`)
    if (feedbackRow) {
      const statusBadge = feedbackRow.querySelector(".status-badge")
      statusBadge.textContent = "Resolved"
      statusBadge.className = "status-badge resolved"
    }

    showNotification("Feedback marked as resolved", "success")
  }
}

function markNotificationAsRead(notificationId) {
  const notification = document.querySelector(`[data-notification-id="${notificationId}"]`)
  if (notification) {
    notification.classList.remove("unread")
    notification.classList.add("read")
  }

  showNotification("Notification marked as read", "success")
}

function deleteNotification(notificationId) {
  if (confirm("Are you sure you want to delete this notification?")) {
    const notification = document.querySelector(`[data-notification-id="${notificationId}"]`)
    if (notification) {
      notification.remove()
    }

    showNotification("Notification deleted", "success")
  }
}

// Modal functionality
function createModal(title, content) {
  return `
    <div class="modal-overlay" onclick="closeModal()">
      <div class="modal-content" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3>${title}</h3>
          <button class="modal-close" onclick="closeModal()">&times;</button>
        </div>
        <div class="modal-body">
          ${content}
        </div>
      </div>
    </div>
  `
}

function showModal(modalHTML) {
  const modalContainer = document.createElement("div")
  modalContainer.innerHTML = modalHTML
  document.body.appendChild(modalContainer)
}

function closeModal() {
  const modals = document.querySelectorAll(".modal-overlay")
  modals.forEach((modal) => modal.remove())
}

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "1rem 1.5rem",
    borderRadius: "0.5rem",
    color: "white",
    fontWeight: "500",
    zIndex: "9999",
    opacity: "0",
    transform: "translateY(-20px)",
    transition: "all 0.3s ease",
  })

  const colors = {
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",
  }
  notification.style.backgroundColor = colors[type] || colors.info

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.opacity = "1"
    notification.style.transform = "translateY(0)"
  }, 100)

  setTimeout(() => {
    notification.style.opacity = "0"
    notification.style.transform = "translateY(-20px)"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 3000)
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Filter functions
function filterMaintenanceRequests() {
  const statusFilter = document.querySelector("#maintenanceStatusFilter")?.value
  const priorityFilter = document.querySelector("#maintenancePriorityFilter")?.value

  const requests = document.querySelectorAll(".maintenance-row")
  requests.forEach((request) => {
    let show = true

    if (statusFilter && request.dataset.status !== statusFilter) {
      show = false
    }

    if (priorityFilter && request.dataset.priority !== priorityFilter) {
      show = false
    }

    request.style.display = show ? "table-row" : "none"
  })
}

function filterInquiries() {
  const statusFilter = document.querySelector("#inquiryStatusFilter")?.value
  const typeFilter = document.querySelector("#inquiryTypeFilter")?.value

  const inquiries = document.querySelectorAll(".inquiry-row")
  inquiries.forEach((inquiry) => {
    let show = true

    if (statusFilter && inquiry.dataset.status !== statusFilter) {
      show = false
    }

    if (typeFilter && inquiry.dataset.type !== typeFilter) {
      show = false
    }

    inquiry.style.display = show ? "table-row" : "none"
  })
}

function filterFeedback() {
  const ratingFilter = document.querySelector("#feedbackRatingFilter")?.value
  const statusFilter = document.querySelector("#feedbackStatusFilter")?.value

  const feedbacks = document.querySelectorAll(".feedback-row")
  feedbacks.forEach((feedback) => {
    let show = true

    if (ratingFilter && feedback.dataset.rating !== ratingFilter) {
      show = false
    }

    if (statusFilter && feedback.dataset.status !== statusFilter) {
      show = false
    }

    feedback.style.display = show ? "table-row" : "none"
  })
}

function filterNotifications() {
  const typeFilter = document.querySelector("#notificationTypeFilter")?.value
  const statusFilter = document.querySelector("#notificationStatusFilter")?.value

  const notifications = document.querySelectorAll(".notification-row")
  notifications.forEach((notification) => {
    let show = true

    if (typeFilter && notification.dataset.type !== typeFilter) {
      show = false
    }

    if (statusFilter && notification.dataset.status !== statusFilter) {
      show = false
    }

    notification.style.display = show ? "table-row" : "none"
  })
}

// Declare functions here
function showActivityDetails(activityId) {
  // Implementation for showActivityDetails
}

function editProperty(propertyId) {
  // Implementation for editProperty
}

function viewProperty(propertyId) {
  // Implementation for viewProperty
}

function showResponseModal(inquiryId) {
  // Implementation for showResponseModal
}

function showScheduleModal(inquiryId) {
  // Implementation for showScheduleModal
}

function showFeedbackResponseModal(feedbackId) {
  // Implementation for showFeedbackResponseModal
}
