export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Landlord Management System</h1>
          <p className="text-lg text-gray-600">University Project - PHP MVC Architecture</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Admin Portal</h3>
            <p className="text-gray-600 mb-4">Manage system settings, users, and overall operations</p>
            <a
              href="/Mvc_V1/public/admin"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Access Admin
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Landlord Portal</h3>
            <p className="text-gray-600 mb-4">Manage properties, tenants, and maintenance requests</p>
            <a
              href="/Mvc_V1/public/landlord"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Access Landlord
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tenant Portal</h3>
            <p className="text-gray-600 mb-4">Submit requests, view payments, and communicate</p>
            <a
              href="/Mvc_V1/public/tenant"
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Access Tenant
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">Built with PHP MVC Architecture | University Project 2024</p>
        </div>
      </div>
    </div>
  )
}
