import  { useState, useCallback, useEffect } from 'react';
import { Modal, Button, Input, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

export default function ModalHelpMenu({ openHelp, setOpenHelp, searchResultsHelp, onSelectRow , inputHelp}) {

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
        onSelectRow(record);  
        setOpenHelp(false);   
    };
console.log('inputHelp' , inputHelp)
useEffect(() => {
  // Giả sử chúng ta muốn làm gì đó khi inputHelp thay đổi, ví dụ như lọc kết quả tìm kiếm
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
                {/* Thêm phần tìm kiếm */}
                <Search
                    placeholder="Tìm kiếm theo Key hoặc Label"
                    onSearch={(value) => {
                    }}
                    onChange={(e) => {
                      setInputHelp(e.target.value); // Cập nhật giá trị khi người dùng nhập
                    }}
                    value={inputHelp}
                    enterButton={<SearchOutlined />}
                    style={{ marginBottom: 20 }}
                />

                {/* Bảng kết quả tìm kiếm */}
                <Table
                    columns={columns}
                    dataSource={searchResultsHelp}
                    rowKey="Key"
                    onRow={(record) => ({
                        onClick: () => handleRowClick(record),
                    })}
                    pagination={false} // Tắt phân trang nếu muốn hiển thị tất cả
                />
            </div>

            <div className="flex justify-end gap-4">
                <Button onClick={() => setOpenHelp(false)}>Cancel</Button>
            </div>
        </Modal>
    );
}
