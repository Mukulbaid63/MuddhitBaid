import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const FooterWaveSvg = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1440 320"
		style={{ position: 'fixed', bottom: '0', width: '100vw', zIndex: 0 }}
	>
			<path
				fill="#000000"
				fill-opacity="0.8"
				d="M0,128L0,256L1440,256L1440,320L0,320L0,320Z"
			></path>
	</svg>
);

const FooterWaveIcon = (props: Partial<CustomIconComponentProps>) => (
	<Icon component={FooterWaveSvg} {...props} />
);

export { FooterWaveIcon };
