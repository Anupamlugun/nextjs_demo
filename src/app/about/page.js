import Image from "next/image";

export default function About() {
  return (
    <>
      <h1>this is about page</h1>
      <Image
        width={400}
        height={400}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiEi7kNyO3qT5gpybIiaUDBCTBT2kBj54Mg&s"
        alt="nature"
      ></Image>
    </>
  );
}
