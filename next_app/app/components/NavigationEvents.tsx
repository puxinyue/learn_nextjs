'use client'

import { useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    // 刷新页面 强制清除路由跳转缓存
    router.refresh()
  }, [pathname, searchParams])

  return null
}