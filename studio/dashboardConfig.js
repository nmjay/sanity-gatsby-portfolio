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
                  buildHookId: '60e55f36e48305135d59b3b7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1zrnupqn',
                  apiId: '009ed9cc-bc42-4778-a430-2e5fb586d7c6'
                },
                {
                  buildHookId: '60e55f36864253114fd13197',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bo89ij9m',
                  apiId: '4da28e03-daf4-4700-8223-3f5c6abf6533'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nmjay/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bo89ij9m.netlify.app',
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
