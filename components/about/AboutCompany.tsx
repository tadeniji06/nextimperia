import { motion } from "framer-motion";

const AboutCompany = () => {
  return (
    <section className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Imperia Consulting
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              <strong className="text-primary font-semibold">Imperia Consulting Ltd</strong> is a multidisciplinary advisory and investment firm that brings together global experience and local expertise to deliver sustainable solutions across real estate, environment and development, and strategic advisory services.
            </p>
            <p>
              Founded by Engr. Mohammed Omotola, whose career spans nearly 25 years within the United Nations system beginning in 2001, Imperia Consulting is built on a strong foundation of international public sector experience, partnership development, and program management at the highest levels.
            </p>
            <p>
              Imperia Consulting is guided by a simple philosophy: to bridge global knowledge with local opportunity, and to create solutions that are not only commercially viable, but also environmentally responsible and socially impactful.
            </p>
            <p>
              By combining international experience with practical, on-the-ground execution, Imperia Consulting serves as a trusted partner for investors, institutions, and individuals seeking to navigate complex opportunities with confidence and clarity.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Our Core Areas</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">1</span>
                  Real Estate & Investment Advisory
                </h4>
                <p className="text-gray-600 leading-relaxed pl-11">
                  Imperia connects investors to carefully selected property opportunities, particularly in high-growth urban markets such as Nairobi, while providing end-to-end support including project identification, due diligence, and ongoing management.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">2</span>
                  Environment & Sustainable Development
                </h4>
                <p className="text-gray-600 leading-relaxed pl-11">
                  Leveraging deep expertise gained from working with global institutions such as the United Nations Environment Programme and partners including the World Health Organization. This includes consultancy services in environmental management, pollution, environment and health, and alignment with the Sustainable Development Goals.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">3</span>
                  Tourism & Hospitality Advisory
                </h4>
                <p className="text-gray-600 leading-relaxed pl-11">
                  Supporting the development and positioning of hospitality ventures and tourism-related investments, with a focus on quality, sustainability, and long-term value creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
