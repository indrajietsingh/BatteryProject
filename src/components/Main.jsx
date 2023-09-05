import { Player} from '@threekit-tools/treble';
  import SphereRadius from './SphereRadius';
  import IndraTestColor from './IndraTestColor';
  import IndraHeight from './Height';
  import IndraWidth from './Width';
  import Indramodel from './Indramodel';
  import '../index.css'

  import { useState, useEffect } from 'react';
import Test from './Test';
  
  
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
  
  
  const Main = () => {
  
    const { width } = useWindowDimensions();
  
    return (
      <>       
          <div className='OuterContainer'>
            <div className='StickyContainerItem'>
              <div className="tk-treble-player">
                <Player minHeight="360px"
                  height={width > 1200 ? '948px' : '548px'} />
              </div>
              </div>
            <div className="ContainerItem">
              {/* <PortalToElement to="tk-treble-form" strict={true}> */}
                <Indramodel />
                <IndraTestColor />
                <SphereRadius />
                <IndraHeight />
                <IndraWidth />
                
              {/* </PortalToElement> */}
              </div> 
          </div>
        
      </>
    );
  };
  
  export default Main;
  