import Image, { StaticImageData } from "next/image";
import Navbar from "../Components/Navbar/Navbar";
import "./styles/homepage.scss";
import illustration from '../assets/images/bros-illustration 1.png'
import smartBot from '../assets/images/smart-bot.png'
import animalListing from '../assets/images/Animal_Listing_Logger.png'
import cropListing from '../assets/images/Crop_Listing_Logger.png'
import structureListing from '../assets/images/Structure_Listing_Logger.png'
import equipmentListing from '../assets/images/Equipment_Listing_Logger.png'

function LoginButton() {
  return (
    <div className="button button-green login-btn">
      <span>Get Started</span>
    </div>
  );
}

function DownloadButton() {
  return (
    <div className="button button-dark download-btn">
      <span>Download</span>
      <span className="play-icon">▶</span>
    </div>
  );
}

function IntroText() {
  return (
    <div className="intro-text">
      <h1>Welcome to a Unique farming experience</h1>
      <p>
        <strong>FarmBros</strong> is your smart companion for managing every
        corner of your farm – from crops to livestock, tools to structures –
        all in one beautifully intuitive platform. Whether you are drawing your
        shamba or tracking your harvest, FarmBros puts the power of your entire
        farm in your hands.
      </p>
      <div className="button-group">
        <LoginButton />
        <DownloadButton />
      </div>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-illustration">
      <div className="illustration-circle">
        <Image src={illustration} alt="farmbros_illustration" />
      </div>
      <div className="decorative-circles">
        <div className="deco-circle large" />
        <div className="deco-circle medium" />
        <div className="deco-circle small" />
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <section className="landing-page">
      <Navbar />
      <div className="landing-content">
        <IntroText />
        <HeroIllustration />
      </div>
    </section>
  );
}

function SmartFarmManager() {
  return (
    <section className="smart-farm-manager">
      <div className="smart-icon-container">
        <div className="smart-icon-blob" />
        <div className="smart-icon-content">
          <Image src={smartBot} alt="" />
        </div>
      </div>
      <div className="smart-content">
        <h2>Smart Farm Recommendations & Alerts</h2>
        <p>
          Our Farm Manager's recommendations suggest best planting dates,
          fertilizer usage, and harvesting times. With instant alerts, you're
          always one step ahead of problems
        </p>
      </div>
    </section>
  );
}

function LearnMoreButton() {
  return (
    <div className="button button-green learn-more-btn">
      <span>Learn more</span>
    </div>
  );
}

interface ListItem {
  icon: string;
  name: string;
  subtitle?: string;
}

function FeatureCard({
  color,
  icon,
  title,
  description,
  imageUrl,
}: {
  color: string;
  icon: string;
  title: string;
  description: string;
  imageUrl: StaticImageData
}) {
  return (
    <div className={`feature-card ${color}`}>
        <Image src={imageUrl} alt="" />
      <div className="feature-info">
        <div className={`feature-icon ${icon}`} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className="features">
      <h2>Features</h2>
      <p className="features-description">
        Farmbros is a comprehensive agricultural platform that empowers farmers
        by giving them the tools to easily manage and showcase their resources.
        Whether it's listing various crops, animals, equipment, or farm
        structures, Farmbros provides a centralized space where farmers can
        efficiently organize and share their assets with potential buyers,
        partners, and stakeholders.
      </p>
      <div className="features-grid">
        <FeatureCard
          color="yellow"
          icon="icon-cow"
          title="Animal Listing"
          description="Animal Listing allows the farmer to register and monitor all livestock on the farm — including type, quantity, and current status — so they can easily keep track of their animals and manage them more effectively."
          imageUrl={animalListing}
        />
        <FeatureCard
          color="green"
          icon="icon-corn"
          title="Crop Listing"
          description="Crop Listing lets the farmer record and keep track of all crops on the farm — including what is currently planted, how much is being produced, and when it becomes available — making it easy to monitor farm produce at a glance."
          imageUrl={cropListing}
        />
        <FeatureCard
          color="light-green"
          icon="icon-farm"
          title="Structures Listing"
          description="Structure Listing lets the farmer record and manage all physical assets on the farm — such as barns, sheds, storage units and housing facilities — so they have a clear overview of available infrastructure and can plan utilization or maintenance accordingly."
          imageUrl={structureListing}
        />
        <FeatureCard
          color="brown"
          icon="icon-harvester"
          title="Equipment Listing"
          description="Equipment Listing allows the farmer to keep an inventory of all farm machinery and tools — including their type, availability, and condition — so they can easily track equipment usage and improve operational planning."
          imageUrl={equipmentListing}
        />
      </div>
      <div className="action">
        <LearnMoreButton />
      </div>
    </section>
  );
}

function MobileAdvertisement() {
  return (
    <section className="mobile-advertisement">
      <div className="mobile-content">
        <div className="mobile-mockup" />
      </div>
    </section>
  );
}

export default function Homepage() {
  return (
    <div className="homepage">
      <LandingPage />
      <SmartFarmManager />
      <Features />
      <MobileAdvertisement />
    </div>
  );
}