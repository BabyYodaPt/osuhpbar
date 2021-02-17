const jimp = require('jimp')

async function main() {

let fonte = await jimp.loadFont(jimp.FONT_SANS_8_BLACK)
let mask = await jimp.read('mask.png')
let avatar = await jimp.read('icon.png')
let fundo = await jimp.read('osu.png')



    avatar.resize(62, 62)
    mask.resize(62, 62)
    avatar.mask(mask)
    fundo.print(fonte, 10, 20, 'Pedro Ricar123123123do')
    fundo.composite(avatar,11, 10).write('scorebar-bg.png')
}
main()