import React, { useState, useEffect } from 'react';

const Navbar = ({ logo, textLogo, navList, icons }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className={`fixed w-full z-10 ${scrolled ? 'bg-neutral-900 bg-opacity-50 backdrop-blur-lg' : 'bg-transparent'} ${scrolled ? 'drop-shadow-md' : 'drop-shadow-none'}`}>
            <div className="flex container mx-auto max-w-screen-xl justify-between items-center py-6 px-4 md:px-6">
                <div className={`flex justify-center item-center gap-4 text-white text-lg font-bold`}>
                    <img
                        src={logo}
                        alt="logo"
                        className="w-8 h-8"
                    />
                    <h2 className={`flex text-xl items-center font-semibold font-mono`}>{textLogo}</h2>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-10 lg:gap-20 items-center justify-center">
                    {navList.map((item, index) => (
                        <a key={index} href={item.link} className={`text-white hover:text-orange-400 transition-colors`}>{item.title}</a>
                    ))}
                </div>

                <div className={`hidden md:flex w-[124px] h-fit justify-center items-center text-xl text-white hover:text-orange-400 transition-colors`}>
                    {icons.length > 0 && (
                        <div>
                            {icons[0].icon}
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden bg-neutral-900 bg-opacity-95 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="flex flex-col space-y-4">
                        {navList.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="text-white hover:text-orange-400 py-2 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.title}
                            </a>
                        ))}
                        {icons.length > 0 && (
                            <div className="text-white hover:text-orange-400 py-2 transition-colors">
                                {icons[0].icon}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;