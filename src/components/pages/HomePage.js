import Layout from "../Layout";
import About from "../sections/headingPages/About";
import Heading from "../sections/headingPages/Heading";
import Specials from "../sections/headingPages/Specials";
import Testimonials from "../sections/headingPages/Testimonials";
export default function Homepage() {
  return (
    <Layout>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </Layout>
  );
}
