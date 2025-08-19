// Component rendering utilities
const Components = {
  // Render KPI Card component
  renderKPICard(title, value, icon, trend, iconClass = "primary") {
    return `
      <div class="kpi-card">
        <div class="kpi-header">
          <span class="kpi-title">${title}</span>
          <div class="kpi-icon ${iconClass}">
            <i class="fas fa-${icon}"></i>
          </div>
        </div>
        <div class="kpi-value">${value}</div>
        <div class="kpi-trend ${trend.isPositive ? "positive" : trend.isPositive === false ? "negative" : "neutral"}">
          <i class="fas fa-${trend.isPositive ? "arrow-up" : trend.isPositive === false ? "arrow-down" : "minus"}"></i>
          <span>${trend.value}</span>
        </div>
      </div>
    `
  },

  // Render Status Badge component
  renderStatusBadge(status, text) {
    return `<span class="status-badge ${status}">${text || status}</span>`
  },

  // Render Card component
  renderCard(title, description, content, icon = null) {
    return `
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            ${icon ? `<i class="fas fa-${icon}"></i>` : ""}
            ${title}
          </h3>
          ${description ? `<p class="card-description">${description}</p>` : ""}
        </div>
        <div class="card-content">
          ${content}
        </div>
      </div>
    `
  },

  // Render Button component
  renderButton(text, onClick, variant = "primary", size = "", icon = null) {
    const sizeClass = size ? `btn-${size}` : ""
    const iconHtml = icon ? `<i class="fas fa-${icon}"></i>` : ""

    return `
      <button class="btn btn-${variant} ${sizeClass}" onclick="${onClick}">
        ${iconHtml}
        <span>${text}</span>
      </button>
    `
  },

  // Render Table component
  renderTable(headers, rows, actions = []) {
    const headerHtml = headers.map((header) => `<th>${header}</th>`).join("")
    const actionsHeader = actions.length > 0 ? "<th>Actions</th>" : ""

    const rowsHtml = rows
      .map((row) => {
        const cellsHtml = row.map((cell) => `<td>${cell}</td>`).join("")
        const actionsHtml =
          actions.length > 0
            ? `<td class="table-actions">${actions
                .map(
                  (action) =>
                    `<button class="btn btn-ghost btn-sm" onclick="${action.onClick}">
            <i class="fas fa-${action.icon}"></i>
          </button>`,
                )
                .join("")}</td>`
            : ""

        return `<tr>${cellsHtml}${actionsHtml}</tr>`
      })
      .join("")

    return `
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>${headerHtml}${actionsHeader}</tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `
  },

  // Render Form Input component
  renderFormInput(label, name, type = "text", value = "", placeholder = "", required = false) {
    const requiredAttr = required ? "required" : ""
    const inputClass = type === "textarea" ? "form-input form-textarea" : "form-input"
    const inputElement =
      type === "textarea"
        ? `<textarea class="${inputClass}" name="${name}" placeholder="${placeholder}" ${requiredAttr}>${value}</textarea>`
        : type === "select"
          ? `<select class="form-input form-select" name="${name}" ${requiredAttr}>${value}</select>`
          : `<input type="${type}" class="${inputClass}" name="${name}" value="${value}" placeholder="${placeholder}" ${requiredAttr}>`

    return `
      <div class="form-group">
        <label class="form-label" for="${name}">${label}</label>
        ${inputElement}
      </div>
    `
  },

  // Render Loading component
  renderLoading(text = "Loading...") {
    return `
      <div class="loading-container text-center p-4">
        <div class="loading"></div>
        <p class="mt-4">${text}</p>
      </div>
    `
  },

  // Render Empty State component
  renderEmptyState(title, description, actionText = null, actionOnClick = null) {
    const actionButton =
      actionText && actionOnClick
        ? `<button class="btn btn-primary" onclick="${actionOnClick}">${actionText}</button>`
        : ""

    return `
      <div class="empty-state text-center p-4">
        <div class="empty-icon mb-4">
          <i class="fas fa-inbox" style="font-size: 3rem; color: var(--text-muted);"></i>
        </div>
        <h3 class="mb-4">${title}</h3>
        <p class="text-secondary mb-4">${description}</p>
        ${actionButton}
      </div>
    `
  },
}

// Add table styles to components.css
const tableStyles = `
.table-container {
  overflow-x: auto;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
}

.table {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--bg-primary);
}

.table th,
.table td {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.table th {
  background-color: var(--bg-tertiary);
  font-weight: 600;
  color: var(--text-primary);
}

.table tbody tr:hover {
  background-color: var(--bg-secondary);
}

.table-actions {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: flex-end;
}

.empty-state {
  padding: var(--spacing-2xl);
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}
`

// Inject additional styles
if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = tableStyles
  document.head.appendChild(style)
}
