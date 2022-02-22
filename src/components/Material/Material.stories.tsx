import React from 'react'
import Material from './Material'

export default {
    title: 'Material',
    component: Material,
}

export const Default = (args: any) => (
    <Material
        children="Hello"
    />
)

const Primary = (args: any) => (
    <Material
        type="primary"
        children="Hello"
    />
)

const Secondary = (args: any) => (
    <Material
        type="secondary"
        children="Hello"
    />
)

Default.args = {}

export const isPrimary = Primary.bind({})
Primary.args = {
    type: 'primary',
}

export const isSecondary = Secondary.bind({})
Secondary.args = {
    type: 'secondary',
}