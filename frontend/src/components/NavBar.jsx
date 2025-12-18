import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo/Brand */}
              <div className="flex items-center">
                <Link to="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                  Aafno Blog
                </Link>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-sm text-gray-900 font-medium hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link to="/articles" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Articles
                </Link>
                <Link to="/categories" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Categories
                </Link>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-4">

                {/* Write Button */}
                <Link to="/create" className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full transition-colors">
                  Write
                </Link>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-500 hover:text-gray-900 p-2" aria-label="Menu">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default NavBar