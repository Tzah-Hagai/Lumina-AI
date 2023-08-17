"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("70a3dc0f-4a17-4b9f-9fc7-4f4da5df6abe");
    }, [])

    return null;
}