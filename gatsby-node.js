/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: <https://www.gatsbyjs.com/docs/node-apis/>
 */

// You can delete this file if you're not using it

const path = require("path")

const { createFilePath } = require(`gatsby-source-filesystem`)

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        utils: path.resolve(__dirname, "src/utils"),
        hooks: path.resolve(__dirname, "src/hooks")
      }
    }
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "src/contents"
    })

    createNodeField({
      node,
      name: "slug",
      value: slug
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const queryAllMarkdownData = await graphql(
      `
          {
              allMarkdownRemark(
                  sort: {
                      order:DESC
                      fields: [frontmatter___date, frontmatter___title]
                  }
              ) {
                  edges {
                      node {
                          id
                          fields {
                              slug
                          }
                      }
                  }
              }
          }
    `
  )

  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`)
    return
  }

  const posts = queryAllMarkdownData.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const prevPostId = index === 0 ? null : posts[index - 1].node.id
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].node.id

    createPage({
      path: post.node.fields.slug,
      component: path.resolve(__dirname, "src/templates/PostTemplate.tsx"),
      context: {
        slug: post.node.fields.slug,
        prevPostId,
        nextPostId
      }
    })
  })
}