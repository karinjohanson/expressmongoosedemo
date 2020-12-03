const db = require('../db')
const Users = db.Users

module.exports = async function (req, res) {
  try {
    await Users.update({_id: req.params.id}, {
      $set: req.body
    })
    console.log('Done!')
    res.status(200).json({ message: 'Successs-sss!' })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
