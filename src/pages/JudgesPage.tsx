import Navbar from "@/components/portfolio/Navbar";
import OnlineJudge from "@/components/portfolio/OnlineJudge";
import Footer from "@/components/portfolio/Footer";

const JudgesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <OnlineJudge />
    </div>
    <Footer />
  </div>
);

export default JudgesPage;
