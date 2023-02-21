import popularImg from "./assets/images/popular.png";
import popularImg1 from "./assets/images/popular-1.png";
import popularImg2 from "./assets/images/popular-2.png";

const airports = [
    {
      id: 1,
      name: 'Bandara Soetta',
      city: 'Jakarta',
      country: 'Indonesia',
      tiket: 3,
      image: {popularImg},
      jam_terbang: '07.00',
      jam_sampai: '08.30',
      name_to: 'Tambun Selatan',
      harga: 1600000
      
    },
    {
      id: 2,
      name: 'Bandara Russia',
      city: 'Copenhagen',
      country: 'Russia',
      tiket: 5,
      image: {popularImg1},
      jam_terbang: '07.00',
      jam_sampai: '08.30',
      name_to: 'Tambun Selatan',
      harga: 1650000
    },
    {
      id: 3,
      name: 'Bandara Tamsel',
      city: 'Bekasi',
      country: 'Indonesia',
      tiket: 3,
      image: {popularImg2},
      jam_terbang: '07.00',
      jam_sampai: '08.30',
      name_to: 'Tambun Selatan',
      harga: 1800000
    },
  ]

export default airports