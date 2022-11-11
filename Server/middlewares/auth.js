const auth = (req, res, next) => {
  console.log(!req.body.auth)
  if(!req.body.auth){
    res
      .status(400)
      .json({
        status: false,
        message: "You do not have access to this resource, because you are not authenticated"
      })
  } else{
    next()
  }
}

module.exports = auth