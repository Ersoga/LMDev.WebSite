import * as React from "react"
import type { HeadFC } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Seo from "../components/seo"
import { NavLink,Flex,Button,Select,MenuButton } from "theme-ui"
import { Header } from "../components/Header"
import * as classes from './style.module.css';
const Cara = () => (
  <Layout>
    <Header></Header>
    <Parallax pages={4}>
      <Hero offset={0.1} factor={1} />
      <Projects offset={1} factor={2} />
      <About offset={2} factor={2}/>
      <Contact offset={3} factor={1} />
    </Parallax>
  </Layout>
);

export default Cara

export const Head: HeadFC = () => <Seo />
