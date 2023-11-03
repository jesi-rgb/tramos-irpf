<script>
	// import { tweened } from 'svelte/motion';
	// import { cubicOut } from 'svelte/easing';
	import TramosChart from '../lib/components/TramosChart.svelte';
	import { calculatePercentajeValue } from '$lib/utils.js';

	let salary = 30000;

	$: tramos = calculatePercentajeValue(salary);
	$: totalSum = tramos.reduce((partialSum, a) => partialSum + a, 0);
	$: totalSumDisplay = totalSum.toLocaleString('es-ES', {
		maximumFractionDigits: 2,
		minimumFractionDigits: 2
	});
	$: ratioDisplay = ((totalSum / salary) * 100).toLocaleString('es-ES', {
		maximumFractionDigits: 2,
		minimumFractionDigits: 2
	});
</script>

<main class="w-[95%] md:max-w-2xl mx-auto">
	<h1 class="font-bold md:text-center text-6xl mb-5">Tramos IRPF</h1>
	<h3 class="mb-10 md:max-w-sm mx-auto">
		Calcula qué porcentaje habrás de pagar en la declaración de la renta en función de tus ingresos
		anuales siendo autónomo. <br /><br /> Desliza o introduce tus ingresos anuales para ver el desglose
		de gastos.
	</h3>

	<div class="mx-auto w-fit flex flex-col">
		<label for="salary"
			><input
				type="number"
				bind:value={salary}
				class="input input-bordered md:input-lg font-bold text-center tabular-nums md:text-3xl"
				placeholder="Your anual salary"
			/></label
		>

		<label for="salaryRange">
			<input
				type="range"
				class="range range-secondary w-full"
				min="5000"
				max="1000000"
				bind:value={salary}
				name="salaryRange"
			/>
		</label>
	</div>

	<div class="divider" />

	<div class="text-2xl flex items-start justify-between">
		<div>
			Ingresos anuales:
			{#if salary != undefined && salary != null}
				<span class="font-bold tabular-nums">
					{salary.toLocaleString('es-ES', { maximumFractionDigits: 2 })}€
				</span>
			{/if}
		</div>
		<div class="flex flex-col">
			<div class="text-right">
				Total a pagar: <span class="tabular-nums font-bold">{totalSumDisplay}€</span>
			</div>
			<div class="text-right text-base opacity-50">
				Porcentaje del total: <span class="tabular-nums font-bold">{ratioDisplay}%</span>
			</div>
			<div class="text-right text-base opacity-50">
				Restante: <span class="tabular-nums font-bold"
					>{(salary - totalSum).toLocaleString('es-ES', {
						maximumFractionDigits: 2,
						minimumFractionDigits: 2
					})}€</span
				>
			</div>
		</div>
	</div>
</main>
<TramosChart {salary} />

<footer class="w-[95%] md:max-w-2xl mx-auto mt-10">
	<div class="divider" />
	Desarrollado por{' '}<a class="underline text-secondary" href="https://jesirgb.com"
		>Jesús Rascón</a
	>. Maquetado en
	<a class="underline text-secondary" href="https://www.fontshare.com/fonts/amulya">Amulya</a>.
</footer>
