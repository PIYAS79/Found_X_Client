import Container from '@/src/components/UI/Container'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default layout
