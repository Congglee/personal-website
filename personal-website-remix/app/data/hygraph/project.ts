export const PROJECTS_QUERY = `
  query Projects {
    projects {
      id
      title
      overview
      description
      demoLink
      githubLink
      slug
      image {
        url
        width
        height
        size
      }
    }
  }
`;

export const PROJECT_QUERY = (slug: string) => {
  return `
  query Project {
    project(where: {slug: "${slug}"}) {
      id
      title
      overview
      description
      demoLink
      githubLink
      slug
      image {
        url
        width
        height
        size
      }
    }
  }`;
};
