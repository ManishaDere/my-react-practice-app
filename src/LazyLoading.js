import React, { lazy, Suspense, useState } from 'react';

const PreviewComponent = lazy(() => import('./Preview'));

const Loading = () => {
    return <h3>Loading...</h3>
}
const LazyLoading = () => {
    const [showPreview, setShowPreview] = useState(false);
  return (
    <div>
        <input type='checkbox' checked={showPreview} onChange={(e) => setShowPreview(e.target.checked)} /> Show Preview
        {showPreview && <Suspense fallback={<Loading />}>
            <PreviewComponent />
        </Suspense>}
    </div>
  )
}

export default LazyLoading