import React, { FC, LazyExoticComponent } from 'react'

export const LazyImportComponent = (props: { lazyChildren: LazyExoticComponent<FC<object>> }) => {
  return (
        // 路由未加载 展示的 页面【避免白屏】
    <React.Suspense fallback={<div className="w-[100vw] h-[100vh] flex justify-center items-center">loading...</div>}>
      <props.lazyChildren />
    </React.Suspense>
  )
}
