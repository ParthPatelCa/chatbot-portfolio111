// ChatbotPortfolio React component from your Canvas
// Paste your full component code here if needed again after reset
// For this demo, inserting a basic fallback placeholder
export default function ChatbotPortfolio() {
  return (
    <div>
      <h1>Chatbot Portfolio</h1>
      export default function ChatbotPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-gray-50 text-gray-900 px-6 py-12 space-y-24 font-sans">

      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6 relative">
        <img src="https://source.unsplash.com/1600x500/?technology,ai" alt="AI Hero" className="rounded-xl shadow-md w-full object-cover" />
        <div className="absolute inset-0 bg-white bg-opacity-60 flex flex-col justify-center items-center space-y-4">
          <h1 className="text-5xl font-extrabold leading-tight">AI Chatbots for Small Businesses</h1>
          <p className="text-xl text-gray-600 max-w-xl">
            Automate customer support and convert more leads with 24/7 AI chatbots — built for dentists, coaches,
            Shopify stores, and local businesses.
          </p>
          <a href="#demo" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg shadow hover:bg-blue-700 transition">
            Try Demo Chatbot
          </a>
        </div>
      </section>

      {/* What I Offer */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-center">What You'll Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <div className="flex items-start space-x-3">
            <img src="https://source.unsplash.com/80x80/?robot" className="rounded" alt="Bot" />
            <p>🤖 Custom GPT-based chatbot trained on your FAQs, website, or PDFs</p>
          </div>
          <div className="flex items-start space-x-3">
            <img src="https://source.unsplash.com/80x80/?chat" className="rounded" alt="Chat" />
            <p>💬 Works via shareable link or embedded on your site</p>
          </div>
          <div className="flex items-start space-x-3">
            <img src="https://source.unsplash.com/80x80/?settings" className="rounded" alt="Settings" />
            <p>🛠️ No code required – I handle setup, hosting & updates</p>
          </div>
          <div className="flex items-start space-x-3">
            <img src="https://source.unsplash.com/80x80/?lightning" className="rounded" alt="Lightning" />
            <p>⚡ Replies instantly, improves over time, and saves you hours weekly</p>
          </div>
        </div>
      </section>

      {/* Demo Bots */}
      <section id="demo" className="max-w-5xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl font-semibold">Demo Bots (Try Them Now)</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a href="#" className="bg-white border border-gray-200 rounded-xl shadow px-6 py-4 hover:border-blue-500 w-full md:w-1/3">
            🦷 <strong>Dental Bot Demo</strong><br/>Check services, hours, insurance, and book appointments
          </a>
          <a href="#" className="bg-white border border-gray-200 rounded-xl shadow px-6 py-4 hover:border-blue-500 w-full md:w-1/3">
            🎯 <strong>Coach Lead Gen Bot</strong><br/>Qualifies leads and schedules a call
          </a>
        </div>
      </section>

      {/* Chatbase Embed */}
      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Live Chatbot Preview</h2>
        <div id="chatbase-bot"></div>
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            if(!window.chatbase || window.chatbase("getState") !== "initialized") {
              window.chatbase = (...args) => {
                if (!window.chatbase.q) window.chatbase.q = [];
                window.chatbase.q.push(args);
              };
              window.chatbase = new Proxy(window.chatbase, {
                get(target, prop) {
                  if (prop === "q") return target.q;
                  return (...args) => target(prop, ...args);
                }
              });
            }
            const onLoad = function() {
              const script = document.createElement("script");
              script.src = "https://www.chatbase.co/embed.min.js";
              script.id = "6FMJzrhRwTf2onZ-5qjhd";
              script.domain = "www.chatbase.co";
              document.body.appendChild(script);
            };
            if (document.readyState === "complete") {
              onLoad();
            } else {
              window.addEventListener("load", onLoad);
            }
          })();
        ` }} />
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-center">Setup & Hosting Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl p-6 shadow hover:shadow-lg">
            <h3 className="font-bold text-xl mb-2">Basic Bot</h3>
            <p>Trained on 1 page or PDF</p>
            <p className="text-blue-600 font-bold text-lg mt-2">$150</p>
          </div>
          <div className="bg-white border rounded-xl p-6 shadow hover:shadow-lg">
            <h3 className="font-bold text-xl mb-2">Advanced Bot</h3>
            <p>Multi-source, flows, branding</p>
            <p className="text-blue-600 font-bold text-lg mt-2">$300–$500</p>
          </div>
          <div className="bg-white border rounded-xl p-6 shadow hover:shadow-lg">
            <h3 className="font-bold text-xl mb-2">Custom Bot</h3>
            <p>For ecommerce or advanced logic</p>
            <p className="text-blue-600 font-bold text-lg mt-2">Custom Quote</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <h3 className="text-lg font-semibold">Monthly Hosting:</h3>
          <ul className="text-gray-700 space-y-2 mt-2">
            <li><strong>Starter:</strong> Free – client self-hosted</li>
            <li><strong>Managed:</strong> $25/mo – I host & perform light updates</li>
            <li><strong>Premium:</strong> $50/mo – Hosting + analytics + updates</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-50 py-12 rounded-xl text-center space-y-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">Ready to Chat?</h2>
        <p className="text-lg">Want a free consultation or want to see what I can build for your business?</p>
        <p className="text-lg">📧 Email: <a href="mailto:parthpatel2207@gmail.com" className="text-blue-600 underline">parthpatel2207@gmail.com</a></p>
        <p className="text-lg">📞 Phone: <a href="tel:+17808077028" className="text-blue-600 underline">780-807-7028</a></p>
        <p className="text-lg">📅 <a href="#" className="text-blue-600 underline">Book a 15-min call</a></p>
      </section>
    </div>
  );
}

    </div>
  );
}