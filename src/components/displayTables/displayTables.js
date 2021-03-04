import React, { useState, useEffect } from 'react';
import { parseISO, differenceInCalendarDays, format } from 'date-fns';
import './displayTables.sass'
const {FormatData} = require('../../util/formatData')


function displayTables (bookings, filterVal) {

    if(bookings === undefined)
        return;

    return (
        bookings.map(item => {
            return (
                <section className="seller">
                    <h2>{item.name} ({item.data.length})</h2>
                    {
                    (item.data.length === 0) ? <div className="noBookings">No active bookings.</div> :
                    (<table>
                        <thead>
                            <tr>
                                <th scope="col" className="left">ID</th>
                                <th scope="col" className="left">Product Name</th>
                                <th scope="col" className="center">Start Date</th>
                                <th scope="col" className="center">End Date</th>
                                <th scope="col" className="center"># Days</th>
                                <th scope="col" className="right">Quantity</th>
                                <th scope="col" className="right">Rate</th>
                                <th scope="col" className="right">Cost</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th scope="row" colSpan="5" className="totals">Totals</th>
                                <th className="right">{FormatData(item.data.map( el => el.quantity).reduce((accumulator, currentValue) =>
                                {return accumulator + currentValue }, 0))}</th>
                                <th className="right">{FormatData(item.data.map( el => el.rate).reduce((accumulator, currentValue) =>
                                {return accumulator + currentValue }, 0), "currency")}</th>
                                <th className="right">{FormatData(item.data.map( el => el.cost).reduce((accumulator, currentValue) =>
                                {return accumulator + currentValue }, 0), "currency")}</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                item.data.map(item => {
                                    return(
                                        <tr className={(item.live)? 'live' : ''}>
                                            <td className="id left">
                                                {item.id}
                                            </td>
                                            <td className="left">
                                                {item.productName}
                                            </td>
                                            <td className="center">
                                                {format(parseISO(item.startDate), 'dd/MM/yy')}
                                            </td>
                                            <td className="center">
                                                {format(parseISO(item.endDate), 'dd/MM/yy')}
                                            </td>
                                            <td className="center">
                                                {differenceInCalendarDays(parseISO(item.endDate),parseISO(item.startDate))}
                                            </td>
                                            <td className="right">
                                               {FormatData(item.quantity)}
                                            </td>
                                            <td className="right">
                                               {FormatData(item.rate, "currency")}
                                            </td>
                                            <td className="right">
                                               {FormatData(item.cost, "currency")}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>)
        }
                </section>
            )
        })
        
        
    )
}

export default displayTables;