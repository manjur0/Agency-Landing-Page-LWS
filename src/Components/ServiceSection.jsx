
import feature1 from "./../assets/features/feature-1.png";
import feature2 from "./../assets/features/feature-2.png";
import ServiceItem from "./ServiceItem";
import ServiceDescription from "./ServiceDescription";

const ServiceSection = () => {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Work with tools you already use
              </h2>
              <ServiceDescription
                des={` Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease.`}
              />

              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                <ServiceItem title={" Continuous integration and deployment"} />
                <ServiceItem title={" Development workflow"} />
                <ServiceItem title={"  Knowledge management"} />
              </ul>

              <ServiceDescription
                des={` Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.`}
              />
            </div>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={feature1}
              alt="dashboard feature image"
            />
          </div>

          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={feature2}
              alt="feature image 2"
            />
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                We invest in the world’s potential
              </h2>
              <ServiceDescription
                des={`Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease.`}
              />

              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                <ServiceItem title={" Dynamic reports and dashboards"} />
                <ServiceItem title={"Templates for everyone"} />
                <ServiceItem title={"  Development workflow"} />
                <ServiceItem title={"  Limitless business automation"} />
                <ServiceItem title={" Knowledge management"} />
              </ul>
              <ServiceDescription
                des={` Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
