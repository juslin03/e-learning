<script>
  import Stars from "../Common/Stars.svelte";
</script>

<section class="bg-grey-lighter">
  <div class="container">
    <div class="max-w-5xl items-end mx-auto flex border-b flex-row">
      <h5 class="text-left mr-10 float-left text-gray-800 font-bold text-2xl">
        Nouveauté
      </h5>
      <a
        style="right: 8rem;"
        href="showAll"
        class="no-underline absolute float-right text-right hover:shadow-lg
        sm:py-2 md:py-2 inline-block bg-white rounded-full shadow text-sm
        font-bold text-black px-5 transition hover:-translateY-sm">
        Voir tout
      </a>
    </div>
    <div class="flex flex-wrap mx-3">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-center mb-3">
          <div class="max-w-sm w-full py-2 px-3">
            <div class="bg-white shadow-xl rounded-lg overflow-hidden">
              <div
                class="bg-cover bg-center h-48 p-4"
                style="background-image:
                url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)">
                <div class="flex justify-end">
                  <svg
                    style="cursor: pointer;"
                    class="h-6 w-6 text-white hover:text-pink-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0
                      1-1.42 0l-8.53-8.54a6 6 0 0 1
                      8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1
                      0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1
                      0-5.66 5.66L12 18.66l7.83-7.83z" />
                  </svg>
                </div>
              </div>
              <div class="p-2">
                <p
                  class="uppercase text-left pl-3 tracking-wide text-sm
                  font-bold text-gray-800">
                  <a class="hover:underline" href="/courses/1">
                    Initiation à l'informatique
                  </a>
                </p>
                <p class="text-sm text-left pl-3 py-2 text-gray-500">
                  Dr.
                  <span class="text-xs">Mister Juslin</span>
                </p>
                <p class="flex text-sm text-gray-500 text-left pl-3 pr-5">
                  <Stars />
                </p>
              </div>
              <div
                class="flex items-strech flex-row p-4 border-t border-gray-300
                text-sm text-gray-700">
                <div class="line-through flex-2 inline-flex">
                  <p>
                    <span
                      class="float-right text-gray-600 text-xs line-through
                      font-bold">
                      XOF&nbsp;1500
                    </span>
                  </p>
                </div>
                <div class="flex-1 inline-flex flex-row-reverse items-end">
                  <p>
                    <span class="text-black font-bold">XOF&nbsp;1250</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="max-w-sm w-full py-2 px-3">
            <div class="bg-white shadow-xl rounded-lg overflow-hidden">
              <div
                class="bg-cover bg-center h-48 p-4"
                style="background-image:
                url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)">
                <div class="flex justify-end">
                  <svg
                    style="cursor: pointer;"
                    class="h-6 w-6 text-white hover:text-pink-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0
                      1-1.42 0l-8.53-8.54a6 6 0 0 1
                      8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1
                      0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1
                      0-5.66 5.66L12 18.66l7.83-7.83z" />
                  </svg>
                </div>
              </div>
              <div class="p-2">
                <p
                  class="uppercase text-left pl-3 tracking-wide text-sm
                  font-bold text-gray-800">
                  <a class="hover:underline" href="/courses/1">
                    Initiation à l'informatique
                  </a>
                </p>
                <p class="text-sm text-left pl-3 py-2 text-gray-500">
                  Dr.
                  <span class="text-xs">Mister Juslin</span>
                </p>
                <p class="flex text-sm text-gray-500 text-left pl-3 pr-5">
                  <Stars />
                </p>
              </div>
              <div
                class="flex items-strech flex-row p-4 border-t border-gray-300
                text-sm text-gray-700">
                <div class="line-through flex-2 inline-flex">
                  <p>
                    <span
                      class="float-right text-gray-600 text-xs line-through
                      font-bold">
                      XOF&nbsp;1500
                    </span>
                  </p>
                </div>
                <div class="flex-1 inline-flex flex-row-reverse items-end">
                  <p>
                    <span class="text-black font-bold">XOF&nbsp;1250</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="max-w-sm w-full py-2 px-3">
            <div class="bg-white shadow-xl rounded-lg overflow-hidden">
              <div
                class="bg-cover bg-center h-48 p-4"
                style="background-image:
                url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)">
                <div class="flex justify-end">
                  <svg
                    style="cursor: pointer;"
                    class="h-6 w-6 text-white hover:text-pink-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0
                      1-1.42 0l-8.53-8.54a6 6 0 0 1
                      8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1
                      0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1
                      0-5.66 5.66L12 18.66l7.83-7.83z" />
                  </svg>
                </div>
              </div>
              <div class="p-2">
                <p
                  class="uppercase text-left pl-3 tracking-wide text-sm
                  font-bold text-gray-800">
                  <a class="hover:underline" href="/products/produit">
                    Initiation à l'informatique
                  </a>
                </p>
                <p class="text-sm text-left pl-3 py-2 text-gray-500">
                  Dr.
                  <span class="text-xs">Mister Juslin</span>
                </p>
                <p class="flex text-sm text-gray-500 text-left pl-3 pr-5">
                  <Stars />
                </p>
              </div>
              <div
                class="flex items-strech flex-row p-4 border-t border-gray-300
                text-sm text-gray-700">
                <div class="line-through flex-2 inline-flex">
                  <p>
                    <span
                      class="float-right text-gray-600 text-xs line-through
                      font-bold">
                      XOF&nbsp;1500
                    </span>
                  </p>
                </div>
                <div class="flex-1 inline-flex flex-row-reverse items-end">
                  <p>
                    <span class="text-gray-900 font-bold">XOF&nbsp;1250</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="max-w-sm w-full py-2 px-3">
            <div class="bg-white shadow-xl rounded-lg overflow-hidden">
              <div
                class="bg-cover bg-center h-48 p-4"
                style="background-image:
                url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)">
                <div class="flex justify-end">
                  <svg
                    style="cursor: pointer;"
                    class="h-6 w-6 text-white hover:text-pink-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0
                      1-1.42 0l-8.53-8.54a6 6 0 0 1
                      8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1
                      0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1
                      0-5.66 5.66L12 18.66l7.83-7.83z" />
                  </svg>
                </div>
              </div>
              <div class="p-2">
                <p
                  class="uppercase text-left pl-3 tracking-wide text-sm
                  font-bold text-gray-800">
                  <a class="hover:underline" href="/courses/1">
                    Initiation à l'informatique
                  </a>
                </p>
                <p class="text-sm text-left pl-3 py-2 text-gray-500">
                  Dr.
                  <span class="text-xs">Mister Juslin</span>
                </p>
                <p class="flex text-sm text-gray-500 text-left pl-3 pr-5">
                  <Stars />
                </p>
              </div>
              <div
                class="flex items-strech flex-row p-4 border-t border-gray-300
                text-sm text-gray-700">
                <div class="line-through flex-2 inline-flex">
                  <p>
                    <span
                      class="float-right text-gray-600 text-xs line-through
                      font-bold">
                      XOF&nbsp;1500
                    </span>
                  </p>
                </div>
                <div class="flex-1 inline-flex flex-row-reverse items-end">
                  <p>
                    <span class="text-gray-900 font-bold">XOF&nbsp;1250</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
