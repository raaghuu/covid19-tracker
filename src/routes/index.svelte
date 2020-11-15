<script context="module">
  import requests from '../data/requests.js';
  export async function preload() {
    try {
      const totStats = await requests.stats();

      return { totStats };
    } catch (error) {
      this.error(
        500,
        'There was an error in calling the API, please try again in 5 minutes.'
      );
      return;
    }
  }
</script>

<script>
  import CovidChart from '../components/CovidChart.svelte';
  import CovidStat from '../components/CovidStat.svelte';
  import TableContainer from '../components/TableContainer.svelte';
  import About from './about.svelte';

  export let totStats;
</script>

<svelte:head>
  <title>Covid-19 Tracker</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid-19 Tracker</h1>
  </div>
</div>
<CovidStat {...totStats} />
<CovidChart />
<TableContainer />
