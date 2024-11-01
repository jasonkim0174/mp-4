"use client";

import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f8ff;
  font-family: Arial, sans-serif;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 20px;
  text-align: center;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007acc;
  }
`;

const ButtonLink = styled(Link)`
  background-color: #007acc;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005f99;
  }
`;

export default function Home() {
  const [city, setCity] = useState("");

  return (
    <StyledDiv>
      <Heading>Find the Weather in any city!</Heading>
      <SubHeading>Enter a city name below to get the current weather</SubHeading>
      <Input
        type="text"
        value={city}
        placeholder="City name"
        onChange={(e) => setCity(e.target.value)}
      />
      <ButtonLink href={`/${city}`}>Get Weather</ButtonLink>
    </StyledDiv>
  );
}
