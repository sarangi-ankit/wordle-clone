import React from 'react';
import Keyboard from '../../Keyboard';
import {render, fireEvent, cleanup,screen} from '@testing-library/react';
import App from '../../../App'
import {AppContext} from "../../../App"






afterEach(cleanup)

it('Context is updated by child component1', () => {

    render(<App>
            <AppContext.Provider>
                <Keyboard />
            </AppContext.Provider>
            </App>);

//    console.log(container)
   expect(screen.getByTestId('ky2')).toBeInTheDocument()

})

it('Context is updated by child component2', () => {

    render(<App>
            <AppContext.Provider>
                <Keyboard />
            </AppContext.Provider>
            </App>);

//    console.log(container)
   expect(screen.getByTestId('ky3')).toBeInTheDocument()

})

it('Context is updated by child component3', () => {

    render(<App>
            <AppContext.Provider>
                <Keyboard />
            </AppContext.Provider>
            </App>);

//    console.log(container)
   expect(screen.getByTestId('ky4')).toBeInTheDocument()

})