<script lang="ts">
  export let title: string;
</script>

<div class="card w-94 bg-base-200 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <slot />
  </div>
</div>
