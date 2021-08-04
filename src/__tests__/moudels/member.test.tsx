import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect'

import { HomePage } from '../../views/HomePage'
import { Nav } from '../../components/Nav'

// expect.extend({ toBeInTheDocument });
test('test router', () => {
    //arrange
    const { getByTestId } = render(
        <MemoryRouter initialEntries={['/']}>
            <Nav />
        </MemoryRouter>,
    );
    //act
    fireEvent.click(getByTestId('nav-enroll'));
    //assert
    expect(getByTestId('nav-enroll')).toBeInTheDocument();
});
// describe('test member moudle', () => {
//     test('test login', () => {
//         expect(login('test', '123')).toBe(true)
//     })
// })