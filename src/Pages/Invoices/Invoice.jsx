import React from 'react';

const Invoice = () => {
    const {
        invoiceNumber,
        invoiceDate,
        dueDate,
        sender,
        recipient,
        items,
        taxRate,
        notes,
    } = invoiceData;

    const calculateSubtotal = () =>
        items.reduce((total, item) => total + item.quantity * item.price, 0);

    const calculateTax = () => (calculateSubtotal() * taxRate) / 100;

    const calculateTotal = () => calculateSubtotal() + calculateTax();
    return (
        <div>
            <div className="p-6 bg-white shadow rounded-md max-w-4xl mx-auto">
                {/* Header */}
                <div className="border-b pb-4 mb-6">
                    <h1 className="text-2xl font-bold">Invoice</h1>
                    <p className="text-gray-600">Invoice #: {invoiceNumber}</p>
                    <p className="text-gray-600">Date: {invoiceDate}</p>
                    <p className="text-gray-600">Due Date: {dueDate}</p>
                </div>

                {/* Sender and Recipient */}
                <div className="flex justify-between mb-6">
                    <div>
                        <h2 className="text-lg font-bold">From:</h2>
                        <p>{sender.name}</p>
                        <p>{sender.address}</p>
                        <p>{sender.email}</p>
                        <p>{sender.phone}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">To:</h2>
                        <p>{recipient.name}</p>
                        <p>{recipient.address}</p>
                        <p>{recipient.email}</p>
                        <p>{recipient.phone}</p>
                    </div>
                </div>

                {/* Itemized Details */}
                <table className="w-full text-left border-collapse mb-6">
                    <thead>
                        <tr className="border-b">
                            <th className="py-2 px-4">Item</th>
                            <th className="py-2 px-4">Quantity</th>
                            <th className="py-2 px-4">Price</th>
                            <th className="py-2 px-4">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-2 px-4">{item.name}</td>
                                <td className="py-2 px-4">{item.quantity}</td>
                                <td className="py-2 px-4">${item.price.toFixed(2)}</td>
                                <td className="py-2 px-4">
                                    ${(item.quantity * item.price).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Summary */}
                <div className="text-right mb-6">
                    <p className="text-lg">
                        Subtotal: <span className="font-bold">${calculateSubtotal().toFixed(2)}</span>
                    </p>
                    <p className="text-lg">
                        Tax ({taxRate}%): <span className="font-bold">${calculateTax().toFixed(2)}</span>
                    </p>
                    <p className="text-xl font-bold">
                        Total: <span>${calculateTotal().toFixed(2)}</span>
                    </p>
                </div>

                {/* Notes */}
                {notes && (
                    <div className="mt-6">
                        <h2 className="text-lg font-bold">Notes:</h2>
                        <p className="text-gray-600">{notes}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Invoice;