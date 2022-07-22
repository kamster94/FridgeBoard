<script lang="ts">
  import { page } from '$app/stores';

  import { Link } from './_types';

  import Icon from './Icon.svelte';

  export let navigationItems: Link[];
</script>

<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
  {#each navigationItems as navigationItem}
    <li class:btn-accent={$page.url.pathname === navigationItem.href}>
      <a href={navigationItem.href}>
        {#if navigationItem.icon}
          <Icon icon={navigationItem.icon} />
        {/if}
        {navigationItem.label}
      </a>
    </li>
  {/each}
</ul>
