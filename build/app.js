function f(){}function et(t){return t()}function pt(){return Object.create(null)}function F(t){t.forEach(et)}function S(t){return typeof t=="function"}function v(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function yt(t){return Object.keys(t).length===0}function nt(t,...e){if(t==null)return f;let n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $(t,e,n){t.$$.on_destroy.push(nt(e,n))}function M(t,e,n){return t.set(n),e}var gt=!1;function jt(){gt=!0}function Nt(){gt=!1}function _(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function C(){return k(" ")}function B(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qt(t){return Array.from(t.childNodes)}function N(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ot(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function it(t,e,n){t.classList[n?"add":"remove"](e)}var rt;function W(t){rt=t}var L=[];var mt=[],X=[],ht=[],Rt=Promise.resolve(),Z=!1;function It(){Z||(Z=!0,Rt.then(vt))}function tt(t){X.push(t)}var Q=new Set,P=0;function vt(){if(P!==0)return;let t=rt;do{try{for(;P<L.length;){let e=L[P];P++,W(e),Pt(e.$$)}}catch(e){throw L.length=0,P=0,e}for(W(null),L.length=0,P=0;mt.length;)mt.pop()();for(let e=0;e<X.length;e+=1){let n=X[e];Q.has(n)||(Q.add(n),n())}X.length=0}while(L.length);for(;ht.length;)ht.pop()();Z=!1,Q.clear(),W(t)}function Pt(t){if(t.fragment!==null){t.update(),F(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(tt)}}var Y=new Set,j;function $t(){j={r:0,c:[],p:j}}function wt(){j.r||F(j.c),j=j.p}function x(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function A(t,e,n,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),j.c.push(()=>{Y.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}var oe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function z(t){t&&t.c()}function q(t,e,n,o){let{fragment:l,after_update:r}=t.$$;l&&l.m(e,n),o||tt(()=>{let c=t.$$.on_mount.map(et).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...c):F(c),t.$$.on_mount=[]}),r.forEach(tt)}function O(t,e){let n=t.$$;n.fragment!==null&&(F(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(L.push(t),It(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(t,e,n,o,l,r,c,i=[-1]){let u=rt;W(t);let s=t.$$={fragment:null,ctx:[],props:r,update:f,not_equal:l,bound:pt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:pt(),dirty:i,skip_bound:!1,root:e.target||u.$$.root};c&&c(s.root);let a=!1;if(s.ctx=n?n(t,e.props||{},(d,m,...g)=>{let I=g.length?g[0]:m;return s.ctx&&l(s.ctx[d],s.ctx[d]=I)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](I),a&&Lt(t,d)),m}):[],s.update(),a=!0,F(s.before_update),s.fragment=o?o(s.ctx):!1,e.target){if(e.hydrate){jt();let d=qt(e.target);s.fragment&&s.fragment.l(d),d.forEach(h)}else s.fragment&&s.fragment.c();e.intro&&x(t.$$.fragment),q(t,e.target,e.anchor,e.customElement),Nt(),vt()}W(u)}var Bt;typeof HTMLElement=="function"&&(Bt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(et).filter(S);for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){F(this.$$.on_disconnect)}$destroy(){O(this,1),this.$destroy=f}$on(t,e){if(!S(e))return f;let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let o=n.indexOf(e);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!yt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var b=class{$destroy(){O(this,1),this.$destroy=f}$on(e,n){if(!S(n))return f;let o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{let l=o.indexOf(n);l!==-1&&o.splice(l,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var G=[];function zt(t,e){return{subscribe:H(t,e).subscribe}}function H(t,e=f){let n,o=new Set;function l(i){if(v(t,i)&&(t=i,n)){let u=!G.length;for(let s of o)s[1](),G.push(s,t);if(u){for(let s=0;s<G.length;s+=2)G[s][0](G[s+1]);G.length=0}}}function r(i){l(i(t))}function c(i,u=f){let s=[i,u];return o.add(s),o.size===1&&(n=e(l)||f),i(t),()=>{o.delete(s),o.size===0&&(n(),n=null)}}return{set:l,update:r,subscribe:c}}function st(t,e,n){let o=!Array.isArray(t),l=o?[t]:t,r=e.length<2;return zt(n,c=>{let i=!1,u=[],s=0,a=f,d=()=>{if(s)return;a();let g=e(o?u[0]:u,c);r?c(g):a=S(g)?g:f},m=l.map((g,I)=>nt(g,Tt=>{u[I]=Tt,s&=~(1<<I),i&&d()},()=>{s|=1<<I}));return i=!0,d(),function(){F(m),a()}})}function U(t=!1){let e=[],n=Object.assign([],{void:{m:0,n:0}}),o=0;l();for(let r=0;r<4;r++){n[r]=[];for(let c=0;c<4;c++)e[o]?n[r][c]=e[o]:(n[r][c]=0,n.void={m:r,n:c}),o++}return n;function l(){let r;function c(){let u,s;e.map(function(a,d){u=Math.floor(Math.random()*16),e[u]!==a&&(s=e[u],e[u]=a,e[d]=s)})}function i(){let u=0,s=0;e.map(function(a,d){if(a===0)s=d;else if(a>1)for(let m=d+1;m<16;m++)a>e[m]&&e[m]!==0&&u++}),(!(u%2)&&(s>3&&s<8||s>11&&s<16)||u%2&&(s<4||s>7&&s<12))&&(r=!0)}for(let u=0;u<16;u++)e.push(u);for(t||e.push(Number(e.shift()));t&&!r;)c(),i()}}var R=Gt(0),D=H(""),T=H(0),J=H(U()),V=st(J,t=>{let e=[];for(let n=0;n<4;n++)for(let o=0;o<4;o++)e[t[n][o]]={m:n,n:o};return e}),K=st(V,t=>{if(t[0].n===3&&t[0].m===3){for(let e=15;e>1;e--){let n=Math.floor((e-1)/4),o=e-1-4*n;if(t[e].m!==n||t[e].n!==o)return!1}return!0}else return!1});function Gt(t=0,e=!1){let n=s=>new Date(s).toISOString().slice(11,-5),{subscribe:o,set:l}=H(n(t)),r=0;e&&c();function c(s=0){t=s||t,l(n(t)),u(),r=setInterval(()=>{t=t+1e3,t<0?u():l(n(t))},1e3)}function i(){clearInterval(r)}function u(){clearInterval(r),t=0}return{subscribe:o,set:l,start:c,pause:i,stop:u}}function ct(t,e){let n=Math.abs(e.m-t.void.m||e.n-t.void.n);function o(){for(let i=t.void.m+1;i<=e.m;i++)t[i-1][t.void.n]=t[i][t.void.n];t.void.m+=n}function l(){for(let i=t.void.m-1;i>=e.m;i--)t[i+1][t.void.n]=t[i][t.void.n];t.void.m-=n}function r(){for(let i=t.void.n-1;i>=e.n;i--)t[t.void.m][i+1]=t[t.void.m][i];t.void.n-=n}function c(){for(let i=t.void.n+1;i<=e.n;i++)t[t.void.m][i-1]=t[t.void.m][i];t.void.n+=n}return e.m!==t.void.m?e.m>t.void.m?o():l():e.n<t.void.n?r():c(),t[t.void.m][t.void.n]=0,t}var Ft;V.subscribe(t=>Ft=t);var lt=t=>J.set(U(t)),kt=t=>{J.update(e=>ct(e,Ft[t]))};function Ht(t){let e,n=t[0]==="pause"?"Resume":"Start",o,l,r;return{c(){e=p("button"),o=k(n),w(e,"class","lg")},m(c,i){y(c,e,i),_(e,o),l||(r=B(e,"click",function(){S(t[0]==="pause"?t[3]:t[1])&&(t[0]==="pause"?t[3]:t[1]).apply(this,arguments)}),l=!0)},p(c,i){t=c,i&1&&n!==(n=t[0]==="pause"?"Resume":"Start")&&N(o,n)},d(c){c&&h(e),l=!1,r()}}}function Wt(t){let e,n,o,l,r;return{c(){e=p("button"),e.textContent="Stop",n=C(),o=p("button"),o.textContent="Pause"},m(c,i){y(c,e,i),y(c,n,i),y(c,o,i),l||(r=[B(e,"click",t[4]),B(o,"click",t[2])],l=!0)},p:f,d(c){c&&h(e),c&&h(n),c&&h(o),l=!1,F(r)}}}function Ut(t){let e,n;function o(c,i){return c[0]==="play"?Wt:Ht}let l=o(t,-1),r=l(t);return{c(){e=p("footer"),n=p("nav"),r.c(),it(n,"playing",t[0]==="play")},m(c,i){y(c,e,i),_(e,n),r.m(n,null)},p(c,[i]){l===(l=o(c,i))&&r?r.p(c,i):(r.d(1),r=l(c),r&&(r.c(),r.m(n,null))),i&1&&it(n,"playing",c[0]==="play")},i:f,o:f,d(c){c&&h(e),r.d()}}}function Vt(t,e,n){let o,l,r;$(t,D,a=>n(0,o=a)),$(t,T,a=>n(5,l=a)),$(t,K,a=>n(6,r=a));function c(){lt(r),R.start(0),M(D,o="play",o)}function i(){R.pause(),M(D,o="pause",o)}function u(){R.start(),M(D,o="play",o)}function s(){lt(r),R.stop(),M(T,l=0,l),M(D,o="",o)}return[o,c,i,u,s]}var ut=class extends b{constructor(e){super(),E(this,e,Vt,Ut,v,{})}},xt=ut;function Xt(t){let e,n,o,l;return{c(){e=p("button"),n=k(t[0]),w(e,"class","tile"),ot(e,"transform","translate("+t[1][t[0]].n*100+"%, "+t[1][t[0]].m*100+"%)")},m(r,c){y(r,e,c),_(e,n),o||(l=B(e,"click",t[2]),o=!0)},p(r,[c]){c&1&&N(n,r[0]),c&3&&ot(e,"transform","translate("+r[1][r[0]].n*100+"%, "+r[1][r[0]].m*100+"%)")},i:f,o:f,d(r){r&&h(e),o=!1,l()}}}function Yt(t,e,n){let o,l,r,c;$(t,T,s=>n(3,o=s)),$(t,K,s=>n(4,l=s)),$(t,D,s=>n(5,r=s)),$(t,V,s=>n(1,c=s));let{number:i}=e;function u(){let s=c[i].n===c[0].n||c[i].m===c[0].m;r==="play"&&s&&!l&&(kt(i),M(T,o+=1,o))}return t.$$set=s=>{"number"in s&&n(0,i=s.number)},[i,c,u]}var ft=class extends b{constructor(e){super(),E(this,e,Yt,Xt,v,{number:0})}},Et=ft;function St(t,e,n){let o=t.slice();return o[1]=e[n],o}function Mt(t){let e,n;return e=new Et({props:{number:t[1]}}),{c(){z(e.$$.fragment)},m(o,l){q(e,o,l),n=!0},p:f,i(o){n||(x(e.$$.fragment,o),n=!0)},o(o){A(e.$$.fragment,o),n=!1},d(o){O(e,o)}}}function Jt(t){let e,n,o,l=t[0],r=[];for(let i=0;i<l.length;i+=1)r[i]=Mt(St(t,l,i));let c=i=>A(r[i],1,1,()=>{r[i]=null});return{c(){e=p("main"),n=p("section");for(let i=0;i<r.length;i+=1)r[i].c();w(n,"id","board")},m(i,u){y(i,e,u),_(e,n);for(let s=0;s<r.length;s+=1)r[s].m(n,null);o=!0},p(i,[u]){if(u&1){l=i[0];let s;for(s=0;s<l.length;s+=1){let a=St(i,l,s);r[s]?(r[s].p(a,u),x(r[s],1)):(r[s]=Mt(a),r[s].c(),x(r[s],1),r[s].m(n,null))}for($t(),s=l.length;s<r.length;s+=1)c(s);wt()}},i(i){if(!o){for(let u=0;u<l.length;u+=1)x(r[u]);o=!0}},o(i){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)A(r[u]);o=!1},d(i){i&&h(e),bt(r,i)}}}function Kt(t){"use strict";return[Array.from({length:15},(n,o)=>o+1)]}var at=class extends b{constructor(e){super(),E(this,e,Kt,Jt,v,{})}},Ct=at;var At='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>';function Zt(t){let e,n,o,l,r,c,i,u,s,a,d;return{c(){e=p("header"),n=p("p"),o=k(t[0]),l=C(),r=p("h1"),c=p("a"),i=k(`
        Tagy`),u=C(),s=p("p"),a=k("Steps: "),d=k(t[1]),w(c,"href","https://github.com/Valexr/Tagy"),w(c,"target","_blank"),w(c,"rel","noreferrer"),w(c,"id","gh")},m(m,g){y(m,e,g),_(e,n),_(n,o),_(e,l),_(e,r),_(r,c),c.innerHTML=At,_(r,i),_(e,u),_(e,s),_(s,a),_(s,d)},p(m,[g]){g&1&&N(o,m[0]),g&2&&N(d,m[1])},i:f,o:f,d(m){m&&h(e)}}}function te(t,e,n){let o,l;return $(t,R,r=>n(0,o=r)),$(t,T,r=>n(1,l=r)),[o,l]}var dt=class extends b{constructor(e){super(),E(this,e,te,Zt,v,{})}},Ot=dt;function ee(t){let e,n,o,l,r,c;return e=new Ot({}),o=new Ct({}),r=new xt({}),{c(){z(e.$$.fragment),n=C(),z(o.$$.fragment),l=C(),z(r.$$.fragment)},m(i,u){q(e,i,u),y(i,n,u),q(o,i,u),y(i,l,u),q(r,i,u),c=!0},p:f,i(i){c||(x(e.$$.fragment,i),x(o.$$.fragment,i),x(r.$$.fragment,i),c=!0)},o(i){A(e.$$.fragment,i),A(o.$$.fragment,i),A(r.$$.fragment,i),c=!1},d(i){O(e,i),i&&h(n),O(o,i),i&&h(l),O(r,i)}}}var _t=class extends b{constructor(e){super(),E(this,e,null,ee,v,{})}},Dt=_t;var ne=new Dt({target:document.body}),Ve=ne;export{Ve as default};
