import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";

const Components = () => {
  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight">
              Components
            </h1>

            <p className="mt-4 text-zinc-600">
              Browse reusable React + Tailwind CSS components built for PixelUI.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Components;