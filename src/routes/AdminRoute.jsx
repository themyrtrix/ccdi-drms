import { Navigate, Outlet } from 'react-router-dom'
import { auth, db } from '../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const ADMIN_ROLES = ['registrar', 'accounting', 'cashier']

export default function AdminRoute() {
  const [user, loading] = useAuthState(auth)
  const [role, setRole] = useState(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    if (!user) { setChecking(false); return }
    getDoc(doc(db, 'users', user.uid)).then(snap => {
      setRole(snap.data()?.role)
      setChecking(false)
    })
  }, [user])

  if (loading || checking) return <div>Loading...</div>
  if (!user) return <Navigate to="/" />
  if (!ADMIN_ROLES.includes(role)) return <Navigate to="/dashboard" />

  return <Outlet />
}