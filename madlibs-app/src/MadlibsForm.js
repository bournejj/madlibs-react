import React, {useState} from "react";
import useFields from "./hooks";
import "./formStyles.css"
import { Formik, useFormik } from 'formik';

const MadLibsForm = () => {
    
    const [formData, handleChange, resetFormData] = useFields(Formik.initialValues)
    const [answer, setAnswer] = useState('')

// 
    const handleRestart = () => {
        setAnswer("");
    }

  
    const validate = values => {
      const errors = {}
  
      if (!values.noun) {
        errors.noun = 'Required'
      } 
      else if (!values.noun2) {
        errors.noun2 = 'Required'
      } else if (!values.adjective) {
        errors.adjective = 'Required'
      } else if (!values.colour) {
        errors.colour = 'Required'
      }
  
      return errors
    }
    
  
    const formik = useFormik({
  
      initialValues: {
        noun: '',
        noun2: '',
        adjective: '',
        colour: ''
      },
      validate,
      onSubmit: e => {
        
        setAnswer(`There was a ${formik.values.colour} ${formik.values.noun} who loved a ${formik.values.adjective} ${formik.values.noun2} `)
        
    }
        
  
    })
  
    return (
 
            
    <div className="form">
      <h1>Madlibs</h1>
      {answer ? null :
      <form  onSubmit={formik.handleSubmit}>
 
        <label htmlFor="noun1"></label>
  
        <input
        className="input"
          id="noun"
          name="noun"
          type="text"
          placeholder="noun"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.noun}/>
        {formik.touched.noun && formik.errors.noun ? <div className='error'>{formik.errors.noun}</div> : null}
        <label  htmlFor="noun2"></label>
        <input
        className="input"
          id="noun2"
          name="noun2"
          type="text"
          placeholder="noun2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.noun2}/>
        {formik.touched.noun2 && formik.errors.noun2 ? <div className='error'>{formik.errors.noun2}</div> : null}
  
        <label  htmlFor="adjective"></label>
        <input
        className="input"
          id="adjective"
          name="adjective"
          type="text"
          placeholder="adjective"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.adjective}/>
        {formik.touched.adjective && formik.errors.adjective ? <div className='error'>{formik.errors.adjective}</div> : null}
  
        <label  htmlFor="colour"></label>
        <input
       className="input"
          id="colour"
          name="colour"
          type="text"
          placeholder="colour"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.colour}/>
        {formik.touched.colour && formik.errors.colour ? <div className='error'>{formik.errors.colour}</div> : null}
        
        <button className="submit" type="submit">Get Story</button>
      
      </form>
}
<div>
         <form>
         <h3 className='answer'> {answer} </h3>
         {!answer ? null :
    <button className="submit" placeholder="Restart" onClick={handleRestart} >Restart</button>
         }
    </form>  </div> 
    </div>
    )
  }


export default MadLibsForm;