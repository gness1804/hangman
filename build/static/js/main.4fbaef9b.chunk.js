(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(18),r=n.n(c),i=(n(28),n(6)),o=n(4),l=n(2),O=n(10),E=n(13),A=n.n(E),N=n(19),j=n(44),d=(n(30),n(0)),h=function(e){var t=e.word,n=e.successfulLetters;return Object(d.jsx)("div",{className:"word-line",children:t.split("").map((function(e){return n.includes(e)?Object(d.jsx)("div",{className:"word-line-letter",children:e},Object(j.a)()):Object(d.jsx)("div",{children:"__"},Object(j.a)())}))})},u=(n(32),n(20)),I=n(21),R=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6;Object(u.a)(this,e),this.maxWordLength=t,this.word=void 0,this.word=""}return Object(I.a)(e,[{key:"setNewWord",value:function(){var e=this,t="ADORABLE,POUND,FLASH,REFUGEE,CARAVAN,BLEND,GRIN,SPHERE,CREEPY,JIGSAW,JERK,FREAKISH,DOSAGE,EMBRACE,ENTITY,INTERNAL,SECTOR,BACTERIA,AMPUTATION,LAST,REVOLT,COSMIC,BITTER,LADYBUG,EASTERN,CHAIR,ABSTRACTLY,HAPPINESS,BILLION,CLOTH,HOMEMADE,EROTICA,DROPPINGS,RIB,ESSENTIAL,GORGEOUS,GUSHING,NAKED,FLAT,BATTERY,QUANTUM,COASTAL,AUCTION,SOUTHERN,NUDE,ACTOR,FARM,PIN,NUCLEAR,NOBLE,COLLAR,WEB,AMBIGUOUS,BECAME,TEARGAS,SPIRIT,SLAP,DIRECTION,GRIZZLY,PLANTATION,PERVERTED,DISMEMBERMENT,ACCESSORIES,WORLD,CHECKPOINT,EFFECTIVE,COUNTRY,EXTORTION,ARSONIST,DRIFTING,APPARENTLY,WEARABLE,BASE,BEGIN,ONE,PERVERTED,DEXTERITY,ANNUAL,AFTERWARDS,INTRUDER,DISTORTION,COSMICALLY,ABSURD,FOREIGN,CONFLICT,PARALLEL,EAR,GENUINE,FIENDISH,PERFUME,SAND,GLASS,EXCESSIVE,HOLD,INVENTION,ABNORMAL,HEROIC,CARDINAL,FLAMMABLE,SPIDER,FRAUD,CARRION,ANALYST,ACOUSTIC,CHRONOLOGICAL,ACCURACY,PASSENGER,CYNICAL,PROPER,FUEL,ALTERNATE,DOOMSDAY,FLUTTER,AQUARIUM,SERIES,BREATHLESS,WHALES,GOBBLING,EXCLUSIVE,PLAY,ENRAGE,FINALE,ALLIED,SLAP,STALLION,DETACHABLE,BELOW,NORM,CONTINENTAL,DONUT,RESEARCH,DOCTOR,DAUGHTER,PUZZLE,ZOO,GAMBLE,COAT,HOMETOWN,FASHION,MASSACRE,CRICKET,ALARM,DESTRUCTION,DOOMSDAY,CHURCH,BITTER,FINCH,HOBBY,ANXIETY,FRISKY,BARN,AMBIENT,CENTRAL,PUZZLE,GRADE,HECTIC,FERMENT,AGONIZING,ANNUAL,CRAFTY,CARVER,COMPLETE,EVERLASTING,ROTTEN,HAWK,HELMET,DECONTAMINATION,NECROTIC,GALLOPING,THINK,MORTAL,CONDO,COMPANY,EDGE,FROGS,HALF,KEY,MASSIVE,BLOCK,BLOODSUCKER,LOLLIPOP,FLORAL,SAVAGE,SLAVE,FICTIONAL,PROTECT,APE,CONDITION,LEFT,SMART,BITTERSWEET,HITCHHIKER,BASTION,ELEPHANTS,GIANT,DISGUSTING,WARP,FREQUENCY,APPETITE,LOLLIPOP,DRUG,BRUTAL,DIABOLIC,EXCHANGE,DIFFERENT,AEROBATIC,SMART,HAMSTER,ABDUCTED,UNIT,WIFE,SWEET,BLEMISH,EARTHMEN,CODE,BLOODTHIRSTY,ASTOUNDING,BLEEDER,SAINT,ABANDONED,FULLY,GREEDY,LIME,APPALLING,FAT,KANGAROO,EAT,BADLANDS,HEAVYWEIGHT,AFTERWARDS,CARROT,DADDY,SHOCK,GOLD,MACHINE,CANNON,APRICOT,ANTICLIMACTIC,PROBE,GANG,PROTEST,BURIAL,FACADE,FRINGE,AMPUTATION,APPEAL,SERIES,UGLY,HOLLOWNESS,CLUB,GLIMMER,HORIZONTAL,PITCH,EVIL,FINAL,POISONOUS,BARBARIAN,PAPER,LUCKY,LADYBUG,DAMN,CYANIDE,HUSTLE,PROGRAM,BIRTHPLACE,BELLYBUTTON,EMPOWERMENT,ARCHITECT,APPETITE,EASIER,DELICATESSEN,AMERICANA,SKYLINE,GLAND,PLANET,FALLS,PERIODIC,FAITHLESS,CONVERTIBLE,CARESS,BOARDER,DRUNK,FORGIVEN,CARBON,WILD,DEBAUCHERY,DART,CEREMONY,FAITH,KING,SWOLLEN,HIDEOUS,CARNAL,CADAVER,RERUN,PIPES,DESTINY,GOODBYE,AMPLITUDE,BANK".split(",").filter((function(t){return t.length<=e.maxWordLength})).map((function(e){return e.toLowerCase()})),n=Math.floor(Math.random()*(t.length-0+1)+0);this.word=t[n]}}]),e}(),T=function(e){var t=e.word,n=e.setWord,a=e.totalGuesses,c=e.maxWordLength,r=Object(s.useState)(!1),E=Object(i.a)(r,2),u=E[0],I=E[1],T=Object(s.useState)(""),L=Object(i.a)(T,2),b=L[0],S=L[1],m=Object(s.useState)([]),C=Object(i.a)(m,2),x=C[0],g=C[1],p=Object(s.useState)([]),f=Object(i.a)(p,2),D=f[0],G=f[1],P=Object(l.f)();Object(s.useEffect)((function(){return v(),function(){G([]),g([])}}),[]),Object(s.useEffect)((function(){U()}));var v=function(){var e=Object(N.a)(A.a.mark((function e(){var t,s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I(!1),!1,e.next=7;break;case 7:e.prev=7,(t=new R(c)).setNewWord(),s=t.word,n(s.toLowerCase()),G([]),g([]),e.next=20;break;case 16:return e.prev=16,e.t0=e.catch(7),I(!0),e.abrupt("return",void 0);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(){return e.apply(this,arguments)}}(),B=function(){if(!b||!b.match(/[a-zA-Z]/))return alert("Error: you must enter a letter."),void S("");t.includes(b)?g((function(e){return[].concat(Object(O.a)(e),[b.toLowerCase()])})):D.includes(b)?(alert("Oops! You have already guessed this letter. Please try again."),S("")):G((function(e){return[].concat(Object(O.a)(e),[b.toLowerCase()])})),S("")},U=function(){var e,n,s=new Set(Object(O.a)(t.split("")));D.length>=a?P.push("defeat"):x.length>0&&(e=x,n=Array.from(s),Array.isArray(e)&&Array.isArray(n)&&e.length===n.length&&e.every((function(e){return n.includes(e)})))&&P.push("/victory")};return u?Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("h2",{className:"error",children:"Something went wrong fetching your word! Please try again later."}),Object(d.jsx)("button",{className:"utility-button",onClick:function(){P.push("/")},children:"Try Again"})]}):Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(h,{word:t,successfulLetters:x}),Object(d.jsxs)("div",{className:"main-container",children:[Object(d.jsxs)("div",{className:"main-top-items-container dark",children:[Object(d.jsxs)("h2",{className:"main-total-guesses",children:["You have ",a-D.length," guesses left."]}),Object(d.jsxs)("div",{className:"main-inputs-container",children:[Object(d.jsx)("label",{htmlFor:"letterInput",className:"main-inputs-container-label main-central-part-label",children:"Enter a letter:"}),Object(d.jsx)("input",{id:"letterInput",type:"text",className:"main-inputs-container-input-field",size:1,minLength:1,maxLength:1,onChange:function(e){return S(e.target.value.toLowerCase())},onKeyDown:function(e){return function(e){"Enter"===e.key&&B()}(e)},value:b}),Object(d.jsx)("button",{onClick:B,className:"main-inputs-container-verify-button utility-button",children:"Verify Letter"})]}),Object(d.jsxs)("div",{className:"main-failed-letters-container",children:[Object(d.jsx)("p",{className:"main-central-part-label main-failed-letters-label",children:"Failed Letters:"}),D.length?Object(d.jsx)("div",{className:"main-failed-letters-list",children:D.sort().map((function(e){return Object(d.jsx)("div",{className:"main-failed-letter",children:e},Object(j.a)())}))}):Object(d.jsx)("p",{children:"None yet! Let's go for the win!"})]})]}),Object(d.jsxs)("div",{className:"main-bottom-items-container light",children:[Object(d.jsx)("button",{onClick:v,className:"main-new-word-button utility-button",children:"New Word"}),Object(d.jsx)(o.b,{className:"main-options-link",to:"/options",children:"Options"}),Object(d.jsx)("p",{className:"main-reset-warning",children:"(Going here will reset the word and your guesses.)"})]})]})]})},L=(n(38),function(){return Object(d.jsxs)("div",{className:"victory dark",children:[Object(d.jsx)("h2",{className:"victory-heading",children:"You Win!"}),Object(d.jsx)("p",{className:"victory-play-again-message",children:"Play again!"}),Object(d.jsx)(o.b,{className:"victory-back-home-link",to:"/",children:"New Game"})]})}),b=(n(39),function(e){var t=e.word,n=Object(l.f)();return Object(s.useEffect)((function(){t||setTimeout((function(){n.push("/")}),3e3)}),[]),Object(d.jsxs)("div",{className:"defeat dark",children:[Object(d.jsx)("h2",{className:"defeat-heading",children:t?"You Lose!":"No word! Redirecting back home."}),t&&Object(d.jsxs)("p",{className:"defeat-word-display",children:["The word was: ",Object(d.jsx)("em",{children:t}),"."]}),Object(d.jsx)(o.b,{to:"/",children:t?"New Game":"Back Home"})]})}),S=(n(40),function(e){var t=e.totalGuesses,n=e.setTotalGuesses,s=e.maxWordLength,a=e.setMaxWordLength,c=e.restoreDefaults;return Object(d.jsxs)("div",{className:"options dark",children:[Object(d.jsx)("h2",{className:"options-heading",children:"Set Options"}),Object(d.jsxs)("div",{className:"options-total-guesses-container",children:[Object(d.jsx)("label",{htmlFor:"totalGuesses",className:"options-total-guesses-label",children:"Total Guesses"}),Object(d.jsxs)("select",{id:"totalGuesses",value:t,onChange:function(e){return t=+e.target.value,sessionStorage.setItem("hangman-total-guesses",t.toString()),void n(t);var t},children:[Object(d.jsx)("option",{children:"1"}),Object(d.jsx)("option",{children:"2"}),Object(d.jsx)("option",{children:"3"}),Object(d.jsx)("option",{children:"4"}),Object(d.jsx)("option",{children:"5"}),Object(d.jsx)("option",{children:"6"}),Object(d.jsx)("option",{children:"7"}),Object(d.jsx)("option",{children:"8"})]})]}),Object(d.jsxs)("div",{className:"options-max-word-length-container",children:[Object(d.jsx)("label",{htmlFor:"maxWordLength",className:"options-max-word-length-label",children:"Max Word Length:"}),Object(d.jsxs)("select",{id:"maxWordLength",value:s,onChange:function(e){return t=+e.target.value,sessionStorage.setItem("hangman-max-word-length",t.toString()),void a(t);var t},children:[Object(d.jsx)("option",{children:"3"}),Object(d.jsx)("option",{children:"4"}),Object(d.jsx)("option",{children:"5"}),Object(d.jsx)("option",{children:"6"}),Object(d.jsx)("option",{children:"7"}),Object(d.jsx)("option",{children:"8"})]})]}),Object(d.jsx)("button",{className:"utility-button",onClick:c,children:"Restore Defaults"}),Object(d.jsx)(o.b,{className:"options-back-home-link",to:"/",children:"Back to Game"})]})}),m=(n(41),function(){var e=Object(l.g)();return Object(d.jsxs)("div",{className:"nope dark",children:[Object(d.jsx)("h2",{className:"nope-heading",children:"Page Not Found!"}),Object(d.jsxs)("p",{children:["Oops! We could not find the page at ",Object(d.jsx)("code",{children:e.pathname}),". Please try again."]}),Object(d.jsx)(o.b,{className:"nope-back-home-link",to:"/",children:"Back to Game"})]})});n(42);var C=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(6),r=Object(i.a)(c,2),O=r[0],E=r[1],A=Object(s.useState)(6),N=Object(i.a)(A,2),j=N[0],h=N[1],u=function(){var e=sessionStorage.getItem("hangman-total-guesses");if(e)return parseInt(e)},I=function(){var e=sessionStorage.getItem("hangman-max-word-length");if(e)return parseInt(e)};return Object(d.jsx)(o.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)("h1",{children:"Hangman!"})}),Object(d.jsx)("div",{className:"core-component",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/victory",children:Object(d.jsx)(L,{})}),Object(d.jsx)(l.a,{path:"/defeat",children:Object(d.jsx)(b,{word:n})}),Object(d.jsx)(l.a,{path:"/options",children:Object(d.jsx)(S,{totalGuesses:u()||j,setTotalGuesses:h,maxWordLength:I()||O,setMaxWordLength:E,restoreDefaults:function(){sessionStorage.setItem("hangman-max-word-length","6"),E(6),sessionStorage.setItem("hangman-total-guesses","6"),h(6),window.location.reload()}})}),Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(T,{word:n,setWord:a,totalGuesses:u()||j,maxWordLength:I()||O})}),Object(d.jsx)(l.a,{path:"*",children:Object(d.jsx)(m,{})})]})})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),x()}},[[43,1,2]]]);
//# sourceMappingURL=main.4fbaef9b.chunk.js.map