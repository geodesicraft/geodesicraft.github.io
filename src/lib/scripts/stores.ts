import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';
import type Vertex from '$lib/scripts/Vertex';
import type Edge from '$lib/scripts/Edge';
import type Face from '$lib/scripts/Face';

const getLightModePreference = function (defaultValue: boolean) {
	if (!browser) return defaultValue;
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return false;
	} else {
		return true;
	}
};

const getDefaults = function (parameters: SettingsParameters) {
	return Object.fromEntries(Object.entries(parameters).map(([key, value]) => [key, value.default]));
};

const mergeFromLocalStorage = function (name: string, defaults: Record<string, any>) {
	if (!browser) return defaults;
	const localUnsure: string | null = window.localStorage.getItem(name);
	if (localUnsure === null) return defaults;
	const local = JSON.parse(localUnsure);
	let merged: Record<string, any> = {};
	for (const key of Object.keys(defaults)) {
		if (local[key] !== undefined) {
			merged[key] = local[key];
		} else {
			merged[key] = defaults[key];
		}
	}
	return merged;
};

export type SettingsParameters = typeof domeSettingsParameters | typeof viewerSettingsParameters;

export const domeSettingsParameters = {
	subdivisions: {
		default: 1,
		title: 'Subdivisions',
		argument: 'sd',
		min: 0,
		max: 10,
		step: 1
	},
	vertexSize: {
		default: 0.15,
		title: 'Vertex Size',
		argument: 'vs',
		min: 0.05,
		max: 1,
		step: 0.001
	},
	edgeThickness: {
		default: 0.05,
		title: 'Edge Thickness',
		argument: 'et',
		min: 0.01,
		max: 0.5,
		step: 0.01
	}
};

interface DomeSettings {
	subdivisions: number;
	vertexSize: number;
	edgeThickness: number;
}

export const domeSettings = writable(
	mergeFromLocalStorage('domeSettings', getDefaults(domeSettingsParameters))
) as Writable<DomeSettings>;

domeSettings.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('domeSettings', JSON.stringify(value));
	}
});

export const viewerSettingsParameters = {
	autoRotate: {
		default: true
	},
	axisOverlay: {
		default: false
	},
	lightMode: {
		default: getLightModePreference(false)
	},
	selectedDomeSetting: {
		default: Object.keys(domeSettingsParameters)[0]
	}
};

interface ViewerSettings {
	autoRotate: boolean;
	axisOverlay: boolean;
	lightMode: boolean;
	selectedDomeSetting: keyof DomeSettings;
}

export const viewerSettings = writable(
	mergeFromLocalStorage('viewerSettings', getDefaults(viewerSettingsParameters))
) as Writable<ViewerSettings>;

viewerSettings.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('viewerSettings', JSON.stringify(value));
	}
});

interface Shape3D {
	vertices: Array<Vertex>;
	edges: Array<Edge>;
	faces: Array<Face>;
}

export const domeData = writable({}) as Writable<Shape3D>;
