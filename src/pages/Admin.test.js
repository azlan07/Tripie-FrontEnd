import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Admin from './Admin';
import '@testing-library/jest-dom';
import React from 'react';

test('should render footer component', () => {
  const linkElement = Renderer.create(<Admin />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});