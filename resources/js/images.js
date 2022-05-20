function importAll(r) {
    return r.keys().map(r);
  }
  
const images = []


images.push(importAll(require.context('./../img/?pipeline=thumbnail', false, /\.(png|jpe?g)$/)))
images.push(importAll(require.context('./../img/?pipeline=slide', false, /\.(png|jpe?g)$/)))
images.push(importAll(require.context('./../img/?pipeline=article', false, /\.(png|jpe?g)$/)))


export default images