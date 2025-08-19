function exportFeedback() {
  console.log("[v0] Exporting feedback report")
  // Implementation for exporting feedback data
  alert("Feedback report exported successfully!")
}

function viewFeedbackDetails(feedbackId) {
  console.log("[v0] Viewing feedback details for:", feedbackId)
  // Implementation for viewing detailed feedback
  alert("Opening feedback details for " + feedbackId)
}

function respondToFeedback(feedbackId) {
  console.log("[v0] Responding to feedback:", feedbackId)
  // Implementation for responding to feedback
  const response = prompt("Enter your response:")
  if (response) {
    alert("Response sent successfully!")
    // Update UI to show responded status
    const feedbackItem = document.querySelector(`[onclick*="${feedbackId}"]`).closest(".feedback-item")
    const statusBadge = feedbackItem.querySelector(".status-badge")
    statusBadge.textContent = "Responded"
    statusBadge.className = "status-badge status-completed"
  }
}

function createNotification() {
  console.log("[v0] Creating new notification")
  // Implementation for creating notifications
  alert("Opening notification composer...")
}

function notificationSettings() {
  console.log("[v0] Opening notification settings")
  // Implementation for notification settings
  alert("Opening notification settings...")
}

function sendRentReminder() {
  console.log("[v0] Sending rent reminder")
  if (confirm("Send rent reminder to all tenants?")) {
    alert("Rent reminder sent successfully!")
    updateNotificationStats()
  }
}

function sendMaintenanceUpdate() {
  console.log("[v0] Sending maintenance update")
  const message = prompt("Enter maintenance update message:")
  if (message) {
    alert("Maintenance update sent successfully!")
    updateNotificationStats()
  }
}

function sendAnnouncement() {
  console.log("[v0] Sending announcement")
  const announcement = prompt("Enter announcement message:")
  if (announcement) {
    alert("Announcement sent successfully!")
    updateNotificationStats()
  }
}

function sendEmergencyAlert() {
  console.log("[v0] Sending emergency alert")
  const alert_msg = prompt("Enter emergency alert message:")
  if (alert_msg && confirm("This will send an emergency alert to all tenants. Continue?")) {
    alert("Emergency alert sent successfully!")
    updateNotificationStats()
  }
}

function viewNotificationDetails(notificationId) {
  console.log("[v0] Viewing notification details:", notificationId)
  alert("Opening notification details for " + notificationId)
}

function resendNotification(notificationId) {
  console.log("[v0] Resending notification:", notificationId)
  if (confirm("Resend this notification?")) {
    alert("Notification resent successfully!")
    updateNotificationStats()
  }
}

function updateNotificationStats() {
  // Update notification statistics
  const totalElement = document.getElementById("totalNotifications")
  const deliveredElement = document.getElementById("deliveredNotifications")

  if (totalElement) {
    const currentTotal = Number.parseInt(totalElement.textContent)
    totalElement.textContent = currentTotal + 1
  }

  if (deliveredElement) {
    const currentDelivered = Number.parseInt(deliveredElement.textContent)
    deliveredElement.textContent = currentDelivered + 1
  }
}

function filterFeedback() {
  const searchTerm = document.getElementById("feedbackSearch")?.value.toLowerCase() || ""
  const propertyFilter = document.getElementById("propertyFilter")?.value || ""
  const ratingFilter = document.getElementById("ratingFilter")?.value || ""
  const statusFilter = document.getElementById("statusFilter")?.value || ""

  const feedbackItems = document.querySelectorAll(".feedback-item")

  feedbackItems.forEach((item) => {
    const text = item.textContent.toLowerCase()
    const property = item.dataset.property || ""
    const rating = item.dataset.rating || ""
    const status = item.dataset.status || ""

    const matchesSearch = text.includes(searchTerm)
    const matchesProperty = !propertyFilter || property === propertyFilter
    const matchesRating = !ratingFilter || rating === ratingFilter
    const matchesStatus = !statusFilter || status === statusFilter

    if (matchesSearch && matchesProperty && matchesRating && matchesStatus) {
      item.style.display = "block"
    } else {
      item.style.display = "none"
    }
  })
}

function filterNotifications() {
  const searchTerm = document.getElementById("notificationSearch")?.value.toLowerCase() || ""
  const typeFilter = document.getElementById("typeFilter")?.value || ""
  const statusFilter = document.getElementById("statusFilter")?.value || ""

  const notificationItems = document.querySelectorAll(".notification-item")

  notificationItems.forEach((item) => {
    const text = item.textContent.toLowerCase()
    const type = item.dataset.type || ""
    const status = item.dataset.status || ""

    const matchesSearch = text.includes(searchTerm)
    const matchesType = !typeFilter || type === typeFilter
    const matchesStatus = !statusFilter || status === statusFilter

    if (matchesSearch && matchesType && matchesStatus) {
      item.style.display = "block"
    } else {
      item.style.display = "none"
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  // Feedback page filters
  const feedbackSearch = document.getElementById("feedbackSearch")
  const propertyFilter = document.getElementById("propertyFilter")
  const ratingFilter = document.getElementById("ratingFilter")
  const feedbackStatusFilter = document.getElementById("statusFilter")

  if (feedbackSearch) {
    feedbackSearch.addEventListener("input", filterFeedback)
    propertyFilter?.addEventListener("change", filterFeedback)
    ratingFilter?.addEventListener("change", filterFeedback)
    feedbackStatusFilter?.addEventListener("change", filterFeedback)
  }

  // Notification page filters
  const notificationSearch = document.getElementById("notificationSearch")
  const typeFilter = document.getElementById("typeFilter")
  const notificationStatusFilter = document.getElementById("statusFilter")

  if (notificationSearch) {
    notificationSearch.addEventListener("input", filterNotifications)
    typeFilter?.addEventListener("change", filterNotifications)
    notificationStatusFilter?.addEventListener("change", filterNotifications)
  }
})
