import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal | Jack Dolby",
  description:
    "A collection of my thoughts and opinions.",
};

export default async function Journal() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <Heading className="font-black pb-4">Journal</Heading>
      <Paragraph className="pb-10">
      My digital commonplace journal.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
