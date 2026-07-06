'use client';
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const Services = () => {
  const coreServices = [
    {
      id: 1,
      title: "Real Estate & Investment Advisory",
      icon: "mdi:office-building",
      description: "We connect investors to carefully selected property opportunities, particularly in high-growth urban markets such as Nairobi. Our comprehensive approach ensures your investments are secure and profitable.",
      features: [
        "Project Identification & Analysis",
        "Comprehensive Due Diligence",
        "Ongoing Property & Tenant Management",
        "Market Trend Forecasting"
      ],
      color: "from-amber-500 to-amber-700",
      accent: "text-amber-600",
      bgAccent: "bg-amber-50"
    },
    {
      id: 2,
      title: "Environment & Sustainable Development",
      icon: "mdi:leaf",
      description: "Leveraging deep expertise from global institutions like the United Nations Environment Programme and WHO. We guide projects toward environmental responsibility and long-term sustainability.",
      features: [
        "Environmental Management Consulting",
        "Pollution & Waste Solutions",
        "Environment & Health Assessments",
        "Alignment with UN Sustainable Development Goals"
      ],
      color: "from-emerald-500 to-emerald-700",
      accent: "text-emerald-600",
      bgAccent: "bg-emerald-50"
    },
    {
      id: 3,
      title: "Tourism & Hospitality Advisory",
      icon: "mdi:compass-rose",
      description: "Supporting the development and positioning of hospitality ventures and tourism-related investments, with a focus on quality, sustainability, and creating memorable experiences.",
      features: [
        "Hospitality Venture Development",
        "Tourism Investment Positioning",
        "Quality & Sustainability Audits",
        "Long-term Value Creation Strategies"
      ],
      color: "from-blue-500 to-blue-700",
      accent: "text-blue-600",
      bgAccent: "bg-blue-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Icon icon="mdi:diamond-stone" className="text-primary text-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Core <span className="text-primary">Advisory Areas</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Imperia Consulting operates across three specialized domains, bringing together global experience and local expertise to deliver sustainable solutions and exceptional value.
          </p>
        </motion.div>

        {/* Services Layout */}
        <div className="space-y-24">
          {coreServices.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Graphic / Icon Display Side */}
              <div className="w-full lg:w-1/2">
                <div className={`relative aspect-square sm:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden ${service.bgAccent} flex items-center justify-center group`}>
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/3"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/50 to-transparent rounded-full translate-y-1/3 -translate-x-1/3"></div>

                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className={`relative z-10 w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br ${service.color} shadow-2xl flex items-center justify-center text-white`}
                  >
                    <Icon icon={service.icon} className="text-6xl md:text-8xl drop-shadow-lg" />
                  </motion.div>
                </div>
              </div>

              {/* Text Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {service.title}
                  </h2>
                  <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r ${service.color} mb-6`}></div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Key Capabilities</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-4 group">
                        <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${service.bgAccent} ${service.accent} transition-transform group-hover:scale-110`}>
                          <Icon icon="mdi:check" className="text-sm font-bold" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 text-center bg-gray-900 rounded-3xl p-12 lg:p-20 relative overflow-hidden"
        >
          {/* Subtle background patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Navigate Complex Opportunities with <span className="text-primary">Confidence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Partner with Imperia Consulting to bridge global knowledge with local opportunity.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30">
              Connect With Our Experts
              <Icon icon="mdi:arrow-right" className="text-xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;