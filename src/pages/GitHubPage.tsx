import Navbar from "@/components/portfolio/Navbar";
import GitHubCalendar from "@/components/portfolio/GitHubCalendar";
import Footer from "@/components/portfolio/Footer";

const GitHubPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <GitHubCalendar />
    </div>
    <Footer />
  </div>
);

export default GitHubPage;
