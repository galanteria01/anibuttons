import React from 'react'
import Material from './Material'

export default {
    title: 'Material',
    component: Material,
}

export const Default = () => (
    <Material child="Hello" />
)

Default.args = {}