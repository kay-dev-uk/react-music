import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { screen, render } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Songs from '.';
import { userEvent } from '@testing-library/user-event';

describe('Clicker Component', () => {
    beforeEach(() => {
        render(<Songs />)
    })

    it('should display heading with appropriate text', () => {
        const element = screen.getByRole('heading')
        expect(element).toBeInTheDocument()
    })

    // it('should increment the display when the button is clicked', async () => {
    //     const display = screen.getByRole('figure')
    //     const button = screen.getByRole('button')

    //     expect(display.textContent).toEqual('0')
    //     await userEvent.click(button)
    //     expect(display.textContent).toEqual('1')
    // })
})
