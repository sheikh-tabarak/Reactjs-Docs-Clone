import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
      <> 
      <div className='sidebar'>
          <details>
<summary className='sidebar-toggles'>INSTALLATION</summary>
<div className='sidebar-item'><a href='#'>Getting Started</a></div>
<div className='sidebar-item'><a href='#'>Add React to a Website</a></div>
<div className='sidebar-item'><a href='#'>Create a New React App</a></div>
<div className='sidebar-item'><a href='#'>CDN Links</a></div>
<div className='sidebar-item'><a href='#'>Release Channels</a></div>
</details>

<details>
<summary className='sidebar-toggles'>MAIN CONCEPTS</summary>
<div className='sidebar-item'><a href='#'>1. Hello World</a></div>
<div className='sidebar-item'><a href='#'>2. Introducing JSX</a></div>
<div className='sidebar-item'><a href='#'>3. Rendering Elements</a></div>
<div className='sidebar-item'><a href='#'>4. Components and Props</a></div>
<div className='sidebar-item'><a href='#'>5. State and Lifecycle</a></div>
<div className='sidebar-item'><a href='#'>6. Handling Events</a></div>
<div className='sidebar-item'><a href='#'>7. Conditional Rendering</a></div>
<div className='sidebar-item'><a href='#'>8. Lists and Keys</a></div>
<div className='sidebar-item'><a href='#'>9. Forms</a></div>
<div className='sidebar-item'><a href='#'>10. Lifting State Up</a></div>
<div className='sidebar-item'><a href='#'>11. Composition vs Inheritance</a></div>
<div className='sidebar-item'><a href='#'>12. Thinking In React</a></div>
</details>


<details>
<summary className='sidebar-toggles'>ADVANCED GUIDES</summary>
<div className='sidebar-item'><a href='#'>Accessibility</a></div>
<div className='sidebar-item'><a href='#'>Code-Splitting</a></div>
<div className='sidebar-item'><a href='#'>Context</a></div>
<div className='sidebar-item'><a href='#'>Error Boundaries</a></div>
<div className='sidebar-item'><a href='#'>Forwarding Refs</a></div>
</details>





</div>

      
      </>
   
  )
}
