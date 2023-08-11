import {Routes, Route} from 'react-router-dom';
import Firstcomponent from './component/firstcomponent';
import Secondcomponent from './component/secondcomponent';
import Thirdcomponent from './component/thirdcomponent';
 const Paths = () => {
    return (
        <Routes>
            <Route path='/' element={<Firstcomponent/>}/>
            <Route path='/Second' element={<Secondcomponent/>}/>
            <Route path='/Third' element={<Thirdcomponent/>}/>
        </Routes>

    );

};
export default Paths;
