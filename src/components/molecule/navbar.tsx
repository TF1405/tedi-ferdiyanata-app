import React from 'react';
import NavbarImage from '../../../public/image/navbarImage';

const Navbar = () => {
	return (
		<div className='relative w-full'>
			<div className='absolute top-0 left-1/2 transform -translate-x-1/2 -z-10'>
				<NavbarImage width='850' height='auto' />
			</div>
			<div className='container w-1/4 mx-auto'>
				<div className='flex justify-between items-center px-6 py-6 h-full'>
					<div className='text-black font-bold text-lg'>Tedi</div>
					<div>
						<div className='text-gray-600 flex space-x-12'>
							<a href='#'>Home</a>
							<a href='#'>About Me</a>
							<a href='#'>Contact</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
