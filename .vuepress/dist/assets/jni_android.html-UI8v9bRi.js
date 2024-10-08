import{_ as e,o as i,c as d,e as a}from"./app-OzwhGvB3.js";const l={},n=a(`<h2 id="在安卓项目中使用现有cpp代码流程" tabindex="-1"><a class="header-anchor" href="#在安卓项目中使用现有cpp代码流程" aria-hidden="true">#</a> 在安卓项目中使用现有cpp代码流程</h2><ol><li>新建native-cpp安卓项目</li><li>将原有cpp代码放在安卓项目的cpp目录中</li><li>新建cpp文件，写cpp函数包装想要在安卓项目中使用的cpp代码</li><li>在安卓项目的java目录中创建一个JNIHelper.class（名字任意），加载cpp代码后面会编译出的library库，并写native函数</li><li>根据native函数，安卓会提示帮忙生成对应的cpp实现（内容要自己填充）</li><li>在cpp目录下编写CMakeLists.txt，用于编译JNIHelper中需要的library库</li></ol><h2 id="环境检查" tabindex="-1"><a class="header-anchor" href="#环境检查" aria-hidden="true">#</a> 环境检查</h2><ol><li><code>build.gradle(module:app)</code></li></ol><div class="language-Kotlin line-numbers-mode" data-ext="Kotlin"><pre class="language-Kotlin"><code>android {
  externalNativeBuild {
      cmake {
          path = file(&quot;src/main/cpp/CMakeLists.txt&quot;)
          version = &quot;3.22.1&quot;
      }
  }
  ndkVersion = &quot;26.1.10909125&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p><code>local.properties</code></p><p>不要在<code>local.properties</code>里写<code>ndk.dir=C\\:\\\\Users\\\\33835\\\\AppData\\\\Local\\\\Android\\\\Sdk\\\\ndk\\\\26.1.10909125</code>，已被弃用，被上述<code>build.gradle</code>中的<code>ndkVersion = &quot;26.1.10909125&quot;</code>代替了</p></li></ol><h2 id="踩坑记录" tabindex="-1"><a class="header-anchor" href="#踩坑记录" aria-hidden="true">#</a> 踩坑记录</h2><p>点Build &gt; Rebuild Project报错不清晰，可以在命令行输入<code>./gradlew assembleDebug --info</code>查看更详细的报错</p>`,8),c=[n];function o(r,s){return i(),d("div",null,c)}const p=e(l,[["render",o],["__file","jni_android.html.vue"]]);export{p as default};
