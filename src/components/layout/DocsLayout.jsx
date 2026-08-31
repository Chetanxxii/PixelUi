import Navbar from "./Navbar";
import Section from "./Section";
import Container from "./Container";
import Footer from "./Footer";

const DocsLayout = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-zinc-500">
  <span>Components</span>

  <span>/</span>

  <span className="text-zinc-900">
    {title}
  </span>
</div>

            <h1 className="mt-3 text-5xl font-bold tracking-tight">
              {title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              {description}
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-10">
            {children}
          </div>
        </Container>
      </Section>
      <Footer/>
    </>
  );
};

export default DocsLayout;