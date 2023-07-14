import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // 执行检索逻辑，例如调用API等
    console.log('执行检索：', searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>搜索</button>
    </div>
  );
};

export default App;
