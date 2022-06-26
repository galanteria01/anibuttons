import Flat from './Flat'

export default {
    title: 'Flat',
    component: Flat,
}

export const Default = (args: any) => (
    <Flat
        children="Hello"
    />
)

Default.args = {}