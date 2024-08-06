/* eslint-disable no-unsafe-optional-chaining */
import { render, screen } from '@testing-library/react';
import DisplayCount from './DisplayCount';

const displayCountFixToFormats = [
  'X',
  'XX',
  'XXX',
  'XXXX',
  'XXXXX',
  'XXXXXX',
  'XXXXXXX',
  'XXXXXXXX',
  'XXXXXXXXX',
  'XXXXXXXXXX',
  'XXXXXXXXXXX',
  'XXXXXXXXXXXX',
  'XXXXXXXXXXXXX',
  'XXXXXXXXXXXXXX',
  'XXXXXXXXXXXXXXX',
  'XXXXXXXXXXXXXXXX',
];

describe('DisplayCount', () => {
  const defaultProps = {
    text: 'Display X / Y',
    x: 0.7,
    y: 1,
  };

  const { x, y } = defaultProps;

  test.each(['Display X / Y', 'Display XXX / YYY'])(
    'renders correctly',
    text => {
      const { container } = render(
        <DisplayCount {...defaultProps} text={text} />,
      );

      const articleElement = screen.getByRole('article');
      expect(articleElement).toBeInTheDocument();
      expect(articleElement.textContent).toBe(`Display ${x} / ${y}`);

      expect(container).toMatchSnapshot();
    },
  );

  test.each(displayCountFixToFormats)('renders with fixTo', fixTo => {
    const { container } = render(
      <DisplayCount {...defaultProps} fixTo={fixTo} />,
    );

    const numXtxt = screen.getByTestId('displayCount-x').textContent;
    const numYtxt = screen.getByTestId('displayCount-y').textContent;

    if (!numXtxt || !numYtxt) return;

    const [_X, decimalPartX] = numXtxt?.split('.');
    const [_Y, decimalPartY] = numYtxt?.split('.');

    expect(decimalPartX.length).toBe(fixTo.length);
    expect(decimalPartY.length).toBe(fixTo.length);

    expect(container).toMatchSnapshot();
  });

  test('renders with x and y in lower case', () => {
    render(<DisplayCount {...defaultProps} text="Display x / y" />);
    expect(screen.getByRole('article').textContent).toBe(`Display x / y`);
  });
});
