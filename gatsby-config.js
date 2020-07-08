module.exports = {
  siteMetadata: {
    title: `ACTROS`,
    siteUrl: `https://actros-educational-project.github.io/actros.github.io`,
    description: `Center for Advanced Training on Robotics and Open Source`,
    topics: [
      'Open Source'
    ],
    menu: [
      {
        name: 'Home',
        path: '/actros.github.io/'
      },
      {
        name: 'About',
        path: '/actros.github.io/about'
      },
      {
        name: 'Courses',
        path: '/actros.github.io/courses'
      },
      {
        name: 'Contact',
        path: '/actros.github.io/page'
      },
    ],
    footerMenu: [
      {
        name: 'Example',
        path: '/actros.github.io/page'
      },
    ],
    search: true,
    author: {
      name: `nehalem`,
      description: `I'm <strong>nehalem</strong>, a Gatsby theme by
        <a href="https://nehalist.io" rel="noopener" target="_blank">nehalist.io</a>. If you like what you see feel free to give a
        <a href="https://github.com/nehalist/gatsby-theme-nehalem" rel="noopener" target="_blank">star on GitHub!</a>`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/IntellRobotLabs`,
        linkedin: ``,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/IntelligentRoboticsLabs`,
        twitch: ``
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/actros.github.io/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/intellrobotslab_icon.png`
        }
      }
    }
  ]
};
