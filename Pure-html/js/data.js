// Mock data for the landlord management system
const AppData = {
  // Properties data
  properties: [
    {
      id: 1,
      name: "Sunset Apartments",
      address: "123 Main St, Downtown",
      type: "Apartment",
      units: 12,
      rent: 1200,
      status: "occupied",
      occupancy: 10,
      image: "/modern-apartment-building.png",
    },
    {
      id: 2,
      name: "Oak Street House",
      address: "456 Oak St, Suburbs",
      type: "House",
      units: 1,
      rent: 1800,
      status: "vacant",
      occupancy: 0,
      image: "/suburban-house.png",
    },
    {
      id: 3,
      name: "City View Condos",
      address: "789 High St, Uptown",
      type: "Condo",
      units: 8,
      rent: 1500,
      status: "occupied",
      occupancy: 7,
      image: "/modern-condo-interior.png",
    },
  ],

  // Inquiries data
  inquiries: [
    {
      id: 1,
      tenant: "Sarah Johnson",
      property: "Sunset Apartments",
      email: "sarah.j@email.com",
      phone: "(555) 123-4567",
      message: "Interested in a 2-bedroom unit",
      date: "2024-01-15",
      status: "pending",
    },
    {
      id: 2,
      tenant: "Mike Chen",
      property: "Oak Street House",
      email: "mike.chen@email.com",
      phone: "(555) 987-6543",
      message: "Looking for a family home",
      date: "2024-01-14",
      status: "approved",
    },
    {
      id: 3,
      tenant: "Emily Davis",
      property: "City View Condos",
      email: "emily.d@email.com",
      phone: "(555) 456-7890",
      message: "Need pet-friendly unit",
      date: "2024-01-13",
      status: "rejected",
    },
  ],

  // Maintenance requests data
  maintenanceRequests: [
    {
      id: "MR-001",
      property: "Sunset Apartments",
      unit: "Unit 5A",
      tenant: "John Smith",
      issue: "Leaky faucet in kitchen",
      priority: "medium",
      status: "pending",
      date: "2024-01-15",
      description: "Kitchen faucet has been dripping for 3 days",
    },
    {
      id: "MR-002",
      property: "City View Condos",
      unit: "Unit 3B",
      tenant: "Lisa Wong",
      issue: "Heating not working",
      priority: "high",
      status: "in-progress",
      date: "2024-01-14",
      description: "No heat in living room and bedroom",
    },
    {
      id: "MR-003",
      property: "Oak Street House",
      unit: "Main House",
      tenant: "Robert Taylor",
      issue: "Broken window",
      priority: "low",
      status: "completed",
      date: "2024-01-12",
      description: "Small crack in bedroom window",
    },
  ],

  // Payment history data
  payments: [
    {
      id: 1,
      tenant: "John Smith",
      property: "Sunset Apartments",
      amount: 1200,
      date: "2024-01-01",
      status: "paid",
      method: "Bank Transfer",
    },
    {
      id: 2,
      tenant: "Lisa Wong",
      property: "City View Condos",
      amount: 1500,
      date: "2024-01-01",
      status: "paid",
      method: "Credit Card",
    },
    {
      id: 3,
      tenant: "Robert Taylor",
      property: "Oak Street House",
      amount: 1800,
      date: "2024-01-01",
      status: "overdue",
      method: "Check",
    },
  ],

  // Feedback data
  feedback: [
    {
      id: 1,
      tenant: "John Smith",
      property: "Sunset Apartments",
      rating: 5,
      comment: "Great management and quick response to issues",
      date: "2024-01-10",
      category: "Management",
    },
    {
      id: 2,
      tenant: "Lisa Wong",
      property: "City View Condos",
      rating: 4,
      comment: "Nice property but parking could be better",
      date: "2024-01-08",
      category: "Property",
    },
  ],

  // Notifications data
  notifications: [
    {
      id: 1,
      title: "New Inquiry Received",
      message: "Sarah Johnson inquired about Sunset Apartments",
      type: "inquiry",
      date: "2024-01-15",
      read: false,
    },
    {
      id: 2,
      title: "Maintenance Request",
      message: "New maintenance request for heating issue",
      type: "maintenance",
      date: "2024-01-14",
      read: false,
    },
    {
      id: 3,
      title: "Payment Overdue",
      message: "Robert Taylor's rent payment is overdue",
      type: "payment",
      date: "2024-01-13",
      read: true,
    },
  ],
}

// Helper functions for data manipulation
const DataHelpers = {
  // Get KPI calculations
  getKPIs() {
    const totalProperties = AppData.properties.length
    const activeListings = AppData.properties.filter((p) => p.status === "occupied").length
    const pendingMaintenance = AppData.maintenanceRequests.filter((r) => r.status === "pending").length
    const monthlyRevenue = AppData.properties.reduce((sum, p) => {
      return sum + (p.status === "occupied" ? p.rent : 0)
    }, 0)

    return {
      totalProperties,
      activeListings,
      pendingMaintenance,
      monthlyRevenue,
      occupancyRate: totalProperties > 0 ? Math.round((activeListings / totalProperties) * 100) : 0,
    }
  },

  // Get recent items
  getRecentItems(type, limit = 3) {
    const data = AppData[type] || []
    return data.slice(0, limit)
  },

  // Filter data by status
  filterByStatus(type, status) {
    const data = AppData[type] || []
    return data.filter((item) => item.status === status)
  },

  // Add new item
  addItem(type, item) {
    if (AppData[type]) {
      const newId = Math.max(...AppData[type].map((i) => i.id || 0)) + 1
      item.id = newId
      AppData[type].unshift(item)
      return item
    }
    return null
  },

  // Update item
  updateItem(type, id, updates) {
    if (AppData[type]) {
      const index = AppData[type].findIndex((item) => item.id === id)
      if (index !== -1) {
        AppData[type][index] = { ...AppData[type][index], ...updates }
        return AppData[type][index]
      }
    }
    return null
  },

  // Delete item
  deleteItem(type, id) {
    if (AppData[type]) {
      const index = AppData[type].findIndex((item) => item.id === id)
      if (index !== -1) {
        return AppData[type].splice(index, 1)[0]
      }
    }
    return null
  },
}
