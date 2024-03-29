export interface SettingsParameters {
	[index: string]: {
		title: string;
		min: number;
		max: number;
		step: number;
	};
}

export interface SettingsValues {
	[index: string]: number;
}

export interface Control {
	id: string;
	title: string;
	min: number;
	max: number;
	step: number;
}

export type ControlList = Array<Control>;

export const makeControlList = function (settingsParameters: SettingsParameters): ControlList {
	return Object.entries(settingsParameters).map(
		([id, parameters]): Control => ({
			id,
			title: parameters.title,
			min: parameters.min,
			max: parameters.max,
			step: parameters.step
		})
	);
};

export interface ControlOption {
	id: string;
	title: string;
}

export type ControlOptionList = Array<ControlOption>;
