import './homepage.scss';

function Group1() {
  return (
    <div className="group1">
      <div className="circle circle-large" />
      <div className="circle circle-medium" />
      <div className="circle circle-small" />
      <div className="circle circle-filled-green" />
      <div className="circle circle-mini" />
      <div className="circle circle-mid" />
      <div className="image-preview" />
    </div>
  );
}

function LoginButton() {
  return (
    <div
      className="button button-green login-btn"
      onClick={() => console.log('Get Started clicked')}
    >
      <span>Get Started</span>
    </div>
  );
}

function LoginButton1() {
  return (
    <div
      className="button button-black download-btn"
      onClick={() => console.log('Download clicked')}
    >
      <span>Download</span>
      <div className="icon-google-play" />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="action-buttons">
      <LoginButton />
      <LoginButton1 />
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
        all in one beautifully intuitive platform. Whether you're drawing your
        shamba or tracking your harvest, FarmBros puts the power of your entire
        farm in your hands.
      </p>
      <div className="divider" />
      <ActionButtons />
    </div>
  );
}

function Navlinks() {
  return (
    <nav className="navlinks">
      <a href="#" className="active">
        Home
      </a>
      <a href="#">About</a>
      <a href="#">Case Studies</a>
      <a href="#">Contacts</a>
    </nav>
  );
}

function LoginButton2() {
  return (
    <div
      className="button button-green navbar-login-btn"
      onClick={() => console.log('Login clicked')}
    >
      <span>Login</span>
    </div>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo" />
      <Navlinks />
      <LoginButton2 />
    </header>
  );
}

function LandingPage() {
  return (
    <section className="landing-page">
      <Group1 />
      <div className="bros-illustration" />
      <IntroText />
      <Navbar />
    </section>
  );
}

function Frame10() {
  return (
    <div className="frame10">
      <div className="frame10-shape" />
      <div className="frame10-image" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="frame9">
      <h2>Smart Farm Recommendations & Alerts</h2>
      <p>
        Our Farm Manager's recommendations suggest best planting dates,
        fertilizer usage, and harvesting times. With instant alerts, you're
        always one step ahead of problems.
      </p>
    </div>
  );
}

function SmartFarmManager() {
  return (
    <section className="smart-farm-manager">
      <Frame10 />
      <Frame9 />
    </section>
  );
}

function LoginButton3() {
  return (
    <div
      className="button button-green learn-more-btn"
      onClick={() => console.log('Learn more clicked')}
    >
      <span>Learn more</span>
    </div>
  );
}

function Frame8() {
  return (
    <div className="feature-content">
      <div className="icon-cow" />
      <h3>Animal Listing</h3>
      <p>
        Animal Listing allows the farmer to register and monitor all livestock
        on the farm — including type, quantity, and current status — so they can
        easily keep track of their animals and manage them more effectively.
      </p>
    </div>
  );
}

function FeatureHolder() {
  return (
    <div className="feature-holder yellow">
      <div className="feature-image feature-image-1" />
      <Frame8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="feature-content">
      <div className="icon-corn" />
      <h3>Crop Listing</h3>
      <p>
        Crop Listing lets the farmer record and keep track of all crops on the
        farm — including what is currently planted, how much is being produced,
        and when it becomes available — making it easy to monitor farm produce
        at a glance.
      </p>
    </div>
  );
}

function FeatureHolder1() {
  return (
    <div className="feature-holder green">
      <div className="feature-image feature-image-2" />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="feature-content">
      <div className="icon-farm" />
      <h3>Structures Listing</h3>
      <p>
        Structure Listing lets the farmer record and manage all physical assets
        on the farm — such as barns, sheds, storage units and housing facilities
        — so they have a clear overview of available infrastructure and can
        plan utilization or maintenance accordingly.
      </p>
    </div>
  );
}

function FeatureHolder2() {
  return (
    <div className="feature-holder light-green">
      <div className="feature-image feature-image-3" />
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="feature-content">
      <div className="icon-harvester" />
      <h3>Equipment Listing</h3>
      <p>
        Equipment Listing allows the farmer to keep an inventory of all farm
        machinery and tools — including their type, availability, and condition
        — so they can easily track equipment usage and improve operational
        planning.
      </p>
    </div>
  );
}

function FeatureHolder3() {
  return (
    <div className="feature-holder brown">
      <div className="feature-image feature-image-4" />
      <Frame13 />
    </div>
  );
}

function FeaturesContainer() {
  return (
    <div className="features-container">
      <FeatureHolder />
      <FeatureHolder1 />
      <FeatureHolder2 />
      <FeatureHolder3 />
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
      <LoginButton3 />
      <FeaturesContainer />
    </section>
  );
}

function MobileAdvertisement() {
  return <section className="mobile-advertisement" />;
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
