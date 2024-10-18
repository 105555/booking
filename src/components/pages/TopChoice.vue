<template>
  <main class="mx-auto mt-32 ml-24 lg:container">
    <section class="cursor-pointer">
      <h2 class="mb-6 text-3xl font-bold">Top Choices</h2>
      <div class="flex mb-6">
        <button
          v-for="(item, index) in location"
          :key="index"
          class="px-4 py-2 mr-4 font-bold hover:bg-gray-100 text-[#00000099] border-b-4 border-transparent rounded-md dark:text-white dark:hover:bg-green"
          :class="{ 'border-blue-500': index === activeIndex }"
          @click="activeIndex = index"
        >
          {{ item }}<sup>{{ getHotelCount(item) }}</sup>
        </button>
      </div>
      <div class="grid grid-cols-4 gap-6">
        <div
          v-for="(hotel, index) in filteredHotels"
          :key="index"
          class="overflow-hidden rounded-lg shadow-md dark:border-2 dark:border-white"
        >
          <div class="relative">
            <NuxtImg
              :src="hotel.image"
              :alt="hotel.name"
              class="object-cover w-full h-36"
            />
          </div>
          <div class="p-3">
            <h3 class="mb-2 font-bold text-md">{{ hotel.name }}</h3>
            <div class="flex items-center mb-2">
              <span class="text-yellow-400"
                >{{ "★".repeat(hotel.evaluate)
                }}{{ "☆".repeat(5 - hotel.evaluate) }}</span
              >
              <span class="ml-2 text-sm text-gray-600"
                >{{ hotel.evaluate }}.0 ·
                {{ Math.floor(Math.random() * 1000) }} reviews</span
              >
            </div>
            <div>
              <span class="font-bold">TWD. {{ hotel.price }}</span>
              <span class="ml-2 text-gray-500 line-through"
                >TWD.{{ Math.floor(hotel.price * 1.2) }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-16">
      <h2 class="text-3xl font-bold">Popular Destinations</h2>
      <div class="grid grid-cols-3 gap-4 pr-6 mt-6">
        <div
          v-for="(popular, index) in popularLocations"
          :key="index"
          class="overflow-hidden rounded-lg relative aspect-[44/9] cursor-pointer transition-opacity ease-in-out hover:opacity-75"
        >
        <div class="absolute z-10 flex flex-col w-full p-4 bg-gradient-to-t from-black/50 to-transparent">
          <span class="text-[#FFFFFF98] text-xs">{{ popular.country }}</span>
          <span class="text-xl font-bold text-white capitalize drop-shadow-lg">{{ popular.name }}</span>
        </div>
          <NuxtImg
            :src="popular.image"
            :alt="popular.name"
            class="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>

    <section class="mt-16">
      <h2 class="text-3xl font-bold">Get Inspiration</h2>
      <div class="grid grid-cols-3 gap-4 pr-6 mt-6">
        <div
          v-for="(inspiration, index) in inspirations"
          :key="index"
          class="aspect-[16/9] cursor-pointer"
        >
          <NuxtImg
            :src="inspiration.image"
            :alt="inspiration.title"
            class="object-cover w-full h-full rounded-md"
          />
          <div class="pl-1 pr-2 mt-6">
            <p class="text-xl font-bold">{{ inspiration.title }}</p>
            <p class="mt-2 text-xs font-bold text-[#00000099] capitalize drop-shadow-lg dark:text-gray-500 ">{{ inspiration.content }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Hotel {
  location: string;
  name: string;
  price: number;
  evaluate: number;
  image: string;
}

const location: Array<string> = ["Bali", "Okinawa", "Taiwan"];
const popularLocations: Array<{ name: string; image: string;  country:string}> = [
  { name: "Osaka", image: "/Osaka.jpg", country:'Japan' },
  { name: "Kyoto", image: "/Kyoto.jpg", country:'Japan' },
  { name: "Reykjavíc", image: "/Reykjavic.jpg", country:'iceland' },
  { name: "Paris", image: "/Paris.jpg", country:'France' },
  { name: "Roma", image: "/Roman.jpg", country:'Italy' },
  { name: "Bangkok", image: "/Bangkok.jpg", country:'Thailand' },
];
const inspirations: Array<{ title: string; content: string;  image:string}> = [
  { title: "The fifth most visited country", content: "Italy is the fifth most visited country in the world, with a total of 52.3 million…", image:'/italy.jpg' },
  { title: "Visit Thailand for Bangkok", content: "Asian tourists primarily visit Thailand for Bangkok and the historical, natural, and…", image:'/Thailand.jpg' },
  { title: "Lord of the Rings Tour", content: "The national cuisine has been described as Pacific Rim, incorporating the native Māori…", image:'/NewZealand.jpg' },
]
const hotels: Array<Hotel> = [
  {
    location: "Okinawa",
    name: "Hotel Aqua",
    price: 2480,
    evaluate: 5,
    image: "/top1.jpg",
  },
  {
    location: "Okinawa",
    name: "Mr. Kawasaki Inn",
    price: 3380,
    evaluate: 4,
    image: "/top2.jpg",
  },
  {
    location: "Bali",
    name: "Weekly Paradise",
    price: 4780,
    evaluate: 4,
    image: "/top3.jpg",
  },
  {
    location: "Taiwan",
    name: "Beast Hotel",
    price: 1980,
    evaluate: 4,
    image: "/top4.jpg",
  },
];

const activeIndex = ref(0);

const filteredHotels = computed(() => {
  return hotels.filter((hotel) => hotel.location === location[activeIndex.value]);
});

const getHotelCount = (loc: string) => {
  return hotels.filter((hotel) => hotel.location === loc).length;
};
</script>
