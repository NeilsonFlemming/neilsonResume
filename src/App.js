import React, { Component, lazy, Suspense } from 'react';
import Header from './components/Header';
import resumeData from './resumeData';

const About = lazy(() => import('./components/About'));
const Resume = lazy(() => import('./components/Resume'));
const Certs = lazy(() => import('./components/Certs'));
const Skills = lazy(() => import('./components/Skills'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '200px',
    fontSize: '18px'
  }}>
    Loading...
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <Suspense fallback={<LoadingSpinner />}>
          <About resumeData={resumeData}/>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Resume resumeData={resumeData}/>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Certs resumeData={resumeData}/>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Skills resumeData={resumeData}/>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer resumeData={resumeData}/>
        </Suspense>
      </div>
    );
  }
}

export default App;
