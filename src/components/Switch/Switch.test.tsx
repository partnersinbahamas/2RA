import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Switch } from './Switch';

describe('Switch', () => {
  const user = userEvent.setup();

  const props = {
    label: 'Switch',
    onClick: jest.fn(),
  };

  it('renders correctly', () => {
    const { container } = render(<Switch />);

    const inputElement = screen.getByRole('checkbox');
    expect(inputElement).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('renders with label', () => {
    const { container } = render(<Switch {...props} />);

    const labelElement = screen.queryByText(props.label);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByLabelText(props.label);
    expect(inputElement).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('renders with label position', () => {
    const { container } = render(<Switch {...props} labelPosition="bottom" />);

    const labelElement = screen.queryByText(props.label);
    expect(labelElement).toHaveAttribute('data-position', 'bottom');

    expect(container).toMatchSnapshot();
  });

  it('renders as required', () => {
    const labelAsRequired = `${props.label}*`;
    const { container } = render(<Switch {...props} required />);

    const labelElement = screen.queryByText(new RegExp(props.label));
    expect(labelElement?.textContent).toBe(labelAsRequired);

    const inputElement = screen.getByLabelText(labelAsRequired);
    expect(inputElement).toBeRequired();

    expect(container).toMatchSnapshot();
  });

  it('renders with stile', () => {
    const { container } = render(<Switch {...props} stile="primary" />);

    const parentElement = screen.queryByText(props.label)?.parentNode;
    expect(parentElement).toHaveAttribute('data-stile', 'primary');

    expect(container).toMatchSnapshot();
  });

  it('should be clicked', async () => {
    const { container } = render(<Switch {...props} />);

    const inputElement = screen.getByLabelText(props.label);
    await user.click(inputElement);
    expect(props.onClick).toHaveBeenCalled();

    expect(container).toMatchSnapshot();
  });

  it('should be disabled', async () => {
    const { container } = render(<Switch {...props} disabled />);

    const parentElement = screen.queryByText(props.label)?.parentElement;
    expect(parentElement).toHaveAttribute('disabled');

    const labelElement = screen.queryByText(props.label);
    expect(labelElement).toHaveAttribute('disabled');

    const inputElement = screen.getByLabelText(props.label);
    expect(inputElement).toBeDisabled();

    expect(container).toMatchSnapshot();
  });
});
