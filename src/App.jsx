import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Books from './components/Books';
import Services from './components/Services';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import LibraryPage from './pages/LibraryPage';
import ManagementPage from './pages/ManagementPage';

const translations = {
  uz: {
    nav: ["Bosh sahifa", "Biz haqida", "Kitoblarimiz", "Kutubxona", "Yangiliklar", "Raxbariyat"],
    heroTitle: "Bilim va Madaniyat Markazi",
    heroSubtitle: "Zamonaviy kutubxona tajribasi",
    heroDesc: "Minglab kitoblar, zamonaviy texnologiyalar va qulay muhitda bilim olish imkoniyati",
    btnEnter: "Kutubxonaga kirish",
    btnAbout: "Biz haqida",
    sectionTitle: "Qoravulbozor tuman Axborot kutubxona markazi",
    aboutText1: "Kitob insonni kamolotga eltuvchi mayoqdir. Kitob qalbni tarbiyalabgina qolmay, inson tafakkuri va dunyoqarashining yuksalishiga ham beminnat xizmat qiladi. Shu o‘rinda o‘sib kelayotgan yosh avlodni kitob mutolaasiga chorlash va kitobxonlik madaniyatini yuksaltirish maqsadida Qoravulbozor tumanida zamonaviy qulayliklarga ega bo‘lgan yangi axborot-kutubxona markazi o‘z faoliyatini boshladi.",
    aboutText2: "Mustaqilligimizning 33 yillik shodiyonalari arafasida ochilgan ushbu markaz “Tashabbusli budjet” loyihasi doirasida 1 mlrd 200 mln so‘m va mahalliy budjetdan 650 mln so‘m mablag‘ evaziga qad rostladi. Alisher Navoiy nomidagi O‘zbekiston milliy kutubxonasi tomonidan ajratilgan 360 mln so‘m evaziga esa markaz 20 ta monoblok, interaktiv doska va zamonaviy mebellar bilan to‘liq jihozlandi.",
    statsTitle: "Kutubxonamiz raqamlarda",
    stats: [
      { n: "100+", t: "Kunlik qatnov" },
      { n: "44 460", t: "Kitoblar fondi" },
      { n: "2000+", t: "Elektron kitoblar" },
      { n: "16", t: "Malakali xodimlar" }
    ],
    contactTitle: "Bog'lanish uchun ma'lumotlar",
    addressTitle: "Manzil",
    addressDesc: "Qoravulbozor tumani, Mustaqillik ko'chasi, 1-uy",
    phoneTitle: "Telefon",
    btnMore: "Batafsil ma'lumot",
    booksSectionTitle: "Kutubxona Kitoblari",
    booksSectionDesc: "Eng sara kitoblar to'plami. Ilm-fan, badiiy adabiyot va boshqa sohalardagi kitoblarni topishingiz mumkin.",
    categories: [
      { id: 'all', name: 'Barcha kitoblar' },
      { id: 'badiiy', name: 'Badiiy adabiyot' },
      { id: 'bolalar', name: 'Bolalar adabiyoti' },
      { id: 'jahon', name: 'Jahon adabiyoti' },
      { id: 'oqv', name: "O'quv adabiyoti" }
    ],
    servicesTitle: "Kutubxona xizmatlari",
    service1Title: "Zamonaviy o'quv zallari",
    service1Desc: "Qulay va zamonaviy jihozlangan o'quv zallari, individual va guruh bo'lib o'qish imkoniyatlari.",
    service2Title: "Internet va Wi-Fi",
    service2Desc: "Yuqori tezlikdagi internet va bepul Wi-Fi xizmati.",
    footerDesc: "Qoravulbozor tuman Axborot kutubxona markazi - bilim va ma'rifat ulashamiz.",
    navTitle: "Navigatsiya",
    contactTitleShort: "Bog'lanish",
    workTimeTitle: "Ish vaqti:",
    workHours: "Soat 08:00 dan - 18:00 gacha",
    lunchHours: "Tushlik 12:00 dan - 13:00 gacha",
    holiday: "Dam olish kunisiz",
    subscribeTitle: "Yangiliklarga obuna bo'ling",
    subscribeDesc: "Eng so'nggi yangiliklar va e'lonlardan xabardor bo'ling.",
    emailPlaceholder: "Email manzilingiz",
    btnSubscribe: "Obuna",
    copyright: "Qoravulbozor tuman Axborot kutubxona markazi. Barcha huquqlar himoyalangan.",
    aboutPageTitle: "Qoravulbozor tuman Axborot kutubxona markazi",
    aboutPageSubtitle: "Mustaqilligimizning 33 yilligi arafasida foydalanishga topshirilgan zamonaviy bilim maskani",
    aboutHistoryTitle: "Tarix va rivojlanish",
    aboutFullText1: "Ko‘p yillar davomida tuman kutubxonasi turli tashkilotlar binolarida ijara asosida faoliyat yuritgan. 2023-yilgi “Tashabbusli budjet” loyihasi va mahalliy budjet ko‘magida markaz o‘zining zamonaviy binosiga ega bo‘ldi.",
    aboutFullText2: "Markaz direktori Sharofat Yuldasheva rahbarligida 16 nafar xodim aholiga xizmat ko‘rsatmoqda. Bugungi kunda markazda 45 mingta bosma va 2 mingta elektron kitoblar fondi mavjud.",
    aboutFullText3: "Tumandagi 3 ta mahallada kutubxona filiallari ochilgan. Yangi binodagi sharoitlar kunlik qatnovni 100 nafargacha yetkazish imkonini beradi.",
    missionTitle: "Bizning vazifamiz",
    missionDesc: "Yosh avlodni mutolaaga chorlash va kitobxonlik madaniyatini yuksaltirish.",
    goalTitle: "Bizning maqsadimiz",
    goalDesc: "Aholining axborot ehtiyojlarini zamonaviy texnologiyalar yordamida to‘liq qondirish.",
    ourServicesTitle: "Xizmatlarimiz",
    servicesList: [
      { title: "Kitob berish xizmati", desc: "45,000 dan ortiq kitoblar fondi." },
      { title: "Internet va kompyuter", desc: "20 ta zamonaviy monoblok va yuqori tezlikdagi internet." },
      { title: "Maslahat xizmati", desc: "Tajribali kutubxonachilar tomonidan metodik yordam." },
      { title: "O'quv zallari", desc: "Interaktiv doska va qulay mebellar bilan jihozlangan zallar." },
      { title: "Elektron kutubxona", desc: "2000 dan ortiq elektron resurslar bazasi." },
      { title: "Filiallar xizmati", desc: "3 ta mahallada tashkil etilgan kutubxona filiallari." }
    ],
    libTitle: "Qoravulbozor tuman Axborot kutubxona markazi",
    libSubtitle: "Bilim olish uchun barcha sharoitlar mavjud",
    libSearch: "Kitob nomi yoki muallifni kiriting...",
    libCard1: "Elektron kutubxona",
    libCard1Desc: "Masofadan turib mutolaa qilish imkoniyati.",
    libCard2: "QR-Kitoblar",
    libCard2Desc: "Skaner qilish orqali yuklab oling.",
    libCard3: "Xalqaro baza",
    libCard3Desc: "Raqamli kutubxonalar bilan integratsiya.",
    managementTitle: "Markaz rahbariyati",
    managementSubtitle: "Mas'ul xodimlarimiz",
    positionDirector: "Direktor",
    positionDeputy: "Direktor o'rinbosari",
    managementContact: "Qabul vaqti:",
    managementEmail: "Email:",
    managementPhone: "Tel:",
    rulesTitle: "Kutubxona qoidalari",
    rulesSubtitle: "Tartib va qulay muhit uchun qoidalarimiz",
    rule1: "Kutubxonaga tashrif buyurish uchun a'zolik kartasi talab qilinadi",
    rule2: "Kitoblarni uyga berish muddati - 14 kun",
    rule3: "Kitoblarni o'z vaqtida qaytarish majburiy",
    rule4: "Kutubxona ichida tinchlikni saqlash shart",
    rule5: "Kitoblarga ehtiyotkorona munosabatda bo'lish",
    rule6: "Ovqatlanish va ichimliklar taqiqlanadi",
  },
  ru: {
    nav: ["Главная", "О нас", "Наши книги", "Библиотека", "Новости", "Руководство"],
    heroTitle: "Центр знаний и культуры",
    heroSubtitle: "Современный опыт библиотеки",
    heroDesc: "Тысячи книг, современные технологии и комфортная среда",
    btnEnter: "Войти",
    btnAbout: "О нас",
    sectionTitle: "Информационно-библиотечный центр Караулбазарского района",
    aboutText1: "Книга — это маяк, ведущий человека к совершенству. Она не только воспитывает душу, но и вносит неоценимый вклад в развитие мышления и мировоззрения. В Караулбазарском районе открылся новый современный информационно-библиотечный центр.",
    aboutText2: "Открытый в канун 33-летия независимости, центр был построен на средства проекта «Инициативный бюджет» (1,2 млрд сумов) и местного бюджета (650 млн сумов). Благодаря Национальной библиотеке имени Алишера Навои центр был оснащен 20 моноблоками и интерактивными досками.",
    statsTitle: "Библиотека в цифрах",
    stats: [
      { n: "100+", t: "Ежедневных посещений" },
      { n: "44 460", t: "Книжный фонд" },
      { n: "2000+", t: "Электронных книг" },
      { n: "16", t: "Сотрудников" }
    ],
    contactTitle: "Контактная информация",
    addressTitle: "Адрес",
    addressDesc: "Караулбазарский район, улица Мустакиллик, дом 1",
    phoneTitle: "Телефон",
    btnMore: "Подробнее",
    booksSectionTitle: "Библиотечные Книги",
    booksSectionDesc: "Коллекция лучших книг во всех областях.",
    categories: [
      { id: 'all', name: 'Все книги' },
      { id: 'badiiy', name: 'Художественная' },
      { id: 'bolalar', name: 'Детская' },
      { id: 'jahon', name: 'Мировая' },
      { id: 'oqv', name: 'Учебная' }
    ],
    servicesTitle: "Услуги библиотеки",
    service1Title: "Читальные залы",
    service1Desc: "Современные залы для индивидуальных занятий.",
    service2Title: "Интернет и Wi-Fi",
    service2Desc: "Бесплатный Wi-Fi во всех залах.",
    footerDesc: "ИБЦ Караулбазарского района - делимся знаниями.",
    navTitle: "Навигация",
    contactTitleShort: "Контакты",
    workTimeTitle: "Рабочее время:",
    workHours: "С 08:00 до 18:00",
    lunchHours: "Обед с 12:00 до 13:00",
    holiday: "Без выходных",
    subscribeTitle: "Подписка",
    subscribeDesc: "Будьте в курсе новостей.",
    emailPlaceholder: "Ваш Email",
    btnSubscribe: "Подписаться",
    copyright: "ИБЦ Караулбазарского района. Все права защищены.",
    aboutPageTitle: "ИБЦ Караулбазарского района",
    aboutPageSubtitle: "Современный центр знаний, открытый к 33-летию независимости",
    aboutHistoryTitle: "История и развитие",
    aboutFullText1: "Долгое время центр работал в арендованных помещениях. Благодаря проекту «Инициативный бюджет» 2023 года, библиотека обрела собственное современное здание.",
    aboutFullText2: "Под руководством директора Шарофат Юлдашевой 16 сотрудников обслуживают население. Фонд включает 45 000 печатных и 2 000 электронных книг.",
    aboutFullText3: "Открыты филиалы в 3 махаллях. Условия в новом здании позволяют принимать до 100 посетителей в день.",
    missionTitle: "Наша миссия",
    missionDesc: "Приобщение молодого поколения к чтению и повышение культуры книголюбия.",
    goalTitle: "Наша цель",
    goalDesc: "Полное удовлетворение информационных потребностей с помощью современных технологий.",
    ourServicesTitle: "Наши услуги",
    servicesList: [
      { title: "Выдача книг", desc: "Более 45 000 книг." },
      { title: "Интернет", desc: "20 современных моноблоков." },
      { title: "Консультации", desc: "Помощь экспертов." },
      { title: "Читальные залы", desc: "Интерактивное оборудование." },
      { title: "24/7 Онлайн", desc: "Электронный доступ." },
      { title: "Филиалы", desc: "Услуги в 3 махаллях района." }
    ],
    libTitle: "ИБЦ Караулбазарского района",
    libSubtitle: "Все условия для образования",
    libSearch: "Название или автор...",
    libCard1: "Эл. Библиотека",
    libCard1Desc: "Удаленное чтение книг.",
    libCard2: "QR-Книги",
    libCard2Desc: "Загрузка через скан.",
    libCard3: "Международная база",
    libCard3Desc: "Интеграция с мировыми базами.",
    managementTitle: "Руководство",
    managementSubtitle: "Ответственные сотрудники",
    positionDirector: "Директор",
    positionDeputy: "Зам. директора",
    managementContact: "Время приема:",
    managementEmail: "Email:",
    managementPhone: "Тел:",
    rulesTitle: "Правила библиотеки",
    rulesSubtitle: "Пожалуйста, соблюдайте правила для порядка",
    rule1: "Требуется членская карточка",
    rule2: "Срок выдачи - 14 дней",
    rule3: "Своевременный возврат обязателен",
    rule4: "Соблюдайте тишину",
    rule5: "Бережное отношение к книгам",
    rule6: "Еда и напитки запрещены",
  },
  en: {
    nav: ["Home", "About us", "Books", "Library", "News", "Management"],
    heroTitle: "Knowledge Center",
    heroSubtitle: "Modern Library Experience",
    heroDesc: "Thousands of books and modern technology",
    btnEnter: "Enter",
    btnAbout: "About us",
    sectionTitle: "Qorovulbozor Information Library Center",
    aboutText1: "Books are beacons leading humanity toward excellence. They nurture the soul and contribute to the elevation of human intellect. A new information-library center with modern amenities has launched its activity in Qorovulbozor district.",
    aboutText2: "Inaugurated on the eve of the 33rd independence anniversary, the center was built through the 'Initiative Budget' project (1.2 billion UZS) and local funding (650 million UZS). It is fully equipped with 20 monoblocks, interactive boards, and modern furniture.",
    statsTitle: "Library in numbers",
    stats: [
      { n: "100+", t: "Daily visits" },
      { n: "44 460", t: "Book fund" },
      { n: "2000+", t: "E-books" },
      { n: "16", t: "Staff members" }
    ],
    contactTitle: "Contact Info",
    addressTitle: "Address",
    addressDesc: "Mustaqillik str 1, Qorovulbozor",
    phoneTitle: "Phone",
    btnMore: "Details",
    booksSectionTitle: "Library Books",
    booksSectionDesc: "Best book collection for all fields.",
    categories: [
      { id: 'all', name: 'All books' },
      { id: 'badiiy', name: 'Fiction' },
      { id: 'bolalar', name: 'Children' },
      { id: 'jahon', name: 'World' },
      { id: 'oqv', name: 'Education' }
    ],
    servicesTitle: "Library Services",
    service1Title: "Reading Rooms",
    service1Desc: "Modern halls for individual study.",
    service2Title: "Internet & Wi-Fi",
    service2Desc: "Free Wi-Fi in all halls.",
    footerDesc: "Qorovulbozor Library - sharing knowledge.",
    navTitle: "Navigation",
    contactTitleShort: "Contact",
    workTimeTitle: "Hours:",
    workHours: "08:00 AM - 06:00 PM",
    lunchHours: "Lunch 12:00 - 13:00",
    holiday: "No days off",
    subscribeTitle: "Subscribe",
    subscribeDesc: "Stay informed with news.",
    emailPlaceholder: "Your Email",
    btnSubscribe: "Subscribe",
    copyright: "Qorovulbozor Library. All rights reserved.",
    aboutPageTitle: "Qorovulbozor Library",
    aboutPageSubtitle: "Modern knowledge center opened for the 33rd independence anniversary",
    aboutHistoryTitle: "History",
    aboutFullText1: "For many years, the library operated in rented spaces. Through the 'Initiative Budget' 2023, it finally gained its own modern building.",
    aboutFullText2: "Under director Sharofat Yuldasheva, 16 staff members serve the public. The collection includes 45,000 printed books and 2,000 e-books.",
    aboutFullText3: "Branches have opened in 3 mahallas. The new facility allows for up to 100 daily visitors.",
    missionTitle: "Our Mission",
    missionDesc: "Encouraging the young generation to read and raising the culture of reading.",
    goalTitle: "Our Goal",
    goalDesc: "Fully meeting information needs through modern digital technologies.",
    ourServicesTitle: "Our Services",
    servicesList: [
      { title: "Book Lending", desc: "Over 45,000 books fund." },
      { title: "Internet", desc: "20 modern monoblocks." },
      { title: "Consulting", desc: "Expert assistance." },
      { title: "Reading Rooms", desc: "Interactive study equipment." },
      { title: "24/7 Online", desc: "Digital resource access." },
      { title: "Neighborhood Branches", desc: "Services in 3 district areas." }
    ],
    libTitle: "Qorovulbozor Library",
    libSubtitle: "Best conditions for study",
    libSearch: "Title or author...",
    libCard1: "E-Library",
    libCard1Desc: "Remote reading access.",
    libCard2: "QR-Books",
    libCard2Desc: "Scan and download.",
    libCard3: "Global Base",
    libCard3Desc: "Digital integration.",
    managementTitle: "Management",
    managementSubtitle: "Staff members",
    positionDirector: "Director",
    positionDeputy: "Deputy Director",
    managementContact: "Hours:",
    managementEmail: "Email:",
    managementPhone: "Tel:",
    rulesTitle: "Library Rules",
    rulesSubtitle: "Please follow rules for order",
    rule1: "Membership card is required",
    rule2: "Lending period - 14 days",
    rule3: "Timely return is mandatory",
    rule4: "Maintain silence",
    rule5: "Handle books with care",
    rule6: "Food and drinks are prohibited",
  }
};

function App() {
  const [lang, setLang] = useState('uz');
  const [showLang, setShowLang] = useState(false);
  const t = translations[lang];

  return (
    <Router>
      <div className="antialiased selection:bg-[#BD1C23] selection:text-white min-h-screen flex flex-col">
        <Navbar t={t} lang={lang} setLang={setLang} showLang={showLang} setShowLang={setShowLang} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><Hero t={t} /><About t={t} /><Books t={t} /><Services t={t} /></>} />
            <Route path="/about-us" element={<AboutPage t={t} />} />
            <Route path="/books" element={<div className="pt-32 px-16"><Books t={t} /></div>} />
            <Route path="/library" element={<LibraryPage t={t} />} />
            <Route path="/news" element={<div className="pt-32 text-center text-3xl font-bold">News Section</div>} />
            <Route path="/management" element={<ManagementPage t={t} />} />
          </Routes>
        </main>
        <Footer t={t} />
      </div>
    </Router>
  );
}

export default App;