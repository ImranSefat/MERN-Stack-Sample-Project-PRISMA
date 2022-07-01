import About from "../../components/AboutComponents/About";
import HeaderSplineAnimation from "../../components/LandingComponents/HeaderSplineAnimation";
import Stories from "../../components/LandingComponents/Stories";

function LandingPage() {
  return (
    <div>
      {/* Landing component  */}
      <div className="px-12 bg-black text-white">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center overflow-visible ">
          <div className="pt-32 xl:pt-0">
            <h1 className="text-5xl font-mono font-bold">
              Development Growth 🚀
            </h1>
            <h2 className="text-lg py-3">
              by{" "}
              <span className="font-mono font-bold text-3xl">
                {" "}
                Coding with Imran
              </span>
            </h2>
            <h4 className="font-mono text-xl font-medium">
              Need help to jump start your career in the Software Development
              field? You came to the right place!
            </h4>
          </div>
          <div className="h-screen overflow-visible">
            <HeaderSplineAnimation />
          </div>
        </div>
      </div>
      <Stories />
      <About />
    </div>
  );
}

export default LandingPage;
