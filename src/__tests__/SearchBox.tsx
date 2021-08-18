import React from 'react';
import { render, screen, act } from 'test-utils';
import userEvent from '@testing-library/user-event';
import SearchBox from 'components/SearchBox';

describe('<SearchBox/>', () => {
  it('renders a searching list', async () => {
    await act(async () => {
      render(<SearchBox />);
      const button = screen.getByRole('button', { hidden: true });
      expect(button).toBeDefined();

      userEvent.click(button);

      const input = screen.getByPlaceholderText('Type to Search...');
      expect(input).toBeDefined();

      userEvent.click(input);

      userEvent.type(input, 'The Suicide');

      const title = await screen.findByText('The Suicide Squad');
      expect(title).toBeInTheDocument();
    });
  });

  it('renders information about no data', async () => {
    await act(async () => {
      render(<SearchBox />);
      const button = screen.getByRole('button', { hidden: true });
      expect(button).toBeDefined();

      userEvent.click(button);

      const input = screen.getByPlaceholderText('Type to Search...');
      expect(input).toBeDefined();

      userEvent.click(input);

      userEvent.type(input, 'Lion');

      const info = await screen.findByText('No data');
      expect(info).toBeInTheDocument();
    });
  });
});
