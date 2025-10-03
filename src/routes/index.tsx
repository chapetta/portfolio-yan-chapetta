import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Intro } from "../pages/IntroPage/Into";
import { Home } from "../pages/Home";


export const Router = () => {
    return (
    <Routes>
      <Route path="/" element={ <Layout /> } >
        <Route index element={ <Intro />} />
        <Route path='/home' element={<Home />} />
      </Route>

    </Routes>
    
    )
};