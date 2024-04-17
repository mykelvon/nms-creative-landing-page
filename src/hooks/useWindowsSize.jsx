import { useTheme } from '@mui/material';
import { useState, useEffect } from 'react';

const useWindowResize = () => {
	const [width, setWidth] = useState(window?.innerWidth ? window.innerWidth : 0);
	const [height, setHeight] = useState(window?.innerHeight ? window.innerHeight : 0);
	const [tablesHeight, setTablesHeight] = useState(parseInt(height - 550) < 90 ? 500 : parseInt(height - 550));

	const theme = useTheme();

	const listener = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
		setTablesHeight(window.innerHeight - parseInt(theme.props.topBarHeight) - parseInt(theme.spacing(40)));
	};

	useEffect(() => {
		if (window) {
			window.addEventListener('resize', listener);
			return () => {
				window.removeEventListener('resize', listener);
			};
		}
	}, []);

	return {
		width,
		height,
		tablesHeight,
	};
};

export default useWindowResize;