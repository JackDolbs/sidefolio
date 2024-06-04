import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Heading className="font-black">Hi, I&apos;m Jack</Heading>
      <Paragraph className="max-w-3xl mt-4">
        I&apos;m a front-end developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
        I have over{" "}
        <Highlight>5 years of experience</Highlight> building decentralized applications
        that are performance optimized and good looking. You can hire me to work on front-end via my company <a href="https://comcat.dev" className="underline underline-offset-2 hover:text-neutral-800">Comcat</a>.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;m working on right now
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
