<?php require APPROOT . '/views/inc/header.php'; ?>
<link rel="stylesheet" href="<?php echo URLROOT; ?>/css/landlord.css">

<div class="landlord-container">
    <!-- Sidebar -->
    <nav class="landlord-sidebar">
        <div class="sidebar-header">
            <h2 class="sidebar-title">Landlord Portal</h2>
        </div>
        <div class="sidebar-nav">
            <a href="<?php echo URLROOT; ?>/landlord/dashboard" class="nav-link active">
                <span class="nav-icon">📊</span>
                Dashboard
            </a>
            <a href="<?php echo URLROOT; ?>/landlord/properties" class="nav-link">
                <span class="nav-icon">🏠</span>
                Properties
            </a>
            <a href="<?php echo URLROOT; ?>/landlord/add_property" class="nav-link">
                <span class="nav-icon">➕</span>
                Add Property
            </a>
            <a href="<?php echo URLROOT; ?>/landlord/maintenance" class="nav-link">
                <span class="nav-icon">🔧</span>
                Maintenance
            </a>
            <a href="<?php echo URLROOT; ?>/landlord/inquiries" class="nav-link">
                <span class="nav-icon">💬</span>
                Inquiries
            </a>
            <a href="<?php echo URLROOT; ?>/landlord/payment_history" class="nav-link">
                <span class="nav-icon">💰</span>
                Payments
            </a>
            <a href="<?php echo URLROOT; ?>/landlord/feedback" class="nav-link">
                <span class="nav-icon">⭐</span>
                Feedback
            </a>
            <a href="<?php echo URLROOT; ?>/landlord/notifications" class="nav-link">
                <span class="nav-icon">🔔</span>
                Notifications
            </a>
            <a href="<?php echo URLROOT; ?>/landlord/settings" class="nav-link">
                <span class="nav-icon">⚙️</span>
                Settings
            </a>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="landlord-main">
        <div class="page-header">
            <h1 class="page-title">Dashboard</h1>
            <div class="user-info">Welcome, <?php echo $data['user_name']; ?></div>
        </div>

        <!-- Stats Grid -->
        <div class="stats-grid">
            <div class="stat-card">
                <h3 class="stat-label">Total Properties</h3>
                <div class="stat-value">12</div>
                <div class="stat-change positive">+2 this month</div>
            </div>
            <div class="stat-card success">
                <h3 class="stat-label">Occupied Units</h3>
                <div class="stat-value">10</div>
                <div class="stat-change positive">83% occupancy</div>
            </div>
            <div class="stat-card warning">
                <h3 class="stat-label">Vacant Units</h3>
                <div class="stat-value">2</div>
                <div class="stat-change">Available for rent</div>
            </div>
            <div class="stat-card info">
                <h3 class="stat-label">Monthly Revenue</h3>
                <div class="stat-value">$15,400</div>
                <div class="stat-change positive">+8% from last month</div>
            </div>
        </div>

        <!-- Recent Activity -->
        <div class="content-card">
            <div class="card-header">
                <h2 class="card-title">Recent Activity</h2>
                <button class="btn btn-outline btn-sm">View All</button>
            </div>
            <div class="card-body">
                <div class="activity-item" style="padding: 1rem 0; border-bottom: 1px solid var(--border-color);">
                    <div style="display: flex; justify-content: between; align-items: center;">
                        <div>
                            <strong>New maintenance request</strong>
                            <div style="color: var(--text-secondary); font-size: 0.875rem;">Apartment 3B - Leaky faucet</div>
                        </div>
                        <span class="badge badge-warning">Pending</span>
                    </div>
                </div>
                <div class="activity-item" style="padding: 1rem 0; border-bottom: 1px solid var(--border-color);">
                    <div style="display: flex; justify-content: between; align-items: center;">
                        <div>
                            <strong>Rent payment received</strong>
                            <div style="color: var(--text-secondary); font-size: 0.875rem;">John Doe - $1,200</div>
                        </div>
                        <span class="badge badge-success">Completed</span>
                    </div>
                </div>
                <div class="activity-item" style="padding: 1rem 0;">
                    <div style="display: flex; justify-content: between; align-items: center;">
                        <div>
                            <strong>New inquiry</strong>
                            <div style="color: var(--text-secondary); font-size: 0.875rem;">Sarah Johnson interested in 2BR unit</div>
                        </div>
                        <span class="badge badge-info">New</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Property Overview -->
        <div class="content-card">
            <div class="card-header">
                <h2 class="card-title">Property Overview</h2>
                <a href="<?php echo URLROOT; ?>/landlord/properties" class="btn btn-primary btn-sm">Manage Properties</a>
            </div>
            <div class="card-body">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Status</th>
                            <th>Tenant</th>
                            <th>Monthly Rent</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>123 Main St, Apt 1A</td>
                            <td><span class="badge badge-success">Occupied</span></td>
                            <td>John Doe</td>
                            <td>$1,200</td>
                            <td><button class="btn btn-outline btn-sm">View</button></td>
                        </tr>
                        <tr>
                            <td>123 Main St, Apt 2B</td>
                            <td><span class="badge badge-warning">Vacant</span></td>
                            <td>-</td>
                            <td>$1,100</td>
                            <td><button class="btn btn-primary btn-sm">List</button></td>
                        </tr>
                        <tr>
                            <td>456 Oak Ave, Unit 5</td>
                            <td><span class="badge badge-success">Occupied</span></td>
                            <td>Sarah Wilson</td>
                            <td>$1,350</td>
                            <td><button class="btn btn-outline btn-sm">View</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</div>

<script>
// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
</script>

<?php require APPROOT . '/views/inc/footer.php'; ?>
