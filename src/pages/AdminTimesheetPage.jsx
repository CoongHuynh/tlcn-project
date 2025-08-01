import { useSelector } from 'react-redux'
import { Clock, Users, CheckCircle, XCircle } from 'lucide-react'

const AdminTimesheetPage = () => {
  const { timesheets } = useSelector((state) => state.timesheet)

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

  const handleApprove = (id) => {
    // In a real app, this would dispatch an action to approve the timesheet
    console.log('Approve timesheet:', id)
  }

  const handleReject = (id) => {
    // In a real app, this would dispatch an action to reject the timesheet
    console.log('Reject timesheet:', id)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Timesheet Management</h1>
          <p className="text-gray-600">Review and approve employee timesheets</p>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-500">
            {timesheets.length} entries
          </span>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">All Timesheet Entries</h2>
          <div className="flex space-x-2">
            <select className="input-field w-auto">
              <option>All Status</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>

        {timesheets.length === 0 ? (
          <div className="text-center py-8">
            <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No timesheet entries to review</p>
            <p className="text-sm text-gray-400">Employees will appear here when they submit timesheets</p>
          </div>
        ) : (
          <div className="space-y-4">
            {timesheets.map((entry) => (
              <div
                key={entry.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {new Date(entry.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        {entry.startTime} - {entry.endTime} ({entry.totalHours.toFixed(1)}h)
                      </p>
                      {entry.description && (
                        <p className="text-sm text-gray-600 mt-1">
                          {entry.description}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(entry.status)}`}>
                      {entry.status}
                    </span>
                    
                    {entry.status === 'pending' && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleApprove(entry.id)}
                          className="p-1 text-green-600 hover:text-green-800 hover:bg-green-50 rounded"
                          title="Approve"
                        >
                          <CheckCircle className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleReject(entry.id)}
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

export default AdminTimesheetPage 