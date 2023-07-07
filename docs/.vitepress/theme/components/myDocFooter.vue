<script setup lang="ts">
import { computed, inject, Ref } from 'vue'
import { useRoute } from 'vitepress'

const DEV = inject('DEV') as Ref<boolean>

const route = useRoute()

const pageId = computed(() => route.path.replace('/my-blog', ''))
</script>

<template>
	<div class="copyright">
		<img
			v-if="!DEV"
			class="access_number"
			:src="`https://visitor-badge.laobi.icu/badge?page_id=annanLv.myblog.${pageId}`"
			title="当前页累计访问数"
			onerror="this.style.display='none'"
		/>
		Copyright © 2019-present annanLv
	</div>
</template>

<style scoped>
.copyright {
  margin-top: 12px;
  border-top: 1px solid var(--vp-c-gutter);
  padding: 13px 10px;
  background-color: var(--vp-c-bg);
}

.access_number {
  margin-right: 8px;
}

@media (max-width: 414px) {
  .access_number {
    display: none;
  }
}
</style>
