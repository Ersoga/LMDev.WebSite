/** @jsx jsx */
import { jsx } from "theme-ui"
import ProjectCard from "./project-card"

const MdxComponents = {
  ProjectCard: ({ link, title, bg, children, ...props }: any) => (
    <ProjectCard {...props} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
}

export default MdxComponents
