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
  require("snabbdom/modules/class").default
, require("snabbdom/modules/style").default
, require("snabbdom/modules/props").default
, require("snabbdom/modules/eventlisteners").default
, require("snabbdom/modules/attributes").default
])

const container = document.querySelector('#container')

const state = init()

render({container, state, view, patch})

