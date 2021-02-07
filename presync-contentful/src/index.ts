import { query } from './graphql.query'
import { pageRichContentJson } from './page-rich-content-json'
import { writeFileToPath } from './write-file-to-path'

async function main() {
  try {
    const { pageList } = await pageRichContentJson({ query })
    if (!pageList.items.length) return
    for (const page of pageList.items) {
      const { body, dated, jsonFileName, subtitle, title } = page
      const data = {
        body: body.json,
        dated,
        subtitle,
        title
      }
      const fileContent = JSON.stringify(data)
      writeFileToPath({
        path: 'src/data',
        fileName: jsonFileName,
        content: fileContent
      })
    }
  } catch (error) {
    console.error(error)
  }
}

main()
