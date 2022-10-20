import fs from 'node:fs'
import path from 'node:path'
import prompts from 'prompts'
import c from 'picocolors'

const slugify = (name: string) => name.toLowerCase().replace(/\s+?/g, `-`)

async function init() {
  const cwd = process.cwd()
  let result: {
    level?: string
    index?: string
    title?: string
  } = {}

  try {
    result = await prompts(
      [
        {
          name: `level`,
          type: `select`,
          message: `Select the challenge level:`,
          initial: 0,
          active: `medium`,
          choices: [
            { title: `Easy`, value: `easy` },
            { title: `Medium`, value: `medium` },
            { title: `Hard`, value: `Hard` },
            { title: `Extreme`, value: `extreme` },
          ],
        },
        {
          name: `index`,
          type: `text`,
          message: `Input the challenge index:`,
          initial: ``,
        },
        {
          name: `title`,
          type: `text`,
          message: `Input the challenge title:`,
          initial: ``,
        },
      ],
      {
        onCancel: () => {
          throw new Error(c.red('✖') + ' Operation cancelled')
        },
      },
    )
  } catch (cancelled) {
    console.log(cancelled.message)
    process.exit(1)
  }

  const { level, index, title = `hello world` } = result
  const solutionDir = path.join(cwd, `src/solutions`)
  const fileName = `${index?.padStart(5, `0`)}-${level}-${slugify(title)}.ts`

  if (fs.existsSync(path.resolve(solutionDir, fileName))) {
    console.log(c.red('✖') + ' , File already exist')
  } else {
    const content = `/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/${fileName.slice(
   0,
   -3,
 )}/README.md
 */
`
    fs.writeFileSync(path.resolve(solutionDir, fileName), content)
    console.log(c.green(`File create successfully!`))
  }
}

init().catch(err => {
  console.error(err)
})
