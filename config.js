import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone';

global.info = {
 nomerbot: '6288983804377',
 pairingNumber: '6288983804377',
 nameown: 'zen',
 nomerown: '6285763694680',
 packname: '╭───═「 Zenzz XD 」═───╮\n│◉ BOT:    s.id/mshbot\n│◉ Zenzx XD\n│◉ By: Zenzz XD BOT⭐\n╰────────═┅═───────╯',
 author: '',
 namebot: 'Zenzz AI - MD',
 wm: 'Z E N Z A I - M D',
 stickpack: 'Zenzz AI - MD',
 stickauth: 'Zenzz AI - MD'
}

global.owner = [
['6285763694680', 'Zenzz XD', true],
['573238329287', 'Cuki MD', true]
]
global.versi = '6.0'
global.wm = '_`~ Powered by Zenzz XD. ~`_'
global.wmmedia = '© Powered by Zenzz XD.'
global.idch = '120363348141345453@newsletter', 
global.setting = {
 autoclear: false,
 addReply: false // buat with thumbnail
 }

// Thumbnail 
global.url = {
 profil: 'https://telegra.ph/file/24fa902ead26340f3df2c.png',
 did: 'https://telegra.ph/file/fdc1a8b08fe63520f4339.jpg',
 rules: 'https://telegra.ph/file/afcfa712bd09f4fcf027a.jpg',
 thumbnail: 'https://files.catbox.moe/h3njeb.jpg',
 thumb: 'https://files.catbox.moe/h3njeb.jpg',
 logo: 'https://files.catbox.moe/h3njeb.jpg',
 unReg: 'https://telegra.ph/file/ef02d1fdd59082d05f08d.jpg',
 registrasi: 'https://telegra.ph/file/0169f000c9ddc7c3315ff.jpg',
 confess: 'https://telegra.ph/file/03cabea082a122abfa5be.jpg',
 akses: 'https://telegra.ph/file/6c7b9ffbdfb0096e1db3e.jpg', 
 wel: 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4', // gif welcome 
 bye: 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4', // gif good bye
 sound: 'https://files.catbox.moe/qk0fze.mp3' // untuk menu
}

// Sosmed
global.url = {
 sig: 'https://instagram.com/tulisan.ku.id',
 sgh:  'https://github.com/Tiooxy',
 sgc: 'https://chat.whatsapp.com/FFSwgyy0d8T71c1Nf7gQN1'
}

// Donasi
global.payment = {
 psaweria: '_',
 ptrakterr: '-',
 pdana: '6285763694680'
}
// Info Wait
global.msg = {
  menu: (m) => {
    const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss');
    let waktuucapan = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌃';

    if (timee < "05:00:00") {
        waktuucapan = 'sᴇʟᴀᴍᴀᴛ sᴜʙᴜʜ 🌉';
    } else if (timee < "10:00:00") {
        waktuucapan = 'sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ 🌄';
    } else if (timee < "15:00:00") {
        waktuucapan = 'sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ 🏙';
    } else if (timee < "18:00:00") {
        waktuucapan = 'sᴇʟᴀᴍᴀᴛ sᴏʀᴇ 🌅';
    } else if (timee < "19:00:00") {
        waktuucapan = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌆';
    }

    return `┣━━━━━━━━━━━━━━━━━━━
┃  📖 *All Menu Category*
┣━━━━━━━━━━━━━━━━━━━
┃ • .menu store
┃ • .menu ai
┃ • .menu downloader
┃ • .menu game
┃ • .menu kerang
┃ • .menu fun
┃ • .menu internet
┃ • .menu group
┃ • .menu islami
┃ • .menu tools
┃ • .menu info
┃ • .menu user
┃ • .menu main
┃ • .menu nsfw
┃ • .menu advanced
┃ • .menu owner
┃ • .menu rpg
┃ • .menu search
┃ • .menu sound
┃ • .menu stalker
┃ • .menu sticker
┃ • .menu premium
┃ • .menu audio
┃ • .menu image
┗━━━━━━━━━━━━━━━━━━━
`;
  },
 wait: '⏱️ *Mohon bersabar*\n\> Sedang menjalankan perintah dari *User*!',
 eror: '🤖 *Information Bot*\n\> Mohon maaf atas ketidaknyamanan dalam menggunakan *Nightmare Bot* . Ada kesalahan dalam sistem saat menjalankan perintah.'
}

global.multiplier = 69
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
      let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
}

// Apikey
global.api = {
 lol: 'GataDios'

}
global.APIs = {
  lol: "https://api.lolhumaan.xyz"
}

//Apikey
global.APIKeys = {
    "https://api.lolhumaan.xyz": "GataDios"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})