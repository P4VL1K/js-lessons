import React from 'react';
import {
    CurrencyEContainer
} from '../../containers/CurrencyExchangeContainer/CurrencyEContainer'
import {store} from "../../redux/state";
import {Provider} from "react-redux";

// Redux
// https://tproger.ru/translations/redux-for-beginners/
// https://monsterlessons.com/project/series/redux-js-dlya-nachinayushih
// https://xsltdev.ru/react/redux/intro/

// Typescript genetic
// https://habr.com/ru/post/455473/
// https://habr.com/ru/company/ruvds/blog/426729/

// Typescript from zero + typescript generic (English video)
// https://www.youtube.com/watch?v=3d9XqFmCmQw

const Lesson1 = () => {
    return (
        // @ts-ignore
            <Provider store={store}>
                <CurrencyEContainer />
            </Provider>
);
};

// Container component
// https://habr.com/ru/company/ruvds/blog/446206/

// Dispatch
// https://react-redux.js.org/using-react-redux/connect-mapdispatch

export default Lesson1;

