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
      <Paragraph className="max-w-4xl mt-4">
      I&apos;m a software engineer with over{" "}
      <Highlight>5 years of experience</Highlight>  {" "}
      in senior startup roles. I specialize in creating scalable, user-friendly interfaces for decentralized applications using React, Next.js, and TailwindCSS. I&apos;ve contributed to the ERC-7621 token standard, scaled a DeFi protocol to $50m TVL, and deployed over $1.25m into private investment opportunities. 
      I currently lead Comcat, providing front-end engineering solutions for dApps, and I&apos;m a partner at O2XC, a Web3 venture firm.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;m working on right now
      </Heading>
      <Products />
    </Container>
  );
}
