import React from 'react'
import './ContentArea.css'


export default function ContentArea(props) {
  return (
      
    <div className='content-area'>
        <div className='main-content'>
        
        <h1 className='title'>
        Getting Started
        </h1>

        <h3 className='sub-title'>
        This page is an overview of the React documentation and related resources.
        </h3>

        <p className='paragraph'>
        <strong>React</strong> is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.
        </p>


        <h1 className='title-2'>
        Try React
        </h1>


        <p className='paragraph'>
        React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started
        </p>

        <h1 className='title-3'>
        Online Playgrounds

        </h1>

        <p className='paragraph'>
        If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.
<br/><br/>
If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

</p>

<h1 className='title-3'>
Add React to a Website

        </h1>

        <p className='paragraph'>
        You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.
</p>


<h1 className='title-3'>
Create a New React App

        </h1>

        <p className='paragraph'>
        When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!
<br/><br/>
As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.
</p>

        

        </div>
    </div>
  )
}
