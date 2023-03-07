<script lang="ts">
	import { domeSettings, domeSettingsParameters } from '$lib/scripts/stores';
	import Slider from '$lib/components/Slider.svelte';

	interface Control {
		id: string;
		title: string;
		min: number;
		max: number;
		step: number;
		value: number;
	}

	interface SettingsParameters {
		[index: string]: {
			title: string;
			min: number;
			max: number;
			step: number;
		};
	}

	interface SettingsValues {
		[index: string]: number;
	}

	type ControlList = Array<Control>;

	const makeControlList = function (
		settingsParameters: SettingsParameters,
		settingsValues: SettingsValues
	): ControlList {
		return Object.entries(settingsParameters).map(
			([id, parameters]): Control => ({
				id,
				title: parameters.title,
				min: parameters.min,
				max: parameters.max,
				step: parameters.step,
				value: settingsValues[id]
			})
		);
	};

	let controlList = makeControlList(
		domeSettingsParameters,
		<SettingsValues>(<unknown>$domeSettings)
	);
</script>

<div class="bg-zinc-300 dark:bg-zinc-700 overflow-auto flex flex-col gap-3 p-3">
	{#each controlList as control (control.id)}
		<div class="bg-zinc-400 dark:bg-zinc-800 rounded-lg">
			<Slider
				bind:value={control.value}
				min={control.min}
				max={control.max}
				step={control.step}
				numberClasses="bg-zinc-300 dark:bg-zinc-600"
			>
				{control.title}
			</Slider>
		</div>
	{/each}
</div>
