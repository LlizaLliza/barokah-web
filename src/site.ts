export const site = {
    name: 'PT. Barokah Satria Expresindo',
    legalName: 'PT BAROKAH SATRIA EXPRESINDO',
    tagline: 'Bergerak Bersama, Melayani Lebih Baik',
    address: 'Viktoria residence no LX 4 , Kel. Meteseh, Kec. Tembalang, Kota Semarang',
    operationalAddress: 'Viktoria residence no LX 4 , Kel. Meteseh, Kec. Tembalang, Kota Semarang',
    nib: '1310260073033',
    scale: 'Usaha Mikro',
    kbli: [
      { code: '49231', name: 'Angkutan Bermotor untuk Barang Umum', risk: 'Menengah Tinggi' },
      { code: '78200', name: 'Aktivitas Penyediaan Tenaga Kerja Sementara dan Penyediaan Sumber Daya Manusia Lainnya', risk: 'Rendah' },
    ],
    phone: '081 3333 1346',
    phone2: '081 2262 15589',
    phoneHref: '+628133331346',
    phone2Href: '+6281226215589',
    whatsapp: '628133331346',
    email: 'barokahsatria7@gmail.com',
 };

export const nav = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang Kami' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/kontak', label: 'Kontak' },
];

export const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Halo, saya ingin bertanya tentang layanan Anda.')}`;