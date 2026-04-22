import { Heart, Search, Home } from "lucide-react"
import { Link } from "react-router-dom" // Обязательно импортируем Link

export default function Header() {
    const title = 'КиноПоиск React'
    
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b">
            {/* Логотип / Название */}
            <Link to="/" className="text-xl font-bold text-emerald-600 flex items-center gap-2">
                <Home size={24} />
                <span>{title}</span>
            </Link>

            {/* Навигация */}
            <nav className="flex items-center gap-6">
                <Link to="/" className="flex items-center gap-1 hover:text-emerald-600 transition">
                    <Search size={20} />
                    <span>Поиск</span>
                </Link>
                
                <Link to="/favorites" className="flex items-center gap-1 hover:text-red-500 transition">
                    <Heart size={20} />
                    <span>Избранное</span>
                </Link>
            </nav>
        </header>
    )
}