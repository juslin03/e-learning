<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import Main from "../components/Main.svelte";

  export let segment;
</script>

<Nav {segment} />

<hr class="my-8 border-b-0 border-gray-200" />
<main class="pt-12 md:pt-8">
  <section
    id="reserve-invite"
    class="container mx-auto text-center py-6 lg:mb-12">

    <div class="w-full mb-2 lg:mb-4">
      <div class="h-1 mx-auto bg-gray w-1/6 opacity-25 my-0 py-0 rounded-t" />
    </div>
    <slot />

  </section>
</main>
<Footer />
