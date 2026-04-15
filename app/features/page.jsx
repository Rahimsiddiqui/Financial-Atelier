export const metadata = {
  title: "Financial Atelier | Features",
  description:
    "Explore Financial Atelier's features: Real-time expense tracking, spending pattern analysis, and personal wealth management tools designed for clarity and control.",
};

import FeaturesClient from "./FeaturesClient";

export default function Page() {
  return (
    <>
      <div className="seo-only hidden">
        <h1>Financial Dashboard Features</h1>

        <p>
          Our platform helps you track expenses, analyze spending patterns, and
          manage your financial life in one place.
        </p>

        <p>
          Built for clarity and control, it gives you real-time insights into
          your money flow.
        </p>
      </div>
      <FeaturesClient />
    </>
  );
}
