<script context="module">
  import courses from "../../data/courses.js";
  export async function preload(page) {
    const course = page.params["play"];
    const courseFullName = courses.find(c => c.slug === course).courseTitle;
    const description = courses.find(c => c.slug === course).description;
    const _slug = courses.find(s => s.slug === course).slug;
    return { course: { courseFullName, description, _slug } };
  }
</script>

<script>
  import CoursePlay from "../../components/Courses/CoursePlay.svelte";
  export let course;
</script>

<svelte:head>
  <title>Watching - {course.courseFullName}</title>
</svelte:head>

<CoursePlay courseTitle={course.courseFullName} chapters={course._slug} />
