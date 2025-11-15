import { practicePages, simplePageRoutes } from "../routes";
import HeroSection from "./header";
import Footer from "./footer";
import LinkCard from "./link-card";

// Home page component with all links
const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        {/* pages with css module routes */}
        <div className="max-w-7xl mx-auto mb-18">
          <h2 className="text-xl font-bold mb-6">Vanilla CSS practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {simplePageRoutes.map((page, index) => (
              <LinkCard page={page} index={index} />
            ))}
          </div>
        </div>

        {/* pages with tailwind css  */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold mb-6">TailWind CSS practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {practicePages.map((page, index) => (
              <LinkCard page={page} index={index} />
            ))}
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
