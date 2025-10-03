import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Intro } from "../pages/IntroPage/Into";
import { Home } from "../pages/Home";


export const Router = () => {
  return (
    <Routes>
      <Route index element={<Intro />} />
      <Route path="/" element={<Layout />} >
        <Route path='/home' element={<Home />} />
      </Route>

    </Routes>

  )
};