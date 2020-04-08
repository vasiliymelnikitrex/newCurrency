import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => (
  <>
    <div>Contacts</div>
    <Link to={`/contacts/${Math.floor(Math.random()*10)}`}>Follow to number</Link>
  </>
);

export default Contacts;
