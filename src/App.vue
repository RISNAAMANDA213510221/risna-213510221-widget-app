<template>
  <div>
      <nav>
        <div class="top-buttons">
          <router-link to="/">
            <button :class="{ active: $route.path === '/' }">Home</button>
          </router-link>
          <router-link to="/stopwatch">
            <button :class="{ active: $route.path === '/stopwatch' }">Stopwatch</button>
          </router-link>
          <router-link to="/tictactoe">
            <button :class="{ active: $route.path === '/tictactoe' }">Tic Tac Toe</button>
          </router-link>
          <router-link to="/weather">
            <button :class="{ active: $route.path === '/weather' }">Weather</button>
          </router-link>
        </div>
      </nav>
      <router-view></router-view>
      
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Gaya-gaya lainnya */
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.hero-section {
  text-align: center;
  margin-bottom: 32px;
}

.hero-section h1 {
  font-size: 36px;
  margin-bottom: 16px;
}

.hero-section p {
  font-size: 20px;
  color: #666666;
}

.content {
  margin-top: 20px;
  text-align: center;
}

.content ul {
  text-align: left;
  margin-top: 10px;
}

.content h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.content p {
  font-size: 16px;
  color: #666666;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}

.top-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}

nav button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 6px;
  font-size: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

nav button.active {
  transform: scale(1.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

nav button:hover {
  transform: translateY(-3px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
