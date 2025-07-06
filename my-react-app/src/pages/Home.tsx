const Home = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden">
        {/* Animated Gradient Blobs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute w-96 h-96 bg-blue-400 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob1"></div>
          <div className="absolute w-96 h-96 bg-pink-400 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob2 left-1/2 top-1/2"></div>
          <div className="absolute w-96 h-96 bg-purple-400 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob3 right-0 bottom-0"></div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 drop-shadow mb-6 animate-fadein">
          AI-Driven Software Architecture<br />Decision System
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fadein delay-100">
          Empowering developers and teams to make smarter architecture choices with AI-powered recommendations, real-world case studies, and a modern learning hub.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fadein delay-200">
          <a href="/register" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
            Get Started
          </a>
          <a href="/questionnaire" className="bg-white text-blue-700 border border-blue-500 px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-50 hover:scale-105 transition-transform duration-200">
            Try Questionnaire
          </a>
        </div>
      </section>
  
      {/* Features Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Personalized Recommendations</h3>
            <p className="text-gray-600">Get architecture and design pattern suggestions tailored to your project’s needs using AI-driven logic.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Learning Hub</h3>
            <p className="text-gray-600">Access best practices, architecture comparisons, and real-world case studies from industry leaders.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">Easy-to-Use Questionnaire</h3>
            <p className="text-gray-600">A guided, interactive form to capture your project requirements and goals.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Modern, Secure, and Fast</h3>
            <p className="text-gray-600">Built with React, Node.js, and MongoDB. Designed for security, speed, and scalability.</p>
          </div>
        </div>
      </section>
  
      <footer className="text-center text-gray-500 text-sm py-6 mt-auto">
        <p>
          Developed by Yash Rana (K2256939) | Kingston University | MSc Dissertation Project
        </p>
      </footer>
  
      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes blob1 { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(30px,-50px) scale(1.1);} 66%{transform:translate(-20px,20px) scale(0.9);} }
          @keyframes blob2 { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(-40px,30px) scale(1.05);} 66%{transform:translate(20px,-20px) scale(0.95);} }
          @keyframes blob3 { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(20px,40px) scale(1.1);} 66%{transform:translate(-30px,-30px) scale(0.9);} }
          .animate-blob1 { animation: blob1 12s infinite ease-in-out; }
          .animate-blob2 { animation: blob2 14s infinite ease-in-out; }
          .animate-blob3 { animation: blob3 16s infinite ease-in-out; }
          .animate-fadein { animation: fadein 1s both; }
          .animate-fadein.delay-100 { animation-delay: 0.1s; }
          .animate-fadein.delay-200 { animation-delay: 0.2s; }
          @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none;} }
        `}
      </style>
    </div>
  );
  
  export default Home;