import UnderConstruction from "@/components/UnderConstruction";

// Metadata
export const metadata = {
  title: "Video Watch Player | Contact",
  description: "Need help with our video player? Our support team is here to assist you. Contact us for quick and friendly support.",
};

// Contact page component for displaying the under construction gif
export default function ContactPage() {
  return (
    <div className="home-bg bg-cover bg-center min-h-screen">
      <div className="container mx-auto md:px-10 lg:px-26">
        <UnderConstruction />
      </div>
    </div>
  );
}
