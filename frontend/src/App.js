import { useEffect, useState } from "react";
import SplashScreen from "./pages/splash";

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000)

    return () => {
      clearTimeout(timeout);
    }
  }, [])

  return (
    <SplashScreen loading={loading} />
  );
}

export default App;
