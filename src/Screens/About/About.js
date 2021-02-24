import React, { Fragment } from 'react';

function About() {
  return (
    <Fragment>
        <h1>This page is a demonstration of using Google's firebase.</h1>

        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
    </Fragment>
  );
}

export default About;
