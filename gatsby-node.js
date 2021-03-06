const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    graphql(
      `
        {
          allContentfulBlogPost(limit: 1000) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create Product pages
        const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
        // We want to create a detailed page for each
        // product node. We'll just use the Contentful id for the slug.
        _.each(result.data.allContentfulBlogPost.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/blog/${edge.node.slug}/`,
            component: slash(blogPostTemplate),
            context: {
              id: edge.node.id
            }
          });
        });
      })
      .then(() => {
        graphql(
          `
            {
              allContentfulProject(limit: 1000) {
                edges {
                  node {
                    id
                    slug
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors);
          }

          // Create Category pages
          const projectTemplate = path.resolve(`src/templates/project.js`);
          // We want to create a detailed page for each
          // category node. We'll just use the Contentful id for the slug.
          _.each(result.data.allContentfulProject.edges, edge => {
            // Gatsby uses Redux to manage its internal state.
            // Plugins and sites can use functions like "createPage"
            // to interact with Gatsby.
            createPage({
              // Each page is required to have a `path` as well
              // as a template component. The `context` is
              // optional but is often necessary so the template
              // can query data specific to each page.
              path: `/projects/${edge.node.slug}/`,
              component: slash(projectTemplate),
              context: {
                id: edge.node.id
              }
            });
          });

          resolve();
        });
      });
  });
};
