<script setup lang="ts">
import {RouterLink} from 'vue-router';

interface Link{
    url: string
    title: string
}

const menuLinks: Link[] = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];
</script>
<template>
    <div class="py-[20px]">
        <div class="container">
            <div className="flex items-center">
                <RouterLink to="/">
                    <img
                    srcSet="/images/Logo.png 2x"
                    alt="Lion-Blogging"
                    className="logo block max-w-[50px]"
                    />
                </RouterLink>
                <ul className="menu flex items-center gap-x-[20px] ml-10 list-none font-medium">
                    <li v-for="menuLink in menuLinks" :key="menuLink.title" className="menu-item" >
                        <RouterLink :to="menuLink.url">{{menuLink.title}}</RouterLink>
                    </li>
                </ul>
                <div className="search flex py-[15px] px-[25px] items-center border-[1.7px] border-[#ccc] rounded-lg w-full max-w-[320px] ml-auto mr-5">
                    <input
                    type="text"
                    className="search-input flex-1 pr-[10px]"
                    placeholder="Search posts..."
                    />
                    <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="search-icon"
                    >
                    <ellipse
                        cx="7.66669"
                        cy="7.05161"
                        rx="6.66669"
                        ry="6.05161"
                        stroke="#999999"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                        stroke="#999999"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                        stroke="#999999"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
  .header-auth {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  @media screen and (max-width: 1023.98px) {
    .logo {
      max-width: 30px;
    }
    .menu,
    .search,
    .header-button,
    .header-auth {
      display: none;
    }
  }
</style>