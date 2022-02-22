import React from 'react'
import Outlined from './Outlined'

export default {
    title: 'Outlined',
    component: Outlined,
}

export const Default = (args: any) => (
    <Outlined children="Hello" />
)

Default.args = {}