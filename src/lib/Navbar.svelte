<!--suppress XmlInvalidId -->
<script lang="ts">
  import { page } from '$app/stores';

  import { pages } from './_pages';
  import { IconEnum } from './_enums.ts';

  import Icon from './Icon.svelte';

  let pagePath = $page.url.pathname;

  function getPageTitle() {
    return pages.find((page) => page.href === pagePath).label;
  }
</script>

<header class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="flex flex-col items-center justify-center drawer-content">
      <label for="nav-drawer" class="btn btn-square btn-ghost">
        <Icon icon={IconEnum.Menu} />
      </label>
    </div>
  </div>
  <div class="navbar-center">
    <h1>{getPageTitle()}</h1>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost btn-circle">
      <Icon icon={IconEnum.Search} />
    </button>
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <Icon icon={IconEnum.Notification} />
        <span class="badge badge-xs badge-primary indicator-item" />
      </div>
    </button>
  </div>
</header>
