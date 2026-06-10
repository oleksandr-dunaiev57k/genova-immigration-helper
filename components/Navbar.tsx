import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">🇮🇹</span>
          <div>
            <div className="font-bold text-gray-900 text-lg leading-tight">Genova Helper</div>
            <div className="text-xs text-gray-400">для своих</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/documents" className="hover:text-orange-500 transition-colors">Документы</Link>
          <Link href="/institutions" className="hover:text-orange-500 transition-colors">Учреждения</Link>
          <Link href="/faq" className="hover:text-orange-500 transition-colors">FAQ</Link>
          <Link href="/chat" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
            💬 Спросить
          </Link>
        </nav>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <button className="px-2 py-1 rounded-full bg-orange-100 text-orange-600 font-medium">RU</button>
          <button className="px-2 py-1 rounded-full hover:bg-gray-100">UA</button>
          <button className="px-2 py-1 rounded-full hover:bg-gray-100">EN</button>
          <button className="px-2 py-1 rounded-full hover:bg-gray-100">IT</button>
        </div>
      </div>
    </header>
  );
}
