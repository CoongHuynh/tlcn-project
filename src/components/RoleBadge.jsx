const RoleBadge = ({ role }) => {
  const getRoleConfig = (role) => {
    switch (role) {
      case 'admin':
        return {
          label: 'Admin',
          className: 'bg-red-100 text-red-800 border-red-200',
          icon: '👨‍💼'
        }
      case 'manager':
        return {
          label: 'Manager',
          className: 'bg-blue-100 text-blue-800 border-blue-200',
          icon: '👩‍💼'
        }
      case 'employee':
        return {
          label: 'Employee',
          className: 'bg-green-100 text-green-800 border-green-200',
          icon: '👨‍💻'
        }
      default:
        return {
          label: 'Unknown',
          className: 'bg-gray-100 text-gray-800 border-gray-200',
          icon: '❓'
        }
    }
  }

  const config = getRoleConfig(role)

  return (
    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${config.className}`}>
      <span className="mr-1">{config.icon}</span>
      {config.label}
    </div>
  )
}

export default RoleBadge 