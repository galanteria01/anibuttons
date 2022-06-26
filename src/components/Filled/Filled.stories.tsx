import React from 'react'
import Filled from './Filled'

export default {
    title: 'Filled',
    component: Filled,
}

export const Default = (args: any) => (
    <Filled children="Hello" />
)

Default.args = {}