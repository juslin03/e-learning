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
<h1 class="mb-4 text-center">Ravi de vous retrouver :)</h1>
<section
  style="width: 50%;"
  class="flex items-center mx-auto px-4 md:px-8 bg-white md:shadow-2xl rounded
  p-3 md:p-12">
  <form class="container mx-auto px-4 md:px-8 w-full max-w-sm">
    <div class="flex items-center border-b-2 border-teal-500 py-2">
      <input
        class="md:py-4 appearance-none bg-transparent border-none w-full
        text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Adresse email"
        aria-label="Adresse email" />
    </div>
    <div class="flex items-center border-b-2 border-teal-500 py-2">
      <input
        class="md:py-4 appearance-none bg-transparent border-none w-full
        text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none"
        type="password"
        placeholder="Mot de passe"
        aria-label="Mot de passe" />
    </div>
    <div class="flex text-right">
      <a
        class="relative italic text-red-500 underline my-1 float-right text-xs
        text-right"
        href="auth/forgot">
        Mot de passe oublié ?
      </a>
    </div>
    <center>
      <Button classes="rounded-full px-3 py-4 mt-3" color="alert" dark rounded>
        CONNEXION
      </Button>
    </center>
    <div class="line text-center">
      <span class="bg-white block mx-auto my-4 uppercase relative">ou</span>
    </div>
    <a
      style="width: 10rem"
      class="shadow-md md:py-2 mt-12 relative p-2 hover:shadow-lg block mx-auto
      my-5 focus:outline-none hover:bg-white border-white hover:border-white
      text-sm text-center border-4 text-gray-600 py-3 px-2 rounded-full"
      href="auth/signup">
      Pas encore inscrit ?
    </a>
  </form>
</section>
