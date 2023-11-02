import { useEffect, useState } from "react";

export default useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    //either do below or in other way
    // window.addEventListener("online", () => {
    //   setIsOnline(true);
    // });

    //just declared a function above amd used below
    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};
