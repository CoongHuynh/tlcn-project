import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RoleBasedRoute = ({ children, allowedRoles = [], fallbackPath = '/dashboard/timesheet' }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth)

  // Nếu chưa đăng nhập, chuyển về login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  // Nếu không có user, chuyển về fallback
  if (!user) {
    return <Navigate to={fallbackPath} replace />
  }

  // Nếu có quy định roles và user không có role phù hợp
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to={fallbackPath} replace />
  }

  return children
}

export default RoleBasedRoute 