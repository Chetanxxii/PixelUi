import Container from "./Container";

const Section = ({ children }) => {
  return (
    <section className="py-20">
      <Container>{children}</Container>
    </section>
  );
};

export default Section;