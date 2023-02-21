import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Pesanan from './Pesanan';
import '@testing-library/jest-dom';
import React from 'react';

test('should render footer component', () => {
  const linkElement = Renderer.create(<Pesanan />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});