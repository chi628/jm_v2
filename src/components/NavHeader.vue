<template>
  <header class="text-[#7C644B]">
    <div class="w-full h-20 flex justify-center items-center">
      <h1 class="font-['satisfy'] text-[48px] font-bold tracking-widest">
        <router-link to="/">J&amp;M</router-link>
      </h1>
    </div>
    <div class="w-full h-[38px] flex items-center">
      <nav class="w-full flex justify-center items-center flex-grow">
        <ul class="flex justify-center items-center space-x-5">
          <li>
            <router-link to="/about">
              <span class="uppercase font-['roboto-mono']">About J&amp;M</span>
            </router-link>
          </li>
          <li>
            <router-link to="/products">
              <span class="uppercase font-['roboto-mono']">All Itmes</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <span class="uppercase font-['roboto-mono']">Category</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <span class="uppercase font-['roboto-mono']">reservation</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <ul class="flex justify-center items-center space-x-5 flex-grow-0">
        <li>
          <router-link to="/">
            <i class="fi fi-rr-user text-2xl"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="fi fi-ss-shopping-cart text-2xl"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="fi fi-br-search text-2xl"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<style>
@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');
@import url('https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css');
@import url('https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css');
</style>
