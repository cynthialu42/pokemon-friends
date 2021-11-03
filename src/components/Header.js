import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="headerStyles">
      <Link to="/"><h1>Pokemon Friends</h1></Link>
      <Link to="/favorites"><h3>Favorites</h3></Link>
    </header>
  )
}
