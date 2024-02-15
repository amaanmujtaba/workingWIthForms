export default function Login() {
  function handleSubmit(event){
    event.preventDefault();
    console.log("Submit button clicekd");

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required minLength={6} />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type ="submit" className="button">Login</button>
      </p>
    </form>
  );
}
