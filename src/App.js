import React from 'react';
import { Button, Toast } from '@douyinfe/semi-ui';

function App() {
  return (
    <>
      <Button onClick={() => Toast.success({ content: 'welcome 哈哈！' })}>Hello Semi</Button>
    </>
  );
}

export default App;
