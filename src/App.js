import React from 'react';
import './App.css';

import Drawing from '../src/Components/Drawing/Drawing';
import WhatToDraw from '../src/Components/WhatToDraw/WhatToDraw';

function App() {
  return (
    <React.Fragment>
      <WhatToDraw word = "example"/>
      <Drawing/>
    </React.Fragment>
  );
}

export default App;
