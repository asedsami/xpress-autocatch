module.exports = function autoTryCatch (objectOfRequestHandlers) {
  let result = {}
  
  Object.keys(objectOfRequestHandlers).forEach(requestHandlerName => {
    result[requestHandlerName] = autoTryCatchSingleRequestHandler(objectOfRequestHandlers[requestHandlerName])
  })

  return result
}

const autoTryCatchSingleRequestHandler = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next)
  } catch (err) {
    next(err)
  }
}
