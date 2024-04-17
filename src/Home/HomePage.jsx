import React from "react";
import HeroSection from "./Sections/HeroSection";
import AppBar from "../Components/Generic Components/Appbar";
import FeaturesSection from "./Sections/FeaturesSection";
import UiComponentsSection from "./Sections/UiComponentsSection";
import ThemeSection from "./Sections/ThemeSection";
import SupportedPlatformSection from "./Sections/SupportPlatformSection";
import DesignFilesSection from "./Sections/DesignFilesSection";
import CtaSection from "./Sections/CtaSection";
import Footer from "./Sections/Footer";

const HomePage = () => {
  return (
    <div>
        <AppBar />
        <HeroSection />
        <FeaturesSection />
        <UiComponentsSection />
        <ThemeSection />
        <SupportedPlatformSection />
        <DesignFilesSection />
        <CtaSection />
        <Footer />
    </div>
  );
};

export default HomePage;
