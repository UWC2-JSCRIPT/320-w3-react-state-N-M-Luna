import { render, screen } from '@testing-library/react';
import App from './App'; //this file should be the same name as the mod we are importing and testing

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Picture slide show tests', () => {

  test('that true equals true', () => {
    const n = 2;
    expect(n).toStrictEqual(2);
  })

  //it('should work', () => {})

})