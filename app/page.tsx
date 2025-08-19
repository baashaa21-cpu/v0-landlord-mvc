export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Rentigo Property Management</h1>
          <p className="text-gray-600 mb-8">
            Welcome to the Rentigo property management system. Choose your portal below.
          </p>

          <div className="space-y-4">
            <a
              href="/Mvc_V1/public"
              className="block w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Access Main Application
            </a>

            <div className="grid grid-cols-1 gap-3 mt-6">
              <a
                href="/Mvc_V1/public/admin"
                className="block w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm"
              >
                Admin Portal
              </a>
              <a
                href="/Mvc_V1/public/landlord"
                className="block w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm"
              >
                Landlord Portal
              </a>
              <a
                href="/Mvc_V1/public/tenant"
                className="block w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors text-sm"
              >
                Tenant Portal
              </a>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>PHP MVC Architecture | University Project</p>
          </div>
        </div>
      </div>
    </div>
  )
}
