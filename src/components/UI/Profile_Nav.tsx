"use client"

import { Avatar } from '@nextui-org/avatar'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Profile_Nav = () => {


    const route = useRouter()

    const handleRoute = (path: string) => {
        route.push(path);
    }



    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Avatar className='cursor-pointer' src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem onClick={() => handleRoute('/profile')}>Profile</DropdownItem>
                    <DropdownItem onClick={() => handleRoute('/profile/about')}>About</DropdownItem>
                    <DropdownItem onClick={() => handleRoute('/profile/claim-requests')} >Item Request</DropdownItem>
                    <DropdownItem onClick={() => handleRoute('/profile/create-post')} >Post Item</DropdownItem>
                    <DropdownItem onClick={() => handleRoute('/profile/setting')} >Setting</DropdownItem>
                    <DropdownItem onClick={() => handleRoute('/profile/logout')} className="text-danger" color="danger">
                        Logout
                    </DropdownItem>

                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default Profile_Nav
