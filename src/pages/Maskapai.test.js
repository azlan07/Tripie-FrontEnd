import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Maskapai from './Maskapai';
import '@testing-library/jest-dom';
import React from 'react';

test('should render footer component', () => {
  const linkElement = Renderer.create(<Maskapai />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});