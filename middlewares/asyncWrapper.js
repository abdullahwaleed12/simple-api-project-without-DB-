module.exports = (asyncF) => {
  return (req, res, next) => {
    asyncF(req, res , next).catch((err) => {
      next(err)
    })
  }
}