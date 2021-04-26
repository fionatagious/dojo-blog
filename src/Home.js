// useState hook to make name var reactive and to re-render the name variable that has changed value

import { useState } from 'react';

const Home = () => {
    // let name = 'mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState('25');

    // setName and setAge triggers re-render
    const handleClick = () => {
        setName('luigi');
        setAge(30);

        console.log(name);
/*         console.log('hello, ninjas', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target); */
    }


    // the template
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
{/*             <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
 */}        </div>
     );
}
 
export default Home;