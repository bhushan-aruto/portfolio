// "use client"

// import { Suspense, lazy } from "react"
// const Spline = lazy(() => import("@splinetool/react-spline"))

// interface SplineSceneProps {
//     scene: string
//     className?: string
// }

// export function SplineScene({ scene, className }: SplineSceneProps) {
//     return (
//         <Suspense
//             fallback={
//                 <div className="w-full h-full flex items-center justify-center bg-blue-50">
//                     <div className="text-center">
//                         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-2"></div>
//                         <span className="text-blue-600 font-medium">Loading 3D Scene...</span>
//                     </div>
//                 </div>
//             }
//         >
//             <Spline scene={scene} className={className} />
//         </Suspense>
//     )
// }


"use client"
import { Suspense, lazy } from "react"

const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center bg-sky-50">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto mb-2"></div>
                        <span className="text-sky-600 font-medium">Loading 3D Scene...</span>
                    </div>
                </div>
            }
        >
            <Spline scene={scene} className={className} />
        </Suspense>
    )
}
