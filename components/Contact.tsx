import React, { useState } from 'react';
import { SOCIALS } from '../constants';
import { Send, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate generic API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-background pt-24 pb-12 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-900/20 rounded-[100%] blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-20">
            {/* Contact Info Side */}
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">Let's build something <br/> <span className="text-indigo-500">extraordinary.</span></h2>
                <p className="text-xl text-textSecondary mb-10">
                Whether you have an idea for a startup or need to scale your existing platform, I'm here to help.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-surface border border-border rounded-lg text-indigo-500">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="text-textPrimary font-semibold mb-1">Address</h4>
                            <p className="text-textSecondary">73/74 Sutikhalpar, Dhalpur, Faridabad,<br/> Jatrabari, Dhaka-1204</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-surface border border-border rounded-lg text-indigo-500">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="text-textPrimary font-semibold mb-1">Phone</h4>
                            <a href="tel:01993039153" className="text-textSecondary hover:text-indigo-500 transition-colors">01993039153</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-surface border border-border rounded-lg text-indigo-500">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 className="text-textPrimary font-semibold mb-1">Email</h4>
                            <a href="mailto:sojibmir098@gmail.com" className="text-textSecondary hover:text-indigo-500 transition-colors">sojibmir098@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="bg-surface border border-border rounded-3xl p-8 shadow-2xl shadow-black/5">
                {formState === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center animate-fade-in py-12">
                    <CheckCircle size={64} className="text-green-500 mb-6" />
                    <h3 className="text-2xl font-bold text-textPrimary mb-2">Message Sent!</h3>
                    <p className="text-textSecondary text-center mb-8">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    <button 
                    onClick={() => setFormState('idle')}
                    className="text-sm font-medium text-indigo-500 hover:text-indigo-400 underline"
                    >
                    Send another message
                    </button>
                </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-textSecondary mb-2">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-input border border-border rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-textSecondary/50"
                        placeholder="John Doe"
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-2">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-input border border-border rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-textSecondary/50"
                        placeholder="john@example.com"
                    />
                    </div>
                    <div>
                    <label htmlFor="message" className="block text-sm font-medium text-textSecondary mb-2">Message</label>
                    <textarea 
                        id="message"
                        required
                        rows={4}
                        className="w-full bg-input border border-border rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-indigo-500 transition-colors resize-none placeholder:text-textSecondary/50"
                        placeholder="Tell me about your project..."
                    />
                    </div>
                    <button 
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-textPrimary text-background font-bold py-4 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    {formState !== 'submitting' && <Send size={18} />}
                    </button>
                </form>
                )}
            </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-textSecondary text-sm">
            © {new Date().getFullYear()} Mir. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {SOCIALS.map((social) => (
              <a 
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-textPrimary transition-colors transform hover:scale-110"
                aria-label={social.platform}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;