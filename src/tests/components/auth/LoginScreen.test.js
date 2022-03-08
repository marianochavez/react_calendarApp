/** * @jest-environment node */
import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Swal from 'sweetalert2';

import '@testing-library/jest-dom';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startLogin, startRegister } from '../../../actions/auth';
import { MemoryRouter } from 'react-router-dom';


jest.mock('../../../actions/auth', () => ({
    startLogin: jest.fn(),
    startRegister: jest.fn()
}));

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};
const store = mockStore( initState );
store.dispatch = jest.fn();


const wrapper = mount(
    <Provider store={ store } >
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
);



describe('Pruebas en <LoginScreen />', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });


    test('debe de llamar el dispatch del login', () => {
        
        wrapper.find('input[name="lEmail"]').simulate('change', {
            target: {
                name: 'lEmail',
                value: 'juan@gmail.com',
            }
        });

        wrapper.find('input[name="lPassword"]').simulate('change', {
            target: {
                name: 'lPassword',
                value: '123456',
            }
        });

        wrapper.find('form').at(0).prop('onSubmit')({
            preventDefault(){}
        });

        expect( startLogin ).toHaveBeenCalledWith('juan@gmail.com','123456');

    })

    
    
})
