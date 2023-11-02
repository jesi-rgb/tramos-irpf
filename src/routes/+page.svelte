<script>
	import StackedBar from '../lib/components/StackedBar.svelte';
	import TramosChart from '../lib/components/TramosChart.svelte';

	let salary = 20000;
</script>

<main class="max-w-2xl mx-auto">
	<h1 class="font-bold text-center text-4xl mb-20">Tramos IRPF</h1>

	<div class="mx-auto w-fit flex flex-col">
		<label for="salary"
			><input
				type="number"
				bind:value={salary}
				class="input input-bordered"
				placeholder="Your anual salary"
			/></label
		>

		<label for="salaryRange ">
			<input
				type="range"
				class="input w-full"
				min="5000"
				max="1000000"
				bind:value={salary}
				name="salaryRange"
			/>
		</label>
	</div>

	<div class="divider" />

	<div class="text-2xl">
		Your salary:
		{#if salary != undefined && salary != null}
			<span class="font-bold tabular-nums">
				{salary.toLocaleString('es-ES', { maximumFractionDigits: 2 })}€
			</span>
		{/if}
	</div>
</main>
<TramosChart {salary} />
<!-- <StackedBar /> -->
