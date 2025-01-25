<script lang="ts" setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ref } from 'vue'
import Badge from './ui/badge/Badge.vue'
const ActiveTab = ref('html')
</script>

<template>
  <section class="w-full container justify-center items-center flex flex-col gap-y-6 pt-8">
    <p class="w-full flex justify-start lg:justify-center text-violet-500 font-bold text-sm capitalize">SETUP, EASY-PEASY !</p>
    <p class="w-full flex justify-start lg:justify-center lg:text-center leading-normal text-5xl font-bold">
      Easiest way to setup <br />
      your HTML form.
    </p>
    <p class="w-full flex justify-start lg:justify-center text-lg lg:text-center leading-loose">
      Don't worry about emails, spam checking, integrations and form issues ever, <br />
      code your front-end, add your unique formcarry URL, and we'll handle the rest. <br />
      Within literally just 3 minutes, you can have a fully functional form for any platform <br />
    </p>
    <div
      class="w-full pb-8 justify-center mt-6 hidden lg:flex"
      style="background-image: url('src/assets/setup-bg.png'); background-repeat: no-repeat; background-size: contain; background-position: center"
    >
      <Tabs default-value="html" v-model="ActiveTab" class="w-full flex flex-col max-w-3xl mx-auto justify-center">
        <TabsList class="rounded-xl w-fit mx-auto">
          <TabsTrigger value="html" class="rounded-xl">
            <span class="flex size-full items-center justify-center mr-4"> Html </span>
          </TabsTrigger>
          <TabsTrigger value="jquery" class="rounded-xl">
            <span class="flex size-full items-center justify-center mr-4"> jQuery </span>
          </TabsTrigger>
          <TabsTrigger value="react" class="rounded-xl">
            <span class="flex size-full items-center justify-center mr-4"> React </span>
          </TabsTrigger>
          <TabsTrigger value="vue" class="rounded-xl">
            <span class="flex size-full items-center justify-center mr-4"> Vue </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="html" class="w-fit p-6 pt-0 flex justify-center items-center rounded-md">
          <div class="max-w-2xl max-h-xl mt-8">
            <div class="flex flex-col">
              <div class="flex justify-between items-center px-4 mb-6">
                <ul class="flex gap-3">
                  <li class="size-3 rounded-full bg-red-500"></li>
                  <li class="size-3 rounded-full bg-yellow-500"></li>
                  <li class="size-3 rounded-full bg-green-500"></li>
                </ul>
                <Badge>VS Code</Badge>
                <div></div>
              </div>
              <div class="bg-gray-100 rounded-md">
                <ScrollArea class="p-6 h-80 w-full">
                  <code
                    class="language-html flex flex-col"
                    style="
                      text-align: left;
                      white-space: pre;
                      word-spacing: normal;
                      word-break: normal;
                      overflow-wrap: normal;
                      color: rgb(14, 11, 61);
                      font-family: 'Roboto Mono', monospace;
                      font-size: 1em;
                      line-height: 1.5em;
                      tab-size: 4;
                      hyphens: none;
                    "
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >1</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">form</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >2</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">class</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">ajaxForm</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >3</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">action</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">https://formcarry.com/s/{Your Form ID}</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >4</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">method</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">POST</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >5</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">accept-charset</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">UTF-8</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >6</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">enctype</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">multipart/form-data </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >7</span
                      ><span class="token token" style="color: rgb(114, 20, 255)"></span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >8</span
                      ><span> </span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">input</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">type</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">file</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">name</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">picture</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >9</span
                      ><span> </span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">input</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">type</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">submit</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">value</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">Send</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >10</span
                      ><span></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;/</span><span class="token token" style="color: rgb(20, 99, 255)">form</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >11</span
                      > </span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >12</span
                      ><span></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">script</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">src</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">"</span><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&lt;/</span><span class="token token" style="color: rgb(20, 99, 255)">script</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >13</span
                      ><span></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">script</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >14</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">function</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >15</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">".ajaxForm"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">submit</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">function</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span><span class="token token script language-javascript parameter">e</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >16</span
                      ><span class="token token script language-javascript"> e</span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">preventDefault</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >17</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">var</span
                      ><span class="token token script language-javascript"> href </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">=</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">this</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">attr</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"action"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >18</span
                      ><span class="token token script language-javascript"> $</span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">ajax</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >19</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">type</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"POST"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >20</span
                      ><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">dataType</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"json"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >21</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">url</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> href</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >22</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">data</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">this</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">serialize</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >23</span
                      ><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript function-variable" style="color: rgb(114, 20, 255)">success</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">function</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span><span class="token token script language-javascript parameter">response</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >24</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">if</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span><span class="token token script language-javascript">response</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span><span class="token token script language-javascript">status </span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">==</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"success"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >25</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">alert</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"We received your submission, thank you!"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >26</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">else</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >27</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">alert</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"An error occured: "</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">+</span><span class="token token script language-javascript"> response</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span><span class="token token script language-javascript">message</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >28</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >29</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >30</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >31</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >32</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >33</span
                      ><span class="token token script language-javascript"></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;/</span
                      ><span class="token token" style="color: rgb(20, 99, 255)">script</span><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >34</span
                      ></span
                    ></code
                  >
                </ScrollArea>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="jquery" class="w-fit p-6 pt-0 flex justify-center items-center rounded-md">
          <div class="max-w-2xl max-h-xl mt-8">
            <div class="flex flex-col">
              <div class="flex justify-between items-center px-4 mb-6">
                <ul class="flex gap-3">
                  <li class="size-3 rounded-full bg-red-500"></li>
                  <li class="size-3 rounded-full bg-yellow-500"></li>
                  <li class="size-3 rounded-full bg-green-500"></li>
                </ul>
                <Badge>VS Code</Badge>
                <div></div>
              </div>
              <div class="bg-gray-100 rounded-md">
                <ScrollArea class="p-6 h-80 w-full">
                  <code
                    class="language-html flex flex-col"
                    style="
                      text-align: left;
                      white-space: pre;
                      word-spacing: normal;
                      word-break: normal;
                      overflow-wrap: normal;
                      color: rgb(14, 11, 61);
                      font-family: 'Roboto Mono', monospace;
                      font-size: 1em;
                      line-height: 1.5em;
                      tab-size: 4;
                      hyphens: none;
                    "
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >1</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">form</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >2</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">class</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">ajaxForm</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >3</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">action</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">https://formcarry.com/s/{Your Form ID}</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >4</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">method</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">POST</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >5</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">accept-charset</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">UTF-8</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >6</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">enctype</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">multipart/form-data </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >7</span
                      ><span class="token token" style="color: rgb(114, 20, 255)"></span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >8</span
                      ><span> </span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">input</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">type</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">file</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">name</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">picture</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >9</span
                      ><span> </span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">input</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">type</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">submit</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">value</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">Send</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >10</span
                      ><span></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;/</span><span class="token token" style="color: rgb(20, 99, 255)">form</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >11</span
                      > </span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >12</span
                      ><span></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">script</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">src</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">"</span><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&lt;/</span><span class="token token" style="color: rgb(20, 99, 255)">script</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >13</span
                      ><span></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">script</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >14</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">function</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >15</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">".ajaxForm"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">submit</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">function</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span><span class="token token script language-javascript parameter">e</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >16</span
                      ><span class="token token script language-javascript"> e</span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">preventDefault</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >17</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">var</span
                      ><span class="token token script language-javascript"> href </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">=</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">this</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">attr</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"action"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >18</span
                      ><span class="token token script language-javascript"> $</span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">ajax</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >19</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">type</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"POST"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >20</span
                      ><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">dataType</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"json"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >21</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">url</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> href</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >22</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">data</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">this</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">serialize</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >23</span
                      ><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript function-variable" style="color: rgb(114, 20, 255)">success</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">function</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span><span class="token token script language-javascript parameter">response</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >24</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">if</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span><span class="token token script language-javascript">response</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span><span class="token token script language-javascript">status </span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">==</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"success"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >25</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">alert</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"We received your submission, thank you!"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >26</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">else</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >27</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">alert</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"An error occured: "</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">+</span><span class="token token script language-javascript"> response</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span><span class="token token script language-javascript">message</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >28</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >29</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >30</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >31</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >32</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >33</span
                      ><span class="token token script language-javascript"></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;/</span
                      ><span class="token token" style="color: rgb(20, 99, 255)">script</span><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >34</span
                      ></span
                    ></code
                  >
                </ScrollArea>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="react" class="w-full">
          <div class="max-w-2xl max-h-xl mt-8">
            <div class="flex flex-col">
              <div class="flex justify-between items-center px-4 mb-6">
                <ul class="flex gap-3">
                  <li class="size-3 rounded-full bg-red-500"></li>
                  <li class="size-3 rounded-full bg-yellow-500"></li>
                  <li class="size-3 rounded-full bg-green-500"></li>
                </ul>
                <Badge>VS Code</Badge>
                <div></div>
              </div>
              <div class="bg-gray-100 rounded-md">
                <ScrollArea class="p-6 h-80 w-full">
                  <code
                    class="language-html flex flex-col"
                    style="
                      text-align: left;
                      white-space: pre;
                      word-spacing: normal;
                      word-break: normal;
                      overflow-wrap: normal;
                      color: rgb(14, 11, 61);
                      font-family: 'Roboto Mono', monospace;
                      font-size: 1em;
                      line-height: 1.5em;
                      tab-size: 4;
                      hyphens: none;
                    "
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >1</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">form</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >2</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">class</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">ajaxForm</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >3</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">action</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">https://formcarry.com/s/{Your Form ID}</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >4</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">method</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">POST</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >5</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">accept-charset</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">UTF-8</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >6</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">enctype</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">multipart/form-data </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >7</span
                      ><span class="token token" style="color: rgb(114, 20, 255)"></span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >8</span
                      ><span> </span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">input</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">type</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">file</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">name</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">picture</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >9</span
                      ><span> </span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">input</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">type</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">submit</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">value</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">Send</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >10</span
                      ><span></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;/</span><span class="token token" style="color: rgb(20, 99, 255)">form</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >11</span
                      > </span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >12</span
                      ><span></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">script</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">src</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">"</span><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&lt;/</span><span class="token token" style="color: rgb(20, 99, 255)">script</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >13</span
                      ><span></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">script</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >14</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">function</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >15</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">".ajaxForm"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">submit</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">function</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span><span class="token token script language-javascript parameter">e</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >16</span
                      ><span class="token token script language-javascript"> e</span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">preventDefault</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >17</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">var</span
                      ><span class="token token script language-javascript"> href </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">=</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">this</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">attr</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"action"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >18</span
                      ><span class="token token script language-javascript"> $</span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">ajax</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >19</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">type</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"POST"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >20</span
                      ><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">dataType</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"json"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >21</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">url</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> href</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >22</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">data</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">this</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">serialize</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >23</span
                      ><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript function-variable" style="color: rgb(114, 20, 255)">success</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">function</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span><span class="token token script language-javascript parameter">response</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >24</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">if</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span><span class="token token script language-javascript">response</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span><span class="token token script language-javascript">status </span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">==</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"success"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >25</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">alert</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"We received your submission, thank you!"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >26</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">else</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >27</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">alert</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"An error occured: "</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">+</span><span class="token token script language-javascript"> response</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span><span class="token token script language-javascript">message</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >28</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >29</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >30</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >31</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >32</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >33</span
                      ><span class="token token script language-javascript"></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;/</span
                      ><span class="token token" style="color: rgb(20, 99, 255)">script</span><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >34</span
                      ></span
                    ></code
                  >
                </ScrollArea>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="vue" class="w-full">
          <div class="max-w-2xl max-h-xl mt-8">
            <div class="flex flex-col">
              <div class="flex justify-between items-center px-4 mb-6">
                <ul class="flex gap-3">
                  <li class="size-3 rounded-full bg-red-500"></li>
                  <li class="size-3 rounded-full bg-yellow-500"></li>
                  <li class="size-3 rounded-full bg-green-500"></li>
                </ul>
                <Badge>VS Code</Badge>
                <div></div>
              </div>
              <div class="bg-gray-100 rounded-md">
                <ScrollArea class="p-6 h-80 w-full">
                  <code
                    class="language-html flex flex-col"
                    style="
                      text-align: left;
                      white-space: pre;
                      word-spacing: normal;
                      word-break: normal;
                      overflow-wrap: normal;
                      color: rgb(14, 11, 61);
                      font-family: 'Roboto Mono', monospace;
                      font-size: 1em;
                      line-height: 1.5em;
                      tab-size: 4;
                      hyphens: none;
                    "
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >1</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">form</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >2</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">class</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">ajaxForm</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >3</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">action</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">https://formcarry.com/s/{Your Form ID}</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >4</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">method</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">POST</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >5</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">accept-charset</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">UTF-8</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >6</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">enctype</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">multipart/form-data </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >7</span
                      ><span class="token token" style="color: rgb(114, 20, 255)"></span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >8</span
                      ><span> </span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">input</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">type</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">file</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">name</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">picture</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >9</span
                      ><span> </span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">input</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">type</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">submit</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">value</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">Send</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >10</span
                      ><span></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;/</span><span class="token token" style="color: rgb(20, 99, 255)">form</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >11</span
                      > </span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >12</span
                      ><span></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">script</span
                      ><span class="token token" style="color: rgb(20, 99, 255)"> </span><span class="token token" style="color: rgb(57, 173, 181)">src</span
                      ><span class="token token attr-equals" style="color: rgb(57, 173, 181)">=</span><span class="token token" style="color: rgb(57, 173, 181)">"</span
                      ><span class="token token" style="color: rgb(114, 20, 255)">https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">"</span><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&lt;/</span><span class="token token" style="color: rgb(20, 99, 255)">script</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >13</span
                      ><span></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;</span><span class="token token" style="color: rgb(20, 99, 255)">script</span
                      ><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >14</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">function</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >15</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">".ajaxForm"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">submit</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">function</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span><span class="token token script language-javascript parameter">e</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >16</span
                      ><span class="token token script language-javascript"> e</span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">preventDefault</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >17</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">var</span
                      ><span class="token token script language-javascript"> href </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">=</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">this</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">attr</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"action"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >18</span
                      ><span class="token token script language-javascript"> $</span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">ajax</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >19</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">type</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"POST"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >20</span
                      ><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">dataType</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"json"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >21</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">url</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> href</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >22</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript literal-property" style="color: rgb(57, 173, 181)">data</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">$</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">this</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">serialize</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">,</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >23</span
                      ><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript function-variable" style="color: rgb(114, 20, 255)">success</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">:</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">function</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span><span class="token token script language-javascript parameter">response</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >24</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">if</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span><span class="token token script language-javascript">response</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span><span class="token token script language-javascript">status </span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">==</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"success"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >25</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">alert</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"We received your submission, thank you!"</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >26</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">else</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">{</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >27</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">alert</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">(</span
                      ><span class="token token script language-javascript" style="color: rgb(114, 20, 255)">"An error occured: "</span><span class="token token script language-javascript"> </span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">+</span><span class="token token script language-javascript"> response</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">.</span><span class="token token script language-javascript">message</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >28</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >29</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >30</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >31</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >32</span
                      ><span class="token token script language-javascript"> </span><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">}</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">)</span
                      ><span class="token token script language-javascript" style="color: rgb(57, 173, 181)">;</span><span class="token token script language-javascript"> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >33</span
                      ><span class="token token script language-javascript"></span><span class="token token" style="color: rgb(57, 173, 181)">&lt;/</span
                      ><span class="token token" style="color: rgb(20, 99, 255)">script</span><span class="token token" style="color: rgb(57, 173, 181)">&gt;</span><span> </span></span
                    ><span
                      ><span
                        class="linenumber react-syntax-highlighter-line-number"
                        style="display: inline-block; min-width: 17px; padding-right: 1em; text-align: right; user-select: none; color: rgb(170, 191, 201)"
                        >34</span
                      ></span
                    ></code
                  >
                </ScrollArea>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>
</template>
