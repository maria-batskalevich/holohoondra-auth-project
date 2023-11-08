import React from 'react';
import s from './App.module.scss';
import {Content} from "./components/content/Content/Content";
import {ToastContainer} from "react-toastify";
import {SideBar} from "./components/content/SideBar/SideBar";

export const App = () => {
  return (
    <div className={s.appWrapper}>
        <SideBar/>
        <Content/>
        <ToastContainer
            position='bottom-left'
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={false}
            draggable={true}
            theme={'colored'}
        />
    </div>
  );
}


