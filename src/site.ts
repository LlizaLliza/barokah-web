export const site = {
  name: 'PT. Barokah Satria Expresindo',
  tagline: 'Bergerak Bersama, Melayani Lebih Baik',
  address: 'Viktoria Residence No LX 4, Kel. Meteseh, Kec. Tembalang, Kota Semarang',
  phone: '081 3333 1346',
  phoneHref: '+628133331346',
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