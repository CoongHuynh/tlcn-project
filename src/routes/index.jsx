import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage'
import DashboardLayout from '../layouts/DashboardLayout'
import TimesheetPage from '../pages/TimesheetPage'
import LeavePage from '../pages/LeavePage'
import AdminTimesheetPage from '../pages/AdminTimesheetPage'
import AdminLeavePage from '../pages/AdminLeavePage'
import ProtectedRoute from './ProtectedRoute'
import RoleBasedRoute from './RoleBasedRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'timesheet',
        element: <TimesheetPage />,
      },
      {
        path: 'leave',
        element: <LeavePage />,
      },
      {
        path: 'admin/timesheet',
        element: (
          <RoleBasedRoute allowedRoles={['admin', 'manager']}>
            <AdminTimesheetPage />
          </RoleBasedRoute>
        ),
      },
      {
        path: 'admin/leave',
        element: (
          <RoleBasedRoute allowedRoles={['admin', 'manager']}>
            <AdminLeavePage />
          </RoleBasedRoute>
        ),
      },
    ],
  },
])

export default router 