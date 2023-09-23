import './App.css';
import React, { useState } from 'react';
import { Box, SvgIcon, Typography, Grid } from '@mui/material';
import ErrorPage from './components/ErrorPage';
import LoadingPage from './components/LoadingPage';
import TodayWeather from './components/TodayWeather';
import WeeklyForecast from './components/WeeklyForecast';
import SplashIcon from './assets/splash-icon.svg';

function App() {
  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]);
  const [weekForecast, setWeekForecase] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [pageError, setPageError] = useState(false);

  // Dynamic Weather Content
  // DEFAULT
  let weatherContent = (
    <Box
    xs={12}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    sx={{
      width: '100%',
      minHeight: '500px',
    }}
  >
    <SvgIcon
      component={SplashIcon}
      inheritViewBox
      sx={{ fontSize: { xs: '100px', sm: '120px', md: '140px' } }}
    />
    <Typography
      variant="h4"
      component="h4"
      sx={{
        fontSize: { xs: '12px', sm: '14px' },
        color: 'rgba(255,255,255, .85)',
        fontFamily: 'Poppins',
        textAlign: 'center',
        margin: '2rem 0',
        maxWidth: '80%',
        lineHeight: '22px',
      }}
    >
      Explore current weather data and 6-day forecast of more than 200,000 cities!
    </Typography>
  </Box>
);

// If user already input specific location
if (todayWeather && todayForecast && weekForecast) {
  weatherContent = (
    <React.Fragment>
      <Grid item xs={12} md={todayWeather ? 6 : 12}>
        <Grid item xs={12}>
          <TodayWeather data={todayWeather} forecastList={todayForecast} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <WeeklyForecast data={weekForecast} />
      </Grid>
    </React.Fragment>
  );
}

// ERROR PAGE
if (pageError) {
  weatherContent = (
    <ErrorPage
      margin="3rem auto"
      flex="inherit"
      errorMessage="Something went wrong"
    />
  );
}

// STILL LOADING
if (isLoading) {
  weatherContent = (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '500px',
      }}
    >
      <LoadingPage value="1">
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontSize: { xs: '10px', sm: '12px' },
            color: 'rgba(255, 255, 255, .8)',
            lineHeight: 1,
            fontFamily: 'Poppins',
          }}
        >
          Loading Your App...
        </Typography>
      </LoadingPage>
    </Box>
  );
}


  return (
    <div className="App">
      <ErrorPage
        margin="3rem auto"
        flex="inherit"
        errorMessage="Something went wrong"
      />
    </div>
  );
}

export default App;
