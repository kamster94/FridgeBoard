<script lang="ts">
  import { IconEnum } from './_enums';

  import MdMenu from 'svelte-icons/md/MdMenu.svelte';
  import MdSearch from 'svelte-icons/md/MdSearch.svelte';
  import MdNotifications from 'svelte-icons/md/MdNotifications.svelte';
  import MdHome from 'svelte-icons/md/MdHome.svelte';
  import MdHelp from 'svelte-icons/md/MdHelp.svelte';

  export let icon: IconEnum;
</script>

<div class="icon">
  {#if icon === IconEnum.Menu}
    <MdMenu />
  {:else if icon === IconEnum.Search}
    <MdSearch />
  {:else if icon === IconEnum.Notification}
    <MdNotifications />
  {:else if icon === IconEnum.Home}
    <MdHome />
  {:else if icon === IconEnum.Help}
    <MdHelp />
  {/if}
</div>
