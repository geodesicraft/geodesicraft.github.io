import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const viewerSettings = writable({
	autoRotate: browser ? JSON.parse(window.localStorage.getItem('autoRotate')) ?? true : true
});

// TODO: loop over all the viewer settings to automatically store in localStorage
// viewerSettings.autoRotate.subscribe((value) => {
// 	if (browser) {
// 		window.localStorage.setItem('autoRotate', value);
// 	}
// });

export const domeSettings = writable({
	vertexSize: 0.15,
	edgeThickness: 0.05
});

export const domeData = writable({
	edges: [],
	vertices: [],
	faces: []
});
