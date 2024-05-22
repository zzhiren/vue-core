import{_ as s,c as i,o as a,al as t}from"./chunks/framework.C70okhVW.js";const y=JSON.parse('{"title":"ref","description":"","frontmatter":{},"headers":[],"relativePath":"vue/sourcecode/reactive/ref.md","filePath":"vue/sourcecode/reactive/ref.md"}'),e={name:"vue/sourcecode/reactive/ref.md"},n=t(`<h1 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;ref&quot;">​</a></h1><p>源码地址</p><blockquote><p>core/packages/reactivity/src/ref.ts</p></blockquote><p>类型定义</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">export</span><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;"> interface</span><span style="--shiki-dark:#97E1F1;--shiki-light:#2E8F82;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;"> Ref</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#FFB86C;--shiki-light:#2E8F82;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">T</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#97E1F1;--shiki-light:#2E8F82;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;"> any</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">  value</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#97E1F1;--shiki-light:#2E8F82;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;"> T</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">   * Type differentiator only.</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">   * We need this to be in public d.ts but don&#39;t want it to show up in IDE</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">   * autocomplete, so we use a private Symbol instead.</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">   */</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  [</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">RefSymbol</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">]</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#97E1F1;--shiki-light:#AB5959;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;"> true</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">}</span></span></code></pre></div><p>使用方法</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> obj</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> ref</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">({})</span></span></code></pre></div>`,7),l=[n];function h(p,k,r,o,d,c){return a(),i("div",null,l)}const g=s(e,[["render",h]]);export{y as __pageData,g as default};
