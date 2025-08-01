import { useSelector } from 'react-redux'
import { Calendar, Users, CheckCircle, XCircle } from 'lucide-react'

const AdminLeavePage = () => {
  const { leaves } = useSelector((state) => state.leave)

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800'
      case 'rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-yellow-100 text-yellow-800'
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'annual':
        return 'bg-blue-100 text-blue-800'
      case 'sick':
        return 'bg-red-100 text-red-800'
      case 'personal':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleApprove = (id) => {
    // In a real app, this would dispatch an action to approve the leave
    console.log('Approve leave:', id)
  }

  const handleReject = (id) => {
    // In a real app, this would dispatch an action to reject the leave
    console.log('Reject leave:', id)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Leave Management</h1>
          <p className="text-gray-600">Review and approve employee leave requests</p>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-500">
            {leaves.length} requests
          </span>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">All Leave Requests</h2>
          <div className="flex space-x-2">
            <select className="input-field w-auto">
              <option>All Status</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
            <select className="input-field w-auto">
              <option>All Types</option>
              <option>Annual</option>
              <option>Sick</option>
              <option>Personal</option>
            </select>
          </div>
        </div>

        {leaves.length === 0 ? (
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No leave requests to review</p>
            <p className="text-sm text-gray-400">Employees will appear here when they submit leave requests</p>
          </div>
        ) : (
          <div className="space-y-4">
            {leaves.map((leave) => (
              <div
                key={leave.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Calendar className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        {leave.reason}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Submitted: {new Date(leave.submittedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(leave.type)}`}>
                      {leave.type}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(leave.status)}`}>
                      {leave.status}
                    </span>
                    
                    {leave.status === 'pending' && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleApprove(leave.id)}
                          className="p-1 text-green-600 hover:text-green-800 hover:bg-green-50 rounded"
                          title="Approve"
                        >
                          <CheckCircle className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleReject(leave.id)}
                          className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                          title="Reject"
                        >
                          <XCircle className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminLeavePage 