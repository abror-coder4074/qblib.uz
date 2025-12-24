import React from 'react';
import { MapPin, Phone, Mail, Send, ArrowRight } from 'lucide-react';

const About = ({ t }) => {
    return (
        <section className="py-20 px-4 md:px-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-[#BD1C23] text-2xl md:text-4xl font-bold mb-4 uppercase tracking-wider">
                        {t.sectionTitle}
                    </h2>
                    <div className="w-24 h-1.5 bg-[#BD1C23] mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">

                    <div className="flex-1 space-y-8">
                        <div className="text-gray-700 leading-relaxed text-[16px] md:text-lg space-y-6">
                            <p>{t.aboutText1}</p>
                            <p>{t.aboutText2}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                            {t.stats.map((item, i) => (
                                <div key={i} className="border border-gray-100 p-8 rounded-[25px] text-center shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-[#BD1C23] text-3xl font-extrabold mb-2">{item.n}</div>
                                    <div className="text-gray-400 text-[11px] font-bold uppercase tracking-widest leading-tight">
                                        {item.t}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative w-full group">
                        <div className="absolute -top-5 -right-5 w-24 h-24 bg-pink-100/60 rounded-3xl -z-10 group-hover:translate-x-2 transition-transform"></div>
                        <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-pink-100/60 rounded-3xl -z-10 group-hover:-translate-x-2 transition-transform"></div>

                        <img
                            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000"
                            alt="Library Interior"
                            className="rounded-[40px] shadow-2xl w-full h-[480px] object-cover ring-4 ring-gray-50"
                        />
                    </div>
                </div>

                <div className="bg-white border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-[40px] p-10 md:p-16 relative mb-12">
                    <h3 className="text-[#002B49] text-2xl font-bold mb-12">
                        {t.contactTitle}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <a
                            href="https://www.google.com/maps/search/Quva+tumani+Bunyodkor+ko'chasi+24-uy"
                            target="_blank"
                            className="flex items-start gap-5 group"
                        >
                            <div className="bg-[#BD1C23]/10 p-3.5 rounded-full text-[#BD1C23] group-hover:bg-[#BD1C23] group-hover:text-white transition-all">
                                <MapPin size={26} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#002B49] mb-1.5 text-lg">{t.addressTitle}</h4>
                                <p className="text-gray-500 text-[14px] leading-relaxed group-hover:text-[#BD1C23] transition-colors">
                                    {t.addressDesc}
                                </p>
                            </div>
                        </a>

                        <a href="tel:+998911137035" className="flex items-start gap-5 group">
                            <div className="bg-[#BD1C23]/10 p-3.5 rounded-full text-[#BD1C23] group-hover:bg-[#BD1C23] group-hover:text-white transition-all">
                                <Phone size={26} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#002B49] mb-1.5 text-lg">{t.phoneTitle}</h4>
                                <p className="text-gray-500 text-[14px] group-hover:text-[#BD1C23] transition-colors">+998 91 113 70 35</p>
                            </div>
                        </a>

                        <a href="mailto:info@qb.buxakm.uz" className="flex items-start gap-5 group">
                            <div className="bg-[#BD1C23]/10 p-3.5 rounded-full text-[#BD1C23] group-hover:bg-[#BD1C23] group-hover:text-white transition-all">
                                <Mail size={26} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#002B49] mb-1.5 text-lg">Email</h4>
                                <p className="text-gray-500 text-[14px] group-hover:text-[#BD1C23] transition-colors">info@qb.buxakm.uz</p>
                            </div>
                        </a>

                        <a href="https://t.me/qblibuz" target="_blank" className="flex items-start gap-5 group">
                            <div className="bg-[#BD1C23]/10 p-3.5 rounded-full text-[#BD1C23] group-hover:bg-[#BD1C23] group-hover:text-white transition-all">
                                <Send size={26} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#002B49] mb-1.5 text-lg">Telegram</h4>
                                <p className="text-gray-500 text-[14px] group-hover:text-[#BD1C23] transition-colors">t.me/qbibuz         </p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="bg-[#BD1C23] text-white px-12 py-4.5 rounded-2xl font-bold flex items-center gap-4 hover:bg-[#a0181e] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-red-900/20 text-lg">
                        {t.btnMore} <ArrowRight size={22} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default About;