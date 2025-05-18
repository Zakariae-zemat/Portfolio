import { useState, useRef } from 'react';
import { Send, User, Mail, ArrowRight, Loader, AlertCircle } from 'lucide-react';

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

  // Add validation state
  const [validation, setValidation] = useState({
    name: { valid: true, message: '' },
    email: { valid: true, message: '' },
    message: { valid: true, message: '' }
  });

  const formRef = useRef(null);

  // Email validation regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Constants for validation
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 50;
  const MIN_MESSAGE_LENGTH = 10;
  const MAX_MESSAGE_LENGTH = 500;

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormState({
      ...formState,
      [name]: value
    });
    
    // Clear validation errors when user types
    setValidation({
      ...validation,
      [name]: { valid: true, message: '' }
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newValidation = { ...validation };
    
    // Validate name
    if (!formState.name.trim()) {
      newValidation.name = { valid: false, message: 'Name is required' };
      isValid = false;
    } else if (formState.name.length < MIN_NAME_LENGTH) {
      newValidation.name = { valid: false, message: `Name must be at least ${MIN_NAME_LENGTH} characters` };
      isValid = false;
    } else if (formState.name.length > MAX_NAME_LENGTH) {
      newValidation.name = { valid: false, message: `Name cannot exceed ${MAX_NAME_LENGTH} characters` };
      isValid = false;
    }
    
    // Validate email
    if (!formState.email.trim()) {
      newValidation.email = { valid: false, message: 'Email is required' };
      isValid = false;
    } else if (!emailPattern.test(formState.email)) {
      newValidation.email = { valid: false, message: 'Please enter a valid email address' };
      isValid = false;
    }
    
    // Validate message
    if (!formState.message.trim()) {
      newValidation.message = { valid: false, message: 'Message is required' };
      isValid = false;
    } else if (formState.message.length < MIN_MESSAGE_LENGTH) {
      newValidation.message = { valid: false, message: `Message must be at least ${MIN_MESSAGE_LENGTH} characters` };
      isValid = false;
    } else if (formState.message.length > MAX_MESSAGE_LENGTH) {
      newValidation.message = { valid: false, message: `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters` };
      isValid = false;
    }
    
    setValidation(newValidation);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
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
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="space-y-6">
                      {/* Name field */}
                      <div className="relative">
                        <label htmlFor="name" className="block text-blue-200 text-sm font-medium mb-1">
                          Your Name <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            minLength={MIN_NAME_LENGTH}
                            maxLength={MAX_NAME_LENGTH}
                            className={`w-full bg-blue-800/30 text-blue-100 border ${
                              validation.name.valid ? 'border-blue-700' : 'border-red-500'
                            } rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent`}
                            placeholder="Your Name"
                          />
                          <User className="absolute left-3 top-3.5 text-blue-400 w-4 h-4" />
                        </div>
                        {!validation.name.valid && (
                          <div className="flex items-center mt-1 text-red-400 text-sm">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {validation.name.message}
                          </div>
                        )}
                        <div className="mt-1 text-blue-300 text-xs">
                          {formState.name.length}/{MAX_NAME_LENGTH} characters
                        </div>
                      </div>
                      
                      {/* Email field */}
                      <div className="relative">
                        <label htmlFor="email" className="block text-blue-200 text-sm font-medium mb-1">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            className={`w-full bg-blue-800/30 text-blue-100 border ${
                              validation.email.valid ? 'border-blue-700' : 'border-red-500'
                            } rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent`}
                            placeholder="your.email@example.com"
                          />
                          <Mail className="absolute left-3 top-3.5 text-blue-400 w-4 h-4" />
                        </div>
                        {!validation.email.valid && (
                          <div className="flex items-center mt-1 text-red-400 text-sm">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {validation.email.message}
                          </div>
                        )}
                      </div>
                      
                      {/* Message field */}
                      <div className="relative">
                        <label htmlFor="message" className="block text-blue-200 text-sm font-medium mb-1">
                          Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          minLength={MIN_MESSAGE_LENGTH}
                          maxLength={MAX_MESSAGE_LENGTH}
                          rows={4}
                          className={`w-full bg-blue-800/30 text-blue-100 border ${
                            validation.message.valid ? 'border-blue-700' : 'border-red-500'
                          } rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none`}
                          placeholder="Your message here..."
                        />
                        {!validation.message.valid && (
                          <div className="flex items-center mt-1 text-red-400 text-sm">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {validation.message.message}
                          </div>
                        )}
                        <div className="mt-1 text-blue-300 text-xs flex justify-between">
                          <span>{formState.message.length}/{MAX_MESSAGE_LENGTH} characters</span>
                          <span>{MIN_MESSAGE_LENGTH} characters minimum</span>
                        </div>
                      </div>
                      
                      {/* Error message */}
                      {formStatus.error && (
                        <div className="bg-red-400/20 border border-red-400/30 text-red-100 p-3 rounded-lg text-sm">
                          {formStatus.error}
                        </div>
                      )}
                      
                      {/* Submit button */}
                      <button
                        type="submit"
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
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}