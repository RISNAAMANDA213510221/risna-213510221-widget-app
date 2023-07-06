<template>
  <div class="wrapper" :class="{ active: weatherData }">
    <header><i class='bx bx-left-arrow-alt'></i>Weather App</header>
    <section class="input-part">
      <p class="info-txt" :class="infoTxtClass">{{ infoTxt }}</p>
      <div class="content">
        <input type="text" spellcheck="false" placeholder="Enter city name" required v-model="cityName">
        <div class="separator"></div>
        <button @click="getWeatherData">Get Device Location</button>
      </div>
    </section>
    <section class="weather-part" v-if="weatherData">
      <img :src="getWeatherIconUrl(weatherData.weather[0].icon)" :alt="weatherData.weather[0].description">
      <div class="temp">
        <span class="numb">{{ Math.round(weatherData.main.temp) }}</span>
        <span class="deg">°</span>C
      </div>
      <div class="weather">{{ weatherData.weather[0].description }}</div>
      <div class="location">
        <i class='bx bx-map'></i>
        <span>{{ weatherData.name }}, {{ weatherData.sys.country }}</span>
      </div>
      <div class="bottom-details">
        <div class="column feels">
          <i class='bx bxs-thermometer'></i>
          <div class="details">
            <div class="temp">
              <span class="numb-2">{{ Math.round(weatherData.main.feels_like) }}</span>
              <span class="deg">°</span>C
            </div>
            <p>Feels like</p>
          </div>
        </div>
        <div class="column humidity">
          <i class='bx bxs-droplet-half'></i>
          <div class="details">
            <span>{{ weatherData.main.humidity }}</span>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityName: '',
      weatherData: null,
      apiKey: 'b7bfca7b27a3485144fea086c50d09dc',
      infoTxt: '',
      infoTxtClass: ''
    };
  },
  methods: {
    getWeatherData() {
      if (this.cityName !== '') {
        this.infoTxt = 'Getting weather details...';
        this.infoTxtClass = 'pending';

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${this.apiKey}`;
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            if (data.cod === 200) {
              this.weatherData = data;
              this.infoTxt = '';
              this.infoTxtClass = '';
            } else {
              this.infoTxt = 'City not found';
              this.infoTxtClass = 'error';
            }
          })
          .catch(() => {
            this.infoTxt = 'Something went wrong';
            this.infoTxtClass = 'error';
          });
      }
    },
    getWeatherIconUrl(iconCode) {
      return `http://openweathermap.org/img/w/${iconCode}.png`;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #43AFFC;
}
::selection{
  color: #fff;
  background: #43AFFC;
}
.wrapper{
  width: 400px;
  background-image: url(https://github.com/TylerPottsDev/weather-vue/blob/master/src/assets/warm-bg.jpg?raw=true);
  border-radius: 7px;
  box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.05);
  margin: 0 auto; /* Add this line to center the wrapper horizontally */
  display: flex; /* Add this line to center the wrapper vertically */
  flex-direction: column; /* Add this line to center the wrapper vertically */
  align-items: center; /* Add this line to center the wrapper vertically */
  justify-content: center; 
}
.wrapper header{
  display: flex;
  font-size: 21px;
  font-weight: 500;
  color: #43AFFC;
  padding: 16px 15px;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
header i{
  font-size: 0em;
  cursor: pointer;
  margin-right: 8px;
}
.wrapper.active header i{
  margin-left: 5px;
  font-size: 30px;
}
.wrapper .input-part{
  margin: 20px 25px 30px;
}
.wrapper.active .input-part{
  display: none;
}
.input-part .info-txt{
  display: none;
  font-size: 17px;
  text-align: center;
  padding: 12px 10px;
  border-radius: 7px;
  margin-bottom: 15px;
}
.input-part .info-txt.error{
  color: #721c24;
  display: block;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
}
.input-part .info-txt.pending{
  color: #0c5460;
  display: block;
  background: #d1ecf1;
  border: 1px solid #bee5eb;
}
.input-part :where(input, button){
  width: 100%;
  height: 55px;
  border: none;
  outline: none;
  font-size: 18px;
  border-radius: 7px;
}
.input-part input{
  text-align: center;
  padding: 0 15px;
  border: 1px solid #ccc;
}
.input-part input:is(:focus, :valid){
  border: 2px solid #43AFFC;
}
.input-part input::placeholder{
  color: #bfbfbf;
}
.input-part .separator{
  height: 1px;
  width: 100%;
  margin: 25px 0;
  background: #ccc;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.separator::before{
  content: "or";
  color: #b3b3b3;
  font-size: 19px;
  padding: 0 15px;
  background: #fff;
}
.input-part button{
  color: #fff;
  cursor: pointer;
  background: #43AFFC;
  transition: 0.3s ease;
}
.input-part button:hover{
  background: #1d9ffc;
}

.wrapper .weather-part{
  display: none;
  margin: 30px 0 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.wrapper.active .weather-part{
  display: flex;
}
.weather-part img{
  max-width: 125px;
}
.weather-part .temp{
  display: flex;
  font-weight: 500;
  font-size: 72px;
}
.weather-part .temp .numb{
  font-weight: 600;
}
.weather-part .temp .deg{
  font-size: 40px;
  display: block;
  margin: 10px 5px 0 0;
}
.weather-part .weather{
  font-size: 21px;
  text-align: center;
  margin: -5px 20px 15px;
}
.weather-part .location{
  display: flex;
  font-size: 19px;
  padding: 0 20px;
  text-align: center;
  margin-bottom: 30px;
  align-items: flex-start;
}
.location i{
  font-size: 22px;
  margin: 4px 5px 0 0;
}
.weather-part .bottom-details{
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid #ccc;
}
.bottom-details .column{
  display: flex;
  width: 100%;
  padding: 15px 0;
  align-items: center;
  justify-content: center;
}
.column i{
  color: #5DBBFF;
  font-size: 40px;
}
.column.humidity{
  border-left: 1px solid #ccc;
}
.column .details{
  margin-left: 3px;
}
.details .temp, .humidity span{
  font-size: 18px;
  font-weight: 500;
  margin-top: -3px;
}
.details .temp .deg{
  margin: 0;
  font-size: 17px;
  padding: 0 2px 0 1px;
}
.column .details p{
  font-size: 14px;
  margin-top: -6px;
}
.humidity i{
  font-size: 37px;
}
</style>