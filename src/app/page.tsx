import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 md:gap-20 p-5">
      {/* Left Section */}
      <div className="flex flex-col justify-center gap-6 md:gap-10 px-5 md:px-10 w-full md:w-1/2">
        <h1 className="font-bold text-xl md:text-3xl font-serif text-center md:text-left">
          Welcome to FARIA USMAN website
        </h1>
        <p className="font-medium text-justify text-sm md:text-base">
          Welcome to my world of creativity and passion! I am a developer, designer, and innovator committed to bringing
          ideas to life. This space is where I share my work, thoughts, and projects, crafted with precision and heart.
          Explore, connect, and stay inspired!
        </p>
        <button className="w-[200px] h-[50px] md:w-[237px] md:h-[66px] bg-black text-white text-sm md:text-base mx-auto md:mx-0">
         <a href="contact-us">Contact</a>
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/me.jpeg"
          alt="Faria Usman Profile"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  );
}



