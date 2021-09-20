import React, { useState, useEffect } from 'react';
import { useQuery } from "../hooks/useQuery";
import { postConfirmLinePayDonateOrder } from "../modules/busker";
export const LinePayDonatePage = () => {
    const query = useQuery();
    useEffect(() => {
        const fetchData = async () => {
            const transactionId = query.get('transactionId')
            const orderId = query.get('orderId')
            if (transactionId && orderId) {
                const result = await postConfirmLinePayDonateOrder({ transactionId, orderId })

            }

        }
        fetchData()


    }, [])
    return (
        <>
            linePayDonate
        </>
    )
}