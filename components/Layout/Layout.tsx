"use client";
import React, { useMemo } from 'react';
import Slider from '@/components/Slider/Slider';
import Image from "next/image";
import { slidelogo } from '@/assets';
import { useSelector, useDispatch, Provider } from "react-redux";
import { vertexaiselector } from '@/store/selector';
import store from '@/store';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  children?: any;
}


function AppLayout({ children }: any) {
  const selector = useSelector(vertexaiselector);
  const dispatch = useDispatch();
  const [apiCount, setApiCount] = React.useState<number>(0);

  React.useEffect(() => {
    dispatch({ type: "CHECK_API_ISON" });
  })

  React.useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "CHECK_API_ISON" });
      setApiCount(apiCount + 1);
    }, 5000);
    return () => clearTimeout(timer);
  });

  const path =useRouter()
  const isServerOn: boolean = useMemo(() => {
    return selector.serveron;
  }, [apiCount]);



  const handleLogout = () => {
    dispatch({ type: "LOGOUT_SAGA", payload: false });
    path.push("/")
  }

  return (
    <div className="main-content">
      <div className="navbar">
        <div className="navbar-logo-container">
          {/* <img
              src={star}
              alt="img not found"
              className="navbar-logo"
            /> */}
          <div className="flex">
            <h1>Vertx</h1>
            <Image src={slidelogo} alt="slidelogo" className="slideimg" />
          </div>
        </div>
        {selector.isSignin && <button onClick={handleLogout}>Logout</button>}
      </div>

      {isServerOn ? <div className="outlet-container">
        {selector.isSignin && <div className="slide-card-container">
          <Slider />
        </div>}
        {children}
      </div> : <div className='flex justify-center items-center w-full h-full'><Loader size={200} /></div>}
    </div>
  )
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <Provider store={store}>
      <AppLayout>{children}</AppLayout>
    </Provider>
  )
}

export default Layout;