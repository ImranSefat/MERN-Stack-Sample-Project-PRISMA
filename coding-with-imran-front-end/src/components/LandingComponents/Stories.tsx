import { Link } from "react-router-dom";

function Stories() {
  return (
    <div className="py-24 px-24">
      <div className="text-center">
        <h1 className="text-5xl text-center pb-5 font-bold">
          Developer Stories
        </h1>
        <h6 className="text-lg">
          Read how other developers started their development journey!
        </h6>
      </div>
      {/* Story grids */}
      <div className="py-12 px-12 lg:px-32 xl:px-40 ">
        <h6 className="text-xl font-bold py-8 text-neutral-500">
          EDITOR's CHOICE
        </h6>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-20 ">
          <StoryCard
            title="Dead end idea? force yourself to make a design for 30 minutes"
            details="Forcing yourself to make a design for 30 minutes without a break can be
        one way to get ideas to come."
            imageSrc="https://www.dwinawan.com/blog/thumb_article36.jpg"
          />
          <StoryCard
            title="Let's learn UX Writing thinly"
            details="Learn UX Writing by observing the copy or writing on the landing page title of a technology company website and then trying to apply it to the design that is being created."
            imageSrc="https://www.dwinawan.com/blog/thumb_article37.jpg"
          />
          <StoryCard
            title="When to use Switch or Single Checkbox?"
            details="The similarities between the concept of Switch and Single Checkbox often confuse designers in deciding when to use them."
            imageSrc="https://www.dwinawan.com/blog/thumb_article29.jpg"
          />
          <StoryCard
            title="Prepared for handover website design files to developers"
            details="UI/UX is not only about making it easy for the user or users but also making it easier for colleagues such as developers. Here are some things that can help them."
            imageSrc="https://www.dwinawan.com/blog/thumb_article17.jpg"
          />
          <StoryCard
            title="Maybe what you need right now is no longer training but getting into the industry"
            details="Continuous practice of making designs can make someone who is studying design trapped in an environment that he has created himself."
            imageSrc="https://www.dwinawan.com/blog/thumb_article30.jpg"
          />
          <StoryCard
            title="Designer quotes that can add perspective"
            details="Some of the quotes in this article really helped me when making designs. Help think and consider things that must be considered."
            imageSrc="https://www.dwinawan.com/blog/thumb_article33.jpg"
          />
        </div>
      </div>
    </div>
  );
}

function StoryCard(props: any) {
  return (
    <Link to="/blog" state={{ props: props }}>
      <div className="hover:scale-110 cursor-pointer duration-300">
        <img src={props.imageSrc} alt="blog-title-image"></img>
        <p className="text-sm pt-4">May 08, 2022</p>
        <h1 className="text-4xl font-bold font-sans py-4">{props.title}</h1>
        <h5 className="text-lg text-black">{props.details}</h5>
      </div>
    </Link>
  );
}

export default Stories;
