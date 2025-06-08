import { sleep } from '@/app/utils'
import React from 'react'
// 强制动态渲染
export const dynamic = 'force-dynamic'
export default async function page() {
  await sleep(3000)
  return <div>新闻：{new Date().toLocaleString()}</div>
}
