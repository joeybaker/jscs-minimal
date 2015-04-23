'use strict'

module.exports = function minimalReporter (errorsCollection) {
  var errorCount = 0

  if (!errorsCollection.length) return

  errorsCollection.forEach(function eachErrorFile (errors) {
    if (!errors.isEmpty()) {
      errors.getErrorList().forEach(function eachError () {
        errorCount++
      })
    }
  })
  console.error('%d files still with errors.', errorsCollection.length)
  console.error('%d errors still found.', errorCount)
}
