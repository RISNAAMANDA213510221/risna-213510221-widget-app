<template>
    <div class="home-container">
      <div class="hero-section">
        <h1>Selamat Datang di Aplikasi</h1>
        <p>Temukan fitur-fitur menarik yang kami sediakan:</p>
      </div>
      <div class="content">
        <ul>
          <li v-for="feature in features" :key="feature.title" class="feature-item">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        features: [
          {
            title: 'Cuaca',
            description: 'Informasi cuaca berdasarkan lokasi yang dipilih'
          },
          {
            title: 'Lokasi',
            description: 'Menampilkan informasi lokasi berdasarkan geolokasi pengguna'
          },
          {
            title: 'Stopwatch',
            description: 'Fitur penghitung waktu'
          },
          {
            title: 'Tic Tac Toe',
            description: 'Permainan Tic Tac Toe melawan komputer'
          },
          {
            title: 'Foto',
            description: 'Menampilkan foto-foto menarik'
          }
        ]
      };
    }
  };
  </script>
  
  <style>

.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .hero-section {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  .feature-item {
    margin-bottom: 1.5rem;
  }
  
  .feature-item h3 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .feature-item p {
    color: #777;
    font-size: 1rem;
  }
  
  /* Efek hover pada fitur */
  .feature-item:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
  </style>
  