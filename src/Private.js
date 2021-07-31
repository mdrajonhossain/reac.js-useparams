import React from 'react';
import {Route, Redirect} from 'react-router-dom';


const Private = ({children, ...rest}) => {
	const isAuth = true;

  return (
      <Route {...rest} render={()=>isAuth ?(children):<Redirect to={'/Login'}/>}/>
  )
}

export default Private;