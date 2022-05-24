import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
function Singleblog(prop) {
  return (
    <>
          <tr >
            <td>{prop.writerName}</td>
            <td>{prop.date}</td>
            <td>{prop.minutes}</td>
            <td>{prop.title}</td>
            <td className="text-right" >
              <div className="actions" style={{display:"flex",justifyContent:"space-betweens"}}>
              <Link to={`/blog/edit/${prop.id}`}> <Button size="small" variant="contained"  className='uni-edit-btn'>View blog </Button></Link>
             
              </div>
        </td>
        </tr>
    </>
  )
}

export default Singleblog