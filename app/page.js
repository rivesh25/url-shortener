import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-2xl font-bold">Welcome to URL Shortener</p>
          <p>Shorten your URLs quickly and easily.</p>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="image" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </div>
  );
}
