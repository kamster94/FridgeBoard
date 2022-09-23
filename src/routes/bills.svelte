<script lang="ts">
  import Card from '$lib/Card.svelte';
</script>

<div class="grid gap-4">
  <Card title="First">Test</Card>
  <Card title={'Second'}>Test test</Card>
  <Card title={'Third'}>Test test test</Card>
  <Card title={'Fourth'}>Test test test test</Card>
  <Card title={'Fifth'}>Another test</Card>
  <Card title={'Sixth'}>Another another test</Card>
  <Card title={'Seventh'}>Another another another test</Card>
  <Card title={'Eighth'}>Final test</Card>
</div>

<style>
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
    scroll-padding-right: 1em;
  }
</style>
