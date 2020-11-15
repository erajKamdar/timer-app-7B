import React from 'react';
import Timer from '../Timer/timer'
import './App.css'

const Name = '<Timer App />'

const App = () => <div className='app-container'>
    <h3 className='Heading'>{Name}</h3>
    <Timer />
    <p><a className='footer' href='https://github.com/erajKamdar'>&copy; Eraj Hanif</a></p>
</div>;

export default App;