<?php require APPROOT . '/views/inc/landlord_header.php'; ?>

<div class="main-content">
    <div class="page-header">
        <h1>Tenant Feedback</h1>
        <div class="header-actions">
            <button class="btn btn-primary" onclick="exportFeedback()">
                <i class="icon-download"></i> Export Report
            </button>
        </div>
    </div>

    <!-- Feedback Stats -->
    <div class="stats-grid">
        <div class="stat-card">
            <div class="stat-icon bg-blue">
                <i class="icon-message-circle"></i>
            </div>
            <div class="stat-content">
                <h3 id="totalFeedback">156</h3>
                <p>Total Feedback</p>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon bg-green">
                <i class="icon-star"></i>
            </div>
            <div class="stat-content">
                <h3 id="avgRating">4.2</h3>
                <p>Average Rating</p>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon bg-orange">
                <i class="icon-clock"></i>
            </div>
            <div class="stat-content">
                <h3 id="pendingResponse">12</h3>
                <p>Pending Response</p>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon bg-purple">
                <i class="icon-trending-up"></i>
            </div>
            <div class="stat-content">
                <h3 id="satisfactionRate">87%</h3>
                <p>Satisfaction Rate</p>
            </div>
        </div>
    </div>

    <!-- Filters -->
    <div class="filters-section">
        <div class="search-box">
            <input type="text" placeholder="Search feedback..." id="feedbackSearch">
            <i class="icon-search"></i>
        </div>
        <select id="propertyFilter">
            <option value="">All Properties</option>
            <option value="sunset-apartments">Sunset Apartments</option>
            <option value="downtown-loft">Downtown Loft</option>
            <option value="garden-view">Garden View Condos</option>
        </select>
        <select id="ratingFilter">
            <option value="">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
        </select>
        <select id="statusFilter">
            <option value="">All Status</option>
            <option value="responded">Responded</option>
            <option value="pending">Pending Response</option>
        </select>
        <input type="date" id="dateFilter">
    </div>

    <!-- Feedback List -->
    <div class="feedback-container">
        <div class="feedback-item" data-rating="5" data-property="sunset-apartments" data-status="responded">
            <div class="feedback-header">
                <div class="tenant-info">
                    <img src="/Mvc_V1/public/images/avatar1.jpg" alt="Tenant" class="tenant-avatar">
                    <div>
                        <h4>Sarah Johnson</h4>
                        <p>Sunset Apartments - Unit 204</p>
                    </div>
                </div>
                <div class="feedback-meta">
                    <div class="rating">
                        <span class="stars">★★★★★</span>
                        <span class="rating-number">5.0</span>
                    </div>
                    <span class="feedback-date">Jan 15, 2024</span>
                </div>
            </div>
            <div class="feedback-content">
                <p>"Excellent maintenance response time! The team fixed my heating issue within 24 hours. Very professional and courteous service."</p>
                <div class="feedback-tags">
                    <span class="tag">Maintenance</span>
                    <span class="tag">Response Time</span>
                </div>
            </div>
            <div class="feedback-actions">
                <span class="status-badge status-completed">Responded</span>
                <button class="btn btn-outline" onclick="viewFeedbackDetails('FB001')">View Details</button>
                <button class="btn btn-primary" onclick="respondToFeedback('FB001')">Add Response</button>
            </div>
        </div>

        <div class="feedback-item" data-rating="3" data-property="downtown-loft" data-status="pending">
            <div class="feedback-header">
                <div class="tenant-info">
                    <img src="/Mvc_V1/public/images/avatar2.jpg" alt="Tenant" class="tenant-avatar">
                    <div>
                        <h4>Mike Chen</h4>
                        <p>Downtown Loft - Unit 12B</p>
                    </div>
                </div>
                <div class="feedback-meta">
                    <div class="rating">
                        <span class="stars">★★★☆☆</span>
                        <span class="rating-number">3.0</span>
                    </div>
                    <span class="feedback-date">Jan 12, 2024</span>
                </div>
            </div>
            <div class="feedback-content">
                <p>"The apartment is nice but the noise from upstairs neighbors is quite disturbing, especially during night hours. Would appreciate if this could be addressed."</p>
                <div class="feedback-tags">
                    <span class="tag">Noise Complaint</span>
                    <span class="tag">Neighbors</span>
                </div>
            </div>
            <div class="feedback-actions">
                <span class="status-badge status-pending">Pending Response</span>
                <button class="btn btn-outline" onclick="viewFeedbackDetails('FB002')">View Details</button>
                <button class="btn btn-primary" onclick="respondToFeedback('FB002')">Respond</button>
            </div>
        </div>
    </div>
</div>

<?php require APPROOT . '/views/inc/landlord_footer.php'; ?>
