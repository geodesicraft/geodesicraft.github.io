import { writable } from 'svelte/store';

// viewer settings
export const autoRotate = writable(true);

// dome settings
export const vertexSize = writable(0.15);
export const edgeThickness = writable(0.05);

// dome data
export const edges = writable([]);
export const vertices = writable([]);
export const faces = writable([]);
