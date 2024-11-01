"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";
import WeatherCard from "../components/weatherCard";
import styled from "styled-components";
import {Weather} from '../interfaces/Weather';

const WeatherContentWrapper = styled.main`
  width: 80vw;
  margin: auto;
  padding: 20px;
  background-color: aquamarine;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CityName = styled.h1`
  color: blueviolet;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

const WeatherCardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 20px;
  border: gold 5px solid;
  padding: 20px;
  border-radius: 10px;
`;



export default function CityPage() {
  const params = useParams();

  // Fetch weather data with SWR
  const { data, error } = useSWR(
    `/api/getWeatherData?city=${params.city}`,
    (url) => fetch(url).then((res) => res.json())
  );

  // Handle error and loading states
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // If there is data, get the days otherwise an empty array.
  const days = data?.days || [];

  return (
    <WeatherContentWrapper>
      <CityName>{params.city}</CityName>
      <WeatherCardsContainer>
        {days.map((weather: Weather, i: number) => (
          <WeatherCard
            key={i}
            datetime={weather.datetime}
            conditions={weather.conditions}
            description={weather.description}
            tempmin={weather.tempmin}
            tempmax={weather.tempmax}
          />
        ))}
      </WeatherCardsContainer>
    </WeatherContentWrapper>
  );
}
