/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const { System, isPrivate, getSpotify, sendInsta, LokiXer, getJson, wait } = require("../lib/");
const config = require("../config");

System({
    pattern: "spotify",
    fromMe: isPrivate,
    desc: "Download Tracks from Spotify",
    type: "download",
  },
  async (message, match) => {
    await getSpotify(message, match)
  });

System({
  pattern: "insta",
  fromMe: isPrivate,
  desc: "Download Instagram media",
  type: "download",
}, async (message, match) => {
  await sendInsta(message, match);
});


System({
    pattern: "ts",
    fromMe: true,
    desc: "telegram sticker downloader",
    type: "download",
},
async (message, match) => {
const _0x363c8d=_0x1147;function _0x1147(_0x4be94f,_0x1112a2){const _0x3e8198=_0x692b();return _0x1147=function(_0x1dd9d5,_0x4325f7){_0x1dd9d5=_0x1dd9d5-(-0x1dbe+-0xd3a+-0x2b6f*-0x1);let _0x4072c0=_0x3e8198[_0x1dd9d5];return _0x4072c0;},_0x1147(_0x4be94f,_0x1112a2);}function _0x692b(){const _0x9a3705=['https://t.','error','2103702VSFBMi','send','STICKER_PA','PTLJa','me/','map','result','3777453WmqGet','sticker','UlmzM','455902RYQhGG','text','401532UpkVTP','459yNXWKC','5238945WjbaUJ','7KlPfaj','url','_Give\x20a\x20te','8384WnyDtm','266208UktrBC','An\x20error\x20o','reply_mess','age','ccurred:','cker\x20URL_','legram\x20sti','telesticke','10siHdVQ','startsWith','r?url=','reply','CKNAME','split'];_0x692b=function(){return _0x9a3705;};return _0x692b();}(function(_0x3d3e98,_0x5ebfb4){const _0x30aba7=_0x1147,_0x325034=_0x3d3e98();while(!![]){try{const _0x4bc42e=parseInt(_0x30aba7(0x96))/(-0x66b+0x127f*-0x1+0x18eb)+parseInt(_0x30aba7(0x8c))/(0x25f0+0xca*0x17+-0x3814)+parseInt(_0x30aba7(0x99))/(-0x5f6+-0x1a26+-0x201f*-0x1)*(-parseInt(_0x30aba7(0x7b))/(0x230f+0x1ab+-0x24b6))+-parseInt(_0x30aba7(0x77))/(0x1c58+-0xf9e+-0xcb5*0x1)+-parseInt(_0x30aba7(0x98))/(-0x31*-0x59+0x293+-0x1396)*(-parseInt(_0x30aba7(0x78))/(-0x1*0x183b+-0x1*-0xce3+0xb5f))+-parseInt(_0x30aba7(0x7c))/(-0x2*-0x2ef+0xf3d+0x19f*-0xd)+-parseInt(_0x30aba7(0x93))/(-0x17*0x13+-0x3*-0x229+0x1*-0x4bd)*(-parseInt(_0x30aba7(0x84))/(0xc10+0x1488+0x3*-0xada));if(_0x4bc42e===_0x5ebfb4)break;else _0x325034['push'](_0x325034['shift']());}catch(_0x5501b8){_0x325034['push'](_0x325034['shift']());}}}(_0x692b,0xe0d73+0x1*-0x37563+-0x18d11));try{match=match||message[_0x363c8d(0x7e)+_0x363c8d(0x7f)][_0x363c8d(0x97)];if(!match)return await message[_0x363c8d(0x87)](_0x363c8d(0x7a)+_0x363c8d(0x82)+_0x363c8d(0x81));else{if(match[_0x363c8d(0x85)](_0x363c8d(0x8a)+_0x363c8d(0x90))){const vv=await LokiXer(_0x363c8d(0x83)+_0x363c8d(0x86)+match),data=await getJson(vv),urls=data[_0x363c8d(0x92)][_0x363c8d(0x91)](_0x187d6e=>_0x187d6e[_0x363c8d(0x79)]),sendURL=async _0x254838=>{const _0x1f0f67=_0x363c8d,_0x5c794c={'PTLJa':function(_0x4bbd89,_0x3849e7){return _0x4bbd89(_0x3849e7);},'UlmzM':_0x1f0f67(0x94)},_0x10aadc=config[_0x1f0f67(0x8e)+_0x1f0f67(0x88)][_0x1f0f67(0x89)](';'),_0x46eaa2=_0x10aadc[-0x17d*-0x16+0x9c6+-0x2a84],_0x59e9ce=_0x10aadc[-0x1c*-0x3b+0x4*0x1ca+-0x81*0x1b];return await _0x5c794c[_0x1f0f67(0x8f)](wait,-0x1a79+-0x7*-0x199+0x22d2*0x1),await message[_0x1f0f67(0x8d)](_0x254838,{'packname':_0x46eaa2,'author':_0x59e9ce},_0x5c794c[_0x1f0f67(0x95)]);};for(const url of urls){await wait(-0x6*-0x16e+0x1c22+0x7*-0x392),await sendURL(url);}}else await message[_0x363c8d(0x87)](_0x363c8d(0x7a)+_0x363c8d(0x82)+_0x363c8d(0x81));}}catch(_0x4375a5){console[_0x363c8d(0x8b)](_0x363c8d(0x7d)+_0x363c8d(0x80),_0x4375a5);}
});
