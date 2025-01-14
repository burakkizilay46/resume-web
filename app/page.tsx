import Image from "next/image";
import { ReactNode } from "react";

const IMAGE_URL = "https://avatars.githubusercontent.com/u/40871181?v=4";

const Profile = () => (
  <div className="flex items-center gap-4 ">
    <Image
      src={IMAGE_URL}
      alt="Profile Picture"
      width={60}
      height={60}
      className="rounded-full"
    />
    <h1 className="text-5xl font-bold">Burak Kızılay</h1>
  </div>
);

const Introduction = () => (
  <p className="text-gray-400">
    Focused on creating mobile applications that users will want to use and
    enjoy.
    <br />
    <span className="text-white text-xl font-semibold">
      Based in Osmaniye, Türkiye
    </span>
  </p>
);

const Section = ({ title, content }: { title: string; content: ReactNode }) => (
  <section className="flex flex-col gap-2">
    <p className="text-gray-500 uppercase font-medium">{title}</p>
    {content}
  </section>
);

const Links = () => {
  const links = [
    { href: "mailto:kizilay4696@gmail.com", label: "Email" },
    { href: "https://x.com/devburakkizilay", label: "X" },
    { href: "https://github.com/burakkizilay46", label: "Github" },
    { href: "https://www.linkedin.com/in/burak-kizilay/", label: "LinkedIn" },
  ];

  return (
    <div className="flex gap-4">
      {links.map(({ href, label }) => (
        <a key={href} href={href} className="underline  hover:text-gray-600">
          {label}
        </a>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="m-auto flex flex-col gap-6 text-lg">
        <Profile />
        <Introduction />
        <Section
          title="Currently"
          content={
            <p>
              Software Engineer / Mobile and Frontend Developer at{" "}
              <a
                href="https://www.westerops.com"
                className="underline  hover:text-gray-600"
              >
                Westerops
              </a>
            </p>
          }
        />
        <Section title="Elsewhere" content={<Links />} />
      </div>
    </div>
  );
}
