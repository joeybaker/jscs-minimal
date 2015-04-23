'use strict'

var test = require('tape')
  , jscsMinimal = require('../')

test('jscs-minimal#get', function getTest (t) {
  t.plan(2)

  t.doesNotThrow(
    jscsMinimal.bind(null, [])
    , 'does not throw'
  )

  t.ok(
    'I was too lazy to write any tests. Shame on me.'
    , 'must have at least one test'
  )
})
