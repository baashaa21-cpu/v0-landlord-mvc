export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Landlord Management System</h1>
          <p className="text-xl text-gray-600">University Project - Property Management Portal</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Admin Portal</h2>
            <p className="text-gray-600 mb-6">System administration and user management</p>
            <a
              href="/Mvc_V1/public/admin"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Access Admin
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Landlord Portal</h2>
            <p className="text-gray-600 mb-6">Property management and tenant oversight</p>
            <a
              href="/Mvc_V1/public/landlord"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Access Landlord
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Tenant Portal</h2>
            <p className="text-gray-600 mb-6">Tenant services and communication</p>
            <a
              href="/Mvc_V1/public/tenant"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Access Tenant
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
