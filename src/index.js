import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './navigation'
import Image from './image'
import RequesterHeading from './requesterHeading'
import RequesterList from './requesterList'
import Footer from './footer'

ReactDOM.render(
<div>
    <Navigation />,
    <Image />,
    <RequesterHeading />,
    <RequesterList />,
    <Footer />
    </div>
,document.getElementById('root'))


