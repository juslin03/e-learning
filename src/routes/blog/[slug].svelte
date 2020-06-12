<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1 class="text-lg py-5">{post.title}</h1>

<div class="block w-128 mx-auto">
  <p class="text-grey text-xs mb-3">Written by Mister Juslin</p>
  <h2 class="font-sans font-thin leading-normal mb-4">
    {@html post.slug}
  </h2>

  <p class="text-grey-darkest mb-6 leading-tight">
    {@html post.html}
  </p>

</div>
