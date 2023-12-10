/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './pages/App'
import Impressum from './pages/Impressum'
import { Router, Route, Routes } from '@solidjs/router'

const root = document.getElementById('root')

render(() => (
    <Router>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;800&display=swap');
        </style>
        <Routes>
            <Route path="/" component={App} />
            <Route path="/impressum" component={Impressum} />
        </Routes>
    </Router>
), root)
