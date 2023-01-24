import { writable } from 'svelte/store';

export const edges = writable([]);
export const vertices = writable([]);
export const faces = writable([]);
export const vertexSize = writable(0.15);
export const edgeThickness = writable(0.05);
