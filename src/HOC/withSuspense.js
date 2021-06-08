import React from "react"
import { Suspense } from "react"



export const withSuspense = (Component) => {
    return (props) => {

        return <Suspense fallback={<h1>Загрузка...</h1>}>
            <Component {...props} />
        </Suspense>
    }

}