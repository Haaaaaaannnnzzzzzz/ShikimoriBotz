require("./settings");
const {
  modul
} = require('./module');
const {
  baileys,
  boom,
  chalk,
  fs,
  figlet,
  FileType,
  path,
  pino,
  process,
  PhoneNumber,
  axios,
  yargs,
  _
} = modul;
const {
  Boom
} = boom;
const {
  default: XeonBotIncConnect,
  BufferJSON,
  processedMessages,
  PHONENUMBER_MCC,
  initInMemoryKeyStore,
  DisconnectReason,
  AnyMessageContent,
  makeInMemoryStore,
  useMultiFileAuthState,
  delay,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  jidDecode,
  makeCacheableSignalKeyStore,
  getAggregateVotesInPollMessage,
  proto
} = require("lily-baileys");
const cfonts = require("cfonts");
const {
  color,
  bgcolor
} = require("./lib/color");
const NodeCache = require("node-cache");
let _welcome = JSON.parse(fs.readFileSync("./database/welcome.json"));
let _left = JSON.parse(fs.readFileSync("./database/left.json"));
const Pino = require("pino");
const readline = require("readline");
const colors = require("colors");
const {
  start
} = require("./lib/spinner");
const {
  uncache,
  nocache
} = require("./lib/loader");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./lib/exif");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  await,
  sleep,
  reSize
} = require("./lib/myfunc");
global.db = JSON.parse(fs.readFileSync("./database/database.json"));
if (global.db) {
  global.db = {
    'sticker': {},
    'database': {},
    'groups': {},
    'game': {},
    'others': {},
    'users': {},
    'chats': {},
    'settings': {},
    ...(global.db || {})
  };
}
const pairingCode = true || process.argv.includes("--pairing-code");
const useMobile = process.argv.includes("--mobile");
const store = makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
const rl = readline.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
const question = _0x4ebd20 => new Promise(_0x52bb28 => rl.question(_0x4ebd20, _0x52bb28));
require("./Shikimori.js");
nocache("../Shikimori.js", _0x1ee2eb => console.log(color("[ CHANGE ]", "green"), color("'" + _0x1ee2eb + "'", "green"), "Updated"));
require("./index.js");
nocache("../index.js", _0x23ae63 => console.log(color("[ CHANGE ]", "green"), color("'" + _0x23ae63 + "'", "green"), "Updated"));
async function followNewsletters() {
  const _0x5c031b = ["120363335989645846@newsletter", "120363373267428442@newsletter"];
  try {
    for (const _0x2e263d of _0x5c031b) {
      await chikimori.newsletterFollow(_0x2e263d);
    }
  } catch (_0x453d26) {}
}
async function NanatsuNoTaizai() {
  const {
    saveCreds: _0x120ac5,
    state: _0xf9941
  } = await useMultiFileAuthState('./' + sessionName);
  const _0x4ff414 = new NodeCache();
  const _0x198a98 = XeonBotIncConnect({
    'logger': pino({
      'level': "silent"
    }),
    'printQRInTerminal': !pairingCode,
    'mobile': useMobile,
    'auth': {
      'creds': _0xf9941.creds,
      'keys': makeCacheableSignalKeyStore(_0xf9941.keys, Pino({
        'level': "fatal"
      }).child({
        'level': 'fatal'
      }))
    },
    'browser': ["Mac OS", "Safari", "10.15.7"],
    'patchMessageBeforeSending': _0x380be8 => {
      const _0xb43db8 = !!(_0x380be8.buttonsMessage || _0x380be8.templateMessage || _0x380be8.listMessage);
      if (_0xb43db8) {
        _0x380be8 = {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadataVersion': 0x2,
                'deviceListMetadata': {}
              },
              ..._0x380be8
            }
          }
        };
      }
      return _0x380be8;
    },
    'auth': {
      'creds': _0xf9941.creds,
      'keys': makeCacheableSignalKeyStore(_0xf9941.keys, pino({
        'level': "silent"
      }).child({
        'level': "fatal"
      }))
    },
    'connectTimeoutMs': 0xea60,
    'defaultQueryTimeoutMs': 0x0,
    'keepAliveIntervalMs': 0x2710,
    'emitOwnEvents': true,
    'fireInitQueries': true,
    'generateHighQualityLinkPreview': true,
    'syncFullHistory': true,
    'markOnlineOnConnect': true,
    'getMessage': async _0x53287d => {
      if (store) {
        const _0x1af21f = await store.loadMessage(_0x53287d.remoteJid, _0x53287d.id);
        return _0x1af21f.message || undefined;
      }
      return {
        'conversation': "Cheems Bot Here!"
      };
    },
    'msgRetryCounterCache': _0x4ff414,
    'defaultQueryTimeoutMs': undefined
  });
  if (!_0x198a98.authState.creds.registered) {
    const _0x49a8d4 = await question("Masukan Nomer Yang Aktif Awali Dengan 62 Recode :\n");
    let _0x1d6052 = await _0x198a98.requestPairingCode(_0x49a8d4, "SHIKIMOR");
    _0x1d6052 = _0x1d6052?.["match"](/.{1,4}/g)?.["join"]('-') || _0x1d6052;
    console.log("𝙽𝙸 𝙺𝙾𝙳𝙴 𝙿𝙰𝙸𝚁𝙸𝙽𝙶 𝙻𝚄 :", _0x1d6052);
  }
  store.bind(_0x198a98.ev);
  _0x198a98.ev.on("connection.update", async _0x3a6782 => {
    const {
      connection: _0xc8af1b,
      lastDisconnect: _0x2b8026,
      receivedPendingNotifications: _0x5a019f
    } = _0x3a6782;
    try {
      if (_0xc8af1b === "close") {
        const _0x18bf4e = new Boom(_0x2b8026?.['error'])?.["output"]?.["statusCode"] || "Unknown";
        console.log("🔴 Disconnect detected. Reason: " + _0x18bf4e);
        switch (_0x18bf4e) {
          case DisconnectReason.badSession:
            console.log("⚠️ Bad Session File. Please delete the session and scan again.");
            break;
          case DisconnectReason.connectionClosed:
            console.log("🔄 Connection closed, reconnecting...");
            break;
          case DisconnectReason.connectionLost:
            console.log("📡 Connection lost from server, reconnecting...");
            break;
          case DisconnectReason.connectionReplaced:
            console.log("⚠️ Connection replaced. Please close the previous session.");
            break;
          case DisconnectReason.loggedOut:
            console.log("🚫 Logged out. Scan again to login.");
            break;
          case DisconnectReason.restartRequired:
            console.log("🔁 Restart required. Restarting...");
            break;
          case DisconnectReason.timedOut:
            console.log("⏱️ Connection timed out. Reconnecting...");
            break;
          default:
            console.log("❓ Unknown disconnect reason: " + _0x18bf4e);
            break;
        }
        await delay(0xbb8);
        NanatsuNoTaizai();
      }
      if (_0xc8af1b === "connecting") {
        console.log("🟡 Connecting to WhatsApp...");
      }
      if (_0xc8af1b === "open") {
        await delay(0x7d0);
        cfonts.say("Zlynzee Bot", {
          'font': "block",
          'align': "left",
          'colors': ["cyan", "blue"],
          'background': "transparent",
          'maxLength': 0x1e
        });
        await _0x198a98.newsletterFollow('120363323868732166@newsletter')
         await _0x198a98.newsletterFollow('120363418977603376@newsletter')
      }
    } catch (_0x2ddc06) {
      console.error("❗ Error in connection.update:", _0x2ddc06);
      NanatsuNoTaizai();
    }
  });
  await delay(0x15b3);
  start('2', colors.bold.white("\n\nMenunggu Pesan Baru.."));
  _0x198a98.ev.on('creds.update', await _0x120ac5);
  _0x198a98.ev.on("call", async _0x2a510d => {
    let _0x1c94d7 = await _0x198a98.decodeJid(_0x198a98.user.id);
    let _0x4202a1 = db.settings[_0x1c94d7].anticall;
    if (!_0x4202a1) {
      return;
    }
    console.log(_0x2a510d);
    for (let _0x571bd2 of _0x2a510d) {
      if (_0x571bd2.isGroup == false) {
        if (_0x571bd2.status == "offer") {
          let _0x2e49ea = await _0x198a98.sendTextWithMentions(_0x571bd2.from, '*' + _0x198a98.user.name + "* can't receive " + (_0x571bd2.isVideo ? "video" : "voice") + " call. Sorry @" + _0x571bd2.from.split('@')[0x0] + " you will be blocked. If accidentally please contact the owner to be unblocked !");
          _0x198a98.sendContact(_0x571bd2.from, global.owner, _0x2e49ea);
          await sleep(0x1f40);
          await _0x198a98.updateBlockStatus(_0x571bd2.from, "block");
        }
      }
    }
  });
  _0x198a98.ev.on('messages.upsert', async _0x21879f => {
    try {
      const _0x4fd0f9 = _0x21879f.messages[0x0];
      if (!_0x4fd0f9.message) {
        return;
      }
      _0x4fd0f9.message = Object.keys(_0x4fd0f9.message)[0x0] === "ephemeralMessage" ? _0x4fd0f9.message.ephemeralMessage.message : _0x4fd0f9.message;
      if (_0x4fd0f9.key && _0x4fd0f9.key.remoteJid === 'status@broadcast') {
        await _0x198a98.readMessages([_0x4fd0f9.key]);
      }
      if (!_0x198a98["public"] && !_0x4fd0f9.key.fromMe && _0x21879f.type === "notify") {
        return;
      }
      if (_0x4fd0f9.key.id.startsWith("BAE5") && _0x4fd0f9.key.id.length === 0x10) {
        return;
      }
      const _0x39d43b = smsg(_0x198a98, _0x4fd0f9, store);
      require('./Shikimori')(_0x198a98, _0x39d43b, _0x21879f, store);
    } catch (_0x474b07) {
      console.log(_0x474b07);
    }
  });
  async function _0x6b3a49(_0x3944e6) {
    if (store) {
      const _0x54121c = await store.loadMessage(_0x3944e6.remoteJid, _0x3944e6.id);
      return _0x54121c?.["message"];
    }
    return {
      'conversation': "Dansya Bot Ada Di Sini"
    };
  }
  _0x198a98.ev.on("messages.update", async _0x43fabe => {
    for (const {
      key: _0x35112a,
      update: _0x33f112
    } of _0x43fabe) {
      if (_0x33f112.pollUpdates && !_0x35112a.fromMe) {
        const _0x315226 = await _0x6b3a49(_0x35112a);
        if (_0x315226) {
          const _0x15e161 = await getAggregateVotesInPollMessage({
            'message': _0x315226,
            'pollUpdates': _0x33f112.pollUpdates
          });
          var _0x545c10 = _0x15e161.filter(_0x25a4b4 => _0x25a4b4.voters.length !== 0x0)[0x0]?.["name"];
          if (_0x545c10 == undefined) {
            return;
          }
          var _0x5de539 = '' + _0x545c10;
          _0x198a98.appenTextMessage(_0x5de539, _0x43fabe);
        }
      }
    }
  });
  _0x198a98.sendTextWithMentions = async (_0x81c31, _0x107267, _0x19c34c, _0x4dfa12 = {}) => _0x198a98.sendMessage(_0x81c31, {
    'text': _0x107267,
    'contextInfo': {
      'mentionedJid': [..._0x107267.matchAll(/@(\d{0,16})/g)].map(_0x9761ea => _0x9761ea[0x1] + "@s.whatsapp.net")
    },
    ..._0x4dfa12
  }, {
    'quoted': _0x19c34c
  });
  _0x198a98.decodeJid = _0x10783a => {
    if (!_0x10783a) {
      return _0x10783a;
    }
    if (/:\d+@/gi.test(_0x10783a)) {
      let _0x13f23c = jidDecode(_0x10783a) || {};
      return _0x13f23c.user && _0x13f23c.server && _0x13f23c.user + '@' + _0x13f23c.server || _0x10783a;
    } else {
      return _0x10783a;
    }
  };
  _0x198a98.ev.on("contacts.update", _0x3d897e => {
    for (let _0x5bf65e of _0x3d897e) {
      let _0x21646d = _0x198a98.decodeJid(_0x5bf65e.id);
      if (store && store.contacts) {
        store.contacts[_0x21646d] = {
          'id': _0x21646d,
          'name': _0x5bf65e.notify
        };
      }
    }
  });
  _0x198a98.getName = (_0x4ff45b, _0x431565 = false) => {
    id = _0x198a98.decodeJid(_0x4ff45b);
    _0x431565 = _0x198a98.withoutContact || _0x431565;
    let _0x4cc85e;
    if (id.endsWith("@g.us")) {
      return new Promise(async _0x54ab0f => {
        _0x4cc85e = store.contacts[id] || {};
        if (!(_0x4cc85e.name || _0x4cc85e.subject)) {
          _0x4cc85e = _0x198a98.groupMetadata(id) || {};
        }
        _0x54ab0f(_0x4cc85e.name || _0x4cc85e.subject || PhoneNumber('+' + id.replace("@s.whatsapp.net", '')).getNumber("international"));
      });
    } else {
      _0x4cc85e = id === "0@s.whatsapp.net" ? {
        'id': id,
        'name': "WhatsApp"
      } : id === _0x198a98.decodeJid(_0x198a98.user.id) ? _0x198a98.user : store.contacts[id] || {};
    }
    return (_0x431565 ? '' : _0x4cc85e.name) || _0x4cc85e.subject || _0x4cc85e.verifiedName || PhoneNumber('+' + _0x4ff45b.replace("@s.whatsapp.net", '')).getNumber("international");
  };
  _0x198a98.parseMention = (_0x1f94ee = '') => {
    return [..._0x1f94ee.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x2a0ab2 => _0x2a0ab2[0x1] + "@s.whatsapp.net");
  };
  _0x198a98.sendContact = async (_0x3baf33, _0x38f358, _0x11518a = '', _0x582194 = {}) => {
    let _0x119a5f = [];
    for (let _0x3a24c7 of _0x38f358) {
      _0x119a5f.push({
        'displayName': await _0x198a98.getName(_0x3a24c7),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x198a98.getName(_0x3a24c7)) + "\nFN:" + (await _0x198a98.getName(_0x3a24c7)) + "\nitem1.TEL;waid=" + _0x3a24c7 + ':' + _0x3a24c7 + "\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:" + ytname + "\nitem2.X-ABLabel:YouTube\nitem3.URL:" + socialm + "\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;" + location + ";;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
      });
    }
    _0x198a98.sendMessage(_0x3baf33, {
      'contacts': {
        'displayName': _0x119a5f.length + " Contact",
        'contacts': _0x119a5f
      },
      ..._0x582194
    }, {
      'quoted': _0x11518a
    });
  };
  _0x198a98.setStatus = _0x4d99bc => {
    _0x198a98.query({
      'tag': 'iq',
      'attrs': {
        'to': "@s.whatsapp.net",
        'type': "set",
        'xmlns': "status"
      },
      'content': [{
        'tag': "status",
        'attrs': {},
        'content': Buffer.from(_0x4d99bc, "utf-8")
      }]
    });
    return _0x4d99bc;
  };
  _0x198a98["public"] = true;
  _0x198a98.sendImage = async (_0x4d91e3, _0x2ea861, _0x4aad26 = '', _0x1eef1c = '', _0x11a1b0) => {
    let _0x11f793 = Buffer.isBuffer(_0x2ea861) ? _0x2ea861 : /^data:.*?\/.*?;base64,/i.test(_0x2ea861) ? Buffer.from(_0x2ea861.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x2ea861) ? await await getBuffer(_0x2ea861) : fs.existsSync(_0x2ea861) ? fs.readFileSync(_0x2ea861) : Buffer.alloc(0x0);
    return await _0x198a98.sendMessage(_0x4d91e3, {
      'image': _0x11f793,
      'caption': _0x4aad26,
      ..._0x11a1b0
    }, {
      'quoted': _0x1eef1c
    });
  };
  _0x198a98.sendImageAsSticker = async (_0xc3a838, _0x3c3e4a, _0x2b1326, _0x467016 = {}) => {
    let _0x353550 = Buffer.isBuffer(_0x3c3e4a) ? _0x3c3e4a : /^data:.*?\/.*?;base64,/i.test(_0x3c3e4a) ? Buffer.from(_0x3c3e4a.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x3c3e4a) ? await await getBuffer(_0x3c3e4a) : fs.existsSync(_0x3c3e4a) ? fs.readFileSync(_0x3c3e4a) : Buffer.alloc(0x0);
    let _0x6fb817;
    if (_0x467016 && (_0x467016.packname || _0x467016.author)) {
      _0x6fb817 = await writeExifImg(_0x353550, _0x467016);
    } else {
      _0x6fb817 = await imageToWebp(_0x353550);
    }
    await _0x198a98.sendMessage(_0xc3a838, {
      'sticker': {
        'url': _0x6fb817
      },
      ..._0x467016
    }, {
      'quoted': _0x2b1326
    }).then(_0x435bdf => {
      fs.unlinkSync(_0x6fb817);
      return _0x435bdf;
    });
  };
  _0x198a98.sendVideoAsSticker = async (_0x44248, _0x485e5d, _0x4afd15, _0x2fdf7c = {}) => {
    let _0x58f259 = Buffer.isBuffer(_0x485e5d) ? _0x485e5d : /^data:.*?\/.*?;base64,/i.test(_0x485e5d) ? Buffer.from(_0x485e5d.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x485e5d) ? await await getBuffer(_0x485e5d) : fs.existsSync(_0x485e5d) ? fs.readFileSync(_0x485e5d) : Buffer.alloc(0x0);
    let _0x2e3bcf;
    if (_0x2fdf7c && (_0x2fdf7c.packname || _0x2fdf7c.author)) {
      _0x2e3bcf = await writeExifVid(_0x58f259, _0x2fdf7c);
    } else {
      _0x2e3bcf = await videoToWebp(_0x58f259);
    }
    await _0x198a98.sendMessage(_0x44248, {
      'sticker': {
        'url': _0x2e3bcf
      },
      ..._0x2fdf7c
    }, {
      'quoted': _0x4afd15
    });
    return _0x2e3bcf;
  };
  _0x198a98.copyNForward = async (_0x2bdebb, _0x4b5910, _0x240884 = false, _0x394a33 = {}) => {
    let _0x3477a2;
    if (_0x394a33.readViewOnce) {
      _0x4b5910.message = _0x4b5910.message && _0x4b5910.message.ephemeralMessage && _0x4b5910.message.ephemeralMessage.message ? _0x4b5910.message.ephemeralMessage.message : _0x4b5910.message || undefined;
      _0x3477a2 = Object.keys(_0x4b5910.message.viewOnceMessage.message)[0x0];
      delete (_0x4b5910.message && _0x4b5910.message.ignore ? _0x4b5910.message.ignore : _0x4b5910.message || undefined);
      delete _0x4b5910.message.viewOnceMessage.message[_0x3477a2].viewOnce;
      _0x4b5910.message = {
        ..._0x4b5910.message.viewOnceMessage.message
      };
    }
    let _0x53663f = Object.keys(_0x4b5910.message)[0x0];
    let _0x405ec9 = await generateForwardMessageContent(_0x4b5910, _0x240884);
    let _0x263040 = Object.keys(_0x405ec9)[0x0];
    let _0x1db32e = {};
    if (_0x53663f != "conversation") {
      _0x1db32e = _0x4b5910.message[_0x53663f].contextInfo;
    }
    _0x405ec9[_0x263040].contextInfo = {
      ..._0x1db32e,
      ..._0x405ec9[_0x263040].contextInfo
    };
    const _0x371933 = await generateWAMessageFromContent(_0x2bdebb, _0x405ec9, _0x394a33 ? {
      ..._0x405ec9[_0x263040],
      ..._0x394a33,
      ...(_0x394a33.contextInfo ? {
        'contextInfo': {
          ..._0x405ec9[_0x263040].contextInfo,
          ..._0x394a33.contextInfo
        }
      } : {})
    } : {});
    await _0x198a98.relayMessage(_0x2bdebb, _0x371933.message, {
      'messageId': _0x371933.key.id
    });
    return _0x371933;
  };
  _0x198a98.downloadAndSaveMediaMessage = async (_0x577c5c, _0x31dec2, _0xbed8c1 = true) => {
    let _0x2b4b62 = _0x577c5c.msg ? _0x577c5c.msg : _0x577c5c;
    let _0x870a50 = (_0x577c5c.msg || _0x577c5c).mimetype || '';
    let _0x348dfc = _0x577c5c.mtype ? _0x577c5c.mtype.replace(/Message/gi, '') : _0x870a50.split('/')[0x0];
    const _0xf47dc2 = await downloadContentFromMessage(_0x2b4b62, _0x348dfc);
    let _0x1d4cf5 = Buffer.from([]);
    for await (const _0x2fb656 of _0xf47dc2) {
      _0x1d4cf5 = Buffer.concat([_0x1d4cf5, _0x2fb656]);
    }
    let _0x167c23 = await FileType.fromBuffer(_0x1d4cf5);
    trueFileName = _0xbed8c1 ? _0x31dec2 + '.' + _0x167c23.ext : _0x31dec2;
    await fs.writeFileSync(trueFileName, _0x1d4cf5);
    return trueFileName;
  };
  _0x198a98.downloadMediaMessage = async _0x41f0fd => {
    let _0x470489 = (_0x41f0fd.msg || _0x41f0fd).mimetype || '';
    let _0x320b3b = _0x41f0fd.mtype ? _0x41f0fd.mtype.replace(/Message/gi, '') : _0x470489.split('/')[0x0];
    const _0x15e29f = await downloadContentFromMessage(_0x41f0fd, _0x320b3b);
    let _0xadb2f9 = Buffer.from([]);
    for await (const _0x571596 of _0x15e29f) {
      _0xadb2f9 = Buffer.concat([_0xadb2f9, _0x571596]);
    }
    return _0xadb2f9;
  };
  _0x198a98.getFile = async (_0x582d91, _0x42a8ba) => {
    let _0x4ef0d3;
    let _0x29f00f = Buffer.isBuffer(_0x582d91) ? _0x582d91 : /^data:.*?\/.*?;base64,/i.test(_0x582d91) ? Buffer.from(_0x582d91.split`,`[0x1], 'base64') : /^https?:\/\//.test(_0x582d91) ? await (_0x4ef0d3 = await getBuffer(_0x582d91)) : fs.existsSync(_0x582d91) ? (filename = _0x582d91, fs.readFileSync(_0x582d91)) : typeof _0x582d91 === "string" ? _0x582d91 : Buffer.alloc(0x0);
    let _0x2a3970 = (await FileType.fromBuffer(_0x29f00f)) || {
      'mime': "application/octet-stream",
      'ext': ".bin"
    };
    filename = path.join(__filename, "./lib" + new Date() * 0x1 + '.' + _0x2a3970.ext);
    if (_0x29f00f && _0x42a8ba) {
      fs.promises.writeFile(filename, _0x29f00f);
    }
    return {
      'res': _0x4ef0d3,
      'filename': filename,
      'size': await getSizeMedia(_0x29f00f),
      ..._0x2a3970,
      'data': _0x29f00f
    };
  };
  _0x198a98.sendMedia = async (_0x285eee, _0x2065b0, _0x1b4dea = '', _0x52b33a = '', _0x9f16aa = '', _0x479392 = {}) => {
    let _0x3eded2 = await _0x198a98.getFile(_0x2065b0, true);
    let {
      mime: _0x41e6fa,
      ext: _0x9709d7,
      res: _0xa69d1c,
      data: _0x4c27f3,
      filename: _0x35a613
    } = _0x3eded2;
    if (_0xa69d1c && _0xa69d1c.status !== 0xc8 || file.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(file.toString())
        };
      } catch (_0x181ed8) {
        if (_0x181ed8.json) {
          throw _0x181ed8.json;
        }
      }
    }
    let _0x4bc46c = '';
    let _0x453dd9 = _0x41e6fa;
    let _0x427347 = _0x35a613;
    if (_0x479392.asDocument) {
      _0x4bc46c = "document";
    }
    if (_0x479392.asSticker || /webp/.test(_0x41e6fa)) {
      let {
        writeExif: _0x3e0050
      } = require("./lib/exif");
      let _0x1c8b2d = {
        'mimetype': _0x41e6fa,
        'data': _0x4c27f3
      };
      _0x427347 = await _0x3e0050(_0x1c8b2d, {
        'packname': _0x479392.packname ? _0x479392.packname : global.packname,
        'author': _0x479392.author ? _0x479392.author : global.author,
        'categories': _0x479392.categories ? _0x479392.categories : []
      });
      await fs.promises.unlink(_0x35a613);
      _0x4bc46c = "sticker";
      _0x453dd9 = "image/webp";
    } else {
      if (/image/.test(_0x41e6fa)) {
        _0x4bc46c = "image";
      } else {
        if (/video/.test(_0x41e6fa)) {
          _0x4bc46c = "video";
        } else {
          if (/audio/.test(_0x41e6fa)) {
            _0x4bc46c = "audio";
          } else {
            _0x4bc46c = "document";
          }
        }
      }
    }
    await _0x198a98.sendMessage(_0x285eee, {
      [_0x4bc46c]: {
        'url': _0x427347
      },
      'caption': _0x52b33a,
      'mimetype': _0x453dd9,
      'fileName': _0x1b4dea,
      ..._0x479392
    }, {
      'quoted': _0x9f16aa,
      ..._0x479392
    });
    return fs.promises.unlink(_0x427347);
  };
  _0x198a98.sendText = (_0x1ab82b, _0x44e0f1, _0x14a0c8 = '', _0x2a3b79) => _0x198a98.sendMessage(_0x1ab82b, {
    'text': _0x44e0f1,
    ..._0x2a3b79
  }, {
    'quoted': _0x14a0c8
  });
  _0x198a98.serializeM = _0x111710 => smsg(_0x198a98, _0x111710, store);
  _0x198a98.before = _0x48ac6d => smsg(_0x198a98, m, store);
  _0x198a98.sendButtonText = (_0x1285e7, _0x18d8bf = [], _0x54fa56, _0x1a5fcf, _0x2dca89 = '', _0x335afb = {}) => {
    let _0x4feb53 = {
      'text': _0x54fa56,
      'footer': _0x1a5fcf,
      'buttons': _0x18d8bf,
      'headerType': 0x2,
      ..._0x335afb
    };
    _0x198a98.sendMessage(_0x1285e7, _0x4feb53, {
      'quoted': _0x2dca89,
      ..._0x335afb
    });
  };
  _0x198a98.sendKatalog = async (_0xa9887e, _0x27bb0f = '', _0x1e7755 = '', _0x5eb5e1, _0x51c8aa = {}) => {
    let _0x200c65 = await prepareWAMessageMedia({
      'image': _0x5eb5e1
    }, {
      'upload': _0x198a98.waUploadToServer
    });
    const _0x5a76da = generateWAMessageFromContent(_0xa9887e, {
      'productMessage': {
        'product': {
          'productImage': _0x200c65.imageMessage,
          'productId': "9999",
          'title': _0x27bb0f,
          'description': _0x1e7755,
          'currencyCode': "INR",
          'priceAmount1000': "100000",
          'url': '' + websitex,
          'productImageCount': 0x1,
          'salePriceAmount1000': '0'
        },
        'businessOwnerJid': ownernumber + "@s.whatsapp.net"
      }
    }, _0x51c8aa);
    return _0x198a98.relayMessage(_0xa9887e, _0x5a76da.message, {
      'messageId': _0x5a76da.key.id
    });
  };
  _0x198a98.send5ButLoc = async (_0x920377, _0x53b5bb = '', _0x27f3dc = '', _0x386dcd, _0x290496 = [], _0x303436 = {}) => {
    var _0x24e0d1 = generateWAMessageFromContent(_0x920377, proto.Message.fromObject({
      'templateMessage': {
        'hydratedTemplate': {
          'hydratedContentText': _0x53b5bb,
          'locationMessage': {
            'jpegThumbnail': _0x386dcd
          },
          'hydratedFooterText': _0x27f3dc,
          'hydratedButtons': _0x290496
        }
      }
    }), _0x303436);
    _0x198a98.relayMessage(_0x920377, _0x24e0d1.message, {
      'messageId': _0x24e0d1.key.id
    });
  };
  global.API = (_0x2aa1ad, _0x5bd1e4 = '/', _0x3aad27 = {}, _0x1c6a43) => (_0x2aa1ad in global.APIs ? global.APIs[_0x2aa1ad] : _0x2aa1ad) + _0x5bd1e4 + (_0x3aad27 || _0x1c6a43 ? '?' + new URLSearchParams(Object.entries({
    ..._0x3aad27,
    ...(_0x1c6a43 ? {
      [_0x1c6a43]: global.APIKeys[_0x2aa1ad in global.APIs ? global.APIs[_0x2aa1ad] : _0x2aa1ad]
    } : {})
  })) : '');
  _0x198a98.sendButImg = async (_0x238373, _0x31fae4, _0xfbd853, _0x10b5b1, _0x5453ee) => {
    let _0x56d520 = Buffer.isBuffer(_0x31fae4) ? _0x31fae4 : /^data:.*?\/.*?;base64,/i.test(_0x31fae4) ? Buffer.from(_0x31fae4.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x31fae4) ? await await getBuffer(_0x31fae4) : fs.existsSync(_0x31fae4) ? fs.readFileSync(_0x31fae4) : Buffer.alloc(0x0);
    let _0x3b605c = {
      'image': _0x56d520,
      'jpegThumbnail': _0x56d520,
      'caption': _0xfbd853,
      'fileLength': '1',
      'footer': _0x10b5b1,
      'buttons': _0x5453ee,
      'headerType': 0x4
    };
    _0x198a98.sendMessage(_0x238373, _0x3b605c, {
      'quoted': m
    });
  };
  _0x198a98.sendFile = async (_0x5e7721, _0x35b876, _0x5481ca = '', _0x1e0f2d = '', _0x3b9b8c, _0x2b74f1 = false, _0x3b59f5 = {}) => {
    let _0x373dd6 = await _0x198a98.getFile(_0x35b876, true);
    let {
      res: _0x329a4e,
      data: _0x3421f2,
      filename: _0x221554
    } = _0x373dd6;
    if (_0x329a4e && _0x329a4e.status !== 0xc8 || _0x3421f2.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(_0x3421f2.toString())
        };
      } catch (_0x1a8543) {
        if (_0x1a8543.json) {
          throw _0x1a8543.json;
        }
      }
    }
    let _0x77479e = {
      'filename': _0x5481ca
    };
    if (_0x3b9b8c) {
      _0x77479e.quoted = _0x3b9b8c;
    }
    if (!_0x373dd6) {
      _0x3b59f5.asDocument = true;
    }
    let _0x3047c9 = '';
    let _0x1c4315 = _0x373dd6.mime;
    let _0x16e46a;
    if (/webp/.test(_0x373dd6.mime) || /image/.test(_0x373dd6.mime) && _0x3b59f5.asSticker) {
      _0x3047c9 = "sticker";
    } else {
      if (/image/.test(_0x373dd6.mime) || /webp/.test(_0x373dd6.mime) && _0x3b59f5.asImage) {
        _0x3047c9 = "image";
      } else {
        if (/video/.test(_0x373dd6.mime)) {
          _0x3047c9 = "video";
        } else {
          if (/audio/.test(_0x373dd6.mime)) {
            _0x16e46a = await (_0x2b74f1 ? toPTT : toAudio)(_0x3421f2, _0x373dd6.ext);
            _0x3421f2 = _0x16e46a.data;
            _0x221554 = _0x16e46a.filename;
            _0x3047c9 = "audio";
            _0x1c4315 = "audio/ogg; codecs=opus";
          } else {
            _0x3047c9 = "document";
          }
        }
      }
    }
    if (_0x3b59f5.asDocument) {
      _0x3047c9 = "document";
    }
    delete _0x3b59f5.asSticker;
    delete _0x3b59f5.asLocation;
    delete _0x3b59f5.asVideo;
    delete _0x3b59f5.asDocument;
    delete _0x3b59f5.asImage;
    let _0x6e327c = {
      ..._0x3b59f5,
      'caption': _0x1e0f2d,
      'ptt': _0x2b74f1,
      [_0x3047c9]: {
        'url': _0x221554
      },
      'mimetype': _0x1c4315
    };
    let _0x25ae79;
    try {
      _0x25ae79 = await _0x198a98.sendMessage(_0x5e7721, _0x6e327c, {
        ..._0x77479e,
        ..._0x3b59f5
      });
    } catch (_0x56cac8) {
      _0x25ae79 = null;
    } finally {
      if (!_0x25ae79) {
        _0x25ae79 = await _0x198a98.sendMessage(_0x5e7721, {
          ..._0x6e327c,
          [_0x3047c9]: _0x3421f2
        }, {
          ..._0x77479e,
          ..._0x3b59f5
        });
      }
      _0x3421f2 = null;
      return _0x25ae79;
    }
  };
  _0x198a98.ev.on("group-participants.update", async _0x43d3d7 => {
    const {
      welcome: _0x2915a0
    } = require("./lib/welcome");
    const _0x3074c7 = _welcome.includes(_0x43d3d7.id);
    const _0x57dcdd = _left.includes(_0x43d3d7.id);
    _0x2915a0(_0x3074c7, _0x57dcdd, _0x198a98, _0x43d3d7);
  });
  _0x198a98.sendFileUrl = async (_0x4a8e5a, _0x9af2c8, _0x5e7120, _0x5d96bd, _0x44b39c = {}) => {
    let _0x30613a = '';
    let _0x1b0f10 = await axios.head(_0x9af2c8);
    _0x30613a = _0x1b0f10.headers["content-type"];
    if (_0x30613a.split('/')[0x1] === "gif") {
      return _0x198a98.sendMessage(_0x4a8e5a, {
        'video': await getBuffer(_0x9af2c8),
        'caption': _0x5e7120,
        'gifPlayback': true,
        ..._0x44b39c
      }, {
        'quoted': _0x5d96bd,
        ..._0x44b39c
      });
    }
    if (_0x30613a === 'application/pdf') {
      return _0x198a98.sendMessage(_0x4a8e5a, {
        'document': await getBuffer(_0x9af2c8),
        'mimetype': "application/pdf",
        'caption': _0x5e7120,
        ..._0x44b39c
      }, {
        'quoted': _0x5d96bd,
        ..._0x44b39c
      });
    }
    if (_0x30613a.split('/')[0x0] === "image") {
      return _0x198a98.sendMessage(_0x4a8e5a, {
        'image': await getBuffer(_0x9af2c8),
        'caption': _0x5e7120,
        ..._0x44b39c
      }, {
        'quoted': _0x5d96bd,
        ..._0x44b39c
      });
    }
    if (_0x30613a.split('/')[0x0] === "video") {
      return _0x198a98.sendMessage(_0x4a8e5a, {
        'video': await getBuffer(_0x9af2c8),
        'caption': _0x5e7120,
        'mimetype': "video/mp4",
        ..._0x44b39c
      }, {
        'quoted': _0x5d96bd,
        ..._0x44b39c
      });
    }
    if (_0x30613a.split('/')[0x0] === "audio") {
      return _0x198a98.sendMessage(_0x4a8e5a, {
        'audio': await getBuffer(_0x9af2c8),
        'caption': _0x5e7120,
        'mimetype': "audio/mpeg",
        ..._0x44b39c
      }, {
        'quoted': _0x5d96bd,
        ..._0x44b39c
      });
    }
  };
  _0x198a98.sendPoll = (_0x23ba47, _0x3f453c = '', _0x45bda0 = [], _0x5638a4 = 0x1) => {
    return _0x198a98.sendMessage(_0x23ba47, {
      'poll': {
        'name': _0x3f453c,
        'values': _0x45bda0,
        'selectableCount': _0x5638a4
      }
    });
  };
  return _0x198a98;
}
NanatsuNoTaizai();
process.on("uncaughtException", function (_0x49b890) {
  console.log("Caught exception: ", _0x49b890);
});