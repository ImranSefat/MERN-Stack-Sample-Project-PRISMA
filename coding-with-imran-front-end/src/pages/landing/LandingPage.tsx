import HeaderSplineAnimation from "../../components/LandingComponents/HeaderSplineAnimation";

function LandingPage() {
  return (
    <div className="px-12 bg-black text-white">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center overflow-visible">
        <div className="pt-32 xl:pt-0">
          <h1 className="text-3xl font-mono font-bold">
            Development Growth 🚀
          </h1>
          <h2 className="text-lg py-3">
            by <span className="font-mono font-bold"> Coding with Imran</span>
          </h2>
          <h4 className="font-mono">
            Need help to jump start your career in the Software Development
            field? You came to the right place!
          </h4>
        </div>
        <div className="h-screen overflow-visible">
          <HeaderSplineAnimation />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
