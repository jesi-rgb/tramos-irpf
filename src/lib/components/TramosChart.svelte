<script>
	import { tramosDict, calculatePercentajeValue } from '$lib/utils.js';
	export let salary;
	$: tramos = calculatePercentajeValue(salary);

	let defaultMax = 100000;
	$: maxTramos = defaultMax > salary ? defaultMax : salary;

	let rectHeight = 50;
</script>

<div class="w-[95%] mx-auto mt-10">
	<svg class="w-full border border-dashed border-secondary" height="300px">
		<defs
			><linearGradient id="bw">
				<stop offset="0.7" stop-color="white" />
				<stop offset="1" stop-color="black" />
			</linearGradient>
			<mask id="0">
				<rect
					width="{(Object.keys(tramosDict)[0] / maxTramos) * 100}%"
					x="0"
					height="100%"
					fill="url(#bw)"
				/>
			</mask>
			{#each Object.keys(tramosDict) as tramo, i}
				<mask id={i}>
					<rect
						width="{((tramo - Object.keys(tramosDict)[i - 1]) / maxTramos) * 100}%"
						x="{(Object.keys(tramosDict)[i - 1] / maxTramos) * 100}%"
						y="0"
						height="100%"
						fill="url(#bw)"
					/>
				</mask>
			{/each}
			<mask id="salary-mask">
				<rect
					width="{(salary / maxTramos) * 100}%"
					stroke-width="1"
					fill="white"
					x="0"
					y="{(100 - rectHeight) / 2}%"
				/>
			</mask>
		</defs>

		<!-- actual colored rects -->
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
					x="{(Object.keys(tramosDict)[i - 1] / maxTramos) * 100}%"
					y="{(100 - rectHeight) / 2}%"
					height="{rectHeight}%"
				/>
			{/each}
		</g>

		<!-- salary -->
		<g>
			<rect
				width="{(salary / maxTramos) * 100}%"
				class="fill-accent stroke-base-content mix-blend-lighten"
				stroke-width="1"
				x="0"
				height="{rectHeight}%"
				y="{(100 - rectHeight) / 2}%"
			/>
		</g>

		<g>
			{#each Object.keys(tramosDict) as tramo, i}
				<text
					y="50%"
					x="{(Object.keys(tramosDict)[i - 1] / maxTramos) * 100}%"
					dx="10"
					font-size="30"
					dominant-baseline="middle"
					mask="url(#{i})"
					class="fill-primary-content z-10 tabular-nums">{tramosDict[tramo] * 100}%</text
				>
			{/each}
		</g>

		<g>
			{#each Object.keys(tramosDict) as tramo, i}
				<text
					font-size="16"
					y="{(100 + rectHeight) / 2 + 10}%"
					class="fill-base-content"
					mask="url(#{i + 1})"
					x="{(Object.keys(tramosDict)[i] / maxTramos) * 100}%"
				>
					{tramo.toLocaleString('es-ES', { maximumFractionDigits: 2 })}€
				</text>
			{/each}
		</g>

		<g>
			{#each tramos as t, i}
				<text
					font-size="16"
					y="15%"
					class="fill-base-content tabular-nums font-bold text-xl"
					mask="url(#{i})"
					x="{(Object.keys(tramosDict)[i - 1] / maxTramos) * 100}%"
					>{t.toLocaleString('es-ES', { maximumFractionDigits: 2 })}€</text
				>
			{/each}
		</g>
	</svg>
</div>
