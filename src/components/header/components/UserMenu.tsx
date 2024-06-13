"use client";

import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const items: MenuProps["items"] = [
    {
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                Information
            </a>
        ),
        key: "0",
    },
    {
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                Setting
            </a>
        ),
        key: "1",
    },
    {
        type: "divider",
    },
    {
        label: "Log out",
        key: "3",
    },
];

type UserMenuType = {
    username: string;
};
function UserMenu({ username }: UserMenuType) {
    return (
        <div>
            <Dropdown menu={{ items }} placement="bottomLeft">
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <UserOutlined />
                        {username}
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
}

export default UserMenu;
