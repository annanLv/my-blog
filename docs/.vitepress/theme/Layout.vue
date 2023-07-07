<script setup>
import { useData } from "vitepress";

const { page, frontmatter, theme } = useData()

import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme

</script>

<template>
  <Layout>
	  <template #doc-after>
		  <!-- <div class="donation">
        <div>
          <img src="/mianfeiwucan-weixin.png" alt="img" />
          <img src="/mianfeiwucan-alipay.png" alt="img" />
          <img src="/mianfeiwucan-sina.png" alt="img" />
        </div>
      </div> -->
		  <div class="giscus">
			  <Giscus
				  :key="giscus"
				  host="https://giscus.app"
				  repo="plantree/press-comment"
				  repoId="R_kgDOIDNWUg"
				  category="General"
				  categoryId="DIC_kwDOIDNWUs4CRlY7"
				  :theme="isDark ? 'dark' : 'light'"
				  lang="zh-CN"
				  loading="lazy"
				  strict="1"
				  mapping="title"
				  crossorigin="anonymous"
			  />
		  </div>
    </template>
  </Layout>
</template>

<style scoped>

</style>