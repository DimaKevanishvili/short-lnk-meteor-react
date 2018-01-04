import React from 'react';
import {Link as ReactLink} from 'react-router-dom'

export default() => {
      return (
            <div className="boxed-view">
                  <div className="boxed-view__box">
                        <h1>404 - Page Not Found</h1>
                        <p>Hmmm, we're unable to find that page</p>
                        <ReactLink className="button button--link" to="/">HEAD HOME</ReactLink>
                  </div>
            </div>
      );
}
