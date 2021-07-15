import React, { useState } from "react"
import s from './Pagination.module.scss'


const Pagination = ({ totalItems, pageSize, onPageChange, currentPage, portionSize = 10 }) => {

    const pagesCount = Math.ceil(totalItems / pageSize)
    const pages = []


    for (let p = 1; p <= pagesCount; p++) {
        pages.push(p)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = portionNumber * portionSize
    return (

        < div className={s.pages} >
            <button onClick={() => { setPortionNumber(1) }}>1</button>
            <button className={s.pagination__btns} onClick={() => { setPortionNumber(portionNumber - 1) }} disabled={portionNumber === 1} >Prev</button>
            {
                pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map(p => {
                        return <span className={s.pageNumber + ' ' + (currentPage === p && s.active)}
                            onClick={(e) => onPageChange(p)} key={p}>{p}</span>
                    })
            }
            <button className={s.pagination__btns} onClick={() => { setPortionNumber(portionNumber + 1) }} disabled={portionCount === portionNumber}>Next</button>
            <button onClick={() => { setPortionNumber(portionCount) }}>{portionCount}</button>
        </ div >
    )
}

export default Pagination