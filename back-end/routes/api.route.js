const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

router.get('/blogs', async (req, res, next) => {
  try {
    const blogs = await prisma.blog.findMany({
      include: {author:true}
    })
    res.json(blogs)

  } catch (error) {
    next(error)
  }

});

router.get('/blogs/:id', async (req, res, next) => {
  try {
    const {id} = req.params
  const blog = await prisma.blog.findUnique({
    where: {
      id : Number(id)
    },
    include : {author: true}
  })

  res.json(blog)
  } catch (error) {
    next(error)
  }
  

});

router.post('/blogs', async (req, res, next) => {
  try {
    const blog = await prisma.blog.create({
      data: req.body 
    })

    res.json(blog)
  } catch (error) {
    next(error)
    
  }
});

router.delete('/blogs/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const blog = await prisma.blog.delete({
      where: {
        id: Number(id)
      }
    })
    res.json(blog)
  } catch (error) {
    next(error) 
  }
  
});

router.patch('/blogs/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const blog = await prisma.blog.update({
      where: {
        id: Number(id),
        
      },
      data : req.body,
      include : {
        author: true
      }
    })

    res.json(blog)
  } catch (error) {
    next(error)
  }
});


// AUTHOR ROUTES
router.get('/authors', async (req, res, next) => {
  try {
    const authors = await prisma.author.findMany({
      include: {blogs:true}
    })
    res.json(authors)

  } catch (error) {
    next(error)
  }

});


router.get('/authors/:id', async (req, res, next) => {
  try {
    const {id} = req.params
  const author = await prisma.author.findUnique({
    where: {
      id : Number(id)
    },
    include : {blogs: true}
  })

  res.json(author)
  } catch (error) {
    next(error)
  }
  

});

router.post('/authors', async (req, res, next) => {
  try {
    const author = await prisma.author.create({
      data: req.body 
    })

    res.json(author)
  } catch (error) {
    next(error)
    
  }
});


module.exports = router;
