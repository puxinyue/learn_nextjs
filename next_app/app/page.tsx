import React from 'react'
//缓存测试
const getData = async () => {
  const { signal } = new AbortController() // 退出缓存记忆，这样每次请求返还的数据都会不一样
  const res = await fetch('http://rap2api.taobao.org/app/mock/273986/example/1608694987892', {
    signal,
  })
  const data = await res.json()
  return data
}
export default async function page() {
  const data = await getData()
  const data2 = await getData()
  const data3 = await getData()
  console.log('🔥')
  return (
    <div>
      <div>{data.string}</div>
      <div>{data2.string}</div>
      <div>{data3.string}</div>
    </div>
  )
}
