import Header from 'containers/Header';
import WriteReview from 'containers/WrtieReview';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/writeReview" element={<WriteReview />}></Route>
          <Route path="/*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
