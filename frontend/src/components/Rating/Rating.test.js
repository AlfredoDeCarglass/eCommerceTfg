// // Rating.test.js
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import Rating from './Rating';

// test('renders Rating component with full stars', () => {
//   render(<Rating rating={5} numReviews={10} />);
//   const stars = screen.getAllByRole('img', { hidden: true });
//   expect(stars.length).toBe(5);
//   stars.forEach((star) => {
//     expect(star).toHaveClass('fas fa-star');
//   });
//   expect(screen.getByText('10 valoraciones')).toBeInTheDocument();
// });

// test('renders Rating component with half stars', () => {
//   render(<Rating rating={2.5} numReviews={5} />);
//   const stars = screen.getAllByRole('img', { hidden: true });
//   expect(stars[0]).toHaveClass('fas fa-star');
//   expect(stars[1]).toHaveClass('fas fa-star');
//   expect(stars[2]).toHaveClass('fas fa-star-half-alt');
//   expect(stars[3]).toHaveClass('far fa-star');
//   expect(stars[4]).toHaveClass('far fa-star');
//   expect(screen.getByText('5 valoraciones')).toBeInTheDocument();
// });

// test('renders Rating component with empty stars', () => {
//   render(<Rating rating={0} numReviews={0} />);
//   const stars = screen.getAllByRole('img', { hidden: true });
//   stars.forEach((star) => {
//     expect(star).toHaveClass('far fa-star');
//   });
//   expect(screen.getByText('0 valoraciones')).toBeInTheDocument();
// });
