<script>
	export let salary;
	import { tramosDict, calculatePercentajeValue } from '$lib/utils.js';

	Object.keys(tramosDict);

	let defaultMax = 100000;
	$: maxTramos = defaultMax > salary ? defaultMax : salary;

	calculatePercentajeValue(salary);
	let rectHeight = 40;
</script>

<div class="w-[95%] mx-auto mt-10">
	<svg class="w-full border border-dashed border-secondary" height="300px">
		<g>
			<rect
				class="stroke-white fill-primary"
				width="{(Object.keys(tramosDict)[0] / maxTramos) * 100}%"
				x="0"
				y="{(100 - rectHeight) / 2}%"
				height="{rectHeight}%"
			/>
			{#each Object.keys(tramosDict) as tramo, i}
				<rect
					class="stroke-white fill-primary"
					width="{((tramo - Object.keys(tramosDict)[i - 1]) / maxTramos) * 100}%"
					fill-opacity={1 / (i + 1)}
					x="{(Object.keys(tramosDict)[i - 1] / maxTramos) * 100}%"
					y="{(100 - rectHeight) / 2}%"
					height="{rectHeight}%"
				/>
			{/each}
		</g>

		<g>
			{#each Object.keys(tramosDict) as tramo, i}
				<text
					y="50%"
					x="{(Object.keys(tramosDict)[i - 1] / maxTramos) * 100}%"
					dx="10"
					font-size="30"
					dominant-baseline="middle"
					class="fill-primary-content z-10 tabular-nums">{tramosDict[tramo] * 100}%</text
				>
			{/each}
		</g>

		<!-- salary -->
		<g>
			<rect
				width="{(salary / maxTramos) * 100}%"
				class="fill-accent stroke-base-content"
				stroke-width="1"
				x="0"
				y="20%"
				height="30"
			/>
		</g>

		<g>
			{#each Object.keys(tramosDict) as tramo, i}
				<text
					font-size="15"
					y="{(100 + rectHeight) / 2 + 10}%"
					class="fill-base-content"
					x="{(Object.keys(tramosDict)[i] / maxTramos) * 100}%"
				>
					{tramo.toLocaleString('es-ES', { maximumFractionDigits: 2 })}€
				</text>
			{/each}
		</g>
	</svg>
</div>
