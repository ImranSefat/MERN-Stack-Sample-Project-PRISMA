import { useLocation } from "react-router-dom";
import About from "../../components/AboutComponents/About";

function BlogPage() {
  const location = useLocation();
  const props = location.state as any;
  const { title, details, imageSrc } = props.props;
  return (
    <div className="xl:mx-60">
      <div className="bg-black text-white px-12  pb-40 ">
        {/* header section */}
        <div className="mx-auto">
          <img
            src={imageSrc}
            className="text-center mx-auto h-[500px] object-cover"
          />
          <h1 className="text-[48px]  lg:px-12 pt-24 font-bold">{title}</h1>
          <h3 className="text-[16px] xl:text-2xl font-medium leading-loose text-stone-400 lg:px-48 py-12 ">
            One way that I do to get inspiration to come when I create a design
            is to force myself to make a design for 30 minutes without a break
            and so far it has proven effective.
          </h3>
        </div>
        {/* Short Summary */}
        <div className="lg:px-12 text-lg pt-12 pb-44">
          <hr />
          <div className="flex flex-row justify-between px-8   py-4 font-semibold">
            <h3>Date</h3>
            <h3>May 08, 2022</h3>
          </div>
          <hr />
          <div className="flex flex-row justify-between px-8  py-4 ">
            <h3>Writter</h3>
            <h3>Imran Sefat</h3>
          </div>
          <hr />
          <div className="flex flex-row justify-between px-8  py-4 ">
            <h3>Estimate</h3>
            <h3>2 minutes</h3>
          </div>
          <hr />
          <div className="flex flex-row justify-between px-8  py-4 ">
            <h3>Category</h3>
            <h3>Design Tips</h3>
          </div>
          <hr />
        </div>
        {/* details of the blog */}
        <div className="leading-relaxed lg:px-12">
          <h2 className="text-3xl font-bold text-white leading-relaxed ">
            Let's say you are designing a landing page and are confused about
            the layout
          </h2>
          <br />
          <h2 className="text-stone-200 py-4 text-lg leading-loose">
            Don't just stare at your computer screen. Nothing will change. If
            you are confused about starting a design because you haven't found
            the right layout even though you've been looking for references, the
            step you have to do is start.
          </h2>
          <br />
          <h2 className="text-stone-200 py-4 text-lg leading-loose">
            How to start it?. You can start from the basic components. For
            example, on the landing page that you are going to make there will
            be a title, description and a CTA button. You can start making
            designs from those three things.
          </h2>
        </div>
      </div>
      <About />
    </div>
  );
}

export default BlogPage;
