'use client';

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-fade-in').forEach(el => {
      observer.observe(el);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="desert-gradient min-h-screen">
      {/* Animated Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src="/vibecherry-logo.png"
              alt="VibeCherry Logo"
              width={32}
              height={32}
              className="cherry-icon"
            />
            <span className="text-2xl font-bold gradient-text">VibeCherry</span>
          </div>
          <a href="https://github.com/bohselecta/vibecherry-app" target="_blank" rel="noopener noreferrer"
             className="px-6 py-2 rounded-full border border-pink-500/30 text-pink-300 hover:bg-pink-500/10 transition-all duration-300">
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-32 sand-texture">
        <div className="max-w-6xl mx-auto text-center">
          <div className="float-animation inline-block mb-8">
            <Image
              src="/vibecherry-logo.png"
              alt="VibeCherry Logo"
              width={80}
              height={80}
              className="logo-large"
            />
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-6 gradient-text leading-tight">
            VibeCherry
          </h1>
          
          <p className="text-2xl md:text-3xl text-orange-200/80 mb-4 font-light">
            AI-Powered Web App Generator
          </p>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform natural language into beautiful, fully functional web applications. 
            Like having a senior developer at your fingertips—powered by local AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://github.com/bohselecta/vibecherry-app/releases" target="_blank" rel="noopener noreferrer"
               className="glow-button px-10 py-5 rounded-full text-white font-semibold text-lg inline-flex items-center space-x-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Download for Mac/Windows/Linux</span>
            </a>
            
            <a href="#how-it-works" 
               className="px-10 py-5 rounded-full border-2 border-orange-400/50 text-orange-200 font-semibold text-lg hover:bg-orange-400/10 transition-all duration-300">
              Learn How It Works
            </a>
          </div>
          
          <div className="mt-12 text-sm text-gray-500">
            <span className="inline-flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
              <span>100% Local Processing • No API Costs • Complete Privacy</span>
            </span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text scroll-fade-in">
            Everything You Need to Create
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-8 scroll-fade-in">
              <div className="feature-icon text-pink-400 mb-4">🤖</div>
              <h3 className="text-2xl font-semibold text-pink-200 mb-3">AI-Powered Generation</h3>
              <p className="text-gray-400 leading-relaxed">
                Uses Google's Gemma 3 4B model locally via Ollama. Watch your app come to life token-by-token with real-time streaming.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-card p-8 scroll-fade-in delay-100">
              <div className="feature-icon text-cyan-400 mb-4">🔧</div>
              <h3 className="text-2xl font-semibold text-cyan-200 mb-3">Self-Healing Code</h3>
              <p className="text-gray-400 leading-relaxed">
                Automatic error detection and intelligent fixes. Your apps work perfectly, every time, with visual feedback.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-card p-8 scroll-fade-in delay-200">
              <div className="feature-icon text-orange-400 mb-4">🎨</div>
              <h3 className="text-2xl font-semibold text-orange-200 mb-3">Beautiful Design</h3>
              <p className="text-gray-400 leading-relaxed">
                Every app features stunning glassmorphism UI, responsive layouts, and modern animations—no design skills needed.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="glass-card p-8 scroll-fade-in" delay-300>
              <div className="feature-icon text-purple-400 mb-4">💬</div>
              <h3 className="text-2xl font-semibold text-purple-200 mb-3">Chat Interface</h3>
              <p className="text-gray-400 leading-relaxed">
                Describe what you want in plain English. Context-aware conversations for iterative improvements.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="glass-card p-8 scroll-fade-in" delay-400>
              <div className="feature-icon text-green-400 mb-4">⚡</div>
              <h3 className="text-2xl font-semibold text-green-200 mb-3">Lightning Fast</h3>
              <p className="text-gray-400 leading-relaxed">
                Generate complete web apps in under 60 seconds. Built with Tauri and Rust for native performance.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="glass-card p-8 scroll-fade-in" delay-500>
              <div className="feature-icon text-yellow-400 mb-4">🔒</div>
              <h3 className="text-2xl font-semibold text-yellow-200 mb-3">Privacy First</h3>
              <p className="text-gray-400 leading-relaxed">
                All processing happens on your machine. No cloud, no tracking, no usage limits. Your code stays yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 px-6 py-24 sand-texture">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 gradient-text scroll-fade-in">
            Get Started in 3 Steps
          </h2>
          
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 scroll-fade-in">
              <div className="md:w-1/4 text-center md:text-right">
                <div className="step-number">01</div>
              </div>
              <div className="md:w-3/4 gradient-border">
                <div className="gradient-border-inner">
                  <h3 className="text-3xl font-semibold text-pink-200 mb-4">Install Ollama</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Download and install Ollama from <a href="https://ollama.ai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">ollama.ai</a>. 
                    It's free, open-source, and runs on Mac, Windows, and Linux.
                  </p>
                  <div className="code-block">
                    <span className="text-gray-500"># Pull the AI model</span><br/>
                    <span className="text-pink-400">$</span> ollama pull gemma3:4b
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8 scroll-fade-in">
              <div className="md:w-1/4 text-center md:text-right">
                <div className="step-number">02</div>
              </div>
              <div className="md:w-3/4 gradient-border">
                <div className="gradient-border-inner">
                  <h3 className="text-3xl font-semibold text-cyan-200 mb-4">Download VibeCherry</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Grab the latest release from GitHub. Available for macOS, Windows, and Linux. 
                    No installation hassles—just download and run.
                  </p>
                  <a href="https://github.com/bohselecta/vibecherry-app/releases" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-semibold">View Releases on GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 scroll-fade-in">
              <div className="md:w-1/4 text-center md:text-right">
                <div className="step-number">03</div>
              </div>
              <div className="md:w-3/4 gradient-border">
                <div className="gradient-border-inner">
                  <h3 className="text-3xl font-semibold text-orange-200 mb-4">Start Creating</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Launch VibeCherry and describe your app idea in natural language. 
                    The AI will handle the rest, generating beautiful, working code instantly.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-300 text-sm">
                      "Create a todo list app"
                    </span>
                    <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">
                      "Build a calculator"
                    </span>
                    <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-300 text-sm">
                      "Make a weather dashboard"
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 gradient-text scroll-fade-in">
            Built for Creators
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 scroll-fade-in">
              <span className="text-4xl mb-4 inline-block">🚀</span>
              <h3 className="text-2xl font-semibold text-pink-200 mb-3">Rapid Prototyping</h3>
              <p className="text-gray-400 leading-relaxed">
                Generate working prototypes in minutes for hackathons, quick demos, or validating ideas.
              </p>
            </div>
            
            <div className="glass-card p-8 scroll-fade-in" delay-100>
              <span className="text-4xl mb-4 inline-block">📚</span>
              <h3 className="text-2xl font-semibold text-cyan-200 mb-3">Learning & Education</h3>
              <p className="text-gray-400 leading-relaxed">
                See how professional apps are structured. Learn modern HTML, CSS, and JavaScript patterns.
              </p>
            </div>
            
            <div className="glass-card p-8 scroll-fade-in" delay-200>
              <span className="text-4xl mb-4 inline-block">🎯</span>
              <h3 className="text-2xl font-semibold text-orange-200 mb-3">Personal Projects</h3>
              <p className="text-gray-400 leading-relaxed">
                Create custom tools, personal dashboards, and unique utilities without coding knowledge.
              </p>
            </div>
            
            <div className="glass-card p-8 scroll-fade-in" delay-300>
              <span className="text-4xl mb-4 inline-block">💼</span>
              <h3 className="text-2xl font-semibold text-purple-200 mb-3">Professional Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Generate boilerplate code, create client demos, and prototype features before full implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 px-6 py-24 sand-texture">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 gradient-text scroll-fade-in">
            Powered by Modern Tech
          </h2>
          <p className="text-xl text-gray-400 mb-12 scroll-fade-in">
            Built with cutting-edge frameworks and technologies for maximum performance and reliability
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card p-6 scroll-fade-in">
              <div className="text-4xl mb-2">⚛️</div>
              <div className="text-sm text-gray-400">React 18</div>
            </div>
            <div className="glass-card p-6 scroll-fade-in" delay-100>
              <div className="text-4xl mb-2">🦀</div>
              <div className="text-sm text-gray-400">Rust + Tauri</div>
            </div>
            <div className="glass-card p-6 scroll-fade-in" delay-200>
              <div className="text-4xl mb-2">🎨</div>
              <div className="text-sm text-gray-400">Tailwind CSS</div>
            </div>
            <div className="glass-card p-6 scroll-fade-in" delay-300>
              <div className="text-4xl mb-2">🤖</div>
              <div className="text-sm text-gray-400">Gemma 3 AI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="float-animation inline-block mb-8">
            <Image
              src="/cherry-basket-icon.png"
              alt="Cherry Basket"
              width={80}
              height={80}
              className="logo-glow"
            />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Ready to Create?
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join creators building the future of web development. 
            Turn your ideas into reality with the power of local AI.
          </p>
          
          <a href="https://github.com/bohselecta/vibecherry-app/releases" target="_blank" rel="noopener noreferrer"
             className="glow-button px-12 py-6 rounded-full text-white font-bold text-xl inline-flex items-center space-x-3">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Get VibeCherry Now</span>
          </a>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Image
              src="/vibecherry-logo.png"
              alt="VibeCherry Logo"
              width={32}
              height={32}
              className="cherry-icon"
            />
            <span className="text-xl font-bold gradient-text">VibeCherry</span>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <a href="https://github.com/bohselecta/vibecherry-app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">GitHub</a>
            <a href="https://github.com/bohselecta/vibecherry-app/wiki" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">Docs</a>
            <a href="https://github.com/bohselecta/vibecherry-app/issues" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">Issues</a>
          </div>
        </div>
      </footer>
    </div>
  );
}