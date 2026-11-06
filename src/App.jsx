import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProblemSection from "./components/ProblemSection.jsx";
import SolutionSection from "./components/SolutionSection.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Features from "./components/Features.jsx";
import ImpactDashboard from "./components/ImpactDashboard.jsx";
import CommunityStories from "./components/CommunityStories.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import DonationModal from "./components/DonationModal.jsx";
import PartnershipModal from "./components/PartnershipModal.jsx";

export default function App() {
  const [donateOpen, setDonateOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);

  return (
    <>
      <Navbar onDonate={() => setDonateOpen(true)} />
      <main className="pt-20">
        <Hero onDonate={() => setDonateOpen(true)} />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <Features />
        <ImpactDashboard />
        <CommunityStories />
        <FinalCTA onDonate={() => setDonateOpen(true)} onPartner={() => setPartnerOpen(true)} />
      </main>
      <Footer />
      <DonationModal isOpen={donateOpen} onClose={() => setDonateOpen(false)} />
      <PartnershipModal isOpen={partnerOpen} onClose={() => setPartnerOpen(false)} />
    </>
  );
}
