import{W as $,f as g}from"./index-BWNGbzMT.js";var F="Expected a function",S=NaN,M="[object Symbol]",N=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,R=/^0o[0-7]+$/i,_=parseInt,D=typeof g=="object"&&g&&g.Object===Object&&g,G=typeof self=="object"&&self&&self.Object===Object&&self,P=D||G||Function("return this")(),H=Object.prototype,U=H.toString,X=Math.max,q=Math.min,T=function(){return P.Date.now()};function z(e,t,i){var a,s,l,c,r,f,u=0,x=!1,d=!1,y=!0;if(typeof e!="function")throw new TypeError(F);t=E(t)||0,v(i)&&(x=!!i.leading,d="maxWait"in i,l=d?X(E(i.maxWait)||0,t):l,y="trailing"in i?!!i.trailing:y);function p(n){var o=a,m=s;return a=s=void 0,u=n,c=e.apply(m,o),c}function k(n){return u=n,r=setTimeout(b,t),x?p(n):c}function C(n){var o=n-f,m=n-u,h=t-o;return d?q(h,l-m):h}function I(n){var o=n-f,m=n-u;return f===void 0||o>=t||o<0||d&&m>=l}function b(){var n=T();if(I(n))return O(n);r=setTimeout(b,C(n))}function O(n){return r=void 0,y&&a?p(n):(a=s=void 0,c)}function L(){r!==void 0&&clearTimeout(r),u=0,a=f=s=r=void 0}function W(){return r===void 0?c:O(T())}function j(){var n=T(),o=I(n);if(a=arguments,s=this,f=n,o){if(r===void 0)return k(f);if(d)return r=setTimeout(b,t),p(f)}return r===void 0&&(r=setTimeout(b,t)),c}return j.cancel=L,j.flush=W,j}function v(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function J(e){return!!e&&typeof e=="object"}function K(e){return typeof e=="symbol"||J(e)&&U.call(e)==M}function E(e){if(typeof e=="number")return e;if(K(e))return S;if(v(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=v(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(N,"");var i=B.test(e);return i||R.test(e)?_(e.slice(2),i?2:8):A.test(e)?S:+e}var Q=z;const Y=$(Q);export{Y as d};
