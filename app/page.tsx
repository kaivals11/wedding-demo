import Hero from '../components/Hero';
import EmpathyBridge from '../components/EmpathyBridge';
import PortfolioPreview from '../components/PortfolioPreview';
import Approach from '../components/Approach';
import Trust from '../components/Trust'; // <-- Add this import

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EmpathyBridge />
      <PortfolioPreview />
      <Approach />
      <Trust /> {/* <-- Add the component here */}
    </main>
  );
}