import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// viewer settings
export const autoRotate = writable(
	browser ? JSON.parse(window.localStorage.getItem('autoRotate')) ?? true : true
);
autoRotate.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('autoRotate', value);
	}
});

// dome settings
export const vertexSize = writable(0.15);
export const edgeThickness = writable(0.05);

// dome data
export const edges = writable([]);
export const vertices = writable([]);
export const faces = writable([]);
