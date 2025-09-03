import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, Star, Heart, BookOpen, Award } from 'lucide-react';

function App() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const quotes = [
    {
      text: "Teachers inspire, guide, and shape the future.",
      author: "Anonymous",
      language: "en"
    },
    {
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela",
      language: "en"
    },
    {
      text: "गुरु के बिना ज्ञान संभव नहीं, और ज्ञान के बिना जीवन।",
      author: "संस्कृत श्लोक",
      language: "hi"
    },
    {
      text: "शिक्षक वह शक्ति है जो अंधकार से प्रकाश की ओर ले जाती है।",
      author: "हिंदी कहावत",
      language: "hi"
    }
  ];

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date('2025-09-04T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Quote carousel effect
  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(quoteTimer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
        
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(15)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#gradient)"
              strokeWidth="1"
              className="animate-pulse"
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Glowing Welcome Message */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-blue-300 font-light mb-4 animate-fade-in">
                Dear Priyanshu Bhaiya, You're Invited!
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Teacher's Day
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Celebration 2025
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
              A Special Invitation to Priyanshu Bhaiya
            </p>

            {/* Animated Icons */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="p-4 bg-blue-500/20 rounded-full animate-bounce" style={{animationDelay: '0s'}}>
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <div className="p-4 bg-purple-500/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}>
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <div className="p-4 bg-blue-500/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}>
                <Heart className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-blue-400 rounded-full mx-auto">
                <div className="w-1 h-3 bg-blue-400 rounded-full mx-auto mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown Timer */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8 text-blue-300">Event Countdown</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={item.label} className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{item.value}</div>
                  <div className="text-blue-300 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Event Details
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6 mx-auto">
                  <Calendar className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-center text-blue-300">Date</h4>
                <p className="text-gray-300 text-center text-lg">4th September 2025</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-6 mx-auto">
                  <MapPin className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-center text-purple-300">Venue</h4>
                <p className="text-gray-300 text-center text-lg">RABINDRA BHAWAN</p>
                <p className="text-gray-400 text-center">Dr. B. C. Roy Engineering College</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6 mx-auto">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-center text-blue-300">Organised By</h4>
                <p className="text-gray-300 text-center text-lg">Department of ECE</p>
                <p className="text-gray-400 text-center text-sm">Electronics & Communication Engineering</p>
              </div>
            </div>
          </div>
        </section>

        {/* Invitation Message */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 md:p-12 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6 animate-pulse" />
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                "Dear Priyanshu Bhaiya, on the occasion of Teacher's Day, we would be honored by your presence as we celebrate our teachers and mentors. Please join us in this special celebration organised by the ECE Department."
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Quotes Carousel */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-12 text-purple-300">Inspirational Quotes</h3>
            
            <div className="relative bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 md:p-12 rounded-3xl border border-purple-500/20 backdrop-blur-sm min-h-[250px] flex items-center">
              <div className="w-full">
                <div className="text-2xl md:text-3xl font-light text-gray-200 mb-6 leading-relaxed transition-all duration-500">
                  "{quotes[currentQuote].text}"
                </div>
                <div className="text-lg text-purple-300">
                  — {quotes[currentQuote].author}
                </div>
                
                {/* Quote Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                  {quotes.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentQuote
                          ? 'bg-purple-400 scale-125'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      onClick={() => setCurrentQuote(index)}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-blue-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="flex justify-center items-center space-x-4 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
                <span className="text-xl font-semibold text-blue-300">ECE Department</span>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"></div>
              </div>
              <p className="text-gray-300 text-lg">With Regards,</p>
              <p className="text-blue-300 font-semibold">ECE Department, BCREC</p>
            </div>
            
            <div className="border-t border-blue-500/20 pt-6">
              <p className="text-gray-400">
                Electronics and Communication Engineering Department
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Dr. B. C. Roy Engineering College
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;