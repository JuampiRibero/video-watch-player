import UnderConstruction from "@/components/UnderConstruction";

// Metadata
export const metadata = {
  title: "Video Watch Player | About",
  description: "Learn more about our video watch player, its features, and how it can enhance your viewing experience.",
};

// Contact page component for displaying the under construction gif
export default function AboutPage() {
  return (
    <div className="home-bg bg-cover bg-center min-h-screen">
      <div className="container mx-auto md:px-10 lg:px-26">
        <UnderConstruction />
      </div>
    </div>
  );
}
