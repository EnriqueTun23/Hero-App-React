import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreenn = () => {
    return (
        <div>
            <h1>DC screen</h1>
            <hr />
            <HeroList publisher='DC Comics' />
        </div>
    )
}
