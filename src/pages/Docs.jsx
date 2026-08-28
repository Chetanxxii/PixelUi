import Navbar from "../components/layout/Navbar";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

const Docs = () => {
  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Documentation
            </p>

            <h1 className="mt-3 text-5xl font-bold tracking-tight">
              PixelUI Docs
            </h1>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Learn how to use PixelUI components with simple copy-paste React
              code.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Docs;