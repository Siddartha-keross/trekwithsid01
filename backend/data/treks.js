const treks = [
  {
    name: "Kedarkantha Trek",
    location: "Uttarakhand",
    days: 6,
    altitude: "12,500 ft",
    difficulty: "Easy-Moderate",
    price: 6499,
    imageUrl: "https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=2070",
    overview: "A classic winter trek perfect for beginners. The summit offers a 360-degree view of the Himalayas.",
    itinerary: [
      { day: 1, title: "Arrival in Sankri", description: "Drive from Dehradun to Sankri." },
      { day: 2, title: "Sankri to Juda Ka Talab", description: "Trek through dense pine forests." },
      { day: 3, title: "Juda Ka Talab to Base Camp", description: "Short trek with amazing views." },
      { day: 4, title: "Summit Day", description: "Climb to the top and descend to Hargaon." },
      { day: 5, title: "Hargaon to Sankri", description: "Descend back to the village." },
      { day: 6, title: "Departure", description: "Drive back to Dehradun." }
    ]
  },
  {
    name: "Hampta Pass",
    location: "Himachal Pradesh",
    days: 5,
    altitude: "14,100 ft",
    difficulty: "Moderate",
    price: 8999,
    imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070",
    overview: "A dramatic crossover trek from the lush green Kullu valley to the arid deserts of Spiti.",
    itinerary: [
      { day: 1, title: "Manali to Jobra", description: "Drive and short trek to campsite." },
      { day: 2, title: "Jobra to Balu Ka Ghera", description: "Trek alongside the river." },
      { day: 3, title: "Crossing the Pass", description: "Steep ascent to Hampta Pass." },
      { day: 4, title: "Shea Goru to Chatru", description: "Descend into Spiti valley." },
      { day: 5, title: "Chandratal Lake", description: "Visit the moon lake and drive back." }
    ]
  },
  {
    name: "Kashmir Great Lakes",
    location: "Kashmir",
    days: 8,
    altitude: "13,750 ft",
    difficulty: "Difficult",
    price: 13500,
    imageUrl: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070",
    overview: "The most beautiful trek in India, featuring 7 alpine lakes.",
    itinerary: [
      { day: 1, title: "Arrival in Sonamarg", description: " acclimatization." },
      { day: 2, title: "Sonamarg to Nichnai", description: "First day of steep ascent." },
      { day: 3, title: "Nichnai to Vishansar", description: "Cross the Nichnai pass." },
      { day: 4, title: "Vishansar to Gadsar", description: "Pass the beautiful lakes." },
      { day: 5, title: "Gadsar to Satsar", description: "Meadow walk." },
      { day: 6, title: "Satsar to Gangabal", description: "Boulder hopping." },
      { day: 7, title: "Gangabal to Naranag", description: "Final descent." },
      { day: 8, title: "Departure", description: "Drive to Srinagar." }
    ]
  }
];

module.exports = treks;