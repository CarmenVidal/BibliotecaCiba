import React from 'react'

function formulario() {
  return (
    // <div>formulario</div>
   <form className='formulario'>
    <label>
        Title:
        <input type="title" name="title" />
        <br />

    </label>
        ImageUrl:
    <input type="img" name ="img" />

 </form>

)
}

export default formulario