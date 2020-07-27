<script>
  import Stars from "./Common/Stars.svelte";
  import Menu from "smelte/src/components/Menu";
  import Button from "smelte/src/components/Button";
  export let segment;
  let hover = false;
  $: isHovered = function() {
    hover = !hover;
  };

  let slug = "informatique";
</script>

<style>
  .dropdown:hover .dropdown-menu {
    display: block;
  }
</style>

<div
  style="z-index: 9999"
  class="shadow-sm sticky py-10 flex bg-white border-b border-gray-200 top-0
  inset-x-0 z-100 h-16 items-center">
  <div class="w-full max-w-screen-xl relative mx-auto px-6">
    <div class="flex items-center -mx-6">
      <div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
        <div class="flex items-center">
          <a href="." class="flex">
            <svg
              class="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55
                9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8
                0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2
                6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45
                9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8
                0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span class="font-semibold text-xl tracking-tight">
              Eyalo Academy
            </span>
          </a>
        </div>
      </div>

      <div class="flex flex-row lg:w-3/4 xl:w-4/5">
        <div class="dropdown">
          <button
            class="text-sm items-center text-gray-500 focus:outline-none
            focus:text-gray-700 py-2 leading-none border rounded text-gray
            border-white hover:border-transparent w-15 flex hover:text-teal-500
            hover:bg-white mt-4 lg:mt-0">
            <svg
              class="fill-current w-4 h-4 mr-1"
              version="1.1"
              id="Shopping_cart"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 20 20"
              enable-background="new 0 0 20 20"
              xml:space="preserve">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6,0H4C3.448,0,3,0.448,3,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V1
                C7,0.448,6.552,0,6,0z
                M11,0H9C8.448,0,8,0.448,8,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V1C12,0.448,11.552,0,11,0z
                M16,0
                h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V1C17,0.448,16.552,0,16,0z
                M6,5H4C3.448,5,3,5.448,3,6v2
                c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V6C7,5.448,6.552,5,6,5z
                M11,5H9C8.448,5,8,5.448,8,6v2c0,0.552,0.448,1,1,1h2
                c0.552,0,1-0.448,1-1V6C12,5.448,11.552,5,11,5z
                M16,5h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V6
                C17,5.448,16.552,5,16,5z
                M6,10H4c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2C7,10.448,6.552,10,6,10z
                M11,10H9c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2C12,10.448,11.552,10,11,10z
                M11,16H9
                c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2C12,16.448,11.552,16,11,16z
                M16,10h-2c-0.552,0-1,0.448-1,1
                v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2C17,10.448,16.552,10,16,10z" />
            </svg>
            &nbsp;Catégories
          </button>
          <div
            style="z-index: 999999;"
            class="dropdown-menu left-1 flex items-start absolute hidden mt-0
            absolute py-2 w-72 bg-white rounded-lg shadow-xl">
            <ul>
              <li class="my-2 hover:bg-teal-100">
                <a href="." class="block px-4 py-2 text-gray-500">
                  <div class="flex items-start px-4 border-b">
                    <img
                      class="w-5 h-5 object-cover mr-4 shadow"
                      src="assets/entypo/cog.svg"
                      alt="avatar" />
                    <div>
                      <div class="flex items-center justify-between">
                        <h2 class="text-xs font-semibold text-gray-500">
                          Sciences Informatiques
                        </h2>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li class="my-2 hover:bg-teal-100">
                <a href="." class="block px-4 py-2 text-gray-500">
                  <div class="flex items-start px-4 border-b">
                    <img
                      class="w-5 h-5 object-cover mr-4 shadow"
                      src="assets/entypo/cog.svg"
                      alt="avatar" />
                    <div>
                      <div class="flex items-center justify-between">
                        <h2 class="text-xs font-semibold text-gray-500">
                          Sciences Informatiques
                        </h2>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full lg:px-3 xl:w-3/4 xl:px-12">
          <div class="relative">
            <span
              class="algolia-autocomplete"
              style="position: relative; display: inline-block; direction: ltr;">
              <input
                id="docsearch"
                class="transition-colors duration-100 ease-in-out
                focus:outline-0 border border-transparent focus:bg-white
                focus:border-gray-300 placeholder-gray-600 rounded-full
                bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none
                leading-normal"
                type="text"
                placeholder="Chercher cours, répétiteur,..."
                autocomplete="off"
                spellcheck="false"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded="false"
                aria-label="search input"
                aria-owns="algolia-autocomplete-listbox-0"
                style="position: relative; vertical-align: top;"
                dir="auto" />
              <pre
                aria-hidden="true"
                style=" position: absolute; visibility: hidden; white-space:
                pre; font-family: Inter var, system-ui, -apple-system,
                BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
                Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe
                UI Symbol, Noto Color Emoji; font-size: 16px; font-style:
                normal; font-variant: normal; font-weight: 400; word-spacing:
                0px; letter-spacing: normal; text-indent: 0px; text-rendering:
                optimizelegibility; text-transform: none; " />
              <span
                class="ds-dropdown-menu"
                style=" position: absolute; top: 100%; z-index: 100; left: 0px;
                right: auto; display: none; "
                role="listbox"
                id="algolia-autocomplete-listbox-0">
                <div class="ds-dataset-1" />
              </span>
            </span>
            <div
              class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex
              items-center">
              <svg
                class="fill-current pointer-events-none text-gray-600 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path
                  d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42
                  1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </div>
          </div>
        </div>

        <button
          type="button"
          id="sidebar-open"
          class="flex px-6 items-center lg:hidden text-gray-500
          focus:outline-none focus:text-gray-700">
          <svg
            class="fill-current w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <button
          type="button"
          id="sidebar-close"
          class="flex px-6 items-center lg:hidden text-gray-500
          focus:outline-none focus:text-gray-700 hidden">
          <svg
            class="fill-current w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414
              1.414L10 11.414l7.071 7.071 1.414-1.414L11.414
              10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
        <div
          style="border-right: 1px solid #dedfe0;"
          class="hidden lg:flex lg:items-center lg:justify-between px-5">
          <div class="flex justify-start items-center text-gray-500">
            <button
              class="text-sm px-4 items-center text-gray-500 focus:outline-none
              focus:text-gray-700 py-2 leading-none border rounded text-gray
              border-white hover:border-transparent hover:text-teal-500
              hover:bg-white mt-4 lg:mt-0">
              Business
            </button>
            <button
              class="text-sm px-6 items-center text-gray-500 focus:outline-none
              focus:text-gray-700 py-2 leading-none border rounded text-gray
              border-white hover:border-transparent hover:text-teal-500
              hover:bg-white mt-4 lg:mt-0">
              Enseigner
            </button>
          </div>
        </div>

        <div class="hidden lg:flex lg:items-center lg:justify-between px-6">
          <div class="flex justify-start items-center relative text-gray-500">
            <div class="dropdown">
              <button
                class="text-sm items-center text-gray-500 focus:outline-none
                focus:text-gray-700 py-1 leading-none border rounded text-gray
                border-white hover:border-transparent w-10 hover:text-teal-500
                hover:bg-white mt-4 lg:mt-0">
                <svg
                  class="fill-current w-4 h-4"
                  version="1.1"
                  id="Shopping_cart"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 20 20"
                  enable-background="new 0 0 20 20"
                  xml:space="preserve">
                  <path
                    d="M13,17c0,1.104,0.894,2,2,2c1.104,0,2-0.896,2-2c0-1.106-0.896-2-2-2C13.894,15,13,15.894,13,17z
                    M3,17c0,1.104,0.895,2,2,2
                    c1.103,0,2-0.896,2-2c0-1.106-0.897-2-2-2C3.895,15,3,15.894,3,17z
                    M6.547,12.172L17.615,9.01C17.826,8.949,18,8.721,18,8.5V3H4V1.4
                    C4,1.18,3.819,1,3.601,1H0.399C0.18,1,0,1.18,0,1.4L0,3h2l1.91,8.957L4,12.9v1.649c0,0.219,0.18,0.4,0.4,0.4H17.6
                    c0.22,0,0.4-0.182,0.4-0.4V13H6.752C5.602,13,5.578,12.449,6.547,12.172z" />
                </svg>
                <span
                  class="badge bg-red-800 rounded-full px-2 py-1 text-center
                  relative text-white text-xs mr-1">
                  1
                </span>
              </button>
              <div
                style="z-index: 999999;"
                class="dropdown-menu right-0 -ml-20 flex items-start hidden mt-0
                absolute py-2 w-128 bg-white rounded-lg shadow-xl">
                <ul>
                  <li>
                    <a
                      href="courses/{slug}"
                      class="block px-4 py-2 text-gray-500">
                      <div class="flex items-start px-4 py-6 border-b">
                        <img
                          class="w-20 h-20 object-cover mr-4 shadow"
                          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          alt="avatar" />
                        <div>
                          <div class="flex items-center justify-between">
                            <h2 class="text-sm font-semibold text-gray-500">
                              INITIATION A L'INFORMATIQUE
                            </h2>
                            <!-- <small class="text-xs text-gray-700">Par Mister Juslin</small> -->
                          </div>
                          <p class="text-gray-700 text-xs">Par Mister Juslin</p>
                          <p class="">
                            <Stars />
                          </p>
                          <div class="mt-1 flex items-center">
                            <div
                              class="flex mr-3 text-red-800 font-bold text-sm">
                              <span>1250 FCFA (XOF)</span>
                            </div>
                            <!-- <span>au lieu de </span> -->
                            <div
                              class="flex text-gray-700 text-xs
                              line-through mr-8">
                              <span>1500 FCFA (XOF)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                <div class="flex flex-col flex-wrap block mx-3 items-center">
                  <div class="block border-b">
                    <span class="block flex flex-shrink-0 my-4">
                      Total: 1250 FCFA (XOF)
                    </span>
                  </div>
                  <!-- <Button
                    classes="rounded-full px-3 py-4 mt-3"
                    color="alert"
                    dark
                    rounded>
                    Allez au panier
                  </Button> -->
                  <a
                    href="courses/produit"
                    class="mb-3 flex-shrink-0 bg-orange-500 hover:bg-orange-600
                    text-base md:text-xl text-orange-100 font-semibold
                    rounded-full py-2 md:py-3 px-5 md:px-8 shadow
                    hover:shadow-lg transition-colors ease-in-out duration-200">
                    Allez au panier
                  </a>
                </div>
              </div>
            </div>
            <a
              class:selected={segment === 'signin'}
              href="auth/signin"
              class="text-sm px-1 items-center text-gray-500 focus:outline-none
              focus:text-gray-700 py-2 leading-none border rounded text-gray
              border-white hover:border-transparent hover:text-teal-500
              hover:bg-white mt-4 lg:mt-0">
              Connexion
            </a>
            <a
              class:selected={segment === 'signup'}
              href="auth/signup"
              class="text-sm px-1 items-center text-gray-500 focus:outline-none
              focus:text-gray-700 py-2 leading-none border rounded text-gray
              border-white hover:border-transparent hover:text-teal-500
              hover:bg-white mt-4 lg:mt-0">
              Inscription
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
