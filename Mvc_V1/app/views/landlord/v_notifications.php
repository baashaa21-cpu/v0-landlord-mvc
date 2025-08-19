<?php require APPROOT . '/views/inc/landlord_header.php'; ?>

<div class="main-content">
    <div class="page-header">
        <h1>Notifications</h1>
        <div class="header-actions">
            <button class="btn btn-primary" onclick="createNotification()">
                <i class="icon-plus"></i> Create Notification
            </button>
            <button class="btn btn-outline" onclick="notificationSettings()">
                <i class="icon-settings"></i> Settings
            </button>
        </div>
    </div>

    <!-- Notification Stats -->
    <div class="stats-grid">
        <div class="stat-card">
            <div class="stat-icon bg-blue">
                <i class="icon-bell"></i>
            </div>
            <div class="stat-content">
                <h3 id="totalNotifications">89</h3>
                <p>Total Sent</p>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon bg-green">
                <i class="icon-check"></i>
            </div>
            <div class="stat-content">
                <h3 id="deliveredNotifications">84</h3>
                <p>Delivered</p>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon bg-orange">
                <i class="icon-clock"></i>
            </div>
            <div class="stat-content">
                <h3 id="pendingNotifications">3</h3>
                <p>Pending</p>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon bg-red">
                <i class="icon-x"></i>
            </div>
            <div class="stat-content">
                <h3 id="failedNotifications">2</h3>
                <p>Failed</p>
            </div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="quick-actions">
        <button class="quick-action-btn" onclick="sendRentReminder()">
            <i class="icon-dollar-sign"></i>
            <span>Rent Reminder</span>
        </button>
        <button class="quick-action-btn" onclick="sendMaintenanceUpdate()">
            <i class="icon-tool"></i>
            <span>Maintenance Update</span>
        </button>
        <button class="quick-action-btn" onclick="sendAnnouncement()">
            <i class="icon-megaphone"></i>
            <span>Announcement</span>
        </button>
        <button class="quick-action-btn" onclick="sendEmergencyAlert()">
            <i class="icon-alert-triangle"></i>
            <span>Emergency Alert</span>
        </button>
    </div>

    <!-- Filters -->
    <div class="filters-section">
        <div class="search-box">
            <input type="text" placeholder="Search notifications..." id="notificationSearch">
            <i class="icon-search"></i>
        </div>
        <select id="typeFilter">
            <option value="">All Types</option>
            <option value="rent">Rent Reminder</option>
            <option value="maintenance">Maintenance</option>
            <option value="announcement">Announcement</option>
            <option value="emergency">Emergency</option>
        </select>
        <select id="statusFilter">
            <option value="">All Status</option>
            <option value="delivered">Delivered</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
        </select>
        <input type="date" id="dateFilter">
    </div>

    <!-- Notifications List -->
    <div class="notifications-container">
        <div class="notification-item" data-type="rent" data-status="delivered">
            <div class="notification-icon bg-blue">
                <i class="icon-dollar-sign"></i>
            </div>
            <div class="notification-content">
                <div class="notification-header">
                    <h4>Monthly Rent Reminder</h4>
                    <span class="notification-time">2 hours ago</span>
                </div>
                <p>Rent payment due in 3 days - Sent to 45 tenants</p>
                <div class="notification-stats">
                    <span class="stat">
                        <i class="icon-users"></i>
                        45 recipients
                    </span>
                    <span class="stat">
                        <i class="icon-check"></i>
                        43 delivered
                    </span>
                    <span class="stat">
                        <i class="icon-eye"></i>
                        38 read
                    </span>
                </div>
            </div>
            <div class="notification-actions">
                <span class="status-badge status-completed">Delivered</span>
                <button class="btn btn-outline" onclick="viewNotificationDetails('NOT001')">View Details</button>
            </div>
        </div>

        <div class="notification-item" data-type="maintenance" data-status="pending">
            <div class="notification-icon bg-orange">
                <i class="icon-tool"></i>
            </div>
            <div class="notification-content">
                <div class="notification-header">
                    <h4>Maintenance Schedule Update</h4>
                    <span class="notification-time">1 day ago</span>
                </div>
                <p>HVAC maintenance scheduled for Building A - Sent to 28 tenants</p>
                <div class="notification-stats">
                    <span class="stat">
                        <i class="icon-users"></i>
                        28 recipients
                    </span>
                    <span class="stat">
                        <i class="icon-clock"></i>
                        3 pending
                    </span>
                    <span class="stat">
                        <i class="icon-eye"></i>
                        25 read
                    </span>
                </div>
            </div>
            <div class="notification-actions">
                <span class="status-badge status-pending">Pending</span>
                <button class="btn btn-outline" onclick="viewNotificationDetails('NOT002')">View Details</button>
                <button class="btn btn-primary" onclick="resendNotification('NOT002')">Resend</button>
            </div>
        </div>

        <div class="notification-item" data-type="announcement" data-status="delivered">
            <div class="notification-icon bg-green">
                <i class="icon-megaphone"></i>
            </div>
            <div class="notification-content">
                <div class="notification-header">
                    <h4>New Amenity Available</h4>
                    <span class="notification-time">3 days ago</span>
                </div>
                <p>New fitness center now open for all residents - Sent to all tenants</p>
                <div class="notification-stats">
                    <span class="stat">
                        <i class="icon-users"></i>
                        67 recipients
                    </span>
                    <span class="stat">
                        <i class="icon-check"></i>
                        67 delivered
                    </span>
                    <span class="stat">
                        <i class="icon-eye"></i>
                        52 read
                    </span>
                </div>
            </div>
            <div class="notification-actions">
                <span class="status-badge status-completed">Delivered</span>
                <button class="btn btn-outline" onclick="viewNotificationDetails('NOT003')">View Details</button>
            </div>
        </div>
    </div>
</div>

<?php require APPROOT . '/views/inc/landlord_footer.php'; ?>
