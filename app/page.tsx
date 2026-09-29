import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <div className="h-[50vh] flex items-center justify-center text-[#a3a3a3]">
        <p>More sections coming soon...</p>
      </div>
    </main>
  );
}
