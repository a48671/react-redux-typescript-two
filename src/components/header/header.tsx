// Core
import React, { FC, useState } from 'react';

type PropTypes = {
  title?: string;
  children?: never;
}

export const Header: FC<PropTypes> = ({ title }: PropTypes) => {
  const header = title || 'header';
  const [counter, setCounter] = useState<number>(0);
  const increase = (): void => setCounter((prenCounter) => prenCounter + 1);
  const decrease = (): void => setCounter((prenCounter) => prenCounter - 1);
  return (
    <>
      <h1>{header}</h1>
      <p>{counter}</p>
      <button type='button' onClick={decrease}>decr</button>
      <button type='button' onClick={increase}>incr</button>
    </>
  );
};

Header.defaultProps = {
  title: 'header',
};