import{_ as s,o as a,c as n,R as l}from"./chunks/framework.R3bd3Vqm.js";const A=JSON.parse('{"title":"ref","description":"","frontmatter":{},"headers":[],"relativePath":"reactive/ref.md","filePath":"reactive/ref.md"}'),p={name:"reactive/ref.md"},e=l(`<h1 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;ref&quot;">​</a></h1><p>源码地址</p><blockquote><p>core/packages/reactivity/src/ref.ts</p></blockquote><p>类型定义</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft has-diff vp-code-dark"><code><span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">interface</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Ref</span><span style="color:#F6F6F4;">&lt;</span><span style="color:#FFB86C;font-style:italic;">T</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">any</span><span style="color:#F6F6F4;">&gt; {</span></span>
<span class="line"><span style="color:#F6F6F4;">  value</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">T</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;">   * Type differentiator only.</span></span>
<span class="line"><span style="color:#7B7F8B;">   * We need this to be in public d.ts but don&#39;t want it to show up in IDE</span></span>
<span class="line"><span style="color:#7B7F8B;">   * autocomplete, so we use a private Symbol instead.</span></span>
<span class="line"><span style="color:#7B7F8B;">   */</span></span>
<span class="line"><span style="color:#F6F6F4;">  [RefSymbol]</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki vitesse-light has-diff vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">Ref</span><span style="color:#999999;">&lt;</span><span style="color:#2E8F82;">T</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">any</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">value</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">T</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;">   * Type differentiator only.</span></span>
<span class="line"><span style="color:#A0ADA0;">   * We need this to be in public d.ts but don&#39;t want it to show up in IDE</span></span>
<span class="line"><span style="color:#A0ADA0;">   * autocomplete, so we use a private Symbol instead.</span></span>
<span class="line"><span style="color:#A0ADA0;">   */</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">[</span><span style="color:#B07D48;">RefSymbol</span><span style="color:#999999;">]: </span><span style="color:#AB5959;">true</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><p>使用方法</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> obj </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">ref</span><span style="color:#F6F6F4;">({})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">obj</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">ref</span><span style="color:#999999;">({})</span></span></code></pre></div>`,7),o=[e];function t(c,r,i,y,F,d){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};