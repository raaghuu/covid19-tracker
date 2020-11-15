<script context="module">
  export async function preload(page) {
    console.log(page);
    return { state: page.params['state'] };
  }
</script>

<script>
  import CovidChart from '../components/CovidChart.svelte';
  import CovidStat from '../components/CovidStat.svelte';
  import TableContainer from '../components/TableContainer.svelte';

  export let state;
</script>

<svelte:head>
  <title>Covid-19 Tracker - {state}</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid-19 Tracker - {state}</h1>
  </div>
</div>

<CovidStat />
<CovidChart />
