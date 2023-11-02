<script>
	import * as Plot from '@observablehq/plot';
	import * as d3 from 'd3';
	import { tramos } from '$lib/utils.js';

	let div;

	$: if (div) {
		div.append(
			Plot.plot({
				color: { legend: true },
				marks: [Plot.rectX(tramos), Plot.ruleX([0])]
			})
		);
	}
</script>

<div>mierda</div>
<div bind:this={div} />
