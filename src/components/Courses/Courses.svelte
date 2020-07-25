<script context="module">
  import courses from "../../data/courses.js";
  export async function preload(page) {
    const course = page.params["course"];
    const courseFullName = courses.find(c => c.slug === course).courseTitle;
    const category = courses.find(cat => cat.slug === course).category;
    return { course: { courseFullName, category } };
  }
</script>

<script>
  import Stars from "../Common/Stars.svelte";
  // import coursesList from "../../data/courses.js";
  export let course;
  // console.log(course.category, "cat");
</script>

<style>
  .voir {
    /* transition: all .25s; */
  }
  .voir:hover {
    transition: all 0.25s;
    transform: scale(1.2);
  }
</style>

{#if courses}
  <div class="max-w-6xl mx-auto">
    <div class="flex mx-3 justify-between pb-1">
      <div class="flex-start">
        <h1 class="text-gray-600 text-xl">Programmation</h1>
      </div>
      <div class="flex flex-end">
        <a href="/{courses.category}" class="text-red-600 flex voir">
          Voir tout &nbsp;
          <svg
            class="h-6 w-6 fill-current"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
    <div
      class="flex items-center justify-center mb-3 grid grid-cols-4 gap-2
      border-t py-2">
      {#each courses as course}
        <div class="max-w-sm w-full py-2 px-3">
          <div class="bg-white shadow-xl rounded-lg overflow-hidden">
            <div
              class="bg-cover bg-center h-48 p-4"
              style="background-image:
              url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)">
              <div class="flex justify-end">
                <!-- <svg
                  class="h-6 w-6 text-white hover:text-pink-600 fill-current
                  cursor-pointer"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12
                    20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12
                    7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg> -->
                <svg
                  class="h-6 w-6 text-white hover:text-pink-600 fill-current
                  cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42
                    0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4
                    4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4
                    0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
                </svg>
              </div>
            </div>
            <div class="p-2">
              <p
                class="uppercase text-left pl-3 tracking-wide text-sm font-bold
                text-gray-800">
                <a class="hover:underline" href="courses/{course.slug}">
                  {course.courseTitle}
                </a>
              </p>
              <p class="text-sm text-left pl-3 py-2 text-gray-500">
                Dr.
                <span class="text-xs">{course.teacher}</span>
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
                    XOF&nbsp;{course.price}
                  </span>
                </p>
              </div>
              <div class="flex-1 inline-flex flex-row-reverse items-end">
                <p>
                  <span
                    class="font-bold"
                    class:text-red-600={course.price === 0}>
                    {@html course.price === 0 ? 'free' : `XOF&nbsp;${course.price - 250}`}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
