// Librairies
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Style
import './Header.css'

const Header = () => {

    // State
    const [activePage, setActivePage] = useState("")

    // useEffect
    useEffect(() => {
        if (window.location.href.includes('nouvelle-recette')) setActivePage(2)
        else setActivePage(1)
    })

    // Render
    return (
        <div className="Header">
            <Link className={`Header-Link ${activePage === 1 ? "Header-Link-Active" : ""}`} to="/" onClick={() => setActivePage(1)}>Recettes</Link>
            <Link className={`Header-Link ${activePage === 2 ? "Header-Link-Active" : ""}`} to="/nouvelle-recette" onClick={() => setActivePage(2)}>Ajouter une recette</Link>
        </div>
    )
}

export default Header