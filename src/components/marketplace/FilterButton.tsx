"use client"

import React from 'react'
import Button from '../ui/Button'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { useFilterModalStore } from '@/store/useFilterModalStore'

export default function FilterButton() {

    const {open} = useFilterModalStore();

    return (
        <Button 
            onClick={open}
            variant="outline" 
            icon={<HiOutlineAdjustmentsHorizontal 
            size={20} />}   
        >
            Filter
        </Button>
    )
}
