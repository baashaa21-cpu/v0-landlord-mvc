const Pages = {
  payments() {
    const payments = AppData.payments || []

    const totalIncome = payments.filter((p) => p.amount > 0).reduce((sum, p) => sum + p.amount, 0)
    const totalExpenses = Math.abs(payments.filter((p) => p.amount < 0).reduce((sum, p) => sum + p.amount, 0))
    const netIncome = totalIncome - totalExpenses

    const summaryCards = `
      <div class="grid grid-cols-3 mb-6">
        <div class="card">
          <div class="card-content p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-muted">Total Income</p>
                <p class="text-2xl font-bold text-success">$${totalIncome.toLocaleString()}</p>
                <p class="text-xs text-muted flex items-center gap-1 mt-1">
                  <i class="fas fa-arrow-up"></i>
                  +12.4% from last month
                </p>
              </div>
              <i class="fas fa-dollar-sign text-success" style="font-size: 2rem;"></i>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-muted">Total Expenses</p>
                <p class="text-2xl font-bold text-danger">$${totalExpenses.toLocaleString()}</p>
                <p class="text-xs text-muted flex items-center gap-1 mt-1">
                  <i class="fas fa-arrow-down"></i>
                  -8.2% from last month
                </p>
              </div>
              <i class="fas fa-arrow-down text-danger" style="font-size: 2rem;"></i>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-muted">Net Income</p>
                <p class="text-2xl font-bold text-primary">$${netIncome.toLocaleString()}</p>
                <p class="text-xs text-muted flex items-center gap-1 mt-1">
                  <i class="fas fa-arrow-up"></i>
                  +15.3% from last month
                </p>
              </div>
              <i class="fas fa-chart-line text-primary" style="font-size: 2rem;"></i>
            </div>
          </div>
        </div>
      </div>
    `

    const filtersSection = `
      <div class="card mb-6">
        <div class="card-content">
          <div class="flex gap-4 items-center">
            <div class="relative flex-1">
              <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-muted"></i>
              <input type="text" class="form-input pl-10" placeholder="Search payments..." id="paymentSearch" oninput="PaymentManager.handleSearch()">
            </div>
            <select class="form-input form-select" id="typeFilter" onchange="PaymentManager.setTypeFilter(this.value)">
              <option value="all">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expenses</option>
            </select>
            <select class="form-input form-select" id="propertyFilter" onchange="PaymentManager.setPropertyFilter(this.value)">
              <option value="all">All Properties</option>
              <option value="Sunset Apartments">Sunset Apartments</option>
              <option value="Oak Street House">Oak Street House</option>
              <option value="City View Condos">City View Condos</option>
            </select>
          </div>
        </div>
      </div>
    `

    const paymentsList = payments
      .map((payment) => {
        const isIncome = payment.amount > 0
        const iconClass = isIncome ? "fa-arrow-up text-success" : "fa-arrow-down text-danger"
        const amountClass = isIncome ? "text-success" : "text-danger"

        return `
        <div class="card payment-item" data-type="${isIncome ? "income" : "expense"}" data-property="${payment.property}">
          <div class="card-content">
            <div class="flex items-center justify-between p-4">
              <div class="flex items-center gap-4">
                <div class="payment-icon ${isIncome ? "bg-success" : "bg-danger"}">
                  <i class="fas ${iconClass}"></i>
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <h3 class="font-medium">${payment.id}</h3>
                    ${Components.renderStatusBadge(payment.status, payment.status.charAt(0).toUpperCase() + payment.status.slice(1))}
                  </div>
                  <p class="text-sm text-muted">${payment.type}</p>
                  <p class="text-sm text-muted flex items-center gap-1">
                    <i class="fas fa-building"></i>
                    ${payment.property}
                    ${payment.tenant ? ` • ${payment.tenant}` : ""}
                    ${payment.vendor ? ` • ${payment.vendor}` : ""}
                  </p>
                  <p class="text-xs text-muted">${payment.description}</p>
                </div>
              </div>
              
              <div class="text-right">
                <p class="text-lg font-bold ${amountClass}">
                  ${isIncome ? "+" : ""}$${Math.abs(payment.amount).toLocaleString()}
                </p>
                <p class="text-sm text-muted flex items-center gap-1">
                  <i class="fas fa-calendar"></i>
                  ${payment.date}
                </p>
                <p class="text-xs text-muted">${payment.method}</p>
              </div>
            </div>
          </div>
        </div>
      `
      })
      .join("")

    const monthlyBreakdown = `
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Monthly Breakdown</h3>
          <p class="card-description">Income and expense summary by month</p>
        </div>
        <div class="card-content">
          <div class="grid grid-cols-2">
            <div class="space-y-2">
              <h4 class="font-medium">January 2024</h4>
              <div class="space-y-1">
                <div class="flex justify-between text-sm">
                  <span class="text-muted">Rent Income:</span>
                  <span class="text-success font-medium">$8,575</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-muted">Maintenance Costs:</span>
                  <span class="text-danger font-medium">$575</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-muted">Other Income:</span>
                  <span class="text-success font-medium">$75</span>
                </div>
                <hr class="my-2">
                <div class="flex justify-between font-medium">
                  <span>Net Income:</span>
                  <span class="text-primary">$8,075</span>
                </div>
              </div>
            </div>
            <div class="space-y-2">
              <h4 class="font-medium">December 2023</h4>
              <div class="space-y-1">
                <div class="flex justify-between text-sm">
                  <span class="text-muted">Rent Income:</span>
                  <span class="text-success font-medium">$7,800</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-muted">Maintenance Costs:</span>
                  <span class="text-danger font-medium">$825</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-muted">Other Income:</span>
                  <span class="text-success font-medium">$0</span>
                </div>
                <hr class="my-2">
                <div class="flex justify-between font-medium">
                  <span>Net Income:</span>
                  <span class="text-primary">$6,975</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    return `
      <div class="space-y-6">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-3xl font-bold mb-2">Payment History</h1>
            <p class="text-secondary">Track all rental income and property expenses</p>
          </div>
          <button class="btn btn-primary" onclick="PaymentManager.exportReport()">
            <i class="fas fa-download"></i>
            Export Report
          </button>
        </div>

        ${summaryCards}
        ${filtersSection}
        
        <div class="payments-list" id="paymentsList">
          ${paymentsList}
        </div>
        
        ${monthlyBreakdown}
      </div>
    `
  },

  feedback() {
    const completedLeases = AppData.completedLeases || [
      {
        id: 1,
        tenant: "Robert Martinez",
        property: "Sunset Apartments",
        leaseEnd: "2024-01-15",
        duration: "12 months",
        finalRent: 2500,
        hasExistingFeedback: false,
      },
      {
        id: 2,
        tenant: "Jessica Wong",
        property: "Downtown Loft",
        leaseEnd: "2023-12-31",
        duration: "24 months",
        finalRent: 1800,
        hasExistingFeedback: true,
        existingRating: 5,
        existingComment:
          "Excellent tenant. Always paid on time, kept the property in pristine condition, and was very communicative about any issues.",
      },
    ]

    const instructionsCard = `
      <div class="card" style="border-color: var(--primary-color); background-color: rgba(37, 99, 235, 0.05);">
        <div class="card-content">
          <div class="flex items-start gap-3">
            <i class="fas fa-comments text-primary" style="font-size: 1.5rem; margin-top: 0.25rem;"></i>
            <div>
              <h3 class="font-medium mb-2">Why provide tenant feedback?</h3>
              <ul class="text-sm text-muted space-y-1">
                <li>• Help other landlords make informed decisions</li>
                <li>• Build a community of responsible rental practices</li>
                <li>• Recognize good tenants and flag problematic ones</li>
                <li>• Your feedback remains confidential to verified landlords only</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `

    const leasesList = completedLeases
      .map((lease) => {
        const feedbackForm = !lease.hasExistingFeedback
          ? `
        <div class="feedback-form" id="feedbackForm${lease.id}" style="display: none;">
          <div class="mt-6 pt-6 border-t border-border space-y-4">
            <div>
              <h4 class="font-medium mb-3">Rate this tenant:</h4>
              <div class="flex items-center gap-2">
                ${[1, 2, 3, 4, 5]
                  .map(
                    (star) => `
                  <button class="star-rating" data-rating="${star}" data-tenant="${lease.id}" onclick="FeedbackManager.setRating(${lease.id}, ${star})">
                    <i class="fas fa-star star-icon" style="font-size: 2rem; color: var(--text-muted);"></i>
                  </button>
                `,
                  )
                  .join("")}
                <span class="rating-text ml-3 font-medium" id="ratingText${lease.id}"></span>
              </div>
            </div>

            <div>
              <h4 class="font-medium mb-2">Additional Comments:</h4>
              <textarea class="form-input form-textarea" id="comment${lease.id}" placeholder="Share your experience with this tenant. Consider mentioning payment history, property care, communication, and any notable incidents..." rows="4"></textarea>
            </div>

            <div class="flex gap-2 justify-end">
              <button class="btn btn-outline" onclick="FeedbackManager.cancelFeedback(${lease.id})">Cancel</button>
              <button class="btn btn-primary" onclick="FeedbackManager.submitFeedback(${lease.id})">Submit Feedback</button>
            </div>
          </div>
        </div>
      `
          : ""

        const existingFeedback = lease.hasExistingFeedback
          ? `
        <div class="existing-feedback mt-4">
          <div class="flex items-center gap-1 mb-2">
            ${[1, 2, 3, 4, 5]
              .map(
                (star) => `
              <i class="fas fa-star" style="color: ${star <= lease.existingRating ? "var(--warning-color)" : "var(--text-muted)"}; font-size: 1rem;"></i>
            `,
              )
              .join("")}
            <span class="ml-2 text-sm font-medium">${FeedbackManager.getRatingText(lease.existingRating)}</span>
          </div>
          <div class="feedback-comment">
            <p class="text-sm italic">"${lease.existingComment}"</p>
          </div>
        </div>
      `
          : ""

        return `
        <div class="card">
          <div class="card-content">
            <div class="flex justify-between items-start mb-4">
              <div class="flex items-start gap-4">
                <div class="tenant-avatar">
                  <i class="fas fa-user"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold">${lease.tenant}</h3>
                  <p class="text-muted flex items-center gap-1">
                    <i class="fas fa-building"></i>
                    ${lease.property}
                  </p>
                  <div class="flex gap-4 text-sm text-muted mt-2">
                    <span class="flex items-center gap-1">
                      <i class="fas fa-calendar"></i>
                      Lease ended: ${lease.leaseEnd}
                    </span>
                    <span>Duration: ${lease.duration}</span>
                    <span>Final rent: $${lease.finalRent}/month</span>
                  </div>
                </div>
              </div>

              ${
                lease.hasExistingFeedback
                  ? `
                <div class="text-right">
                  <p class="text-xs text-muted">Feedback submitted</p>
                </div>
              `
                  : `
                <button class="btn btn-outline" onclick="FeedbackManager.toggleFeedback(${lease.id})">
                  Add Feedback
                </button>
              `
              }
            </div>

            ${existingFeedback}
            ${feedbackForm}
          </div>
        </div>
      `
      })
      .join("")

    const summaryCard = `
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Feedback Summary</h3>
          <p class="card-description">Your tenant feedback activity</p>
        </div>
        <div class="card-content">
          <div class="grid grid-cols-3 text-center">
            <div>
              <p class="text-2xl font-bold">${completedLeases.length}</p>
              <p class="text-sm text-muted">Completed Leases</p>
            </div>
            <div>
              <p class="text-2xl font-bold text-success">${completedLeases.filter((l) => l.hasExistingFeedback).length}</p>
              <p class="text-sm text-muted">Feedback Given</p>
            </div>
            <div>
              <p class="text-2xl font-bold text-warning">${completedLeases.filter((l) => !l.hasExistingFeedback).length}</p>
              <p class="text-sm text-muted">Pending Feedback</p>
            </div>
          </div>
        </div>
      </div>
    `

    return `
      <div class="space-y-6">
        <div>
          <h1 class="text-3xl font-bold mb-2">Tenant Feedback</h1>
          <p class="text-secondary">Provide feedback for tenants with completed leases</p>
        </div>

        ${instructionsCard}
        
        <div class="space-y-4">
          ${leasesList}
        </div>
        
        ${summaryCard}
      </div>
    `
  },

  notifications() {
    const notifications = AppData.notifications || []
    const unreadCount = notifications.filter((n) => !n.read).length

    const summaryCards = `
      <div class="grid grid-cols-4 mb-6">
        <div class="card">
          <div class="card-content text-center p-4">
            <div class="flex items-center justify-center gap-2 mb-2">
              <i class="fas fa-comments text-primary"></i>
              <div class="stat-value">${notifications.filter((n) => n.type === "inquiry").length}</div>
            </div>
            <div class="stat-label">Inquiries</div>
          </div>
        </div>
        <div class="card">
          <div class="card-content text-center p-4">
            <div class="flex items-center justify-center gap-2 mb-2">
              <i class="fas fa-wrench text-warning"></i>
              <div class="stat-value">${notifications.filter((n) => n.type === "maintenance").length}</div>
            </div>
            <div class="stat-label">Maintenance</div>
          </div>
        </div>
        <div class="card">
          <div class="card-content text-center p-4">
            <div class="flex items-center justify-center gap-2 mb-2">
              <i class="fas fa-dollar-sign text-success"></i>
              <div class="stat-value">${notifications.filter((n) => n.type === "payment").length}</div>
            </div>
            <div class="stat-label">Payments</div>
          </div>
        </div>
        <div class="card">
          <div class="card-content text-center p-4">
            <div class="flex items-center justify-center gap-2 mb-2">
              <i class="fas fa-exclamation-triangle text-danger"></i>
              <div class="stat-value">${notifications.filter((n) => n.type === "alert").length}</div>
            </div>
            <div class="stat-label">Alerts</div>
          </div>
        </div>
      </div>
    `

    const notificationsList = notifications
      .map((notification) => {
        const iconClass = NotificationManager.getIconClass(notification.type)
        const colorClass = NotificationManager.getColorClass(notification.type)
        const priorityBadge = NotificationManager.getPriorityBadge(notification.priority)

        return `
        <div class="card notification-item ${!notification.read ? "unread" : ""}" data-id="${notification.id}">
          <div class="card-content">
            <div class="flex items-start gap-4">
              <div class="notification-icon ${colorClass}">
                <i class="fas fa-${iconClass}"></i>
              </div>
              
              <div class="flex-1 space-y-1">
                <div class="flex items-center gap-2 mb-1">
                  <h3 class="font-medium ${!notification.read ? "text-primary" : "text-muted"}">${notification.title}</h3>
                  ${priorityBadge}
                  ${!notification.read ? '<div class="unread-dot"></div>' : ""}
                </div>
                <p class="text-sm ${!notification.read ? "" : "text-muted"}">${notification.message}</p>
                <div class="flex items-center justify-between mt-2">
                  <p class="text-xs text-muted flex items-center gap-1">
                    <i class="fas fa-clock"></i>
                    ${notification.date}
                  </p>
                  <div class="flex gap-2">
                    ${
                      !notification.read
                        ? `
                      <button class="btn btn-ghost btn-sm" onclick="NotificationManager.markAsRead(${notification.id})">
                        Mark as Read
                      </button>
                    `
                        : ""
                    }
                    <button class="btn btn-ghost btn-sm" onclick="NotificationManager.viewDetails(${notification.id})">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
      })
      .join("")

    return `
      <div class="space-y-6">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-3xl font-bold mb-2 flex items-center gap-2">
              <i class="fas fa-bell text-primary"></i>
              Notifications
              ${unreadCount > 0 ? `<span class="notification-badge">${unreadCount} new</span>` : ""}
            </h1>
            <p class="text-secondary">Stay updated with important property management alerts</p>
          </div>
          <div class="flex gap-2">
            <button class="btn btn-outline btn-sm" onclick="NotificationManager.markAllRead()">Mark All Read</button>
            <button class="btn btn-outline btn-sm" onclick="NotificationManager.openSettings()">Settings</button>
          </div>
        </div>

        ${summaryCards}
        
        <div class="notifications-list space-y-3">
          ${notificationsList}
        </div>

        <div class="text-center">
          <button class="btn btn-outline" onclick="NotificationManager.loadMore()">Load More Notifications</button>
        </div>
      </div>
    `
  },

  settings() {
    return `
      <div class="space-y-6">
        <div>
          <h1 class="text-3xl font-bold mb-2">Settings</h1>
          <p class="text-secondary">Manage your account preferences and system configuration</p>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <div class="lg:col-span-2 space-y-6">
            <!-- Profile Settings -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-user"></i>
                  Profile Information
                </h3>
                <p class="card-description">Update your personal information and contact details</p>
              </div>
              <div class="card-content">
                <form onsubmit="SettingsManager.saveProfile(event)">
                  <div class="grid grid-cols-2 mb-4">
                    <div class="form-group">
                      <label class="form-label" for="firstName">First Name</label>
                      <input class="form-input" id="firstName" value="John">
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="lastName">Last Name</label>
                      <input class="form-input" id="lastName" value="Doe">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="email">Email Address</label>
                    <input class="form-input" id="email" type="email" value="john.doe@email.com">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="phone">Phone Number</label>
                    <input class="form-input" id="phone" value="+1 (555) 123-4567">
                  </div>
                  <button type="submit" class="btn btn-primary">Save Changes</button>
                </form>
              </div>
            </div>

            <!-- Notification Settings -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-bell"></i>
                  Notifications
                </h3>
                <p class="card-description">Configure how you receive updates and alerts</p>
              </div>
              <div class="card-content">
                <div class="space-y-4">
                  <div class="setting-item">
                    <div>
                      <h4 class="font-medium">Email Notifications</h4>
                      <p class="text-sm text-muted">Receive notifications via email</p>
                    </div>
                    <label class="switch">
                      <input type="checkbox" checked onchange="SettingsManager.toggleSetting('emailNotifications', this.checked)">
                      <span class="slider"></span>
                    </label>
                  </div>
                  <hr>
                  <div class="setting-item">
                    <div>
                      <h4 class="font-medium">SMS Notifications</h4>
                      <p class="text-sm text-muted">Receive urgent alerts via SMS</p>
                    </div>
                    <label class="switch">
                      <input type="checkbox" onchange="SettingsManager.toggleSetting('smsNotifications', this.checked)">
                      <span class="slider"></span>
                    </label>
                  </div>
                  <hr>
                  <div class="setting-item">
                    <div>
                      <h4 class="font-medium">Booking Inquiries</h4>
                      <p class="text-sm text-muted">Get notified of new rental inquiries</p>
                    </div>
                    <label class="switch">
                      <input type="checkbox" checked onchange="SettingsManager.toggleSetting('bookingInquiries', this.checked)">
                      <span class="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Security Settings -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-shield-alt"></i>
                  Security & Privacy
                </h3>
                <p class="card-description">Manage your account security and privacy preferences</p>
              </div>
              <div class="card-content">
                <form onsubmit="SettingsManager.updatePassword(event)">
                  <div class="form-group">
                    <label class="form-label" for="currentPassword">Current Password</label>
                    <input class="form-input" id="currentPassword" type="password" placeholder="Enter current password">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="newPassword">New Password</label>
                    <input class="form-input" id="newPassword" type="password" placeholder="Enter new password">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="confirmPassword">Confirm New Password</label>
                    <input class="form-input" id="confirmPassword" type="password" placeholder="Confirm new password">
                  </div>
                  <button type="submit" class="btn btn-primary">Update Password</button>
                </form>
                
                <hr class="my-4">
                
                <div class="setting-item">
                  <div>
                    <h4 class="font-medium">Two-Factor Authentication</h4>
                    <p class="text-sm text-muted">Add an extra layer of security</p>
                  </div>
                  <label class="switch">
                    <input type="checkbox" onchange="SettingsManager.toggleSetting('twoFactor', this.checked)">
                    <span class="slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar Settings -->
          <div class="space-y-6">
            <!-- Appearance -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-palette"></i>
                  Appearance
                </h3>
              </div>
              <div class="card-content">
                <div class="setting-item">
                  <div>
                    <h4 class="font-medium">Dark Mode</h4>
                    <p class="text-sm text-muted">Toggle dark theme</p>
                  </div>
                  <label class="switch">
                    <input type="checkbox" onchange="SettingsManager.toggleDarkMode(this.checked)">
                    <span class="slider"></span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-cog"></i>
                  Quick Actions
                </h3>
              </div>
              <div class="card-content">
                <div class="space-y-3">
                  <button class="btn btn-outline w-full" onclick="SettingsManager.exportData()">
                    <i class="fas fa-download"></i>
                    Export Data
                  </button>
                  <button class="btn btn-outline w-full" onclick="SettingsManager.importProperties()">
                    <i class="fas fa-upload"></i>
                    Import Properties
                  </button>
                  <button class="btn btn-outline w-full" onclick="SettingsManager.resetDashboard()">
                    <i class="fas fa-refresh"></i>
                    Reset Dashboard
                  </button>
                  <hr>
                  <button class="btn btn-danger w-full" onclick="SettingsManager.deleteAccount()">
                    <i class="fas fa-trash"></i>
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
}

const PaymentManager = {
  currentTypeFilter: "all",
  currentPropertyFilter: "all",

  handleSearch() {
    const searchTerm = document.getElementById("paymentSearch").value.toLowerCase()
    const paymentItems = document.querySelectorAll(".payment-item")

    paymentItems.forEach((item) => {
      const text = item.textContent.toLowerCase()
      const matchesSearch = text.includes(searchTerm)
      const matchesType = this.currentTypeFilter === "all" || item.dataset.type === this.currentTypeFilter
      const matchesProperty =
        this.currentPropertyFilter === "all" || item.dataset.property === this.currentPropertyFilter

      if (matchesSearch && matchesType && matchesProperty) {
        item.style.display = "block"
      } else {
        item.style.display = "none"
      }
    })
  },

  setTypeFilter(type) {
    this.currentTypeFilter = type
    this.handleSearch()
  },

  setPropertyFilter(property) {
    this.currentPropertyFilter = property
    this.handleSearch()
  },

  exportReport() {
    App.showNotification("Generating payment report...", "info")
    // In a real app, this would generate and download a report
  },
}

const FeedbackManager = {
  currentRatings: {},

  toggleFeedback(tenantId) {
    const form = document.getElementById(`feedbackForm${tenantId}`)
    if (form.style.display === "none") {
      form.style.display = "block"
    } else {
      form.style.display = "none"
      this.resetForm(tenantId)
    }
  },

  setRating(tenantId, rating) {
    this.currentRatings[tenantId] = rating

    // Update star display
    const stars = document.querySelectorAll(`[data-tenant="${tenantId}"] .star-icon`)
    stars.forEach((star, index) => {
      if (index < rating) {
        star.style.color = "var(--warning-color)"
      } else {
        star.style.color = "var(--text-muted)"
      }
    })

    // Update rating text
    const ratingText = document.getElementById(`ratingText${tenantId}`)
    ratingText.textContent = this.getRatingText(rating)
    ratingText.className = `ml-3 font-medium ${this.getRatingColor(rating)}`
  },

  getRatingText(rating) {
    const texts = { 5: "Excellent", 4: "Good", 3: "Average", 2: "Poor", 1: "Very Poor" }
    return texts[rating] || ""
  },

  getRatingColor(rating) {
    if (rating >= 4) return "text-success"
    if (rating >= 3) return "text-warning"
    return "text-danger"
  },

  submitFeedback(tenantId) {
    const rating = this.currentRatings[tenantId]
    const comment = document.getElementById(`comment${tenantId}`).value

    if (!rating) {
      App.showNotification("Please provide a rating before submitting feedback.", "warning")
      return
    }

    App.showNotification("Feedback submitted successfully!", "success")
    this.toggleFeedback(tenantId)
    App.loadPageContent("feedback")
  },

  cancelFeedback(tenantId) {
    this.toggleFeedback(tenantId)
    this.resetForm(tenantId)
  },

  resetForm(tenantId) {
    delete this.currentRatings[tenantId]
    document.getElementById(`comment${tenantId}`).value = ""

    // Reset stars
    const stars = document.querySelectorAll(`[data-tenant="${tenantId}"] .star-icon`)
    stars.forEach((star) => {
      star.style.color = "var(--text-muted)"
    })

    // Reset rating text
    const ratingText = document.getElementById(`ratingText${tenantId}`)
    ratingText.textContent = ""
  },
}

const NotificationManager = {
  getIconClass(type) {
    const icons = {
      inquiry: "comments",
      maintenance: "wrench",
      payment: "dollar-sign",
      approval: "check-circle",
      alert: "exclamation-triangle",
    }
    return icons[type] || "bell"
  },

  getColorClass(type) {
    const colors = {
      inquiry: "text-primary",
      maintenance: "text-warning",
      payment: "text-success",
      approval: "text-info",
      alert: "text-danger",
    }
    return colors[type] || "text-muted"
  },

  getPriorityBadge(priority) {
    const badges = {
      high: '<span class="priority-badge text-danger">High</span>',
      medium: '<span class="priority-badge text-warning">Medium</span>',
      low: '<span class="priority-badge text-success">Low</span>',
    }
    return badges[priority] || ""
  },

  markAsRead(notificationId) {
    const notification = AppData.notifications.find((n) => n.id === notificationId)
    if (notification) {
      notification.read = true
      App.showNotification("Notification marked as read", "success")
      App.loadPageContent("notifications")
    }
  },

  markAllRead() {
    AppData.notifications.forEach((n) => (n.read = true))
    App.showNotification("All notifications marked as read", "success")
    App.loadPageContent("notifications")
  },

  viewDetails(notificationId) {
    App.showNotification("Opening notification details...", "info")
  },

  openSettings() {
    App.navigateTo("settings")
  },

  loadMore() {
    App.showNotification("Loading more notifications...", "info")
  },
}

const SettingsManager = {
  saveProfile(event) {
    event.preventDefault()
    App.showNotification("Profile updated successfully!", "success")
  },

  updatePassword(event) {
    event.preventDefault()
    const current = document.getElementById("currentPassword").value
    const newPass = document.getElementById("newPassword").value
    const confirm = document.getElementById("confirmPassword").value

    if (!current || !newPass || !confirm) {
      App.showNotification("Please fill in all password fields", "warning")
      return
    }

    if (newPass !== confirm) {
      App.showNotification("New passwords do not match", "warning")
      return
    }

    App.showNotification("Password updated successfully!", "success")
    event.target.reset()
  },

  toggleSetting(setting, enabled) {
    App.showNotification(`${setting} ${enabled ? "enabled" : "disabled"}`, "info")
  },

  toggleDarkMode(enabled) {
    document.body.classList.toggle("dark-mode", enabled)
    App.showNotification(`Dark mode ${enabled ? "enabled" : "disabled"}`, "info")
  },

  exportData() {
    App.showNotification("Exporting your data...", "info")
  },

  importProperties() {
    App.showNotification("Opening import dialog...", "info")
  },

  resetDashboard() {
    if (confirm("Are you sure you want to reset your dashboard? This will restore default settings.")) {
      App.showNotification("Dashboard reset successfully!", "success")
    }
  },

  deleteAccount() {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      App.showNotification("Account deletion initiated. You will receive a confirmation email.", "warning")
    }
  },
}
