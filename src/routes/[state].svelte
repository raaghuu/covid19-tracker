<script context="module">
  import stateNames from '../data/stateNames.js';

  export async function preload(page) {
    const state = page.params['state'];
    if (stateNames.find((s) => s.abbreviation === state) === undefined) {
      this.error(404, 'State not found');
      return;
    }

    try {
      return { state: page.params['state'] };
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
