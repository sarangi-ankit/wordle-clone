import React from 'react';
import ReactDOM from 'react-dom';
import Letter from '../../Letter';
import {render, fireEvent, cleanup,screen} from '@testing-library/react';
import App from '../../../App'
import {AppContext} from "../../../App"






afterEach(cleanup)

it('Context is updated by letter component', () => {

    render(<App>
            <AppContext.Provider>
                <Letter />
            </AppContext.Provider>
            </App>);

//    console.log(container)
expect(screen.queryByTestId('letter2')).not.toBeInTheDocument();

})