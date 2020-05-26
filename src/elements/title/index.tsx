// Core
import React, { FC, ReactElement } from 'react';
import './style.css';

type PropTypes = {
  children: string;
};

export const Title: FC<PropTypes> = ({ children }: PropTypes): ReactElement => (
  <div className="title">{children}</div>
);
