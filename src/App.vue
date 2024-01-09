<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
    <router-link to="/project">Project</router-link>
    <router-link to="/resume">Resume</router-link>
    <router-link to="/testmonials">Testmonials</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  color: #34495e;
}

nav {
  background-color: #1d1f20;
  padding: 20px;
}

nav a {
  font-weight: normal;
  color: #fff;
  text-decoration: none;
  margin: 40px;
  padding: 10px;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #0d1e2a;
}

nav a.router-link-exact-active {
  background-color: #1d422d;
  color: #fff;
}
</style>
