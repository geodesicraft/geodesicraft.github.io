import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const getDefaults = function (parameters) {
	return Object.fromEntries(Object.entries(parameters).map(([key, value]) => [key, value.default]));
};

const mergeFromLocalStorage = function (name, defaults) {
	if (!browser) return defaults;
	const local = JSON.parse(window.localStorage.getItem(name));
	if (local === null) return defaults;
	let merged = {};
	for (const key of Object.keys(defaults)) {
		if (local[key] !== undefined) {
			merged[key] = local[key];
		} else {
			merged[key] = defaults[key];
		}
	}
	return merged;
};

export const viewerSettingsParameters = {
	axesOverlay: {
		default: false,
		title: 'Axes Overlay',
		icon: 'Axis3d'
	},
	darkMode: {
		default: false,
		title: 'Dark Mode',
		icon: 'Lightbulb'
	},
	autoRotate: {
		default: true,
		title: 'Auto Rotate',
		icon: 'Rotate3d'
	}
};

export const domeSettingsParameters = {
	vertexSize: {
		default: 0.15,
		title: 'Vertex Size',
		min: 0.05,
		max: 1,
		step: '0.001'
	},
	edgeThickness: {
		default: 0.05,
		title: 'Edge Thickness',
		min: 0.01,
		max: 0.5,
		step: 0.01
	}
};

export const viewerSettings = writable(
	mergeFromLocalStorage('viewerSettings', getDefaults(viewerSettingsParameters))
);
viewerSettings.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('viewerSettings', JSON.stringify(value));
	}
});

export const domeSettings = writable(
	mergeFromLocalStorage('domeSettings', getDefaults(domeSettingsParameters))
);
domeSettings.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('domeSettings', JSON.stringify(value));
	}
});

export const domeData = writable({
	edges: [],
	vertices: [],
	faces: []
});
