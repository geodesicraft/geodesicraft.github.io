import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultViewerSettings = {
	autoRotate: true
};

let mergedViewerSettings = {};

if (browser) {
	const localViewerSettings = JSON.parse(window.localStorage.getItem('viewerSettings'));
	if (localViewerSettings !== null) {
		for (const [key, value] of Object.entries(defaultViewerSettings)) {
			if (localViewerSettings[key] === undefined) {
				mergedViewerSettings[key] = value;
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

export const domeSettings = writable({
	vertexSize: 0.15,
	edgeThickness: 0.05
});

export const domeData = writable({
	edges: [],
	vertices: [],
	faces: []
});
