<script context="module">
  import requests from '../data/requests.js';
  export async function preload() {
    try {
      const totStats = await requests.stats();

      return { totStats };
    } catch (error) {}
  }
</script>

<script>
  import CovidChart from '../components/CovidChart.svelte';
  import CovidStat from '../components/CovidStat.svelte';
  import TableContainer from '../components/TableContainer.svelte';

  export let totStats;
  console.log(totStats, 'totStats');
</script>

<svelte:head>
  <title>Covid-19 Tracker</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid-19 Tracker</h1>
  </div>
</div>
<CovidStat />
<CovidChart />
<TableContainer />
