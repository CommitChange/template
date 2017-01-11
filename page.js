import R from 'ramda'
import flyd from 'flyd'
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import render from 'ff-core/render'

function init() {
  let state = {}

  return state
}

function view(state) {
  return h('div', [
    'test test test'
  ])
}

const patch = snabbdom.init([
  require("snabbdom/modules/class")
, require("snabbdom/modules/style")
, require("snabbdom/modules/props")
, require("snabbdom/modules/eventlisteners")
, require("snabbdom/modules/attributes")
])

const container = document.querySelector('#container')

const state = init()

render({container, state, view, patch})

