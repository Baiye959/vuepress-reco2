import{_ as n,o as s,c as a,e}from"./app-cJunwW8o.js";const p={},t=e(`<h2 id="在安卓项目中使用现有cpp代码流程" tabindex="-1"><a class="header-anchor" href="#在安卓项目中使用现有cpp代码流程" aria-hidden="true">#</a> 在安卓项目中使用现有cpp代码流程</h2><ol><li>新建native-cpp安卓项目</li><li>将原有cpp代码放在安卓项目的cpp目录中</li><li>新建cpp文件，写cpp函数包装想要在安卓项目中使用的cpp代码</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// ParticleFilterWrapper.cpp</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;ParticleFilter.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MapParser.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;ParticleFilterWrapper.h&quot;</span></span>

<span class="token class-name">ParticleFilterWrapper</span><span class="token double-colon punctuation">::</span><span class="token function">ParticleFilterWrapper</span><span class="token punctuation">(</span><span class="token keyword">double</span> <span class="token operator">*</span><span class="token operator">*</span>map<span class="token punctuation">,</span> <span class="token keyword">int</span> mapLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 关闭磁场和wifi匹配</span>
    magrespf<span class="token punctuation">.</span>flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    wifirespf<span class="token punctuation">.</span>flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    mapParser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">MapParser</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span> mapLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">ParticleFilter</span><span class="token punctuation">(</span>mapParser<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 此处初始化神经网络</span>
<span class="token comment">//    neuralNetwork = new NeuralNetwork();</span>
<span class="token punctuation">}</span>

<span class="token class-name">ParticleFilterWrapper</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">ParticleFilterWrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mapParser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">delete</span> mapParser<span class="token punctuation">;</span>
        mapParser <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pf<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">delete</span> pf<span class="token punctuation">;</span>
        pf <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Pos <span class="token class-name">ParticleFilterWrapper</span><span class="token double-colon punctuation">::</span><span class="token function">input</span><span class="token punctuation">(</span><span class="token keyword">bool</span> isAR<span class="token punctuation">,</span> <span class="token keyword">double</span> <span class="token operator">*</span>displament<span class="token punctuation">,</span> <span class="token keyword">double</span> <span class="token operator">*</span>imuData<span class="token punctuation">,</span> <span class="token keyword">int</span> floor<span class="token punctuation">,</span> <span class="token keyword">bool</span> walkStrait<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pf<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> std<span class="token double-colon punctuation">::</span><span class="token function">runtime_error</span><span class="token punctuation">(</span><span class="token string">&quot;ParticleFilter is not initialized&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 调用ParticleFilter的input函数</span>
    <span class="token comment">// double steplength, double yaw, int floor, int *actRes, bool WalkStrait, Match_Result magrespf, Match_Result wifirespf</span>

    <span class="token comment">// 非AR输入，将imu数据输入到神经网络获得displament</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isAR<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        displament = neuralNetwork-&gt;input(imuData);</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 1. 从位移displament计算步长steplength和航向yaw</span>
    <span class="token keyword">double</span> x <span class="token operator">=</span> displament<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> y <span class="token operator">=</span> displament<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> steplength <span class="token operator">=</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>x <span class="token operator">*</span> x <span class="token operator">+</span> y <span class="token operator">*</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> yaw <span class="token operator">=</span> <span class="token function">atan2</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 2. 活动识别结果 int *actRes（原代码在PreProcessing模块，现有模块未使用仅赋值）</span>
    <span class="token comment">// 3. 是否走直线 bool walkStrait*（原代码在GeoProcessing模块）</span>

    <span class="token keyword">return</span> pf<span class="token operator">-&gt;</span><span class="token function">input</span><span class="token punctuation">(</span>steplength<span class="token punctuation">,</span> yaw<span class="token punctuation">,</span> floor<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>last_actres<span class="token punctuation">,</span> walkStrait<span class="token punctuation">,</span> magrespf<span class="token punctuation">,</span> wifirespf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// ParticleFilterWrapper.h</span>
<span class="token comment">//</span>
<span class="token comment">// Created by 33835 on 2024/10/8.</span>
<span class="token comment">//</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">MY_APPLICATION_PARTICLEFILTERWRAPPER_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MY_APPLICATION_PARTICLEFILTERWRAPPER_H</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;ParticleFilter.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MapParser.h&quot;</span></span>

<span class="token keyword">class</span> <span class="token class-name">ParticleFilterWrapper</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">ParticleFilterWrapper</span><span class="token punctuation">(</span><span class="token keyword">double</span> <span class="token operator">*</span><span class="token operator">*</span>map<span class="token punctuation">,</span> <span class="token keyword">int</span> mapLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">~</span><span class="token function">ParticleFilterWrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    Pos <span class="token function">input</span><span class="token punctuation">(</span><span class="token keyword">bool</span> isAR<span class="token punctuation">,</span> <span class="token keyword">double</span> <span class="token operator">*</span>displament<span class="token punctuation">,</span> <span class="token keyword">double</span> <span class="token operator">*</span>imuData<span class="token punctuation">,</span> <span class="token keyword">int</span> floor<span class="token punctuation">,</span> <span class="token keyword">bool</span> walkStrait<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span><span class="token operator">:</span>
    ParticleFilter<span class="token operator">*</span> pf<span class="token punctuation">;</span>
    MapParser<span class="token operator">*</span> mapParser<span class="token punctuation">;</span>
    <span class="token comment">// 活动识别结果 仅用于适配pf原代码</span>
    <span class="token keyword">int</span> last_actres<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    Match_Result magrespf<span class="token punctuation">,</span> wifirespf<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">//MY_APPLICATION_PARTICLEFILTERWRAPPER_H</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在安卓项目的java目录中创建一个JNIHelper.class（名字任意），加载cpp代码后面会编译出的library库，并写native函数</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>baiye959<span class="token punctuation">.</span>myapplication<span class="token punctuation">.</span>map</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JNIHelper</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">loadLibrary</span><span class="token punctuation">(</span><span class="token string">&quot;native-lib&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">[</span><span class="token punctuation">]</span> map<span class="token punctuation">,</span> <span class="token keyword">int</span> mapLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">double</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> isAR<span class="token punctuation">,</span> <span class="token keyword">double</span><span class="token punctuation">[</span><span class="token punctuation">]</span> displacement<span class="token punctuation">,</span> <span class="token keyword">double</span><span class="token punctuation">[</span><span class="token punctuation">]</span> imuData<span class="token punctuation">,</span> <span class="token keyword">int</span> floor<span class="token punctuation">,</span> <span class="token keyword">boolean</span> walkStrait<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>根据native函数，安卓会提示帮忙生成对应的cpp实现（内容要自己填充）</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;jni.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;ParticleFilterWrapper.h&quot;</span></span>

<span class="token keyword">extern</span> <span class="token string">&quot;C&quot;</span> JNIEXPORT jstring JNICALL
<span class="token function">Java_com_baiye959_myapplication_MainActivity_stringFromJNI</span><span class="token punctuation">(</span>
        JNIEnv<span class="token operator">*</span> env<span class="token punctuation">,</span>
        jobject <span class="token comment">/* this */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>string hello <span class="token operator">=</span> <span class="token string">&quot;Hello from C++&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> env<span class="token operator">-&gt;</span><span class="token function">NewStringUTF</span><span class="token punctuation">(</span>hello<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 全局变量，用于存储 ParticleFilterWrapper 实例</span>
<span class="token keyword">static</span> ParticleFilterWrapper<span class="token operator">*</span> gParticleFilterWrapper <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>

<span class="token keyword">extern</span> <span class="token string">&quot;C&quot;</span> JNIEXPORT <span class="token keyword">void</span> JNICALL
<span class="token function">Java_com_baiye959_myapplication_map_JNIHelper_init</span><span class="token punctuation">(</span>
        JNIEnv<span class="token operator">*</span> env<span class="token punctuation">,</span>
        jobject <span class="token comment">/* this */</span><span class="token punctuation">,</span>
        jdoubleArray jMap<span class="token punctuation">,</span>
        jint mapLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将 Java 数组转换为 C++ 数组</span>
    jdouble<span class="token operator">*</span> map <span class="token operator">=</span> env<span class="token operator">-&gt;</span><span class="token function">GetDoubleArrayElements</span><span class="token punctuation">(</span>jMap<span class="token punctuation">,</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span><span class="token operator">*</span><span class="token operator">*</span> cppMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">double</span><span class="token operator">*</span><span class="token punctuation">[</span>mapLength<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> mapLength<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cppMap<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">double</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 每行有 6 个元素</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cppMap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> map<span class="token punctuation">[</span>i <span class="token operator">*</span> <span class="token number">6</span> <span class="token operator">+</span> j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 创建 ParticleFilterWrapper 实例</span>
    gParticleFilterWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">ParticleFilterWrapper</span><span class="token punctuation">(</span>cppMap<span class="token punctuation">,</span> mapLength<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 释放 Java 数组</span>
    env<span class="token operator">-&gt;</span><span class="token function">ReleaseDoubleArrayElements</span><span class="token punctuation">(</span>jMap<span class="token punctuation">,</span> map<span class="token punctuation">,</span> JNI_ABORT<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">extern</span> <span class="token string">&quot;C&quot;</span> JNIEXPORT <span class="token keyword">void</span> JNICALL
<span class="token function">Java_com_baiye959_myapplication_map_JNIHelper_destroy</span><span class="token punctuation">(</span>
        JNIEnv<span class="token operator">*</span> env<span class="token punctuation">,</span>
        jobject <span class="token comment">/* this */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>gParticleFilterWrapper<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">delete</span> gParticleFilterWrapper<span class="token punctuation">;</span>
        gParticleFilterWrapper <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">extern</span> <span class="token string">&quot;C&quot;</span> JNIEXPORT jdoubleArray JNICALL
<span class="token function">Java_com_baiye959_myapplication_map_JNIHelper_input</span><span class="token punctuation">(</span>
        JNIEnv<span class="token operator">*</span> env<span class="token punctuation">,</span>
        jobject <span class="token comment">/* this */</span><span class="token punctuation">,</span>
        jboolean jIsAR<span class="token punctuation">,</span>
        jdoubleArray jDisplacement<span class="token punctuation">,</span>
        jdoubleArray jImuData<span class="token punctuation">,</span>
        jint jFloor<span class="token punctuation">,</span>
        jboolean jWalkStrait<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>gParticleFilterWrapper<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 抛出 Java 异常</span>
        jclass exceptionClass <span class="token operator">=</span> env<span class="token operator">-&gt;</span><span class="token function">FindClass</span><span class="token punctuation">(</span><span class="token string">&quot;java/lang/RuntimeException&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        env<span class="token operator">-&gt;</span><span class="token function">ThrowNew</span><span class="token punctuation">(</span>exceptionClass<span class="token punctuation">,</span> <span class="token string">&quot;ParticleFilter is not initialized&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 将 Java 数组转换为 C++ 数组</span>
    jdouble<span class="token operator">*</span> displacement <span class="token operator">=</span> env<span class="token operator">-&gt;</span><span class="token function">GetDoubleArrayElements</span><span class="token punctuation">(</span>jDisplacement<span class="token punctuation">,</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    jdouble<span class="token operator">*</span> imuData <span class="token operator">=</span> env<span class="token operator">-&gt;</span><span class="token function">GetDoubleArrayElements</span><span class="token punctuation">(</span>jImuData<span class="token punctuation">,</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 将 Java 类型转换为 C++ 类型</span>
    <span class="token keyword">bool</span> isAR <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">bool</span><span class="token punctuation">)</span>jIsAR<span class="token punctuation">;</span>
    <span class="token keyword">int</span> floor <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>jFloor<span class="token punctuation">;</span>
    <span class="token keyword">bool</span> walkStrait <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">bool</span><span class="token punctuation">)</span>jWalkStrait<span class="token punctuation">;</span>

    <span class="token comment">// 调用 ParticleFilterWrapper 的 input 方法</span>
    Pos result <span class="token operator">=</span> gParticleFilterWrapper<span class="token operator">-&gt;</span><span class="token function">input</span><span class="token punctuation">(</span>isAR<span class="token punctuation">,</span> displacement<span class="token punctuation">,</span> imuData<span class="token punctuation">,</span> floor<span class="token punctuation">,</span> walkStrait<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 释放 Java 数组</span>
    env<span class="token operator">-&gt;</span><span class="token function">ReleaseDoubleArrayElements</span><span class="token punctuation">(</span>jDisplacement<span class="token punctuation">,</span> displacement<span class="token punctuation">,</span> JNI_ABORT<span class="token punctuation">)</span><span class="token punctuation">;</span>
    env<span class="token operator">-&gt;</span><span class="token function">ReleaseDoubleArrayElements</span><span class="token punctuation">(</span>jImuData<span class="token punctuation">,</span> imuData<span class="token punctuation">,</span> JNI_ABORT<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 将结果转换为 Java 数组</span>
    jdoubleArray jResult <span class="token operator">=</span> env<span class="token operator">-&gt;</span><span class="token function">NewDoubleArray</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    jdouble resultArray<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>result<span class="token punctuation">.</span>x<span class="token punctuation">,</span> result<span class="token punctuation">.</span>y<span class="token punctuation">}</span><span class="token punctuation">;</span>
    env<span class="token operator">-&gt;</span><span class="token function">SetDoubleArrayRegion</span><span class="token punctuation">(</span>jResult<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> resultArray<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> jResult<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>在cpp目录下编写CMakeLists.txt，用于编译JNIHelper中需要的library库</li></ol><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token comment"># For more information about using CMake with Android Studio, read the</span>
<span class="token comment"># documentation: https://d.android.com/studio/projects/add-native-code.html.</span>
<span class="token comment"># For more examples on how to use CMake, see https://github.com/android/ndk-samples.</span>

<span class="token comment"># 指定最小cmake版本号</span>
<span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.22.1</span><span class="token punctuation">)</span>

<span class="token comment"># 项目名称</span>
<span class="token keyword">project</span><span class="token punctuation">(</span><span class="token string">&quot;myapplication&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># Creates and names a library, sets it as either STATIC</span>
<span class="token comment"># or SHARED, and provides the relative paths to its source code.</span>
<span class="token comment"># You can define multiple libraries, and CMake builds them for you.</span>
<span class="token comment"># Gradle automatically packages shared libraries with your APK.</span>
<span class="token comment">#</span>
<span class="token comment"># In this top level CMakeLists.txt, \${CMAKE_PROJECT_NAME} is used to define</span>
<span class="token comment"># the target library name; in the sub-module&#39;s CMakeLists.txt, \${PROJECT_NAME}</span>
<span class="token comment"># is preferred for the same purpose.</span>
<span class="token comment">#</span>
<span class="token comment"># In order to load a library into your app from Java/Kotlin, you must call</span>
<span class="token comment"># System.loadLibrary() and pass the name of the library defined here;</span>
<span class="token comment"># for GameActivity/NativeActivity derived applications, the same library name must be</span>
<span class="token comment"># used in the AndroidManifest.xml file.</span>
<span class="token comment"># 添加源文件</span>
<span class="token keyword">add_library</span><span class="token punctuation">(</span>
        <span class="token comment"># 设置库名称</span>
        native-lib

        <span class="token comment"># 设置库类型为共享库</span>
        <span class="token namespace">SHARED</span>

        <span class="token comment"># 源文件列表</span>
        native_lib.cpp
        ParticleFilterWrapper.cpp
        ParticleFilter.cpp
        MapParser.cpp
        math_func.cpp
        Matrix.cpp
        settings.cpp
<span class="token punctuation">)</span>

<span class="token comment"># 查找并链接 log 库</span>
<span class="token keyword">find_library</span><span class="token punctuation">(</span>log-lib log<span class="token punctuation">)</span>

<span class="token comment"># 设置包含目录</span>
<span class="token keyword">target_include_directories</span><span class="token punctuation">(</span>native-lib <span class="token namespace">PRIVATE</span>
        <span class="token punctuation">\${</span><span class="token variable">CMAKE_CURRENT_SOURCE_DIR</span><span class="token punctuation">}</span>  <span class="token comment"># 当前源代码目录</span>
        <span class="token punctuation">\${</span><span class="token variable">CMAKE_CURRENT_SOURCE_DIR</span><span class="token punctuation">}</span>/include  <span class="token comment"># 包含目录</span>
<span class="token punctuation">)</span>

<span class="token comment"># 链接库</span>
<span class="token keyword">target_link_libraries</span><span class="token punctuation">(</span>native-lib
        <span class="token comment"># List libraries link to the target library</span>
        android
        log<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境检查" tabindex="-1"><a class="header-anchor" href="#环境检查" aria-hidden="true">#</a> 环境检查</h2><ol><li><code>build.gradle(module:app)</code></li></ol><div class="language-Kotlin line-numbers-mode" data-ext="Kotlin"><pre class="language-Kotlin"><code>android {
  externalNativeBuild {
      cmake {
          path = file(&quot;src/main/cpp/CMakeLists.txt&quot;)
          version = &quot;3.22.1&quot;
      }
  }
  ndkVersion = &quot;26.1.10909125&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p><code>local.properties</code></p><p>不要在<code>local.properties</code>里写<code>ndk.dir=C\\:\\\\Users\\\\33835\\\\AppData\\\\Local\\\\Android\\\\Sdk\\\\ndk\\\\26.1.10909125</code>，已被弃用，被上述<code>build.gradle</code>中的<code>ndkVersion = &quot;26.1.10909125&quot;</code>代替了</p></li></ol><h2 id="踩坑记录" tabindex="-1"><a class="header-anchor" href="#踩坑记录" aria-hidden="true">#</a> 踩坑记录</h2><p>点Build &gt; Rebuild Project报错不清晰，可以在命令行输入<code>./gradlew assembleDebug --info</code>查看更详细的报错</p>`,16),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","jni_android.html.vue"]]);export{r as default};
