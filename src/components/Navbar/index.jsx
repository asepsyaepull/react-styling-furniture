import React, { useState, useEffect } from 'react';

const Navbar = ({ logo, textLogo, navList, icons }) => {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <nav className={`fixed w-full z-10 ${scrolled ? 'bg-neutral-900 bg-opacity-50 backdrop-blur-lg' : 'bg-transparent'} ${scrolled ? 'drop-shadow-md' : 'drop-shadow-none'}`}>
            <div className="flex container mx-auto max-w-screen-xl justify-between items-center py-6">
                <div className={`flex justify-center item-center gap-4 text-white text-lg font-bold`}>
                    <img
                        src={logo}
                        alt="logo"
                        className="w-8 h-8"
                    />
                    <h2 className={`flex text-xl items-center font-semibold font-mono`}>{textLogo}</h2>
                </div>
                <div className="flex gap-20 items-center justify-center">
                    {navList.map((item, index) => (
                        <a key={index} href={item.link} className={`text-white hover:text-orange-400`}>{item.title}</a>
                    ))}
                </div>
                <div className={`flex w-[124px] h-fit justify-center items-center text-xl text-white hover:text-orange-400`}>
                    {icons.length > 0 && (
                        <div>
                            {icons[0].icon}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;