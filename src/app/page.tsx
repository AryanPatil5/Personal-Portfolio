import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/features/home/components/hero";
import { RecruiterSnapshot } from "@/features/home/components/recruiter-snapshot";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RecruiterSnapshot />
      </main>
      <Footer />
    </div>
  );
}
