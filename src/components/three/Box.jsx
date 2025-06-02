// Cube.jsx
import React, { forwardRef } from 'react';

const Box = forwardRef(({ position }, ref) => (
    <mesh ref={ref} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" metalness={1} roughness={0.5} />
    </mesh>
));

export default Box;
