import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To simplify and streamline the university application process, making higher education accessible to all ambitious students."
    },
    {
      icon: Users,
      title: "Who We Are",
      description: "A team of education enthusiasts and tech innovators dedicated to transforming the way students approach their academic journey."
    },
    {
      icon: Award,
      title: "What We Do",
      description: "We provide a comprehensive platform that helps students manage applications, track deadlines, and stay organized throughout their academic journey."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We believe in transparency, accessibility, and student success. Our platform is built on these core principles."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-8 rounded-2xl text-white overflow-hidden animate-fadeInUp">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">About UniFlow</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Your trusted companion in the journey to higher education. We're here to make your university application process smoother, more organized, and less stressful.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={index}
              className="bg-white bg-opacity-80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white border-opacity-20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Contact Section */}

    </div>
  );
};

export default About;