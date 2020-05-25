// Core
import React, { FC } from 'react';

// Components
import { Header } from './elements/header/header';
import { Starships } from "./bus/starships";

export const App: FC = () => (
  <div>
    <Header />
    <Starships />
  </div>
);
