import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const localStorageMerge = function (name, parameters) {
	const defaults = Object.fromEntries(
		Object.entries(parameters).map(([key, value]) => [key, value.default])
	);
	if (!browser) return defaults;
	const local = JSON.parse(window.localStorage.getItem(name));
	if (local === null) return defaults;
	let merged = {};
	for (const [key, value] of Object.entries(parameters)) {
		if (local[key] !== undefined) {
			merged[key] = local[key];
		} else {
			merged[key] = defaults[key];
		}
	}
	return merged;
};

const viewerSettingsParameters = {
	autoRotate: {
		default: true
	}
};

const domeSettingsParameters = {
	vertexSize: {
		default: 0.15
	},
	edgeThickness: {
		default: 0.05
	}
};

export const viewerSettings = writable(
	localStorageMerge('viewerSettings', viewerSettingsParameters)
);
viewerSettings.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('viewerSettings', JSON.stringify(value));
	}
});

export const domeSettings = writable(localStorageMerge('domeSettings', domeSettingsParameters));
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
