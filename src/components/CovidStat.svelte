<script>
  export let totStats;
</script>

<style>
  .columns {
    border: solid 1px black;
  }
</style>

<div class="section">
  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Cases: {totStats.cases}</h2>
      <h2 class="is-3 column">Deaths: {totStats.deaths}</h2>
      <h2 class="is-3 column">Recovered: {totStats.recovered}</h2>
      <h2 class="is-3 column">Updated: {totStats.updated}</h2>
    </div>
  </div>
</div>

<div class="section">
  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Tested: {totStats.tested}</h2>
      <h2 class="is-3 column">Hospitalized: {totStats.hospitalized}</h2>
      <h2 class="is-3 column">Total in ICU: {totStats.icu}</h2>
      <h2 class="is-3 column">Total on Ventilator: {totStats.ventilators}</h2>
    </div>
  </div>
</div>
