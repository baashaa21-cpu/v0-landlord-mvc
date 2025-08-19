<?php require APPROOT . '/views/inc/header.php'; ?>
<link rel="stylesheet" href="<?php echo URLROOT; ?>/css/landlord.css">

<div class="landlord-container">
    <!-- Sidebar -->
    <nav class="landlord-sidebar">
        <div class="sidebar-header">
            <h2 class="sidebar-title">Landlord Portal</h2>
        </div>
        <div class="sidebar-nav">
            <a href="<?php echo URLROOT; ?>/landlord/dashboard" class="nav-link">
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
            <a href="<?php echo URLROOT; ?>/landlord/maintenance" class="nav-link active">
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
            <h1 class="page-title">Maintenance Requests</h1>
            <div style="display: flex; gap: 1rem;">
                <select class="form-control" style="width: auto;">
                    <option value="">All Requests</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button class="btn btn-primary">New Request</button>
            </div>
        </div>

        <!-- Stats -->
        <div class="stats-grid">
            <div class="stat-card warning">
                <h3 class="stat-label">Pending Requests</h3>
                <div class="stat-value">8</div>
                <div class="stat-change">Awaiting action</div>
            </div>
            <div class="stat-card info">
                <h3 class="stat-label">In Progress</h3>
                <div class="stat-value">3</div>
                <div class="stat-change">Being worked on</div>
            </div>
            <div class="stat-card success">
                <h3 class="stat-label">Completed This Month</h3>
                <div class="stat-value">15</div>
                <div class="stat-change positive">+3 from last month</div>
            </div>
            <div class="stat-card">
                <h3 class="stat-label">Average Response Time</h3>
                <div class="stat-value">2.4</div>
                <div class="stat-change">days</div>
            </div>
        </div>

        <!-- Maintenance Requests -->
        <div class="request-card urgent">
            <div class="request-header">
                <div>
                    <h3 style="margin: 0; color: var(--text-primary);">Water Leak in Bathroom</h3>
                    <p style="margin: 0.5rem 0 0 0; color: var(--text-secondary);">123 Main St, Apt 2A • Submitted 2 hours ago</p>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <span class="priority-badge priority-urgent">URGENT</span>
                    <span class="badge badge-warning">Pending</span>
                </div>
            </div>
            <div class="request-body">
                <p><strong>Tenant:</strong> Sarah Johnson</p>
                <p><strong>Description:</strong> There's a significant water leak coming from under the bathroom sink. Water is pooling on the floor and may cause damage to the unit below.</p>
                <p><strong>Contact:</strong> (555) 123-4567</p>
                <div style="margin-top: 1rem;">
                    <button class="btn btn-primary btn-sm">Assign Contractor</button>
                    <button class="btn btn-warning btn-sm">Schedule Visit</button>
                    <button class="btn btn-outline btn-sm">Contact Tenant</button>
                </div>
            </div>
        </div>

        <div class="request-card high">
            <div class="request-header">
                <div>
                    <h3 style="margin: 0; color: var(--text-primary);">Heating System Not Working</h3>
                    <p style="margin: 0.5rem 0 0 0; color: var(--text-secondary);">456 Oak Ave • Submitted 1 day ago</p>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <span class="priority-badge priority-high">HIGH</span>
                    <span class="badge badge-info">In Progress</span>
                </div>
            </div>
            <div class="request-body">
                <p><strong>Tenant:</strong> Mike Davis</p>
                <p><strong>Description:</strong> The heating system stopped working yesterday evening. Temperature in the unit is dropping and it's getting uncomfortable.</p>
                <p><strong>Assigned to:</strong> ABC Heating Services</p>
                <p><strong>Scheduled:</strong> Tomorrow, 10:00 AM</p>
                <div style="margin-top: 1rem;">
                    <button class="btn btn-success btn-sm">Mark Complete</button>
                    <button class="btn btn-outline btn-sm">Update Status</button>
                    <button class="btn btn-outline btn-sm">View Quote</button>
                </div>
            </div>
        </div>

        <div class="request-card">
            <div class="request-header">
                <div>
                    <h3 style="margin: 0; color: var(--text-primary);">Kitchen Faucet Dripping</h3>
                    <p style="margin: 0.5rem 0 0 0; color: var(--text-secondary);">789 Pine St, Unit 5 • Submitted 3 days ago</p>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <span class="priority-badge priority-medium">MEDIUM</span>
                    <span class="badge badge-warning">Pending</span>
                </div>
            </div>
            <div class="request-body">
                <p><strong>Tenant:</strong> Lisa Chen</p>
                <p><strong>Description:</strong> Kitchen faucet has been dripping constantly. It's wasting water and the sound is annoying, especially at night.</p>
                <p><strong>Estimated Cost:</strong> $50 - $150</p>
                <div style="margin-top: 1rem;">
                    <button class="btn btn-primary btn-sm">Assign Contractor</button>
                    <button class="btn btn-warning btn-sm">Schedule Visit</button>
                    <button class="btn btn-outline btn-sm">Get Quote</button>
                </div>
            </div>
        </div>

        <div class="request-card">
            <div class="request-header">
                <div>
                    <h3 style="margin: 0; color: var(--text-primary);">Light Fixture Replacement</h3>
                    <p style="margin: 0.5rem 0 0 0; color: var(--text-secondary);">321 Elm Dr, Apt 3B • Submitted 1 week ago</p>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <span class="priority-badge priority-low">LOW</span>
                    <span class="badge badge-success">Completed</span>
                </div>
            </div>
            <div class="request-body">
                <p><strong>Tenant:</strong> Robert Wilson</p>
                <p><strong>Description:</strong> Dining room light fixture is outdated and one of the bulbs keeps burning out quickly.</p>
                <p><strong>Completed by:</strong> XYZ Electrical</p>
                <p><strong>Cost:</strong> $125</p>
                <div style="margin-top: 1rem;">
                    <button class="btn btn-outline btn-sm">View Invoice</button>
                    <button class="btn btn-outline btn-sm">Tenant Feedback</button>
                </div>
            </div>
        </div>
    </main>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const statusFilter = document.querySelector('select');
    const requestCards = document.querySelectorAll('.request-card');
    
    if (statusFilter) {
        statusFilter.addEventListener('change', function() {
            const selectedStatus = this.value.toLowerCase();
            requestCards.forEach(card => {
                if (selectedStatus === '') {
                    card.style.display = 'block';
                } else {
                    const badge = card.querySelector('.badge');
                    const status = badge.textContent.toLowerCase();
                    
                    if (status.includes(selectedStatus) || 
                        (selectedStatus === 'in-progress' && status.includes('progress'))) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    }
    
    // Button click handlers
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            if (action === 'Mark Complete') {
                if (confirm('Mark this maintenance request as complete?')) {
                    const badge = this.closest('.request-card').querySelector('.badge');
                    badge.textContent = 'Completed';
                    badge.className = 'badge badge-success';
                }
            }
        });
    });
});
</script>

<?php require APPROOT . '/views/inc/footer.php'; ?>
