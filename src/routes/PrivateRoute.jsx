import { Navigate, Outlet } from 'react-router-dom'
import { auth } from '../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function PrivateRoute() {
  const [user, loading] = useAuthState(auth)

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/" />

  return <Outlet />
}