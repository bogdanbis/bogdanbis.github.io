"use client"

import { Typewriter } from "react-simple-typewriter";

export default function CleanSoftwareTypewriter() {
    return (
        <Typewriter
            words={["Clean. Fast. Reliable.", "Software."]}
            cursor={true}
            cursorBlinking={false}
            cursorStyle={'_'}
            delaySpeed={2500}
        />
    )
}
