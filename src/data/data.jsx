const Menu = [
  {
    id: 1,
    title: "Mercimek Çorbası",
    category: "corba",
    price: 80,
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop",
    desc: "Taze tereyağı ve özel baharatlar ile servis edilen geleneksel mercimek çorbası.",
  },
  {
    id: 2,
    title: "Ezogelin Çorbası",
    category: "corba",
    price: 85,
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop",
    desc: "Bulgur, pirinç ve özel baharatlı nane yağı ile lezzetlendirilmiş klasik Ezogelin çorbası.",
  },

  {
    id: 3,
    title: "İçli Köfte (2 Adet)",
    category: "baslangic",
    price: 160,
    img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop",
    desc: "Cevizli ve baharatlı kıyma harcı ile doldurulmuş, çıtır kızarmış ince bulgur kabuğu.",
  },
  {
    id: 4,
    title: "Paçanga Böreği",
    category: "baslangic",
    price: 130,
    img: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=500&auto=format&fit=crop",
    desc: "Çıtır yufka içerisinde çemenli pastırma, erimiş kaşar peyniri ve sebze dolgusu.",
  },

  // --- ANA YEMEKLER ---
  {
    id: 5,
    title: "Adana Kebap",
    category: "ana yemek",
    price: 320,
    img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop",
    desc: "Zırh kıymasıyla hazırlanan, kömür ateşinde pişmiş acılı Adana kebabı. Közlenmiş biber ve domates ile.",
  },
  {
    id: 6,
    title: "Tavuk Izgara",
    category: "ana yemek",
    price: 240,
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop",
    desc: "Özel marinasyonlu tavuk pirzola, pirinç pilavı ve patates kızartması eşliğinde.",
  },
  {
    id: 7,
    title: "İskender Kebap",
    category: "ana yemek",
    price: 380,
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop",
    desc: "Pide üzerine yaprak döner, özel domates sosu, keçi sütü tereyağı ve taze yoğurt ile.",
  },
  {
    id: 8,
    title: "Kuzu Şiş",
    category: "ana yemek",
    price: 410,
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop",
    desc: "Kömür ızgarasında pişmiş marineli kuzu lokum dilimleri, bulgur pilavı ve sumaklı soğan eşliğinde.",
  },
  {
    id: 9,
    title: "Karışık Pide",
    category: "ana yemek",
    price: 270,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop",
    desc: "Kıymalı, kuşbaşı etli ve kaşar peynirli fırınlanmış taş fırın pidesi.",
  },

  // --- SALATALAR ---
  {
    id: 10,
    title: "Gavurdağı Salatası",
    category: "salata",
    price: 120,
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop",
    desc: "İnce kıyılmış domates, salatalık, bol ceviz içi, nar ekşisi ve sızma zeytinyağı sosu ile.",
  },

  // --- TATLILAR ---
  {
    id: 11,
    title: "Künefe",
    category: "tatlı",
    price: 150,
    img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=500&auto=format&fit=crop",
    desc: "Hatay usulü, bol fıstıklı ve taze şerbetli sıcak künefe.",
  },
  {
    id: 12,
    title: "Fıstıklı Baklava (3 Dilim)",
    category: "tatlı",
    price: 180,
    img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500&auto=format&fit=crop",
    desc: "Gaziantep usulü bol Antep fıstıklı ve saf tereyağlı çıtır çıtır kat kat baklava.",
  },
  {
    id: 13,
    title: "Fırın Sütlaç",
    category: "tatlı",
    price: 110,
    img: "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?w=500&auto=format&fit=crop",
    desc: "Üzeri fırınlanmış, vanilya aromalı hafif geleneksel sütlü tatlı.",
  },

  // --- İÇECEKLER ---
  {
    id: 14,
    title: "Ev Yapımı Ayran",
    category: "icecek",
    price: 45,
    img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=500&auto=format&fit=crop",
    desc: "Bol köpüklü, taze yoğurttan hazırlanan yayık ayranı.",
  },
  {
    id: 15,
    title: "Şalgam Suyu",
    category: "icecek",
    price: 40,
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop",
    desc: "Adana usulü acılı veya acısız organik mor havuç şalgamı.",
  },
  {
    id: 16,
    title: "Osmanlı Şerbeti",
    category: "icecek",
    price: 55,
    img: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&auto=format&fit=crop",
    desc: "Kırmızı meyveler, karanfil ve taze tarçın aromalı ferahlatıcı geleneksel şerbet.",
  }
];

export default Menu;