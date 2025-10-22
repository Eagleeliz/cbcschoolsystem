import React from "react";

const Overview: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Example card 1 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold mb-2">Total Users</h4>
          <p className="text-3xl font-bold text-blue-600">1,245</p>
        </div>

        {/* Example card 2 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold mb-2">Active Sessions</h4>
          <p className="text-3xl font-bold text-green-600">358</p>
        </div>

        {/* Example card 3 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold mb-2">Pending Requests</h4>
          <p className="text-3xl font-bold text-orange-500">42</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-3">
          <li>✅ New user registered</li>
          <li>📦 Order #12345 processed</li>
          <li>💬 New comment added</li>
        </ul>
      </div>
    </>
  );
};

export default Overview;
