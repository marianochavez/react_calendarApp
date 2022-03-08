import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { AppRouter } from '../../routers/AppRouter';


const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );


// store.dispatch = jest.fn();


describe('Pruebas en <AppRouter />', () => {

    test('debe de mostrar el espere...', () => {
        
        const initState = {
            auth: {
                checking: true
            }
        };

        const store = mockStore( initState );

        const wrapper = mount(
            <Provider store={ store } >
                <AppRouter />
            </Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.spinner-container').exists() ).toBe(true);
        
    })
    

    test('debe de mostrar la ruta pública', () => {
        
        const initState = {
            auth: {
                checking: false,
                uid: null
            }
        };
        
        const store = mockStore( initState );

        const wrapper = mount(
            <Provider store={ store } >
                <AppRouter />
            </Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h2').text().trim()).toBe('Login');
        
    })

    test('debe de mostrar la ruta privada', () => {
        
        const initState = {
            calendar: {
                events: []
            },
            ui: {
                modalOpen: false
            },
            auth: {
                checking: false,
                uid: '123',
                name: 'Juan Carlos'
            }
        };
        
        const store = mockStore( initState );

        const wrapper = mount(
            <Provider store={ store } >
                <AppRouter />
            </Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.calendar-screen').exists() ).toBe(true);
        
    })
    
})
