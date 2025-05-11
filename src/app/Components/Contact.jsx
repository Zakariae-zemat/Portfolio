import { useState, useRef } from 'react';
import { Send, User, Mail, ArrowRight, Loader } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSending: false,
    isSent: false,
    error: null
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSending: true, isSent: false, error: null });

    // Create a hidden form element
    const form = document.createElement('form');
    form.style.display = 'none';
    form.method = 'POST';
    form.action = 'https://formsubmit.co/zakariaezemat@gmail.com';
    
    // Add form data
    const addField = (name, value) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };
    
    addField('name', formState.name);
    addField('email', formState.email);
    addField('message', formState.message);
    addField('_captcha', 'false');
    addField('_next', 'https://zemat-zakariae.vercel.app/');
    addField('_template', 'table');
    
    // Show success message BEFORE submitting
    setFormStatus({ isSending: false, isSent: true, error: null });
    
    // Clear form inputs
    setFormState({ name: '', email: '', message: '' });
    
    // Add the form to body, submit it, and set a timeout for redirect
    document.body.appendChild(form);
    
    // Set timeout to submit the form after showing success message
    setTimeout(() => {
      form.submit();
    }, 3000); // Show success message for 3 seconds before submitting
  };

  return (
    <div className="w-full py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
        </div>

        {/* Contact form and globe container */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Contact form */}
          <div className="w-full lg:w-1/2 max-w-lg">
            <div className="relative">
              {/* Form glowing background */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl transform -translate-y-4 translate-x-2"></div>
              
              <div className="relative bg-blue-900/40 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-blue-100 mb-6">Send a Message</h3>
                
                {formStatus.isSent ? (
                  <div className="bg-blue-800/50 rounded-lg p-6 text-center border border-blue-400/30 mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                      <Send className="text-blue-300 w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-blue-100 mb-2">Message Sent!</h4>
                    <p className="text-blue-200">Thank you for reaching out. I'll get back to you soon.</p>
                    <p className="text-blue-300 text-sm mt-4">Redirecting you back to the homepage in a few seconds...</p>
                  </div>
                ) : (
                  <div>
                    <div className="space-y-6">
                      {/* Name field */}
                      <div className="relative">
                        <label htmlFor="name" className="block text-blue-200 text-sm font-medium mb-1">Your Name</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-blue-800/30 text-blue-100 border border-blue-700 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="Your Name"
                          />
                          <User className="absolute left-3 top-3.5 text-blue-400 w-4 h-4" />
                        </div>
                      </div>
                      
                      {/* Email field */}
                      <div className="relative">
                        <label htmlFor="email" className="block text-blue-200 text-sm font-medium mb-1">Email Address</label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-blue-800/30 text-blue-100 border border-blue-700 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="Your Email"
                          />
                          <Mail className="absolute left-3 top-3.5 text-blue-400 w-4 h-4" />
                        </div>
                      </div>
                      
                      {/* Message field */}
                      <div className="relative">
                        <label htmlFor="message" className="block text-blue-200 text-sm font-medium mb-1">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full bg-blue-800/30 text-blue-100 border border-blue-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                          placeholder="Your message here..."
                        />
                      </div>
                      
                      {/* Error message */}
                      {formStatus.error && (
                        <div className="bg-red-400/20 border border-red-400/30 text-red-100 p-3 rounded-lg text-sm">
                          {formStatus.error}
                        </div>
                      )}
                      
                      {/* Submit button */}
                      <button
                        onClick={handleSubmit}
                        disabled={formStatus.isSending}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></div>
                        <span className="relative flex items-center">
                          {formStatus.isSending ? (
                            <>
                              <Loader className="w-5 h-5 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}