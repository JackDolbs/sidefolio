import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-4xl mt-4">
      Experienced front-end engineer with over 5 years in senior startup roles, specializing in engineering, product management, business development/growth, and technical writing. Expertise in creating scalable and user-friendly interfaces using React, Next.js, & TailwindCSS. Proven track record in leading teams, securing funding, and scaling early startups. Strong knowledge of decentralized applications and DeFi. Accomplishments include contributing to the ERC-7621 token standard, scaling a DeFi protocol to $50m TVL, and deploying over $1.25m into private investment opportunities.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
