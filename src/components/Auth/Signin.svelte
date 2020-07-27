<script>
  import { goto } from "@sapper/app";
  import { userLogin } from "../../stores/stores.js";

  let emailForgot = "";

  let email = "",
    password = "";

  const navigateToReset = async () => {
    await goto("auth/forgot");
    // alert('yes')
  };

  let onSignIn = async () => {
    const datas = { email, password };
    $userLogin = { email };
    await console.log($userLogin);
  };

  let onForgotten = async () => {
    if (!emailForgot || emailForgot === "" || emailForgot === undefined) {
      return;
    }
    await alert(emailForgot);
    emailForgot = "";
  };
</script>

<style>
  dialog[open] {
    animation: appear 0.15s cubic-bezier(0, 1.8, 1, 1.8);
  }
  dialog::backdrop {
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.5),
      rgba(54, 54, 54, 0.5)
    );
    backdrop-filter: blur(3px);
  }
  @keyframes appear {
    from {
      opacity: 0;
      transform: translateX(-3rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>

<div class="xl:pr-6 flex justify-center items-start lg:text-left">
  <h2
    class="mb-4 text-5xl lg:text-7xl text-gray-500 font-bold tracking-wide
    leading-tight">
    Eyalo
    <span class="text-orange-500">Academy</span>
  </h2>

</div>
<h1 class="mb-4 text-center">Ravi de vous retrouver :)</h1>
<!-- component -->

<section
  style="width: 50%;"
  class="flex items-center mx-auto px-4 md:px-8 bg-white md:shadow-2xl rounded
  p-3 md:p-12">

  <pre>{JSON.stringify($userLogin, null, 2)}</pre>
  <form
    on:submit|preventDefault={onSignIn}
    class="container mx-auto px-4 my-2 md:px-8 w-full max-w-sm">
    <div class="flex items-center border-b-2 border-teal-500 my-2">
      <input
        class="md:py-4 appearance-none bg-transparent border-none w-full
        text-gray-700 mr-3 mb-2 px-2 leading-tight focus:outline-none"
        type="text"
        bind:value={email}
        placeholder="Adresse email"
        aria-label="Adresse email" />
    </div>
    <div class="flex items-center border-b-2 border-teal-500 my-2">
      <input
        class="md:py-4 appearance-none bg-transparent border-none w-full
        text-gray-700 mr-3 mb-2 px-2 leading-tight focus:outline-none"
        type="password"
        bind:value={password}
        placeholder="Mot de passe"
        aria-label="Mot de passe" />
      <svg
        class="h-4 w-4 cursor-pointer"
        fill="none"
        onclick="document.getElementById('myModal').showModal()"
        id="btn"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <center>
      <button
        class="my-3 flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-base
        md:text-xl text-orange-100 rounded-full py-2 md:py-3 px-5 md:px-8 shadow
        hover:shadow-lg transition-colors ease-in-out duration-200">
        CONNEXION
      </button>
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

<dialog id="myModal" class="h-auto w-11/12 md:w-1/2 p-5 bg-white rounded-md ">
  <div class="flex flex-col w-full h-auto ">
    <!-- Header -->
    <div class="flex w-full h-auto justify-center items-center">
      <div
        class="flex-col w-10/12 h-auto py-3 justify-center items-center text-xl">
        <h1 class="mb-4 text-center">Qu'est-ce qui s'est passé ? :(</h1>
        <!-- <span class="text-center text-xs">Mot de passe oublié ?</span> -->
      </div>
      <div
        onclick="document.getElementById('myModal').close();"
        class="flex w-1/12 h-auto justify-center cursor-pointer font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <!--Header End-->
    </div>
    <!-- Modal Content-->
    <form
      on:submit|preventDefault={onForgotten}
      class="container mx-auto px-4 md:px-8 w-full max-w-sm">
      <div class="flex items-center border-b-2 border-teal-500 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700
          mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          bind:value={emailForgot}
          placeholder="Nom d'utilisateur / adresse email"
          aria-label="Nom d'utilisateur" />
      </div>
      <center>
        <button
          class="my-3 flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-base
          md:text-xl text-orange-100 rounded-full py-2 md:py-3 px-5 md:px-8
          shadow hover:shadow-lg transition-colors ease-in-out duration-200">
          REINITIALISATION
        </button>
      </center>
    </form>
    <!-- End of Modal Content-->

  </div>
</dialog>
