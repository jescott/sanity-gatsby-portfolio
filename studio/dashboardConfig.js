export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f84b76adaad4825d698ca74',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ok5e9bbe',
                  apiId: 'b1cc3d5a-d9e7-4300-acd4-033ea3f10ae8'
                },
                {
                  buildHookId: '5f84b76a1b710e2281e62cec',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2qc3849t',
                  apiId: '37b7814d-7911-4e02-b39d-3485fe32fd87'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jescott/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2qc3849t.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
