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
<h1 class="mb-4 text-center">Inscrivez-vous en quelques clics :)</h1>
<section
  style="width: 50%;"
  class="flex items-center mx-auto px-4 md:px-8 bg-white md:shadow-2xl rounded
  p-3 md:p-12">
  <form class="container mx-auto px-4 mb-5 md:px-8 w-full max-w-sm">
    <div class="flex items-center border-b-2 border-teal-500 py-2 mb-2">
      <input
        class="md:py-4 appearance-none bg-transparent border-none w-full text-gray-700
        mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Nom complet"
        aria-label="Nom complet" />
    </div>
    <div class="flex items-center border-b-2 border-teal-500 py-2 mb-2">
      <input
        class="md:py-4 appearance-none bg-transparent border-none w-full
        text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="email"
        placeholder="Adresse email"
        aria-label="Adresse email" />
    </div>
    <div class="flex items-center border-b-2 border-teal-500 py-2">
      <input
        class="md:py-4 appearance-none bg-transparent border-none w-full
        text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="password"
        placeholder="Nouveau mot de passe"
        aria-label="Nouveau mot de passe" />
    </div>
    <center>
      <Button classes="rounded-full px-3 py-4 mt-3" color="alert" dark rounded>
        INSCRIPTION
      </Button>
    </center>

    <!-- <Button
      classes="rounded-full px-3 py-4 mt-3 mt-12 md:py-2 relative p-2
      text-gray-600 text-sm relative block md:py-2 focus:outline-none text-center p-3"
      color="white"
      dark
      rounded>
      Déjà inscrit ?
    </Button> -->
    <a
      style="width: 10rem"
      class="shadow-md mt-12 md:py-2 relative p-2 hover:shadow-lg block mx-auto
      my-5 focus:outline-none hover:bg-white border-white
      hover:border-white text-sm text-center border-4 text-gray-600 py-2 px-2
      rounded-full"
      href="auth/signin">
      Déjà inscrit ?
    </a>
  </form>
</section>
