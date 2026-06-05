import { Bot, MessageSquare, Send, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

const predefinedAnswers: { [key: string]: string } = {
  'What is Mann Ki Baat?':
    'Mann Ki Baat is Prime Minister Narendra Modi\'s monthly radio programme broadcast on All India Radio, DD National, DD News, and online channels. It serves as a unique medium to share citizen stories, highlight community achievements, and build national unity.',
  'Latest housing schemes?':
    'The Pradhan Mantri Awas Yojana (PMAY) is a flagship government scheme aimed at providing affordable housing to all urban and rural poor. Over 4.2 Crore homes have been successfully constructed and delivered with cooking gas, power, and toilet facilities.',
  'International awards list?':
    'PM Narendra Modi has been conferred with the highest civilian honours from multiple countries. Some include: Order of Zayed (UAE), Order of St. Andrew (Russia), Grand Cross of the Legion of Honour (France), and the Order of the Nile (Egypt).',
  'How to write to the PM?':
    'Citizens can write directly to the Prime Minister by visiting pgportal.gov.in (Public Grievance Portal) or by using the \'Write to the PM\' feature on the official website NarendraModi.in and the NaMo App.',
};

export function NaMoAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Namaste! I am NaMo AI, your assistant for Prime Minister Narendra Modi\'s governance initiatives, speeches, and updates. How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const predefinedPrompts = [
    'What is Mann Ki Baat?',
    'Latest housing schemes?',
    'International awards list?',
    'How to write to the PM?',
  ];

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const triggerAIResponse = (userText: string) => {
    setIsTyping(true);

    setTimeout(() => {
      // Find matching predefined answer or use default
      let responseText =
        'Thank you for asking! For comprehensive reports, data-charts, and latest policy releases on this topic, please visit the News, Library or Governance sections of the NarendraModi.in website.';
      
      const matchedKey = Object.keys(predefinedAnswers).find(
        (key) => key.toLowerCase().includes(userText.toLowerCase()) || userText.toLowerCase().includes(key.toLowerCase())
      );

      if (matchedKey) {
        responseText = predefinedAnswers[matchedKey];
      } else {
        // Simple keyword matches
        if (userText.toLowerCase().includes('water') || userText.toLowerCase().includes('jal')) {
          responseText = 'The Jal Jeevan Mission has provided clean tap water to over 14.5 Crore rural households since its launch in 2019, significantly improving community health and women\'s welfare.';
        } else if (userText.toLowerCase().includes('account') || userText.toLowerCase().includes('jan dhan')) {
          responseText = 'Pradhan Mantri Jan Dhan Yojana (PMJDY) has opened more than 51 Crore zero-balance bank accounts, integrating rural households into the formal banking system and enabling direct benefits transfer (DBT).';
        } else if (userText.toLowerCase().includes('hello') || userText.toLowerCase().includes('namaste')) {
          responseText = 'Namaste! How can I assist you with information about the Prime Minister or ongoing governance schemes today?';
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          sender: 'ai',
          text: responseText,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add User Message
    const userMsg: Message = {
      id: String(Date.now()),
      sender: 'user',
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');

    // Trigger Response
    triggerAIResponse(text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-sans select-none">
      
      {/* Floating Circle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-bjp-blue text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-bjp-saffron hover:rotate-12 animate-bounce"
          aria-label="Open Chatbot"
        >
          <Sparkles className="h-6 w-6 animate-pulse" />
        </button>
      )}

      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="flex h-[520px] w-[350px] flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl transition-all duration-300 max-sm:w-[calc(100vw-32px)] max-sm:h-[80vh]">
          
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-bjp-blue to-bjp-blue/90 p-4 text-white">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-nm-cyan">
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <h4 className="text-sm font-black tracking-wider uppercase flex items-center gap-1">
                  NaMo AI <Sparkles className="h-3 w-3 text-bjp-saffron fill-current" />
                </h4>
                <p className="text-[10px] text-white/70 font-semibold leading-none">Your Governance Assistant</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 hover:bg-white/10 transition text-white/80 hover:text-white"
              aria-label="Close Chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-bjp-saffron text-white rounded-tr-none'
                      : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* AI Typing Indicator */}
            {isTyping && (
              <div className="flex w-full justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white border border-slate-100 px-4 py-3 text-xs text-slate-400 shadow-xs flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Predefined prompt pills (visible only when last message is from AI and user is not typing) */}
          {!isTyping && messages[messages.length - 1]?.sender === 'ai' && (
            <div className="bg-slate-50 px-4 pb-2 pt-1 flex flex-wrap gap-1.5">
              {predefinedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-black text-bjp-blue transition hover:border-bjp-saffron hover:bg-bjp-saffron/5"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Panel */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputVal);
            }}
            className="flex items-center gap-2 border-t p-3 bg-white"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold outline-none focus:border-bjp-saffron focus:bg-white"
            />
            <button
              type="submit"
              className="grid h-8 w-8 place-items-center rounded-full bg-bjp-blue text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-bjp-saffron"
              aria-label="Send Message"
            >
              <Send className="h-4 w-4 fill-current ml-0.5" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
