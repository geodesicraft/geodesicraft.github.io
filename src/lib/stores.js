import { writable } from 'svelte/store';
import { browser } from '$app/environment';

//

const viewerSettingsParameters = {
	autoRotate: {
		default: true
	}
};

let mergedViewerSettings = {};
if (browser) {
	const localViewerSettings = JSON.parse(window.localStorage.getItem('viewerSettings'));
	if (localViewerSettings !== null) {
		for (const [key, value] of Object.entries(viewerSettingsParameters)) {
			if (localViewerSettings[key] === undefined) {
				mergedViewerSettings[key] = value.default;
			} else {
				mergedViewerSettings[key] = localViewerSettings[key];
			}
		}
	}
}

export const viewerSettings = writable(mergedViewerSettings);

viewerSettings.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('viewerSettings', JSON.stringify(value));
	}
});

//

const domeSettingsParameters = {
	vertexSize: {
		default: 0.15
	},
	edgeThickness: {
		default: 0.05
	}
};

let mergedDomeSettings = {};
if (browser) {
	const localDomeSettings = JSON.parse(window.localStorage.getItem('domeSettings'));
	if (localDomeSettings !== null) {
		for (const [key, value] of Object.entries(domeSettingsParameters)) {
			if (localDomeSettings[key] === undefined) {
				mergedDomeSettings[key] = value.default;
			} else {
				mergedDomeSettings[key] = localDomeSettings[key];
			}
		}
	}
}

export const domeSettings = writable(mergedDomeSettings);

domeSettings.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('domeSettings', JSON.stringify(value));
	}
});

//

export const domeData = writable({
	edges: [],
	vertices: [],
	faces: []
});
