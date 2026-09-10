import React from 'react';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gray-950 overflow-hidden flex items-center justify-center py-20 px-4">
      {/* Custom CSS for gradient animations */}
      <style jsx>{`
        @keyframes gradient-move-1 {
          0%, 100% { transform: translate(-20%, -20%) rotate(0deg); }
          50% { transform: translate(20%, 20%) rotate(180deg); }
        }
        @keyframes gradient-move-2 {
          0%, 100% { transform: translate(20%, 20%) rotate(0deg); }
          50% { transform: translate(-20%, -20%) rotate(180deg); }
        }
        .animate-gradient-1 {
          animation: gradient-move-1 25s ease-in-out infinite alternate;
        }
        .animate-gradient-2 {
          animation: gradient-move-2 25s ease-in-out infinite alternate-reverse;
        }
      `}</style>

      {/* Animated Glowing Gradients */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-gradient-1"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-l from-blue-600 to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-gradient-2"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
          Pixobiz: Innovate. Create. Elevate.
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mt-6 mb-10 max-w-3xl mx-auto">
          Your ultimate partner for cutting-edge digital solutions and transformative business growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Get Started
          </button>
          <button className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-base font-medium rounded-full text-gray-200 hover:text-white hover:border-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;