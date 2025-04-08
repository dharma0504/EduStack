// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './navbar.jsx';
import Homepage from './homepage.jsx';


import Frontend from './frontend.jsx';
import Backend from './backend.jsx';
import Devops from './devops.jsx';
import Dataanalyst from './data-analyst.jsx';
import Aiscientist from './aiscientist.jsx';
import Security from'./Security_eng.jsx';
import Fullstack from'./fullstack.jsx';
import Mobile  from'./Mobile_dev.jsx';
import Cloud from'./Cloud_eng.jsx';
import Arcihtect from'./software_arch.jsx';
import Gamedev from'./game_dev.jsx';
import Cyber from'./cyber_sec.jsx';


import Compscience from'./comp_sci.jsx';
import React_ from'./react_.jsx';
import Java from'./java.jsx';
import Node from'./_nodejs_.jsx';
import JS from'./jscript.jsx';
import Python from'./pyython.jsx';
import HTMLCSS from'./htmlcss.jsx';
import SQL from'./sql.jsx';
import Mongo from'./mongo.jsx';
import AWS from'./aws.jsx';
import Sysdes from'./system_design.jsx';
import Cplus from'./cpluplus.jsx';



import First from "./first_year.jsx";
import Second from "./second_year.jsx";
import Third from "./Third_year.jsx";
import Fourth from "./Fourth_year.jsx"


import Roadmaps from './Roadmaps.jsx';
import Guides from "./guides.jsx";


import Guide1 from "./Guide1.jsx";
import Jobguide from "./job_guide.jsx";
import Coding from "./coding_practice.jsx";
import Intership from "./interships.jsx";
import Carrer from "./carrer.jsx";
import Industryreq from "./industry_req.jsx";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />


          <Route path="/first-year" element={<First/>} />
          <Route path="/second-year" element={<Second/>} />
          <Route path="/third-year" element={<Third/>} />
          <Route path="/fourth-year" element={<Fourth/>} />


          <Route path="/Home" element={<Homepage />} />
          <Route path="/Roadmaps" element={<Roadmaps/>} />
          <Route path="/guides" element={<Guides/>} />


          <Route path="/frontend" element={<Frontend />} />
          <Route path='/backend' element={<Backend></Backend>}></Route>
          <Route path='/devops' element={<Devops></Devops>}></Route>
          <Route path='/data-analyst' element={<Dataanalyst></Dataanalyst>}></Route>
          <Route path='/ai-data-scientist' element={<Aiscientist></Aiscientist>}></Route>
          <Route path='/security-engineer' element={<Security></Security>}></Route>
          <Route path='/mobile-developer' element={<Mobile></Mobile>}></Route>
          <Route path='/game-developer' element={<Gamedev></Gamedev>}></Route>
          <Route path='/cloud-engineer' element={<Cloud></Cloud>}></Route>
          <Route path='/Softwarearchitect' element={<Arcihtect></Arcihtect>}></Route>
          <Route path='/Cybersecurity' element={<Cyber></Cyber>}></Route>
          <Route path='/fullstack' element={<Fullstack></Fullstack>}></Route>



          <Route path='/computer-science' element={<Compscience></Compscience>}></Route>
          <Route path='/react' element={<React_></React_>}></Route>
          <Route path='/java' element={<Java></Java>}></Route>
          <Route path='/node-js' element={<Node></Node>}></Route>
          <Route path='/javascript' element={<JS></JS>}></Route>
          <Route path='/python' element={<Python></Python>}></Route>
          <Route path='/html-css' element={<HTMLCSS></HTMLCSS>}></Route>
          <Route path='/sql' element={<SQL></SQL>}></Route>
          <Route path='/MongoDB' element={<Mongo></Mongo>}></Route>
          <Route path='/aws' element={<AWS></AWS>}></Route>
          <Route path='/sysdesign' element={<Sysdes></Sysdes>}></Route>
          <Route path='/C++' element={<Cplus></Cplus>}></Route>



          <Route path='/Guides/interview' element={<Guide1></Guide1>}></Route>
          <Route path='/Guides/jobguide' element={<Jobguide></Jobguide>}></Route>
          <Route path='/Guides/coding-practice' element={<Coding></Coding>}></Route>
          <Route path='/Guides/internships' element={<Intership></Intership>}></Route>
          <Route path='/Guides/carrer' element={<Carrer></Carrer>}></Route>
          <Route path='/Guides/industry-requirements' element={<Industryreq></Industryreq>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
