import React from 'react';
import Game from '../../Game';
import {render, fireEvent, cleanup,screen} from '@testing-library/react';
import App from '../../../App'
import {AppContext} from "../../../App"






afterEach(cleanup)

it('Context is updated by parent component', () => {

    render(<App>
            <AppContext.Provider>
                <Game />
            </AppContext.Provider>
            </App>);

//    console.log(container)
   expect(screen.getByTestId('gam1')).toBeInTheDocument()

})

it('Context is updated by child component', () => {

    render(<App>
            <AppContext.Provider>
                <Game />
            </AppContext.Provider>
            </App>);

//    console.log(container)
   expect(screen.queryByTestId('gam2')).toBeInTheDocument()

})
