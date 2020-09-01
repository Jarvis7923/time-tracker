import React from 'react';
import {Button} from 'react-bootstrap';

import MainNav from "../../MainNav";


export default function Index() {
    return (
      <div className='index-page'>
          <MainNav/>
        <h1>This is INDEX page! </h1>
        <Button href="/user">Go to User Page</Button>
      </div>
    );
}