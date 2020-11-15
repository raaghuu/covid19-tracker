<script>
  import CovidChart from '../components/CovidChart.svelte';
  import CovidStat from '../components/CovidStat.svelte';
  import TableContainer from '../components/TableContainer.svelte';
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
