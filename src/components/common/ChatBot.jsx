import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { X, Send, User, Minus, Calendar, FileText, Headphones, Zap, Battery, Gauge, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { debounce } from '../../utils/helpers';

// ===== THEME CONFIGURATION =====
const theme = {
  primary: '#0FB9B1',      // Teal primary
  primaryDark: '#0A6F6B',   // Dark teal
  primaryLight: '#E6FFFA',  // Light teal
  accent: '#A7F3D0',        // Mint accent
  glassBg: 'rgba(255, 255, 255, 0.8)',
  glassBorder: 'rgba(255, 255, 255, 0.3)',
};

// ===== AVATAR COMPONENT =====
const ScootyAssistantAvatar = ({ isTyping }) => (
  <div className="relative">
    <motion.div
      animate={isTyping ? {
        boxShadow: [
          '0 0 0 0 rgba(15, 185, 177, 0.4)',
          '0 0 0 10px rgba(15, 185, 177, 0)',
        ]
      } : {}}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0FB9B1] to-[#0A6F6B] flex items-center justify-center relative overflow-hidden"
    >
      {/* Scooter helmet illustration */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4C8 4 4.5 7 4.5 11V14C4.5 16 6 18 8 18.5L10 20H14L16 18.5C18 18 19.5 16 19.5 14V11C19.5 7 16 4 12 4Z" fill="white"/>
        <circle cx="12" cy="11" r="2" fill="#0FB9B1"/>
        <path d="M8.5 9L6 11M15.5 9L18 11" stroke="#0A6F6B" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Visor detail */}
        <path d="M16 13C15 14.5 13.5 15 12 15C10.5 15 9 14.5 8 13" stroke="#0A6F6B" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
    </motion.div>
    
    {/* Status dot */}
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
    >
      <motion.div
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-green-500 rounded-full opacity-50"
      />
    </motion.div>
  </div>
);

// ===== QUICK REPLY CHIPS =====
const QuickReplies = ({ onSelect }) => {
  const replies = [
    { icon: Calendar, text: 'Book Test Ride', action: 'test-ride' },
    { icon: CreditCard, text: 'EMI Details', action: 'emi' },
    { icon: Gauge, text: 'Compare Models', action: 'compare' },
    { icon: Battery, text: 'Battery & Range', action: 'battery' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-2 mt-3"
    >
      {replies.map((reply, index) => (
        <motion.button
          key={reply.action}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(reply.action)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-[#0FB9B1]/20 rounded-full text-sm text-gray-700 hover:bg-[#0FB9B1] hover:text-white transition-all shadow-sm"
        >
          <reply.icon className="w-3.5 h-3.5" />
          <span>{reply.text}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

// ===== TYPING INDICATOR =====
const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-3 py-2">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
        className="w-2 h-2 bg-[#0FB9B1] rounded-full opacity-60"
      />
    ))}
  </div>
);

// ===== SUGGESTION INPUT =====
const suggestions = [
  'What is the range?',
  'Show me EMI options',
  'Book a test ride',
  'Compare all models',
  'Battery warranty',
];

// ===== MAIN CHATBOT COMPONENT =====
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  // Initialize with greeting
  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: `${getGreeting()} 👋 Ready for an electric upgrade? I'm your CDEV AI assistant. How can I help you today?`,
        timestamp: new Date(),
        showQuickReplies: true
      }
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  // Memoized filtered suggestions for performance
  const filteredSuggestions = useMemo(() =>
    suggestions.filter(s => 
      s.toLowerCase().includes(input.toLowerCase()) && input.length > 0
    ), [input]
  );

  const handleQuickReply = useCallback((action) => {
    const responses = {
      'test-ride': "Great! I can help you book a test ride. Please share your city and preferred date.",
      'emi': "Here's our EMI options:\n• City Cruiser: ₹3,499/month\n• Sport Pro: ₹4,999/month\n• Premium Elite: ₹5,999/month\n\nAll with 0% interest for 12 months! 🎉",
      'compare': "Let me compare our models:\n\n🏍️ City Cruiser - 80km range, 45km/h\n⚡ Sport Pro - 120km range, 75km/h\n🚀 Premium Elite - 150km range, 85km/h\n\nWhich one interests you?",
      'battery': "All our scooters come with:\n• Premium lithium-ion battery\n• 3-5 years warranty\n• Fast charging (2.5-4 hours)\n• Running cost: ₹0.20/km\n\nSaving ₹15,000+/year on fuel! 💰"
    };

    setMessages(prev => [...prev, 
      { role: 'user', content: responses[action].split('\n')[0], timestamp: new Date() },
      { role: 'assistant', content: responses[action], timestamp: new Date() }
    ]);
  }, []);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    const currentInput = input;
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowSuggestions(false);

    try {
      // Check if API key exists
      const apiKey = import.meta.env.VITE_CHATBOT_API_KEY;
      if (!apiKey) {
        throw new Error('API key not configured');
      }

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'CDEV Assistant'
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-3.1-8b-instruct',
          messages: [
            {
              role: 'system',
              content: `You are a premium EV assistant for CDEV (electric scooters). Be friendly, helpful, and conversion-focused. Highlight savings, eco benefits, and premium features. Keep responses concise but enthusiastic.`
            },
            ...messages.slice(-6).map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            {
              role: 'user',
              content: currentInput
            }
          ],
          max_tokens: 512,
          temperature: 0.7,
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid API response format');
      }

      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm having a quick connection issue. You can also reach us at support@cdev.in or book a test ride directly on our website! 🛵",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (filteredSuggestions.length === 1) {
        setInput(filteredSuggestions[0]);
        setShowSuggestions(false);
      } else {
        sendMessage();
      }
    }
  }, [filteredSuggestions, sendMessage]);

  // Message animation variants - reduced for mobile performance
  const messageVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }), []);

  return (
    <>
      {/* Premium Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#0FB9B1] rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#0FB9B1] to-[#0A6F6B] text-white shadow-2xl flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Premium Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              height: isMinimized ? '70px' : '600px'
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed bottom-2 right-2 left-2 mx-auto z-50 w-full max-w-[380px] sm:bottom-6 sm:right-6 sm:left-auto sm:mx-0 sm:w-96 bg-white/95 sm:backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/30"
            style={{ backdropFilter: window.innerWidth > 640 ? 'blur(16px)' : 'none', maxHeight: isMinimized ? '70px' : '90vh' }}
          >
            {/* Premium Header */}
            <div className="bg-gradient-to-r from-[#0FB9B1] to-[#0A6F6B] p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ScootyAssistantAvatar isTyping={isLoading} />
                <div>
                  <h3 className="font-semibold text-white">CDEV AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-xs text-white/80">Online • Ready to help</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <Minus className="w-4 h-4 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-2 sm:p-4 bg-gradient-to-b from-[#E6FFFA]/30 to-white/50">
                  <div className="space-y-4">
                    <AnimatePresence>
                      {messages.map((message, index) => (
                        <motion.div
                          key={index}
                          variants={messageVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.2, delay: Math.min(index * 0.05, 0.3) }}
                          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex gap-2 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                            {/* Avatar for assistant messages */}
                            {message.role === 'assistant' && (
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0FB9B1] to-[#0A6F6B] flex items-center justify-center flex-shrink-0">
                                <Zap className="w-3 h-3 text-white" />
                              </div>
                            )}
                            
                            {/* Message Bubble */}
                            <div>
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={`px-4 py-3 rounded-2xl ${
                                  message.role === 'user'
                                    ? 'bg-gradient-to-r from-[#0FB9B1] to-[#0A6F6B] text-white shadow-lg'
                                    : 'bg-white/80 backdrop-blur-sm border border-white/30 text-gray-800 shadow-sm'
                                }`}
                                style={message.role === 'assistant' ? { 
                                  background: 'rgba(255, 255, 255, 0.9)',
                                  backdropFilter: 'blur(8px)'
                                } : {}}
                              >
                                <p className="text-sm whitespace-pre-wrap leading-relaxed">
                                  {message.content}
                                </p>
                              </motion.div>
                              
                              {/* Quick replies for first message */}
                              {message.showQuickReplies && (
                                <QuickReplies onSelect={handleQuickReply} />
                              )}
                              
                              <p className={`text-xs mt-1.5 ${
                                message.role === 'user' ? 'text-right' : 'text-left'
                              } text-gray-400`}>
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0FB9B1] to-[#0A6F6B] flex items-center justify-center">
                            <Zap className="w-3 h-3 text-white" />
                          </div>
                          <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl px-4 py-2">
                            <TypingIndicator />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="px-2 py-2 sm:px-4 bg-white/50 backdrop-blur-sm border-t border-white/30 flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#0FB9B1] text-white rounded-xl text-xs font-medium hover:bg-[#0A6F6B] transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Test Ride
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#0A6F6B] text-white rounded-xl text-xs font-medium hover:bg-[#0FB9B1] transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Brochure
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-700 text-white rounded-xl text-xs font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Headphones className="w-3.5 h-3.5" />
                    Human
                  </motion.button>
                </div>

                {/* Premium Input Area */}
                <div className="p-2 sm:p-4 bg-white/80 backdrop-blur-sm border-t border-white/30">
                  <div className="relative">
                    <div className="flex gap-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => {
                          const value = e.target.value;
                          setInput(value);
                          if (value.length > 0) {
                            setShowSuggestions(true);
                          }
                        }}
                        onKeyPress={handleKeyPress}
                        onFocus={() => setShowSuggestions(true)}
                        placeholder="Ask about test rides, EMI, range..."
                        className="flex-1 px-3 py-2 sm:px-4 sm:py-3 bg-white border border-[#0FB9B1]/20 rounded-xl focus:outline-none focus:border-[#0FB9B1] focus:ring-2 focus:ring-[#0FB9B1]/20 text-sm pr-12"
                        disabled={isLoading}
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={sendMessage}
                        disabled={!input.trim() || isLoading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#0FB9B1] to-[#0A6F6B] text-white p-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                      >
                        <Send className="w-4 h-4" />
                      </motion.button>
                    </div>
                    
                    {/* Auto-suggestions */}
                    <AnimatePresence>
                      {showSuggestions && filteredSuggestions.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-xl shadow-lg border border-[#0FB9B1]/20 overflow-hidden"
                        >
                          {filteredSuggestions.map((suggestion, index) => (
                            <motion.button
                              key={suggestion}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onClick={() => {
                                setInput(suggestion);
                                setShowSuggestions(false);
                                inputRef.current?.focus();
                              }}
                              className="w-full px-4 py-2 text-left text-sm hover:bg-[#E6FFFA] transition-colors flex items-center gap-2"
                            >
                              <Zap className="w-3 h-3 text-[#0FB9B1]" />
                              {suggestion}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Savings highlight */}
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-center mt-2 text-[#0A6F6B]"
                  >
                    ⚡ Save ₹15,000/year on fuel costs
                  </motion.p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;