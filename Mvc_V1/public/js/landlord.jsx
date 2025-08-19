// Landlord Dashboard JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Sidebar functionality
  const sidebar = document.getElementById("sidebar")
  const sidebarToggle = document.getElementById("sidebarToggle")
  const mobileMenuToggle = document.getElementById("mobileMenuToggle")

  // Toggle sidebar
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed")
    })
  }

  // Mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("mobile-open")
    })
  }

  // User dropdown functionality
  const userMenuToggle = document.querySelector(".user-menu-toggle")
  const userDropdown = document.querySelector(".user-dropdown")

  if (userMenuToggle && userDropdown) {
    userMenuToggle.addEventListener("click", (e) => {
      e.stopPropagation()
      userDropdown.classList.toggle("show")
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
      userDropdown.classList.remove("show")
    })
  }

  // Navigation active state
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Form validation helper
  window.validateForm = (formId) => {
    const form = document.getElementById(formId)
    if (!form) return false

    const requiredFields = form.querySelectorAll("[required]")
    let isValid = true

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        field.style.borderColor = "#dc3545"
        isValid = false
      } else {
        field.style.borderColor = "#ced4da"
      }
    })

    return isValid
  }

  // Search functionality
  window.initSearch = (searchInputSelector, itemsSelector) => {
    const searchInput = document.querySelector(searchInputSelector)
    const items = document.querySelectorAll(itemsSelector)

    if (searchInput && items.length > 0) {
      searchInput.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase()
        items.forEach((item) => {
          const text = item.textContent.toLowerCase()
          if (text.includes(searchTerm)) {
            item.style.display = "block"
          } else {
            item.style.display = "none"
          }
        })
      })
    }
  }

  // Filter functionality
  window.initFilter = (filterSelector, itemsSelector, badgeSelector) => {
    const filter = document.querySelector(filterSelector)
    const items = document.querySelectorAll(itemsSelector)

    if (filter && items.length > 0) {
      filter.addEventListener("change", function () {
        const selectedValue = this.value.toLowerCase()
        items.forEach((item) => {
          if (selectedValue === "") {
            item.style.display = "block"
          } else {
            const badge = item.querySelector(badgeSelector)
            if (badge) {
              const status = badge.textContent.toLowerCase()
              if (status.includes(selectedValue) || (selectedValue === "in-progress" && status.includes("progress"))) {
                item.style.display = "block"
              } else {
                item.style.display = "none"
              }
            }
          }
        })
      })
    }
  }

  // Notification system
  window.showNotification = (message, type = "info") => {
    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `

    document.body.appendChild(notification)

    // Auto remove after 5 seconds
    setTimeout(() => {
      notification.remove()
    }, 5000)

    // Manual close
    notification.querySelector(".notification-close").addEventListener("click", () => {
      notification.remove()
    })
  }

  // Modal functionality
  window.openModal = (modalId) => {
    const modal = document.getElementById(modalId)
    if (modal) {
      modal.style.display = "flex"
      document.body.style.overflow = "hidden"
    }
  }

  window.closeModal = (modalId) => {
    const modal = document.getElementById(modalId)
    if (modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  }

  // Close modal when clicking outside
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })

  // File upload preview
  window.initFileUpload = (inputSelector, previewSelector) => {
    const input = document.querySelector(inputSelector)
    const preview = document.querySelector(previewSelector)

    if (input && preview) {
      input.addEventListener("change", function () {
        preview.innerHTML = ""
        const files = Array.from(this.files)

        files.forEach((file) => {
          if (file.type.startsWith("image/")) {
            const reader = new FileReader()
            reader.onload = (e) => {
              const img = document.createElement("img")
              img.src = e.target.result
              img.style.maxWidth = "100px"
              img.style.maxHeight = "100px"
              img.style.margin = "5px"
              preview.appendChild(img)
            }
            reader.readAsDataURL(file)
          }
        })
      })
    }
  }

  // Initialize tooltips
  const tooltipElements = document.querySelectorAll("[data-tooltip]")
  tooltipElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      const tooltip = document.createElement("div")
      tooltip.className = "tooltip"
      tooltip.textContent = this.getAttribute("data-tooltip")
      document.body.appendChild(tooltip)

      const rect = this.getBoundingClientRect()
      tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px"
      tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + "px"
    })

    element.addEventListener("mouseleave", () => {
      const tooltip = document.querySelector(".tooltip")
      if (tooltip) {
        tooltip.remove()
      }
    })
  })
})
