import React from 'react'
import {Link} from 'react-router-dom'

const userId = 10

export default function HomePage() {
  return (
    <div>
      <h1>Application</h1>

      {/* lo mismo que una etiqueta a, nos evita a refrescar la página */}
      <Link to={`/users/${userId}`}>Usuarios</Link>
      
    </div>
  )
}

