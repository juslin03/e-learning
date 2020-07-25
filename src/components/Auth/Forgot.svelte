<script>
  import Button from "smelte/src/components/Button";
</script>

<div class="xl:pr-6 flex justify-center items-start lg:text-left">
  <h2
    class="mb-4 text-5xl lg:text-7xl text-gray-500 font-bold tracking-wide
    leading-tight">
    Eyalo
    <span class="text-orange-500">Academy</span>
  </h2>

</div>
<h1 class="mb-4 text-center">Qu'est-ce qui s'est passé ? :(</h1>
<section
  style="width: 50%;"
  class="flex items-center mx-auto px-4 md:px-8 bg-white md:shadow-2xl rounded
  p-3 md:p-12 md:mt-5">
  <form class="container mx-auto px-4 md:px-8 w-full max-w-sm">
    <div class="flex items-center border-b-2 border-teal-500 py-2">
      <input
        class="appearance-none bg-transparent border-none w-full text-gray-700
        mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Nom d'utilisateur / adresse email"
        aria-label="Nom d'utilisateur" />
    </div>
    <center>
      <Button classes="rounded-full px-3 py-4 mt-3" color="alert" dark rounded>
        REINITIALISATION
      </Button>
    </center>
    <a
      style="width: auto"
      class="shadow-md mt-12 relative p-2 hover:shadow-lg block mx-auto my-5
      border-white focus:outline-none hover:bg-white hover:border-white text-sm
      text-center border-4 text-gray-600 py-3 px-2 rounded-full"
      href="auth/signin">
      Retour vers connexion
    </a>
  </form>
</section>
