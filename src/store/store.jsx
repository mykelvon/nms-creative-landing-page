import { includes } from 'lodash';
import { createStore, createHook, createSubscriber } from 'react-sweet-state';

const Store = createStore({
	initialState: {
		userInfo: [],
		userPermissions: [],
		contentBoxHeight: 670,
		contentBoxWidth: 1254,
		role: '',
		loaderState: false,
		showTransition: false,
		tablesHeight: 600,
		tablesWidth: 500,
		desktopMode: true,
		theme: 'light',
		drawerMode: 'open',
		currentBreakPoint: 'desktop',
	},
	actions: {
		hasPermission: (permission) => ({ getState }) => {
			return includes(getState().userPermissions, permission);
		},
		setCurrentBreakPoint: (breakpoint) => ({setState}) => (
			setState({
				currentBreakPoint: breakpoint
			})
		),
		setContentBoxHeight: (newHeight = 600) => ({ setState }) => (
			setState({
				contentBoxHeight: newHeight
			})),
		setContentBoxWidth: (newWidth) => ({ setState }) =>
			(
				setState({
					contentBoxWidth: newWidth,
				})
			),
		setContentTableHeight: (newHeight) => ({ setState }) => (
			setState({
				tablesHeight: newHeight,
			})
		),
		setContentTableWidth: (newWidth) => ({ setState }) => (
			setState({
				tablesWidth: newWidth,
			})
		),
		openLoader: () => ({ setState }) => {
			setState({ loaderState: true });
		},
		closeLoader: () => ({ setState }) => {
			setState({ loaderState: false });
		},
		logoutUser: () => async ({ setState }) => {
			setState({
				userInfo: [],
				userPermissions: [],
				role: ''
			});
		},
		setTheme: (value) => ({ setState }) => {
			setState({ theme: value });
		},
		setUserInfo: (info, permission, role) => ({ setState }) => {
			setState({
				userInfo: info,
				userPermissions: permission,
				role: role
			});
		},
		setTransition: (transi) => ({ setState }) => {
			setState({ showTransition: transi });
		},
		setDesktopMode: (mode) => ({ setState }) => {
			setState({ desktopMode: mode });
		},
		setDrawerMode: (value) => ({ setState }) => {
			setState({ drawerMode: value });
		},
	}
});
const useStore = createHook(Store);

export const getUserInfo = (state) => ({
	userInfo: state.userInfo,
	userPermissions: state.userPermissions,
	role: state.role
});

export const getUIStore = (state) => ({
	loader: state.loaderState,
	theme: state.theme,
	contentBoxHeight: state.contentBoxHeight,
	contentBoxWidth: state.contentBoxWidth,
	tablesHeight: state.tablesHeight,
	tablesWidth: state.tablesWidth,
	desktopMode: state.desktopMode,
	drawerMode: state.drawerMode,
	currentBreakPoint: state.currentBreakPoint
});

export const getTransition = (state) => ({
	showTransition: state.showTransition
});

export const useUIStore = createHook(Store, {
	selector: getUIStore,
});

export const useUserInfo = createHook(Store, {
	selector: getUserInfo,
});

export const useTransition = createHook(Store, {
	selector: getTransition,
});

export const UIStore = createSubscriber(Store, {
	selector: getUIStore,
	displayName: 'UISizing'
});

export const userInfo = createSubscriber(Store, {
	selector: getUserInfo,
	displayName: 'userInfo'
});



export default useStore;