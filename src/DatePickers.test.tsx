import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DatePickers from './DatePickers';

const getOpenedDatePickerMenu = () =>
  document.querySelector(
    '.ant-picker-dropdown:not(.ant-picker-dropdown-hidden)'
  ) as HTMLElement;

const ROLES = {
  cell: 'cell',
  textbox: 'textbox',
} as const;

test('displays correct chosen date in date picker input on select', async () => {
  render(<DatePickers />);

  const fromInput = screen.getByPlaceholderText(/from/i);

  userEvent.click(fromInput);

  const date_2020_12_01 = /2020-12-01/i;
  const cell_2020_12_01 = await within(
    getOpenedDatePickerMenu()
  ).findByRole(ROLES.cell, { name: date_2020_12_01 });

  userEvent.click(cell_2020_12_01);

  expect(
    screen.getByRole(ROLES.textbox, { name: date_2020_12_01 })
  ).toBeInTheDocument();
  expect(getOpenedDatePickerMenu()).not.toBeInTheDocument();

  const toInput = screen.getByPlaceholderText(/to/i);

  userEvent.click(toInput);

  const date_2020_12_02 = /2020-12-02/i;
  const cell_2020_12_02 = await within(
    getOpenedDatePickerMenu()
  ).findByRole(ROLES.cell, { name: date_2020_12_02 });

  userEvent.click(cell_2020_12_02);

  expect(
    screen.getByRole(ROLES.textbox, { name: date_2020_12_02 })
  ).toBeInTheDocument();
  expect(getOpenedDatePickerMenu()).not.toBeInTheDocument();
});
