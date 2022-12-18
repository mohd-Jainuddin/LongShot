import React from 'react'
import data from './data'

const Table = () => {
  return (
    <>
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>{data.columnNames[0]}</th>
              <th>{data.columnNames[2]}</th>
              <th>{data.columnNames[1]}</th>
              <th>{data.columnNames[7]}</th>
              <th>{data.columnNames[3]}</th>
              <th>{data.columnNames[4]}</th>
              <th>{data.columnNames[5]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.raw_broadmatch_data[0][0]}</td>
              <td className='tdc'>c</td>
              <td>{data.raw_broadmatch_data[0][1]}</td>
              <td>{data.raw_broadmatch_data[0][7]}</td>
              <td>{data.raw_broadmatch_data[0][3]}</td>
              <td>{data.raw_broadmatch_data[0][4]}</td>
              <td>{data.raw_broadmatch_data[0][5]}</td>
              {/* {data.raw_broadmatch_data.map((item, index) => {
                return <td>{item[index]}</td>;
              })} */}
            </tr>
            <tr>
              <td>{data.raw_broadmatch_data[1][0]}</td>
              <td className='tdi'>i</td>
              <td>{data.raw_broadmatch_data[1][1]}</td>
              <td>{data.raw_broadmatch_data[1][7]}</td>
              <td>{data.raw_broadmatch_data[1][3]}</td>
              <td>{data.raw_broadmatch_data[1][4]}</td>
              <td>{data.raw_broadmatch_data[1][5]}</td>
              {/* {data.raw_broadmatch_data.map((item, index) => {
                return <td>{item[index]}</td>;
              })} */}
            </tr>
            <tr>
              <td>{data.raw_broadmatch_data[2][0]}</td>
              <td className="tdc">c</td>
              <td>{data.raw_broadmatch_data[2][1]}</td>
              <td>{data.raw_broadmatch_data[2][7]}</td>
              <td>{data.raw_broadmatch_data[2][3]}</td>
              <td>{data.raw_broadmatch_data[2][4]}</td>
              <td>{data.raw_broadmatch_data[2][5]}</td>
            </tr>
            <tr>
              <td>{data.raw_broadmatch_data[3][0]}</td>
              <td className="tdc">c</td>
              <td>{data.raw_broadmatch_data[3][1]}</td>
              <td>{data.raw_broadmatch_data[3][7]}</td>
              <td>{data.raw_broadmatch_data[3][3]}</td>
              <td>{data.raw_broadmatch_data[3][4]}</td>
              <td>{data.raw_broadmatch_data[3][5]}</td>
            </tr>
            <tr>
              <td>{data.raw_broadmatch_data[4][0]}</td>
              <td className="tdc">c</td>
              <td>{data.raw_broadmatch_data[4][1]}</td>
              <td>{data.raw_broadmatch_data[4][7]}</td>
              <td>{data.raw_broadmatch_data[4][3]}</td>
              <td>{data.raw_broadmatch_data[4][4]}</td>
              <td>{data.raw_broadmatch_data[4][5]}</td>
            </tr>
            <tr>
              <td>{data.raw_broadmatch_data[5][0]}</td>
              <td className="tdc">c</td>
              <td>{data.raw_broadmatch_data[5][1]}</td>
              <td>{data.raw_broadmatch_data[5][7]}</td>
              <td>{data.raw_broadmatch_data[5][3]}</td>
              <td>{data.raw_broadmatch_data[5][4]}</td>
              <td>{data.raw_broadmatch_data[5][5]}</td>
            </tr>
            <tr>
              <td>{data.raw_broadmatch_data[6][0]}</td>
              <td className="tdc">c</td>
              <td>{data.raw_broadmatch_data[6][1]}</td>
              <td>{data.raw_broadmatch_data[6][7]}</td>
              <td>{data.raw_broadmatch_data[6][3]}</td>
              <td>{data.raw_broadmatch_data[6][4]}</td>
              <td>{data.raw_broadmatch_data[6][5]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table