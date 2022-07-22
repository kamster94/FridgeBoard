<script>
  import '../app.css';
  import { pages } from '../lib/_pages';
  import Navbar from '$lib/Navbar.svelte';
  import Drawer from '../lib/Drawer.svelte';
  import Footer from '../lib/Footer.svelte';
</script>

<div class="drawer h-screen">
  <input id="nav-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col h-screen justify-between">
    <Navbar />

    <main class="container mx-auto mb-auto h-10 ">
      <slot />
    </main>

    <Footer />
  </div>
  <div class="drawer-side">
    <label for="nav-drawer" class="drawer-overlay" />
    <Drawer navigationItems={pages} />
  </div>
</div>
