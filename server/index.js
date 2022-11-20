const express = require('express')

const app = express()

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send({
    appName: 'nuxt-app',
    seo: {
      title: 'Nuxt App',
      description: 'A Nuxt App',
    },

    header: { ...req.headers },
  })
})

app.get('/posts/:id', async (req, res) => {
  const { id } = req.params
  switch (id) {
    case '1':
      res.send({
        title: 'Chief Configuration Manager',
        text: 'Alias totam voluptatem natus. Accusamus voluptatibus pariatur aut nostrum architecto qui. Dicta assumenda numquam possimus explicabo.',
      })

      break
    default: {
      res.status(404).send({
        error: 'Not Found',
      })
    }
  }
})

app.listen(3001)
