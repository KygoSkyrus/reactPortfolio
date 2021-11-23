import React,{useState,useEffect} from 'react'
import App from './App'

const Logo = () => {
  const [splashscreen, setsplashscreen] = useState(true);


    useEffect(() => {
        setTimeout(() => {
          setsplashscreen(false);//splash screen for 2.5s when screen loads
        }, 3000);
      }, [])
  
      if (splashscreen) {
        return (
          <div className="mainlogo">
            <img src="https://thumbs.dreamstime.com/b/dg-logo-letter-monogram-slash-modern-designs-template-black-color-white-background-164905757.jpg" className="logo" alt="logo" width="100px" />
          </div>
        )
      } else {
    return (
        <App/>
    )
}
}

export default Logo
