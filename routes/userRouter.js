import express from 'express'
const userRouter = express()
import User from '../models/user.model.js'


/**
 * @swagger
 * /users:
 *  get:
 *      summary: return the list 
 *      responses:
 *          200:
 *              description: the list of the book
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: the user tag
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - username
 *              - password
 *          properties:
 *              username:
 *                  type: string
 *                  desciption: this is username
 *              password:
 *                  type: string
 *                  desciption: this is password
 *          example:
 *              username: cuong
 *              password: cuoi
 * 
 */

/**
 * @swagger
 * /users:
 *  get:
 *      summary: return the list
 *      responses:
 *          200:
 *              description: the list of the user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/User'
 */
userRouter.get('/', async (req, res) => {
    try {

        const users = await User.find({})
        res.json({
            message: 'success',
            users
        })
    } catch (error) {
        console.log(error.message)

    }
})

/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: get the user by id
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: the user id
 *      responses:
 *          200:
 *              description: the user desc by id
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 */
userRouter.get('/:id', async (req, res) => {

    try {
        const id = req.params.id
        const user = await User.findById(id)
        res.json({
            message: 'success',
            user
        })
    } catch (error) {
        console.log(error.message)

    }

})

userRouter.post('/', async (req, res) => {
    const { username, password } = req.body

    const user = await User.create({ username, password })
    await user.save()
    res.send("success")

})

export default userRouter