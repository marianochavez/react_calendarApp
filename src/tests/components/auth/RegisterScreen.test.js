/** * @jest-environment node */
import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Swal from 'sweetalert2';

import '@testing-library/jest-dom';
import { startLogin, startRegister } from '../../../actions/auth';
import { MemoryRouter } from 'react-router-dom';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';


jest.mock('../../../actions/auth', () => ({
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
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
);



describe('Pruebas en <RegisterScreen />', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });

    
    test('No hay registro si las contraseñas son diferentes', () => {

        wrapper.find('input[name="rPassword"]').simulate('change', {
            target: {
                name: 'rPassword',
                value: '123456',
            }
        });

        wrapper.find('input[name="rPassword2"]').simulate('change', {
            target: {
                name: 'rPassword2',
                value: '1234567',
            }
        });
        

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( startRegister ).not.toHaveBeenCalled();
        expect( Swal.fire ).toHaveBeenCalledWith('Error', 'Las contraseñas no coinciden','error');
    
    })
    

    test('Registro con contraseñas iguales', () => {
        
        wrapper.find('input[name="rPassword"]').simulate('change', {
            target: {
                name: 'rPassword',
                value: 'hola mundo',
            }
        });

        wrapper.find('input[name="rPassword2"]').simulate('change', {
            target: {
                name: 'rPassword2',
                value: 'hola mundo',
            }
        });
        

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( Swal.fire ).not.toHaveBeenCalled();
        // name, email, password
        expect(  startRegister ).toHaveBeenCalledWith("","","hola mundo");
    
    })
    

    
    
})
