import { onMounted } from 'vue'
import { applyPageMeta, pageMetas } from '@/services/seo.service'

export function usePageMeta(pageKey: keyof typeof pageMetas) {
  onMounted(() => {
    const meta = pageMetas[pageKey]
    if (meta) {
      applyPageMeta(meta)
    }
  })
}
