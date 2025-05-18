import ServiceDescription from "./ServiceDescription";
import TrustedIcon1 from "./SVG/TrustedIcon1";
import TrustedIcon2 from "./SVG/TrustedIcon2";
import TrustedIcon3 from "./SVG/TrustedIcon3";
import TrustedIcon4 from "./SVG/TrustedIcon4";
import TrustedItem from "./TrustedItem";
import TrustedLink from "./TrustedLink";

const TrustedSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
            Trusted Worldwide
          </p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            Trusted by over 600 million users and 10,000 teams
          </h2>
          <ServiceDescription
            des={` Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your customers.`}
          />
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <TrustedLink title={`Explore Legality Guide`} />
            <TrustedLink title={`Visit the Trust Center`} />
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <TrustedItem
            title={` 99.99% uptime`}
            description={`For Landwind, with zero maintenance downtime`}
          >
            <TrustedIcon1 />
          </TrustedItem>
          <TrustedItem
            title={`600M+ Users`}
            description={` Trusted by over 600 milion users around the world`}
          >
            <TrustedIcon2 />
          </TrustedItem>
          <TrustedItem
            title={" 100+ countries"}
            description={`  Have used Landwind to create functional websites`}
          >
            <TrustedIcon3 />
          </TrustedItem>
          <TrustedItem
            title={`   5+ Million`}
            description={`Transactions per day`}
          >
            <TrustedIcon4 />
          </TrustedItem>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
