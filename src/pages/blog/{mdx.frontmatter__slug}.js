import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql,Link  } from 'gatsby'
import { GatsbyImage, getImage} from 'gatsby-plugin-image'

import { Parallax } from "@react-spring/parallax"
import { Themed } from "@theme-ui/mdx"
import Divider from "../../elements/divider"
import { UpDown, UpDownWide } from "../../styles/animations"
import Svg from "../../components/svg"
import Content from "../../elements/content"
import Inner from "../../elements/inner"
import * as classes from './style.module.css'; 
const BlogPost = ({data,children})=>{
   const image = getImage(data.mdx.frontmatter.hero_image)
    return (
      <Layout>
        <Parallax pages={14}>
          <div>
            <Divider speed={0.2} offset={0} factor={1}>
              <UpDown>
                <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
                <Svg icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
                <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
              </UpDown>
              <UpDownWide>
                <Svg icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
                <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
                <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
                <Svg icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
                <Svg icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
                <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
                <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
              </UpDownWide>
              <Svg icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
              <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
              <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
              <Svg icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
              <Svg icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
              <Svg icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
              <Svg icon="circle" width={64} color="icon_green" left="95%" top="5%" />
              <Svg icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
              <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
              <Svg icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
              <Svg icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
              <Svg icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
            </Divider>
            <Themed.h1 >{data.mdx.frontmatter.title}</Themed.h1>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}></GatsbyImage>
            <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={6.4} factor={1}>
              <Themed.p>
                Go back to <Link to="/">homepage</Link>.
              </Themed.p>
              <Inner>
                <div className={classes.Content}>

                  {children}
                </div>

              </Inner>
            </Content>
          </div>
        </Parallax>
      </Layout>
        // <Layout pageTitle={data.mdx.frontmatter.title}>
        //     <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}></GatsbyImage>
        //     <p>Photo Credit:{" "}
        //       <a href={data.mdx.frontmatter.hero_image_credit_link}>{data.mdx.frontmatter.hero_image_credit_text}</a>
        //     </p>
        //     <p>{data.mdx.frontmatter.datePublished}</p>
        //     {children}
        // </Layout>
    )
}
export const Head = ()=><Seo title="Super Cool Blog Posts"></Seo>

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      datePublished(formatString: "MMMM D, YYYY")
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image
    }
    id
  }
}
`

export default BlogPost