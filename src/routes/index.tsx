import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Intro } from "../pages/IntroPage/Into";


export const Router = () => {
    return (
    <Routes>
      <Route path="/" element={ <Layout /> } >
        <Route index element={ <Intro />} />
      </Route>

    </Routes>
    
    )
};