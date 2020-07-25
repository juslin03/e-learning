<script context="module">
  import courses from "../../data/courses.js";
  export async function preload(page) {
    const watch = page.params["play"];
    const courseFullName = courses.find(c => c.slug === course).courseTitle;
    const description = courses.find(c => c.slug === course).description;
    const _slug = courses.find(s => s.slug === course).slug;
    return { watch: { courseFullName, description, _slug } };
  }
</script>

<script>
  import CourseTimeline from "./CourseTimeline.svelte";
  export let courseTitle;
  export let courseAuthor;
  export let courseStars;
  export let coursePrice;
  export let authorCivil;
  export let description;
  export let slug;
  export let category;
  export let watch;
  // console.log(watch);
</script>

<div class="py-16 px-5 relative bg-gray-800">
  <div class="container">
    <div class="flex lg:py-12">
      <div class="flex w-full md:w-10/12 lg:w-7/12">
        <div class="m-5">
          <h3 class="text-white text-lg mb-4 capitalize">course</h3>
          <h1
            class="text-white text-5xl mb-8 leading-tight break-all
            md:break-normal">
            {courseTitle}
          </h1>
          <p class="m-0 text-gray-500 mb-8 text-lg font-normal">
            {@html description}
          </p>
          <a
            href="watch/{slug}"
            class="font-semibold px-5 py-4 relative text-base inline-block
            rounded text-center bg-blue-500 text-white h:text-white">
            Suivre ce cours
          </a>
        </div>
      </div>
      
    </div>
  </div>
</div>
<CourseTimeline />
