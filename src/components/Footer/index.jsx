import React from 'react'

const Footer = ({ logo, textLogo, footerDesc, footerService, footerList, footerSocial }) => {
    return (
        <footer className='flex flex-col w-full bg-stone-200 py-6'>
            <div className='flex flex-col md:flex-row container mx-auto max-w-screen-xl items-center'>
                {/* Description */}
                <div className='flex flex-col w-full md:w-1/2 gap-4'>
                    <div className='flex gap-4'>
                        <img
                            src={logo}
                            alt="logo"
                            className="w-8 h-8"
                        />
                        <h2 className={`flex text-slate-900 text-xl items-center font-semibold font-mono`}>
                            {textLogo}
                        </h2>
                    </div>
                    <p className='flex text-sm text-gray-700'>
                        {footerDesc.description}
                    </p>
                </div>
                {/* List Menu */}
                <div className="flex flex-col md:flex-row w-full justify-end p-10 gap-8 md:gap-24">
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-md text-orange-400 font-semibold'>
                            Services
                        </h2>
                        <div className='flex flex-col gap-2'>
                            {footerService.map((item, index) => (
                                <a key={index} href={item.link} className={`text-slate-700 hover:text-orange-400`}>
                                    {item.menu}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col w-fit gap-4'>
                        <h2 className='text-md text-orange-400 font-semibold'>
                            Quick Link
                        </h2>
                        <div className='flex flex-col w-fit gap-2'>
                            {footerList.map((item, index) => (
                                <a key={index} href={item.link} className={`text-slate-700 hover:text-orange-400`}>
                                    {item.menu}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col w-fit gap-4'>
                        <h2 className='text-md text-orange-400 font-semibold'>
                            Follow US
                        </h2>
                        <div className='flex flex-col gap-2'>
                            {footerSocial.map((item, index) => (
                                <a key={index} href={item.link} className={`flex items-center text-slate-700 hover:text-orange-400 gap-4`}>
                                    {item.icon}{item.social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center border-t border-gray-300'>
                <div className='flex justify-center items-center gap-4 p-6'>
                    <p className='text-sm text-gray-700'>
                        © 2024 {textLogo}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer