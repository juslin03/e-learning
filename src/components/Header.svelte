<script>
  import Courses from "./Courses/Courses.svelte";
  import Subscribe from "./Contact/Subscribe.svelte";
</script>

<div style="padding-left: 15px; padding-right: 15px;" class="pt-6 lg:pt-20">
  <div
    class="container px-4 mx-auto flex flex-wrap flex-col lg:flex-row
    items-center lg:items-start">
    <div
      class="xl:pr-6 flex flex-col w-full lg:w-1/2 justify-center items-start
      lg:text-left">
      <h1
        style="font-size: 4rem;"
        class="mb-4 text-5xl lg:text-7xl text-gray-500 font-bold tracking-wide
        leading-tight font-ubuntu">
        Eyalo
        <span class="text-orange-500">Academy</span>
      </h1>
      <p class="text-2xl text-indigo-200 leading-normal tracking-wide">
        Partout, à tout moment, amuses-toi !
      </p>
      <form
        action=""
        method="POST"
        class="relative my-6 w-full flex flex-col text-lg md:text-xl z-10">
        <div class="flex flex-col md:flex-row">
          <input
            type="text"
            name="course"
            required="required"
            placeholder="Que recherches-tu ?"
            class="mb-3 md:mr-3 py-2 md:py-5 px-4 md:px-6 md:text-xl flex-1
            form-input bg-indigo-900 text-white rounded-full border-indigo-800
            shadow-inner" />
          <button
            type="submit"
            class="mb-3 flex-shrink-0 bg-orange-500 hover:bg-orange-600
            text-base md:text-xl text-orange-100 font-semibold rounded-full py-2
            md:py-3 px-5 md:px-8 shadow hover:shadow-lg transition-colors
            ease-in-out duration-200">
            Recherche
          </button>
        </div>
      </form>
    </div>
    <div
      class="w-full flex-1 z-10 inline-flex items-end transform
      lg:translate-x-32 lg:scale-125">
      <img
        style="height: 50%;"
        alt=""
        src="assets/online_learning.svg"
        class="w-96 rounded" />
    </div>
  </div>
</div>
