
import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-20 p-5">
            {/* Left Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <Image
                    src="/me.jpeg" // Replace with the actual path of your image
                    alt="About Faria Usman"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg"
                    priority
                />
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center gap-6 md:gap-10 px-5 md:px-10 w-full md:w-1/2">
                <h1 className="font-bold text-xl md:text-3xl font-serif text-center md:text-left">
                    About Me
                </h1>
                <p className="font-medium text-justify text-sm md:text-base">
                    Hi, I'm Faria Usman—a passionate developer, designer, and creator with a vision to build innovative solutions.
                    With years of experience in coding and designing, I have honed my skills to deliver high-quality and user-friendly
                    projects. I believe in continuous learning, collaboration, and pushing boundaries to achieve excellence.
                </p>
                <p className="font-medium text-justify text-sm md:text-base">
                    When I'm not coding or designing, I enjoy exploring new technologies, reading about industry trends, and sharing
                    my knowledge with others. Let's connect and create something amazing together!
                </p>
                <button className="w-[200px] h-[50px] md:w-[237px] md:h-[66px] bg-black text-white text-sm md:text-base mx-auto md:mx-0">
                    Learn More
                </button>
            </div>
        </div>
    );
}
