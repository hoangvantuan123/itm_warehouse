import { useState, useCallback, useEffect } from 'react';
import { Modal, Button, Input, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;
const dataSearch = [
    { Key: 'A01', Label: 'Menu 1', Link: '/menu1', Type: 'Type1' },
    { Key: 'A02', Label: 'Menu 2', Link: '/menu2', Type: 'Type2' },
    { Key: 'A03', Label: 'Menu 3', Link: '/menu3', Type: 'Type3' },
];
export default function ModalHelpMenu({ openHelp, setOpenHelp, searchResultsHelp, setOnSelectRow, inputHelp }) {

    const columns = [
        {
            title: 'Key',
            dataIndex: 'Key',
            key: 'Key',
        },
        {
            title: 'Label',
            dataIndex: 'Label',
            key: 'Label',
        },
        {
            title: 'Link',
            dataIndex: 'Link',
            key: 'Link',
        },
        {
            title: 'Type',
            dataIndex: 'Type',
            key: 'Type',
        },
    ];

    const handleRowClick = (record) => {
        setOnSelectRow(record);
        setOpenHelp(false);
    };
    useEffect(() => {
        console.log('Updated inputHelp:', inputHelp);
    }, [inputHelp]);

    return (
        <Modal
            width="80%"
            open={openHelp}
            closable={false}
            footer={null}
            centered={true}
        >
            <div
                style={{ display: 'flex', flexDirection: 'column', height: '75vh' }}
                className="gap-4"
            >
                <Search
                    placeholder="Tìm kiếm theo Key hoặc Label"
                    onSearch={(value) => {
                    }}

                    value={inputHelp}
                    enterButton={<SearchOutlined />}
                    style={{ marginBottom: 20 }}
                />

                <Table
                    columns={columns}
                    rowKey="Key"
                    dataSource={dataSearch}
                    onRow={(record) => ({
                        onClick: () => handleRowClick(record),
                    })}
                    pagination={false}
                />
            </div>

            <div className="flex justify-end gap-4">
                <Button onClick={() => setOpenHelp(false)}>Cancel</Button>
            </div>
        </Modal>
    );
}
