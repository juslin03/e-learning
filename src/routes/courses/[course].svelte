<script context="module">
  import courses from "../../data/courses.js";
  export async function preload(page) {
    const course = page.params["course"];
    const courseFullName = courses.find(c => c.slug === course).courseTitle;
    const description = courses.find(c => c.slug === course).description;
    const _slug = courses.find(s => s.slug === course).slug;
    return { course: { courseFullName, description, _slug } };
  }
</script>

<script>
  import CourseDetails from "../../components/Courses/CourseDetails.svelte";
  export let course;
</script>

<svelte:head>
  <title>Course - {course.courseFullName}</title>
</svelte:head>

<CourseDetails
  courseTitle={course.courseFullName}
  description={course.description}
  slug={course._slug} />
