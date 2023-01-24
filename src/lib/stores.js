import { writable } from 'svelte/store';

export const edges = writable([]);
export const vertices = writable([]);
export const faces = writable([]);
export const vertexSize = writable(0.15);
