const _0x5bd7=['getLang','upgrade','complete','author','./editor','mkdirs','require','join','catch','shift','fail','existsSync','package.json','path','defineProperty','open-popup','registerI18n','replace','use\x20strict','builder','basename','default','downloading','i18n/zh.js','popup','getServicePluginInfo','sendMsg','progress','__importDefault','.zip','name','getCreatorHomePath','service-','./http','i18n/en.js','unzip','match','getServiceHomePath','../builtin','__esModule','main','contents','unlinkSync'];(function(_0x2ebd44,_0x2245c6){const _0x5bd76b=function(_0x88d7b3){while(--_0x88d7b3){_0x2ebd44['push'](_0x2ebd44['shift']());}};_0x5bd76b(++_0x2245c6);}(_0x5bd7,0xc9));const _0x88d7=function(_0x2ebd44,_0x2245c6){_0x2ebd44=_0x2ebd44-0x1cd;let _0x5bd76b=_0x5bd7[_0x2ebd44];return _0x5bd76b;};const _0x3675ef=_0x88d7,_0x342a=[_0x3675ef(0x1ec),_0x3675ef(0x1d7),'existsSync',_0x3675ef(0x1ce),_0x3675ef(0x1e2),_0x3675ef(0x1cf),_0x3675ef(0x1d2),_0x3675ef(0x1d1),'readJson',_0x3675ef(0x1d9),_0x3675ef(0x1f4),'download',_0x3675ef(0x1eb),_0x3675ef(0x1e9),_0x3675ef(0x1e7),_0x3675ef(0x1f7),_0x3675ef(0x1d8),_0x3675ef(0x1e0),'plugin',_0x3675ef(0x1de),_0x3675ef(0x1d4),_0x3675ef(0x1f0),_0x3675ef(0x1d3),_0x3675ef(0x1e1),_0x3675ef(0x1da),_0x3675ef(0x1d5),_0x3675ef(0x1f6),_0x3675ef(0x1ea),'./util',_0x3675ef(0x1df),'then','version',_0x3675ef(0x1f1),'close-popup',_0x3675ef(0x1db),'installed',_0x3675ef(0x1dd),'fs-extra',_0x3675ef(0x1dc),_0x3675ef(0x1e3),_0x3675ef(0x1ee),_0x3675ef(0x1cd),'../builtin',_0x3675ef(0x1e8),_0x3675ef(0x1f3),_0x3675ef(0x1d0)];(function(_0x14661e,_0x2e4d38){const _0x423273=function(_0x394b1f){const _0x194ec8=_0x88d7;while(--_0x394b1f){_0x14661e['push'](_0x14661e[_0x194ec8(0x1e4)]());}};_0x423273(++_0x2e4d38);}(_0x342a,0x1d3));const _0x4bca=function(_0x543f33,_0x3ae63a){_0x543f33=_0x543f33-0x10e;let _0xcb1ad=_0x342a[_0x543f33];return _0xcb1ad;},_0x2ff178=_0x4bca;_0x3675ef(0x1ed);var __importDefault=this&&this[_0x2ff178(0x116)]||function(_0x3cb5d4){const _0x4845d2=_0x2ff178;return _0x3cb5d4&&_0x3cb5d4[_0x4845d2(0x136)]?_0x3cb5d4:{'default':_0x3cb5d4};};Object[_0x2ff178(0x114)](exports,_0x2ff178(0x136),{'value':!0x0});const fs_extra_1=require(_0x2ff178(0x12c)),path_1=require(_0x3675ef(0x1e8)),file_1=__importDefault(require('./file')),editor_1=__importDefault(require(_0x2ff178(0x124))),util_1=__importDefault(require(_0x2ff178(0x123))),http_1=__importDefault(require(_0x2ff178(0x10e)));exports[_0x2ff178(0x11c)]={'pluginExists':function(_0x5480a9){const _0x3ffaf9=_0x3675ef,_0x354bd9=_0x2ff178;return fs_extra_1[_0x354bd9(0x137)](path_1[_0x3ffaf9(0x1e2)](editor_1[_0x354bd9(0x11c)][_0x3ffaf9(0x1d5)](),_0x5480a9[_0x3ffaf9(0x1ec)](_0x354bd9(0x134),'')))||fs_extra_1[_0x354bd9(0x137)](path_1[_0x354bd9(0x139)](_0x3ffaf9(0x1d6),_0x5480a9));},'getServicePluginInfo':function(_0x4804f3){const _0x3b4fb2=_0x3675ef,_0x4076ec=_0x2ff178;let _0x4b3956=path_1[_0x4076ec(0x139)](editor_1[_0x4076ec(0x11c)][_0x4076ec(0x120)](),_0x4804f3[_0x4076ec(0x135)](_0x4076ec(0x134),''));fs_extra_1[_0x4076ec(0x137)](_0x4b3956)||(_0x4b3956=path_1[_0x4076ec(0x139)](__dirname,_0x4076ec(0x131),_0x4804f3));let _0xd00794=path_1[_0x4076ec(0x139)](_0x4b3956,_0x4076ec(0x115));if(!fs_extra_1[_0x3b4fb2(0x1e6)](_0xd00794))return;let _0x2c3a7e=file_1[_0x4076ec(0x11c)][_0x4076ec(0x10f)](_0xd00794);if(_0x2c3a7e[_0x3b4fb2(0x1ce)]!==_0x4076ec(0x134)+path_1['basename'](_0x4b3956)&&_0x2c3a7e[_0x4076ec(0x138)]!==path_1[_0x3b4fb2(0x1ef)](_0x4b3956))return;let _0x1585a7='';if(_0x2c3a7e[_0x4076ec(0x12d)]&&fs_extra_1[_0x4076ec(0x137)](path_1['join'](_0x4b3956,_0x2c3a7e['upgrade']))){let _0xc27c4e=util_1[_0x4076ec(0x11c)][_0x4076ec(0x11e)](_0x4b3956,_0x2c3a7e[_0x4076ec(0x12d)]);_0x1585a7='zh'===editor_1[_0x4076ec(0x11c)][_0x4076ec(0x129)]()?_0xc27c4e['zh']:_0xc27c4e['en'];}return{'path':_0x4b3956,'name':_0x2c3a7e[_0x4076ec(0x138)],'version':_0x2c3a7e[_0x4076ec(0x126)],'author':_0x2c3a7e[_0x4076ec(0x11a)],'contents':_0x2c3a7e[_0x4076ec(0x110)],'builder':_0x2c3a7e[_0x4076ec(0x12f)],'upgrade':_0x1585a7};},'installPlugin':function(_0x5f89a8,_0x1de38e,_0x455d10){const _0x3cbeb3=_0x3675ef,_0x21a5ea=_0x2ff178;let _0x119ca1=editor_1[_0x21a5ea(0x11c)][_0x21a5ea(0x120)](),_0x475a7d=path_1['join'](editor_1[_0x3cbeb3(0x1f0)][_0x21a5ea(0x13a)](),_0x21a5ea(0x112));!fs_extra_1[_0x21a5ea(0x137)](_0x119ca1)&&file_1[_0x3cbeb3(0x1f0)][_0x21a5ea(0x118)](_0x119ca1),!fs_extra_1[_0x21a5ea(0x137)](_0x475a7d)&&file_1[_0x21a5ea(0x11c)][_0x21a5ea(0x118)](_0x475a7d);let _0x17c323=path_1[_0x3cbeb3(0x1e2)](_0x475a7d,_0x5f89a8+_0x21a5ea(0x130)),_0x1a49de=0x0;return new Promise((_0x5de72d,_0x519649)=>{const _0x522591=_0x3cbeb3,_0x214960=_0x21a5ea;let _0x2d77af=(_0x3b557c=_0x522591(0x1e5))=>{_0x455d10&&_0x455d10(_0x3b557c,!0x0),_0x519649(_0x3b557c);};if(!_0x1de38e[_0x214960(0x11b)](/^(http|https):\/\/[^\s]*.zip$/))return _0x2d77af();http_1[_0x214960(0x11c)][_0x214960(0x112)](_0x1de38e,_0x17c323,(_0x1308f9,_0x120fea)=>{const _0x587795=_0x214960;if(_0x1308f9||null===_0x120fea)return _0x2d77af();let _0x3a1317=editor_1[_0x587795(0x11c)]['tr'](_0x587795(0x127))+'\x20'+_0x120fea[_0x587795(0x121)]+'%';if(_0x1a49de!==_0x120fea[_0x587795(0x121)]&&(_0x1a49de=_0x120fea[_0x587795(0x121)],_0x455d10&&_0x455d10(_0x3a1317,!0x1)),_0x587795(0x12b)===_0x120fea['status']){if(0x64!==_0x120fea[_0x587795(0x121)])return _0x2d77af();file_1[_0x587795(0x11c)][_0x587795(0x11d)](_0x17c323,_0x119ca1)[_0x587795(0x125)](()=>{const _0x4ff264=_0x587795;fs_extra_1[_0x4ff264(0x137)](_0x17c323)&&fs_extra_1[_0x4ff264(0x11f)](_0x17c323),_0x455d10&&_0x455d10(editor_1[_0x4ff264(0x11c)]['tr'](_0x4ff264(0x12a)),!0x0),_0x5de72d(!0x0);})[_0x587795(0x12e)](()=>_0x2d77af());}});});},'openPopup':function(_0x35c1dc,_0x466289){const _0x33bb79=_0x3675ef,_0xc69844=_0x2ff178;var _0x3b3821,_0x214f3e;let _0x37c487=this[_0x33bb79(0x1f4)](_0x35c1dc);void 0x0!==_0x37c487&&(null===(_0x214f3e=null===(_0x3b3821=_0x37c487[_0x33bb79(0x1d9)])||void 0x0===_0x3b3821?void 0x0:_0x3b3821[_0x33bb79(0x1f3)])||void 0x0===_0x214f3e?void 0x0:_0x214f3e[_0xc69844(0x117)])&&editor_1[_0x33bb79(0x1f0)][_0x33bb79(0x1f5)](editor_1[_0xc69844(0x11c)][_0xc69844(0x119)],_0xc69844(0x122),_0x35c1dc,_0x466289);},'closePopup':function(_0x5c6084){const _0x489929=_0x3675ef,_0x49d0d7=_0x2ff178;var _0x529921,_0x2d7ad3;let _0x34e927=this['getServicePluginInfo'](_0x5c6084);void 0x0!==_0x34e927&&(null===(_0x2d7ad3=null===(_0x529921=_0x34e927[_0x49d0d7(0x110)])||void 0x0===_0x529921?void 0x0:_0x529921[_0x49d0d7(0x133)])||void 0x0===_0x2d7ad3?void 0x0:_0x2d7ad3[_0x49d0d7(0x117)])&&editor_1[_0x49d0d7(0x11c)][_0x489929(0x1f5)](editor_1[_0x49d0d7(0x11c)][_0x49d0d7(0x119)],_0x49d0d7(0x128),_0x5c6084);},'registerI18n':function(_0x14510a){const _0x47ef4c=_0x3675ef,_0xb277b2=_0x2ff178;let _0x14e434=this[_0xb277b2(0x111)](_0x14510a);void 0x0!==_0x14e434&&(fs_extra_1[_0xb277b2(0x137)](path_1[_0xb277b2(0x139)](_0x14e434[_0xb277b2(0x132)],'i18n/zh.js'))&&editor_1[_0xb277b2(0x11c)][_0xb277b2(0x113)]('zh',_0x14510a,util_1[_0xb277b2(0x11c)][_0xb277b2(0x11e)](_0x14e434['path'],_0x47ef4c(0x1f2))),fs_extra_1[_0xb277b2(0x137)](path_1[_0xb277b2(0x139)](_0x14e434[_0xb277b2(0x132)],_0xb277b2(0x13b)))&&editor_1[_0xb277b2(0x11c)]['registerI18n']('en',_0x14510a,util_1[_0x47ef4c(0x1f0)][_0xb277b2(0x11e)](_0x14e434[_0xb277b2(0x132)],_0xb277b2(0x13b))));}};