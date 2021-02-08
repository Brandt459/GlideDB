(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(22),o=n.n(c),r=n(5),s=n(6),l=n(4),j=n(8),d=n(7),u=n(11),h=(n(29),n.p+"static/media/logo.1fa2abd9.png"),b=n(0),p=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={username:null,loggedIn:!!localStorage.getItem("token")},e.handleLogout=e.handleLogout.bind(Object(l.a)(e)),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.state.loggedIn&&this.setState({username:localStorage.getItem("user")})}},{key:"handleLogout",value:function(){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("userId"),this.setState({loggedIn:!1,username:null}),window.location.reload(!1)}},{key:"render",value:function(){var e=this.state.username;return Object(b.jsxs)("nav",{children:[Object(b.jsx)(u.b,{to:"/",children:Object(b.jsx)("img",{className:"logo",src:h,alt:"glide minigame logo"})}),Object(b.jsx)("label",{for:"toggle",id:"toggle-label",children:"\u2630"}),Object(b.jsx)("input",{type:"checkbox",id:"toggle"}),e?Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"li",children:e}),Object(b.jsx)(u.b,{className:"li",to:"/world-records",children:Object(b.jsx)("li",{children:"World Records"})}),Object(b.jsx)(u.b,{className:"li",to:"/submit-record",children:Object(b.jsx)("li",{children:"Submit Record"})}),Object(b.jsx)(u.b,{className:"li",children:Object(b.jsx)("li",{onClick:this.handleLogout,children:"Log out"})})]}):Object(b.jsxs)("ul",{children:[Object(b.jsx)(u.b,{className:"li",to:"/world-records",children:Object(b.jsx)("li",{children:"World Records"})}),Object(b.jsx)(u.b,{className:"li",to:"/register",children:Object(b.jsx)("li",{children:"Register"})}),Object(b.jsx)(u.b,{className:"li",to:"/login",children:Object(b.jsx)("li",{children:"Log in"})})]})]})}}]),n}(i.a.Component),O=n.p+"static/media/cavern.f5d37c39.png",x=n.p+"static/media/kraken.33b7c9e9.png",v=n.p+"static/media/yeti.e3cff756.png",m=n.p+"static/media/dragon.faf8cb50.png",g=n.p+"static/media/temple.7b4ebc08.png",S=n.p+"static/media/shrunk.e9380f88.png",f=n.p+"static/media/mobs.35ece985.png",y=n.p+"static/media/body.c12e88f4.png",C=n.p+"static/media/canyon.f613c8eb.png",I=n.p+"static/media/excalibur.b75499ea.png",N=n.p+"static/media/icarus.17be8ca8.png",M=n.p+"static/media/celts.cde4b0a7.png",k=(n(36),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this)).state={rows:[],data:[],resultsStartIndex:0,resultsEndIndex:10,resultsPerRender:10},a.getRows=a.getRows.bind(Object(l.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/map/".concat(this.props.map,"/")).then((function(e){return e.json()})).then((function(t){e.getRows(t),e.setState({data:t})}))}},{key:"getRows",value:function(e){this.setState((function(t){return{rows:t.rows.concat(e.slice(t.resultsStartIndex,t.resultsEndIndex)),resultsStartIndex:t.resultsStartIndex+t.resultsPerRender,resultsEndIndex:t.resultsEndIndex+t.resultsPerRender}}))}},{key:"render",value:function(){var e=this,t=this.state.rows,n=this.props.map,a=this.state.data;return Object(b.jsxs)("div",{className:"leaderboard",children:[t.map((function(e,t){if(e[n])return Object(b.jsxs)("div",{className:"row ".concat(e.username===localStorage.getItem("user")?"row-active":""),children:[Object(b.jsx)("p",{className:"rank",children:t+1}),e.country&&Object(b.jsx)("div",{className:"country-container-grid-element",children:Object(b.jsx)("div",{className:"country-container",children:Object(b.jsx)("img",{className:"country",src:"https://www.countryflags.io/".concat(e.country,"/shiny/24.png")})})}),Object(b.jsx)("p",{className:"player",children:e.username}),Object(b.jsx)("p",{className:"time",children:e[n]})]})})),!(t.length===a.length)&&Object(b.jsx)("button",{className:"load-times",onClick:function(){return e.getRows(a)},children:Object(b.jsx)("i",{class:"arrow-down"})})]})}}]),n}(a.Component)),T=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this)).state={images:{cavern:O,kraken:x,yeti:v,dragon:m,temple:g,shrunk:S,mobs:f,body:y,canyon:C,excalibur:I,icarus:N,celts:M}},a.getWorldRecords=a.getWorldRecords.bind(Object(l.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.props.worldrecord&&this.getWorldRecords()}},{key:"getWorldRecords",value:function(){var e=this;fetch("/api/world-records/".concat(this.props.map)).then((function(e){return e.json()})).then((function(t){return e.setState({worldRecord:t[0]})}))}},{key:"render",value:function(){var e=this.props.map,t=this.state.images,n=this.state.worldRecord;try{return Object(b.jsx)("div",{className:"map-container-grid-element",id:e,children:Object(b.jsx)("div",{className:"map-container",children:Object(b.jsxs)("div",{className:"map",children:[Object(b.jsx)("div",{className:"map-image-container",children:Object(b.jsx)("img",{className:"map-image",src:t[e],alt:"".concat(e," image")})}),Object(b.jsx)("h1",{className:"map-name",children:e.charAt(0).toUpperCase()+e.slice(1)}),this.props.props.leaderboard&&Object(b.jsx)(k,{map:e}),this.props.props.worldrecord&&Object(b.jsx)("p",{className:"world-record-video-container",children:Object(b.jsx)("iframe",{className:"world-record-video",src:n.video})})]})})})}catch(a){return Object(b.jsx)("h1",{children:"Loading..."})}}}]),n}(a.Component);n(37);function w(e){return Object(b.jsxs)("div",{className:"maps",children:[Object(b.jsx)(T,{map:"cavern",props:e}),Object(b.jsx)(T,{map:"kraken",props:e}),Object(b.jsx)(T,{map:"yeti",props:e}),Object(b.jsx)(T,{map:"dragon",props:e}),Object(b.jsx)(T,{map:"temple",props:e}),Object(b.jsx)(T,{map:"shrunk",props:e}),Object(b.jsx)(T,{map:"mobs",props:e}),Object(b.jsx)(T,{map:"body",props:e}),Object(b.jsx)(T,{map:"canyon",props:e}),Object(b.jsx)(T,{map:"excalibur",props:e}),Object(b.jsx)(T,{map:"icarus",props:e}),Object(b.jsx)(T,{map:"celts",props:e})]})}n(38);function G(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsx)(w,{leaderboard:!0})]})}var B=n(14),R=n(2),A=n(24),E=(n(21),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={username:null,password:null,country:null,redirect:!1,error:!1},e.handleSubmit=e.handleSubmit.bind(Object(l.a)(e)),e.handleChange=e.handleChange.bind(Object(l.a)(e)),e}return Object(s.a)(n,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.state.username?this.state.password?this.state.country?fetch("/api/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})}).then((function(e){return e.json()})).then((function(e){e.token?(localStorage.setItem("token",e.token),localStorage.setItem("user",Object(A.a)(e.token).username),fetch("/api/user_id/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:localStorage.getItem("user")})}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("userId",e),fetch("/api/create_player/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:localStorage.getItem("userId"),username:localStorage.getItem("user"),country:t.state.country})})})),t.setState({redirect:!0})):t.setState({error:"Username already exists"})})):this.setState({error:"Select a country"}):this.setState({error:"Enter a password"}):this.setState({error:"Enter a username"})}},{key:"handleChange",value:function(e){e.preventDefault(),this.setState(Object(B.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return this.state.redirect?Object(b.jsx)(R.a,{to:"/"}):Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsxs)("div",{className:"register-container",children:[Object(b.jsx)("h1",{children:"REGISTER"}),this.state.error&&Object(b.jsx)("h2",{className:"register-error",children:this.state.error}),Object(b.jsx)("div",{className:"form-container",children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:"register-form",children:[Object(b.jsx)("input",{type:"text",name:"username",onChange:this.handleChange,placeholder:"Username"}),Object(b.jsx)("input",{type:"password",name:"password",onChange:this.handleChange,placeholder:"Password"}),Object(b.jsxs)("select",{className:"register-form-country",value:"",onChange:this.handleChange,name:"country",id:"country",children:[Object(b.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Country"}),Object(b.jsx)("option",{value:"AF",children:"Afghanistan"}),Object(b.jsx)("option",{value:"AX",children:"\xc5land Islands"}),Object(b.jsx)("option",{value:"AL",children:"Albania"}),Object(b.jsx)("option",{value:"DZ",children:"Algeria"}),Object(b.jsx)("option",{value:"AS",children:"American Samoa"}),Object(b.jsx)("option",{value:"AD",children:"Andorra"}),Object(b.jsx)("option",{value:"AO",children:"Angola"}),Object(b.jsx)("option",{value:"AI",children:"Anguilla"}),Object(b.jsx)("option",{value:"AQ",children:"Antarctica"}),Object(b.jsx)("option",{value:"AG",children:"Antigua and Barbuda"}),Object(b.jsx)("option",{value:"AR",children:"Argentina"}),Object(b.jsx)("option",{value:"AM",children:"Armenia"}),Object(b.jsx)("option",{value:"AW",children:"Aruba"}),Object(b.jsx)("option",{value:"AU",children:"Australia"}),Object(b.jsx)("option",{value:"AT",children:"Austria"}),Object(b.jsx)("option",{value:"AZ",children:"Azerbaijan"}),Object(b.jsx)("option",{value:"BS",children:"Bahamas"}),Object(b.jsx)("option",{value:"BH",children:"Bahrain"}),Object(b.jsx)("option",{value:"BD",children:"Bangladesh"}),Object(b.jsx)("option",{value:"BB",children:"Barbados"}),Object(b.jsx)("option",{value:"BY",children:"Belarus"}),Object(b.jsx)("option",{value:"BE",children:"Belgium"}),Object(b.jsx)("option",{value:"BZ",children:"Belize"}),Object(b.jsx)("option",{value:"BJ",children:"Benin"}),Object(b.jsx)("option",{value:"BM",children:"Bermuda"}),Object(b.jsx)("option",{value:"BT",children:"Bhutan"}),Object(b.jsx)("option",{value:"BO",children:"Bolivia"}),Object(b.jsx)("option",{value:"BQ",children:"Bonaire, Sint Eustatius and Saba"}),Object(b.jsx)("option",{value:"BA",children:"Bosnia and Herzegovina"}),Object(b.jsx)("option",{value:"BW",children:"Botswana"}),Object(b.jsx)("option",{value:"BV",children:"Bouvet Island"}),Object(b.jsx)("option",{value:"BR",children:"Brazil"}),Object(b.jsx)("option",{value:"IO",children:"British Indian Ocean Territory"}),Object(b.jsx)("option",{value:"BN",children:"Brunei"}),Object(b.jsx)("option",{value:"BG",children:"Bulgaria"}),Object(b.jsx)("option",{value:"BF",children:"Burkina Faso"}),Object(b.jsx)("option",{value:"BI",children:"Burundi"}),Object(b.jsx)("option",{value:"CV",children:"Cabo Verde"}),Object(b.jsx)("option",{value:"KH",children:"Cambodia"}),Object(b.jsx)("option",{value:"CM",children:"Cameroon"}),Object(b.jsx)("option",{value:"CA",children:"Canada"}),Object(b.jsx)("option",{value:"KY",children:"Cayman Islands"}),Object(b.jsx)("option",{value:"CF",children:"Central African Republic"}),Object(b.jsx)("option",{value:"TD",children:"Chad"}),Object(b.jsx)("option",{value:"CL",children:"Chile"}),Object(b.jsx)("option",{value:"CN",children:"China"}),Object(b.jsx)("option",{value:"CX",children:"Christmas Island"}),Object(b.jsx)("option",{value:"CC",children:"Cocos (Keeling) Islands"}),Object(b.jsx)("option",{value:"CO",children:"Colombia"}),Object(b.jsx)("option",{value:"KM",children:"Comoros"}),Object(b.jsx)("option",{value:"CG",children:"Congo"}),Object(b.jsx)("option",{value:"CD",children:"Congo (the Democratic Republic of the)"}),Object(b.jsx)("option",{value:"CK",children:"Cook Islands"}),Object(b.jsx)("option",{value:"CR",children:"Costa Rica"}),Object(b.jsx)("option",{value:"CI",children:"C\xf4te d'Ivoire"}),Object(b.jsx)("option",{value:"HR",children:"Croatia"}),Object(b.jsx)("option",{value:"CU",children:"Cuba"}),Object(b.jsx)("option",{value:"CW",children:"Cura\xe7ao"}),Object(b.jsx)("option",{value:"CY",children:"Cyprus"}),Object(b.jsx)("option",{value:"CZ",children:"Czechia"}),Object(b.jsx)("option",{value:"DK",children:"Denmark"}),Object(b.jsx)("option",{value:"DJ",children:"Djibouti"}),Object(b.jsx)("option",{value:"DM",children:"Dominica"}),Object(b.jsx)("option",{value:"DO",children:"Dominican Republic"}),Object(b.jsx)("option",{value:"EC",children:"Ecuador"}),Object(b.jsx)("option",{value:"EG",children:"Egypt"}),Object(b.jsx)("option",{value:"SV",children:"El Salvador"}),Object(b.jsx)("option",{value:"GQ",children:"Equatorial Guinea"}),Object(b.jsx)("option",{value:"ER",children:"Eritrea"}),Object(b.jsx)("option",{value:"EE",children:"Estonia"}),Object(b.jsx)("option",{value:"SZ",children:"Eswatini"}),Object(b.jsx)("option",{value:"ET",children:"Ethiopia"}),Object(b.jsx)("option",{value:"FK",children:"Falkland Islands (Malvinas)"}),Object(b.jsx)("option",{value:"FO",children:"Faroe Islands"}),Object(b.jsx)("option",{value:"FJ",children:"Fiji"}),Object(b.jsx)("option",{value:"FI",children:"Finland"}),Object(b.jsx)("option",{value:"FR",children:"France"}),Object(b.jsx)("option",{value:"GF",children:"French Guiana"}),Object(b.jsx)("option",{value:"PF",children:"French Polynesia"}),Object(b.jsx)("option",{value:"TF",children:"French Southern Territories"}),Object(b.jsx)("option",{value:"GA",children:"Gabon"}),Object(b.jsx)("option",{value:"GM",children:"Gambia"}),Object(b.jsx)("option",{value:"GE",children:"Georgia"}),Object(b.jsx)("option",{value:"DE",children:"Germany"}),Object(b.jsx)("option",{value:"GH",children:"Ghana"}),Object(b.jsx)("option",{value:"GI",children:"Gibraltar"}),Object(b.jsx)("option",{value:"GR",children:"Greece"}),Object(b.jsx)("option",{value:"GL",children:"Greenland"}),Object(b.jsx)("option",{value:"GD",children:"Grenada"}),Object(b.jsx)("option",{value:"GP",children:"Guadeloupe"}),Object(b.jsx)("option",{value:"GU",children:"Guam"}),Object(b.jsx)("option",{value:"GT",children:"Guatemala"}),Object(b.jsx)("option",{value:"GG",children:"Guernsey"}),Object(b.jsx)("option",{value:"GN",children:"Guinea"}),Object(b.jsx)("option",{value:"GW",children:"Guinea-Bissau"}),Object(b.jsx)("option",{value:"GY",children:"Guyana"}),Object(b.jsx)("option",{value:"HT",children:"Haiti"}),Object(b.jsx)("option",{value:"HM",children:"Heard Island and McDonald Islands"}),Object(b.jsx)("option",{value:"VA",children:"Holy See"}),Object(b.jsx)("option",{value:"HN",children:"Honduras"}),Object(b.jsx)("option",{value:"HK",children:"Hong Kong"}),Object(b.jsx)("option",{value:"HU",children:"Hungary"}),Object(b.jsx)("option",{value:"IS",children:"Iceland"}),Object(b.jsx)("option",{value:"IN",children:"India"}),Object(b.jsx)("option",{value:"ID",children:"Indonesia"}),Object(b.jsx)("option",{value:"IR",children:"Iran"}),Object(b.jsx)("option",{value:"IQ",children:"Iraq"}),Object(b.jsx)("option",{value:"IE",children:"Ireland"}),Object(b.jsx)("option",{value:"IM",children:"Isle of Man"}),Object(b.jsx)("option",{value:"IL",children:"Israel"}),Object(b.jsx)("option",{value:"IT",children:"Italy"}),Object(b.jsx)("option",{value:"JM",children:"Jamaica"}),Object(b.jsx)("option",{value:"JP",children:"Japan"}),Object(b.jsx)("option",{value:"JE",children:"Jersey"}),Object(b.jsx)("option",{value:"JO",children:"Jordan"}),Object(b.jsx)("option",{value:"KZ",children:"Kazakhstan"}),Object(b.jsx)("option",{value:"KE",children:"Kenya"}),Object(b.jsx)("option",{value:"KI",children:"Kiribati"}),Object(b.jsx)("option",{value:"KW",children:"Kuwait"}),Object(b.jsx)("option",{value:"KG",children:"Kyrgyzstan"}),Object(b.jsx)("option",{value:"LA",children:"Laos"}),Object(b.jsx)("option",{value:"LV",children:"Latvia"}),Object(b.jsx)("option",{value:"LB",children:"Lebanon"}),Object(b.jsx)("option",{value:"LS",children:"Lesotho"}),Object(b.jsx)("option",{value:"LR",children:"Liberia"}),Object(b.jsx)("option",{value:"LY",children:"Libya"}),Object(b.jsx)("option",{value:"LI",children:"Liechtenstein"}),Object(b.jsx)("option",{value:"LT",children:"Lithuania"}),Object(b.jsx)("option",{value:"LU",children:"Luxembourg"}),Object(b.jsx)("option",{value:"MO",children:"Macao"}),Object(b.jsx)("option",{value:"MG",children:"Madagascar"}),Object(b.jsx)("option",{value:"MW",children:"Malawi"}),Object(b.jsx)("option",{value:"MY",children:"Malaysia"}),Object(b.jsx)("option",{value:"MV",children:"Maldives"}),Object(b.jsx)("option",{value:"ML",children:"Mali"}),Object(b.jsx)("option",{value:"MT",children:"Malta"}),Object(b.jsx)("option",{value:"MH",children:"Marshall Islands"}),Object(b.jsx)("option",{value:"MQ",children:"Martinique"}),Object(b.jsx)("option",{value:"MR",children:"Mauritania"}),Object(b.jsx)("option",{value:"MU",children:"Mauritius"}),Object(b.jsx)("option",{value:"YT",children:"Mayotte"}),Object(b.jsx)("option",{value:"MX",children:"Mexico"}),Object(b.jsx)("option",{value:"FM",children:"Micronesia (Federated States of)"}),Object(b.jsx)("option",{value:"MD",children:"Moldova"}),Object(b.jsx)("option",{value:"MC",children:"Monaco"}),Object(b.jsx)("option",{value:"MN",children:"Mongolia"}),Object(b.jsx)("option",{value:"ME",children:"Montenegro"}),Object(b.jsx)("option",{value:"MS",children:"Montserrat"}),Object(b.jsx)("option",{value:"MA",children:"Morocco"}),Object(b.jsx)("option",{value:"MZ",children:"Mozambique"}),Object(b.jsx)("option",{value:"MM",children:"Myanmar"}),Object(b.jsx)("option",{value:"NA",children:"Namibia"}),Object(b.jsx)("option",{value:"NR",children:"Nauru"}),Object(b.jsx)("option",{value:"NP",children:"Nepal"}),Object(b.jsx)("option",{value:"NL",children:"Netherlands"}),Object(b.jsx)("option",{value:"NC",children:"New Caledonia"}),Object(b.jsx)("option",{value:"NZ",children:"New Zealand"}),Object(b.jsx)("option",{value:"NI",children:"Nicaragua"}),Object(b.jsx)("option",{value:"NE",children:"Niger"}),Object(b.jsx)("option",{value:"NG",children:"Nigeria"}),Object(b.jsx)("option",{value:"NU",children:"Niue"}),Object(b.jsx)("option",{value:"NF",children:"Norfolk Island"}),Object(b.jsx)("option",{value:"KP",children:"North Korea"}),Object(b.jsx)("option",{value:"MK",children:"North Macedonia"}),Object(b.jsx)("option",{value:"MP",children:"Northern Mariana Islands"}),Object(b.jsx)("option",{value:"NO",children:"Norway"}),Object(b.jsx)("option",{value:"OM",children:"Oman"}),Object(b.jsx)("option",{value:"PK",children:"Pakistan"}),Object(b.jsx)("option",{value:"PW",children:"Palau"}),Object(b.jsx)("option",{value:"PS",children:"Palestine, State of"}),Object(b.jsx)("option",{value:"PA",children:"Panama"}),Object(b.jsx)("option",{value:"PG",children:"Papua New Guinea"}),Object(b.jsx)("option",{value:"PY",children:"Paraguay"}),Object(b.jsx)("option",{value:"PE",children:"Peru"}),Object(b.jsx)("option",{value:"PH",children:"Philippines"}),Object(b.jsx)("option",{value:"PN",children:"Pitcairn"}),Object(b.jsx)("option",{value:"PL",children:"Poland"}),Object(b.jsx)("option",{value:"PT",children:"Portugal"}),Object(b.jsx)("option",{value:"PR",children:"Puerto Rico"}),Object(b.jsx)("option",{value:"QA",children:"Qatar"}),Object(b.jsx)("option",{value:"RE",children:"R\xe9union"}),Object(b.jsx)("option",{value:"RO",children:"Romania"}),Object(b.jsx)("option",{value:"RU",children:"Russia"}),Object(b.jsx)("option",{value:"RW",children:"Rwanda"}),Object(b.jsx)("option",{value:"BL",children:"Saint Barth\xe9lemy"}),Object(b.jsx)("option",{value:"SH",children:"Saint Helena, Ascension and Tristan da Cunha"}),Object(b.jsx)("option",{value:"KN",children:"Saint Kitts and Nevis"}),Object(b.jsx)("option",{value:"LC",children:"Saint Lucia"}),Object(b.jsx)("option",{value:"MF",children:"Saint Martin (French part)"}),Object(b.jsx)("option",{value:"PM",children:"Saint Pierre and Miquelon"}),Object(b.jsx)("option",{value:"VC",children:"Saint Vincent and the Grenadines"}),Object(b.jsx)("option",{value:"WS",children:"Samoa"}),Object(b.jsx)("option",{value:"SM",children:"San Marino"}),Object(b.jsx)("option",{value:"ST",children:"Sao Tome and Principe"}),Object(b.jsx)("option",{value:"SA",children:"Saudi Arabia"}),Object(b.jsx)("option",{value:"SN",children:"Senegal"}),Object(b.jsx)("option",{value:"RS",children:"Serbia"}),Object(b.jsx)("option",{value:"SC",children:"Seychelles"}),Object(b.jsx)("option",{value:"SL",children:"Sierra Leone"}),Object(b.jsx)("option",{value:"SG",children:"Singapore"}),Object(b.jsx)("option",{value:"SX",children:"Sint Maarten (Dutch part)"}),Object(b.jsx)("option",{value:"SK",children:"Slovakia"}),Object(b.jsx)("option",{value:"SI",children:"Slovenia"}),Object(b.jsx)("option",{value:"SB",children:"Solomon Islands"}),Object(b.jsx)("option",{value:"SO",children:"Somalia"}),Object(b.jsx)("option",{value:"ZA",children:"South Africa"}),Object(b.jsx)("option",{value:"GS",children:"South Georgia and the South Sandwich Islands"}),Object(b.jsx)("option",{value:"KR",children:"South Korea"}),Object(b.jsx)("option",{value:"SS",children:"South Sudan"}),Object(b.jsx)("option",{value:"ES",children:"Spain"}),Object(b.jsx)("option",{value:"LK",children:"Sri Lanka"}),Object(b.jsx)("option",{value:"SD",children:"Sudan"}),Object(b.jsx)("option",{value:"SR",children:"Suriname"}),Object(b.jsx)("option",{value:"SJ",children:"Svalbard and Jan Mayen"}),Object(b.jsx)("option",{value:"SE",children:"Sweden"}),Object(b.jsx)("option",{value:"CH",children:"Switzerland"}),Object(b.jsx)("option",{value:"SY",children:"Syria"}),Object(b.jsx)("option",{value:"TW",children:"Taiwan"}),Object(b.jsx)("option",{value:"TJ",children:"Tajikistan"}),Object(b.jsx)("option",{value:"TZ",children:"Tanzania"}),Object(b.jsx)("option",{value:"TH",children:"Thailand"}),Object(b.jsx)("option",{value:"TL",children:"Timor-Leste"}),Object(b.jsx)("option",{value:"TG",children:"Togo"}),Object(b.jsx)("option",{value:"TK",children:"Tokelau"}),Object(b.jsx)("option",{value:"TO",children:"Tonga"}),Object(b.jsx)("option",{value:"TT",children:"Trinidad and Tobago"}),Object(b.jsx)("option",{value:"TN",children:"Tunisia"}),Object(b.jsx)("option",{value:"TR",children:"Turkey"}),Object(b.jsx)("option",{value:"TM",children:"Turkmenistan"}),Object(b.jsx)("option",{value:"TC",children:"Turks and Caicos Islands"}),Object(b.jsx)("option",{value:"TV",children:"Tuvalu"}),Object(b.jsx)("option",{value:"UG",children:"Uganda"}),Object(b.jsx)("option",{value:"UA",children:"Ukraine"}),Object(b.jsx)("option",{value:"AE",children:"United Arab Emirates"}),Object(b.jsx)("option",{value:"GB",children:"United Kingdom"}),Object(b.jsx)("option",{value:"UM",children:"United States Minor Outlying Islands"}),Object(b.jsx)("option",{value:"US",children:"United States of America"}),Object(b.jsx)("option",{value:"UY",children:"Uruguay"}),Object(b.jsx)("option",{value:"UZ",children:"Uzbekistan"}),Object(b.jsx)("option",{value:"VU",children:"Vanuatu"}),Object(b.jsx)("option",{value:"VE",children:"Venezuela"}),Object(b.jsx)("option",{value:"VN",children:"Vietnam"}),Object(b.jsx)("option",{value:"VG",children:"Virgin Islands (British)"}),Object(b.jsx)("option",{value:"VI",children:"Virgin Islands (U.S.)"}),Object(b.jsx)("option",{value:"WF",children:"Wallis and Futuna"}),Object(b.jsx)("option",{value:"EH",children:"Western Sahara"}),Object(b.jsx)("option",{value:"YE",children:"Yemen"}),Object(b.jsx)("option",{value:"ZM",children:"Zambia"}),Object(b.jsx)("option",{value:"ZW",children:"Zimbabwe"})]}),Object(b.jsx)("div",{className:"register-form-submit",children:Object(b.jsx)("input",{type:"submit",value:"REGISTER"})})]})})]})]})}}]),n}(i.a.Component)),P=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={username:null,password:null,loggedin:!1,error:!1},e.handleSubmit=e.handleSubmit.bind(Object(l.a)(e)),e.handleChange=e.handleChange.bind(Object(l.a)(e)),e}return Object(s.a)(n,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.state.username?this.state.password?fetch("/api/token-auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})}).then((function(e){return e.json()})).then((function(e){try{e.user.username&&(localStorage.setItem("token",e.token),localStorage.setItem("user",e.user.username),fetch("/api/user_id/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:localStorage.getItem("user")})}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("userId",e)})),t.setState({loggedin:!0}))}catch(n){t.setState({error:"Invalid credentials"})}})):this.setState({error:"Enter a password"}):this.setState({error:"Enter a username"})}},{key:"handleChange",value:function(e){e.preventDefault(),this.setState(Object(B.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return this.state.loggedin?Object(b.jsx)(R.a,{to:"/"}):Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsxs)("div",{className:"register-container",children:[Object(b.jsx)("h1",{children:"LOG IN"}),this.state.error&&Object(b.jsx)("h2",{className:"register-error",children:this.state.error}),Object(b.jsx)("div",{className:"form-container",children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:"register-form",children:[Object(b.jsx)("input",{type:"text",name:"username",onChange:this.handleChange,placeholder:"Username"}),Object(b.jsx)("input",{type:"password",name:"password",onChange:this.handleChange,placeholder:"Password"}),Object(b.jsx)("div",{className:"register-form-submit",children:Object(b.jsx)("input",{type:"submit",value:"LOG IN"})})]})})]})]})}}]),n}(i.a.Component),L=(n(39),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={},e.handleSubmit=e.handleSubmit.bind(Object(l.a)(e)),e.handleChange=e.handleChange.bind(Object(l.a)(e)),e}return Object(s.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=new RegExp("^[1-9][:][0-5][0-9][.][0-9][0-9][0-9]$"),n=new RegExp("^5[0-9][.][0-9][0-9][0-9]$"),a=this.state.time,i=this.state.map;this.setState({success:null}),this.setState({error:null}),a?i?t.test(a)||n.test(a)?(fetch("/api/submit_record/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:localStorage.getItem("user"),user:localStorage.getItem("userId"),map:i,time:a})}),document.getElementById("time").value="",this.setState({success:"Updated ".concat(i," record")})):this.setState({error:"Invalid time"}):this.setState({error:"Select a map"}):this.setState({error:"Enter a time"})}},{key:"handleChange",value:function(e){e.preventDefault(),this.setState(Object(B.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsxs)("div",{className:"submit-record-container",children:[Object(b.jsx)("h1",{className:"record-form-header",children:"Submit Record"}),this.state.error&&Object(b.jsx)("h2",{className:"record-error",children:this.state.error}),this.state.success&&Object(b.jsx)("h2",{className:"record-success",children:this.state.success}),Object(b.jsx)("div",{className:"form-container",children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:"record-form",children:[Object(b.jsxs)("div",{className:"record-form-inputs",children:[Object(b.jsxs)("select",{onChange:this.handleChange,name:"map",children:[Object(b.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select map"}),Object(b.jsx)("option",{value:"body",children:"Body"}),Object(b.jsx)("option",{value:"canyon",children:"Canyon"}),Object(b.jsx)("option",{value:"cavern",children:"Cavern"}),Object(b.jsx)("option",{value:"celts",children:"Celts"}),Object(b.jsx)("option",{value:"dragon",children:"Dragon"}),Object(b.jsx)("option",{value:"excalibur",children:"Excalibur"}),Object(b.jsx)("option",{value:"icarus",children:"Icarus"}),Object(b.jsx)("option",{value:"kraken",children:"Kraken"}),Object(b.jsx)("option",{value:"mobs",children:"Mobs"}),Object(b.jsx)("option",{value:"shrunk",children:"Shrunk"}),Object(b.jsx)("option",{value:"temple",children:"Temple"}),Object(b.jsx)("option",{value:"yeti",children:"Yeti"})]}),Object(b.jsx)("input",{type:"text",name:"time",id:"time",onChange:this.handleChange,placeholder:"Time"})]}),Object(b.jsx)("input",{className:"record-form-submit",type:"submit",value:"SUBMIT"})]})})]})]})}}]),n}(a.Component)),K=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsx)(w,{worldrecord:!0})]})}}]),n}(a.Component),D=(n(40),!!localStorage.getItem("token"));o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(u.a,{children:Object(b.jsxs)(R.d,{children:[Object(b.jsx)(R.b,{exact:!0,path:"/",component:G}),Object(b.jsx)(R.b,{exact:!0,path:"/register",component:E,children:D&&Object(b.jsx)(R.a,{to:"/"})}),Object(b.jsx)(R.b,{exact:!0,path:"/login",component:P,children:D&&Object(b.jsx)(R.a,{to:"/"})}),Object(b.jsx)(R.b,{exact:!0,path:"/submit-record",component:L,children:!D&&Object(b.jsx)(R.a,{to:"/"})}),Object(b.jsx)(R.b,{exact:!0,path:"/world-records",component:K}),Object(b.jsx)(R.b,{component:G})]})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d906ded5.chunk.js.map