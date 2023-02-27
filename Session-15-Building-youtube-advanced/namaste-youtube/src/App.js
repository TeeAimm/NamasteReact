import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import ErrorPage from './components/ErrorPage';
import SearchResultPage from './components/SearchResultPage';

const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <Body />,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'/',
                element: <MainContainer/>
            },
            {
                path: 'watch',  
                element: <WatchPage />
            },
            {
                path: 'results',
                element: <SearchResultPage />
            }
        ]
    }
])

function App() {
    return (
        <Provider store={store}>
            <Head />
            <RouterProvider router={appRoute}/>
        </Provider>
    );
}

export default App;
