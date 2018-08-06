<h1>React Unit Testing Notes</h1>
<section>
  <h3>Using Redux with React</h3>
  <ul>
    <li>When using Redux with React your test will fail intially</li>
    <li>The reason being is because in the test environment you are often rendering the component in isolation. So, when you
      run the test and it is connected to the store, it can't find the store and thus throws an error.
    </li>
    <li>
      One solution to fix this issue is to create a file and in that file import provider, store, and the reducer.  This 
      component will then return Provider tag with prop.children in the body.  That way we can just provide a store to 
      any componenent by importing it and wrapping it in this component.
    </li>
  </ul>
</section>