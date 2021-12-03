import { BrowserRouter, Route, Link } from "react-router-dom";

import Adress from './component/profile/Address';
import Fullname from './component/profile/FullName';
import Navbar from "./component/profile/Navbar";
import ProfilePhoto from './component/profile/ProfilePhoto';
// And invoking the <Greeter/> component…
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/' component={Adress} />
      <Route path='/fullname' component={Fullname} />
      <Route path='/photo' component={ProfilePhoto} />
    </BrowserRouter>
  );
};
export default App;