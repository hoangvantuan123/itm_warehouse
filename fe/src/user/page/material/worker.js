self.onmessage = function(event) {
    const { type, payload } = event.data;
    
    if (type === 'processData') {
        const result = processData(payload.dataTest, payload.code, payload.quantity);
        self.postMessage({ type: 'processedData', payload: result });
    }
};

function processData(dataTest, code, quantity) {
    const dataIndex = dataTest.findIndex(item => item.code === code);
    
    if (dataIndex === -1) {
        return { error: 'Mã không hợp lệ!' };
    }

    const data = dataTest[dataIndex];
    
    if (quantity > data.quantityRemaining) {
        return { error: `Số lượng nhập vượt quá số lượng còn lại (${data.quantityRemaining})!` };
    }

    dataTest[dataIndex].quantityRemaining -= quantity;
    dataTest[dataIndex].quantityOut += quantity;
    console.log(dataTest[dataIndex].quantityRemaining)  
    return { updatedData: dataTest, processedData: { code, quantity } };
}
