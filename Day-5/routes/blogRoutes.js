const express = require('express');
const { getAllBlogController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController } = require('../controllers/blogControllers');

const router = express.Router();

//routes
//GET || all blogs
router.get('/all-blogs', getAllBlogController);

//POST || create blogs
router.post('/create-blogs', createBlogController);

//PUT || update blogs
router.put('/update-blogs/:id', updateBlogController);

//GET || single blog details
router.get('/get-blog/:id', getBlogByIdController);

//DELETE || delete blogs
router.delete('/delete-blogs/:id', deleteBlogController);

module.exports = router