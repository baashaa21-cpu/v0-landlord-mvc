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
            <a href="<?php echo URLROOT; ?>/landlord/properties" class="nav-link active">
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
            <h1 class="page-title">My Properties</h1>
            <a href="<?php echo URLROOT; ?>/landlord/add_property" class="btn btn-primary">Add New Property</a>
        </div>

        <!-- Filters -->
        <div class="filters">
            <div class="filter-row">
                <div class="filter-group">
                    <label class="form-label">Search Properties</label>
                    <input type="text" class="form-control" placeholder="Search by address, tenant name...">
                </div>
                <div class="filter-group">
                    <label class="form-label">Status</label>
                    <select class="form-control">
                        <option value="">All Properties</option>
                        <option value="occupied">Occupied</option>
                        <option value="vacant">Vacant</option>
                        <option value="maintenance">Under Maintenance</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label class="form-label">Property Type</label>
                    <select class="form-control">
                        <option value="">All Types</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                    </select>
                </div>
                <div class="filter-group">
                    <button class="btn btn-primary">Filter</button>
                </div>
            </div>
        </div>

        <!-- Properties Grid -->
        <div class="property-grid">
            <div class="property-card">
                <img src="/placeholder.svg?height=200&width=300" alt="Property" class="property-image">
                <div class="property-info">
                    <h3 class="property-title">123 Main Street, Apt 1A</h3>
                    <div class="property-details">
                        <p><strong>Type:</strong> 2BR/1BA Apartment</p>
                        <p><strong>Rent:</strong> $1,200/month</p>
                        <p><strong>Status:</strong> <span class="badge badge-success">Occupied</span></p>
                        <p><strong>Tenant:</strong> John Doe</p>
                    </div>
                    <div class="property-actions">
                        <button class="btn btn-outline btn-sm">View Details</button>
                        <button class="btn btn-primary btn-sm">Edit</button>
                    </div>
                </div>
            </div>

            <div class="property-card">
                <img src="/placeholder.svg?height=200&width=300" alt="Property" class="property-image">
                <div class="property-info">
                    <h3 class="property-title">456 Oak Avenue</h3>
                    <div class="property-details">
                        <p><strong>Type:</strong> 3BR/2BA House</p>
                        <p><strong>Rent:</strong> $1,800/month</p>
                        <p><strong>Status:</strong> <span class="badge badge-warning">Vacant</span></p>
                        <p><strong>Available:</strong> March 1, 2024</p>
                    </div>
                    <div class="property-actions">
                        <button class="btn btn-outline btn-sm">View Details</button>
                        <button class="btn btn-success btn-sm">List Property</button>
                    </div>
                </div>
            </div>

            <div class="property-card">
                <img src="/placeholder.svg?height=200&width=300" alt="Property" class="property-image">
                <div class="property-info">
                    <h3 class="property-title">789 Pine St, Unit 12</h3>
                    <div class="property-details">
                        <p><strong>Type:</strong> 1BR/1BA Condo</p>
                        <p><strong>Rent:</strong> $950/month</p>
                        <p><strong>Status:</strong> <span class="badge badge-success">Occupied</span></p>
                        <p><strong>Tenant:</strong> Sarah Wilson</p>
                    </div>
                    <div class="property-actions">
                        <button class="btn btn-outline btn-sm">View Details</button>
                        <button class="btn btn-primary btn-sm">Edit</button>
                    </div>
                </div>
            </div>

            <div class="property-card">
                <img src="/placeholder.svg?height=200&width=300" alt="Property" class="property-image">
                <div class="property-info">
                    <h3 class="property-title">321 Elm Drive, Apt 5B</h3>
                    <div class="property-details">
                        <p><strong>Type:</strong> 2BR/2BA Apartment</p>
                        <p><strong>Rent:</strong> $1,350/month</p>
                        <p><strong>Status:</strong> <span class="badge badge-danger">Maintenance</span></p>
                        <p><strong>Issue:</strong> Plumbing repair needed</p>
                    </div>
                    <div class="property-actions">
                        <button class="btn btn-outline btn-sm">View Details</button>
                        <button class="btn btn-warning btn-sm">Schedule Repair</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.querySelector('input[placeholder*="Search"]');
    const propertyCards = document.querySelectorAll('.property-card');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            propertyCards.forEach(card => {
                const title = card.querySelector('.property-title').textContent.toLowerCase();
                const details = card.querySelector('.property-details').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || details.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Filter functionality
    const statusFilter = document.querySelector('select');
    if (statusFilter) {
        statusFilter.addEventListener('change', function() {
            const selectedStatus = this.value.toLowerCase();
            propertyCards.forEach(card => {
                if (selectedStatus === '') {
                    card.style.display = 'block';
                } else {
                    const badge = card.querySelector('.badge');
                    const status = badge.textContent.toLowerCase();
                    
                    if (status.includes(selectedStatus)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    }
});
</script>

<?php require APPROOT . '/views/inc/footer.php'; ?>
