# Vue3 使用 echarts

## 安装依赖, 按需引入

::: code-group

```bash
npm install echarts
```

```bash
yarn add echarts
```

:::

### 按需引入
```ts
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

export default echarts
```

### 全局引入
```ts

import * as echarts from 'echarts'
export default echarts

```

## 封装 useEcharts 方法

> 创建 useEcharts.ts 文件

```ts

import { nextTick, onMounted, onUnmounted, Ref, unref } from 'vue'
import echarts from '@/plugins/echarts'


import { EChartsOption } from 'echarts'

enum ThemeType {
  Light = 'light',
  Dark = 'dark',
  Default = 'default'
}


export default function useCharts(
  elRef: Ref<HTMLDivElement>,
  autoChartSize = false,
  animation: boolean = false,
  theme: ThemeType = ThemeType.Default
) {
  // echarts 实例
  let echartsInstance: echarts.ECharts | null = null

  // 初始化echarts
  const initEcharts = () => {
    const el = unref(elRef)
    if (!el || !unref(el)) {
      return
    }
    echartsInstance = echarts.init(el, theme)
  }

  // 更新/设置配置
  const setOption = (option: EChartsOption) => {
    nextTick(() => {
      if (!echartsInstance) {
        initEcharts()
        if (!echartsInstance) return
      }

      echartsInstance.setOption(option)
      hideLoading()
    })
  }

  // 获取echarts实例
  function getInstance(): echarts.ECharts | null {
    if (!echartsInstance) {
      initEcharts()
    }
    return echartsInstance
  }

  // 更新大小
  function resize() {
    echartsInstance?.resize()
  }

  // 监听元素大小
  function watchEl() {
    // 给元素添加过渡
    if (animation) {
      elRef.value.style.transition = 'width 1s, height 1s'
    }
    const resizeObserver = new ResizeObserver((entries) => resize())
    console.log(elRef.value)
    resizeObserver.observe(elRef.value)
  }

  // 显示加载状
  function showLoading() {
    if (!echartsInstance) {
      initEcharts()
    }
    echartsInstance?.showLoading()
  }

  function hideLoading() {
    if (!echartsInstance) {
      initEcharts()
    }
    echartsInstance?.hideLoading()
  }

  onMounted(() => {
    window.addEventListener('resize', resize)
    console.log(elRef)
    if (autoChartSize) watchEl()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
  })

  return {
    setOption,
    getInstance,
    showLoading,
    hideLoading,
  }
}

```


## 在文件中使用 useEcharts 方法
```html

<script setup lang="ts">
import { Ref } from 'vue'
import useCharts from '@/utils/useEcharts'
import { EChartsOption } from "echarts";
const echartsLearnEl = ref<HTMLDivElement | null>(null)
import { option } from '@/views/homepage/childComps/branchLearning/data'

const { setOption, showLoading } = useCharts(echartsLearnEl as Ref<HTMLDivElement>, true, false)

onMounted(() => {
  showLoading()
  setOption(option as EChartsOption)
})
</script>

<template>
  <div ref="echartsLearnEl" :style="{ width: `32%`, height: `400px` }"></div>
</template>

<style scoped lang="scss"></style>

```

