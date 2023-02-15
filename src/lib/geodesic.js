import { domeData } from '$lib/stores.js';
import Icosahedron from '$lib/icosahedron';

export function createGeodesic() {
	let icosahedron = new Icosahedron();

	domeData.set(icosahedron);
}
