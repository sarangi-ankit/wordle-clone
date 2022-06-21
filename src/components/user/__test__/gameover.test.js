import React from 'react';
import ReactDOM from 'react-dom';
import GameOver from '../../GameOver';
import {render, fireEvent, cleanup,screen,within} from '@testing-library/react';
import App from '../../../App'
import {AppContext} from "../../../App"






afterEach(cleanup)

it('Context is updated by letter component', () => {

    render(<App>
            <AppContext.Provider>
                <GameOver />
            </AppContext.Provider>
            </App>);

//    console.log(container)
const { getByText } = within(screen.queryByTestId('test-1'))
expect(getByText('Correct Word:')).toBeInTheDocument()
})