<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>Hello World</title>

  <script src="https://unpkg.com/react@latest/umd/react.development.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@latest/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@latest/babel.min.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div id="root"></div>
  <script type="text/babel">
    const age = '';
    const isSubmit = true;
    const handleSubmit = ev => {
      console.log(ev);
    }
    ReactDOM.render(
      <div className="App">
        <header className="App-header">
          <form>
            <div className="d-flex">
              <input name='field-1' type="text" onChange={e => setName(e.target.value)} value={name} placeholder="Name" />
              <input name='field-2' type="text" className="m-l-10" onChange={e => setAge(e.target.value)} value={age} placeholder="Age" />
              {isSubmit ? <button type="button" className="m-l-10" onClick={e => { handleSubmit(e) }}> submit</button> : <button type="button" className="m-l-10" onClick={e => { updateRow(e) }}> update</button>}
              <button type="button" className="m-l-10" onClick={e => { clearData(e) }}> clear</button>
            </div>
          </form>
        </header>
      </div>,
      document.getElementById('root')
    );

  </script>
</body>

</html>