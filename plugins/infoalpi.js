let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Shrull
│ ✎ _Sekolah_ : Udah Lulus
│ ✎ _Umur_ : 18
│ ✎ _Asal_ : Kalsel
│ ✎ _Status_ : Belum Menikah
│ ✎ _WhatsApp_ :wa.me/6285822347348
╰──────────────
`.trim(), m)
}

handler.help = ['infoowner']
handler.tags = ['main', 'utama']
handler.command = /^(infoowner)$/i

handler.exp = 150

module.exports = handler
