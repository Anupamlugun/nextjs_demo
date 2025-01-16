import Link from "next/link";

export default function Course() {
  return (
    <>
      <h1>This is the Contact page</h1>
      <ul>
        <li>
          <Link href="/course/course_details/course_1">Course 1</Link>
        </li>
        <li>
          <Link href="/course/course_details/course_2">Course 2</Link>
        </li>
      </ul>
    </>
  );
}
