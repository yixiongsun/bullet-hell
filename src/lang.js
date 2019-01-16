import idiom from 'idiom.js'

const lang = idiom({
  'default': {
    'welcome': 'Bullet Hell'
  }
})

export default lang(window.navigator.language)
