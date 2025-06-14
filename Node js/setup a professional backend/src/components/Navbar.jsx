// ... existing code ...
<header className="fixed w-full bg-black text-white shadow z-50 border-b border-white">
  <Container>
    <div className="flex items-center justify-between h-16">
      <Link to="/" className="flex-shrink-0">
        <Logo className="h-8 w-32" />
      </Link>
      {/* Desktop Search */}
      <div className="hidden sm:flex flex-1 max-w-md mx-4 relative">
        <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-700 bg-black text-white focus:outline-none focus:border-white text-sm"
        />
      </div>
      {/* Desktop Menu */}
      <ul className="hidden sm:flex items-center space-x-2 md:space-x-4">
        {navItems.map(
          (item) =>
            item.active && (
              <li key={item.name}>
                <Link to={item.slug} className="px-3 py-2 md:px-4 rounded-full hover:bg-gray-800 transition text-sm md:text-base">
                  {item.name}
                </Link>
              </li>
            )
        )}
        {authStatus && (
          <li>
            <LogoutBtn />
          </li>
        )}
      </ul>
      {/* Mobile Search Button */}
      <div className="sm:hidden flex items-center">
        <button onClick={() => setSearch((prev) => !prev)} className="p-2 rounded-full hover:bg-gray-800 transition">
          {search ? <HiX size={24} /> : <HiOutlineSearch size={24} />}
        </button>
      </div>
      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="p-2 rounded-full hover:bg-gray-800 transition"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
    </div>
    {/* Mobile Search Overlay */}
    {search && (
      <div className="sm:hidden fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <div className="relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search..."
              autoFocus
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-700 bg-gray-900 text-white focus:outline-none focus:border-white text-base"
            />
            <button
              onClick={() => setSearch(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-800 rounded-full"
            >
              <HiX size={24} />
            </button>
          </div>
        </div>
      </div>
    )}
    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <nav className="sm:hidden fixed inset-0 bg-black bg-opacity-95 z-40">
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-full"
          >
            <HiX size={24} />
          </button>
        </div>
        <ul className="p-4 space-y-4">
          {navItems.map(
            (item) =>
              item.active && (
                <li key={item.name}>
                  <Link
                    to={item.slug}
                    className="block px-4 py-2 hover:bg-gray-800 rounded-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              )
          )}
          {authStatus && <LogoutBtn />}
        </ul>
      </nav>
    )}
  </Container>
</header>
// ... existing code ...