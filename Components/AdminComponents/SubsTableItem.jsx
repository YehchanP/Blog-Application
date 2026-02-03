import React from 'react'

const SubsTableItem = ({email,date,deleteSub}) => {
    const EmailDate = new Date(date);
  return (
    <tr className='bg-white border-b text-left'>
        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email?email:"No Email Found"}
        </th>
        <td className='px-6 py-4 hidden sm:block'>
            {EmailDate.toDateString()}
        </td>
        <td className='px-6 py-4 cursor-pointer'>
            X
        </td>
    </tr>
  )
}

export default SubsTableItem