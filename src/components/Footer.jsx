import React from 'react';
import { Facebook, Instagram, Send } from 'lucide-react';

const Footer = ({ t }) => {
  return (
    <footer className="bg-[#0A1929] text-white pt-16 pb-8 px-4 md:px-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#BD1C23] text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold">K</div>
            <span className="text-xl font-bold uppercase tracking-wider">Kutubxona</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            {t.footerDesc}
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">{t.navTitle}</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {t.nav.map((item, i) => (
              <li key={i} className="hover:text-white transition-colors cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">{t.contactTitleShort}</h4>
          <ul className="space-y-4 text-gray-400 text-sm mb-6">
            <li>{t.addressDesc}</li>
            <li className="hover:text-white"><a href="tel:+998911137035">+998 91 113 70 35</a></li>
            <li className="hover:text-white"><a href="mailto:info@quvakutubxona.uz">info@qorovulbozorkutubxona.uz</a></li>
            <li className="hover:text-white"><a href="https://t.me/quvakutubxona" target="_blank">t.me/qorovulbozorkutubxona</a></li>
          </ul>
          
          <h4 className="text-lg font-bold mb-3">{t.workTimeTitle}</h4>
          <div className="text-gray-400 text-sm space-y-1">
            <p>{t.workHours}</p>
            <p>{t.lunchHours}</p>
            <p>{t.holiday}</p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">{t.subscribeTitle}</h4>
          <p className="text-gray-400 text-sm mb-6">{t.subscribeDesc}</p>
          <div className="flex bg-white rounded-lg overflow-hidden">
            <input 
              type="email" 
              placeholder={t.emailPlaceholder} 
              className="flex-1 px-4 py-3 text-black text-sm outline-none"
            />
            <button className="bg-[#BD1C23] px-6 py-3 font-bold hover:bg-[#a0181e] transition-colors">
              {t.btnSubscribe}
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs">
        <p>© 2025 {t.copyright}</p>
        <div className="flex gap-6">
          <a href="https://www.facebook.com/QorovulbozorLib21" className="hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Send size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;