'use client';
import { useState } from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);

  const serviceCategories = [
    {
      id: 0,
      title: "Tenant Management",
      icon: "mdi:account-group",
      services: [
        {
          name: "Tenant Retention Programs",
          description: "Loyalty incentives, renewal negotiations, customer service initiatives",
          icon: "fa6-solid:handshake-angle"
        },
        {
          name: "Dispute Resolution & Mediation",
          description: "Between tenants or with neighbors",
          icon: "mdi:scale-balance"
        },
        {
          name: "Tenant Exit Surveys",
          description: "To understand turnover reasons and improve retention",
          icon: "mdi:clipboard-text"
        }
      ]
    },
    {
      id: 1,
      title: "Financial Management",
      icon: "mdi:calculator",
      services: [
        {
          name: "Budget Forecasting",
          description: "Annual property budgets for owners",
          icon: "mdi:chart-line"
        },
        {
          name: "Tax Advisory & Filing Support",
          description: "In addition to property taxes you noted",
          icon: "mdi:file-document"
        },
        {
          name: "Service Charge Budgeting & Auditing",
          description: "Especially for apartments or commercial spaces",
          icon: "mdi:audit"
        },
        {
          name: "Property Taxes",
          description: "Comprehensive property tax management and support",
          icon: "mdi:home-account"
        }
      ]
    },
    {
      id: 2,
      title: "Property Upkeep & Maintenance",
      icon: "mdi:tools",
      services: [
        {
          name: "Vendor Management",
          description: "Vetting, contracting, and supervising service providers like cleaners, security, landscapers",
          icon: "mdi:account-tie"
        },
        {
          name: "Emergency Repairs 24/7 Response",
          description: "Plumbing leaks, power issues, etc.",
          icon: "mdi:phone-alert"
        },
        {
          name: "Asset & Equipment Management",
          description: "Tracking warranties, service contracts, replacements for lifts, generators, ACs",
          icon: "mdi:cog"
        },
        {
          name: "Sustainability/Green Initiatives",
          description: "Energy efficiency, water-saving solutions, waste management",
          icon: "mdi:leaf"
        },
        {
          name: "Inspection Reports and Owner Support",
          description: "Strategic reporting",
          icon: "mdi:clipboard-check"
        }
      ]
    },
    {
      id: 3,
      title: "Legal & Compliance",
      icon: "mdi:gavel",
      services: [
        {
          name: "Regulatory Updates",
          description: "Alerting owners to changes in tenancy or property law",
          icon: "mdi:bell-alert"
        },
        {
          name: "Contract Management",
          description: "Service providers, contractors, third parties",
          icon: "mdi:contract"
        },
        {
          name: "Representation in Legal Matters",
          description: "Liaising with lawyers or authorities on disputes",
          icon: "mdi:account-tie-hat"
        }
      ]
    },
    {
      id: 4,
      title: "Owner Support",
      icon: "mdi:account-star",
      services: [
        {
          name: "Customized Owner Portals/Dashboards",
          description: "Online access to statements, reports, tenant status",
          icon: "mdi:monitor-dashboard"
        },
        {
          name: "Detailed Property Condition Reports",
          description: "Including photo/video inspections — beyond just inspection notes",
          icon: "mdi:camera"
        },
        {
          name: "Portfolio Management",
          description: "For owners with multiple properties",
          icon: "mdi:briefcase"
        },
        {
          name: "Market Benchmarking",
          description: "Comparing property performance against market trends",
          icon: "mdi:trending-up"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
            <Icon icon="mdi:star-four-points" className="text-primary text-2xl animate-pulse-glow" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Property Management
            <span className="block gradient-text animate-float">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive property management solutions designed to maximize your investment 
            returns, ensure tenant satisfaction, and provide complete peace of mind
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-8 py-5 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-red-600 text-white shadow-xl animate-pulse-glow'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg card-hover'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon 
                  icon={category.icon} 
                  className={`text-2xl transition-all duration-300 ${
                    activeCategory === category.id ? 'scale-110 text-white' : 'group-hover:scale-110 group-hover:text-primary'
                  }`}
                />
                <span className="text-sm md:text-base whitespace-nowrap">{category.title}</span>
              </div>
              {activeCategory === category.id && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-md">
          <div className="bg-gradient-to-r from-primary to-red-600 px-8 py-8">
            <div className="flex items-center space-x-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Icon 
                  icon={serviceCategories[activeCategory].icon} 
                  className="text-4xl text-white animate-float"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {serviceCategories[activeCategory].title}
                </h2>
                <p className="text-white/90 text-lg">
                  {serviceCategories[activeCategory].services.length} specialized services to elevate your property
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories[activeCategory].services.map((service, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`group relative p-8 rounded-2xl border-2 transition-all duration-500 ${
                    hoveredService === index
                      ? 'border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl transform scale-105'
                      : 'border-gray-200 bg-white hover:border-gray-300 card-hover'
                  }`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 rounded-2xl opacity-5">
                    <div className="absolute top-4 right-4">
                      <Icon icon={service.icon} className="text-6xl text-primary" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`p-4 rounded-xl transition-all duration-500 ${
                        hoveredService === index
                          ? 'bg-gradient-to-r from-primary to-red-600 shadow-lg'
                          : 'bg-gray-100 group-hover:bg-primary/10'
                      }`}>
                        <Icon 
                          icon={service.icon} 
                          className={`text-2xl transition-all duration-500 ${
                            hoveredService === index ? 'text-white scale-110' : 'text-gray-600 group-hover:text-primary'
                          }`}
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;