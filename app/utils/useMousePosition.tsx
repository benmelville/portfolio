'use client';
import { useEffect } from 'react';
import styles from './style.module.css';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
    const cursorSize = 40;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = {damping: 30, stiffness: 250, mass: 1.5};

    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const updateMousePosition = (e: MouseEvent) => {
        const { clientX, clientY} = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    }

    useEffect( () => {
        window.addEventListener('mousemove', updateMousePosition)
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        }
    })

    return (
        <motion.div 
            className={styles.cursor}
            style={{left: smoothMouse.x, top: smoothMouse.y}}>
                <div className={styles.boxwork}>

                </div>
        </motion.div>
    )
}