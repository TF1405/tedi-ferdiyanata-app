import React from 'react';
import { NavbarImageProps } from './types/navbarImage';

const NavbarImage: React.FC<NavbarImageProps> = ({
	width = '100%',
	height = 'auto',
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 796 130'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_d_91_94)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M745.044 0H50C64.2681 0 76.1347 10.3273 82.305 23.1921C98.4225 56.7964 132.762 80 172.522 80H622.522C662.281 80 696.621 56.7964 712.739 23.1921C718.909 10.3273 730.776 0 745.044 0Z'
					fill='white'
				/>
			</g>
			<defs>
				<filter
					id='filter0_d_91_94'
					x='0'
					y='-50'
					width='795.044'
					height='180'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='25' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_91_94'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_91_94'
						result='shape'
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default NavbarImage;
