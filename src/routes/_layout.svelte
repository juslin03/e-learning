<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import Main from "../components/Main.svelte";

  export let segment;
</script>

<Nav {segment} />

<main class="pt-12 md:pt-8 mb-6">
  <slot />
</main>
<Footer />
