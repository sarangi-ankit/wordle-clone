import { render, screen } from '@testing-library/react';
import  Navbar  from '../../../components/Navbar';


test('renders titlel', () => {
    render(<Navbar />);
    const title = screen.getByTestId("mytest");
    expect(title).toBeInTheDocument();
  });

  test('renders title2', () => {
    render(<Navbar />);
    const title = screen.getByTestId("test");
    expect(title).toBeInTheDocument();
  });

  test('renders title3', () => {
    render(<Navbar />);
    const title = screen.getByTestId("test1");
    expect(title).toBeInTheDocument();
  });

  test('renders navbar', () => {
    render(<Navbar />);
    const title = screen.getByTestId("navtest");
    expect(title).toBeInTheDocument();
  });